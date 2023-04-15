let counterValue = 0;

const refs = {
    onClickButtonMin: document.querySelector('[data-action="decrement"]'),
    onClickButtonMax: document.querySelector('[data-action="increment"]'),
    valueSpan: document.querySelector('#value')
}


refs.onClickButtonMin.addEventListener("click", onTargetButtonClickMin);

function onTargetButtonClickMin(event) {
    if (event) {
        counterValue -= 1;
        refs.valueSpan.textContent = counterValue;
    }
}

refs.onClickButtonMax.addEventListener("click", onTargetButtonClickMax);

function onTargetButtonClickMax(event) {
    if (event) {
        counterValue += 1;
        refs.valueSpan.textContent = counterValue;
    }
}

