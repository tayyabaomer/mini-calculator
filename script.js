
// Getting hold on both inputs
var firstInput = document.getElementById("first-input").value;

var secondInput = document.getElementById("second-input").value;

var firstInput = parseInt(firstInput)

var secondInput = parseInt(secondInput)


// Functions should be applied on click 
function addition() {
    
    var add = firstInput + secondInput;

    document.getElementById("result").innerHTML = add;

}

function subtraction() {

    var subtract = firstInput - secondInput;

    document.getElementById("result").innerHTML = subtract;

}

function multiplication() {
    
    var multiply = firstInput * secondInput;

    document.getElementById("result").innerHTML = multiply;

}

function division() {

    var divide = firstInput / secondInput;

    // var divide = Math.round(divide)

    document.getElementById("result").innerHTML = divide;

}
