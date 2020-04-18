import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from "./calculator.js";

$(document).ready(function() {
  $("#ageCalculator").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("#userAge").val());
    let userExpectancy = parseInt($("#userExpectancy").val());
    
    const calc = new Calculator(userAge, userExpectancy);
    calc.calcAllAges();

    $("#mercAge").text(calc.ageMercuryYears);
    $("#venuAge").text(calc.ageVenusYears);
    $("#marsAge").text(calc.ageMarsYears);
    $("#jupiAge").text(calc.ageJupiterYears);
  });




});