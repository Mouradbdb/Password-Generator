function generatePassword(len) {
  let wordsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let wordsLowerCase = wordsUpperCase.toLowerCase();
  let numbers = "1234567890";
  let special_characters = "!@#$%^&*()-_=+[{]}|;:'\",<.>/?";
  let password = "";
  let characters =
    wordsUpperCase + wordsLowerCase + numbers + special_characters;

  for (let i = 0; i < len; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

const generateBtn = document.getElementById("generateBtn");
const mourad = document.getElementById("lenght");
const result = document.getElementById("result");



generateBtn.onclick = () => {
  console.log('clicked')
  let pass = generatePassword((mourad.value));
  console.log(pass)
  result.textContent = pass;
};
