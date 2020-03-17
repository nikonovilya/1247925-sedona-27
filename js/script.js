let button = document.querySelector('.search__btn');
let popup = document.querySelector('.search__modal-window');
popup.classList.add("search__modal-window--closed");
button.addEventListener("click", function(evt) {
   evt.preventDefault();
   popup.classList.toggle("search__modal-window--closed")
});