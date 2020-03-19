const button = document.querySelector('.search__btn');
const popup = document.querySelector('.search__modal-window');
const form = popup.querySelector('.search__modal-form');
const arrival = popup.querySelector('.modal-form__arrival-input');
const departure = popup.querySelector('.modal-form__departure-input');

popup.classList.add("search__modal-window--closed");

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (popup.classList.contains("search__modal-window--closed")) {
    popup.classList.remove("search__modal-window--closed");
    arrival.focus();

  } else {
    popup.classList.add("search__modal-window--closed");
    popup.classList.remove("search__modal-window--error");
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("search__modal-window--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search__modal-window--error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!popup.classList.contains("search__modal-window--closed")) {
      popup.classList.add("search__modal-window--closed");
      popup.classList.remove("search__modal-window--error");
    }
  }
});
