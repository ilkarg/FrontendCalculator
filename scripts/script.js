var resMathOperation = document.getElementById('result-math-operation');
resMathOperation.value = "0";
var div = false;
var plus = false;
var minus = false;
var multiply = false;
var inputNum = 0;
function ClearAllButtonClick() {
    resMathOperation.value = "0";
}
function NineButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "9";
    }
    else {
        resMathOperation.value += "9";
    }
}
function EightButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "8";
    }
    else {
        resMathOperation.value += "8";
    }
}
function SevenButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "7";
    }
    else {
        resMathOperation.value += "7";
    }
}
function SixButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "6";
    }
    else {
        resMathOperation.value += "6";
    }
}
function FiveButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "5";
    }
    else {
        resMathOperation.value += "5";
    }
}
function FourButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "4";
    }
    else {
        resMathOperation.value += "4";
    }
}
function ThreeButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "3";
    }
    else {
        resMathOperation.value += "3";
    }
}
function TwoButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "2";
    }
    else {
        resMathOperation.value += "2";
    }
}
function OneButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "1";
    }
    else {
        resMathOperation.value += "1";
    }
}
function ZeroButtonClick() {
    if (resMathOperation.value == "0") {
        resMathOperation.value = "0";
    }
    else {
        resMathOperation.value += "0";
    }
}
function DivButtonClick() {
    this.div = true;
    this.multiply = false;
    this.minus = false;
    this.plus = false;
    this.inputNum = parseInt(resMathOperation.value);
    resMathOperation.value = "0";
}
function MultiplyButtonClick() {
    this.div = false;
    this.multiply = true;
    this.minus = false;
    this.plus = false;
    this.inputNum = parseInt(resMathOperation.value);
    resMathOperation.value = "0";
}
function MinusButtonClick() {
    this.div = false;
    this.multiply = false;
    this.minus = true;
    this.plus = false;
    this.inputNum = parseInt(resMathOperation.value);
    resMathOperation.value = "0";
}
function PlusButtonClick() {
    this.div = false;
    this.multiply = false;
    this.minus = false;
    this.plus = true;
    this.inputNum = parseInt(resMathOperation.value);
    resMathOperation.value = "0";
}
function ResultButtonClick() {
    if (inputNum != 0) {
        if (div) {
            inputNum = inputNum / parseInt(resMathOperation.value);
            this.div = false;
            resMathOperation.value = String(inputNum);
        }
        else if (multiply) {
            inputNum = inputNum * parseInt(resMathOperation.value);
            this.multiply = false;
            resMathOperation.value = String(inputNum);
        }
        else if (minus) {
            inputNum = inputNum - parseInt(resMathOperation.value);
            this.minus = false;
            resMathOperation.value = String(inputNum);
        }
        else if (plus) {
            inputNum = inputNum + parseInt(resMathOperation.value);
            this.plus = false;
            resMathOperation.value = String(inputNum);
        }
    }
}
