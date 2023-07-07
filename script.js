const calcBtn = document.querySelector('button');
const box = document.querySelector('.bmi-box');
const bmiEl = document.querySelector('#bmi');
const heightEl = document.querySelector('#height');


function calcBMI() {
    if (!bmiEl.value || !heightEl.value) {
        alert('Please fill out both fields');
        return;
    }
    const weight = parseFloat(bmiEl.value);
    const height = parseFloat(heightEl.value);
    let bmi  = (weight / (height * height)) * 703;
    bmi = bmi.toFixed(1).toString();

    const h3Elements = box.querySelectorAll('h3');

    if (h3Elements.length === 2) {
        box.removeChild(h3Elements[1]);
    }

    const h3 = document.createElement('h3');
    h3.innerHTML = `Your BMI is: ${bmi}`;

    box.appendChild(h3);
    
}

calcBtn.addEventListener('click', () => {
    calcBMI();
})
