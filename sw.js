// Service worker của Học tiếng Trung (scope ./). Đổi VERSION mỗi lần đưa bản mới lên → app hiện thanh "Có bản mới · Tải lại".
// - Vỏ app (SHELL) cài sẵn khi install → mở được khi mất mạng.
// - Trang .html: mạng trước, rớt mạng (hoặc mạng treo quá 3,5 giây) mới lấy cache (có mạng tốt luôn thấy bản mới).
// - .js / font / ảnh / dữ liệu: cache trước + làm mới nền (stale-while-revalidate), lưu dần file đã mở (map/ lessons/ exams/ expand/ dict/), giữ qua lần đổi VERSION.
// - Audio / video / yêu cầu có Range: KHÔNG chặn, không cache (để trình duyệt tự tua; không lưu phản hồi 206).
var VERSION = "2026-10-27a";
var CACHE = "hoctrung-" + VERSION;
var DECKS = ["chao-hoi", "an-uong", "di-lai", "hoi-duong", "mua-sam", "khach-san", "san-bay-du-lich",
  "thoi-tiet-thoi-gian", "tam-chuyen", "suc-khoe", "dien-thoai-thanh-toan", "nha-cua-sinh-hoat"];
var SHELL = ["index.html", "manifest.webmanifest",
  "fonts/bevietnampro-light.woff2", "fonts/bevietnampro-regular.woff2", "fonts/bevietnampro-semibold.woff2",
  "fonts/playfair.woff2", "fonts/playfair-italic.woff2", "fonts/wenkai.woff2",
  "exams/index.js", "lessons/index.js", "map/index.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-180.png", "icons/favicon-32.png"
].concat(DECKS.map(function (d) { return "decks/" + d + ".js"; }));
// đuôi file được cache dần (cái khác — mp3, pdf, pptx… — đi thẳng mạng)
var CACHE_EXT = /\.(js|json|css|woff2?|ttf|otf|png|jpe?g|gif|webp|svg|ico|webmanifest|txt)$/i;
// file lưu dần (bài, cấp, đề, mở rộng, từ điển): giữ qua lần đổi VERSION để bản mới vẫn mở được khi mất mạng (SWR tự làm mới)
var LAZY = /\/(lessons|map|exams|expand|dict)\/[^\/?#]+\.js$/;
// mạng chập chờn (bắt được kết nối mà không có dữ liệu): chờ trang tối đa chừng này rồi mở bản trong cache
var NET_WAIT = 3500;
function noop() {}

self.addEventListener("install", function (e) {
  // index.html bắt buộc; file khác lỗi lẻ thì bỏ qua (lần mở sau sẽ được lưu dần). Không skipWaiting: chờ người học bấm Tải lại.
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.add("index.html").then(function () {
      return Promise.all(SHELL.slice(1).map(function (u) { return c.add(u).catch(function () {}); }));
    });
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    var old = keys.filter(function (k) { return k.indexOf("hoctrung-") === 0 && k !== CACHE; });
    return caches.open(CACHE).then(function (c) {
      return Promise.all(old.map(function (k) { // chép file lưu dần sang cache mới (chưa có mới chép), rồi xóa cache cũ
        return caches.open(k).then(function (o) {
          return o.keys().then(function (reqs) {
            return Promise.all(reqs.filter(function (q) { return LAZY.test(new URL(q.url).pathname); }).map(function (q) {
              return c.match(q).then(function (have) { return have || o.match(q).then(function (r) { return r && c.put(q, r); }); }).catch(noop);
            }));
          });
        }).catch(noop).then(function () { return caches.delete(k); });
      }));
    });
  }).then(function () { return self.clients.claim(); }));
});

// trang bấm "Tải lại" → bản mới vào thay ngay
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "skip") self.skipWaiting();
});

// chỉ lưu phản hồi đầy đủ (200) cùng nguồn — không lưu 206 / lỗi / opaque
function storable(res) { return res && res.status === 200 && res.type === "basic"; }

function networkFirst(e, req) {
  var net = fetch(req).then(function (res) {
    if (storable(res)) {
      var copy = res.clone();
      e.waitUntil(caches.open(CACHE).then(function (c) { return c.put(req.url.split("#")[0], copy); }).catch(noop));
    }
    return res;
  });
  e.waitUntil(net.catch(noop)); // trả bản cache vì mạng chậm: mạng vẫn chạy tiếp để cập nhật cache
  function cached() {
    return caches.open(CACHE).then(function (c) {
      return c.match(req, { ignoreSearch: true }).then(function (hit) { return hit || c.match("index.html"); });
    }).catch(noop);
  }
  return new Promise(function (resolve) {
    var done = false;
    function give(res) { if (!done) { done = true; resolve(res); } }
    // quá NET_WAIT mà có bản cache → mở ngay; không có thì chờ mạng tiếp
    var timer = setTimeout(function () { cached().then(function (hit) { if (hit) give(hit); }); }, NET_WAIT);
    net.then(function (res) { clearTimeout(timer); give(res); }, function () {
      clearTimeout(timer);
      cached().then(function (hit) { give(hit || Response.error()); });
    });
  });
}

function staleWhileRevalidate(e, req) {
  return caches.open(CACHE).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        // lưu nền, không chờ: put lỗi (hết bộ nhớ…) không làm hỏng lượt tải đã về 200
        if (storable(res)) e.waitUntil(c.put(req, res.clone()).catch(noop));
        return res;
      });
      if (hit) { e.waitUntil(net.catch(function () {})); return hit; }
      return net;
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  if (req.headers.has("range")) return; // tua audio: để trình duyệt tự lo
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // OpenAI, hộp thư ChatGPT (script.google.com + redirect googleusercontent), CDN…: không đụng
  if (req.destination === "audio" || req.destination === "video") return;
  if (req.mode === "navigate" || /\.html?$/i.test(url.pathname) || /\/$/.test(url.pathname)) { e.respondWith(networkFirst(e, req)); return; }
  if (CACHE_EXT.test(url.pathname)) e.respondWith(staleWhileRevalidate(e, req));
});
