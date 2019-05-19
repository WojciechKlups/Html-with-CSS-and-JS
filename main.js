const sdaInputs = document.querySelectorAll('.sda-input');

console.log('sdaInputs', sdaInputs);

for (let i=0; i < sdaInputs.length; i++) {
    let currentLabel = sdaInputs[i].parentElement.firstElementChild;

    sdaInputs[i].addEventListener('focus', function() {
        currentLabel.classList.add('move-up');
    });

    sdaInputs[i].addEventListener('blur', function() {
        if (sdaInputs[i].value === '') {
            currentLabel.classList.remove('move-up');
        }
    });
}