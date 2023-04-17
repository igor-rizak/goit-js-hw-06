const onInputChange = document.querySelector('#validation-input');

const checkValidInput = Number(onInputChange.dataset.length);


onInputChange.addEventListener('blur', onValidInput);


function onValidInput(event) {
 
    if (event.currentTarget.value.length !== checkValidInput) {
        onInputChange.classList.add('invalid')}
    else {
        onInputChange.classList.remove('invalid')
        onInputChange.classList.add('valid')
    }
}

