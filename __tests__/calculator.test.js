import { Calculator } from './../src/calculator.js';


describe('Calculator', () => {

  test('should correctly create a calculator object with one age input', () => {
    let calculator = new Calculator(24);
    expect(calculator.personAge).toEqual(24);
  });





});