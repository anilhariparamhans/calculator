let rs = 0;
let expr = "";
let curNum = 0;
let digitPressed = false;

let handleDigitBtClick = (digit) => {
    curNum = (curNum * 10) + digit;
    document.getElementById("result").innerText = curNum;
    console.log(curNum);
    digitPressed = true;
};

let calculateResult = () => {

    if (digitPressed) {
        if (expr == "")
            expr = curNum;
        else
            expr = expr + "+" + curNum;
        digitPressed = false;
    }
    rs = (rs) + curNum;

    document.getElementById("expression").innerText = expr;
    document.getElementById("result").innerText = rs;
    curNum = 0;
}

let add = () => {
    if (digitPressed) {

        if (expr == "")
            expr = curNum;
        else
            expr = expr + "+" + curNum;
        digitPressed = false;
    }

    rs = (rs) + curNum;
    document.getElementById("result").innerText = rs;
    curNum = 0;
}

let handleKeyboardEvents = ()=>
{
    
}

document.getElementById("0").addEventListener("click", () => handleDigitBtClick(0));
document.getElementById("1").addEventListener("click", () => handleDigitBtClick(1));
document.getElementById("2").addEventListener("click", () => handleDigitBtClick(2));
document.getElementById("3").addEventListener("click", () => handleDigitBtClick(3));
document.getElementById("4").addEventListener("click", () => handleDigitBtClick(4));
document.getElementById("5").addEventListener("click", () => handleDigitBtClick(5));
document.getElementById("6").addEventListener("click", () => handleDigitBtClick(6));
document.getElementById("7").addEventListener("click", () => handleDigitBtClick(7));
document.getElementById("8").addEventListener("click", () => handleDigitBtClick(8));
document.getElementById("9").addEventListener("click", () => handleDigitBtClick(9));
document.getElementById("10").addEventListener("click", () => add());
document.getElementById("11").addEventListener("click", () => calculateResult());
document.getElementById("topBody").addEventListener("keydown", () => calculateResult());
