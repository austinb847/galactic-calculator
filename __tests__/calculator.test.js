import { Calculator } from './../src/calculator.js';


describe('Calculator', () => {

  test('should correctly create a calculator object with one age input', () => {
    let calculator = new Calculator(20);
    expect(calculator.personAge).toEqual(20);
  });

  test('should correctly calculate the age in earth days', () => {
    let calculator = new Calculator(20);
    let ageEarthDays = calculator.calcAgeEarthDays();
    expect(ageEarthDays).toEqual(7300);
  });

  test('should correctly calculate the age in Mercury years', () => {
    let calculator = new Calculator(20);
    let ageMercuryYears = calculator.calcAgeMercuryYears();
    expect(ageMercuryYears).toEqual(83);
  })



});