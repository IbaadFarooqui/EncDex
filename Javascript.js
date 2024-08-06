function encrypt() {
  const key = document.querySelector("#key").value;
  const inputChar = document.querySelector("#input").value;
  let encinputChar = "";

  for (let i = 0; i < inputChar.length; i++) {
    const keyChar = key.charCodeAt(i % key.length);
    const inputCharChar = inputChar.charCodeAt(i);
    encinputChar += String.fromCharCode(inputCharChar + keyChar);
  }

  document.querySelector("#output").value = encinputChar;
}

function decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedinputChar = document.querySelector("#input").value;
  let inputChar = "";

  for (let i = 0; i < encryptedinputChar.length; i++) {
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = encryptedinputChar.charCodeAt(i);
    inputChar += String.fromCharCode(encryptedChar - keyChar);
  }

  document.querySelector("#output").value = inputChar;
}