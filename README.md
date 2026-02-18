# 🎭 Artist Schedule Pro

Ứng dụng quản lý lịch trình nghệ sĩ chuyên nghiệp với Google Calendar, Tasks & AI.

## ✨ Tính năng

- **🔐 Đăng nhập Google** - OAuth 2.0 an toàn
- **📅 Google Calendar** - Tạo, xem, xóa sự kiện
- **✅ Google Tasks** - Quản lý công việc
- **🤖 AI Assistant** - Trò chuyện với Gemini AI
- **🎤 Voice Input** - Nhập liệu bằng giọng nói
- **📱 PWA** - Cài đặt trên điện thoại

## 🚀 Deploy lên GitHub Pages

```bash
# 1. Tạo repository mới trên GitHub
# 2. Push code lên repository

git init
git add .
git commit -m "Initial commit - Artist Schedule Pro"
git remote add origin https://github.com/emailhuynhhuy/artist-schedule-pro.git
git push -u origin main

# 3. Vào Settings > Pages
# 4. Chọn Source: Deploy from a branch
# 5. Chọn Branch: main, folder: / (root)
# 6. Save

# 7. Đợi 1-2 phút, truy cập:
# https://emailhuynhhuy.github.io/artist-schedule-pro
```

## ⚙️ Cấu hình Google Cloud

Đã được cấu hình sẵn:
- **OAuth Client ID**: `39843911219-urmbnv4jhgr6fmt1kd9iif473ibqkvls.apps.googleusercontent.com`
- **API Key**: `AIzaSyAPBtaq876_VQo0TL6NVLeo5dp3mevowQw`
- **Gemini API Key**: `AIzaSyAqp_9ktO7lj84dvkrPHACxjJ0pjTTGdUE`

## 📁 Cấu trúc file

```
artist-schedule-pro/
├── index.html        # Ứng dụng chính
├── manifest.json    # PWA manifest
├── sw.js           # Service Worker
├── icon-192.svg    # Icon 192px
├── icon-512.svg    # Icon 512px
└── README.md       # File này
```

## 🛠️ Phát triển

```bash
# Chạy local với Python
python -m http.server 8080

# Hoặc dùng Node.js
npx serve -p 8080
```

## 📋 Yêu cầu trình duyệt

- Chrome 80+
- Firefox 75+
- Safari 14+
- Edge 80+

## 📄 License

MIT License
