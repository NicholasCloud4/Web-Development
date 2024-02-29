function bmiCalculator(weight, height){
    var bmi = weight/Math.pow(height, 2);
    return Math.round(bmi);
}

console.log(bmiCalculator(49.89, 1.8));