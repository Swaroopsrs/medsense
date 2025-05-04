function calculateBmi() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById('heading').innerHTML = 'Please enter valid weight and height.';
    return;
  }

  let bmi = (weight / (height * height));

  document.getElementById('heading').innerHTML = 'Your BMI is:';
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById('message').innerHTML = 'You are underweight.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'You are a healthy weight.';
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById('message').innerHTML = 'You are overweight.';
  } else {
    document.getElementById('message').innerHTML = 'You are obese.';
  }
}

function reloadPage() {
  window.location.reload();
}