const cards = document.querySelectorAll(".wisata-card");

function revealCards() {
    cards.forEach(card => {
        const posisi = card.getBoundingClientRect().top;
        const tinggi = window.innerHeight - 100;

        if (posisi < tinggi) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
revealCards();


// ambil semua card
const wisataCards = document.querySelectorAll(".wisata-card");

// kondisi awal card: tidak terlihat
wisataCards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transition = "all 0.8s ease";
    card.style.transform = (i % 2 === 0)
        ? "translateX(-80px)"     // card ke-1,3,5... geser dari kiri
        : "translateX(80px)";     // card ke-2,4,6... geser dari kanan
});

// ketika card masuk ke viewport → animasi masuk
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
            // stop observe biar ga animasi bolak-balik
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // 20% card terlihat baru animasi

// apply observer ke semua card
wisataCards.forEach(card => observer.observe(card));

// ===== ANIMASI GAMBAR DALAM CARD JUGA (scroll-trigger) =====

const wisataImages = document.querySelectorAll(".card img");

// kondisi awal gambar
wisataImages.forEach((img, i) => {
    img.style.opacity = "0";
    img.style.transition = "all 0.8s ease";
    img.style.transform = (i % 2 === 0)
        ? "translateX(-40px)"
        : "translateX(40px)";
});

// observer gambar
const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";

            imgObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// apply observer ke gambar
wisataImages.forEach(img => imgObserver.observe(img));

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

