# 🎭 HƯỚNG DẪN SỬ DỤNG ARTIST SCHEDULE MANAGER

## 📋 MỤC LỤC
1. [Giới thiệu](#giới-thiệu)
2. [Cài đặt & Sử dụng](#cài-đặt--sử-dụng)
3. [Các tính năng chính](#các-tính-năng-chính)
4. [Tích hợp Gemini AI](#tích-hợp-gemini-ai)
5. [Câu hỏi thường gặp](#câu-hỏi-thường-gặp)

---

## 🎯 GIỚI THIỆU

**Artist Schedule Manager** là ứng dụng web quản lý lịch trình chuyên nghiệp dành cho nghệ sĩ (diễn viên kịch nói, lồng tiếng, content creator).

### ✨ Tính năng nổi bật:
- ✅ Nhập giọng nói bằng tiếng Việt
- ✅ Cảnh báo xung đột thời gian/địa điểm thông minh
- ✅ Quản lý nhiều team (lồng tiếng, kịch nói, hóa trang, sản xuất)
- ✅ Tính toán thời gian di chuyển
- ✅ Tổng quan thời gian làm việc vs thời gian rảnh
- ✅ Xuất sang Google Calendar (file ICS)
- ✅ Gửi lời mời qua email
- ✅ AI Assistant (cần tích hợp Gemini API)

---

## 🚀 CÀI ĐẶT & SỬ DỤNG

### Bước 1: Mở ứng dụng
1. Mở file `artist-schedule-manager.html` bằng trình duyệt web (Chrome, Firefox, Safari, Edge)
2. App hoạt động hoàn toàn OFFLINE, không cần internet (trừ tính năng AI)
3. Tất cả dữ liệu lưu trên máy bạn (LocalStorage)

### Bước 2: Làm quen với giao diện

#### 🏠 Các tab chính:
- **📊 Tổng quan**: Dashboard với thống kê tuần này
- **⚡ Thêm nhanh**: Form nhập sự kiện với giọng nói
- **📅 Lịch**: Xem lịch tháng và tất cả sự kiện
- **👥 Team**: Quản lý các team và thành viên
- **🤖 AI Assistant**: Chat với AI (cần Gemini API)

---

## 🎯 CÁC TÍNH NĂNG CHÍNH

### 1. ⚡ THÊM SỰ KIỆN NHANH

#### Cách 1: Nhập bằng giọng nói (Tiếng Việt)
1. Click tab **"⚡ Thêm nhanh"**
2. Click vào nút microphone 🎤 lớn
3. Cho phép truy cập micro (nếu trình duyệt hỏi)
4. Nói tên công việc, ví dụ:
   - "Diễn kịch tại Nhà hát Hòa Bình"
   - "Thu âm quảng cáo tại Studio Q7"
   - "Họp team sản xuất nội dung"
5. App sẽ tự động điền vào ô "Tên công việc"
6. Điền thêm thông tin chi tiết

#### Cách 2: Nhập bằng form
Điền các thông tin sau:
- **Tên công việc*** (bắt buộc)
- **Ngày*** (bắt buộc)
- **Giờ bắt đầu*** (bắt buộc)
- **Thời gian chuẩn bị** (phút): Thời gian cần có mặt trước giờ diễn
- **Thời lượng*** (phút, bắt buộc): Thời lượng công việc
- **Địa điểm*** (bắt buộc)
- **Team**: Chọn team phụ trách
- **Ghi chú**: Lưu ý quan trọng (đạo cụ, trang phục...)

#### ⚠️ Hệ thống cảnh báo thông minh:
App tự động kiểm tra và cảnh báo nếu:
- ❌ **Xung đột thời gian**: Trùng giờ với sự kiện khác
- ⚠️ **Thiếu thời gian di chuyển**: Không đủ thời gian giữa 2 địa điểm khác nhau
  - App giả định thời gian di chuyển tối thiểu: **30 phút**
  - Ví dụ: Sự kiện 1 kết thúc 2:00 PM ở Q1, Sự kiện 2 bắt đầu 2:15 PM ở Q7
  - → Cảnh báo: "Chỉ có 15 phút, không đủ thời gian di chuyển"

### 2. 📊 DASHBOARD (TỔNG QUAN)

Dashboard hiển thị thống kê tuần này:
- **Số sự kiện**: Tổng số công việc trong tuần
- **Giờ làm việc**: Tổng thời gian thực thi công việc
- **Giờ di chuyển**: Ước tính thời gian di chuyển giữa các địa điểm
- **Thời gian rảnh**: Thời gian còn lại sau khi trừ làm việc + di chuyển + ngủ

#### Danh sách sự kiện:
- **Lịch trình hôm nay**: Các sự kiện trong ngày
- **Sự kiện sắp tới**: 5 sự kiện gần nhất

Mỗi sự kiện hiển thị:
- 🕐 Giờ và ngày
- 📋 Tên công việc
- 📍 Địa điểm
- 👥 Team (nếu có)
- 📝 Ghi chú (nếu có)
- Nút ✏️ Sửa và 🗑️ Xóa

### 3. 📅 LỊCH THÁNG

Xem lịch dạng tháng:
- Ngày có sự kiện được đánh dấu chấm tròn 🔴
- Ngày hôm nay được tô màu nổi bật
- Click vào ngày để xem chi tiết sự kiện
- Chuyển tháng bằng nút ◀ và ▶

### 4. 👥 QUẢN LÝ TEAM

#### Team mặc định:
- 🎙️ Team Lồng tiếng
- 🎭 Team Kịch nói
- 💄 Team Hóa trang
- 🎬 Team Sản xuất

#### Tạo team mới:
1. Click nút **"+ Tạo team mới"**
2. Nhập tên team
3. Nhập danh sách thành viên (mỗi dòng 1 người)
4. Click **"Tạo team"**

#### Chỉnh sửa/Xóa team:
- Click nút ✏️ **Sửa** để chỉnh sửa thành viên
- Click nút 🗑️ **Xóa** để xóa team

#### Gửi lịch trình cho người ngoài:
1. Nhập email người nhận
2. Chọn sự kiện muốn chia sẻ
3. Click **"📧 Gửi email"**
4. Email client sẽ mở với nội dung đã điền sẵn
5. Gửi email

💡 **Lưu ý**: Tính năng này dùng để gửi cho người KHÔNG dùng app (như khách mời, cộng tác viên tạm thời)

### 5. 📥 XUẤT SANG GOOGLE CALENDAR

Sau khi thêm sự kiện, click nút **"📥 Xuất sang Google Calendar"**:
1. File `.ics` sẽ được tải xuống
2. Mở file `.ics`
3. Chọn **"Google Calendar"** (hoặc ứng dụng lịch khác)
4. Click **"Lưu"**
5. Sự kiện sẽ xuất hiện trong Google Calendar của bạn
6. Bạn sẽ nhận thông báo push trên điện thoại

💡 **Mẹo**: Làm thế này cho mọi sự kiện quan trọng để nhận thông báo!

---

## 🤖 TÍCH HỢP GEMINI AI

### Tại sao cần Gemini AI?
Với Gemini AI, bạn có thể:
- 🗣️ Nhập sự kiện bằng giọng nói HOÀN TOÀN TỰ NHIÊN
  - Thay vì: Điền form thủ công
  - Bạn nói: "Thêm lịch diễn kịch ngày 20 tháng 2 lúc 3 giờ chiều tại Nhà hát Hòa Bình, nhớ đem đạo cụ"
  - AI tự động hiểu và tạo sự kiện đầy đủ thông tin

- 💬 Chat với lịch trình của bạn
  - "Tuần này tôi bận không?"
  - "Tôi có thể nhận thêm lời mời vào thứ 5 không?"
  - "Tối ưu lịch tuần sau giúp tôi"

- 🧠 Đề xuất thông minh
  - Phát hiện lịch trình quá tải
  - Đề xuất dời/hủy sự kiện
  - Gợi ý thời gian rảnh tốt nhất

### 🔧 HƯỚNG DẪN TÍCH HỢP

#### Bước 1: Lấy Gemini API Key (MIỄN PHÍ)

1. **Truy cập**: https://aistudio.google.com/app/apikey
2. **Đăng nhập** bằng tài khoản Google của bạn
3. Click nút **"Create API Key"**
4. Chọn project (hoặc tạo project mới)
5. **Copy API key** (bắt đầu bằng `AIza...`)
   - ⚠️ Lưu ý: Giữ API key này BÍ MẬT, đừng chia sẻ

#### Bước 2: Thêm API Key vào App

1. **Mở file** `artist-schedule-manager.html` bằng **text editor**
   - Notepad (Windows)
   - TextEdit (Mac)
   - VS Code, Sublime Text, Notepad++...

2. **Tìm dòng** (gần đầu file, sau thẻ `<script>`):
   ```javascript
   const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';
   ```

3. **Thay thế** `YOUR_API_KEY_HERE` bằng API key của bạn:
   ```javascript
   const GEMINI_API_KEY = 'AIzaSyAbc123...xyz789';
   ```

4. **Lưu file** (Ctrl+S / Cmd+S)

5. **Tải lại trang** trong trình duyệt (F5 / Cmd+R)

#### Bước 3: Kiểm tra hoạt động

1. Vào tab **"🤖 AI Assistant"**
2. Thông báo cảnh báo màu vàng sẽ biến mất
3. Gõ tin nhắn test: "Xin chào"
4. Nếu AI trả lời → **Thành công!** 🎉

### 💰 Chi phí sử dụng Gemini API

#### Gói miễn phí (Free tier):
- **15 requests/phút** (đủ cho 1 người dùng)
- **1,500 requests/ngày**
- **1 triệu tokens/tháng**
- → **Hoàn toàn MIỄN PHÍ** cho cá nhân!

#### Nếu vượt hạn mức miễn phí:
- Gemini 2.0 Flash: **$0.15/1 triệu ký tự**
- Ước tính: **$0-5/tháng** cho nghệ sĩ bận rộn

💡 **Lưu ý**: Với cá nhân, bạn khó vượt hạn mức free!

### 🎤 Sử dụng AI Voice Input

Sau khi tích hợp Gemini API:

1. Vào tab **"⚡ Thêm nhanh"**
2. Click nút 🎤 microphone
3. Nói HOÀN TOÀN TỰ NHIÊN:
   ```
   "Thêm lịch diễn kịch ngày 20 tháng 2 
    lúc 3 giờ chiều tại Nhà hát Hòa Bình, 
    thời lượng 2 tiếng, cần có mặt trước 30 phút, 
    nhớ đem micro và đạo cụ"
   ```

4. AI sẽ tự động:
   - Parse thông tin
   - Điền đầy đủ vào form
   - Cảnh báo xung đột (nếu có)

5. Bạn chỉ cần xác nhận hoặc chỉnh sửa nhỏ → Lưu!

### 💬 Chat với AI Assistant

Hỏi những câu như:
- "Tuần này tôi có bao nhiêu sự kiện?"
- "Ngày nào tôi rảnh nhất?"
- "Tôi có thể nhận thêm công việc vào thứ 4 không?"
- "Tối ưu lịch tuần sau giúp tôi"
- "Cảnh báo nếu tôi quá tải"

AI sẽ phân tích dữ liệu lịch của bạn và đưa ra câu trả lời thông minh!

---

## 🛠️ TÍNH NĂNG NÂNG CAO

### 1. Dữ liệu lưu ở đâu?
- **LocalStorage** của trình duyệt (lưu trên máy bạn)
- **Ưu điểm**: 
  - Hoàn toàn riêng tư
  - Hoạt động offline
  - Không mất phí hosting
- **Nhược điểm**:
  - Không đồng bộ giữa các thiết bị
  - Nếu xóa cache trình duyệt → Mất dữ liệu

💡 **Giải pháp**: Xuất file ICS định kỳ để backup!

### 2. Chia sẻ app cho đồng nghiệp

Cách 1: **Gửi file HTML**
- Gửi file `artist-schedule-manager.html` qua email/USB
- Người nhận mở file bằng trình duyệt
- ⚠️ Lưu ý: Mỗi người có dữ liệu riêng

Cách 2: **Host online** (nâng cao)
- Upload lên Google Drive → Share link
- Hoặc dùng GitHub Pages (miễn phí)
- Hoặc Netlify/Vercel (miễn phí)

### 3. Backup & Restore dữ liệu

#### Backup:
1. Mở **Developer Tools** (F12)
2. Tab **Console**
3. Gõ: `console.log(JSON.stringify(localStorage))`
4. Copy kết quả → Lưu vào file text

#### Restore:
1. Mở Developer Tools (F12)
2. Tab Console
3. Paste nội dung backup
4. Tải lại trang

---

## ❓ CÂU HỎI THƯỜNG GẶP

### Q1: Tại sao giọng nói không hoạt động?
**A**: Kiểm tra:
- ✅ Cho phép truy cập micro trong trình duyệt
- ✅ Dùng trình duyệt Chrome/Edge (hỗ trợ tốt nhất)
- ✅ Đảm bảo có kết nối internet (API giọng nói cần internet)
- ✅ Nói rõ ràng, không quá nhanh

### Q2: App có hoạt động trên điện thoại không?
**A**: **CÓ!** App được tối ưu cho mobile:
- Giao diện responsive
- Touch-friendly
- Giọng nói hoạt động trên Safari (iOS) và Chrome (Android)

💡 **Mẹo**: Thêm app vào màn hình chính:
- **iOS**: Safari → Share → Add to Home Screen
- **Android**: Chrome → Menu (⋮) → Add to Home screen

### Q3: Làm sao để nhận thông báo như Google Calendar?
**A**: Xuất sự kiện sang Google Calendar:
1. Thêm sự kiện trong app
2. Click **"Xuất sang Google Calendar"**
3. Mở file ICS → Lưu vào Google Calendar
4. Google Calendar sẽ gửi thông báo push

### Q4: Có thể đồng bộ giữa nhiều thiết bị không?
**A**: Hiện tại KHÔNG tự động. Giải pháp:
- **Cách 1**: Chỉ dùng 1 thiết bị chính
- **Cách 2**: Xuất ICS → Import vào Google Calendar (đồng bộ mọi nơi)
- **Cách 3**: (Nâng cao) Tích hợp Firebase để đồng bộ real-time

### Q5: Gemini API có an toàn không?
**A**: **CÓ**, nhưng lưu ý:
- ⚠️ API key nên giữ BÍ MẬT
- ✅ Dữ liệu gửi lên Gemini để xử lý (Google có thể thấy)
- ✅ Không gửi thông tin nhạy cảm/cá nhân
- ✅ Chỉ gửi dữ liệu lịch trình công việc

### Q6: Chi phí thật sự là bao nhiêu?
**A**: 
- **App**: Hoàn toàn MIỄN PHÍ
- **Gemini API**: 
  - Free tier: 1.5M requests/tháng (đủ xài!)
  - Vượt hạn mức: ~$0-5/tháng
- **Google Calendar**: Miễn phí
- **Tổng**: **$0-5/tháng** (hầu hết là $0)

### Q7: Tôi không biết code, có thể tùy chỉnh không?
**A**: **CÓ một số thứ đơn giản**:
- Đổi màu: Tìm `--primary: #FF6B35;` trong file
- Đổi tên team: Tìm `teams = [...]` trong file
- Thêm team mới: Dùng chức năng "Tạo team mới" trong app

**Không nên** sửa code phức tạp nếu không biết lập trình!

### Q8: App có thể thay thế Google Calendar không?
**A**: **KHÔNG**, app là BỔ TRỢ cho Google Calendar:
- App: Quản lý thông minh, cảnh báo xung đột, overview
- Google Calendar: Đồng bộ, thông báo push, chia sẻ
- **Kết hợp**: App để lên lịch + Google Calendar để nhận thông báo

---

## 🎯 WORKFLOW KHUYÊN DÙNG

### Quy trình làm việc tối ưu:

#### 1. Sáng: Kiểm tra lịch ngày
- Mở app → Tab **📊 Tổng quan**
- Xem "Lịch trình hôm nay"
- Chuẩn bị đạo cụ, trang phục theo ghi chú

#### 2. Khi có lời mời mới:
- Mở app → Tab **⚡ Thêm nhanh**
- Nhập thông tin (hoặc dùng giọng nói)
- **Kiểm tra cảnh báo xung đột**
- Nếu OK → Lưu → Xuất sang Google Calendar

#### 3. Cuối tuần: Review & lên kế hoạch
- Tab **📊 Tổng quan** → Xem thống kê tuần vừa rồi
- Tab **📅 Lịch** → Lên kế hoạch tuần sau
- Kiểm tra **thời gian rảnh** → Quyết định nhận thêm công việc

#### 4. Khi làm việc team:
- Tạo sự kiện → Chọn team
- Tab **👥 Team** → Gửi email cho thành viên
- Hoặc xuất ICS → Share trong group chat

---

## 🚀 KẾT LUẬN

**Artist Schedule Manager** là công cụ mạnh mẽ giúp bạn:
- ✅ Quản lý lịch trình chuyên nghiệp
- ✅ Tránh xung đột thời gian
- ✅ Tối ưu thời gian làm việc
- ✅ Phối hợp team hiệu quả
- ✅ Tích hợp AI thông minh (với Gemini)

**Bắt đầu ngay hôm nay** và trải nghiệm sự khác biệt!

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề hoặc cần tùy chỉnh thêm, hãy liên hệ với người tạo app!

**Chúc bạn quản lý lịch trình hiệu quả! 🎭✨**

---

*Phiên bản: 1.0 | Cập nhật: Tháng 2, 2026*
