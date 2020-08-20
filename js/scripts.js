$(document).ready(function () {
  // $("#form").submit(function(event) {
  //   event.preventDefault();

  //   const userInput = parseInt($("#input").val());
  // })

  function checkInput(input) {
    if (input > 3999 || input <= 0) {
      alert("Please enter a valid number. Valid numbers are 1 to 3999.")
      return false;
    }
    else {
      input = input.toString();
      return valueAdd(input);
    }
  }

  function valueAdd(input) {
    let symbolArray = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
    let valueArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

    for (i = 0; i < symbolArray.length; i++) {
      if (input >= valueArray[i] || input < valueArray[i+1]) {
        return symbolArray[i];
      }
    }
  }
  console.log(checkInput(10));
})









