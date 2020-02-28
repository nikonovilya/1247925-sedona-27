let button = document.querySelector('.search__btn');
let popup = document.querySelector('.search__modal-window');
button.onclick = function(evt) {
   evt.preventDefault();
   popup.classList.toggle('search__modal-window--show');    
   popup.classList.toggle('search__modal-window--invis');
};


 