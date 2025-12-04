
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


// aktif saat muncul di layar
const counterSection = document.querySelector(".counter-section");
let counterStarted = false;

window.addEventListener("scroll", () => {
    const sectionTop = counterSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 80 && !counterStarted) {
        startCounter();
        counterStarted = true;
    }
});

const searchInput = document.getElementById("searchInput");
const kecamatanItems = document.querySelectorAll(".kecamatan-item");

kecamatanItems.forEach(item => {
    item.addEventListener("click", () => {
        const desaList = item.querySelector(".desa-list");
        desaList.classList.toggle("open");
    });
});

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    kecamatanItems.forEach(item => {
        const title = item.querySelector(".kecamatan-title").innerText.toLowerCase();
        const desaList = item.querySelector(".desa-list");
        const desaItems = item.querySelectorAll(".desa-list li");

        let match = title.includes(keyword);
        let desaMatch = false;

        desaItems.forEach(desa => {
            if (desa.innerText.toLowerCase().includes(keyword)) {
                desaMatch = true;
            }
        });

        if (match || desaMatch) {
            item.style.display = "block";

            // auto buka saat cocok
            desaList.classList.add("open");

        } else {
            item.style.display = "none";
        }
    });
});

/* ===================== COUNTER GACHA ANIMATION ===================== */
function startCounter() {
    const counters = document.querySelectorAll(".counter");
    const speed = 35; // Makin kecil makin cepat
    
    // Urutkan counter berdasarkan data-target dari terkecil ke terbesar
    const sortedCounters = Array.from(counters).sort((a, b) => {
        return +a.getAttribute("data-target") - +b.getAttribute("data-target");
    });
    
    // Jalankan counter secara berurutan
    let index = 0;
    function runNextCounter() {
        if (index >= sortedCounters.length) return;
        const counter = sortedCounters[index];
        const update = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = Math.ceil(target / 55); // Angka naiknya
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(update, speed);
            } else {
                counter.innerText = target;
                index++;
                runNextCounter(); // Jalankan counter berikutnya
            }
        };
        update();
    }
    runNextCounter();
}

/* === LANGSUNG JALAN SAAT MASUK WEBSITE === */
window.addEventListener("load", () => {
    setTimeout(() => {
        startCounter();
    }, 400); // Delay biar pas animasi page muncul
});

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

