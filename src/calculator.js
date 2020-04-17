export class Calculator {
  constructor(personAge) {
    this.personAge = personAge;
  }

  calcAgeEarthDays() {
    return this.personAge * 365;
  }

  calcAgeMercuryYears() {
    const earth_days_age = this.calcAgeEarthDays();
    return Math.round(earth_days_age / 88); 
  }

  calcAgeVenusYears() {
    const earth_days_age = this.calcAgeEarthDays();
    return Math.round(earth_days_age / 225);
  }
}