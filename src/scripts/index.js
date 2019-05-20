window.onload = function () {
    const nav = document.getElementById('header-nav');
    document.getElementById('mobile').onclick = function () {
        this.classList.toggle('close');
        nav.classList.toggle('active');
    }
}