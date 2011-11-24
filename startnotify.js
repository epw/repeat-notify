function init () {
    window.open (window.location.origin + window.location.pathname
		 + "countdown.html?t=" + window.location.getParameter ("t"),
		 "countdown",
		 "width=150, height=100");
}

window.addEventListener ("load", init);
