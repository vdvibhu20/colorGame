var gameMode= 6;

var squares= document.querySelectorAll(".square");

var heading= document.querySelector("#heading");

var correctColorDisplay= document.querySelector("#correctColorDisplay");

var progress= document.querySelector("#progress");

var resetButton= document.getElementById("newColors");

var easyButton= document.querySelector("#easy");
var hardButton= document.querySelector("#hard");

resetGame();
init();
buttonEvents();

function init(){
	for(var i=0; i< squares .length; i++){
		squares[i].addEventListener("click", function(){
			if(this.style.background=== correctColor){
				doWhenWin();
			}

			else{
				this.style.background= "#252525";
				progress.textContent= "Try Again";
			}
		});
	}

}

function buttonEvents(){

	easyButton.addEventListener("click", function(){
		gameMode= 3
		easy= true;
		hard= false;
		resetGame();
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
	
	});

	hardButton.addEventListener("click", function(){
		gameMode= 6;
		easy= false;
		hard= true;
		resetGame();
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		
	});

	resetButton.addEventListener("click", function(){
		resetGame();
	});

}


function doWhenWin(){
	for(var j=0; j<squares.length; j++){
			    squares[j].style.background= correctColor;
				progress.textContent= "Correct";   
			}

	heading.style.background= correctColor;

	resetButton.textContent= "Play Again?";

}

function colorgenerator(no){
	var arr= [];
	for(var i=0; i< no; i++){
		arr[i]= newRandomColor();
	}

	return arr;
}

function newRandomColor(){
	var red= Math.floor(Math.random()* 256);
	var green= Math.floor(Math.random()* 256);
	var blue= Math.floor(Math.random()* 256);

    var newColor= "rgb("+ red+ ", "+ green+ ", "+ blue+ ")";
	
	return newColor;
}

function colorPicker(no){
    var newColorIndex= Math.floor(Math.random()* no);

	return newColorIndex;
}

function resetGame(){
	colors= colorgenerator(gameMode);

	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.background= colors[i];
			squares[i].style.display= "block";
		}

		else{
			squares[i].style.display= "none";
		}
	}

	correctColor= colors[colorPicker(gameMode)];

	correctColorDisplay.textContent= correctColor;

	resetButton.textContent= "New Color";

	heading.style.background= "steelblue";

	progress.textContent= "";
}	
