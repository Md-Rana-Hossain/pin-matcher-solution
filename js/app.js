// add event handle for get pin

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}


// display typed input or code or pin

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedPin = document.getElementById('display-typed-pin');
    if (isNaN(number)) {
        if (number == 'C') {
            typedPin.value = '';
        }
    }
    else {
        const previousPin = typedPin.value;
        const newPin = previousPin + number;
        typedPin.value = newPin;
    }
})


// Pin matching

function pinMatching() {
    const generatedPin = document.getElementById('display-pin').value;
    const givenPin = document.getElementById('display-typed-pin').value;
    const successMessage = document.getElementById('notify-success');
    const faildMessage = document.getElementById('notify-failed');
    if (generatedPin == givenPin) {
        successMessage.style.display = 'block';
        faildMessage.style.display = 'none';
    }
    else {
        faildMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}