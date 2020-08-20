# Janet Karpenske & Adam Mansell Roman Numeral Project

### HTML, CSS, JS, Roman Numerals Project for Epicodus, 8/20/2020

## **By Adam Mansell, Janet Karpenske**


## Description
This project is a basic webpage that can translate english numbers into Roman Numerals.
I used many different stylings throughout this project, and also created a media query that would allow the website to maintain the same look through a mobile viewport.

## Specifications
| Description | Example Input | Example Output |
|-------------|---------------|----------------|
| Program will return false if a input is less than 0 or greater than 3999 or | 4000 | alert("Please enter a valid number"); |
| Program will add value of all the symbols | XVI | 16 |
| Program will switch to subtraction if there are more than three identical sumbols in a row | IIII | IV |
| Ones, tens, and thousands must be separated by other symbols | IC | XCIX |

## Tests
### Test 1
Describe: checkInput();  </br>
Test: "It returns false if user input is less than 0 or greater than 3999."  </br>
Expect: (checkInput(4000)).toEqual(false);

### Test 2
Describe: valueAdd()  </br>
Test: "It will add value of all the symbols"  </br>
Expect: (valueAdd(XV)).toEqual(16);  

### Test 3
Describe: valueSubtract();  </br>
Test: "It will subtract symbols if there are more than three identical symols in a row."  </br>
Expect: (valueSubtract(IIII).toEqual(XCIX);

### Test 4
Describe: seperateNums()  </br>
Test: "Ones, tens, and thousands must be separated by other symbols"  </br>
Expect: (seperateNums(IC)).toEqual(XCIX);


## Setup
Clone this repository.

Open the project files in your text editor.

To view a file in the browser:

Right click one file at a time & copy it's path.

Open your prefered internet browser and paste the file path to view the file.
(If using mac, after pasting link in search bar, check for "file" dropdown option before hitting return).

## Technologies Used
HTML, CSS, and JavaScript were used in the making of this project, as well as Bootstrap and JQuery libraries.

## Legal
_Copyright (c) 2020 Adam Mansell_


_This software is licensed under the MIT license._