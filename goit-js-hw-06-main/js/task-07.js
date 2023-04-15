const getInput = document.querySelector('#font-size-control');

const getSpan = document.querySelector('#text');

getInput.addEventListener('input', onChangeIntut);

function onChangeIntut(event) {
    getSpan.style.fontSize = `${event.currentTarget.value}px`;
}