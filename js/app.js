document.addEventListener('DOMContentLoaded', () => {
  const newFilmForm = document.querySelector('#new-film-form');
  newFilmForm.addEventListener('submit', handleNewFilmFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewFilmFormSubmit = function (event) {
    event.preventDefault();

    const filmEntry = createFilmEntry(event.target);
    const filmList = document.querySelector('#films-list');
    filmList.appendChild(filmEntry)

    event.target.reset();
}

const createFilmEntry = function (form) {
    const filmListItem = document.createElement('li')

    const filmTitle = document.createElement('h2')
    filmTitle.textContent = form.filmtitle.value
    filmListItem.appendChild(filmTitle)

    const director = document.createElement('h2')
    director.textContent = form.director.value
    filmListItem.appendChild(director)

    const releaseYear = document.createElement('h3')
    releaseYear.textContent = form.releaseyear.value
    filmListItem.appendChild(releaseYear)

    return filmListItem
}

const handleDeleteAllClick = function (event) {
    const filmList = document.querySelector('#films-list');
    filmList.innerHTML = '';
  }