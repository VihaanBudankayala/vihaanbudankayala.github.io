/* =========================================================
   Vihaan Budankayala — Portfolio
   Edit CONFIG, MEDIUMS and WORKS below to update the site.
   ========================================================= */

const CONFIG = {
  email: "vbudankayala@gmail.com",
  timeZone: "America/Chicago",
};

const MEDIUMS = [
  { id: "graphite", name: "Graphite", color: "#d6d3dc", dot: "graphite",
    desc: "Soft value and careful light. Graphite studies of animals, fruit and still-life objects." },
  { id: "ink", name: "Pen & Ink", color: "#7d9bff", dot: "cobalt",
    desc: "Texture built one line at a time: cross-hatching, contour and stipple." },
  { id: "pastel", name: "Oil Pastel", color: "#ffb321", dot: "saffron",
    desc: "Rich, layered color for lively festival scenes full of people and movement." },
  { id: "acrylic", name: "Acrylic", color: "#ff7a61", dot: "vermilion",
    desc: "Bold abstraction and painted still life in flat, saturated color." },
  { id: "mixed", name: "Mixed Media", color: "#b49aff", dot: "violet",
    desc: "Paint and pencil layered together for landscapes with atmosphere." },
];

// w/h are the dimensions of the "-sm" image (aspect ratio source)
const WORKS = [
  { id: "casual-day", title: "Casual Day", medium: "ink", w: 720, h: 486,
    desc: "A vintage pickup parked by an old farmhouse under a sprawling oak, drawn entirely in hatching and cross-hatching.",
    alt: "Pen and ink drawing of a vintage pickup truck in front of a wooden farmhouse beneath a large tree." },
  { id: "geometric-horse", title: "Geometric Horse", medium: "acrylic", w: 479, h: 720,
    desc: "A horse's head and flowing mane broken into bold geometric planes of orange, turquoise, violet and lime against a split warm-and-cool ground.",
    alt: "Acrylic painting of a horse in profile made of colorful geometric shapes in orange, blue, green, purple and red, on an orange, yellow and teal background." },
  { id: "horned-lizard", title: "Horned Lizard", medium: "ink", w: 486, h: 720,
    desc: "Every scale is drawn individually. A close study of a Texas reptile looking skyward from a nest of spiky leaves.",
    alt: "Detailed pen and ink drawing of a spiny lizard with patterned scales looking upward among sharp leaves." },
  { id: "heritage-in-motion", title: "Heritage in Motion", medium: "pastel", w: 474, h: 720,
    desc: "A harvest-festival celebration: a decorated bullock cart, sugarcane stalks and a family cheering under strings of pennants.",
    alt: "Oil pastel drawing of a joyful family waving from a blue bullock cart pulled by two decorated bulls, flanked by sugarcane under a blue sky." },
  { id: "mothers-embrace", title: "Mother’s Embrace", medium: "graphite", w: 470, h: 720,
    desc: "A tigress carries her cub through tall grass. Soft graphite tones make the fur and the light.",
    alt: "Graphite drawing of a tigress walking with her cub held gently in her mouth." },
  { id: "still-life", title: "Still Life", medium: "acrylic", w: 473, h: 720,
    desc: "A cobalt vase with ripe pomegranates and scattered seeds, painted against warm ochre light.",
    alt: "Acrylic still life of a glossy blue vase beside a red pomegranate and a broken pomegranate showing its seeds." },
  { id: "leaves", title: "Leaves", medium: "ink", w: 490, h: 720,
    desc: "Broad tropical leaves rendered in flowing parallel contour lines.",
    alt: "Pen and ink drawing of large tropical leaves filled with fine flowing parallel lines." },
  { id: "shapes", title: "Shapes", medium: "acrylic", w: 483, h: 720,
    desc: "A white sun and a dark green moon set in color-field blocks of red, orange, gold and blue.",
    alt: "Abstract acrylic painting of colored rectangles in red, orange, yellow, maroon and blue with a white circle and a dark green circle." },
  { id: "the-pineapple", title: "The Pineapple", medium: "graphite", w: 544, h: 720,
    desc: "A whole pineapple and a cut wedge, a study in texture, from spiky crown to faceted skin.",
    alt: "Graphite drawing of a pineapple with a sliced wedge resting in front of it." },
  { id: "still-life-study", title: "Still Life Study", medium: "graphite", w: 476, h: 720,
    desc: "A pitcher, a pencil cup and two apples, drawn from observation with directional hatching.",
    alt: "Graphite still life of a metal pitcher, a cup holding pencils and two apples on a table." },
  { id: "iama-2026-finals", title: "A Lone Star Storm: Texas Untamed", medium: "mixed", w: 458, h: 720, award: "IAMA 2026 Finalist",
    desc: "A red-rock spire under a violet thunderstorm, with an eagle in flight, a watchful cougar and a field of bluebonnets.",
    alt: "Painted desert canyon under a violet storm: lightning, an eagle in flight, a cougar on a rock, bluebonnets in the foreground." },
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const mediumOf = (id) => MEDIUMS.find((m) => m.id === id);
const src = (id, size = "sm") => `assets/art/${id}${size === "sm" ? "-sm" : ""}.jpg`;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';

document.documentElement.classList.remove("no-js");

/* ---------- scroll reveals ---------- */
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); obs.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
  : null;
function observeReveals(root = document) {
  $$(".reveal:not(.is-in)", root).forEach((el, i) => {
    if (!revealObserver) return el.classList.add("is-in");
    el.style.transitionDelay = `${Math.min(i, 4) * 40}ms`;
    revealObserver.observe(el);
  });
}
$$(".year").forEach((el) => (el.textContent = new Date().getFullYear()));

/* ---------- email links ---------- */
$$(".js-email").forEach((a) => {
  a.href = `mailto:${CONFIG.email}`;
  a.textContent = CONFIG.email;
});

/* ---------- clock ---------- */
const clock = $("#clock");
const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: CONFIG.timeZone });
function tick() {
  const now = new Date();
  clock.textContent = fmt.format(now);
  clock.dateTime = now.toISOString();
}
tick();
setInterval(tick, 15000);

/* =========================================================
   3D hero: artwork panels drifting through space
   ========================================================= */
const hero = (() => {
  const stage = $("#stage");
  const track = document.createElement("div");
  track.className = "hero__track";
  stage.appendChild(track);

  const order = ["geometric-horse", "horned-lizard", "heritage-in-motion", "shapes", "mothers-embrace",
    "still-life", "leaves", "iama-2026-finals", "the-pineapple", "casual-day", "still-life-study"];
  const panels = order.map((id, i) => {
    const w = WORKS.find((x) => x.id === id);
    const el = document.createElement("div");
    el.className = "panel";
    el.dataset.id = id;
    el.title = `View “${w.title}”`;
    el.style.setProperty("--ar", `${w.w} / ${w.h}`);
    el.style.setProperty("--arn", (w.w / w.h).toFixed(4));
    const img = new Image();
    img.src = src(id);
    img.alt = "";
    img.decoding = "async";
    if (i > 5) img.loading = "lazy";
    el.appendChild(img);
    track.appendChild(el);
    return { el, jitterY: ((i * 37) % 7 - 3) * 18, jitterX: ((i * 53) % 5 - 2) * 26 };
  });

  let gap, L, front, back;
  function measure() {
    const vw = window.innerWidth;
    const small = vw < 640;
    const pw = small ? Math.max(180, vw * 0.5) : Math.min(500, Math.max(260, vw * 0.27));
    track.style.setProperty("--pw", `${pw}px`);
    panels.forEach((p) => p.el.style.setProperty("--pw", `${pw}px`));
    gap = pw * 0.42;
    L = gap * panels.length;
    front = small ? 420 : 620;
    back = front - L;
    track.style.left = small ? "62%" : "68%";
    track.style.top = small ? "64%" : "60%";
  }
  measure();
  window.addEventListener("resize", measure, { passive: true });

  let offset = 0, last = performance.now(), running = true, visible = true, userPaused = false;
  let target = 0; // wheel sets where the panels should be; offset eases toward it
  let mx = 0, my = 0, rx = 0, ry = 0;

  function render() {
    ry += (mx - ry) * 0.06;
    rx += (my - rx) * 0.06;
    track.style.transform = `rotateX(${4 - rx * 4}deg) rotateY(${-44 + ry * 8}deg)`;
    for (let i = 0; i < panels.length; i++) {
      const p = panels[i];
      let z = ((i * gap + offset) % L + L) % L + back; // back..front
      const t = (z - back) / L; // 0 (far) -> 1 (near)
      const y = -z * 0.12 + p.jitterY;
      const fadeIn = Math.min(1, t / 0.15);
      const fadeOut = Math.min(1, (1 - t) / 0.14);
      p.el.style.transform = `translate3d(${p.jitterX}px, ${y}px, ${z}px)`;
      p.el.style.opacity = Math.max(0, Math.min(fadeIn, fadeOut)).toFixed(3);
      p.el.style.zIndex = String(Math.round(t * 100));
    }
  }

  function loop(now) {
    const dt = Math.min(64, now - last);
    last = now;
    if (running && visible && !userPaused && !reduceMotion.matches) {
      const drift = dt * 0.045;
      offset += drift;
      target += drift;
    }
    const diff = target - offset;
    if (Math.abs(diff) > 0.1) offset += diff * (1 - Math.pow(0.86, dt / 16)); // smooth ease, frame-rate independent
    else offset = target;
    render();
    if (visible) requestAnimationFrame(loop);
  }

  // pause when hero is offscreen
  new IntersectionObserver(([e]) => {
    const was = visible;
    visible = e.isIntersecting;
    if (visible && !was) { last = performance.now(); requestAnimationFrame(loop); }
  }).observe($("#index"));

  document.addEventListener("visibilitychange", () => { running = !document.hidden; last = performance.now(); });

  window.addEventListener("pointermove", (e) => {
    if (reduceMotion.matches || userPaused || e.pointerType !== "mouse") return;
    mx = e.clientX / window.innerWidth - 0.5;
    my = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  // Clicking a floating panel jumps to that piece in the Works section
  stage.addEventListener("click", (e) => {
    const p = e.target.closest(".panel");
    if (p) goToWork(p.dataset.id);
  });

  // Wheel over the artwork area flips through the panels instead of scrolling the page.
  // The headline, buttons and left side of the hero still scroll the page normally.
  const heroEl = $("#index");
  const hint = $("#scrollHint");
  heroEl.addEventListener("wheel", (e) => {
    if (e.ctrlKey) return; // pinch-zoom
    if (e.target.closest(".hero__intro, .motion-toggle, .hero__foot, .scroll-hint")) return;
    const wide = window.innerWidth >= 640;
    if (wide && e.clientX < heroEl.clientWidth * 0.42) return;
    e.preventDefault();
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
    const step = Math.max(-200, Math.min(200, dy)) * (gap / 100); // ~one panel per wheel notch
    target += step;
    // don't let a fast flick queue up more than ~3 panels of travel
    target = Math.max(offset - gap * 3, Math.min(offset + gap * 3, target));
    if (hint) hint.classList.add("is-used");
  }, { passive: false });

  // Pause / play control
  const toggle = $("#motionToggle");
  const label = $(".motion-toggle__label", toggle);
  function setPaused(p) {
    userPaused = p;
    toggle.setAttribute("aria-pressed", String(p));
    label.textContent = p ? "Play motion" : "Pause motion";
    toggle.setAttribute("aria-label", p ? "Play background motion" : "Pause background motion");
    $$(".spin").forEach((el) => (el.style.animationPlayState = p ? "paused" : ""));
    if (p) { mx = 0; my = 0; }
  }
  toggle.addEventListener("click", () => setPaused(!userPaused));
  if (reduceMotion.matches) setPaused(true);

  render();
  requestAnimationFrame(loop);
})();

/* =========================================================
   Works: filters + editorial layout
   ========================================================= */
let activeFilter = "all";
let currentList = WORKS.slice();
const list = $("#worksList");
const filters = $("#filters");

function renderFilters() {
  const opts = [{ id: "all", name: "All", count: WORKS.length }]
    .concat(MEDIUMS.map((m) => ({ ...m, count: WORKS.filter((w) => w.medium === m.id).length })));
  filters.innerHTML = opts.map((o) => `
    <button class="filter" type="button" data-filter="${o.id}" aria-pressed="${o.id === activeFilter}">
      ${o.dot ? `<span class="dot dot--${o.dot}" aria-hidden="true"></span>` : ""}
      ${o.name} <span class="filter__count">${o.count}</span>
    </button>`).join("");
}

function workCard(w, index) {
  const m = mediumOf(w.medium);
  const num = String(index + 1).padStart(2, "0");
  return `
    <article class="work" id="work-${w.id}" style="--ar:${w.w}/${w.h}">
      <button class="work__media js-open" type="button" data-id="${w.id}" aria-label="View ${w.title} larger">
        <img src="${src(w.id)}" srcset="${src(w.id)} ${w.w}w, ${src(w.id, "lg")} ${Math.round((w.w / Math.max(w.w, w.h)) * 1800)}w"
             sizes="(max-width: 860px) 100vw, 50vw" width="${w.w}" height="${w.h}" alt="${w.alt}" loading="lazy" decoding="async">
      </button>
      <div class="work__body">
        <p class="eyebrow">${num} <span class="dot dot--${m.dot}" aria-hidden="true"></span> ${m.name}${w.award ? ` &middot; ${w.award}` : ""}</p>
        <h3 class="work__title">${w.title}</h3>
        <p class="work__desc">${w.desc}</p>
        <button class="work__more js-open" type="button" data-id="${w.id}" aria-label="Open ${w.title}">${arrow}</button>
      </div>
    </article>`;
}

function renderWorks() {
  currentList = activeFilter === "all" ? WORKS.slice() : WORKS.filter((w) => w.medium === activeFilter);
  if (!currentList.length) {
    list.innerHTML = `<p class="works__empty">No works in this medium yet.</p>`;
    return;
  }
  // Layout: landscape -> feature; portraits alternate single-feature / pair
  const rows = [];
  const queue = currentList.map((w, i) => ({ w, i }));
  let flip = false, wantPair = false;
  while (queue.length) {
    const next = queue[0];
    const landscape = next.w.w > next.w.h;
    if (!landscape && wantPair && queue.length >= 2 && queue[1].w.w <= queue[1].w.h) {
      const a = queue.shift(), b = queue.shift();
      rows.push(`<div class="wrow wrow--pair reveal">${workCard(a.w, a.i)}${workCard(b.w, b.i)}</div>`);
      wantPair = false;
    } else {
      queue.shift();
      rows.push(`<div class="wrow wrow--feature ${landscape ? "is-wide" : ""} ${flip ? "is-flipped" : ""} reveal">${workCard(next.w, next.i)}</div>`);
      flip = !flip;
      wantPair = true;
    }
  }
  list.innerHTML = rows.join("");
  observeReveals(list);
}

function setFilter(id) {
  activeFilter = id;
  renderFilters();
  renderWorks();
}

function goToWork(id) {
  if (!currentList.some((w) => w.id === id)) setFilter("all");
  const card = document.getElementById(`work-${id}`);
  if (!card) return;
  const row = card.closest(".wrow");
  row?.classList.add("is-in"); // make sure it's revealed when we land on it
  card.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
  card.classList.remove("is-target");
  void card.offsetWidth; // restart the highlight animation
  card.classList.add("is-target");
  setTimeout(() => card.classList.remove("is-target"), 2600);
}

filters.addEventListener("click", (e) => {
  const b = e.target.closest("[data-filter]");
  if (b) setFilter(b.dataset.filter);
});

renderFilters();
renderWorks();

/* =========================================================
   Mediums
   ========================================================= */
const mgrid = $("#mediumsGrid");
mgrid.innerHTML = MEDIUMS.map((m, i) => {
  const items = WORKS.filter((w) => w.medium === m.id);
  const fan = items.slice(0, 3).map((w) => `<img src="${src(w.id)}" alt="" width="120" height="160" loading="lazy">`).join("");
  return `
    <button class="medium reveal" type="button" data-medium="${m.id}" style="--mc:${m.color}">
      <span class="medium__fan" aria-hidden="true">${fan}</span>
      <span class="medium__num">0${i + 1} &middot; ${items.length} ${items.length === 1 ? "work" : "works"}</span>
      <span class="medium__name">${m.name}</span>
      <span class="medium__desc">${m.desc}</span>
      <span class="medium__cta">View ${m.name.toLowerCase()} works ${arrow}</span>
    </button>`;
}).join("");
$("#statWorks").textContent = WORKS.length;
$("#statMediums").textContent = MEDIUMS.length;

mgrid.addEventListener("click", (e) => {
  const b = e.target.closest("[data-medium]");
  if (!b) return;
  setFilter(b.dataset.medium);
  $("#works").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
  setTimeout(() => $(`[data-filter="${b.dataset.medium}"]`)?.focus({ preventScroll: true }), 400);
});

/* =========================================================
   Lightbox
   ========================================================= */
const lb = $("#lightbox");
const lbImg = $("#lbImg");
let lbIndex = 0, lbList = WORKS, lbReturn = null;

function showWork(i) {
  lbIndex = (i + lbList.length) % lbList.length;
  const w = lbList[lbIndex];
  const m = mediumOf(w.medium);
  lbImg.classList.add("is-swapping");
  const img = new Image();
  img.onload = img.onerror = () => {
    lbImg.src = img.src;
    lbImg.alt = w.alt;
    lbImg.width = w.w; lbImg.height = w.h;
    requestAnimationFrame(() => lbImg.classList.remove("is-swapping"));
  };
  img.src = src(w.id, "lg");
  $("#lbMeta").innerHTML = `<span class="dot dot--${m.dot}" aria-hidden="true"></span> ${m.name}${w.award ? ` &middot; ${w.award}` : ""}`;
  $("#lbTitle").textContent = w.title;
  $("#lbDesc").textContent = w.desc;
  $("#lbCount").textContent = `${lbIndex + 1} / ${lbList.length}`;
  const multi = lbList.length > 1;
  $("#lbPrev").hidden = !multi;
  $("#lbNext").hidden = !multi;
}

function openWork(id, trigger) {
  lbList = currentList.some((w) => w.id === id) ? currentList : WORKS;
  lbReturn = trigger;
  showWork(lbList.findIndex((w) => w.id === id));
  lb.showModal();
  $("#lbClose").focus();
  document.body.style.overflow = "hidden";
}

document.addEventListener("click", (e) => {
  const t = e.target.closest(".js-open");
  if (t) openWork(t.dataset.id, t);
});
$("#lbPrev").addEventListener("click", () => showWork(lbIndex - 1));
$("#lbNext").addEventListener("click", () => showWork(lbIndex + 1));
$("#lbClose").addEventListener("click", () => lb.close());
lb.addEventListener("close", () => {
  document.body.style.overflow = "";
  lbReturn?.focus({ preventScroll: true });
});
lb.addEventListener("click", (e) => {
  if (e.target === lb || e.target.classList.contains("lightbox__inner") || e.target.classList.contains("lightbox__figure")) lb.close();
});
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showWork(lbIndex - 1);
  if (e.key === "ArrowRight") showWork(lbIndex + 1);
});
// swipe (buttons remain the primary control)
let sx = null;
lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", (e) => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 50) showWork(lbIndex + (dx < 0 ? 1 : -1));
  sx = null;
}, { passive: true });

/* =========================================================
   Active nav + reveals
   ========================================================= */
const navLinks = $$(".pillnav a");
const sectionIds = navLinks.map((a) => a.getAttribute("href").slice(1));
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) => {
      if (a.getAttribute("href") === `#${e.target.id}`) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sectionIds.forEach((id) => { const s = document.getElementById(id); if (s) navObserver.observe(s); });

observeReveals();

/* =========================================================
   Contact form (opens the visitor's email app, prefilled)
   ========================================================= */
const form = $("#contactForm");
const rules = {
  name: (v) => (v.trim() ? "" : "Enter your name so Vihaan knows who's writing."),
  email: (v) => (!v.trim() ? "Enter your email so Vihaan can reply."
    : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Check the email address. It should look like name@example.com."),
  message: (v) => (v.trim().length >= 10 ? "" : "Add a short message (at least 10 characters) about what you have in mind."),
};

function validateField(input) {
  const rule = rules[input.name];
  if (!rule) return "";
  const msg = rule(input.value);
  const field = input.closest(".field");
  const err = $(".field__error", field);
  err.textContent = msg;
  field.classList.toggle("has-error", !!msg);
  input.setAttribute("aria-invalid", msg ? "true" : "false");
  return msg;
}

$$("input[name], textarea[name]", form).forEach((input) => {
  if (!rules[input.name]) return;
  input.addEventListener("blur", () => { if (input.value || input.getAttribute("aria-invalid")) validateField(input); });
  input.addEventListener("input", () => { if (input.getAttribute("aria-invalid") === "true") validateField(input); });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const summary = $("#formSummary");
  const inputs = ["name", "email", "message"].map((n) => form.elements[n]);
  const errors = inputs.map((i) => ({ i, msg: validateField(i) })).filter((x) => x.msg);
  if (errors.length) {
    summary.hidden = false;
    summary.innerHTML = `<strong>Please fix ${errors.length === 1 ? "this" : `these ${errors.length}`} before sending:</strong>
      <ul>${errors.map((x) => `<li><a href="#${x.i.id}">${x.msg}</a></li>`).join("")}</ul>`;
    if (errors.length > 1) summary.focus(); else errors[0].i.focus();
    return;
  }
  summary.hidden = true;
  const d = Object.fromEntries(new FormData(form));
  const subject = `${d.topic} inquiry from ${d.name}`;
  const body = `${d.message}\n\n${d.name}\n${d.email}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $("#formStatus").textContent = "Your email app should open with the message filled in. Press send there to finish.";
});
$("#formSummary").addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  e.preventDefault();
  $(a.getAttribute("href")).focus();
});
