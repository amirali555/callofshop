# کالاف‌استور 🎮

فروشگاه خرید و فروش اکانت کالاف دیوتی — سایت استاتیک (HTML/CSS/JS) با تم گیمینگ فارسی.

## صفحات

| صفحه | آدرس |
|---|---|
| خانه | `index.html` |
| فروشگاه اکانت‌ها | `store.html` |
| جزئیات اکانت | `detail.html?id=1` |
| فروش اکانت | `sell.html` |
| سبد خرید | `cart.html` |
| سوالات متداول | `faq.html` |

## اجرای لوکال

```bash
python3 -m http.server 8080
# یا
npx serve .
```

سپس به `http://localhost:8080` برو.

## استقرار روی Render (رندر)

دو روش داری:

### روش ۱ — با Blueprint (پیشنهادی)

1. کد را روی گیت‌هاب پوش کن (این ریپو).
2. در [render.com](https://render.com) وارد شو و گیت‌هاب را وصل کن.
3. روی **New + → Blueprint** بزن.
4. ریپوی `amirali555/abobezan` را انتخاب کن (شاخه `arena/01a05ccf-abobezan`).
5. Render فایل `render.yaml` را پیدا می‌کند و سایت را خودکار می‌سازد و بالا می‌آورد.

### روش ۲ — Static Site دستی

1. در Render: **New + → Static Site**.
2. ریپوی گیت‌هاب را انتخاب کن.
3. **Branch:** `arena/01a05ccf-abobezan`
4. **Build Command:** خالی بگذار.
5. **Publish directory:** `.` (ریشه ریپو)
6. **Create Static Site** را بزن.

بعد از چند دقیقه یک آدرس مثل `https://kalafstore.onrender.com` می‌گیری که قابل اشتراک است. آپدیت‌های بعدی با هر `git push` به‌صورت خودکار دیپلوی می‌شوند.

## ساختار پروژه

```
├── index.html          صفحه اصلی
├── store.html          فروشگاه + فیلترها
├── detail.html         جزئیات اکانت
├── sell.html           فرم فروش اکانت
├── cart.html           سبد خرید
├── faq.html            سوالات متداول
├── assets/
│   ├── css/style.css   استایل‌ها
│   ├── js/data.js      داده اکانت‌ها (قابل ویرایش)
│   ├── js/app.js       منطق سایت
│   └── img/            تصاویر
└── render.yaml         تنظیمات استقرار Render
```

## ویرایش اکانت‌ها

لیست اکانت‌ها در `assets/js/data.js` است؛ قیمت، توضیحات، تصویر و مشخصات هر اکانت را همان‌جا تغییر بده.
