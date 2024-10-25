import  { insertOnSelect } from './utils.js';

const escolaridadeSelect = document.querySelector("#escolaridade");
const serieSelect = document.querySelector("#serie");

escolaridadeSelect.addEventListener("change", (event) => {
  serieSelect.innerHTML = "";

  if (event.target.value === "fundamental") {
    insertOnSelect(serieSelect, 9);
  } else if (event.target.value === "medio") {
    insertOnSelect(serieSelect, 3);
  }
});

insertOnSelect(serieSelect, 9);
