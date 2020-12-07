// *SELECTING BUTTONS*

const numberButtons = document.querySelectorAll(`.number`);
const operationButtons = document.querySelectorAll(`.operation`);
const allClear = document.querySelector(`#all-clear`)
const deleteButton = document.querySelector(`#delete`)
const equalButton = document.querySelector(`#equal`)
const display = document.querySelector(`.output`)
const currentDisplay = document.querySelector(`.current-display`);
const previousDisplay = document.querySelector(`.previous-display`);

// declare variables to storage current and previous output the result of the operation as null for default...
// ... to storage the operation button value and last to state the decimal dot as false

let currentOutput = ``;
let previousOutput = ``;
let result = null;
let operationButtonValue = ``;
let decimalDot = false;


// create a function for the number buttons so we add a number to the display everytime we press a number
// and check if the decimal dot is false or not so we can add it to the number

for (var i = 0; i < numberButtons.length; i++) {
    document.querySelectorAll(`.number`)[i].addEventListener(`click`, (e) => {
        if (currentOutput === result) {
            currentOutput = ``
            previousDisplay.innerText = ``
        };
        if (e.target.innerText === `.` && !decimalDot){
            decimalDot = true;
        }else if (e.target.innerText === `.` && decimalDot) return

        if(e.target.innerText === `0` && currentDisplay.innerText === `0`) return
        
        currentOutput += e.target.innerText;
        currentDisplay.innerText = currentOutput

    })

}

// create a function that adds the current display to the previous display along with the operator not after checking
// there is a value to add this also need a callback to a function that proceed with an operation 
//so we can storage the result every time an operator is pressed and also a function that clears the current output
// and reset the decimal dot to false

for (var i = 0; i < operationButtons.length; i++) {
    document.querySelectorAll(`.operation`)[i].addEventListener(`click`, (e) => {

     if (!currentOutput) return;
     decimalDot = false;
     const operatorValue = e.target.innerText
     // add a conditional to check if there is a value on the output if to storage a result if is not the result
     // will be the current display
     if (currentOutput && previousOutput && operationButtonValue ){
         calculate()
     } else {
         result = currentOutput
     }
     outputDisplay(operatorValue)
     operationButtonValue = operatorValue
     console.log(result);


    })

}

// lets create the outputDisplay function this function will clear the current output and add the value along with
// the operator to the prevous output value and set it to default empty

const outputDisplay = (operator = ``) => {
    previousOutput += currentOutput + ` ` + operator + ` `;
    previousDisplay.innerText = previousOutput;
    currentDisplay.innerText = ``
    currentOutput = ``
}

// lets create the calculate function this function should storage result everytime is called

const calculate = () => {
    switch (operationButtonValue){
        case `*`:
            result = parseFloat(result) * parseFloat(currentOutput);
            break;
        case `+`:
            result = parseFloat(result) + parseFloat(currentOutput);
            break;
        case `-`:
            result = parseFloat(result) - parseFloat(currentOutput);
            break;
        case `÷`:
            result = parseFloat(result) / parseFloat(currentOutput);
            break;
    }
}

// add functionality to the equal button

equalButton.addEventListener(`click`, () => {
    if (!currentOutput || !previousOutput) return;
    decimalDot = false;
    calculate()
    outputDisplay()
    currentDisplay.innerText = result;
    currentOutput = result;
    previousOutput = ``
})

// deleteButton.addEventListener(`click`, function() {
//     alert (`delete`)
// })
// add functionality to the clear button 
allClear.addEventListener(`click`, () => {
   currentDisplay.innerText = `0`
   previousDisplay.innerText = ``;
   currentOutput = '';
   previousOutput = ``;
   decimalDot = false
})

deleteButton.addEventListener(`click`, () => {
    
    if (currentOutput === result) return;
    currentOutput =  currentOutput.slice(0, -1);
    currentDisplay.innerText = currentOutput
    decimalDot = false
    
})


