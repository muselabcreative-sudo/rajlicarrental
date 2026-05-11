/* RAJLI CAR RENTAL — front-end logic */

const PHONE = "+355688208884";
const PHONE_RAW = "355688208884";

/* ===========================================================
   i18n
   The toggle in the nav is labeled "AL" (when on EN) and "EN"
   (when on AL). Choice is persisted in localStorage so it sticks
   across pages and reloads.
   =========================================================== */

const DICT = {
  en: {
    "page.title": "Rajli Car Rental — Drive The Difference | Premium Car Rental in Albania",
    "brand.tagline": "Car Rental",
    "nav.fleet": "Fleet",
    "nav.about": "About",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "cta.book": "Book on WhatsApp",
    "cta.viewdetails": "View details",
    "cta.call": `Call ${PHONE}`,

    "hero.eyebrow": "Airport Service · Albania",
    "hero.title.lead": "Drive",
    "hero.title.em": "The Difference",
    "hero.lede":
      "Premium car rental service in Albania designed for travelers who value comfort, reliability, and freedom. Explore Albania on your own terms with modern, clean, and fully serviced vehicles — ready whenever you are.",
    "hero.cta.fleet": "View the fleet →",

    "about.eyebrow": "About Rajli",
    "about.heading": "Your partner on every journey.",
    "about.p1":
      "We are a professional car rental company based in Shkoder, Albania, offering a carefully selected fleet of modern and well-maintained vehicles.",
    "about.p2":
      "Whether you are a tourist exploring the Albanian Riviera or a business traveler in need of reliable transport, we ensure comfort, safety, and a premium driving experience from start to finish.",
    "about.p3":
      "We focus on simplicity, trust, and quality service — making your journey smooth and stress-free.",
    "about.stat.vehicles": "Vehicles",
    "about.stat.airport": "Airport service",
    "about.stat.whatsapp": "WhatsApp booking",

    "feat.trust.title": "Trusted & Insured",
    "feat.trust.desc":
      "Every car in our fleet is professionally maintained and fully insured for your peace of mind.",
    "feat.airport.title": "Airport Pickup",
    "feat.airport.desc":
      "Land, message us, drive away. We meet you at the airport — no queues, no paperwork delays.",
    "feat.wa.title": "Instant WhatsApp Booking",
    "feat.wa.desc":
      "One tap. We reply in minutes. No accounts, no complicated forms — just a simple message.",
    "feat.flex.title": "Flexible Rentals",
    "feat.flex.desc":
      "Daily, weekly, or longer — choose the duration that suits your trip across Albania.",

    "fleet.eyebrow": "Our Fleet",
    "fleet.heading": "Choose your drive",
    "fleet.lede":
      "Hand-picked vehicles for every kind of journey — from city errands to coastal road trips.",
    "fleet.empty": "No cars in the fleet yet.",
    "fleet.error": "Could not load fleet data.",

    "loc.eyebrow": "Find Us",
    "loc.heading": "Our Location",
    "loc.lede":
      "Based in Albania with airport pickup & drop-off. Reach out anytime — we reply fast.",
    "loc.card.title": "Rajli Car Rental — Airport Service",
    "loc.card.desc":
      "We meet you at the airport with your car ready to go. Use the WhatsApp button or call us directly to confirm your pickup.",
    "loc.row.phone": "Phone",
    "loc.row.wa": "Tap to message us",
    "loc.row.address": "Address",
    "loc.row.openmaps": "Open in Google Maps",

    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.findmap": "Find us on the map",
    "footer.findmap.short": "Google Maps",
    "footer.brandline":
      "Premium car rental in Albania. Your partner on every journey.",
    "footer.rights": "All rights reserved.",
    "footer.slogan": "Drive The Difference.",

    "detail.back": "← Back to fleet",
    "detail.eyebrow": "Rajli Fleet",
    "detail.spec.year": "Year",
    "detail.spec.transmission": "Transmission",
    "detail.spec.engine": "Engine",
    "detail.spec.service": "Service",
    "detail.spec.service.value": "Airport delivery",
    "detail.gallery": "Gallery",
    "detail.gallery.empty": "No additional photos yet.",
    "detail.notfound": "Car not found.",
    "detail.fallback":
      "Premium rental — comfortable, reliable, ready when you are.",
  },

  al: {
    "page.title":
      "Rajli Car Rental — Drejto Ndryshe | Makina me Qira Premium në Shqipëri",
    "brand.tagline": "Makina me Qira",
    "nav.fleet": "Flota",
    "nav.about": "Rreth Nesh",
    "nav.location": "Vendndodhja",
    "nav.contact": "Kontakt",
    "cta.book": "Rezervo në WhatsApp",
    "cta.viewdetails": "Shiko detajet",
    "cta.call": `Telefono ${PHONE}`,

    "hero.eyebrow": "Shërbim Aeroporti · Shqipëri",
    "hero.title.lead": "Drejto",
    "hero.title.em": "Ndryshe",
    "hero.lede":
      "Shërbim premium i marrjes me qira të makinave në Shqipëri, i dizenjuar për udhëtarët që vlerësojnë komoditetin, besueshmërinë dhe lirinë. Eksploroni Shqipërinë me kushtet tuaja, me automjete moderne, të pastra dhe plotësisht të servisuara — gati kur të jeni ju.",
    "hero.cta.fleet": "Shiko flotën →",

    "about.eyebrow": "Rreth Rajli",
    "about.heading": "Partneri yt në çdo udhëtim.",
    "about.p1":
      "Jemi një kompani profesionale e marrjes së makinave me qira me bazë në Shqipëri, që ofron një flotë të zgjedhur me kujdes të automjeteve moderne dhe të mirëmbajtura.",
    "about.p2":
      "Qoftë jeni turist që eksploron Rivierën Shqiptare, ose udhëtar pune që ka nevojë për transport të besueshëm, ne sigurojmë komoditet, siguri dhe një përvojë premium drejtimi nga fillimi në fund.",
    "about.p3":
      "Fokusohemi te thjeshtësia, besimi dhe shërbimi cilësor — duke e bërë udhëtimin tuaj të rrjedhshëm dhe pa stres.",
    "about.stat.vehicles": "Automjete",
    "about.stat.airport": "Shërbim aeroporti",
    "about.stat.whatsapp": "Rezervim WhatsApp",

    "feat.trust.title": "I Besuar dhe i Siguruar",
    "feat.trust.desc":
      "Çdo makinë në flotën tonë mirëmbahet profesionalisht dhe është plotësisht e siguruar për qetësinë tuaj.",
    "feat.airport.title": "Marrja në Aeroport",
    "feat.airport.desc":
      "Ulu nga avioni, na shkruaj dhe nis udhëtimin. Ju presim në aeroport — pa radhë, pa vonesa burokratike.",
    "feat.wa.title": "Rezervim i Menjëhershëm në WhatsApp",
    "feat.wa.desc":
      "Një prekje. Përgjigjemi për pak minuta. Pa llogari, pa formularë të komplikuar — vetëm një mesazh i thjeshtë.",
    "feat.flex.title": "Qira Fleksibël",
    "feat.flex.desc":
      "Ditore, javore ose më gjatë — zgjidhni kohëzgjatjen që i përshtatet udhëtimit tuaj nëpër Shqipëri.",

    "fleet.eyebrow": "Flota Jonë",
    "fleet.heading": "Zgjidh makinën tënde",
    "fleet.lede":
      "Automjete të zgjedhura me kujdes për çdo lloj udhëtimi — nga punët në qytet deri te udhëtimet bregdetare.",
    "fleet.empty": "Ende nuk ka makina në flotë.",
    "fleet.error": "Nuk u arrit të ngarkohen të dhënat e flotës.",

    "loc.eyebrow": "Na gjeni",
    "loc.heading": "Vendndodhja Jonë",
    "loc.lede":
      "Me bazë në Shkodër, Shqipëri, me marrje dhe dorëzim në aeroport. Na kontaktoni në çdo kohë — përgjigjemi shpejt.",
    "loc.card.title": "Rajli Car Rental — Shërbim Aeroporti",
    "loc.card.desc":
      "Ju presim në aeroport me makinën gati për nisje. Përdorni butonin WhatsApp ose na telefononi drejtpërdrejt për të konfirmuar marrjen.",
    "loc.row.phone": "Telefon",
    "loc.row.wa": "Prekni për të na shkruar",
    "loc.row.address": "Adresa",
    "loc.row.openmaps": "Hape në Google Maps",

    "footer.explore": "Eksploro",
    "footer.contact": "Kontakt",
    "footer.findmap": "Na gjeni në hartë",
    "footer.findmap.short": "Google Maps",
    "footer.brandline":
      "Makina premium me qira në Shqipëri. Partneri yt në çdo udhëtim.",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",
    "footer.slogan": "Drejto Ndryshe.",

    "detail.back": "← Kthehu te flota",
    "detail.eyebrow": "Flota Rajli",
    "detail.spec.year": "Viti",
    "detail.spec.transmission": "Ndërrimi",
    "detail.spec.engine": "Motori",
    "detail.spec.service": "Shërbimi",
    "detail.spec.service.value": "Dorëzim në aeroport",
    "detail.gallery": "Galeria",
    "detail.gallery.empty": "Ende nuk ka foto shtesë.",
    "detail.notfound": "Makina nuk u gjet.",
    "detail.fallback":
      "Qira premium — komode, e besueshme, gati kur të jeni ju.",
  },
};

/* term-level translation for chip/spec values that come from
   description.txt (Automatic / Diesel / Petrol / Hybrid / Manual …) */
const TERM = {
  al: {
    Automatic: "Automatik",
    Manual: "Manuale",
    Diesel: "Naftë",
    Petrol: "Benzinë",
    Gasoline: "Benzinë",
    Hybrid: "Hibrid",
    Electric: "Elektrik",
  },
};

let LANG = (() => {
  try {
    const saved = localStorage.getItem("rajli.lang");
    if (saved === "en" || saved === "al") return saved;
  } catch (e) {}
  return "en";
})();

function t(key) {
  return (DICT[LANG] && DICT[LANG][key]) || (DICT.en && DICT.en[key]) || key;
}

function translateValue(text) {
  if (LANG === "en" || !text) return text;
  const map = TERM[LANG] || {};
  // word-boundary replace each known term
  return text.replace(
    /\b(Automatic|Manual|Diesel|Petrol|Gasoline|Hybrid|Electric)\b/g,
    (m) => map[m] || m
  );
}

function applyI18nDom() {
  document.documentElement.lang = LANG === "al" ? "sq" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = t(key);
    if (el.tagName === "TITLE") {
      document.title = value;
    } else {
      el.textContent = value;
    }
  });
  // toggle button label: shows the *other* language
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = LANG === "en" ? "AL" : "EN";
}

function setLang(lang) {
  if (lang !== "en" && lang !== "al") return;
  LANG = lang;
  try {
    localStorage.setItem("rajli.lang", LANG);
  } catch (e) {}
  applyI18nDom();
  // re-render any dynamic content
  if (window.__RAJLI_LAST_CARS__) {
    renderFleet(window.__RAJLI_LAST_CARS__);
    renderDetail(window.__RAJLI_LAST_CARS__);
  }
  wireGenericWhatsappLinks(); // booking text uses translated CTA
}

/* ===========================================================
   WhatsApp helpers
   =========================================================== */

function waLink(carName) {
  const text = carName
    ? LANG === "al"
      ? `Përshëndetje, dua të rezervoj ${carName}`
      : `Hello, I want to book the ${carName}`
    : LANG === "al"
    ? "Përshëndetje, dua të rezervoj një makinë"
    : "Hello, I want to book a car";
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`;
}

function carPath(car, file) {
  return `${encodeURIComponent(car.folder)}/${encodeURIComponent(file)}`;
}
function galleryPath(car, file) {
  return `${encodeURIComponent(car.folder)}/Gallery/${encodeURIComponent(file)}`;
}

async function loadCars() {
  if (Array.isArray(window.__RAJLI_CARS__)) return window.__RAJLI_CARS__;
  try {
    const res = await fetch("cars.json", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  } catch (err) {
    throw new Error(t("fleet.error"));
  }
}

/* ---------- short preview from description.txt ---------- */
function previewFromDescription(desc) {
  if (!desc) return t("detail.fallback");
  const cleaned = desc
    .split("\n")
    .filter((l) => !/^\s*(🚗|📅|⚙️|⛽)|^Name|^Year|^Transmission|^Engine/i.test(l))
    .map((l) => l.trim())
    .filter(Boolean)
    .join(" ");
  return cleaned || t("detail.fallback");
}

function chip(icon, text) {
  if (!text) return "";
  return `<span class="chip">${icon} ${escapeHtml(translateValue(text))}</span>`;
}

/* ---------- HOMEPAGE: render fleet ---------- */
function renderFleet(cars) {
  const grid = document.querySelector("#fleet-grid");
  if (!grid) return;
  if (!cars.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>${t("fleet.empty")}</p>
      </div>`;
    return;
  }
  grid.innerHTML = cars
    .map((car) => {
      const img = car.main ? carPath(car, car.main) : "";
      const detail = `car.html?id=${encodeURIComponent(car.id)}`;
      const wa = waLink(car.displayName);
      return `
        <article class="car-card reveal">
          <a class="cover-link" href="${detail}" aria-label="${escapeHtml(car.displayName)}"></a>
          <div class="car-image">
            ${
              img
                ? `<img src="${img}" alt="${escapeHtml(car.displayName)}" loading="lazy">`
                : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-dim);font-size:.85rem">—</div>`
            }
            ${car.year ? `<span class="car-badge">${escapeHtml(car.year)}</span>` : ""}
          </div>
          <div class="car-body">
            <h3 class="car-name">${escapeHtml(car.displayName)}</h3>
            <div class="car-meta">
              ${chip("⚙️", car.transmission)}
              ${chip("⛽", car.engine)}
            </div>
            <div class="car-actions">
              <a class="btn btn-ghost" href="${detail}">${t("cta.viewdetails")}</a>
              <a class="btn btn-whatsapp" href="${wa}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.84 11.84 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.86 0-3.16-1.23-6.13-3.39-8.42zM12.05 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.79.99 1.01-3.7-.23-.38a9.65 9.65 0 0 1-1.48-5.1c0-5.34 4.35-9.69 9.7-9.69a9.66 9.66 0 0 1 6.86 2.84 9.62 9.62 0 0 1 2.84 6.86c0 5.35-4.35 9.7-9.69 9.7zm5.32-7.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.57-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.18 3.01.15.2 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z"/></svg>
                ${t("cta.book")}
              </a>
            </div>
          </div>
        </article>`;
    })
    .join("");
  observeReveal();
}

/* ---------- CAR DETAIL ---------- */
function renderDetail(cars) {
  const root = document.querySelector("#detail-root");
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const car = cars.find((c) => c.id === id) || cars[0];
  if (!car) {
    root.innerHTML = `<div class="container"><p>${t("detail.notfound")}</p></div>`;
    return;
  }
  document.title = `${car.displayName} — Rajli Car Rental`;
  const img = car.main ? carPath(car, car.main) : "";
  const wa = waLink(car.displayName);
  const galleryHtml = car.gallery.length
    ? `<div class="gallery-grid">${car.gallery
        .map(
          (g, i) => `
          <div class="gallery-item" data-index="${i}">
            <img src="${galleryPath(car, g)}" alt="${escapeHtml(car.displayName)} ${i + 1}" loading="lazy">
          </div>`
        )
        .join("")}</div>`
    : `<div class="gallery-empty">${t("detail.gallery.empty")}</div>`;

  root.innerHTML = `
    <div class="container detail">
      <a class="detail-back" href="index.html#fleet">${t("detail.back")}</a>
      <div class="detail-hero">
        <div class="detail-image">
          ${
            img
              ? `<img src="${img}" alt="${escapeHtml(car.displayName)}">`
              : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-dim)">—</div>`
          }
        </div>
        <div class="detail-info">
          <span class="eyebrow">${t("detail.eyebrow")}</span>
          <h1>${escapeHtml(car.displayName)}</h1>
          <div class="spec-grid">
            ${car.year ? `<div class="spec"><span>${t("detail.spec.year")}</span><strong>${escapeHtml(car.year)}</strong></div>` : ""}
            ${car.transmission ? `<div class="spec"><span>${t("detail.spec.transmission")}</span><strong>${escapeHtml(translateValue(car.transmission))}</strong></div>` : ""}
            ${car.engine ? `<div class="spec"><span>${t("detail.spec.engine")}</span><strong>${escapeHtml(translateValue(car.engine))}</strong></div>` : ""}
            <div class="spec"><span>${t("detail.spec.service")}</span><strong>${t("detail.spec.service.value")}</strong></div>
          </div>
          <p class="description">${escapeHtml(previewFromDescription(car.description))}</p>
          <div class="detail-actions">
            <a class="btn btn-whatsapp" href="${wa}" target="_blank" rel="noopener">
              ${t("cta.book")}
            </a>
            <a class="btn btn-ghost" href="tel:${PHONE}">${t("cta.call")}</a>
          </div>
        </div>
      </div>

      <section class="gallery">
        <h2>${t("detail.gallery")}</h2>
        ${galleryHtml}
      </section>
    </div>

    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true">
      <button class="lightbox-btn close" aria-label="Close">✕</button>
      <button class="lightbox-btn prev" aria-label="Previous">‹</button>
      <img id="lightbox-img" alt="">
      <button class="lightbox-btn next" aria-label="Next">›</button>
    </div>
  `;

  initLightbox(car);
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"]/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  }[c]));
}

/* ---------- LIGHTBOX ---------- */
function initLightbox(car) {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  if (!items.length || !lightbox) return;

  let i = 0;
  const open = (idx) => {
    i = idx;
    lbImg.src = galleryPath(car, car.gallery[i]);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };
  const next = () => open((i + 1) % car.gallery.length);
  const prev = () => open((i - 1 + car.gallery.length) % car.gallery.length);

  items.forEach((el, idx) => el.addEventListener("click", () => open(idx)));
  lightbox.querySelector(".close").addEventListener("click", close);
  lightbox.querySelector(".next").addEventListener("click", next);
  lightbox.querySelector(".prev").addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

/* ---------- NAV / SCROLL EFFECTS ---------- */
function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", (e) => {
      e.preventDefault();
      setLang(LANG === "en" ? "al" : "en");
    });
  }
}

function observeReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((e) => io.observe(e));
}

/* ---------- WHATSAPP LINKS ---------- */
function wireGenericWhatsappLinks() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waLink(el.dataset.wa || "");
    el.target = "_blank";
    el.rel = "noopener";
  });
  const fab = document.getElementById("whatsapp-fab");
  if (fab) {
    fab.href = waLink("");
    fab.target = "_blank";
    fab.rel = "noopener";
  }
}

/* ---------- BOOT ---------- */
document.addEventListener("DOMContentLoaded", async () => {
  initNav();
  applyI18nDom();
  wireGenericWhatsappLinks();
  observeReveal();

  try {
    const cars = await loadCars();
    window.__RAJLI_LAST_CARS__ = cars;
    renderFleet(cars);
    renderDetail(cars);
  } catch (err) {
    console.error(err);
    const grid = document.querySelector("#fleet-grid");
    if (grid) {
      grid.innerHTML = `<div class="empty-state"><p>${t("fleet.error")}</p></div>`;
    }
  }
});
