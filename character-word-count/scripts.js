const input = document.getElementById("input"); // id
const counter = document.querySelector(".counter"); // class

const toggleButton = document.querySelector("#toggle");

let mode = "characters";

toggleButton.addEventListener("click", () => {
  if (mode === "characters") {
    mode = "words";
    toggleButton.textContent = "Contar caracteres";
  } else {
    mode = "characters";
    toggleButton.textContent = "Contar palavras";
  }

  input.dispatchEvent(new Event("input"));
});
input.addEventListener("input", () => {
  let count = 0;

  if (mode === "characters") {
    count = input.value.length;

    counter.textContent = `${count} caractere(s)`;
  } else {
    const words = input.value.trim().split(/\s+/); // trim corta os espaços laterais, split para dividir a string em array baseado nos espaçoes que ela tem, regex para divir a string em uma lista
    count = input.value.trim() === "" ? 0 : words.length;
    counter.textContext = `${count} palavra(s)`;
  }
});
