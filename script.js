let countdown = document.getElementById("countdown");
let customCountDownDate = document.getElementById("customDate");
let countDownDate = new Date("Mar 5, 2024 00:00:00").getTime();
let subtext = "until mystyxx' birthday";
let subtextHTMLElement = document.getElementById("subtext");
let untilOrSince = 'until'

if(window.localStorage.getItem("customDate")==undefined && window.localStorage.getItem("customDate")==null){
	window.localStorage.setItem("customDate", "2024-01-17");
}
document.getElementById("customDate").value = window.localStorage.getItem("customDate");


function showCurrentTime() {
	updateCustomData();
      	let now = new Date().getTime();
      	var distance = countDownDate - now;

	let days = Math.abs(Math.floor(distance / (1000*60*60*24)));
	let hours = Math.abs(Math.floor(distance % (1000*60*60*24) / (1000*60*60)));
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
	countDownDate = new Date(convert(customCountDownDate.value));
	localStorage.setItem("customDate", customCountDownDate.value);
    subtextHTMLElement.innerText = untilOrSince + ' ' + subtextHTMLElementInput.value;
}


function convert(){
	temp = customCountDownDate.value.split('-');
	months = {
		'01':'Jan',
		'02':'Feb',
		'03':'Mar',
		'04':'Apr',
		'05':'May',
		'06':'Jun',
		'07':'Jul',
		'08':'Aug',
		'09':'Sep',
		'10':'Oct',
		'11':'Nov',
		'12':'Dec'
	}
	return(temp[1] + ' ' + temp[2] + ', ' + temp[0] + ' 00:00:00');
}

updateCustomData();
let update = setInterval(showCurrentTime, 1000);
