const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const currentResult = document.querySelector('#current-result');
const previousResult = document.querySelector('#previous-result');
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
    previousResult.innerHTML = "";
}

function calculate(){
    currentResult.innerHTML = eval(currentResult.innerHTML);
}

function removeLastNumber(){
    currentResult.innerHTML = currentResult.innerHTML.split('').slice(0 , -1).join('');
}