let currentInput = '';
let previousInput = '';
let operation = '';

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput.length < 15) {
        currentInput += number;
        updateDisplay();
    }
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    let result;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay();
}
