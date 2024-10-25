import { showAlert } from "./utils.js";

const newUserForm = document.querySelector("#new-user-form");
const successModal = new bootstrap.Modal("#success-modal");

newUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const senha = newUserForm.querySelector("#senha");
  const repetirSenha = newUserForm.querySelector("#repetir-senha");

  if(senha.value !== repetirSenha.value) {
    repetirSenha.setCustomValidity("As senhas não são iguais");
    repetirSenha.reportValidity();
    return;
  } else {
    repetirSenha.setCustomValidity("");
  }


  let formData = new FormData(newUserForm);

  fetch("../app/novo_usuario.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "ok") {
        successModal.show();
      } else {
        showAlert(data.status, "danger");
      }
    });
});