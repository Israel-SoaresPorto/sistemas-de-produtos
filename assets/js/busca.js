import { insertOnSelect } from "./utils.js";

const tipoDeBusca = document.querySelector("#buscar-por");
const campoDeBusca = document.querySelector("#campo-de-busca");

tipoDeBusca.addEventListener("change", (event) => {
  campoDeBusca.innerHTML = "";

  if (event.target.value === "nome") {
    let label = document.createElement("label");
    label.htmlFor = "param";
    label.className = "input-group-text";
    label.textContent = "Nome";

    let input = document.createElement("input");
    input.type = "text";
    input.name = "param";
    input.id = "param";
    input.className = "form-control";

    campoDeBusca.appendChild(label);
    campoDeBusca.appendChild(input);
  } else if (event.target.value === "quantidade") {
    let label = document.createElement("label");
    label.htmlFor = "param";
    label.className = "input-group-text";
    label.textContent = "Quantidade";

    let input = document.createElement("input");
    input.type = "number";
    input.name = "param";
    input.id = "param";
    input.className = "form-control";

    campoDeBusca.appendChild(label);
    campoDeBusca.appendChild(input);
  } else if (event.target.value === "preco") {
    let label = document.createElement("label"); 
    label.htmlFor = "param";
    label.className = "input-group-text";
    label.textContent = "Preço";

    let input = document.createElement("input");
    input.type = "number";
    input.name = "param";
    input.id = "param";
    input.className = "form-control";
    input.step = "0.01";

    campoDeBusca.appendChild(label);
    campoDeBusca.appendChild(input);
  }
});
