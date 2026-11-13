// Small client behaviour: energy tabs (also opened from the hero scale), mobile menu, sticky phone.
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-tabs] [role=tab]"));
const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-panel]"));

function select(id: string, focus = false) {
  tabs.forEach((t) => {
    const on = t.dataset.branch === id;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    if (on && focus) t.focus();
  });
  panels.forEach((p) => p.classList.toggle("is-active", p.dataset.panel === id));
}
tabs.forEach((t, i) => {
  t.addEventListener("click", () => select(t.dataset.branch!));
  t.addEventListener("keydown", (e) => {
    const k = e.key;
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(k)) return;
    e.preventDefault();
    const n = k === "Home" ? 0 : k === "End" ? tabs.length - 1 : (i + (k === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    select(tabs[n].dataset.branch!, true);
  });
});
document.querySelectorAll<HTMLAnchorElement>("a[data-branch]").forEach((a) =>
  a.addEventListener("click", () => select(a.dataset.branch!)),
);

// Mobile menu
const btn = document.querySelector<HTMLButtonElement>(".mainbar__menu");
const nav = document.getElementById("site-nav");
if (btn && nav) {
  const set = (open: boolean) => {
    btn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    btn.textContent = open ? "Закрити" : "Меню";
  };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if ((e.target as HTMLElement).closest("a")) set(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { set(false); btn.focus(); } });
}

// Sticky bar: phone appears once the channel row has scrolled away
const bar = document.getElementById("mainbar");
if (bar) {
  const onScroll = () => bar.classList.toggle("is-stuck", window.scrollY > 60);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
