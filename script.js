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

    yesnumber = confirm("Numbers?");
    yeslowercase = confirm("Lowercase letters?");
    yesuppercase = confirm("Uppercase letters?");
    yescharacter = confirm("Special Characters?");

  };


  if (!yescharacter && !yesnumber && !yesuppercase && !yeslowercase) {
    choices = alert("You must choose a requirement");

  }

  else if (yescharacter && yesnumber && yesuppercase && yeslowercase) {

    choices = character.concat(number, lower, upper);
  }

  else if (yescharacter && yesnumber && yesuppercase) {
    choices = character.concat(number, upper);
  }
  else if (yescharacter && yesnumber && yeslowercase) {
    choices = character.concat(number, upper);
  }
  else if (yescharacter && yeslowercase && yesuppercase) {
    choices = character.concat(lower, upper);
  }
  else if (yesnumber && yeslowercase && yesuppercase) {
    choices = number.concat(lower, upper);
  }
  else if (yescharacter && yesnumber) {
    choices = character.concat(number);

  } else if (yescharacter && yeslowercase) {
    choices = character.concat(lower);

  } else if (yescharacter && yesuppercase) {
    choices = character.concat(upper);
  }
  else if (yeslowercase && yesnumber) {
    choices = lower.concat(number);

  } else if (yeslowercase && yesuppercase) {
    choices = lower.concat(upper);

  } else if (yesnumber && yesuppercase) {
    choices = number.concat(upper);
  }
  else if (yescharacter) {
    choices = character;
  }
  else if (yesnumber) {
    choices = number;
  }
  else if (yeslowercase) {
    choices = lower;
  }

  else if (yesuppercase) {
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