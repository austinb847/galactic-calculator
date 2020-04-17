export class Calculator {
  constructor(personAge) {
    this.personAge = personAge;
  }

  calcAgeEarthDays() {
    return this.personAge * 365;
  }
}