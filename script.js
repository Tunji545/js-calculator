const textarea = document.querySelector('textarea');

let btns = document.querySelectorAll('.btn');
let operators = document.querySelectorAll('.operator');
let arrNum = [];
let letter;
let equalValue;
let result;

const allOperators = ['+', '-', '*', '/'];

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const text = e.currentTarget.textContent;
    const prevEntry = arrNum[arrNum.length - 1];

    if (arrNum.length < 1 || allOperators.includes(prevEntry)) {
      arrNum.push(text);
    } else {
      arrNum[arrNum.length - 1] = `${prevEntry}${text}`;
      console.log(`${prevEntry}`, `${text}`, `${prevEntry}${text}`);
    }

    letter = arrNum.toString().split(',').join('');
    textarea.innerText = letter;
  });
});

operators.forEach(function (operator) {
  operator.addEventListener('click', function (e) {
    let operate = e.currentTarget.textContent;
    // textarea.innerText = operate;

    arrNum.push(operate);
    letter = arrNum.toString().split(',').join('');
    textarea.innerText = letter;
  });
});

const equal = document.querySelector('.btn18');
equal.addEventListener('click', function (e) {
  result = 0;

  for (let i = 0; i < arrNum.length; i++) {
    if (i === 0) {
      result += parseFloat(arrNum[i]);
      console.log(result);
    } else if (i === arrNum.length - 1) {
      // continue;
    } else {
      console.log(result, arrNum[i], parseFloat(arrNum[i + 1]));
      switch (arrNum[i]) {
        case '+':
          result += parseFloat(arrNum[i + 1]);
          break;
        case '-':
          result -= parseFloat(arrNum[i + 1]);
          break;
        case '/':
          console.log('=========PREV', result);
          result /= parseFloat(arrNum[i + 1]);
          console.log('===CURR', result);
          break;
        case '*':
          result *= parseFloat(arrNum[i + 1]);
          break;
        default:
          result;
      }
      console.log('2', result);
    }
  }

  textarea.innerText = result;
  arrNum = [];
});

const reset = document.querySelector('.btn1');
reset.addEventListener('click', function (e) {
  // console.log(e.currentTarget.innerText);
  arrNum = [];
  letter = '';
  result = 0;
  textarea.innerText = result;
});
