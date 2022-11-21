const notActiveLinks = document.querySelectorAll(".nonActiveLink");
notActiveLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    })
});