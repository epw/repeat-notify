var seconds;
var time_list;

var loop;

var old_minutes;

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
    if (seconds < 0) {
	document.getElementById ('notify').play ()
	clearInterval (loop);
	restart ();
    }
}    

function restart () {
    var minutes = time_list.pop();

    if (typeof (minutes) == "undefined") {
	seconds = old_minutes * 60;
    } else {
	seconds = minutes * 60;
	old_minutes = minutes;
    }

    loop = setInterval ("countdown ()", 1000);
}

function init () {
    time_string = window.location.getParameter ("t").replace (/\s+|%2C|[+]/g,
							      ",");
    time_list = time_string.split (",");
    time_list.reverse ();

    restart ();
}

window.addEventListener ("load", init);
