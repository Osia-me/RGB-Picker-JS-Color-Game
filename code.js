var numbSquares = 6;
var colors = [];
var pickedColor;
var comments = ["Not really", "Not even close", "Keep trying", "Hm, no-no", "Try harder", "Wrong", "No", "It's not", "Try more"];

var squares = document.querySelectorAll(".square");
var colorDisplay =document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColorsButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");

init();

function init (){

	//mode buttons event listeners adding
	setUpModeButtons();
	//coloring the squares
	setUpsquares();
	//set up shape
	setUpShape();
	//and reset
	reset();

};

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy"){
				numbSquares = 3;			
			} else {
				numbSquares = 6;
			}

			reset();
		});
	}
}

function setUpShape() {
	modeButtons[0].addEventListener("click", function(){
		for(var i = 0; i < squares.length; i++){
		squares[i].classList.remove("hard");
		squares[i].classList.add("easy");
	}
});
	modeButtons[1].addEventListener("click", function(){
		for(var i = 0; i < squares.length; i++){
		squares[i].classList.remove("easy");
		squares[i].classList.add("hard");
	}
});
}

	
function setUpsquares(){
	for(var i = 0; i < squares.length; i++){

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//to get the color of the clicked square
		var clickedColor = this.style.backgroundColor;
		//to compare the color of clicked square to the goal(pickedColor)
		if (clickedColor === pickedColor) {
			message.textContent = "Correct!";
			newColorsButton.textContent = "Play again?";
			//change the color to the one goal color
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#261814";
			message.textContent = pickComment();
		}
	});
}
}


function reset(){
	//generate all new colors
	colors = generateRandomColor(numbSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//make #message empty
	message.textContent = "";
	//change the name of the button to "New Colors again"
	newColorsButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){

		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}

	h1.style.backgroundColor = "#c19489";
}

newColorsButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop trough all squares
	for( var i = 0; i < squares.length; i++){
	// change each color to match given color
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function pickColor() {
	//generate random number from 0 to the last number of array (from 0 to 2 or from 0 to 5)
	var random = Math.floor(Math.random() * colors.length);
	//return random index of the colors array
	return colors[random];
}

function pickComment(){
	//generate random number from 0 to the last number of array (from 0 to 2 or from 0 to 5)
	var randomCom = Math.floor(Math.random() * comments.length);
	//return random index of the comments array
	return comments[randomCom];
}

function generateRandomColor(numb){
	//make an array
	var arr = [];
	//repeat numb times
	for (var i = 0; i < numb; i++){
	//add random numbers to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor (){
	//make 3 random number from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//return rgb format of color using 3 random color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



