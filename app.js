// var equalButton = document.getElementById('calculate');


// var addNumber = document.getElementById('submit');

// *SELECTING BUTTONS*

const numberButtons = document.querySelectorAll(`.number`).length;
const operationButtons = document.querySelectorAll(`.operation`).length;
const allClear = document.querySelector(`#all-clear`)
const deleteButton = document.querySelector(`#delete`)
const equalButton = document.querySelector(`#equal`)
const display = document.querySelector(`.output`)
const currentDisplay = document.querySelector(`.current-display`).innerText;
const previousDisplay = document.querySelector(`.previous-display`).innerText;



equalButton.addEventListener(`click`, function() {
    alert('equal')
})


deleteButton.addEventListener(`click`, function() {
    alert (`delete`)
})

allClear.addEventListener(`click`, function (){
    return display.innerHTML = ``
})

for (var i = 0; i < numberButtons; i++) {
    document.querySelectorAll(`.number`)[i].addEventListener(`click`, function (){
        alert('number');
        console.log(buttonValue);
    }) 
    
}

for (var i = 0; i < operationButtons; i++) {
    document.querySelectorAll(`.operation`)[i].addEventListener(`click`, function (){
        alert('operation');
    }) 
    
}

function displayPrevious (num){
    return document.querySelector(`.previous-display`).innerText=num
    
}

function displayCurrent (num){
    return document.querySelector('.current-display').innerText=num
}

displayPrevious(87)
displayCurrent(1988)



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
