export function insertOnSelect(select, quantidade) {
  for (let i = 1; i <= quantidade; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}° Ano`;
    select.appendChild(option);
  }
}

export function showAlert(message, type) {
  const alertPlace = document.querySelector("#alert-message");

  alertPlace.innerHTML = `<div class="w-100 alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

  const alertTimeout = setTimeout(() => {
    alertPlace.innerHTML = "";
  }, 3000);
  
  alertPlace.querySelector("button").addEventListener("click", () => {
    clearTimeout(alertTimeout);
  })
}

export function renderTable(data) {
  const table = document.querySelector("table");

  data.forEach((d) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `<td>${d.id}</td>
                    <td>${d.nome}</td>
                    <td>${d.quantidade}</td>
                    <td>${d.preco.toLocaleString("pt-br", {
                      style: 'currency',
                      currency: 'BRL',
                    })}</td>`;

    table.querySelector("tbody").appendChild(tr);
  });
}
