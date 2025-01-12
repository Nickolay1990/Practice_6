document.querySelector('#button-menu').addEventListener('click', function () {
  const menu = document.querySelector('#mobile-menu');
  const button_menu = document.querySelector('#button-menu');
  const title = document.querySelector('#pageheader-title');
  const text = document.querySelector('#pageheader-text');
  const book = document.querySelector('#pageheader-book');
  const buton_close = document.querySelector('#mobile-menu-close');

  menu.classList.add('open-menu');
  button_menu.classList.add('visually-hidden');
  buton_close.classList.remove('visually-hidden');

  title.classList.add('visually-hidden');
  text.classList.add('visually-hidden');
  book.classList.add('visually-hidden');
});

document.querySelector('#mobile-menu-close').addEventListener('click', function () {
  const menu = document.querySelector('#mobile-menu');
  const button_menu = document.querySelector('#button-menu');
  const title = document.querySelector('#pageheader-title');
  const text = document.querySelector('#pageheader-text');
  const book = document.querySelector('#pageheader-book');
  const button_close = document.querySelector('#mobile-menu-close');

  menu.classList.remove('open-menu');
  button_close.classList.add('visually-hidden');
  button_menu.classList.remove('visually-hidden');
  title.classList.remove('visually-hidden');
  text.classList.remove('visually-hidden');
  book.classList.remove('visually-hidden');
});

document.querySelector('#modal-close').addEventListener('click', function () {
  const modal = document.querySelector('#backdrop');

  modal.classList.remove('is-open');
});

document.querySelector('#pageheader-book').addEventListener('click', function () {
  const modal = document.querySelector('#backdrop');
  modal.classList.add('is-open');
});

document.querySelector('#upcoming-button-right').addEventListener('click', function () {
  const first = document.querySelector('#first-card');
  const second = document.querySelector('#second-card');
  const third = document.querySelector('#third-card');
  const selected = document.querySelector('.selected-card');
  const fill_button_right = document.querySelector('#right-button-scroll');
  const fill_button_left = document.querySelector('#left-button-scroll');
  if (first == selected) {
    first.classList.remove('selected-card');
    first.classList.add('second-position');

    second.classList.remove('fourd-position');
    second.classList.add('selected-card');

    third.classList.remove('fived-position');
    third.classList.add('fourd-position');

    fill_button_left.classList.remove('upcoming-list-item-button-pic-disabled');
    fill_button_left.classList.add('upcoming-list-item-button-pic');
  } else if (second == selected) {
    first.classList.remove('second-position');
    first.classList.add('first-position');

    second.classList.remove('selected-card');
    second.classList.add('second-position');

    third.classList.remove('fourd-position');
    third.classList.add('selected-card');

    fill_button_right.classList.remove('upcoming-list-item-button-pic');
    fill_button_right.classList.add('upcoming-list-item-button-pic-disabled');
  }
});

document.querySelector('#upcoming-button-left').addEventListener('click', function () {
  const first = document.querySelector('#first-card');
  const second = document.querySelector('#second-card');
  const third = document.querySelector('#third-card');
  const selected = document.querySelector('.selected-card');
  const fill_button_right = document.querySelector('#right-button-scroll');
  const fill_button_left = document.querySelector('#left-button-scroll');
  if (second == selected) {
    first.classList.remove('second-position');
    first.classList.add('selected-card');

    second.classList.remove('selected-card');
    second.classList.add('fourd-position');

    third.classList.remove('fourd-position');
    third.classList.add('fived-position');

    fill_button_left.classList.remove('upcoming-list-item-button-pic');
    fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');
  } else if (third == selected) {
    first.classList.remove('first-position');
    first.classList.add('second-position');

    second.classList.remove('second-position');
    second.classList.add('selected-card');

    third.classList.remove('selected-card');
    third.classList.add('fourd-position');

    fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
    fill_button_right.classList.add('upcoming-list-item-button-pic');
  }
});
