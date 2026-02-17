class Calculator {
    constructor(previousOperandElement, previousOperandElement) {
        // store references to DOM elements that displays the operands
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        // initialized the claculator to a cleared state
        this.clear();
    }

    clear() {
        this.currentOperand = '0';     //start with '0' displayed
        this.previousOperand = '';     //no previous operand
        this.operation = undefined;    //no operation selected
    }

    delete() {
        if (this.currentOperand === '0') return;
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === ''){
            this.currentOperand = '0';
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;

        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand == number;
        }else{
            this.currentOperand = this.currentOperand.toString() + number;
        }
    }

    chooseOperation (operation) {
        if (this.currentOperand === '') return;

        if (this.previousOperand !=='') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    } 

}


