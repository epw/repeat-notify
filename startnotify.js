var e;

function sndchange (ev) {
    e = ev;
    document.getElementById ("snd").value = ev.target.value;
}

function init () {
    if (window.location.getParameter ("t") != "") {
	var pathname = window.location.pathname;
	pathname = pathname.replace ("index.html", "");
	window.open (window.location.origin + pathname
		     + "countdown.html" + window.location.search,
		     "countdown",
		     "width=200, height=125");
    }

    document.getElementById ("sndlist").addEventListener ("change", sndchange);
}

window.addEventListener ("load", init);
