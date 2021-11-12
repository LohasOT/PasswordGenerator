character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

space = [];


let get = document.querySelector("#generate");


get.addEventListener("click", function () {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});
function generatePassword() {


  enter = parseInt(prompt("How long should your password be? between 8 and 128"));

  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("How long should your password be? between 8 and 128"));

  } else {

    confirmNumber = confirm("Numbers?");
    confirmCharacter = confirm("Special Characters?");
    confirmUppercase = confirm("Uppercase letters?");
    confirmLowercase = confirm("Lowercase letters?");
  };


  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }

  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, lower, upper);
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, upper);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, upper);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(lower, upper);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lower, upper);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(lower);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(upper);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lower.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = lower.concat(upper);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(upper);
  }
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = lower;
  }

  else if (confirmUppercase) {
    choices = space.concat(upper);
  };

  let password = [];

  for (let i = 0; i < enter; i++) {
    let yourchoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(yourchoices);
  }

  let pass = password.join("");
  UserInput(pass);
  return pass;
}

function UserInput(pass) {
  document.getElementById("password").textContent = pass;

}