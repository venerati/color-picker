//variable that controls the background color
var background = "red";

//finds the Id of 'body' and injects the value of the variable background into the background style.
document.getElementById("body").style.background = background;


//a click box that controls the background color variable

	//on click a static variable will be injected into the background variable
document.getElementById("button1").onclick = function buttonOne()
{
	document.getElementById("body").style.background = 'green';
};

document.getElementById("button2").onclick = function buttonOne()
{
	document.getElementById("body").style.background = 'blue';
};

document.getElementById("button3").onclick = function buttonOne()
{
	document.getElementById("body").style.background = 'red';
};

	//by pressing enter a text value will be placed in the background variable
		//pull the value from the text field and bind it to a variable



		//by clicking the submit button you will inject the variable's value into the box
		document.getElementById("colorSubmit").onclick = function ()
		{
			var textColor = document.getElementById("x").value;
			document.getElementById("body").style.background = textColor;
		}

	//by moving a slider a color vairable will be injected into the background variable

