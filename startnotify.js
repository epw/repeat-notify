var e;

function sndchange (ev) {
    e = ev;
    document.getElementById ("snd").value = ev.target.value;
}

function init () {
    if (window.location.getParameter ("t") != "") {
	window.open (window.location.origin + window.location.pathname
		     + "countdown.html" + window.location.search,
		     "countdown",
		     "width=200, height=125");
    }

    document.getElementById ("sndlist").addEventListener ("change", sndchange);
}

window.addEventListener ("load", init);
