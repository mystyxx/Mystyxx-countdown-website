let countdown = document.getElementById("countdown")
let countDownDate = new Date("Mar 5, 2024 00:00:00").getTime();
let subtext = "until mystyxx' birthday";
let subtextHTMLElement = document.getElementById("subtext");

function showCurrentTime() {
    let now = new Date().getTime();
    var distance = countDownDate - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60)) - 1;
    let minutes = Math.floor(distance % (1000*60*60) / (1000*60));
    let seconds = Math.floor(distance % (1000*60) / 1000);

    countdown.innerText = days + ' days ' + hours + 'h ' + minutes + 'mn ' + seconds + 's';
}

function updateSubtext(newSubtext) {
    subtext = newSubtext;
    subtextHTMLElement.innerText = subtext;
}

updateSubtext(subtext);
let update = setInterval(showCurrentTime, 1000);
