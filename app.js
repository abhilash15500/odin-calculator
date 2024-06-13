// variables

let finalAns;
let num1, num2;
let operator;
let currentDisplayValue;
let buttonSelector = document.querySelectorAll(".calculator-btn");
let calculatorDisplay = document.querySelector("#calculator-display");

let buttonsForOperation = document.querySelectorAll(".calculator-btn-operand")
let isOperationButtonClicked;
let equalToButton = document.querySelector(".calculator-btn-equal-to");
let acButtonSelector = document.querySelector(".calculator-btn-ac");


// functions for different operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



// operate function to take numbers and operator and call operation function

let operateFunctionExpression = function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    }

    else if (operator == "-") {
        return subtract(num1, num2);
    }

    else if (operator == "*") {
        return multiply(num1, num2);
    }

    else if (operator == "/") {
        return divide(num1, num2);
    }
}




// event listeners for buttons of calculator to display on the dom and update the numbers 1 and 2 along with operator

buttonSelector.forEach(element => {
    element.addEventListener("click", function updateDisplay() {

        currentDisplayValue = calculatorDisplay.textContent +
            element.textContent;
        calculatorDisplay.textContent = currentDisplayValue;


        currentDisplayValue = Number(currentDisplayValue);


        if (isOperationButtonClicked) {
            num2 = currentDisplayValue;
        }

        else if (!isOperationButtonClicked) {
            num1 = currentDisplayValue;
        }


    });

});



buttonsForOperation.forEach(element => {
    
    
     element.addEventListener("click", ()=> {
       
        if(!num2) {
            calculatorDisplay.textContent = ""
    
        }
    
        else {  
            calculatorDisplay.textContent = ""
            num1 = operateFunctionExpression(num1,num2,operator);
            num2 = undefined;
            
           
            
            
        }
        operator = element.textContent

        isOperationButtonClicked = true;
       
    });
   
})





equalToButton.addEventListener("click", () => {
    finalAns = operateFunctionExpression(num1, num2, operator);
    calculatorDisplay.textContent = finalAns;

});



acButtonSelector.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "undefined"
    isOperationButtonClicked = false;
    calculatorDisplay.textContent = "";
  

})




