import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from "./calculator.js";

$(document).ready(function() {

  const DOMSelectors = {
    age_mercury: $("#mercAge"),
    mercury_exp: $("#mercExpec"),
    age_venus: $("#venuAge"),
    venus_exp: $("#venuExpec"),
    age_mars:  $("#marsAge"),
    mars_exp: $("#marsExpec"),
    age_jupiter: $("#jupiAge"),
    jupiter_exp: $("#jupiExpec"),
  };

  function showContent(obj) {
    DOMSelectors.age_mercury.text(obj.ageMercuryYears);
    DOMSelectors.mercury_exp.text(obj.calcYearsLeft(obj.ageMercuryYears));
    
    DOMSelectors.age_venus.text(obj.ageVenusYears);
    DOMSelectors.venus_exp.text(obj.calcYearsLeft(obj.ageVenusYears));

    DOMSelectors.age_mars.text(obj.ageMarsYears);
    DOMSelectors.mars_exp.text(obj.calcYearsLeft(obj.ageMarsYears));

    DOMSelectors.age_jupiter.text(obj.ageJupiterYears);
    DOMSelectors.jupiter_exp.text(obj.calcYearsLeft(obj.ageJupiterYears));

  }

  $("#ageCalculator").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#userAge").val());
    let userExpectancy = parseInt($("#userExpectancy").val());
    
    const calc = new Calculator(userAge, userExpectancy);
    calc.calcAllAges();
    showContent(calc);

  });

});