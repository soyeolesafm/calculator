

function addition() {
    var val = 0
    for (var i = 0; i< arr.length; i++){
        val += arr[i]
        
    }
    return val;
}
function substraction() {
    var val = (Math.max.apply(Math, arr)) * 2; 
    for (var i = 0; i< arr.length; i++){
        val -= arr[i];
        
    }
    
    return val;
}
function division(a, b) {
    var val = a / b;
    
    return val;
}
function multiplication() {
    var val = 1;
    for (var i = 0; i< arr.length; i++){
        val *= arr[i];
    }
    return val;
}

function calculate(operation, arr) {

    switch (operation) {
        case 'add':
            return addition(arr);
        case 'substract':
            return substraction(arr);
        case 'multiply':
            return multiplication(arr);
        case 'divide':
            return division(arr[0], arr[1]);

    
        default:
            console.log('please enter add, substract multiply or divide before arr');
    }
    

   console.log(val);
}



var arr = [8, 9, 10, 50]
calculate('add', arr);
calculate('substract', arr);
calculate('multiply', arr);
calculate('divide', arr);
