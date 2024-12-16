/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstValue = null;
let secondValue = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/
const calculatorEl = document.querySelector("#calculator");
const displayEl = document.querySelector(".display");
/*----------------------------- Event Listeners -----------------------------*/

calculatorEl.addEventListener("click", function (e) {
  // e is the event object
  // event object gives us information about the click event
  // e.target gives us the element we click on!
  console.log(e.target.innerText);

  if (e.target.classList.contains("number")) {
    // Do something with a number
    console.log("clicking on a number");
    // if firstValue is null lets store the number clicked on there
    // otherwise store it the secondValue
    if (firstValue === null) {
      // e.target.innerText is a string, must convert to a number

      displayEl.innerText = displayEl.innerText + e.target.innerText;
      // displayEl.innerText += e.target.innerText
    } else {
      // reset the displayEl to an empty string

      displayEl.innerText = displayEl.innerText + e.target.innerText;
    }
  }

  if (e.target.classList.contains("operator")) {
    console.log("operator clicked on");
    // Update the firstValue
    firstValue = displayEl.innerText;
    console.log(firstValue, " <- firstValue");

    // update the operator
    // e.target.innerText will either be, '/', '-', '+', '*'
    operator = e.target.innerText;

    // reset the displayEl text to get ready for the second number
    displayEl.innerText = "";
  }

  if (e.target.classList.contains("equals")) {
    secondValue = displayEl.innerText;
    console.log(secondValue, " <- secondValue");
    // run operation we clicked on with our first and second value
    // and update the displayEl innerText to show the result


  	//==========================================
  	//==========================================
	// One WAY TO SOLVE using if/else
    // if (operator === "+") {
    //   displayEl.innerText = add();
    // } else if (operator === "-") {
    //   displayEl.innerText = subtract();
    // } else if (operator === "/") {
		
    //   displayEl.innerText = divide();
    // } else {
    //   displayEl.innerText = multiply();
    // }
  //==========================================
  //==========================================

	// ANother way using a switch operator!
  //==========================================
  //==========================================
  	displayEl.innerText = getResult();


  }
});

function getResult(){
	firstValue = Number(firstValue);
  	secondValue = Number(secondValue);
	switch(operator) {
		case '+':
		return firstValue + secondValue;
		case '-':
		return firstValue - secondValue;
		case '*':
		return firstValue * secondValue;
		case '/':
		return firstValue / secondValue;
	}
}






/*-------------------------------- Functions --------------------------------*/
function add() {
  return Number(firstValue) + Number(secondValue);
}

function subtract() {
  return Number(firstValue )- Number(secondValue)
}

function multiply() {
  return Number(firstValue) * Number(secondValue)
}

function divide() {
  return Number(firstValue) / Number(secondValue)
}