let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputValue = event.target.value.trim();
    output.textContent = inputValue ? inputValue : "Anonymous";
}

