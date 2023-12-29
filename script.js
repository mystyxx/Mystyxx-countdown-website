let countdown = document.getElementById("countdown");
let customCountDownDate = document.getElementById("customDate");
let countDownDate = new Date("Mar 5, 2024 00:00:00").getTime();
let subtext = "until mystyxx' birthday";
let subtextHTMLElement = document.getElementById("subtext");
let untilOrSince = 'until'

function showCurrentTime() {
    updateCustomData();
    let now = new Date().getTime();
    var distance = countDownDate - now;

    let days = Math.abs(Math.floor(distance / (1000*60*60*24)));
    let hours = Math.abs(Math.floor(distance % (1000*60*60*24) / (1000*60*60)) - 1);
    let minutes = Math.abs(Math.floor(distance % (1000*60*60) / (1000*60)));
    let seconds = Math.floor(distance % (1000*60) / 1000);

    if(seconds>0) {
        untilOrSince = 'until';
    }
    else{
	untilOrSince = 'since';
        seconds = Math.abs(seconds);
    }

    countdown.innerText = days + ' days ' + hours + 'h ' + minutes + 'mn ' + seconds + 's';
}

function updateCustomData() {
    countDownDate = new Date(customCountDownDate.value);
    subtextHTMLElement.innerText = untilOrSince + ' ' + subtextHTMLElementInput.value;
}

updateCustomData();
let update = setInterval(showCurrentTime, 1000);
