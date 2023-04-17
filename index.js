const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock () 
{
    let var_hour = new Date().getHours()
    let var_min = new Date().getMinutes()
    let var_sec = new Date().getSeconds()
    let ampm = "AM"


    if (var_hour > 12) {
        var_hour = var_hour - 12;
        ampm = "PM"
    }

 
    var_hour = var_hour < 10 ? "0" + var_hour : var_hour;
    var_min = var_min < 10 ? "0" + var_min : var_min;
    var_sec = var_sec < 10 ? "0" + var_sec : var_sec;


    hourEl.innerText = var_hour;
    minEl.innerText = var_min;
    secEl.innerText = var_sec;
    ampmEl, (innerText = ampm);

    setTimeout(()=> {
        updateClock()
    }, 1000)

}

updateClock()