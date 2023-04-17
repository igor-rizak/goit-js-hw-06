const getInput = document.getElementById('font-size-control');
const getSpan = document.getElementById('text');

getSpan.style.fontSize = `${getInput.value}px`

getInput.addEventListener('input', onChangeIntut);

function onChangeIntut(event) {
    getSpan.style.fontSize = `${event.currentTarget.value}px`;
}