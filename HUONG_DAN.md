# Học tiếng Trung — hướng dẫn nhanh

**Mở app:** double-click `index.html` là chạy (không cần mạng). Nếu trình duyệt chặn file `decks/*.js`, mở terminal tại thư mục `app` rồi chạy `python -m http.server 8080` và vào `http://localhost:8080`.

**Giao diện:** kiểu tạp chí (nền đỏ thẫm, hoặc Giấy ngà ở tab **Tôi** → **Giao diện**). Thanh tab dưới đáy: **学 Học · 译 Dịch · 图 Bản đồ · 考 Luyện đề · 书 Giáo trình · 我 Tôi**; trong phiên 45 phút thanh tab ẩn. Cài đặt, thống kê, backup nằm ở tab **Tôi**.

**Học:** tab **Học** → **Chọn chủ đề** (tick chủ đề muốn học) → bấm khối son **Vào học**. Mở lúc nào cũng được, nhưng đã mở là đủ 45 phút; bấm Kết thúc sớm sẽ bị hỏi lại.

**Tiến độ** lưu trong localStorage của trình duyệt (key `hoctrung.v1`). Đổi trình duyệt hoặc xóa dữ liệu duyệt web là mất → nhớ backup.

**Backup:** tab **Tôi** → **Xuất backup** tải file `hoctrung-backup-YYYY-MM-DD.json`. Cất vào Google Drive cá nhân (Gmail riêng, không dùng tài khoản công ty).
**Khôi phục:** tab **Tôi** → **Nhập backup** → chọn file JSON → xác nhận. Tiến độ trong file được gộp vào: thẻ chỉ có ở một bên vẫn giữ, thẻ có ở cả hai thì giữ bản học gần nhất.

**Phím tắt trong phiên:**
- `Space` — lật thẻ; sau khi lật = Nhớ
- `1` Quên · `2` Khó · `3` Nhớ · `4` Dễ (mẫu câu chỉ dùng 1 và 3)
- `Enter` — Đã hiểu (từ mới) hoặc lật thẻ
- `Esc` — thoát về trang Học (có hỏi lại)

**Trần ôn mỗi ngày:** tab **Tôi** → **Ôn tối đa / ngày** (30 / 60 / 100 / Không giới hạn, mặc định 60). Mỗi ngày chỉ ôn tối đa chừng ấy lượt; thẻ dễ quên (khoảng cách ngắn) được ôn trước. Thẻ dư không bị tính là quên, chỉ để mấy hôm tới. Số **thẻ ôn** ở tab Học (và ô **đến hạn hôm nay** ở tab Tôi) là số sẽ ôn hôm nay; số để dành ghi ở dòng nhỏ bên dưới. Đủ trần thì phiên chuyển sang từ mới. Lượt quay lại của thẻ vừa Quên và từ mới không tính. Số lượt ôn từng ngày xem ở **Thống kê**, và nằm trong Xuất/Nhập backup (key `daily` trong `hoctrung.v1`).

**Cấp HSK của từ mới:** tab **Tôi** → **Cấp HSK của từ mới** → tick các cấp muốn học (HSK 1–6, **Ngoài HSK (khẩu ngữ)**; mỗi ô ghi số từ chủ đề ở cấp đó). Nút **Tất cả** để chọn lại hết; phải giữ ít nhất 1 cấp. Chỉ lọc **từ mới của 12 chủ đề**. Từ đã học vẫn ôn bình thường; bài giáo trình, Từ trong đề, thẻ nói, thẻ dịch không bị lọc.
- Tab Học: số "mới" trong **Chọn chủ đề** và dòng đếm dưới tiêu đề tính theo bộ lọc; chủ đề có từ bị ẩn ghi thêm "ẩn N từ (theo cấp HSK)". Đổi bộ lọc thì áp từ phiên sau. Lựa chọn lưu ở `settings.hskLevels`, có trong Xuất/Nhập backup (backup cũ không có trường này = học mọi cấp như trước).

**Thẻ nói + nhại bài khóa:**
- Mẫu câu trong phiên giờ là **Thẻ nói**: đọc tình huống + câu Việt, tự **nói to câu tiếng Trung**. Bấm **Ghi âm** (hoặc phím `R`) → nói → **Dừng** → **Lật**. Mặt sau có câu mẫu (chữ xanh = app nghe đúng, chữ đỏ gạch sóng = thiếu/sai), dòng "App nghe được: …", % khớp, **Mẫu**, **▶ Nghe lại mình**, **Ghi lại**. Chấm **Quên / Nhớ** như cũ.
- Màn bài → tab **Bài khóa** → **Nhại theo**: mỗi câu **▶ Nghe mẫu** → **Nói theo** → xem so sánh, **▶ Nghe lại mình** → **Câu tiếp →**. Bấm câu khác để nhảy tới câu đó.
- Bản ghi chỉ nằm trong bộ nhớ, sang thẻ/câu khác, đổi màn hoặc ẩn tab là dừng và bỏ. Không lưu vào máy, không vào backup.
- Không có mic, chặn quyền mic, hoặc trình duyệt không ghi âm được thì thẻ vẫn dùng bình thường: cứ nói to rồi lật.
- tab **Tôi** → **Chấm phát âm bằng nhận giọng nói** (mặc định bật, chỉ có trên Chrome/Edge). Lưu ý: nhận giọng của Chrome **gửi âm thanh lên máy chủ Google** để nhận dạng và **cần mạng**. Không muốn thì tắt, vẫn ghi âm và nghe lại được. % khớp chỉ để tham khảo (máy nghe sai đồng âm…), không ảnh hưởng chấm thẻ. Nói/gõ thừa chữ cũng bị trừ % (chữ thừa tô đỏ ở dòng "App nghe được" / "Bạn viết"). Số viết kiểu nào cũng khớp: `15` = `十五` = `一五`, `302` = `三百零二` = `三零二`.

**Thẻ dịch câu (Việt → Trung):**
- Trong phiên, cứ khoảng **6 thẻ** lại có 1 thẻ **✍ Dịch câu**, tối đa **8 thẻ/phiên**. Chỉ có khi đã có từ nhớ được ít nhất 1 ngày. Câu lấy từ câu ví dụ của từ đã học và mẫu câu đã học, trong các bộ đang chọn.
- Mặt trước: câu tiếng Việt và các **từ đã học** có trong câu (chỉ hiện nghĩa, bấm **Gợi ý chữ Hán** mới hiện chữ). Gõ câu tiếng Trung vào ô (bàn phím/bộ gõ Trung), hoặc viết tay lên bảng → **Kiểm tra** (`Enter` trong ô gõ; khi đang ghép chữ thì Enter chỉ chốt chữ). Trong ô gõ, `Space` gõ bình thường, `Esc` thoát khỏi ô.
- Mặt sau: câu mẫu + pinyin + . Nếu có gõ thì app so từng chữ: xanh = khớp, đỏ = thiếu/sai, kèm % khớp. Câu khác mẫu vẫn có thể đúng, nên bạn tự chấm **Chưa được** (`1`) / **Được** (`3`/`Space`). Chưa được thì câu đó quay lại ở lượt dịch sau.
- Mỗi câu có lịch ôn riêng, không đụng thẻ từ cũ (id `<bộ>:t:<chữ Hán>:<số câu>`, mẫu câu là `<bộ>:tp:<số>` trong `hoctrung.v1`, có trong Xuất/Nhập backup). Thẻ dịch **không** tính vào trần ôn mỗi ngày và không tính vào "thẻ đã gặp". Muốn đổi nhịp thì sửa `TRANS_EVERY` / `TRANS_MAX` trong `index.html`.

**Thẻ Nhận mặt chữ có ô gõ · "Dễ quá" · thẻ Đặt câu:**
- Mặt trước thẻ **Nhận mặt chữ** có 2 ô: **Pinyin** (gõ số `cai4 dan1` hoặc dấu `càidān`, liền hay cách đều được; `v` / `u:` = ü, `lue` / `nue` = lüe / nüe; 儿化 gõ liền `huir4` hay tách `hui4 er` đều được; thanh nhẹ để trống, `5` hoặc `0`; 一 / 不 / 2 thanh 3 liền nhau nhận cả thanh gốc lẫn thanh đã biến) và **Nghĩa** (tiếng Việt, có dấu hay không cũng được). Bấm **Kiểm tra** (`Enter` trong ô; trên điện thoại phím **Tiếp** ở ô Pinyin sang ô Nghĩa nếu ô Nghĩa còn trống). Để trống cả 2 ô thì nút là **Lật** như cũ (`Space`/`Enter` khi không đứng trong ô cũng là lật). Đang gõ trong ô thì `Space`, `1-4` chỉ là chữ, không thành phím tắt.
- Mặt sau có thêm 2 dòng kết quả: **Pinyin** ✓ / ≈ (đúng âm, sai hoặc thiếu thanh — chỉ rõ âm tiết sai) / ✕ (sai âm), chấm ngay trên máy, không cần AI; **Nghĩa** ✓ / ≈ / ✕ do AI chấm theo ý (đồng nghĩa, tiếng Anh, chỉ nêu 1 nghĩa chính vẫn đúng). AI tắt / lỗi / mất mạng thì app tự so từ khóa (ghi "tự so"); nghĩa tự so không trùng từ khóa thì app không gợi ý nút (trừ khi pinyin sai âm → Quên). App tô gợi ý nút chấm: đúng hết → **Nhớ**, sai thanh hoặc nghĩa gần đúng → **Khó**, sai âm hoặc sai nghĩa → **Quên** (không bao giờ gợi ý Dễ). Bạn vẫn tự bấm.
- Nút **Dễ quá →** (mặt trước Nhận mặt chữ và Nghĩa → chữ): đặt 1 câu tiếng Trung có từ đó → **Chấm câu** (AI). Kết quả: câu của bạn, câu sửa, cách nói tự nhiên (đều có loa), ghi chú. **Đạt** → gợi ý **Dễ** và mở sẵn **Mở rộng** để học thêm từ; **Gần đạt** → gợi ý Nhớ; **Chưa đạt** / không dùng đúng từ → gợi ý Khó và **khóa nút Dễ**. Câu gõ không có chữ Hán (vd gõ pinyin) vẫn gửi AI và bị chấm Chưa đạt. AI tắt / lỗi thì hiện 2 câu ví dụ để tự so, không khóa. Đặt câu ở bước Dễ quá thì phiên đó không ra thẻ Đặt câu của từ ấy nữa. **Quay lại** về mặt trước, giữ chữ đã gõ. Thẻ Nghĩa → chữ không lộ chữ Hán khi đặt câu.
- **Thẻ Đặt câu** (con dấu 造句): từ đã nhớ ít nhất 2 lần (đang ở lịch ôn) thỉnh thoảng ra để đặt 1 câu. Phiên chia khúc: khúc 2 xoay vòng thẻ nói → thẻ dịch → thẻ nói → thẻ đặt câu. Phiên không chia khúc: cứ **8 thẻ** chen 1 thẻ, tối đa **5 thẻ/phiên**. Thẻ Đặt câu không lấy từ còn đến hạn ôn mà chưa ôn trong phiên (mặt trước lộ pinyin + nghĩa). Chấm **Chưa được** (`1`) / **Được** (`3`); Chưa được thì quay lại sau vài thẻ. Số "đặt N câu" chỉ đếm câu có gõ, mỗi từ 1 lần. Mỗi câu 1 lượt AI ngắn, tính vào chi phí tháng.
- Thẻ đặt câu có lịch ôn riêng (id `<bộ>:s:<chữ Hán>` trong `hoctrung.v1`, đi theo Xuất/Nhập backup), không tính trần ôn, "thẻ đã gặp", % bản đồ hay câu kiểm tra bài cũ. Đổi nhịp thì sửa `SENT_EVERY` / `SENT_MAX` trong `index.html`.

**Phiên 45 phút chia 3 khúc** (tab **Tôi** → **Chia phiên 3 khúc**, mặc định bật; tắt thì phiên trộn mọi loại thẻ như cũ):
- **Khúc 1 · Thẻ** (00:00–15:00): chỉ thẻ từ (từ mới + ôn).
- **Khúc 2 · Nói & dịch** (15:00–30:00): thẻ nói xen kẽ ✍ thẻ dịch câu. Khúc 2 ưu tiên câu đến hạn trước rồi mới tới câu mới (hết mẫu câu đến hạn thì app lấy thêm mẫu câu chưa học trong các bộ đang chọn). Khúc 1 ôn sớm luôn chừa suất trần ôn cho các câu đến hạn của khúc 2, và không ôn lại thẻ vừa chấm trong phiên. Dịch "Chưa được" thì câu đó quay lại sau 2 câu dịch khác.
- **Khúc 3 · Nghe & đọc** (30:00–45:00): chọn **Nhại 1 bài khóa** (`1`) hoặc **Làm tiếp 1 phần đề** (`2`). Bài khóa ưu tiên bài đang học (HSK 3-4 trước), không có thì gợi ý bài HSK 3-4; mỗi lần mở thì đổi sang bài kế tiếp. Đề: đề đang làm dở, nhảy thẳng tới câu đầu tiên chưa làm. Ở màn bài/đề có thanh nhỏ trên cùng: đồng hồ phiên vẫn chạy, bấm **Về phiên** (hoặc `Esc`, nút Back) để quay lại. Bấm **trang Học** ở đó thì kết thúc và lưu phiên. Phím `1`/`2` ở màn khúc 3 chỉ mở bài/đề, không bị tính thành phím chọn tab hay chọn đáp án ở màn mới. Đang đứng ở màn khúc 3 lúc đủ 45:00 thì nút **Kết thúc** hiện ngay.
- Thanh trên của phiên có 3 đoạn (khúc đang học sáng lên) và nút **Sang khúc sau ›** để bỏ qua khúc. Tới mốc giờ thì app làm nốt thẻ đang dở rồi mới hiện thẻ **Khúc 2 · Nói & dịch** → **Bắt đầu**. Hết thẻ sớm thì cũng tự sang khúc sau.
- Số câu nhại / câu đề làm trong phiên được lưu thêm vào dòng phiên (trường `lines`, xem ở Thống kê). Đổi độ dài khúc thì sửa `BLOCK_SEC` trong `index.html`.

**Kiểm tra bài cũ đầu buổi** (tab **Tôi** → **Kiểm tra bài cũ đầu buổi**: Tắt / 5 / **8** (mặc định) / 10 câu, có trong Xuất/Nhập backup):
- Bấm **Học 45 phút** → trước khúc 1 hiện **Bài cũ 1/8**. Chỉ có khi đã có phiên **trước hôm nay** có chấm thẻ, và **mỗi ngày 1 lần** (hôm nay đã làm thì phiên sau thôi). Tính vào 45 phút, thanh trên có thêm đoạn nhỏ **Bài cũ**. Nút **Bỏ qua** để vào thẳng phiên.
- Câu lấy từ thẻ từ / mẫu câu đã chấm vào ngày của 1–2 phiên gần nhất trước hôm nay (ngày phiên trước đó chỉ tính nếu cách phiên gần nhất ≤ 2 ngày; thẻ hay Quên / Khó ra trước, thẻ của ngày gần nhất ưu tiên), mỗi từ 1 câu ví dụ, không lặp.
- Hai chiều xen kẽ: **Trung → Việt** (câu chữ Hán, nút loa, **Gợi ý pinyin**; gõ nghĩa hoặc **Nói tiếng Việt**) và **Việt → Trung** (gõ, **Nói tiếng Trung** hoặc viết tay). Nói xong thì chữ app nghe được điền vào ô, sửa được rồi **Kiểm tra**. Có AI thì AI chấm theo nghĩa (gõ không dấu cũng được); không có AI thì hiện câu mẫu để tự chấm. Luôn tự bấm **Sai** (`1`) / **Đúng** (`3`/`Space`).
- **Sai** → thẻ của từ đó tới hạn ngay + ease −0.15 + khoảng ôn hạ còn tối đa 1 ngày (chấm lại **Nhớ** không làm lịch dài thêm), và ra **đầu khúc 1** hôm nay (mẫu câu: đầu khúc 2). Bài cũ làm quá 15 phút thì vẫn ôn hết các từ vừa Sai rồi mới sang khúc sau. Lượt chấm lại thẻ đó **không tính vào trần ôn mỗi ngày**. **Đúng** → không đổi gì.
- Cuối phần này có màn **Đúng X/N** + danh sách câu sai (chữ Hán, nút loa, pinyin, nghĩa) → **Vào khúc 1** (đã quá giờ khúc 1 và không có câu sai thì là **Vào khúc 2/3**). Kết quả lưu vào dòng phiên (trường `warmup`, xem ở Thống kê).

**AI chấm bài (OpenAI, tùy chọn — dùng trên điện thoại):**
- tab **Tôi** → **AI chấm bài** → dán **Khóa OpenAI** → **Lưu** → **Thử khóa** (báo OK hoặc lỗi). Chọn model: **gpt-6-luna** (mặc định, chấm kỹ) hoặc **gpt-5-nano** (rẻ hơn theo token nhưng hay chấm sai; tính ra mỗi lượt chấm tốn gần bằng luna). Thử khóa chỉ cập nhật dòng kết quả, không xóa khóa đang dán dở. Công tắc **Dùng AI chấm** để tạm tắt. Dòng "Tháng này: N lượt · ~$X" là chi phí ước tính.
- **✍ Dịch câu:** gõ câu rồi **Kiểm tra** → nút thành "Đang chấm…" (bấm **Bỏ qua AI** để lật luôn; kết quả về muộn vẫn hiện). Mặt sau có Đúng / Gần đúng / Sai + điểm, lỗi từng đoạn, **Cách nói tự nhiên hơn**, **Cũng nói được** (đều có nút loa), ghi chú. AI chấm theo nghĩa, không bắt khớp từng chữ với câu mẫu. Viết tay (không gõ) thì không gọi AI.
- **Thẻ nói:** ghi âm → lật → câu "App nghe được" được gửi AI chấm (khoan dung lỗi nhận giọng như chữ đồng âm). Ghi lại thì chấm lại.
- **Kiểm tra bài cũ:** AI chấm cả hai chiều (Trung → Việt: đúng ý chưa, ý còn thiếu, bản dịch tự nhiên).
- AI chỉ **gợi ý** nút chấm (viền sáng), bạn vẫn tự bấm. Pinyin luôn lấy từ dữ liệu app, không lấy của AI.
- AI lỗi (khóa sai, hết credit, khóa không dùng được model → gợi ý đổi model, OpenAI trục trặc, mất mạng, chậm quá 25 giây) → hiện 1 dòng lý do, chấm như cũ. Kết quả AI về thì trang tự cuộn để thấy khung chấm (không bị thanh nút đáy che, cả màn ngang).
- **Khóa chỉ lưu trên máy này** (localStorage `hoctrung.ai.v1`), **không** vào Xuất backup, không lên GitHub, sau khi lưu chỉ hiện dạng `sk-…abcd`. Đổi máy/điện thoại thì dán lại. Câu trả lời của bạn được gửi sang OpenAI. Nên đặt trần chi tiêu (limit) trong trang OpenAI. Sửa giá/model trong `AI_MODELS` của `index.html`.

**Thêm từ:** sửa file trong `decks/` (mỗi file một chủ đề, mở bằng Notepad/VS Code). Chữ Hán trùng giữa 2 chủ đề vẫn là 2 thẻ riêng.

## Cài app ra màn hình chính
Mở link app bằng Chrome trên điện thoại → tab **Tôi** → **Cài app** (hoặc Chrome → ⋮ → **Thêm vào màn hình chính**). Mở từ biểu tượng 学 là chạy như app, mất mạng vẫn học được (trừ AI, audio đề chưa nghe lần nào). Có bản mới thì hiện thanh **Có bản mới · Tải lại** (không hiện giữa phiên học và lúc đóng vai; bấm **×** để lúc khác — bản mới tự vào ở lần mở app sau). Mạng chập chờn: chờ quá 3,5 giây thì app mở bằng bản đã lưu. Tab **Tôi** → **Sao lưu** ghi dữ liệu có được trình duyệt giữ lâu dài không; quá 7 ngày chưa **Xuất backup** thì trang Học có dòng nhắc.

## Từ cứng đầu
Từ đã **Quên từ 4 lần** = từ cứng đầu (nhãn "cứng đầu" trên thẻ). Gặp lại: mặt sau có **Mẹo nhớ** (AI soạn 1 lần từ chiết tự thật — mẹo nêu thành phần không có trong chiết tự bị loại; từ chưa có chiết tự thì không soạn; không có AI thì dùng chiết tự); thẻ Nghĩa → chữ bắt viết tay ít nhất 1 nét mới lật được (có **Bỏ qua viết**). Trang Học → **03 Từ cứng đầu** → danh sách + **Ôn dồn** (phiên ngắn chỉ gồm các từ này, viết tay rồi nhận mặt chữ; mỗi từ chỉ tính lịch ôn 1 lần / buổi ở lượt đầu, lượt sau chỉ ghi khi Quên, ôn sớm không nhân trọn khoảng ôn cũ). Nhớ liền 3 lần cách nhau ≥ 3 ngày thì hết cứng đầu. Mẹo nhớ đi theo backup.

## Thẻ Nghe
- **Nghe từ:** từ đã ôn ≥ 3 lần thỉnh thoảng ra dạng nghe: không hiện chữ, app đọc (có nút đọc chậm) → gõ chữ Hán hoặc pinyin + nghĩa → Kiểm tra, app gợi ý nút chấm. Máy không có giọng đọc tiếng Trung thì thẻ ra dạng Nhận mặt chữ như cũ.
- **Nghe câu:** ở khúc Nói & dịch (hoặc chen trong phiên không chia khúc), nghe câu ví dụ của từ đã học → gõ nghĩa tiếng Việt → AI chấm theo ý (không có AI thì tự so) → Chưa được / Được.

## Dịch tin nhắn (tab 译 Dịch, cần AI)
Dán hoặc gõ tin nhắn → **Dịch** (Ctrl+Enter). Có chữ Hán = dịch Trung → Việt, không có = Việt → Trung (giọng nhắn tin tự nhiên + 1 cách khác + giải thích tiếng lóng), nút **Chép** để dán sang app chat. Từ mới chưa có trong app **tự vào bộ "Từ tin nhắn"** (信), câu ví dụ là chính tin nhắn; bấm **Bỏ** nếu không muốn học (app nhớ, tin sau có lại từ đó cũng không tự thêm; muốn học thì bấm **+ Học**). Từ điển chưa tải được (mất mạng) thì từ mới chưa tự thêm — bấm **+ Học** khi có mạng. Câu mày tự viết (Việt → Trung) thành thẻ nói + thẻ dịch. **Nhập đoạn chat cũ**: dán cả đoạn, hoặc chọn file `conversations.json` (ChatGPT → Settings → Data controls → Export, làm trên máy tính) → chọn cuộc trò chuyện → app lấy từ mới theo từng khúc → chọn từ để học. Tin nhắn được gửi tới OpenAI để dịch, lưu trong trình duyệt (`hoctrung.msgs.v1`, `hoctrung.msgw.v1`) và đi theo backup.

**Nối với ChatGPT (dịch bằng GPT trong ChatGPT Plus):**
- Dịch tin nhắn bằng GPT **"Dịch tin nhắn"** trong ChatGPT; mỗi lần dịch, GPT gửi tin + từ mới vào **hộp thư** riêng (Google Apps Script trên Gmail của mày). Tạo hộp thư theo `chatgpt/HUONG_DAN-GPT.md`.
- Dán link hộp thư (`https://script.google.com/macros/s/…/exec?key=…`) **1 lần** ở tab **Dịch** → mục **Nối với ChatGPT** → **Lưu** (app gọi thử, báo được hay lỗi).
- Từ mới **tự về** bộ **Từ tin nhắn** + lịch sử **Gần đây** khi mở app, khi vào tab Dịch, khi quay lại app (tối đa 1 lần/phút; **Nhận ngay** để lấy liền). Giống dịch trong app: bỏ từ đã học / đã có / đã bấm **Bỏ**, câu mày viết thành thẻ nói + thẻ dịch. Đang học phiên 45 phút thì nhận ngầm, không đụng thẻ đang học.
- Link + key lưu riêng máy này (`hoctrung.inbox.v1`), **không** đi theo Xuất backup — đổi máy thì dán lại link. Sang máy mới: **nhập backup trước**, rồi mới dán link hộp thư (app vẫn tự bỏ lại từ mày đã Bỏ ở máy cũ, nhưng làm đúng thứ tự cho chắc). **Ngắt kết nối** chỉ xóa link, từ đã nhận vẫn giữ.

## Mất tài khoản công ty / đổi máy — làm sao học tiếp

App này không cần tài khoản, không cần mạng, không gọi API nào (trừ khi bạn tự bật **AI chấm bài** — khóa OpenAI không nằm trong backup, sang máy mới phải dán lại). Chỉ cần 2 thứ: **thư mục `app`** và **file backup tiến độ**. Cất cả hai trên Google Drive cá nhân là đủ.

**Sang máy mới:**
1. Vào Google Drive cá nhân → tải file zip về → giải nén.
2. Vào thư mục `app` → double-click `index.html`.
3. Tab **Tôi** → **Nhập backup** → chọn file `hoctrung-backup-....json` mới nhất.

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

**Mở:** tab **Giáo trình** → chọn tab cấp (mặc định chỉ hiện HSK 3 và 4; bấm **＋ Hiện cấp khác** để mở HSK 1, 2, 5, 6, app nhớ lựa chọn và cấp mở lần trước) → chọn bài. Bài đang học ở cấp bị ẩn vẫn ở trong phiên như thường. Mỗi bài ghi số từ, số điểm ngữ pháp, số từ đã học; nhãn **Đang học** = bài đã đưa vào phiên.

**Trong bài có 4 tab:**
- **Từ mới** — chữ, pinyin, Hán Việt, nghĩa, loại từ. Bấm một từ để xem chiết tự, 2 ví dụ, ghi chú (nghe từ/câu). Nhãn **bổ sung** = từ AI thêm vì slide là ảnh, nên kiểm lại.
- **Ngữ pháp** — công thức, giải thích, ví dụ, lỗi hay gặp.
- **Bài khóa** — nút **Pinyin / Dịch** bật tắt chung (app nhớ lựa chọn); từng dòng; **▶ Đọc cả bài** đọc lần lượt, bấm lại để dừng.
- **Kiểm tra** — câu đúng/sai, chọn xong hiện đáp án + giải thích (bài không có câu hỏi thì không có tab này).

**Học bằng thẻ:** bấm **Đưa bài này vào phiên 45 phút** → từ + mẫu câu của bài thành một bộ thẻ trong nhóm **Giáo trình đang học** ở tab Học (tự được tick). Bấm **✓ Đang học — bỏ ra** để bỏ; tiến độ thẻ vẫn giữ, đưa lại vào là học tiếp. Danh sách bài đang học nằm trong **Xuất/Nhập backup**.

**Phím tắt:** `1-4` chuyển tab · `Esc` về danh sách bài / trang Học.

**Thêm bài:** bỏ file `lessons/gt-<cấp>-<bài>.js` vào thư mục, rồi chạy `node tools/build_lesson_index.js` để cập nhật danh sách. Không có `lessons/index.js` thì phần giáo trình tự ẩn.

## Bản đồ chủ đề

**Mở:** tab **Bản đồ**. Mỗi chủ đề gồm **Cốt lõi** (32 từ trong danh sách Chủ đề ở tab Học, vẫn tick như cũ) + 3–4 nhánh, mỗi nhánh 3 cấp. Bấm tên chủ đề để mở/thu; mỗi nhánh đánh số La Mã (I, II, III…), mỗi cấp là 1 dòng kiểu mục lục: ổ khóa = khóa, % = đã nhớ, ✓ = xong, chấm son = đang học.

**Luật mở:** "nhớ" = thẻ đã ôn và lần ôn kế cách ≥ 3 ngày. Cấp 1 mọi nhánh mở khi Cốt lõi ≥ 80% nhớ; cấp 2 khi cấp 1 ≥ 80%; cấp 3 khi cấp 2 ≥ 80%. Ô khóa vẫn bấm vào xem trước được, có nút **Mở sớm**. Cấp **đang học** đạt 80% → cấp kế tự mở và tự vào phiên (hiện thông báo); bỏ ra thì không bị thêm lại.

**Trong cấp:** mục tiêu, từ mới (bấm từ xem chiết tự + ví dụ, nút loa), mẫu câu (có nút loa). **Đưa cấp này vào phiên 45 phút** → từ + mẫu câu thành bộ thẻ trong nhóm **Bản đồ đang học** ở tab Học; từ của cấp được ưu tiên như bài giáo trình, không bị lọc cấp HSK; mẫu câu ra ở khúc Nói & dịch. **✓ Đang học — bỏ ra** không xóa tiến độ. Cấp đang học, cấp mở sớm đi theo **Xuất/Nhập backup**. `Esc` về bản đồ / trang Học.

**Thêm/sửa dữ liệu:** file `map/<id-chủ-đề>.js` (id trùng tên deck trong `decks/`), rồi chạy `node tools/build_map_index.js` để cập nhật `map/index.js`. Không có chủ đề nào trong `map/index.js` thì khối bản đồ tự ẩn.

**AI soạn thêm (cần lưu khóa + bật AI):** cuối mỗi nhánh có nút **Soạn cấp tiếp bằng AI** (cấp 4, 5…); cuối mỗi chủ đề có ô **Nhánh mới** — gõ tình huống tự chọn (vd. "đi taxi từ sân bay") rồi **Soạn**. Mỗi lần AI soạn 1 cấp: 12–15 từ không trùng từ đã có trong app, 5–6 mẫu câu, 1 cảnh đóng vai. Pinyin và Hán Việt app tự tra lại bằng từ điển, chiết tự để trống. Cấp AI có nhãn **AI**, học / đưa vào phiên / mở khóa 80% như cấp thường, và **đi theo backup**. Cài đặt **Tự soạn cấp mới bằng AI khi gần xong nhánh** (mặc định bật): cấp cuối của nhánh đang học đạt 80% → AI tự soạn cấp tiếp, mỗi cấp 1 lần, tối đa 5 gói/ngày, xong báo một dòng.

## Đóng vai hội thoại (cần AI)

**Mở:** trong màn cấp bản đồ bấm **Đóng vai: …**, hoặc ở khúc 3 của phiên 45 phút chọn **Đóng vai 1 tình huống** (phím `3`; lấy cấp đang học có đóng vai, chưa học cấp nào thì cấp đã mở; đồng hồ phiên vẫn chạy, xong bấm **Về phiên**). Chưa có khóa / AI đang tắt thì màn đóng vai giải thích và có nút **Mở Cài đặt AI**.

**Trong màn:** đầu màn là tình huống, vai AI / vai bạn, 3 mục tiêu (→ khi đạt). Tin của AI: chữ Hán to, nút loa, nút **Pinyin** (tra bằng từ điển, tải lần đầu ~3 MB) và **Dịch**; bật/tắt ở 1 tin thì các tin sau theo. Bạn gõ tiếng Trung hoặc bấm **Nói** (chữ app nghe được điền vào ô, sửa rồi **Gửi**; bấm Gửi lúc đang nói thì tự gửi khi nhận xong chữ). **Gợi ý**: AI đưa 1 câu mẫu (+ pinyin, nghĩa), **Dùng câu này** để điền vào ô. Dưới mỗi câu của bạn có nhận xét nhỏ: ổn, hoặc cách nói tự nhiên hơn + . AI lỗi giữa chừng: hội thoại giữ nguyên, bấm **↻ Thử lại** hoặc **Sửa câu**.

**Kết thúc:** tối đa 10 lượt nói, hoặc AI thấy cảnh đã xong → **Xem tổng kết**: mục tiêu đạt, tối đa 5 câu sửa đáng nhớ (có nút loa), từ khóa chưa dùng. **+ Ôn**: câu sửa thành thẻ nói / thẻ dịch, từ chưa có trong app thành thẻ từ — đều vào bộ **Từ mở rộng** (đi theo backup); từ đã học thì đến hạn ôn ngay. **Chơi lại** bắt đầu lại từ câu mở đầu. Hội thoại chỉ giữ trong lúc mở trang (rời màn rồi quay lại thì đi tiếp, tải lại trang là mất). Mỗi lượt nói / gợi ý = 1 lượt gọi AI, cộng vào chi phí tháng ở Cài đặt.

## Mở rộng từ trên thẻ

Thẻ **Từ mới** và mặt sau thẻ từ (sau khi lật) có nút **Mở rộng (N)**: từ cùng loại, trái nghĩa, hay đi kèm, cụm từ — mỗi từ có pinyin, Hán Việt, nghĩa, nút loa; bấm vào xem chiết tự + ví dụ. **+ Học** (từng từ) / **+ Học cả nhóm** đưa từ vào bộ **Từ mở rộng** (tự tick, từ mới được ưu tiên như bộ Từ trong đề, học từ phiên sau; đi theo backup). Từ đã có ở chủ đề / cấp bản đồ thì ghi **đã có ở …**. Thẻ không có sẵn dữ liệu mở rộng (từ giáo trình, cấp bản đồ, từ trong đề…) hoặc muốn thêm: **Mở rộng bằng AI** / **Thêm bằng AI** (khi AI bật) — kết quả lưu trên máy để lần sau khỏi gọi lại.

## Nguồn dữ liệu từ điển

Cách đọc pinyin lấy từ **CC-CEDICT** (giấy phép CC BY-SA 4.0, cc-cedict.org); âm Hán Việt từ **Unicode Unihan** (Unicode License). Chi tiết trong `dict/LICENSES.txt`. Từ điển (~3 MB) chỉ tải khi AI soạn, khi bật Pinyin / xin Gợi ý / + Ôn trong Đóng vai; pinyin câu tra theo từ dài nhất, không tính biến điệu (一, 不, thanh 3).

## Luyện đề HSK4

**Mở:** tab **Luyện đề** → chọn đề. Dòng nhỏ dưới tên đề cho biết có audio, đáp án gốc hay đáp án do AI giải; nhãn cam = đáp án gốc thiếu một phần.

**Làm bài:** mỗi lần một câu. Bấm tab (Nghe 1/2/3, Đọc 1/2/3, Viết 1/2) hoặc ô số câu để nhảy (xanh = đúng, đỏ = sai, xám = đã làm nhưng không chấm). Làm xong câu nào sẽ hiện đáp án, lời thoại, dịch, giải thích và từ đáng học. Câu ghi "đáp án do AI giải" thì nên nghi ngờ khi thấy lạ.
- Nghe: lời thoại ẩn tới khi trả lời (bấm **Hiện lời thoại** nếu cần). Nút đọc lời thoại bằng giọng máy — dùng khi đề không có audio.
- Viết phần 2: gõ câu hoặc viết tay lên bảng, bấm **Xem câu mẫu** rồi tự chấm **Đạt / Chưa**.
- **Làm lại phần này / Làm lại cả đề** xóa kết quả để làm lại.

**Audio:** đề có thì thanh trên cùng có nút phát / dừng, tua ±5s, tốc độ 0.75/1/1.25. Audio là một file cho cả phần Nghe, đổi câu không làm dừng audio. File nằm ở `exams/audio/<mã đề>.mp3`.

**Phím tắt màn đề:** `←` `→` câu trước/sau · `A-D` hoặc `1-4` chọn đáp án (Nghe 1: `1` Đúng, `2` Sai; Đọc 1: `A-F`) · Đọc 2: `A` `B` `C` xếp, `Enter` kiểm tra, `Backspace` xóa · Viết 1: `1-9` chọn mảnh · `Space` phát/dừng audio · `Esc` về danh sách đề.

**Nút + Ôn:** từ trong phần giải thích bấm **+ Ôn** sẽ vào bộ thẻ **Từ trong đề** ở tab Học, học/ôn như các chủ đề khác (bộ này hiện ra khi có ít nhất 1 từ).

**Tiến độ đề** lưu ở localStorage (`hoctrung.exams.v1`, từ đã lưu ở `hoctrung.custom.v1`) và đã nằm trong **Xuất/Nhập backup** như tiến độ thẻ.

**Thêm đề:** bỏ file `exams/<mã đề>.js` (và `exams/audio/<mã đề>.mp3` nếu có) vào thư mục, rồi chạy `node tools/build_exam_index.js` để cập nhật danh sách đề.

**Bản quyền:** đề thi và audio HSK có bản quyền — chỉ để trên máy hoặc Drive cá nhân. Nếu up thư mục `exams` lên GitHub công khai thì bạn tự chịu trách nhiệm. Không up `exams` thì app vẫn chạy bình thường, chỉ không có phần luyện đề.
