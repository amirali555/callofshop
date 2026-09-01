/* ===== داده‌های اکانت‌ها ===== */
const ACCOUNTS = [
  {
    id: 1,
    title: "اکانت لجندری VIP",
    game: "کالاف موبایل",
    level: 150,
    rank: "لجندری",
    cp: 20000,
    legendary: 3,
    mythic: 1,
    skins: ["اسکین افسانه‌ای", "اسکین میتیک"],
    price: 4850000,
    oldPrice: 5500000,
    image: "assets/img/acc1.jpg",
    verified: true,
    instant: true,
    featured: true,
    desc: "اکانت فوق‌حرفه‌ای با رنک لجندری و بهترین اسکین‌ها. این اکانت همه‌چیز داره: اسلحه‌های افسانه‌ای و میتیک، هزاران سی‌پی و آواتارهای ویژه. مناسب بازیکنانی که می‌خوان بدون دردسر تو بالاترین سطح رقابت کنن.",
    features: ["رنک لجندری معتبر", "۲۰٬۰۰۰ سی‌پی", "۳ اسلحه افسانه‌ای + ۱ میتیک", "آواتار و کارت بازیکن ویژه", "ایمیل و اطلاعات کامل تحویل می‌شود", "گارانتی ۷۲ ساعته"]
  },
  {
    id: 2,
    title: "اکانت اسنایپر حرفه‌ای",
    game: "کالاف موبایل",
    level: 120,
    rank: "استاد بزرگ",
    cp: 12500,
    legendary: 2,
    mythic: 0,
    skins: ["اسکین نایتمیکر"],
    price: 2900000,
    oldPrice: 3200000,
    image: "assets/img/acc2.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "اکانت مخصوص علاقه‌مندان به اسنایپر با ۲ اسلحه افسانه‌ای اسنایپر و اسکین نایتمیکر. رنک استاد بزرگ و بیش از ۱۲ هزار سی‌پی آماده خرج کردن!",
    features: ["۲ اسلحه افسانه‌ای اسنایپر", "۱۲٬۵۰۰ سی‌پی", "اسکین نایتمیکر", "رنک استاد بزرگ", "تحویل فوری اطلاعات"]
  },
  {
    id: 3,
    title: "اکانت سایبر میتیک",
    game: "کالاف موبایل",
    level: 145,
    rank: "لجندری",
    cp: 25000,
    legendary: 4,
    mythic: 2,
    skins: ["اسکین ربات جنگی", "اسکین میتیک"],
    price: 7200000,
    oldPrice: 8000000,
    image: "assets/img/acc3.jpg",
    verified: true,
    instant: false,
    featured: true,
    desc: "قدرتمندترین اکانت موجود! ۲ اسلحه میتیک و ۴ اسلحه افسانه‌ای به همراه اسکین ربات جنگی. رنک لجندری و ۲۵ هزار سی‌پی. این اکانت برای بازیکنان حرفه‌ای و استریمرهاست.",
    features: ["۲ اسلحه میتیک", "۴ اسلحه افسانه‌ای", "۲۵٬۰۰۰ سی‌پی", "اسکین ربات جنگی", "رنک لجندری", "گارانتی اصالت"]
  },
  {
    id: 4,
    title: "اکانت اقتصادی",
    game: "کالاف موبایل",
    level: 90,
    rank: "حرفه‌ای",
    cp: 5000,
    legendary: 1,
    mythic: 0,
    skins: ["اسکین ویژه"],
    price: 1450000,
    oldPrice: 1700000,
    image: "assets/img/acc4.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "اکانت اقتصادی ولی کامل برای شروع! یک اسلحه افسانه‌ای، ۵ هزار سی‌پی و رنک حرفه‌ای. بهترین انتخاب برای کسانی که با بودجه کم می‌خوان یه اکانت خوب بخرن.",
    features: ["۱ اسلحه افسانه‌ای", "۵٬۰۰۰ سی‌پی", "رنک حرفه‌ای", "قیمت اقتصادی", "تحویل فوری"]
  },
  {
    id: 5,
    title: "اکانت سایبرپانک",
    game: "کالاف موبایل",
    level: 130,
    rank: "استاد بزرگ",
    cp: 8000,
    legendary: 2,
    mythic: 0,
    skins: ["اسکین سایبرپانک"],
    price: 2200000,
    oldPrice: 2500000,
    image: "assets/img/acc5.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "با اسکین سایبرپانک و ۲ اسلحه افسانه‌ای، تو هر مسابقه بدرخش! رنک استاد بزرگ و ۸ هزار سی‌پی آماده خرج.",
    features: ["۲ اسلحه افسانه‌ای", "۸٬۰۰۰ سی‌پی", "اسکین سایبرپانک", "رنک استاد بزرگ", "تحویل فوری"]
  },
  {
    id: 6,
    title: "اکانت طلایی VIP",
    game: "کالاف موبایل",
    level: 150,
    rank: "لجندری",
    cp: 15000,
    legendary: 3,
    mythic: 1,
    skins: ["اسکین طلایی", "اسکین افسانه‌ای"],
    price: 3950000,
    oldPrice: 4500000,
    image: "assets/img/acc6.jpg",
    verified: true,
    instant: true,
    featured: true,
    desc: "اکانت طلایی با اسکین‌های نایاب! رنک لجندری، ۱۵ هزار سی‌پی و ترکیبی از اسلحه‌های افسانه‌ای و میتیک. آماده رقابت در بالاترین سطح.",
    features: ["۳ اسلحه افسانه‌ای + ۱ میتیک", "۱۵٬۰۰۰ سی‌پی", "اسکین طلایی VIP", "رنک لجندری", "گارانتی ۷۲ ساعته"]
  },
  {
    id: 7,
    title: "اکانت شروع کار",
    game: "کالاف موبایل",
    level: 45,
    rank: "نقره",
    cp: 1000,
    legendary: 0,
    mythic: 0,
    skins: ["اسکین پایه"],
    price: 480000,
    oldPrice: null,
    image: "assets/img/acc1.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "اکانت اقتصادی برای شروع کار. مناسب کسانی که می‌خوان یه اکانت تمیز و بدون محدودیت با قیمت خیلی کم داشته باشن.",
    features: ["قیمت فوق‌اقتصادی", "۱٬۰۰۰ سی‌پی", "ایمیل کامل", "تحویل فوری"]
  },
  {
    id: 8,
    title: "اکانت وارزون حرفه‌ای",
    game: "وارزون",
    level: 200,
    rank: "لجندری",
    cp: 0,
    legendary: 5,
    mythic: 2,
    skins: ["اسکین اپراتور ویژه", "اسکین میتیک"],
    price: 2800000,
    oldPrice: 3100000,
    image: "assets/img/acc2.jpg",
    verified: true,
    instant: false,
    featured: true,
    desc: "اکانت وارزون با ۵ اسلحه افسانه‌ای و ۲ میتیک! اسکین اپراتور ویژه و رنک لجندری. کامل‌ترین پکیج برای عاشقان وارزون.",
    features: ["۵ اسلحه افسانه‌ای", "۲ اسلحه میتیک", "اسکین اپراتور ویژه", "رنک لجندری", "پیشرفت کامل"]
  },
  {
    id: 9,
    title: "اکانت میان‌رده برتر",
    game: "کالاف موبایل",
    level: 105,
    rank: "استاد",
    cp: 6000,
    legendary: 2,
    mythic: 0,
    skins: ["اسکین ویژه"],
    price: 1900000,
    oldPrice: 2100000,
    image: "assets/img/acc4.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "ترکیب عالی قیمت و امکانات: ۲ اسلحه افسانه‌ای، ۶ هزار سی‌پی و رنک استاد. یک انتخاب مطمئن برای خرید.",
    features: ["۲ اسلحه افسانه‌ای", "۶٬۰۰۰ سی‌پی", "رنک استاد", "گارانتی اصالت", "تحویل فوری"]
  },
  {
    id: 10,
    title: "اکانت لجندری دوستانه",
    game: "کالاف موبایل",
    level: 135,
    rank: "لجندری",
    cp: 9500,
    legendary: 2,
    mythic: 1,
    skins: ["اسکین افسانه‌ای"],
    price: 2650000,
    oldPrice: null,
    image: "assets/img/acc5.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "اکانت لجندری با ۲ اسلحه افسانه‌ای و ۱ میتیک. ۹٬۵۰۰ سی‌پی و رنک لجندری؛ آماده بازی حرفه‌ای.",
    features: ["۲ اسلحه افسانه‌ای + ۱ میتیک", "۹٬۵۰۰ سی‌پی", "رنک لجندری", "تحویل فوری"]
  },
  {
    id: 11,
    title: "اکانت کلکسیونی سلطنتی",
    game: "کالاف موبایل",
    level: 150,
    rank: "لجندری",
    cp: 30000,
    legendary: 6,
    mythic: 3,
    skins: ["اسکین سلطنتی", "۳ اسکین میتیک"],
    price: 9800000,
    oldPrice: 11000000,
    image: "assets/img/acc3.jpg",
    verified: true,
    instant: false,
    featured: true,
    desc: "نایاب‌ترین اکانت کلکسیونی! ۳ میتیک و ۶ افسانه‌ای، ۳۰ هزار سی‌پی و رنک لجندری. این یک سرمایه‌گذاری برای کلکسیونرهاست.",
    features: ["۳ اسلحه میتیک", "۶ اسلحه افسانه‌ای", "۳۰٬۰۰۰ سی‌پی", "اسکین سلطنتی", "رنک لجندری", "گارانتی کامل"]
  },
  {
    id: 12,
    title: "اکانت شبح شب",
    game: "کالاف موبایل",
    level: 115,
    rank: "استاد بزرگ",
    cp: 7500,
    legendary: 2,
    mythic: 0,
    skins: ["اسکین شبح"],
    price: 2350000,
    oldPrice: 2600000,
    image: "assets/img/acc6.jpg",
    verified: true,
    instant: true,
    featured: false,
    desc: "اسکین شبح نایاب + ۲ اسلحه افسانه‌ای! رنک استاد بزرگ و ۷٬۵۰۰ سی‌پی. اکانتی خاص برای بازیکنان خاص.",
    features: ["اسکین شبح نایاب", "۲ اسلحه افسانه‌ای", "۷٬۵۰۰ سی‌پی", "رنک استاد بزرگ", "تحویل فوری"]
  }
];

/* اکانت‌های ثبت‌شده توسط کاربران (از localStorage) */
function getUserAccounts() {
  try {
    return JSON.parse(localStorage.getItem("cod_user_accounts") || "[]");
  } catch (e) {
    return [];
  }
}

function saveUserAccount(acc) {
  const list = getUserAccounts();
  acc.id = "u" + Date.now();
  acc.verified = false;
  acc.instant = false;
  acc.featured = false;
  acc.pending = true;
  list.unshift(acc);
  localStorage.setItem("cod_user_accounts", JSON.stringify(list));
  return acc;
}

/* همه اکانت‌ها (رسمی + کاربری) */
function getAllAccounts() {
  return ACCOUNTS.concat(getUserAccounts());
}

function findAccount(id) {
  const s = String(id);
  return getAllAccounts().find(a => String(a.id) === s) || null;
}
