function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  body: document.body,
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color')
}


refs.button.addEventListener('click', onClickButton);

function onClickButton(event) {
  if (event) {
    refs.body.style.backgroundColor = getRandomHexColor()
    refs.span.textContent = getRandomHexColor();
  }
}