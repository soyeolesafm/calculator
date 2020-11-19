// var equalButton = document.getElementById('calculate');


// var addNumber = document.getElementById('submit');

// *SELECTING BUTTONS*

const numberButtons = document.querySelectorAll(`.number`);
const operationButtons = document.querySelectorAll(`.operation`);
const allClear = document.querySelector(`#all-clear`)
const deleteButton = document.querySelector(`#delete`)
const equalButton = document.querySelector(`#equal`)
const display = document.querySelector(`.output`)
const currentDisplay = document.querySelector(`.current-display`).innerText;
const previousDisplay = document.querySelector(`.previous-display`).innerText;



equalButton.addEventListener(`click`, function() {
    alert('equal')
})


// deleteButton.addEventListener(`click`, function() {
//     alert (`delete`)
// })

allClear.addEventListener(`click`, function (){
    displayPrevious('')
    displayCurrent('')
})

deleteButton.addEventListener(`click`, function (){
    var output = numberFormat(getCurrentValue()).toString();
    if(output){
        output = output.slice(0, -1);
        displayCurrent(output);
    }
})

for (var i = 0; i < numberButtons.length; i++) {
    document.querySelectorAll(`.number`)[i].addEventListener(`click`, function (){
        var output = numberFormat(getCurrentValue());
        if (output !=NaN){
            output = output+this.innerText;
            displayCurrent(output);
        }
        
    }) 
    
}

for (var i = 0; i < operationButtons.length; i++) {
    document.querySelectorAll(`.operation`)[i].addEventListener(`click`, function (){
        alert(this.innerText);
    }) 
    
}

function displayPrevious (num){
    return document.querySelector(`.previous-display`).innerText=num
    
}

function displayCurrent (num){
    var strNumber = function(num){
        var n = Number(num);
        var value = n.toLocaleString(`en`);
        return value
    }
    
    return document.querySelector('.current-display').innerText=strNumber(num)
}

function getCurrentValue (){
    return document.querySelector(`.current-display`).innerText;
}

function numberFormat (num){
    return Number(num.replace(/,/g, ``))
}



// var arr = []


// function addition() {
//     var val = 0
//     for (var i = 0; i< arr.length; i++){
//         val += arr[i]
        
//     }
//     document.getElementById('result').innerHTML = val;
    
// }
// function substraction() {
//     var val = (Math.max.apply(Math, arr)) * 2; 
//     for (var i = 0; i< arr.length; i++){
//         val -= arr[i];
        
//     }
    
//     document.getElementById('result').innerHTML = val
// }
// function division() {
//     var a = arr[0];
//     var b = arr[1];
//     var val = a / b;
    
//     document.getElementById('result').innerHTML = val
// }
// function multiplication() {
//     var val = 1;
//     for (var i = 0; i< arr.length; i++){
//         val *= arr[i];
//     }
//     document.getElementById('result').innerHTML = val
// }

// function calculate(op, arr) {

//     var op =document.getElementById('operator').value

//     switch (op) {
//         case '+':
//             return addition(arr);
//         case '-':
//             return substraction(arr);
//         case '*':
//             return multiplication(arr);
//         case '/':
//             return division(arr);
            
//             alert(val);
//     } 
    

 
// }



// function subNum() {
    
//     var num = parseFloat(document.getElementById('vnum').value  );

    
    
//     if(isNaN(num) === true) return

//     arr.push(num)

//     var valN = ''

//     for(i = 0; i < arr.length; i++){

//         valN = valN + arr[i] + ", ";
//     }
//     document.getElementById('dispN').innerHTML = valN;

//     parseFloat(document.getElementById('vnum').value = '');
// }



// addNumber.addEventListener('click', subNum);
