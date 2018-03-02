var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColorsButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var numbSquares = 6;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numbSquares = 3;
	colors = generateRandomColor(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numbSquares = 6;
	colors = generateRandomColor(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

newColorsButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColor(numbSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){

	//to make 6 squares background color different random colors (taking colors from colors array)
	squares[i].style.backgroundColor = colors[i];

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
			this.style.backgroundColor = "#232323";
			message.textContent = "Not really";
		}
	});
}

function changeColors(color){
	//loop trough all squares
	for( var i = 0; i < squares.length; i++){
	// change each color to match given color
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function pickColor() {
	//generate random number from 0 to the second number of array (from 0 to 2 or from 0 to 5)
	var random = Math.floor(Math.random() * colors.length);
	//return random index of the colors array
	return colors[random];
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



