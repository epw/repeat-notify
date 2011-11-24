function init () {
    setInterval ("document.getElementById ('notify').play ()",
		 1000 * 60 * parseInt (window.location.getParameter ("t")));
}

window.addEventListener ("load", init);
