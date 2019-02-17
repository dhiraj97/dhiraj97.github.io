//fill colors array with random colors like color[0] = rgb(r, g, b)
var numSquares=9;
var colors = generateRandomColors(numSquares);	
var square = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var randomColor = pickColor();
var message = document.querySelector("#message"); 
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var extremeBtn = document.getElementById("extreme");
var correctsound = new Howl({
	src: ['animation/sounds/bubbles.mp3']
});
var wrongsound = new Howl({
	src: ['animation/sounds/beep.mp3']
});
easyBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";
	message.innerHTML="";
	extremeBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares =3;
	colors = generateRandomColors(numSquares);
	
	randomColor = pickColor();
	
	colorDisplay.textContent = randomColor;
	for(var i=0;i<9;i++)
	{
		
		if(colors[i])
		square[i].style.backgroundColor = colors[i];
	else
	{
		console.log(i);
		square[i].style.display = "none";
	}
	}	
	resetButton.innerHTML = "New Colors";
});
	extremeBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";
	message.innerHTML="";
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	extremeBtn.classList.add("selected");
	numSquares = 9;
		colors = generateRandomColors(numSquares);
		console.log(colors.length);
	randomColor = pickColor();
	console.log(randomColor);
	colorDisplay.textContent = randomColor;
	for(var i=0;i<9;i++)
	{
			if(colors[i])
			{
				square[i].style.display="block";
				square[i].style.backgroundColor = colors[i];
		
			}
	
		else
		{
			console.log(i);
		square[i].style.display = "none";
		
		}
	}	
	resetButton.innerHTML = "New Colors";
});
hardBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";
	message.innerHTML="";
	easyBtn.classList.remove("selected");
	extremeBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	
	
	numSquares = 6;
	
		colors = generateRandomColors(numSquares);
		
	randomColor = pickColor();
	colorDisplay.textContent = randomColor;
	console.log(square.length);
	for(var i=0;i<9;i++)
	{
		
		if(colors[i])
		{
			
			square[i].style.display="block";
		square[i].style.backgroundColor = colors[i];
		
		}
		else
		{
			
		square[i].style.display = "none";
		
		}
	}	
	resetButton.innerHTML = "New Colors";
});

resetButton.addEventListener("click",function(){
	
	message.innerHTML="";
	//generateRandomColors
	colors = generateRandomColors(numSquares);
	//pick random color
	randomColor = pickColor();
	//change display color to randomColor
	colorDisplay.textContent = randomColor;
	//reset h1 background color
	h1.style.backgroundColor = "steelblue";
	//color all the squares back to newly generated  randomcolors
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
	}
	//set the text of button to new colors 
	resetButton.innerHTML = "New Colors";
	
	
});
colorDisplay.textContent = randomColor;
for(var i=0;i<square.length;i++)
{
	//adding colors to the squares
	square[i].style.backgroundColor = colors[i];
	
	//adding evennt listener on each square
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === randomColor)
		{
			correctsound.play();
			setBackgroundToCorrectColor(clickedColor);
			message.textContent = "Correct";
			h1.style.backgroundColor = clickedColor;
			resetButton.innerHTML = "Play again !";
			
		}
		else{
			wrongsound.play();
			this.style.backgroundColor = "black";
			message.textContent = "Try Again";
		}
		
	});
	
}

function setBackgroundToCorrectColor(correctColor)
{
	console.log(square.length);
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = correctColor;
	}
	
}

function pickColor()
{
	var random_color =  Math.floor(Math.random()*colors.length);
	//returns random color element like rgb(255,34,23) which is at index random_color
	return colors[random_color];
}

function generateRandomColors(num)
{
	
	var arr = [];
	//add random colors num times
	for(var i=0; i<num; i++)
	{
		//push array elements from getRandomColor method which returns string of random colors in the form of "rgb(r, g, b)"
		arr.push(getRandomColor());
	}
	//return array elements of num random colors
	return arr;
	
}

function getRandomColor()
{
	//generate red from 0-255
	var r = Math.floor(Math.random()*256);
	//generate green from 0-255
	var g = Math.floor(Math.random()*256);
	//generate blue from 0-255
	var b = Math.floor(Math.random()*256);
	
	//returns "rgb( r, g, b)"
	return "rgb("+ r +", "+ g +", " + b + ")";
	
}