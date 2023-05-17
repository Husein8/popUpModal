'use strict';

const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
// NODE LIST IS ALMOST LIKE AN ARRAY
console.log(openModal);

// openModal.forEach(element => {
//   element.addEventListener('click', function () {
//     console.log('ee');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// });

// console.log(modal.classList.contains('modal'));

const closingModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const addModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', addModal);
  //   console.log(openModal[i].textContent);
  //   openModal.addEventListener('click', function () {
  //     console.log(openModal);
  //   });
}

closeModalBtn.addEventListener('click', closingModal);
overlay.addEventListener('click', closingModal);

document.addEventListener('keydown', function (e) {
  // info is the function - in parametar to be precise
  // console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closingModal();
  }
});
// keyup happens after we lift our finger
// keypress happens continuously
// keydown is fired as soon as we just press down the key

// body.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// keyboard events are global events and that means that keyboard events are listed on the whole document
