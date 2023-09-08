function changeValue(operation, inputId) {
    const input = document.getElementById(inputId);
    const currentValue = parseInt(input.value);

    if (operation === 'plus') {
        input.value = currentValue + 1;
    } else if (operation === 'minus' && currentValue > 1) {
        input.value = currentValue - 1;
    }
}

// JavaScript to enforce minimum value and prevent negative values
function validateInput() {
    const numberInput = document.getElementById('numberInput');
    const currentValue = parseInt(numberInput.value);
    if (currentValue < 1) {
        numberInput.value = 1;
    }
}