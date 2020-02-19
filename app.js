document.getElementById("burger-btn").onclick = function () {
    active()
}

function active() {
    document.getElementById("headerNav__menu").classList.toggle("headerNav__menuActive");
    document.getElementById("btn-inner").classList.toggle("burgerActive");
}