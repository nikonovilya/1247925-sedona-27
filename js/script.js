let button = document.querySelector('.search__btn');
let popup = document.querySelector('.search__modal-window');
button.addEventListener("click", function(evt) {
   evt.preventDefault();
   popup.classList.toggle("search__modal-window--closed")
});