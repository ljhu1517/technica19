
var balloon;
var maxBlows;
var currentBlow = 0;
var count;
var boom;
var totalCount;
var intTotalCount;
var currentTime;
var invisibleTimer = 60;

function loadGame() {
	balloon = document.getElementById("balloon");
	balloon.style.width = "50px";
	count = document.getElementById("thisCount");
  totalCount = document.getElementById("totalCount");
	currentTime = document.getElementById("currTime");
	boom = document.getElementById("boom");
	boom.style.display="none";

	maxBlows = Math.floor(Math.random()*11);
	two_min_timer();
	alert(maxBlows);
}

function resetGame() {
	currentBlow = 0;
	balloon.style.width = "50px";
	balloon.style.display = "block";
	count = document.getElementById("thisCount");
	totalCount = document.getElementById("totalCount");
  boom.style.display="none";
	maxBlows = Math.floor(Math.random()*11);
	alert(maxBlows);
}

function blow() {

	currentBlow = currentBlow + 1;

	if (currentBlow <= maxBlows) {
		var blowAmount = 50;
		var balloonWidth = parseInt(balloon.style.width);
		var newBalloonWidth = blowAmount + balloonWidth;
		balloon.style.width = newBalloonWidth + "px";
		thisCount.innerHTML = currentBlow;

	} else {
		balloon.style.display = 'none';
		boom.style.display="block";

		resetGame();
	}
}

function tieBalloon() {
		var total = parseInt(totalCount.innerHTML) + parseInt(thisCount.innerHTML);
		totalCount.innerHTML = total;
		loadGame();
}

function two_min_timer() {
	var myVar = setInterval(two_min_timer_helper, 1000);
	if (currentTime.innerHTML.equals("0")) {
			clearInterval(myVar);
	}
}

function two_min_timer_helper() {
	var actualTime = parseInt(currTime.innerHTML) - 1;
	currentTime.innerHTML = actualTime;
}
