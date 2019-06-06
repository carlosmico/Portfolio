document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM cargado');

    //EVENTO MENÚ HAMBURGUESA
    const menuBtn = document.querySelector('.menuBtn');
    const floatMenu = document.querySelector('.floatMenu');

    menuBtn.addEventListener("click", event => {
        if (floatMenu.className === "visibleFloatMenu") {
            floatMenu.className = "noneFloatMenu";
        } else {
            floatMenu.className = "visibleFloatMenu";
        }

    });
});