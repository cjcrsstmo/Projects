window.addEventListener("scroll", () => {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})