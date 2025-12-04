/* navbar muncul turun */
window.addEventListener("load", () => {
    document.querySelector(".nav").classList.add("show");
});

/* navbar berubah saat scroll */
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
});

/* dropdown 1x klik */
document.querySelectorAll(".dropdown").forEach(drop => {
    const trigger = drop.querySelector("a");
    const menu = drop.querySelector(".dropdown-menu");

    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const open = menu.classList.contains("show");

        document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));

        if (!open) menu.classList.add("show");
    });
});

document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));
});

document.addEventListener("DOMContentLoaded", () => {
    const fade = document.querySelector(".fade");

    setTimeout(() => {
        fade.classList.add("show");
    }, 150);
});
