# 🚀 HƯỚNG DẪN SETUP NHANH - 10 PHÚT

## 📋 Checklist trước khi bắt đầu

- [ ] Có tài khoản Google
- [ ] Có trình duyệt Chrome/Edge
- [ ] Có text editor (VS Code, Notepad++)

---

## ⚡ SETUP SIÊU NHANH

### 1️⃣ TẠO GOOGLE CLOUD PROJECT (3 phút)

**Bước 1.1:** Vào https://console.cloud.google.com

**Bước 1.2:** Click **"Select a project"** → **"New Project"**
```
Project name: Artist Schedule Manager
Location: No organization
```

**Bước 1.3:** Click **"Create"** và đợi vài giây

---

### 2️⃣ BẬT CÁC API (2 phút)

**Bước 2.1:** Trong project vừa tạo, search "API Library" ở thanh tìm kiếm

**Bước 2.2:** Tìm và Enable từng API sau:

✅ **Google Calendar API**
```
1. Search "Calendar API"
2. Click vào "Google Calendar API"
3. Click "Enable"
```

✅ **Google Tasks API**
```
1. Search "Tasks API"  
2. Click vào "Google Tasks API"
3. Click "Enable"
```

✅ **Google Maps JavaScript API**
```
1. Search "Maps JavaScript API"
2. Click vào "Maps JavaScript API"
3. Click "Enable"
```

✅ **Google Places API**
```
1. Search "Places API"
2. Click vào "Places API"
3. Click "Enable"
```

---

### 3️⃣ TẠO CREDENTIALS (3 phút)

**Bước 3.1: Tạo OAuth Client ID**

1. Vào **APIs & Services** → **Credentials**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Nếu yêu cầu, click **"Configure Consent Screen"**:
   ```
   User Type: External
   App name: Artist Schedule Manager
   User support email: your-email@gmail.com
   Developer contact: your-email@gmail.com
   ```
4. Click **"Save and Continue"** → **"Save and Continue"** → **"Back to Dashboard"**

5. Quay lại **Credentials** → **"Create Credentials"** → **"OAuth client ID"**
   ```
   Application type: Web application
   Name: Artist Schedule Web Client
   
   Authorized JavaScript origins:
   - http://localhost:8080
   - http://127.0.0.1:8080
   
   (Nếu dùng GitHub Pages thì thêm sau)
   ```

6. Click **"Create"**
7. **COPY CLIENT ID** (dạng: `xxxxx.apps.googleusercontent.com`)

**Bước 3.2: Tạo API Key**

1. Vào **Credentials** → **"Create Credentials"** → **"API Key"**
2. **COPY API KEY**
3. (Tùy chọn) Click **"Restrict Key"**:
   ```
   Application restrictions: HTTP referrers
   Website restrictions: 
   - http://localhost:8080/*
   - http://127.0.0.1:8080/*
   
   API restrictions: 
   - Google Calendar API
   - Google Tasks API
   - Google Maps JavaScript API
   - Google Places API
   ```
4. Click **"Save"**

---

### 4️⃣ LẤY GEMINI API KEY (1 phút)

**Bước 4.1:** Vào https://makersuite.google.com/app/apikey

**Bước 4.2:** Click **"Create API Key"**

**Bước 4.3:** Chọn project vừa tạo

**Bước 4.4:** **COPY GEMINI API KEY**

---

### 5️⃣ CẤU HÌNH CODE (1 phút)

**Bước 5.1:** Mở file `index.html` bằng text editor

**Bước 5.2:** Tìm đoạn code này (dòng ~900):

```javascript
const CONFIG = {
    CLIENT_ID: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
    API_KEY: 'YOUR_API_KEY',
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY',
    // ...
};
```

**Bước 5.3:** Thay thế:
- `YOUR_CLIENT_ID` → Paste OAuth Client ID (bước 3.1)
- `YOUR_API_KEY` → Paste API Key (bước 3.2)
- `YOUR_GEMINI_API_KEY` → Paste Gemini API Key (bước 4)

**Bước 5.4:** Tìm dòng này (dòng ~890):

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_MAPS_API_KEY&libraries=places"></script>
```

**Bước 5.5:** Thay `YOUR_MAPS_API_KEY` → Paste API Key (cùng key ở bước 3.2)

**Bước 5.6:** Save file

---

## ✅ CHẠY APP

### Cách 1: Python Server (KHUYẾN NGHỊ)

```bash
# Mở Terminal/CMD tại thư mục chứa index.html
python -m http.server 8080

# Hoặc Python 3
python3 -m http.server 8080

# Truy cập: http://localhost:8080
```

### Cách 2: Node.js

```bash
npx http-server -p 8080
```

### Cách 3: VS Code Live Server

1. Cài extension **"Live Server"**
2. Right-click vào `index.html`
3. Chọn **"Open with Live Server"**

---

## 🎯 TEST APP

### Test 1: Đăng nhập
1. Click **"Đăng nhập với Google"**
2. Chọn tài khoản Google
3. Click **"Allow"** để cấp quyền
4. ✅ Thấy **"Đã kết nối với Google"**

### Test 2: Tạo sự kiện
1. Vào tab **"➕ Thêm sự kiện"**
2. Điền thông tin:
   ```
   Tên: Test Event
   Ngày: Hôm nay
   Giờ: 14:00
   Địa điểm: Nhà hát Thành phố
   ```
3. Click **"✨ Tạo sự kiện"**
4. ✅ Thấy thông báo **"Đã tạo sự kiện"**

### Test 3: Kiểm tra Google Calendar
1. Mở https://calendar.google.com
2. ✅ Thấy sự kiện "Test Event" xuất hiện

### Test 4: Test Tasks
1. Trong app, check **"Tạo task"** khi tạo sự kiện
2. Vào tab **"✅ Tasks"**
3. ✅ Thấy task xuất hiện
4. Mở https://tasks.google.com
5. ✅ Task cũng xuất hiện ở đây

### Test 5: Test Voice Input
1. Vào tab **"➕ Thêm sự kiện"**
2. Click **"🎤 Bắt đầu nói"**
3. Nói: "Tạo sự kiện họp ngày mai lúc 9 giờ"
4. ✅ AI nhận diện và hiển thị

---

## 🔥 DEPLOY LÊN INTERNET

### Option 1: GitHub Pages (MIỄN PHÍ)

```bash
# 1. Tạo repo mới trên GitHub (public)
# 2. Trong thư mục project:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main

# 3. Vào GitHub repo → Settings → Pages
# 4. Source: Deploy from branch → main → /root
# 5. Save
# 6. Đợi 2-3 phút
# 7. Truy cập: https://USERNAME.github.io/REPO_NAME
```

**QUAN TRỌNG:** Sau khi có URL GitHub Pages, phải:

1. Quay lại Google Cloud Console
2. Vào **Credentials** → Click vào OAuth Client ID
3. Thêm vào **Authorized JavaScript origins**:
   ```
   https://USERNAME.github.io
   ```
4. Click **Save**

### Option 2: Vercel (MIỄN PHÍ)

```bash
# Cài Vercel CLI
npm i -g vercel

# Trong thư mục project
vercel

# Follow prompts
# Link sẽ là: https://your-project.vercel.app
```

### Option 3: Netlify Drop (SIÊU NHANH)

1. Vào https://app.netlify.com/drop
2. Kéo thả file `index.html` vào
3. Đợi 10 giây
4. ✅ Có link ngay!

---

## 📱 SỬ DỤNG TRÊN ĐIỆN THOẠI

### Cài Google Calendar app
1. Tải **Google Calendar** từ App Store/Play Store
2. Đăng nhập cùng tài khoản

### Cài Google Tasks app
1. Tải **Google Tasks** từ App Store/Play Store
2. Đăng nhập cùng tài khoản

### Nhận Notification
1. Mở Calendar app → Settings
2. Bật **Notifications**
3. ✅ Từ giờ sẽ nhận push notification tự động!

---

## 🐛 LỖI THƯỜNG GẶP

### Lỗi: "This app isn't verified"
**Nguyên nhân:** OAuth screen chưa được Google verify (bình thường)

**Giải pháp:** 
1. Click **"Advanced"**
2. Click **"Go to Artist Schedule Manager (unsafe)"**
3. Click **"Allow"**

**Lưu ý:** Chỉ bạn dùng app này nên không sao!

---

### Lỗi: "Access blocked"
**Nguyên nhân:** Authorized origins chưa đúng

**Giải pháp:**
1. Vào Google Cloud Console → Credentials
2. Click vào OAuth Client ID
3. Kiểm tra **Authorized JavaScript origins** có chứa:
   - `http://localhost:8080` (nếu chạy local)
   - URL deploy của bạn (nếu đã deploy)
4. Save lại

---

### Lỗi: "API key not valid"
**Giải pháp:**
1. Đợi 2-3 phút sau khi tạo key
2. Kiểm tra đã copy đúng key chưa
3. Kiểm tra API restrictions (nên để None lúc đầu)

---

### Không thấy sự kiện trong Calendar
**Giải pháp:**
1. Click nút **"🔄 Tải lại"** trong app
2. Refresh Google Calendar trong browser
3. Kiểm tra đã đăng nhập đúng tài khoản chưa

---

## 📊 KIỂM TRA HOẠT ĐỘNG

### 1. Kiểm tra API Usage
1. Vào Google Cloud Console
2. Vào **APIs & Services** → **Dashboard**
3. Xem biểu đồ requests của:
   - Calendar API
   - Tasks API
   - Maps API

### 2. Kiểm tra Errors
1. Vào **APIs & Services** → **Dashboard**
2. Nếu có lỗi sẽ hiển thị màu đỏ
3. Click vào để xem chi tiết

---

## 🎓 VIDEO HƯỚNG DẪN

Nếu gặp khó khăn, xem video chi tiết:

1. **Setup Google Cloud Project**: https://www.youtube.com/watch?v=xxx (TẠO VIDEO NÀY)
2. **Deploy to GitHub Pages**: https://www.youtube.com/watch?v=xxx

---

## 💡 TIPS & TRICKS

### Tip 1: Test nhanh API
Mở Console (F12) và chạy:
```javascript
// Test Calendar API
gapi.client.calendar.events.list({
    calendarId: 'primary',
    maxResults: 1
}).then(res => console.log('✅ Calendar OK', res));

// Test Tasks API  
gapi.client.tasks.tasks.list({
    tasklist: '@default',
    maxResults: 1
}).then(res => console.log('✅ Tasks OK', res));
```

### Tip 2: Debug Voice Input
```javascript
// Test Speech Recognition
const recognition = new webkitSpeechRecognition();
recognition.lang = 'vi-VN';
recognition.onresult = (e) => console.log(e.results[0][0].transcript);
recognition.start();
```

### Tip 3: Xem API quota
```bash
# Daily quota
Calendar API: 1,000,000 requests/day (FREE)
Tasks API: 50,000 requests/day (FREE)
Maps API: 28,000 map loads/month (FREE)
Gemini API: 60 requests/minute (FREE)
```

---

## 📞 HỖ TRỢ

### Nếu vẫn gặp lỗi:

1. **Check file index.html:**
   - Đã thay đúng CLIENT_ID chưa?
   - Đã thay đúng API_KEY chưa?
   - Đã thay đúng GEMINI_API_KEY chưa?

2. **Check Google Cloud Console:**
   - Đã Enable đủ 4 APIs chưa?
   - Authorized origins có đúng URL không?

3. **Check Browser Console (F12):**
   - Có lỗi màu đỏ không?
   - Copy lỗi và search Google

4. **Tạo Issue trên GitHub** với thông tin:
   - Mô tả lỗi
   - Screenshot
   - Browser version
   - Error message

---

## 🎉 HOÀN TẤT!

Nếu đã làm đến đây, xin chúc mừng! Bạn đã có:

✅ App quản lý lịch trình nghệ sĩ
✅ Tích hợp Google Calendar
✅ Tích hợp Google Tasks
✅ Tích hợp Google Maps
✅ AI Assistant với Gemini
✅ Voice Input tiếng Việt
✅ Auto notifications
✅ Real-time sync

**Bắt đầu sử dụng ngay và tận hưởng! 🚀**
