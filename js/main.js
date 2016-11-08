//variable that controls the background color
var background = "red";

//finds the Id of 'body' and injects the value of the variable background into the background style.
document.getElementById("body").style.background = background;



document.getElementById("button1").onclick = function buttonOne()
{
	document.getElementById("body").style.background = 'green';
};

//a click box that controls the background color variable

	//on click a static variable will be injected into the background variable
	//by pressing enter a text value will be placed in the background variable
	//by moving a slider a color vairable will be injected into the background variable

