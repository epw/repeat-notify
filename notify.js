function init () {
    setInterval ("document.getElementById ('notify').play ()", 1000 * 60 * 15);
}

window.addEventListener ("load", init);
