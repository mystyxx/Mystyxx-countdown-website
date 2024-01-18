let countdown = document.getElementById("countdown");
let customCountDownDate = document.getElementById("customDate");
let subtextHTMLElement = document.getElementById("subtext");
let untilOrSince = 'until'

if(window.localStorage.getItem("customDate")==undefined && window.localStorage.getItem("customDate")==null){
	window.localStorage.setItem("customDate", "2024-01-17");
}
if(window.localStorage.getItem("customSubText")==undefined && window.localStorage.getItem("customSubText")==null){
	window.localStorage.setItem("customSubText", "mystyxx\' birthday");}
document.getElementById("customDate").value = window.localStorage.getItem("customDate");
document.getElementById("subtextHTMLElementInput").value = window.localStorage.getItem("customSubText");

let countDownDate = new Date(convert(window.localStorage.getItem("customDate"))).getTime();
let subtext = "until mystyxx' birthday";


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
	localStorage.setItem("customDate", customCountDownDate.value);
	countDownDate = new Date(convert(customCountDownDate.value));
	localStorage.setItem("customSubText", subtextHTMLElementInput.value)
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

function showOrHideCustomInput(){
	if(document.getElementById("customDate").style.visibility == 'visible') {
		document.getElementById("customDate").style.visibility = 'hidden';
		document.getElementById("subtextHTMLElementInput").style.visibility = 'hidden';
	}
	else{
		document.getElementById("customDate").style.visibility = 'visible';
		document.getElementById("subtextHTMLElementInput").style.visibility = 'visible';
	}
}


showCurrentTime();
let update = setInterval(showCurrentTime, 1000);
