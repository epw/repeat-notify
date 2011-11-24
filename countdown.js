var seconds;

var sound_loop;
var count_loop;

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
    if (seconds <= 0) {
	clearInterval (sound_loop);
	clearInterval (count_loop);
	init ();
    }
}    

function init () {
    var minutes = window.location.getParameter ("t");
    if (minutes == 0) {
	minutes = 15;
    }
    seconds = minutes * 60 + 1;

    count_loop = setInterval ("countdown ()", 1000);
    sound_loop = setInterval ("document.getElementById ('notify').play ()",
			 1000 * seconds);
}

window.addEventListener ("load", init);
