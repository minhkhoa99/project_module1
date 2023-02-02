// Create
let form = document.getElementById("update-form");
const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const descritionInput = document.getElementById("descrition");
const episodeInput = document.getElementById("episode");
const timeInput = document.getElementById("time");
const actorInput = document.getElementById("actor");
const nationInput = document.getElementById("nation");
const categoryInput = document.getElementById("category");
const yearInput = document.getElementById("year");
const urlInput = document.getElementById("url");
const imageInput = document.getElementById("image");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // let image = document.getElementById("image").files[0];
    const film = {
      id: idInput.value,
      name: nameInput.value,
      descrition: descritionInput.value,
      episode: episodeInput.value,
      time: timeInput.value,
      actor: actorInput.value,
      nation: nationInput.value,
      category: categoryInput.value,
      year: yearInput.value,
      url: urlInput.value,
      image: imageInput.value,
    };


    validate(film)
    saveToLocalStorage(film);


  });

  const validate = (film) => {
    if (!film.name) {
      return false;
    }
    if (!film.descrition) {
      return false;
    }
    if (!film.episode) {
      return false;
    }
    if (!film.time) {
      return false;
    }
    if (!film.actor) {
      return false;
    }
    if (!film.nation) {
      return false;
    }
    if (!film.category) {
      return false;
    }
    if (!film.year) {
      return false;
    }
    if (!film.url) {
      return false;
    }
    if (!film.image) {
      return false;
    }

    return true;
  };

  const saveToLocalStorage = (film) => {
    let storage = JSON.parse(localStorage.getItem("films")) ?? [];

    let currentId = parseInt(localStorage.getItem("currentId") ?? 0);

    if (film.id) {
      const index = storage.findIndex((item) => {
        return parseInt(item.id) === parseInt(film.id);
      });

      storage[index] = film;
    } else {
      film.id = currentId + 1;
      storage.push(film);
    }

    localStorage.setItem("films", JSON.stringify(storage));
    localStorage.setItem("currentId", JSON.stringify(currentId + 1));
    window.location.href = "/AdminProject/HTML/index_admin.html"
    // "/project/login/index_admin.html";
  };
}

document.addEventListener("DOMContentLoaded", function (event) {
  const url_str = window.location.href;
  const url = new URL(url_str);
  const search_params = url.searchParams;
  const id = search_params.get("id");

  if (id) {
    const film = getFilmById(parseInt(id));
    loadEditForm(film);
  }
});

const getFilmById = (id) => {
  let storage = JSON.parse(localStorage.getItem("films")) ?? [];

  return (
    storage.find((data) => {
      return parseInt(data.id) === parseInt(id);
    }) ?? null
  );
};

loadEditForm = (film) => {
  idInput.value = film.id;
  nameInput.value = film.name;
  descritionInput.value = film.descrition;
  episodeInput.value = film.episode;
  timeInput.value = film.time;
  actorInput.value = film.actor;
  nationInput.value = film.nation;
  categoryInput.value = film.category;
  yearInput.value = film.year;
  urlInput.value = film.url;
  imageInput.value = film.image;
};
