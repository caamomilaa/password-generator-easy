// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const passwordGeneratorElement = document.getElementById('input');
const passwordLengthElement = document.getElementById('length-text');
const buttonElement = document.getElementById('button');

const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const lengthValue = event => {
  passwordLengthElement.textContent = passwordGeneratorElement.value;
};
passwordGeneratorElement.addEventListener('input', lengthValue);

//- Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

//length [input.length] - escucho el botón - const: textcontent= palabras random en input inicial.

const randomWord = () => {
  let finalPassword = '';
  for (let i = 0; i < passwordGeneratorElement.value; i++) {
    finalPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return finalPassword;
};

const buttonGenerator = () => {
  passwordElement.value = randomWord();
};

buttonElement.addEventListener('click', buttonGenerator);
