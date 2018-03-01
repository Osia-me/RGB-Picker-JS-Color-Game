var colors = [
'rgb(255, 0, 0)',
'rgb(255, 255, 0)',
'rgb(0, 255, 0)',
'rgb(0, 255, 255)',
'rgb(0, 0, 255)',
'rgb(255, 0, 255)'
]

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.getElementById('message');

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