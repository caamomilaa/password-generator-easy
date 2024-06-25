// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const passwordElement = document.getElementById("password");
const passwordGeneratorElement = document.getElementById("input");
const passwordLengthElement = document.getElementById("label");
const buttonElement = document.getElementById("button");

const passwordCharacters = ["a", "b", "c", "1", "2", "3"];

const lengthValue = (event) => {
  passwordLengthElement.textContent = `Length: ${passwordGeneratorElement.value}`;
};
passwordGeneratorElement.addEventListener("input", lengthValue);

//- Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

//length [input.length] - escucho el botón - const: textcontent= palabras random en input inicial.

const randomWord = () => {};

const buttonGenerator = (event) => {
  //random con length.value
};

buttonElement.addEventListener("click", buttonGenerator);
