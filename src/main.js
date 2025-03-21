import imageUrlFirst from './img/galery/gallery-modal/gallery-modal-first.jpg';
import imageUrlFirstRetina from './img/galery/gallery-modal/gallery-modal-first@2x.jpg';
import imageUrlSecond from './img/galery/gallery-modal//gallery-modal-second.jpg';
import imageUrlSecondRetina from './img/galery/gallery-modal//gallery-modal-second@2x.jpg';
import imageUrlThird from './img/galery/gallery-modal/gallery-modal-third.jpg';
import imageUrlThirdRetina from './img/galery/gallery-modal/gallery-modal-third@2x.jpg';
import imageUrlFourth from './img/galery/gallery-modal/gallery-modal-fourth.jpg';
import imageUrlFourthRetina from './img/galery/gallery-modal/gallery-modal-fourth@2x.jpg';
import imageUrlFifth from './img/galery/gallery-modal/gallery-modal-fifth.jpg';
import imageUrlFifthRetina from './img/galery/gallery-modal/gallery-modal-fifth@2x.jpg';
import imageUrlSixth from './img/galery/gallery-modal/gallery-modal-sixth.jpg';
import imageUrlSixthRetina from './img/galery/gallery-modal/gallery-modal-sixth@2x.jpg';
import imageUrlSeventh from './img/galery/gallery-modal/gallery-modal-seventh.jpg';
import imageUrlSeventhRetina from './img/galery/gallery-modal/gallery-modal-seventh@2x.jpg';
import imageUrlEighth from './img/galery/gallery-modal/gallery-modal-eighth.jpg';
import imageUrlEighthRetina from './img/galery/gallery-modal/gallery-modal-eighth@2x.jpg';

// open mobile menu

document.querySelector('#button-menu').addEventListener('click', function () {
	const menu = document.querySelector('#mobile-menu');
	const button_menu = document.querySelector('#button-menu');
	const title = document.querySelector('#pageheader-title');
	const text = document.querySelector('#pageheader-text');
	const book = document.querySelector('#pageheader-book');
	const buton_close = document.querySelector('#mobile-menu-close');
	const darkWindow = document.querySelector('#dark-window');
	const header = document.querySelector('#pageheader');

	menu.classList.add('open-menu');
	button_menu.classList.add('visually-hidden');
	buton_close.classList.remove('visually-hidden');
	title.classList.add('visually-hidden');
	text.classList.add('visually-hidden');
	book.classList.add('visually-hidden');
	darkWindow.classList.toggle('dark-window');
	header.classList.toggle('padding-for-tablet-menu');
});

// close mobile menu

document.querySelector('#mobile-menu-close').addEventListener('click', function () {
	const menu = document.querySelector('#mobile-menu');
	const button_menu = document.querySelector('#button-menu');
	const title = document.querySelector('#pageheader-title');
	const text = document.querySelector('#pageheader-text');
	const book = document.querySelector('#pageheader-book');
	const button_close = document.querySelector('#mobile-menu-close');
	const darkWindow = document.querySelector('#dark-window');
	const header = document.querySelector('#pageheader');

	menu.classList.remove('open-menu');
	button_close.classList.add('visually-hidden');
	button_menu.classList.remove('visually-hidden');
	title.classList.remove('visually-hidden');
	text.classList.remove('visually-hidden');
	book.classList.remove('visually-hidden');
	darkWindow.classList.toggle('dark-window');
	header.classList.toggle('padding-for-tablet-menu');
});

// open modal window

document.querySelector('#pageheader-book').addEventListener('click', function () {
	const modal = document.querySelector('#backdrop');
	modal.classList.add('is-open');
});

// close modal window

document.querySelector('#modal-close').addEventListener('click', function () {
	const modal = document.querySelector('#backdrop');
	modal.classList.remove('is-open');
});

// swap upcoming tours right

document.querySelector('#upcoming-button-right').addEventListener('click', function () {
	if (window.innerWidth < 768) {
		const list = document.querySelector('#upcoming-tours-list');
		const style = window.getComputedStyle(list);
		const matrix = style.transform;
		const fill_button_right = document.querySelector('#right-button-scroll');
		const fill_button_left = document.querySelector('#left-button-scroll');

		if (matrix === 'none') {
			list.style.transform = 'translate(-326px)';
			fill_button_left.classList.remove('upcoming-list-item-button-pic-disabled');
			fill_button_left.classList.add('upcoming-list-item-button-pic');
		} else {
			const translate = Number(matrix.split(',')[4]);
			if (translate === -326) {
				list.style.transform = 'translate(-652px)';
				fill_button_right.classList.remove('upcoming-list-item-button-pic');
				fill_button_right.classList.add('upcoming-list-item-button-pic-disabled');
			}
		}
	} else if (window.innerWidth >= 768) {
		const list = document.querySelector('#upcoming-tours-list');
		const style = window.getComputedStyle(list);
		const matrix = style.transform;
		const fill_button_right = document.querySelector('#right-button-scroll');
		const fill_button_left = document.querySelector('#left-button-scroll');

		if (matrix === 'none') {
			list.style.transform = `translate(-374px)`;
			fill_button_left.classList.remove('upcoming-list-item-button-pic-disabled');
			fill_button_left.classList.add('upcoming-list-item-button-pic');
			fill_button_right.classList.remove('upcoming-list-item-button-pic');
			fill_button_right.classList.add('upcoming-list-item-button-pic-disabled');
		}
	}
});

// swap upcoming tours left

document.querySelector('#upcoming-button-left').addEventListener('click', function () {
	if (window.innerWidth < 768) {
		const list = document.querySelector('#upcoming-tours-list');
		const style = window.getComputedStyle(list);
		const matrix = style.transform;
		const fill_button_right = document.querySelector('#right-button-scroll');
		const fill_button_left = document.querySelector('#left-button-scroll');

		if (matrix !== 'none') {
			const translate = Number(matrix.split(',')[4]);
			if (translate === -652) {
				list.style.transform = 'translate(-326px)';
				fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
				fill_button_right.classList.add('upcoming-list-item-button-pic');
			} else {
				list.style.transform = 'none';
				fill_button_left.classList.remove('upcoming-list-item-button-pic');
				fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');
			}
		}
	} else if (window.innerWidth >= 768) {
		const list = document.querySelector('#upcoming-tours-list');
		const style = window.getComputedStyle(list);
		const matrix = style.transform;
		const fill_button_right = document.querySelector('#right-button-scroll');
		const fill_button_left = document.querySelector('#left-button-scroll');
		if (matrix !== 'none') {
			list.style.transform = 'none';
			fill_button_left.classList.remove('upcoming-list-item-button-pic');
			fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');
			fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
			fill_button_right.classList.add('upcoming-list-item-button-pic');
		}
	}
});

// resize

const mobileBreakpoint = window.matchMedia('(max-width: 767px)');

mobileBreakpoint.addEventListener('change', updateDisplay);

function updateDisplay() {
	const list = document.querySelector('#upcoming-tours-list');
	const fill_button_right = document.querySelector('#right-button-scroll');
	const fill_button_left = document.querySelector('#left-button-scroll');
	list.style.transform = 'none';
	fill_button_left.classList.remove('upcoming-list-item-button-pic');
	fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');
	fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
	fill_button_right.classList.add('upcoming-list-item-button-pic');

	const element = document.querySelector('.galery-list');
	const rightButton = document.querySelector('#galery-right-button-scroll');
	const leftButton = document.querySelector('#galery-left-button-scroll');
	element.style.transform = 'none';
	rightButton.classList.remove('upcoming-list-item-button-pic-disabled');
	rightButton.classList.add('upcoming-list-item-button-pic');
	leftButton.classList.remove('upcoming-list-item-button-pic');
	leftButton.classList.add('upcoming-list-item-button-pic-disabled');
}

// swap upcoming days hoverla
document.addEventListener('DOMContentLoaded', () => {
	const modalItems = document.querySelectorAll('#upcoming-modal-hoverla .upcoming-modal-list-item');
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
			const selectedCard = document.querySelector('#upcoming-modal-hoverla .selected-card-modal-days');
			const buttons = document.querySelectorAll('#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item');

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					if (selectedCard == second_card) {
						first_card.classList.remove('left-position');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('right-position');

						buttons[1].classList.remove('selected-card-days');
					} else if (selectedCard == third_card) {
						second_card.classList.remove('left-position');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('right-position');

						buttons[2].classList.remove('selected-card-days');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('left-position');

						second_card.classList.remove('right-position');
						second_card.classList.add('selected-card-modal-days');

						buttons[1].classList.add('selected-card-days');
					} else if (selectedCard == second_card) {
						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('left-position');

						third_card.classList.remove('right-position');
						third_card.classList.add('selected-card-modal-days');

						buttons[2].classList.add('selected-card-days');
					}
				}
			}
		});
	});
});

// swap upcoming days hoverla desctop

const swapButtons = document.querySelectorAll('#upcoming-modal-hoverla .swap-btn');

swapButtons.forEach(button => {
	button.addEventListener('click', swapHandler);
});

function swapHandler(event) {
	const buttons = document.querySelectorAll('#upcoming-modal-hoverla .upcoming-modal-list-item-listbtn-item');
	const first_card = document.querySelector('#first-hoverla');
	const second_card = document.querySelector('#second-hoverla');
	const third_card = document.querySelector('#third-hoverla');

	switch (event.currentTarget) {
		case swapButtons[0]:
			buttons[1].classList.remove('selected-card-days');
			buttons[2].classList.remove('selected-card-days');

			first_card.classList.add('selected-card-modal-days');
			first_card.classList.remove('left-position');
			second_card.classList.remove('selected-card-modal-days', 'left-position');
			second_card.classList.add('right-position');
			third_card.classList.remove('selected-card-modal-days', 'left-position');
			third_card.classList.add('right-position');
			break;
		case swapButtons[1]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'left-position');
			second_card.classList.add('selected-card-modal-days');
			third_card.classList.remove('selected-card-modal-days');
			third_card.classList.add('right-position');
			break;
		case swapButtons[2]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position');
			third_card.classList.add('selected-card-modal-days');
			break;
	}
}

// swap upcoming days bukovel

document.addEventListener('DOMContentLoaded', () => {
	const modalItems = document.querySelectorAll('#upcoming-modal-bukovel .upcoming-modal-list-item');
	const first_card = document.querySelector('#first-bukovel');
	const second_card = document.querySelector('#second-bukovel');
	const third_card = document.querySelector('#third-bukovel');
	const fourd_card = document.querySelector('#fourd-bukovel');

	modalItems.forEach(item => {
		let startX = 0;

		item.addEventListener('touchstart', event => {
			startX = event.touches[0].clientX;
		});

		item.addEventListener('touchend', event => {
			const endX = event.changedTouches[0].clientX;
			const diffX = endX - startX;
			const selectedCard = document.querySelector('#upcoming-modal-bukovel .selected-card-modal-days');
			const buttons = document.querySelectorAll('#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item');

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					if (selectedCard == second_card) {
						first_card.classList.remove('left-position');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('right-position');

						buttons[1].classList.remove('selected-card-days');
					} else if (selectedCard == third_card) {
						second_card.classList.remove('left-position');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('right-position');

						buttons[2].classList.remove('selected-card-days');
					} else if (selectedCard == fourd_card) {
						third_card.classList.remove('left-position');
						third_card.classList.add('selected-card-modal-days');

						fourd_card.classList.remove('selected-card-modal-days');
						fourd_card.classList.add('right-position');

						buttons[3].classList.remove('selected-card-days');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('left-position');

						second_card.classList.remove('right-position');
						second_card.classList.add('selected-card-modal-days');

						buttons[1].classList.add('selected-card-days');
					} else if (selectedCard == second_card) {
						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('left-position');

						third_card.classList.remove('right-position');
						third_card.classList.add('selected-card-modal-days');

						buttons[2].classList.add('selected-card-days');
					} else if (selectedCard == third_card) {
						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('left-position');

						fourd_card.classList.remove('right-position');
						fourd_card.classList.add('selected-card-modal-days');

						buttons[3].classList.add('selected-card-days');
					}
				}
			}
		});
	});
});

// swap upcoming days bukovel desctop

const swapButtonsBukovel = document.querySelectorAll('#upcoming-modal-bukovel .swap-btn');

swapButtonsBukovel.forEach(button => {
	button.addEventListener('click', swapHandlerBukovel);
});

function swapHandlerBukovel(event) {
	const buttons = document.querySelectorAll('#upcoming-modal-bukovel .upcoming-modal-list-item-listbtn-item');

	const first_card = document.querySelector('#first-bukovel');
	const second_card = document.querySelector('#second-bukovel');
	const third_card = document.querySelector('#third-bukovel');
	const fourth_card = document.querySelector('#fourd-bukovel');

	switch (event.target) {
		case swapButtonsBukovel[0]:
			buttons[1].classList.remove('selected-card-days');
			buttons[2].classList.remove('selected-card-days');
			buttons[3].classList.remove('selected-card-days');

			first_card.classList.add('selected-card-modal-days');
			first_card.classList.remove('left-position');
			second_card.classList.remove('selected-card-modal-days', 'left-position');
			second_card.classList.add('right-position');
			third_card.classList.remove('selected-card-modal-days', 'left-position');
			third_card.classList.add('right-position');
			fourth_card.classList.remove('selected-card-modal-days', 'left-position');
			fourth_card.classList.add('right-position');
			break;
		case swapButtonsBukovel[1]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.remove('selected-card-days');
			buttons[3].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'left-position');
			second_card.classList.add('selected-card-modal-days');
			third_card.classList.remove('selected-card-modal-days', 'left-position');
			third_card.classList.add('right-position');
			fourth_card.classList.remove('selected-card-modal-days');
			fourth_card.classList.add('right-position');
			break;
		case swapButtonsBukovel[2]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'left-position');
			third_card.classList.add('selected-card-modal-days');
			fourth_card.classList.remove('selected-card-modal-days');
			fourth_card.classList.add('right-position');
			break;
		case swapButtonsBukovel[3]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.add('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'selected-card-modal-days');
			third_card.classList.add('left-position');
			fourth_card.classList.remove('right-position');
			fourth_card.classList.add('selected-card-modal-days');
			break;
	}
}

// swap upcoming days carpathians

document.addEventListener('DOMContentLoaded', () => {
	const modalItems = document.querySelectorAll('#upcoming-modal-carpathians .upcoming-modal-list-item');
	const first_card = document.querySelector('#first-carpathians');
	const second_card = document.querySelector('#second-carpathians');
	const third_card = document.querySelector('#third-carpathians');
	const fourd_card = document.querySelector('#fourd-carpathians');
	const fived_card = document.querySelector('#fived-carpathians');
	const sixed_card = document.querySelector('#sixed-carpathians');
	const sevened_card = document.querySelector('#sevened-carpathians');

	modalItems.forEach(item => {
		let startX = 0;

		item.addEventListener('touchstart', event => {
			startX = event.touches[0].clientX;
		});

		item.addEventListener('touchend', event => {
			const endX = event.changedTouches[0].clientX;
			const diffX = endX - startX;
			const selectedCard = document.querySelector('#upcoming-modal-carpathians .selected-card-modal-days');
			const buttons = document.querySelectorAll('#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item');

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					if (selectedCard == second_card) {
						first_card.classList.remove('left-position');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('right-position');

						buttons[1].classList.remove('selected-card-days');
					} else if (selectedCard == third_card) {
						second_card.classList.remove('left-position');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('right-position');

						buttons[2].classList.remove('selected-card-days');
					} else if (selectedCard == fourd_card) {
						third_card.classList.remove('left-position');
						third_card.classList.add('selected-card-modal-days');

						fourd_card.classList.remove('selected-card-modal-days');
						fourd_card.classList.add('right-position');

						buttons[3].classList.remove('selected-card-days');
					} else if (selectedCard == fived_card) {
						fourd_card.classList.remove('left-position');
						fourd_card.classList.add('selected-card-modal-days');

						fived_card.classList.remove('selected-card-modal-days');
						fived_card.classList.add('right-position');

						buttons[4].classList.remove('selected-card-days');
					} else if (selectedCard == sixed_card) {
						fived_card.classList.remove('left-position');
						fived_card.classList.add('selected-card-modal-days');

						sixed_card.classList.remove('selected-card-modal-days');
						sixed_card.classList.add('right-position');

						buttons[5].classList.remove('selected-card-days');
					} else if (selectedCard == sevened_card) {
						sixed_card.classList.remove('left-position');
						sixed_card.classList.add('selected-card-modal-days');

						sevened_card.classList.remove('selected-card-modal-days');
						sevened_card.classList.add('right-position');

						buttons[6].classList.remove('selected-card-days');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('left-position');

						second_card.classList.remove('right-position');
						second_card.classList.add('selected-card-modal-days');

						buttons[1].classList.add('selected-card-days');
					} else if (selectedCard == second_card) {
						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('left-position');

						third_card.classList.remove('right-position');
						third_card.classList.add('selected-card-modal-days');

						buttons[2].classList.add('selected-card-days');
					} else if (selectedCard == third_card) {
						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('left-position');

						fourd_card.classList.remove('right-position');
						fourd_card.classList.add('selected-card-modal-days');

						buttons[3].classList.add('selected-card-days');
					} else if (selectedCard == fourd_card) {
						fourd_card.classList.remove('selected-card-modal-days');
						fourd_card.classList.add('left-position');

						fived_card.classList.remove('right-position');
						fived_card.classList.add('selected-card-modal-days');

						buttons[4].classList.add('selected-card-days');
					} else if (selectedCard == fived_card) {
						fived_card.classList.remove('selected-card-modal-days');
						fived_card.classList.add('left-position');

						sixed_card.classList.remove('right-position');
						sixed_card.classList.add('selected-card-modal-days');

						buttons[5].classList.add('selected-card-days');
					} else if (selectedCard == sixed_card) {
						sixed_card.classList.remove('selected-card-modal-days');
						sixed_card.classList.add('left-position');

						sevened_card.classList.remove('right-position');
						sevened_card.classList.add('selected-card-modal-days');

						buttons[6].classList.add('selected-card-days');
					}
				}
			}
		});
	});
});

// swap upcoming days carpathians desctop

const swapButtonsCarpathians = document.querySelectorAll('#upcoming-modal-carpathians .swap-btn');

swapButtonsCarpathians.forEach(button => {
	button.addEventListener('click', swapHandlerCarpathians);
});

function swapHandlerCarpathians(event) {
	const buttons = document.querySelectorAll('#upcoming-modal-carpathians .upcoming-modal-list-item-listbtn-item');

	const first_card = document.querySelector('#first-carpathians');
	const second_card = document.querySelector('#second-carpathians');
	const third_card = document.querySelector('#third-carpathians');
	const fourth_card = document.querySelector('#fourd-carpathians');
	const fifth_card = document.querySelector('#fived-carpathians');
	const sixth_card = document.querySelector('#sixed-carpathians');
	const seventh_card = document.querySelector('#sevened-carpathians');

	switch (event.target) {
		case swapButtonsCarpathians[0]:
			buttons[1].classList.remove('selected-card-days');
			buttons[2].classList.remove('selected-card-days');
			buttons[3].classList.remove('selected-card-days');
			buttons[4].classList.remove('selected-card-days');
			buttons[5].classList.remove('selected-card-days');
			buttons[6].classList.remove('selected-card-days');

			first_card.classList.add('selected-card-modal-days');
			first_card.classList.remove('left-position');
			second_card.classList.remove('selected-card-modal-days', 'left-position');
			second_card.classList.add('right-position');
			third_card.classList.remove('selected-card-modal-days', 'left-position');
			third_card.classList.add('right-position');
			fourth_card.classList.remove('selected-card-modal-days', 'left-position');
			fourth_card.classList.add('right-position');
			fifth_card.classList.remove('selected-card-modal-days', 'left-position');
			fifth_card.classList.add('right-position');
			sixth_card.classList.remove('selected-card-modal-days', 'left-position');
			sixth_card.classList.add('right-position');
			seventh_card.classList.remove('selected-card-modal-days');
			seventh_card.classList.add('right-position');
			break;
		case swapButtonsCarpathians[1]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.remove('selected-card-days');
			buttons[3].classList.remove('selected-card-days');
			buttons[4].classList.remove('selected-card-days');
			buttons[5].classList.remove('selected-card-days');
			buttons[6].classList.remove('selected-card-days');

			first_card.classList.add('left-position');
			first_card.classList.remove('selected-card-modal-days');
			second_card.classList.remove('right-position', 'left-position');
			second_card.classList.add('selected-card-modal-days');
			third_card.classList.remove('selected-card-modal-days', 'left-position');
			third_card.classList.add('right-position');
			fourth_card.classList.remove('selected-card-modal-days', 'left-position');
			fourth_card.classList.add('right-position');
			fifth_card.classList.remove('selected-card-modal-days', 'left-position');
			fifth_card.classList.add('right-position');
			sixth_card.classList.remove('selected-card-modal-days', 'left-position');
			sixth_card.classList.add('right-position');
			seventh_card.classList.remove('selected-card-modal-days');
			seventh_card.classList.add('right-position');
			break;
		case swapButtonsCarpathians[2]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.remove('selected-card-days');
			buttons[4].classList.remove('selected-card-days');
			buttons[5].classList.remove('selected-card-days');
			buttons[6].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'left-position');
			third_card.classList.add('selected-card-modal-days');
			fourth_card.classList.remove('selected-card-modal-days', 'left-position');
			fourth_card.classList.add('right-position');
			fifth_card.classList.remove('selected-card-modal-days', 'left-position');
			fifth_card.classList.add('right-position');
			sixth_card.classList.remove('selected-card-modal-days', 'left-position');
			sixth_card.classList.add('right-position');
			seventh_card.classList.remove('selected-card-modal-days');
			seventh_card.classList.add('right-position');
			break;
		case swapButtonsCarpathians[3]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.add('selected-card-days');
			buttons[4].classList.remove('selected-card-days');
			buttons[5].classList.remove('selected-card-days');
			buttons[6].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'selected-card-modal-days');
			third_card.classList.add('left-position');
			fourth_card.classList.remove('right-position', 'left-position');
			fourth_card.classList.add('selected-card-modal-days');
			fifth_card.classList.remove('selected-card-modal-days', 'left-position');
			fifth_card.classList.add('right-position');
			sixth_card.classList.remove('selected-card-modal-days', 'left-position');
			sixth_card.classList.add('right-position');
			seventh_card.classList.remove('selected-card-modal-days');
			seventh_card.classList.add('right-position');
			break;
		case swapButtonsCarpathians[4]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.add('selected-card-days');
			buttons[4].classList.add('selected-card-days');
			buttons[5].classList.remove('selected-card-days');
			buttons[6].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'selected-card-modal-days');
			third_card.classList.add('left-position');
			fourth_card.classList.remove('right-position', 'selected-card-modal-days');
			fourth_card.classList.add('left-position');
			fifth_card.classList.remove('right-position', 'left-position');
			fifth_card.classList.add('selected-card-modal-days');
			sixth_card.classList.remove('selected-card-modal-days', 'left-position');
			sixth_card.classList.add('right-position');
			seventh_card.classList.remove('selected-card-modal-days');
			seventh_card.classList.add('right-position');
			break;
		case swapButtonsCarpathians[5]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.add('selected-card-days');
			buttons[4].classList.add('selected-card-days');
			buttons[5].classList.add('selected-card-days');
			buttons[6].classList.remove('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'selected-card-modal-days');
			third_card.classList.add('left-position');
			fourth_card.classList.remove('right-position', 'selected-card-modal-days');
			fourth_card.classList.add('left-position');
			fifth_card.classList.remove('selected-card-modal-days', 'right-position');
			fifth_card.classList.add('left-position');
			sixth_card.classList.remove('right-position', 'left-position');
			sixth_card.classList.add('selected-card-modal-days');
			seventh_card.classList.remove('selected-card-modal-days');
			seventh_card.classList.add('right-position');
			break;
		case swapButtonsCarpathians[6]:
			buttons[1].classList.add('selected-card-days');
			buttons[2].classList.add('selected-card-days');
			buttons[3].classList.add('selected-card-days');
			buttons[4].classList.add('selected-card-days');
			buttons[5].classList.add('selected-card-days');
			buttons[6].classList.add('selected-card-days');

			first_card.classList.remove('selected-card-modal-days');
			first_card.classList.add('left-position');
			second_card.classList.remove('right-position', 'selected-card-modal-days');
			second_card.classList.add('left-position');
			third_card.classList.remove('right-position', 'selected-card-modal-days');
			third_card.classList.add('left-position');
			fourth_card.classList.remove('right-position', 'selected-card-modal-days');
			fourth_card.classList.add('left-position');
			fifth_card.classList.remove('selected-card-modal-days', 'right-position');
			fifth_card.classList.add('left-position');
			sixth_card.classList.remove('right-position', 'selected-card-modal-days');
			sixth_card.classList.add('left-position');
			seventh_card.classList.remove('right-position');
			seventh_card.classList.add('selected-card-modal-days');
			break;
	}
}

// open upcoming days hoverla

document.querySelector('#book-hoverla').addEventListener('click', function () {
	const modal_hoverla = document.querySelector('#upcoming-modal-hoverla');
	modal_hoverla.classList.add('is-open');
});

// open upcoming days bukovel

document.querySelector('#book-bukovel').addEventListener('click', function () {
	const modal_bukovel = document.querySelector('#upcoming-modal-bukovel');
	modal_bukovel.classList.add('is-open');
});

// open upcoming days carpathians

document.querySelector('#book-carpathians').addEventListener('click', function () {
	const modal_carpathians = document.querySelector('#upcoming-modal-carpathians');
	modal_carpathians.classList.add('is-open');
});

// close upcoming days hoverla

document.querySelector('#upcoming-modal-closebtn-hoverla').addEventListener('click', function () {
	const modal_hoverla = document.querySelector('#upcoming-modal-hoverla');
	modal_hoverla.classList.remove('is-open');
});

// close upcoming days bukovel

document.querySelector('#upcoming-modal-closebtn-bukovel').addEventListener('click', function () {
	const modal_bukovel = document.querySelector('#upcoming-modal-bukovel');
	modal_bukovel.classList.remove('is-open');
});

// close upcoming days carpathians

document.querySelector('#upcoming-modal-closebtn-carpathians').addEventListener('click', function () {
	const modal_carpathians = document.querySelector('#upcoming-modal-carpathians');
	modal_carpathians.classList.remove('is-open');
});

// book from upcoming

document.querySelectorAll('.upcoming-modal-bookbtn').forEach(button => {
	button.addEventListener('click', function () {
		const backdrop = document.querySelector('#backdrop');
		backdrop.classList.add('is-open');
	});
});

// reviews show back photo

document.querySelectorAll('.reviews-card-review-button').forEach(button => {
	button.addEventListener('click', function () {
		if (window.innerWidth >= 1440) {
			const cards = document.querySelectorAll('.reviews-inner');
			cards.forEach(card => {
				card.classList.toggle('reviews-go-to-back');
			});
		} else {
			let backblock;
			if (this.classList.contains('to-front')) {
				backblock = this.parentElement.parentElement;
			} else {
				backblock = this.parentElement.parentElement.parentElement;
			}
			backblock.classList.toggle('reviews-go-to-back');
		}
	});
});

// swap gallery right

document.querySelector('#galery-button-right').addEventListener('click', function () {
	if (window.innerWidth < 768) {
		this.disabled = true;
		const element = document.querySelector('.galery-list');
		const style = window.getComputedStyle(element);
		const matrix = style.transform;
		const step = -300;
		const rightButton = document.querySelector('#galery-right-button-scroll');
		const leftButton = document.querySelector('#galery-left-button-scroll');

		if (matrix === 'none') {
			element.style.transform = `translate(-285px)`;
			leftButton.classList.remove('upcoming-list-item-button-pic-disabled');
			leftButton.classList.add('upcoming-list-item-button-pic');
		} else {
			const matrixData = matrix.match(/matrix\((.+)\)/)[1].split(', ');
			const newTranlate = Number(matrixData[4]) + step;
			if (Number(matrixData[4]) >= -1785) {
				element.style.transform = `translate(${newTranlate}px)`;
				if (Number(matrixData[4]) === -1785) {
					rightButton.classList.add('upcoming-list-item-button-pic-disabled');
				}
			}
		}
	} else if (window.innerWidth >= 1440) {
		this.disabled = true;
		const element = document.querySelector('.galery-list');
		const style = window.getComputedStyle(element);
		const matrix = style.transform;
		const step = -1190;
		const rightButton = document.querySelector('#galery-right-button-scroll');
		const leftButton = document.querySelector('#galery-left-button-scroll');

		if (matrix === 'none') {
			element.style.transform = `translate(-1190px)`;
			leftButton.classList.remove('upcoming-list-item-button-pic-disabled');
			leftButton.classList.add('upcoming-list-item-button-pic');
		} else {
			const matrixData = matrix.split(', ')[4];
			const newTranlate = Number(matrixData) + step;

			if (newTranlate >= -3570) {
				element.style.transform = `translate(${newTranlate}px)`;
				if (newTranlate === -3570) {
					rightButton.classList.remove('upcoming-list-item-button-pic');
					rightButton.classList.add('upcoming-list-item-button-pic-disabled');
				}
			}
		}
	} else if (window.innerWidth >= 768) {
		this.disabled = true;
		const element = document.querySelector('.galery-list');
		const style = window.getComputedStyle(element);
		const matrix = style.transform;
		const step = -748;
		const rightButton = document.querySelector('#galery-right-button-scroll');
		const leftButton = document.querySelector('#galery-left-button-scroll');

		if (matrix === 'none') {
			element.style.transform = `translate(-748px)`;
			leftButton.classList.remove('upcoming-list-item-button-pic-disabled');
			leftButton.classList.add('upcoming-list-item-button-pic');
		} else {
			const matrixData = matrix.split(', ')[4];
			const newTranlate = Number(matrixData) + step;
			if (newTranlate >= -2244) {
				element.style.transform = `translate(${newTranlate}px)`;
				if (newTranlate === -2244) {
					rightButton.classList.remove('upcoming-list-item-button-pic');
					rightButton.classList.add('upcoming-list-item-button-pic-disabled');
				}
			}
		}
	}
	setTimeout(() => {
		this.disabled = false;
	}, 300);
});

// swap gallery left

document.querySelector('#galery-button-left').addEventListener('click', function () {
	if (window.innerWidth < 768) {
		this.disabled = true;
		const element = document.querySelector('.galery-list');
		const style = window.getComputedStyle(element);
		const matrix = style.transform;
		const step = 300;
		const leftButton = document.querySelector('#galery-left-button-scroll');
		const rightButton = document.querySelector('#galery-right-button-scroll');

		if (matrix !== 'none') {
			const matrixData = matrix.match(/matrix\((.+)\)/)[1].split(', ');
			const newTranlate = Number(matrixData[4]) + step;
			if (Number(matrixData[4]) === -285) {
				element.style.transform = 'none';
				leftButton.classList.add('upcoming-list-item-button-pic-disabled');
			} else if (Number(matrixData[4]) === -2085) {
				rightButton.classList.remove('upcoming-list-item-button-pic-disabled');
				element.style.transform = `translate(${newTranlate}px)`;
			} else {
				element.style.transform = `translate(${newTranlate}px)`;
			}
		}
	} else if (window.innerWidth >= 1440) {
		this.disabled = true;
		const element = document.querySelector('.galery-list');
		const style = window.getComputedStyle(element);
		const matrix = style.transform;
		const step = 1190;
		const leftButton = document.querySelector('#galery-left-button-scroll');
		const rightButton = document.querySelector('#galery-right-button-scroll');
		if (matrix !== 'none') {
			const matrixData = Number(matrix.split(', ')[4]);
			const newTranlate = matrixData + step;

			if (matrixData === -1190) {
				element.style.transform = 'none';
				leftButton.classList.remove('upcoming-list-item-button-pic');
				leftButton.classList.add('upcoming-list-item-button-pic-disabled');
			} else if (matrixData === -3570) {
				rightButton.classList.remove('upcoming-list-item-button-pic-disabled');
				rightButton.classList.add('upcoming-list-item-button-pic');
				element.style.transform = `translate(${newTranlate}px)`;
			} else {
				element.style.transform = `translate(${newTranlate}px)`;
			}
		}
	} else if (window.innerWidth >= 768) {
		this.disabled = true;
		const element = document.querySelector('.galery-list');
		const style = window.getComputedStyle(element);
		const matrix = style.transform;
		const step = 748;
		const leftButton = document.querySelector('#galery-left-button-scroll');
		const rightButton = document.querySelector('#galery-right-button-scroll');
		if (matrix !== 'none') {
			const matrixData = Number(matrix.split(', ')[4]);
			const newTranlate = matrixData + step;
			if (matrixData === -748) {
				element.style.transform = 'none';
				leftButton.classList.remove('upcoming-list-item-button-pic');
				leftButton.classList.add('upcoming-list-item-button-pic-disabled');
			} else if (matrixData === -2244) {
				rightButton.classList.remove('upcoming-list-item-button-pic-disabled');
				rightButton.classList.add('upcoming-list-item-button-pic');
				element.style.transform = `translate(${newTranlate}px)`;
			} else {
				element.style.transform = `translate(${newTranlate}px)`;
			}
		}
	}
	setTimeout(() => {
		this.disabled = false;
	}, 300);
});

// open gallery modal

const imageUrls = [
	{
		normal: imageUrlFirst,
		retina: imageUrlFirstRetina,
	},
	{
		normal: imageUrlSecond,
		retina: imageUrlSecondRetina,
	},
	{
		normal: imageUrlThird,
		retina: imageUrlThirdRetina,
	},
	{
		normal: imageUrlFourth,
		retina: imageUrlFourthRetina,
	},
	{
		normal: imageUrlFifth,
		retina: imageUrlFifthRetina,
	},
	{
		normal: imageUrlSixth,
		retina: imageUrlSixthRetina,
	},
	{
		normal: imageUrlSeventh,
		retina: imageUrlSeventhRetina,
	},
	{
		normal: imageUrlEighth,
		retina: imageUrlEighthRetina,
	},
];

// const galleryList = document.querySelector('.galery-list');
// galleryList.addEventListener('click', function (event) {
// 	if (window.innerWidth >= 1440 && event.target.nodeName == 'IMG') {
// 		const imgNumber = event.target.src.split('-')[1].split('.')[0];

// 		const img = document.createElement('img');
// 		img.src = imageUrls.find(elem => elem.normal.includes(imgNumber)).normal;
// 		img.srcset = imageUrls.find(elem => elem.normal.includes(imgNumber)).retina + ' 2x';

// 		img.alt = 'Nature in the Ukrainian mountains';
// 		img.id = 'modal-image';
// 		img.addEventListener('click', function () {
// 			modal.close();
// 		});
// 		const wrapper = document.createElement('div');
// 		wrapper.appendChild(img);

// 		const modal = basicLightbox.create(wrapper);
// 		modal.show();
// 	}
// });

const galleryList = document.querySelector('.galery-list');
galleryList.addEventListener('click', function (event) {
	if (window.innerWidth >= 1440 && event.target.nodeName == 'IMG') {
		// const imgNumber = event.target.src.split('-')[1].split('.')[0];

		const img = document.createElement('img');
		img.src = `./gallery-modal-third.jpg`;

		img.alt = 'Nature in the Ukrainian mountains';
		img.id = 'modal-image';
		img.addEventListener('click', function () {
			modal.close();
		});
		const wrapper = document.createElement('div');
		wrapper.appendChild(img);

		const modal = basicLightbox.create(wrapper);
		modal.show();
	}
});
