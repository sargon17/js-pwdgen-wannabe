// DOM Elements
let passwordOutput = document.getElementById("passwordOutput");

// User Inputs
let userName = prompt("Your name", "Norma");
let userSurname = prompt("Your Surname", "Jean");
let userFavColor = prompt("Your favourite color", "Nero");

let password = `${userName}${userSurname}${userFavColor}21`;
passwordOutput.innerText = password;
