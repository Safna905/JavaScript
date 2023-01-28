var heightInp = document.querySelector('.height-input');
var weightInp = document.querySelector('.weight-input');
var calculateBtn = document.querySelector('.calculate');
//var result = document.querySelector('.result');
var statement = document.querySelector('.result-statement');
var BMI, height, weight;
let height_status = false, weight_status = false;

calculateBtn.addEventListener("click", () => {
    height = heightInp.value;
    weight = weightInp.value;

    if (height == '' && isNaN && (height <= 0))
        document.getElementById('height_err').innerHTML = 'Please provide a valid height';
    else {
        document.getElementById('height_err').innerHTML = '';
        height_status = true;
    }
    if (weight == '' && isNaN && (weight <= 0))
        document.getElementById('weight_err').innerHTML = 'Please provide a valid weight';
    else {
        document.getElementById('weight_err').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {

        BMI = weight / (height ** 2);

        document.getElementById("result").innerHTML ='Your BMI : ' +BMI;

        if (BMI < 18.5)
            statement.innerHTML = "Your BMI falls within the underweight range";
        else if ((BMI > 18.5) && (BMI < 24.9))
            statement.innerHTML = "Your BMI falls within the normal or healthy weight range";
        else if ((BMI > 25) && (BMI < 29.9))
            statement.innerHTML = "Your BMI falls within the overweight range";
        else
            statement.innerHTML = "Your BMI falls within the obese range";

    }
});