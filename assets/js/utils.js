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

  alertPlace.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

export function renderTable(data) {
  const table = document.createElement("table");
  table.className =
    "table table-hover table-striped table-bordered";
  table.innerHTML =
    "<thead class='table-success'><tr><th>ID</th><th>Nome</th><th>Escolaridade</th><th>Série</th></tr></thead><tbody></tbody>";

  data.forEach((d) => {
    let tr = document.createElement("tr");

    let escolaridade =
      d.escolaridade === "medio"
        ? d.escolaridade.replace("me", "Mé")
        : d.escolaridade.replace(
            d.escolaridade[0],
            d.escolaridade[0].toUpperCase()
          );

    tr.innerHTML = `<td>${d.id}</td>
                    <td>${d.nome}</td>
                    <td>Ensino ${escolaridade}</td>
                    <td>${d.serie}° Ano`;

    table.querySelector("tbody").appendChild(tr);
  });

  return table;
}
