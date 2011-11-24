function init () {
    window.open (window.location.origin + window.location.pathname
		 + "countdown.html?t=" + window.location.getParameter ("t"));
}

window.addEventListener ("load", init);
