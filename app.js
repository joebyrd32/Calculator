let currentNumber = '0';
let storedNumber = null;
let operator = null;
const display = document.querySelector('.display');
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', ()=>processNumberBtn(1));
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', ()=>processNumberBtn(2));
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', ()=>processNumberBtn(3));
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', ()=>processNumberBtn(4));
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', ()=>processNumberBtn(5));
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', ()=>processNumberBtn(6));
const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', ()=>processNumberBtn(7));
const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', ()=>processNumberBtn(8));
const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', ()=>processNumberBtn(9));
const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', ()=>processNumberBtn(0));
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', ()=>processArithmiticBtn('+'));
const btnSubtract = document.getElementById('btnSubtract');
btnSubtract.addEventListener('click', ()=>processArithmiticBtn('-'));
const btnMultiply = document.getElementById('btnMultiply');
btnMultiply.addEventListener('click', ()=>processArithmiticBtn('*'));
const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', ()=>clearData());
const btnEquals = document.getElementById('btnEquals');
btnEquals.addEventListener('click', ()=>processEqualBtn());
const btnDivide = document.getElementById('btnDivide');
btnDivide.addEventListener('click', ()=>processArithmiticBtn('/'));
const btnDelete = document.getElementById('btnDelete');
btnDelete.addEventListener('click', ()=>deleteOneSpot());
const btnPeriod = document.getElementById('btnPeriod');
btnPeriod.addEventListener('click', ()=>processNumberBtn('.'));

function deleteOneSpot(){
    console.log(currentNumber);
    currentNumber = currentNumber.slice(0, -1);
    console.log(currentNumber);
    populateDisplay();
}

function clearData(){
    currentNumber = '0';
    storedNumber = null;
    operator = null;
    populateDisplay();
}

function processEqualBtn(){
    if(storedNumber == null || operator == null || currentNumber == null) return;
    storedNumber = operate(Number(storedNumber), Number(currentNumber), operator)
    operator = null
    currentNumber = ''
    populateDisplay();
}

function processArithmiticBtn(input){
    if(storedNumber == null){
        storedNumber = Number(currentNumber);
        currentNumber = '';
        operator = input;
        populateDisplay();
        return;
    }
    if(operator == null){
        operator = input;
        populateDisplay();
        return;
    }
    storedNumber = operate(Number(storedNumber), Number(currentNumber), operator)
    operator = input;
    currentNumber = ''
    populateDisplay();
}

function processNumberBtn(input){
    if(input == '.'){
        if(currentNumber.includes('.')) return;
    }
    if(storedNumber != null && operator == null) storedNumber = null;
    if(currentNumber == '0') currentNumber = input.toString();
    else currentNumber = currentNumber + input.toString();
    populateDisplay();
}

function populateDisplay(){
    
    display.textContent = (storedNumber ? storedNumber + ' ' : '') +  
            (operator ? operator + ' ' : '') + currentNumber;
}

function operate(a, b, operator){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Error';
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}