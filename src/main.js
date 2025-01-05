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

document
  .querySelector('#mobile-menu-close')
  .addEventListener('click', function () {
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

document
  .querySelector('#pageheader-book')
  .addEventListener('click', function () {
    const modal = document.querySelector('#backdrop');
    modal.classList.add('is-open');
  });
