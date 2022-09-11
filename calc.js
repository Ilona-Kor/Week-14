const aInput = document.querySelector ('#a');
const bInput = document.querySelector ('#b');
const buttonDivide = document.querySelector ('#button-divide');
const buttonMultiply = document.querySelector ('#button-multiply');
const buttonMinus = document.querySelector ('#button-minus');
const buttonPlus = document.querySelector ('#button-plus');
const result = document.querySelector ('#result');

const divide = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a / b;
}
buttonDivide.onсlick = divide;

const multiply = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a * b;
}
buttonMultiply.onсlick = multiply;

const minus = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a - b;
}
buttonMinus.onсlick = minus;

const sum = () => {
    const a = Number (aInput.value);
    const b = Number (bInput.value);
    
    result.innerHTML = a + b;
}
buttonPlus.onсlick = sum;