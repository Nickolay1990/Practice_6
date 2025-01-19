// open mobile menu

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

// close mobile menu

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

// close modal window

document.querySelector('#modal-close').addEventListener('click', function () {
	const modal = document.querySelector('#backdrop');

	modal.classList.remove('is-open');
});

// open modal window

document.querySelector('#pageheader-book').addEventListener('click', function () {
	const modal = document.querySelector('#backdrop');
	modal.classList.add('is-open');
});

// swap upcoming tours

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

// swap upcoming tours

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

// swap upcoming days hoverla

document.addEventListener('DOMContentLoaded', () => {
	const modalItems = document.querySelectorAll('.upcoming-modal-list-item');
	const first_card = document.querySelector('#first-hoverla');
	const second_card = document.querySelector('#second-hoverla');
	const third_card = document.querySelector('#third-hoverla');

	modalItems.forEach(item => {
		let startX = 0;

		item.addEventListener('touchstart', event => {
			startX = event.touches[0].clientX;
		});

		item.addEventListener('touchend', event => {
			const endX = event.changedTouches[0].clientX;
			const diffX = endX - startX;
			const selectedCard = document.querySelector('.selected-card-modal-days');

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					if (selectedCard == second_card) {
						first_card.classList.remove('second-position-modal-days');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('fourd-position-modal-days');

						third_card.classList.remove('fourd-position-modal-days');
						third_card.classList.add('fived-position-modal-days');
					} else if (selectedCard == third_card) {
						first_card.classList.remove('first-position-modal-days');
						first_card.classList.add('second-position-modal-days');

						second_card.classList.remove('second-position-modal-days');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('fourd-position-modal-days');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('second-position-modal-days');

						second_card.classList.remove('fourd-position-modal-days');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('fived-position-modal-days');
						third_card.classList.add('fourd-position-modal-days');
					} else if (selectedCard == second_card) {
						first_card.classList.remove('second-position-modal-days');
						first_card.classList.add('first-position-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('second-position-modal-days');

						third_card.classList.remove('fourd-position-modal-days');
						third_card.classList.add('selected-card-modal-days');
					}
				}
			}
		});
	});
});

// open upcoming days hoverla

document.querySelector('#book-hoverla').addEventListener('click', function () {
	const modal_hoverla = document.querySelector('#upcoming-modal-hoverla');
	modal_hoverla.classList.add('is-open');
});

// close upcoming days hoverla

document.querySelector('#upcoming-modal-closebtn').addEventListener('click', function () {
	const modal_hoverla = document.querySelector('#upcoming-modal-hoverla');
	modal_hoverla.classList.remove('is-open');
});

// book from upcoming

document.querySelector('#upcoming-modal-bookbtn').addEventListener('click', function () {
	const backdrop = document.querySelector('#backdrop');
	const modal_hoverla = document.querySelector('#upcoming-modal-hoverla');
	backdrop.classList.add('is-open');
	modal_hoverla.style.zIndex = '999';
});
