var numSquares = 6;
var colors = [];
var colorPicked;
var colorDisplay = document.getElementById("colorDisplay");
var squareColor = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1"); 
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){

	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
	modeButton[0].classList.remove("selected");
	modeButton[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	reset();
	});	
}
}

function setUpSquares(){
	var clickedColor;
for (var i = 0; i < squareColor.length; i++){

squareColor[i].addEventListener("click", function() {

		clickedColor = this.style.backgroundColor;
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
}

function reset(){
	colors = generateRandomColors(numSquares);
	colorPicked = colorPick();
	colorDisplay.textContent = colorPicked;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squareColor.length; i++){
		if (colors[i]){
			squareColor[i].style.display = "block";
			squareColor[i].style.backgroundColor = colors[i];
		} else {
			squareColor[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});




function changeColors (color){
	for (var i = 0; i < squareColor.length; i++){
		squareColor[i].style.backgroundColor = color;
}
}

function colorPick(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
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