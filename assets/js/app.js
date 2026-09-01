/* ===== توابع مشترک سایت ===== */

/* فرمت قیمت به تومان */
function fmt(n) {
  return Number(n || 0).toLocaleString("fa-IR");
}

function faNum(n) {
  return Number(n || 0).toLocaleString("fa-IR");
}

/* ===== سبد خرید (localStorage) ===== */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cod_cart") || "[]");
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cod_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id) {
  const cart = getCart();
  if (!cart.includes(String(id))) {
    cart.push(String(id));
    saveCart(cart);
    showToast("✅ اکانت به سبد خرید اضافه شد");
  } else {
    showToast("ℹ️ این اکانت قبلاً در سبد خرید شماست");
  }
}

function removeFromCart(id) {
  saveCart(getCart().filter(x => x !== String(id)));
}

function cartTotal() {
  return getCart().reduce((sum, id) => {
    const a = findAccount(id);
    return sum + (a ? Number(a.price) : 0);
  }, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const c = getCart().length;
    el.textContent = c;
    el.style.display = c > 0 ? "flex" : "none";
  });
}

/* ===== اعلان (Toast) ===== */
function showToast(msg) {
  let box = document.getElementById("toastBox");
  if (!box) {
    box = document.createElement("div");
    box.id = "toastBox";
    box.className = "toast-box";
    document.body.appendChild(box);
  }
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => t.classList.add("show"), 10);
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 2600);
}

/* ===== کارت اکانت ===== */
function accountCard(a) {
  const old = a.oldPrice ? `<span class="old-price">${fmt(a.oldPrice)}</span>` : "";
  const badges = [];
  if (a.featured) badges.push('<span class="badge badge-featured">⭐ ویژه</span>');
  if (a.verified) badges.push('<span class="badge badge-verified">✔ تأییدشده</span>');
  if (a.instant) badges.push('<span class="badge badge-instant">⚡ تحویل فوری</span>');
  if (a.pending) badges.push('<span class="badge badge-pending">⏳ در انتظار تأیید</span>');
  const card = `
  <div class="account-card">
    <a href="detail.html?id=${a.id}" class="card-img-wrap">
      <img src="${a.image}" alt="${a.title}" loading="lazy">
      <div class="card-badges">${badges.join("")}</div>
      <span class="card-game">${a.game}</span>
    </a>
    <div class="card-body">
      <a href="detail.html?id=${a.id}"><h3 class="card-title">${a.title}</h3></a>
      <div class="card-stats">
        <span title="سطح">🎖 لول ${faNum(a.level)}</span>
        <span title="رنک">🏆 ${a.rank}</span>
        <span title="سی‌پی">💎 ${faNum(a.cp)}</span>
        <span title="اسلحه افسانه‌ای">🔫 ${faNum(a.legendary)}</span>
      </div>
      <div class="card-price-row">
        <div class="price-box"><span class="price">${fmt(a.price)}</span><span class="toman">تومان</span>${old}</div>
        <button class="btn btn-orange btn-sm" onclick="addToCart(${JSON.stringify(a.id)})">خرید</button>
      </div>
    </div>
  </div>`;
  return card;
}

/* ===== اجرای اولیه ===== */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  /* منوی موبایل */
  const burger = document.getElementById("navBurger");
  const menu = document.getElementById("navMenu");
  if (burger && menu) {
    burger.addEventListener("click", () => menu.classList.toggle("open"));
  }

  /* سال فوتر */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().toLocaleDateString("fa-IR", { year: "numeric" });
  });

  /* آکاردئون سوالات متداول */
  document.querySelectorAll(".faq-item > button").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
});
