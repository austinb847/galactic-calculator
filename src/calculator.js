export class Calculator {
  constructor(personAge, personLifeExpectancy) {
    this.personAge = personAge;
    this.personLifeExpectancy = personLifeExpectancy;
  }

  calcAgeEarthDays() {
    return this.personAge * 365;
  }

  calcAgeMercuryYears() {
    const earth_days_age = this.calcAgeEarthDays();
    const age = earth_days_age / 88
    return this.roundNum(age); 
  }

  calcAgeVenusYears() {
    const earth_days_age = this.calcAgeEarthDays();
    const age = earth_days_age / 225
    return this.roundNum(age);
  }

  calcAgeMarsYears() {
    const earth_days_age = this.calcAgeEarthDays();
    const age = earth_days_age / 687
    return this.roundNum(age);
  }

  calcAgeJupiterYears() {
    const age = this.personAge / 12
    return this.roundNum(age);
  }

  roundNum(age) {
    return Math.round(age * 10) / 10;
  }

  calcAllAges() {
    this.earthDaysAge = this.calcAgeEarthDays();
    this.ageMercuryYears = this.calcAgeMercuryYears();
    this.ageVenusYears = this.calcAgeVenusYears();
    this.ageMarsYears = this.calcAgeMarsYears();
    this.ageJupiterYears = this.calcAgeJupiterYears();
  }
}