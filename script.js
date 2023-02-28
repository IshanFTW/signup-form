const passValue = document.querySelector ('.password');
const ConPassValue = document.querySelector ('.confirrm-password');


function checkPasword () {
    if (passValue.value='') {
        return false;
    }
    if (passValue.value != ConPassValue.value) {
        return false;
    }
}