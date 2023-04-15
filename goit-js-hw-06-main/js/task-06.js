const onInputChange = document.querySelector('#validation-input');

const checkValidInput = onInputChange.dataset.length;
 
onInputChange.addEventListener('blur', onValidInput);


function onValidInput(event) {
 
    if(event.currentTarget.value.length < checkValidInput){
        onInputChange.classList.add('validation-input', 'invalid')}
    else {
        onInputChange.classList.remove('invalid')
        onInputChange.classList.add('validation-input', 'valid')
    }
}

