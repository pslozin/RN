function sayh()
{
    console.log('Hi')
}


const sayHiPhil = () => {
    console.log('HI Philip')

};

const sayHiZig = () => {
    console.log('HI Ziggi')

};


say = sayh

say()


class Calculator {
  constructor(startValue = 0) {
    this.value = startValue; // Holds the state
  }

  add(num) {
    this.value += num;
    return this; // Crucial for chaining
  }

  subtract(num) {
    this.value -= num;
    return this; // Crucial for chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // Crucial for chaining
  }

  printResult() {
    console.log(this.value);
    return this; 
  }
}

class Calc {
  constructor(startValue = 15) {
    this.value = startValue; // Holds the state
  }}


// Execution
const calc = new Calculator(10);
//calc.add(5).subtract(3).multiply(2).printResult(); // Output: 24

const newCalc = new Calc()

console.log(calc.add(6))
calc.printResult()

console.log(newCalc)

sayHiPhil(sayHiZig())




