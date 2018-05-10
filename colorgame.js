var colors = generateRandomColors(6);

var colorDisplay = document.getElementById("colorDisplay");
var squareColor = document.querySelectorAll(".square");
var colorPicked = colorPick();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1"); 
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){

	colors = generateRandomColors(6);
	colorPicked = colorPick();
	colorDisplay.textContent = colorPicked;
	for (i = 0; i <= colors.length; i++){
	squareColor[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = clickedColor;
});

colorDisplay.textContent = colorPicked;

for (i = 0; i <= colors.length; i++){
	squareColor[i].style.backgroundColor = colors[i];

squareColor[i].addEventListener("click", function() {

		var clickedColor = this.style.backgroundColor;
		if (clickedColor === colorPicked){

			messageDisplay.textContent = "Correct Guess!";
			resetButton.textContent = "Play Again!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!!";
		}

});
}

function changeColors (color){
	for (var i = 0; i <= squareColor.length; i++){
		squareColor[i].style.backgroundColor = color;
}
}

function colorPick(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i <= num; i++){
		arr.push(randomColors());
	}
	return arr;	
}

function randomColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}