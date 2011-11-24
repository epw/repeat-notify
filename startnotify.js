function init () {
    if (window.location.getParameter ("t") != "") {
	window.open (window.location.origin + window.location.pathname
		     + "countdown.html" + window.location.search,
		     "countdown",
		     "width=150, height=100");
    }
}

window.addEventListener ("load", init);
