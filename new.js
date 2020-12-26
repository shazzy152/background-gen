var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button1 = document.querySelector(".Random");

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
		h3.textContent = "Left : " + color1.value + " " + "Right : " + color2.value;
}
function getRandomColor(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var rC1 = "#" + randomColor1

	return rC1;
}
function setRandomColor(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)

button1.addEventListener("click",setRandomColor)
