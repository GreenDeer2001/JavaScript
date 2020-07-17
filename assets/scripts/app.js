let result = 0;



function add() {
    result = result + userInput.value;
    outputResult(result, ' calculation');
}

addBtn.addEventListener('click', add);