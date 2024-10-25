import { showAlert } from "./utils.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(loginForm);
  console.log(formData);

  fetch("../app/login.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "ok") {
        window.location.href = "listagem.html";
      } else {
        showAlert(data.status, "danger");
      }
    });
});
