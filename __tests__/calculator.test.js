import { Calculator } from './../src/calculator.js';


describe('Calculator', () => {

  test('should correctly create a calculator object with one age input', () => {
    let calculator = new Calculator(20);
    expect(calculator.personAge).toEqual(20);
  });

  test('should correctly calculate the age in earth days', () => {
    let calculator = new Calculator(20);
    const ageEarthDays = calculator.calcAgeEarthDays();
    expect(ageEarthDays).toEqual(7300);
  });

  test('should correctly calculate the age in Mercury years', () => {
    let calculator = new Calculator(20);
    const ageMercuryYears = calculator.calcAgeMercuryYears();
    expect(ageMercuryYears).toEqual(83);
  });

  test('should correctly calculate the age in Venus years', () => {
    let calculator = new Calculator(20);
    const ageVenusYears = calculator.calcAgeVenusYears();
    expect(ageVenusYears).toEqual(32.4);
  });

  test('should correctly calculate the age in Mars years', () => {
    let calculator = new Calculator(20);
    const ageMarsYears = calculator.calcAgeMarsYears();
    expect(ageMarsYears).toEqual(10.6);
  });

  test('should correctly calculate the age in Jupiter years', () => {
    let calculator = new Calculator(20);
    const ageJupiterYears = calculator.calcAgeJupiterYears();
    expect(ageJupiterYears).toEqual(1.7);
  });

  test('should correctly round age', () => {
    let calculator = new Calculator(20);
    const roundnum = calculator.roundNum(1.6667);
    expect(roundnum).toEqual(1.7);

  });

});