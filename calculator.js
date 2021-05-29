//Digit buttons
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
//Other buttons
let btnCE = document.getElementById("btnCE");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMultiply = document.getElementById("btnMultiply");
let btnDivide = document.getElementById("btnDivide");
let btnEqual = document.getElementById("btnEqual");
//Expression
let calExpr = document.getElementById("expression");
let calDisplay = document.getElementById("result")
//body
let calBody = document.getElementById("top");

let oper = undefined;
let rs = 0;


let handleDigitBtClick = (e, digit) => {
    calExpr.innerText += digit;
};

let calculateResult = () => {
    if (oper != undefined) {
        let expr = calExpr.innerText;
        let nums = expr.split(oper);
        if (nums[0].length > 0 && nums[1].length > 0) {
            let num1 = parseFloat(nums[0]);
            let num2 = parseFloat(nums[1]);

            switch (oper) {
                case '+':
                    rs = num1 + num2;
                    break;
                case '*':
                    rs = num1 * num2;
                    break;
                case '/':
                    rs = num1 / num2;
                    break;
                case '-':
                    rs = num1 - num2;
                    break;
            }
            calDisplay.innerText = rs;
            calExpr.innerText = rs;
            oper = undefined;
            return 0;
        }
    }
    return -1;
}

let add = () => {
    calculateResult();
    if (oper == undefined) {
        calExpr.innerText += '+'
        oper = '+';
    }
}

let multiply = () => {
    calculateResult();
    if (oper == undefined) {
        calExpr.innerText += '*'
        oper = '*';
    }
}

let divide = () => {
    calculateResult();
    if (oper == undefined) {
        calExpr.innerText += '/'
        oper = '/';
    }
}

let minus = () => {
    calculateResult();
    if (oper == undefined) {
        calExpr.innerText += '-'
        oper = '-';
    }
}

let resetCal= ()=>{
    oper = undefined;
    rs = 0;
    calExpr.innerText = '';
    calDisplay.innerText=0;
}

let handleKeyboardEvents = (e) => {
    var keyCode = e.keyCode || e.which;
    if (keyCode >= 96 && keyCode <= 105) {
        keyCode -= 48;
    }

    if (e.shiftKey && keyCode == 187) {
        btnPlus.click();
    }
    else if ((!e.shiftKey && keyCode == 187) || (keyCode == 13)) {
        btnEqual.click();
    }
    else if (e.shiftKey && keyCode == 18) {
        btnMultiply.click();
    }
    else if (e.shiftKey && keyCode == 189) {
        btnMinus.click();
    }
    else if (e.shiftKey && keyCode == 191) {
        btnDivide.click();
    }
    else {

        let char = String.fromCharCode(keyCode);

        switch (char) {
            case '0':
                btn0.click();
                break;
            case '1':
                btn1.click();
                break;
            case '2':
                btn2.click();
                break;
            case '3':
                btn3.click();
                break;
            case '4':
                btn4.click();
                break;
            case '5':
                btn5.click();
                break;
            case '6':
                btn6.click();
                break;
            case '7':
                btn7.click();
                break;
            case '8':
                btn8.click();
                break;
            case '9':
                btn9.click();
                break;
        }

    }
}

btn0.addEventListener("click", (e) => handleDigitBtClick(e, 0));
btn1.addEventListener("click", (e) => handleDigitBtClick(e, 1));
btn2.addEventListener("click", (e) => handleDigitBtClick(e, 2));
btn3.addEventListener("click", (e) => handleDigitBtClick(e, 3));
btn4.addEventListener("click", (e) => handleDigitBtClick(e, 4));
btn5.addEventListener("click", (e) => handleDigitBtClick(e, 5));
btn6.addEventListener("click", (e) => handleDigitBtClick(e, 6));
btn7.addEventListener("click", (e) => handleDigitBtClick(e, 7));
btn8.addEventListener("click", (e) => handleDigitBtClick(e, 8));
btn9.addEventListener("click", (e) => handleDigitBtClick(e, 9));

btnPlus.addEventListener("click", () => add());
btnEqual.addEventListener("click", () => calculateResult());
btnCE.addEventListener("click", () => resetCal());
btnMultiply.addEventListener("click", () => multiply());
btnDivide.addEventListener("click", () => divide());
btnMinus.addEventListener("click", () => minus());

calBody.addEventListener("keydown", (e) => handleKeyboardEvents(e));
