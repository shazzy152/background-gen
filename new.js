var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
		h3.textContent = "Left : " + color1.value + " " + "Right : " + color2.value;
}

color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)
