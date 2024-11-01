import { showAlert, renderTable } from "./utils.js";

const registerForm = document.querySelector("#register-form");
const searchForm = document.querySelector("#search-form");
const modal = new bootstrap.Modal("#modal-register");
const table = document.querySelector("table");

async function showDataOnLoad() {
  let response = await fetch("../app/listagem.php");
  let data = await response.json();
  renderTable(data);
  console.log(data);
}

window.addEventListener("load", showDataOnLoad);

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(registerForm);

  fetch("../app/cadastro.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "ok") {
        registerForm.reset();
        table.querySelector("tbody").innerHTML = "";
        showDataOnLoad();
        modal.hide();
        showAlert(data.message, "success");
      } else {
        showAlert(data.message, "danger");
      }
    })
    .catch((error) => {
      showAlert(error, "danger");
    });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(searchForm);

  fetch("../app/busca.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      table.querySelector("tbody").innerHTML = ""

      if (data.length > 0) {
        renderTable(data);
        console.log(data);
      } else {
        showAlert("Nenhum registro encontrado", "warning");
      }
    });
});
