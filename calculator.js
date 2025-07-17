//addition
function add(number1, number2) {
    return number1 + number2;
}
//subtraction
function subtract(number1, number2){
    return number2 - number1;
}

// multiply
function multiply(number1, number2){
    return number1 * number2;
}

//divide
function divide(number1, number2){
    return number2 / number1;
}
//adding event listner
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
// subtract
document.getElementById('subtract').addEventListener("click", ()=>{
    const no1 = parseFloat(document.getElementById('number1').value) || 0;
    const no2 = parseFloat(document.getElementById('number2').value) || 0;
    const results = subtract(no2, no1);
    document.getElementById("calculation-result").textContent = results;
});
//multiply
document.getElementById('multiply').addEventListener("click", ()=>{
   const no1 = parseFloat(document.getElementById('number1').value) || 0;
    const no2 = parseFloat(document.getElementById('number2').value) || 0;
    const results = multiply(no1, no2);
    document.getElementById("calculation-result").textContent = results;
});
//divide
document.getElementById('divide').addEventListener("click", ()=>{
    const no1 = parseFloat(document.getElementById('number1').value) || 0;
    const no2 = parseFloat(document.getElementById('number2').value) || 0;
    const results = divide(no1, no2);
    document.getElementById("calculation-result").textContent = results;
});