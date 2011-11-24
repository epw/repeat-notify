var seconds;

function seconds_to_time () {
    var minutes = Math.floor (seconds / 60) + "";
    if (minutes < 10) {
	minutes = "0" + minutes;
    }
    var these_seconds = seconds % 60 + "";
    if (these_seconds < 10) {
	these_seconds = "0" + these_seconds;
    }
    return minutes + ":" + these_seconds;
}

function countdown () {
    document.getElementById ("countdown").innerHTML = seconds_to_time ();
    seconds--;
}    

function init () {
    var minutes = window.location.getParameter ("t");
    if (minutes == 0) {
	minutes = 15;
    }
    seconds = minutes * 60;

    setInterval ("document.getElementById ('notify').play ()",
		 1000 * seconds);
    setInterval ("countdown ()", 1000);
}

window.addEventListener ("load", init);
