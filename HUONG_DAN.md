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

## Giáo trình HSK chuẩn

**Mở:** trang chủ → khối **📘 Giáo trình HSK chuẩn** → **Mở giáo trình** → chọn tab cấp (HSK 1…6, nhớ cấp mở lần trước) → chọn bài. Mỗi bài ghi số từ, số điểm ngữ pháp, số từ đã học; nhãn **Đang học** = bài đã đưa vào phiên.

**Trong bài có 4 tab:**
- **Từ mới** — chữ, pinyin, Hán Việt, nghĩa, loại từ. Bấm một từ để xem chiết tự, 2 ví dụ, ghi chú (🔊 nghe từ/câu). Nhãn **bổ sung** = từ AI thêm vì slide là ảnh, nên kiểm lại.
- **Ngữ pháp** — công thức, giải thích, ví dụ, lỗi hay gặp.
- **Bài khóa** — nút **Pinyin / Dịch** bật tắt chung (app nhớ lựa chọn); 🔊 từng dòng; **▶ Đọc cả bài** đọc lần lượt, bấm lại để dừng.
- **Kiểm tra** — câu đúng/sai, chọn xong hiện đáp án + giải thích (bài không có câu hỏi thì không có tab này).

**Học bằng thẻ:** bấm **➕ Đưa bài này vào phiên 45 phút** → từ + mẫu câu của bài thành một bộ thẻ trong nhóm **Giáo trình đang học** ở trang chủ (tự được tick). Bấm **✓ Đang học — bỏ ra** để bỏ; tiến độ thẻ vẫn giữ, đưa lại vào là học tiếp. Danh sách bài đang học nằm trong **Xuất/Nhập backup**.

**Phím tắt:** `1-4` chuyển tab · `Esc` về danh sách bài / trang chủ.

**Thêm bài:** bỏ file `lessons/gt-<cấp>-<bài>.js` vào thư mục, rồi chạy `node tools/build_lesson_index.js` để cập nhật danh sách. Không có `lessons/index.js` thì phần giáo trình tự ẩn.

## Luyện đề HSK4

**Mở:** trang chủ → khối **📝 Luyện đề HSK4** → **Vào luyện đề** → chọn đề. Nhãn cạnh tên đề: 🎧 có audio · ✅ đáp án gốc · 🤖 đáp án do AI giải · ⚠️ đáp án gốc thiếu một phần.

**Làm bài:** mỗi lần một câu. Bấm tab (Nghe 1/2/3, Đọc 1/2/3, Viết 1/2) hoặc ô số câu để nhảy (xanh = đúng, đỏ = sai, xám = đã làm nhưng không chấm). Làm xong câu nào sẽ hiện đáp án, lời thoại, dịch, giải thích và từ đáng học. Câu ghi "đáp án do AI giải" thì nên nghi ngờ khi thấy lạ.
- Nghe: lời thoại ẩn tới khi trả lời (bấm **Hiện lời thoại** nếu cần). Nút 🔊 đọc lời thoại bằng giọng máy — dùng khi đề không có audio.
- Viết phần 2: gõ câu hoặc viết tay lên bảng, bấm **Xem câu mẫu** rồi tự chấm **Đạt / Chưa**.
- **Làm lại phần này / Làm lại cả đề** xóa kết quả để làm lại.

**Audio:** đề có 🎧 thì thanh trên cùng có ▶/⏸, tua ±5s, tốc độ 0.75/1/1.25. Audio là một file cho cả phần Nghe, đổi câu không làm dừng audio. File nằm ở `exams/audio/<mã đề>.mp3`.

**Phím tắt màn đề:** `←` `→` câu trước/sau · `A-D` hoặc `1-4` chọn đáp án (Nghe 1: `1` Đúng, `2` Sai; Đọc 1: `A-F`) · Đọc 2: `A` `B` `C` xếp, `Enter` kiểm tra, `Backspace` xóa · Viết 1: `1-9` chọn mảnh · `Space` phát/dừng audio · `Esc` về danh sách đề.

**Nút + Ôn:** từ trong phần giải thích bấm **+ Ôn** sẽ vào bộ thẻ **📝 Từ trong đề** ở trang chủ, học/ôn như các chủ đề khác (bộ này hiện ra khi có ít nhất 1 từ).

**Tiến độ đề** lưu ở localStorage (`hoctrung.exams.v1`, từ đã lưu ở `hoctrung.custom.v1`) và đã nằm trong **Xuất/Nhập backup** như tiến độ thẻ.

**Thêm đề:** bỏ file `exams/<mã đề>.js` (và `exams/audio/<mã đề>.mp3` nếu có) vào thư mục, rồi chạy `node tools/build_exam_index.js` để cập nhật danh sách đề.

**Bản quyền:** đề thi và audio HSK có bản quyền — chỉ để trên máy hoặc Drive cá nhân. Nếu up thư mục `exams` lên GitHub công khai thì bạn tự chịu trách nhiệm. Không up `exams` thì app vẫn chạy bình thường, chỉ không có phần luyện đề.
