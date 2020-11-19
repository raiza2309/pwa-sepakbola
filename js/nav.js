document.addEventListener("DOMContentLoaded", function() {
    // Activate sidebar nav
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    // Daftarkan event listener untuk setiap tautan menu
    document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
        elm.addEventListener("click", () => {
            // Tutup sidenav
            const sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();
        });
    });
});