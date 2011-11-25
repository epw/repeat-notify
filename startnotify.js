function sndchange (val) {
    document.getELementById ("snd").value = val;
}

function init () {
    if (window.location.getParameter ("t") != "") {
	window.open (window.location.origin + window.location.pathname
		     + "countdown.html" + window.location.search,
		     "countdown",
		     "width=150, height=100");
    }

    document.getElementById ("sndlist").addEventListener ("change", sndchange);
}

window.addEventListener ("load", init);
