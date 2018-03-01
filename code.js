var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//to give squares the color
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener('click', function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Wrong!";
		}
	});
};

function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numb){
	//make an array
	var arr = [];
	// repeat numb times
	for(var i = 0; i < numb; i++){
	//get random color and puch into arr
	arr.push(randomColor())	
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a 'red'
	var r = Math.floor(Math.random() * 256);
	//pick a 'green'
	var g = Math.floor(Math.random() * 256);
	//pick a 'blue'
	var b = Math.floor(Math.random() * 256);
	//return 'rgb(r, g, b)'
	return "rgb(" + r + ", " + g + ", " + b + ")";
}