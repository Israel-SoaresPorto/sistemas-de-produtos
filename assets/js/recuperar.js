import { showAlert } from "./utils.js";

const recoveryForm = document.querySelector("#recovery-form");

recoveryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    showAlert("E-mail de recuperação enviado com sucesso", "success");
});