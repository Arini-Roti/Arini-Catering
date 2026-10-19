const produk = [
    {
        nama: "Brownies Mini Lumer",
        kategori: "roti",
        deskripsi: "Kue cokelat mungil nan lembut dengan lelehan saus manis yang melimpah.",
        harga: "Rp5rb",
        gambar: "images/brownies-minilumer.jpeg"
    },
    {
        nama: "Bolu Tape",
        kategori: "roti",
        deskripsi: "Bolu lembut bertabur keju dan kismis dengan rasa tape yang manis dan legit.",
        harga: "Rp25rb",
        gambar: "images/bolu-tape.jpeg"
    },
    {
        nama: "Bolu Jadul Mini",
        kategori: "roti",
        deskripsi: "Bolu mungil yang empuk dengan pilihan taburan meises atau keju.",
        harga: "Rp12rb",
        gambar: "images/bolu-jadulmini.jpeg"
    },
    {
        nama: "Bolu Jadul",
        kategori: "roti",
        deskripsi: "Bolu klasik dengan tekstur lembut dan rasa manis-gurih.",
        harga: "Rp40rb",
        gambar: "images/bolu-jadul.jpeg"
    },
    {
        nama: "Brownies Topping Meses Keju",
        kategori: "roti",
        deskripsi: "Brownies cokelat dengan taburan meses, keju, dan pilihan siraman cokelat.",
        harga: "Rp30rb & Rp35rb",
        gambar: "images/brownies-topingmeseskeju-siramcoklat.jpeg"
    },
    {
        nama: "Pisang Cokelat",
        kategori: "camilan",
        deskripsi: "Pisang manis berbalut kulit renyah dengan isian cokelat yang lumer.",
        harga: "Rp8rb",
        gambar: "images/piscok.jpeg"
    },
    {
        nama: "Keripik Pisang",
        kategori: "camilan",
        deskripsi: "Camilan pisang renyah yang cocok menemani waktu santai.",
        harga: "Rp15rb",
        gambar: "images/kripik-pisang.jpeg"
    }
];

// Satu nomor untuk semua tombol WhatsApp (format internasional, tanpa + atau 0 di depan)
const nomorWhatsApp = "6282330703693";

const menuContainer = document.getElementById("menuContainer");
const tombolFilter = document.querySelectorAll(".filter-btn");

function buatLinkWhatsApp(pesan) {
    return `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
}

function tampilkanProduk(kategoriDipilih = "semua") {
    const hasilFilter = kategoriDipilih === "semua"
        ? produk
        : produk.filter(function(item) {
            return item.kategori === kategoriDipilih;
        });

    menuContainer.innerHTML = "";

    hasilFilter.forEach(function(item) {
        const kartu = document.createElement("article");
        kartu.classList.add("menu-card");

        const pesan = `Assalamualaikum, saya ingin memesan ${item.nama} (${item.harga})`;

        kartu.innerHTML = `
            <img src="${item.gambar}" alt="${item.nama}" loading="lazy">

            <div class="menu-info">
                <h3>${item.nama}</h3>
                <p>${item.deskripsi}</p>
                <span class="price">${item.harga}</span>

                <a
                    href="${buatLinkWhatsApp(pesan)}"
                    class="btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pesan via WhatsApp
                </a>
            </div>
        `;

        menuContainer.appendChild(kartu);
    });
}

tombolFilter.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        tombolFilter.forEach(function(btn) {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        tombol.classList.add("active");
        tombol.setAttribute("aria-pressed", "true");
        tampilkanProduk(tombol.dataset.filter);
    });
});

// Tombol WhatsApp di bagian kontak
const tombolKontak = document.getElementById("contactWA");
if (tombolKontak) {
    tombolKontak.href = buatLinkWhatsApp("Assalamualaikum, saya ingin bertanya tentang pesanan di Arini Catering.");
}

tampilkanProduk();
