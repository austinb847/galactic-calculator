import { Calculator } from './../src/calculator.js';


describe('Calculator', () => {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator(20,78);
  });

  test('should correctly create a calculator object with one age input and their average life expectancy in their country', () => {
    expect(calculator.personAge).toEqual(20);
    expect(calculator.personLifeExpectancy).toEqual(78);
  });

  test('should correctly calculate the age in earth days', () => {
    const ageEarthDays = calculator.calcAgeEarthDays();
    expect(ageEarthDays).toEqual(7300);
  });

  test('should correctly calculate the age in Mercury years', () => {
    const ageMercuryYears = calculator.calcAgeMercuryYears();
    expect(ageMercuryYears).toEqual(83);
  });

  test('should correctly calculate the age in Venus years', () => {
    const ageVenusYears = calculator.calcAgeVenusYears();
    expect(ageVenusYears).toEqual(32.4);
  });

  test('should correctly calculate the age in Mars years', () => {
    const ageMarsYears = calculator.calcAgeMarsYears();
    expect(ageMarsYears).toEqual(10.6);
  });

  test('should correctly calculate the age in Jupiter years', () => {
    const ageJupiterYears = calculator.calcAgeJupiterYears();
    expect(ageJupiterYears).toEqual(1.7);
  });

  test('should correctly round age', () => {
    const roundnum = calculator.roundNum(1.6667);
    expect(roundnum).toEqual(1.7);
  });

  test('should correctly call all age methods and store them as new properties' , () => {
    calculator.calcAllAges();
    expect(calculator.earthDaysAge).toEqual(7300);
    expect(calculator.ageMercuryYears).toEqual(83);
    expect(calculator.ageVenusYears).toEqual(32.4);
    expect(calculator.ageMarsYears).toEqual(10.6);
    expect(calculator.ageJupiterYears).toEqual(1.7);
  });

  test ('should correctly determine if user surpassed average life expectancy', () => {
    calculator.calcAllAges();
    const mercuryYearsLeft = calculator.calcYearsLeft(calculator.ageMercuryYears);
    expect(mercuryYearsLeft).toEqual("You have lived past your life expectancy by 5 years");

  });

  test ('should correctly determine how many years a person has left to live on a planet', () => {
    calculator.calcAllAges();
    const marsYearsLeft = calculator.calcYearsLeft(calculator.ageMarsYears);
    expect(marsYearsLeft).toEqual("Based on your life expectancy for your demographic you have 67.4 years to live");

  });


});