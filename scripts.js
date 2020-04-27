
const screen = document.getElementById('screen-display')

let displayVal = '0';
let pendingValue;
let evalStringArray = [];

const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');


const removeBtn = document.getElementById('remove');
const backspaceBtn = document.getElementById('backspace');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const equalsBtn = document.getElementById('equals');
const dot = document.getElementById('dot');

const numBtn = document.getElementsByClassName('button-num');
const operatorBtn = document.getElementsByClassName('button-operator');

const displayValue = (click) => {
  const btnText = click.target.innerText;
  if(displayVal === '0')
    displayVal = '';

    displayVal += btnText;
    screen.innerText = displayVal;

  }

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', displayValue, false)
  
}

const performOperation = (click) => {

  const operator = click.target.innerText;
  switch(operator){
    case '+':
      pendingValue = displayVal;
      displayVal = '0';
      screen.innerText = displayVal;
      evalStringArray.push(pendingValue);
      evalStringArray.push('+');
      break;

      case '-':
        pendingValue = displayVal;
        displayVal = '0';
        screen.innerText = displayVal;
        evalStringArray.push(pendingValue);
        evalStringArray.push('-');
        break;
        
      case 'x':
        pendingValue = displayVal;
        displayVal = '0';
        screen.innerText = displayVal;
        evalStringArray.push(pendingValue);
        evalStringArray.push('*');
        break;
     
        case '÷':
        pendingValue = displayVal;
        displayVal = '0';
        screen.innerText = displayVal;
        evalStringArray.push(pendingValue);
        evalStringArray.push('/');
        break;

        case '=':
          evalStringArray.push(displayVal);
          let evaluation = eval(evalStringArray.join(' '));
          displayVal = evaluation + ' ';
          screen.innerText = displayVal;
          evalStringArray = [];
          break;

          default:
          break;
  }
}

for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener('click', performOperation, false)
}

removeBtn.onclick = () => {
  displayVal = '0';
  pendingValue = undefined;
  evalStringArray = [];
  screen.innerText = displayVal;
}

backspaceBtn.onclick = () => {
  let lengthDisplayValue = displayVal.length;
  displayVal = displayVal.slice(0, lengthDisplayValue - 1);
  
  if(displayVal === '')
      displayVal = '0';
      screen.innerText = displayVal;

}

dot.onclick = () => {
  if(!displayVal.includes('.'))
      displayVal += '.';
      screen.innerText = displayVal;
}

