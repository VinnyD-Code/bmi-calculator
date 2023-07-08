const calcBtn = document.querySelector('button');
const clearBtn = document.querySelector('.clear');
const box = document.querySelector('.bmi-box');
const bmiEl = document.querySelector('#bmi');
const heightEl = document.querySelector('#height');
const bmiCategories = [
    { category: 'Underweight', min: 0, max: 18.4 },
    { category: 'Normal weight', min: 18.5, max: 24.9 },
    { category: 'Overweight', min: 25, max: 29.9 },
    { category: 'Obese', min: 30, max: Infinity },
  ];


function calcBMI() {
    checkUI();
    if (!bmiEl.value || !heightEl.value) {
        alert('Please fill out both fields');
        return;
    }

    const weight = parseFloat(bmiEl.value);
    const height = parseFloat(heightEl.value);

    if (isNaN(weight) || isNaN(height) || weight > 1000 || weight < 20 || height < 0 || height > 100) {
        alert('Please enter valid numbers for weight and height');
        return;
      }

    let bmi  = (weight / (height * height)) * 703;
    bmi = bmi.toFixed(1).toString();

    let bmiCategory = '';
    for (const category of bmiCategories) {
      if (bmi >= category.min && bmi <= category.max) {
        bmiCategory = category.category;
        break;
      }
    }

    const h3Elements = box.querySelectorAll('h3');

    if (h3Elements.length === 2) {
        box.removeChild(h3Elements[1]);
    }

    const h3 = document.createElement('h3');
    h3.innerHTML = `Your BMI is: ${bmi} (${bmiCategory})`;

    box.appendChild(h3);
    
}

calcBtn.addEventListener('click', () => {
    calcBMI();
    checkUI();
})

clearBtn.addEventListener('click', () => {
    const h3Elements = box.querySelectorAll('h3');
    box.removeChild(h3Elements[1]);
    bmiEl.value = '';
    heightEl.value = '';
    checkUI();
})

function checkUI() {
    if (!bmiEl.value || !heightEl.value) {
        clearBtn.classList.add('hidden');
    } else {
        clearBtn.classList.remove('hidden');
    }
}