const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const currentResult = document.querySelector('#current-result');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const equal = document.querySelector('#equal');
const addition = document.querySelector('#addition');
const subtraction = document.querySelector('#subtraction');
const multiply = document.querySelector('#multiply');
const division = document.querySelector('#division');

for (const number of numbers) {
    number.addEventListener('click' , (e) => printNumberToScreen(e));
}

for (const operator of operators) {
    operator.addEventListener('click' , (e) => printOperatorToScreen(e));
}

reset.addEventListener('click' , clear);

equal.addEventListener('click', calculate);

del.addEventListener('click', removeLastNumber);

function printNumberToScreen(e){
    currentResult.innerHTML += e.target.innerHTML;
}

function printOperatorToScreen(e){
    currentResult.innerHTML += e.target.innerHTML;
}

function clear(){
    currentResult.innerHTML = "";
}


function clearError(){
    currentResult.innerHTML = "";
}

function calculate(){
    try{
        currentResult.innerHTML = eval(currentResult.innerHTML);
    }
    catch(error){
        currentResult.innerHTML = "Error";
        setTimeout(clearError,2000)
    }
}

function removeLastNumber(){
    currentResult.innerHTML = currentResult.innerHTML.split('').slice(0 , -1).join('');
}