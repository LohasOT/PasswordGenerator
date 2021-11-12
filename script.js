character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

let choices;
let toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

let get = document.querySelector("#generate");


get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
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

    choices = character.concat(number, alpha, alpha2);
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }

  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  let password = [];

  for (let i = 0; i < enter; i++) {
    let pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  let ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}