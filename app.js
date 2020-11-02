var equalButton = document.getElementById('calculate');


var addNumber = document.getElementById('submit');





var arr = []
console.log(arr);

function addition() {
    var val = 0
    for (var i = 0; i< arr.length; i++){
        val += arr[i]
        
    }
    document.getElementById('result').innerHTML = val;
    
}
function substraction() {
    var val = (Math.max.apply(Math, arr)) * 2; 
    for (var i = 0; i< arr.length; i++){
        val -= arr[i];
        
    }
    
    document.getElementById('result').innerHTML = val
}
function division() {
    var a = arr[0];
    var b = arr[1];
    var val = a / b;
    
    document.getElementById('result').innerHTML = val
}
function multiplication() {
    var val = 1;
    for (var i = 0; i< arr.length; i++){
        val *= arr[i];
    }
    document.getElementById('result').innerHTML = val
}

function calculate(op, arr) {

    var op =document.getElementById('operator').value

    switch (op) {
        case '+':
            return addition(arr);
        case '-':
            return substraction(arr);
        case '*':
            return multiplication(arr);
        case '/':
            return division(arr);
            
            alert(val);
    } 
    

 
}

function subNum() {
    
    var num = parseFloat(document.getElementById('vnum').value  );

    arr.push(num)

    var valN = ''

    for(i = 0; i < arr.length; i++){

        valN = valN + arr[i] + ", ";
    }
    document.getElementById('dispN').innerHTML = valN;

    parseFloat(document.getElementById('vnum').value = '');
}

equalButton.addEventListener('click', calculate)

addNumber.addEventListener('click', subNum);
