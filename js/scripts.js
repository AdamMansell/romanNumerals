$(document).ready(function () {
  // $("#form").submit(function(event) {
  //   event.preventDefault();

  //   const userInput = parseInt($("#input").val());
  // })

  console.log(checkInput(0));

  function checkInput(input) {
    if (input > 3999 || input <= 0) {
      alert("Please enter a valid number. Valid numbers are 1 to 3999.")
      return false;
    }
    else {
      valueAdd(input);
    }
  }




})