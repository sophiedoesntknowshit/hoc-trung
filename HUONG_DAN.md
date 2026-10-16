# Học tiếng Trung — hướng dẫn nhanh

**Mở app:** double-click `index.html` là chạy (không cần mạng). Nếu trình duyệt chặn file `decks/*.js`, mở terminal tại thư mục `app` rồi chạy `python -m http.server 8080` và vào `http://localhost:8080`.

**Học:** tick chủ đề muốn học → bấm **Học 45 phút**. Mở lúc nào cũng được, nhưng đã mở là đủ 45 phút; bấm Kết thúc sớm sẽ bị hỏi lại.

**Tiến độ** lưu trong localStorage của trình duyệt (key `hoctrung.v1`). Đổi trình duyệt hoặc xóa dữ liệu duyệt web là mất → nhớ backup.

**Backup:** trang chủ → **Xuất backup** tải file `hoctrung-backup-YYYY-MM-DD.json`. Cất vào Google Drive cá nhân (Gmail riêng, không dùng tài khoản công ty).
**Khôi phục:** trang chủ → **Nhập backup** → chọn file JSON → xác nhận. Tiến độ trong file được gộp vào: thẻ chỉ có ở một bên vẫn giữ, thẻ có ở cả hai thì giữ bản học gần nhất.

**Phím tắt trong phiên:**
- `Space` — lật thẻ; sau khi lật = Nhớ
- `1` Quên · `2` Khó · `3` Nhớ · `4` Dễ (mẫu câu chỉ dùng 1 và 3)
- `Enter` — Đã hiểu (từ mới) hoặc lật thẻ
- `Esc` — thoát về trang chủ (có hỏi lại)

**Thêm từ:** sửa file trong `decks/` (mỗi file một chủ đề, mở bằng Notepad/VS Code). Chữ Hán trùng giữa 2 chủ đề vẫn là 2 thẻ riêng.

## Mất tài khoản công ty / đổi máy — làm sao học tiếp

App này không cần tài khoản, không cần mạng, không gọi API nào. Chỉ cần 2 thứ: **thư mục `app`** và **file backup tiến độ**. Cất cả hai trên Google Drive cá nhân là đủ.

**Sang máy mới:**
1. Vào Google Drive cá nhân → tải file zip về → giải nén.
2. Vào thư mục `app` → double-click `index.html`.
3. Trang chủ → **Nhập backup** → chọn file `hoctrung-backup-....json` mới nhất.

**Thói quen:** học xong buổi nào thì bấm **Xuất backup** rồi kéo file JSON lên Drive. Mất máy thì chỉ mất tiến độ từ lần backup cuối.

## Muốn có link mở trên điện thoại (free, tài khoản riêng)

Dùng GitHub Pages bằng email cá nhân:
1. Tạo tài khoản ở github.com.
2. Bấm **New repository** → đặt tên `hoc-trung` → chọn **Public** → **Create repository**.
3. Bấm **uploading an existing file** → kéo `index.html` và cả thư mục `decks` vào → **Commit changes**.
4. Vào **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, thư mục `/ (root)` → **Save**.
5. Đợi 1–2 phút, link sẽ là `https://<tên-github>.github.io/hoc-trung/`.

Lưu ý: repo Public nghĩa là ai cũng xem được → chỉ up app, **không** up đề thi HSK (có bản quyền), không up file backup. Tiến độ trên điện thoại và trên máy tính là hai chỗ riêng; muốn chuyển qua lại thì Xuất backup bên này, Nhập backup bên kia.

## Thêm chủ đề mới không cần Claude

1. Copy một file trong `decks/` (ví dụ `an-uong.js`), đưa cho bất kỳ AI nào (ChatGPT, Gemini...) và bảo: "sinh file mới y hệt format này, chủ đề X, 32 từ + 12 câu, có pinyin, Hán Việt, chiết tự, 2 ví dụ mỗi từ".
2. Lưu thành `decks/<ten-chu-de>.js` (id trong file phải trùng tên file).
3. Mở `index.html` bằng Notepad, tìm các dòng `<script src="decks/...js"></script>`, thêm một dòng cho file mới ngay dưới đó. Lưu lại, mở app là thấy.
