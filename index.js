var reference_date = new Date("2021-01-10T10:00:00");

function display_date_diff(diff_seconds) {
    diff_seconds = Math.floor(diff_seconds/1000);
    var days  = Math.floor(diff_seconds/(60*60*24));
    var hours = Math.floor(diff_seconds/(60*60))%24;
    var minutes = Math.floor(diff_seconds/(60))%60;
    var seconds = diff_seconds % 60;
    return '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

function count_down() {
    var now = Date.now();
    var diff = reference_date - now;
    diff = diff < 0 ? 0 : diff;
    document.getElementById("countdown").innerHTML = display_date_diff(diff);
}

count_down();
var timer = setInterval(count_down, 1000);
