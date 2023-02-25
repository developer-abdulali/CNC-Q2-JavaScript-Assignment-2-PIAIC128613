var firstNumber = Number(prompt('Enter your first number'));
var secondNumber = Number(prompt('Enter your second number'));
var operator = prompt('Enter your operator');

if(operator === '+'){
    document.write(firstNumber + secondNumber)
} else if(operator === '-'){
    document.write(firstNumber - secondNumber)
} else if(operator === '*'){
    document.write(firstNumber * secondNumber)
} else if(operator === '/'){
    document.write(firstNumber / secondNumber)
} else if(operator === '%'){
    document.write(firstNumber % secondNumber)
} 
else{
    alert('Invalid result')
}