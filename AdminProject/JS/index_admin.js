document.addEventListener("DOMContentLoaded", function (event) {
  const tableBody = document.getElementsByTagName("tbody")[0];

  const films = JSON.parse(localStorage.getItem("films"));

  let html = "";

  films.forEach((film) => {
    html += `
      <tr>
        <td>${film.id}</td>    
        <td>${film.name}</td>    
        <td>${film.descrition}</td>
        <td>${film.episode}</td>
        <td>${film.time}</td>
        <td>${film.actor}</td>
        <td>${film.category}</td>
        <td>${film.year}</td>
        <td>${film.url}</td>
        <td>${film.image}</td>
        <td>
          <button class="edit-btn" onclick="show(${film.id})">
            edit
          </button>
          <button class="delete-btn" onclick="deleteFilm(${film.id})">
            delete
          </button>
        </td>
      </tr>`;
  });

  tableBody.innerHTML = html;
});

const show = (id) => {
  window.location.href = `/AdminProject/HTML/form_create.html?id=${id}`;
};

const deleteFilm = (id) => {
  let storage = JSON.parse(localStorage.getItem("films")) ?? [];
  const index = storage.findIndex((item) => {
    return parseInt(item.id) === parseInt(id);
  });

  storage.splice(index, 1);
  localStorage.setItem("films", JSON.stringify(storage));

  window.location.reload();
};
