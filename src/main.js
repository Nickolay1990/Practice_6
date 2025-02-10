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

// swap upcoming tours right

document.querySelector('#upcoming-button-right').addEventListener('click', function () {
	if (window.innerWidth < 768) {
		const first = document.querySelector('#first-card');
		const second = document.querySelector('#second-card');
		const third = document.querySelector('#third-card');
		const selected = document.querySelector('.selected-card');
		const fill_button_right = document.querySelector('#right-button-scroll');
		const fill_button_left = document.querySelector('#left-button-scroll');
		if (first == selected) {
			first.classList.remove('selected-card');
			first.classList.add('left-position');

			second.classList.remove('right-position');
			second.classList.add('selected-card');

			fill_button_left.classList.remove('upcoming-list-item-button-pic-disabled');
			fill_button_left.classList.add('upcoming-list-item-button-pic');
		} else if (second == selected) {
			second.classList.remove('selected-card');
			second.classList.add('left-position');

			third.classList.remove('right-position');
			third.classList.add('selected-card');

			fill_button_right.classList.remove('upcoming-list-item-button-pic');
			fill_button_right.classList.add('upcoming-list-item-button-pic-disabled');
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
		const first = document.querySelector('#first-card');
		const second = document.querySelector('#second-card');
		const third = document.querySelector('#third-card');
		const selected = document.querySelector('.selected-card');
		const fill_button_right = document.querySelector('#right-button-scroll');
		const fill_button_left = document.querySelector('#left-button-scroll');
		if (second == selected) {
			first.classList.remove('left-position');
			first.classList.add('selected-card');

			second.classList.remove('selected-card');
			second.classList.add('right-position');

			fill_button_left.classList.remove('upcoming-list-item-button-pic');
			fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');
		} else if (third == selected) {
			second.classList.remove('left-position');
			second.classList.add('selected-card');

			third.classList.remove('selected-card');
			third.classList.add('right-position');

			fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
			fill_button_right.classList.add('upcoming-list-item-button-pic');
		}
	} else {
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

function updateDisplay(event) {
	const list = document.querySelector('#upcoming-tours-list');
	const fill_button_right = document.querySelector('#right-button-scroll');
	const fill_button_left = document.querySelector('#left-button-scroll');
	const first = document.querySelector('#first-card');
	const second = document.querySelector('#second-card');
	const third = document.querySelector('#third-card');
	if (event.matches) {
		list.style.transform = 'none';
		first.classList.remove('right-position', 'left-position');
		first.classList.add('selected-card');

		second.classList.remove('selected-card', 'left-position');
		second.classList.add('right-position');

		third.classList.remove('selected-card', 'left-position');
		third.classList.add('right-position');

		fill_button_left.classList.remove('upcoming-list-item-button-pic');
		fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');

		fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
		fill_button_right.classList.add('upcoming-list-item-button-pic');
	} else {
		list.style.transform = 'none';
		fill_button_left.classList.remove('upcoming-list-item-button-pic');
		fill_button_left.classList.add('upcoming-list-item-button-pic-disabled');

		fill_button_right.classList.remove('upcoming-list-item-button-pic-disabled');
		fill_button_right.classList.add('upcoming-list-item-button-pic');
	}
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

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					if (selectedCard == second_card) {
						first_card.classList.remove('left-position');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('right-position');
					} else if (selectedCard == third_card) {
						second_card.classList.remove('left-position');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('right-position');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('left-position');

						second_card.classList.remove('right-position');
						second_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == second_card) {
						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('left-position');

						third_card.classList.remove('right-position');
						third_card.classList.add('selected-card-modal-days');
					}
				}
			}
		});
	});
});

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

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					console.log('1');
					if (selectedCard == second_card) {
						first_card.classList.remove('left-position');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('right-position');
					} else if (selectedCard == third_card) {
						second_card.classList.remove('left-position');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('right-position');
					} else if (selectedCard == fourd_card) {
						third_card.classList.remove('left-position');
						third_card.classList.add('selected-card-modal-days');

						fourd_card.classList.remove('selected-card-modal-days');
						fourd_card.classList.add('right-position');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('left-position');

						second_card.classList.remove('right-position');
						second_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == second_card) {
						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('left-position');

						third_card.classList.remove('right-position');
						third_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == third_card) {
						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('left-position');

						fourd_card.classList.remove('right-position');
						fourd_card.classList.add('selected-card-modal-days');
					}
				}
			}
		});
	});
});

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

			if (Math.abs(diffX) > 50) {
				if (diffX > 0) {
					if (selectedCard == second_card) {
						first_card.classList.remove('left-position');
						first_card.classList.add('selected-card-modal-days');

						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('right-position');
					} else if (selectedCard == third_card) {
						second_card.classList.remove('left-position');
						second_card.classList.add('selected-card-modal-days');

						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('right-position');
					} else if (selectedCard == fourd_card) {
						third_card.classList.remove('left-position');
						third_card.classList.add('selected-card-modal-days');

						fourd_card.classList.remove('selected-card-modal-days');
						fourd_card.classList.add('right-position');
					} else if (selectedCard == fived_card) {
						fourd_card.classList.remove('left-position');
						fourd_card.classList.add('selected-card-modal-days');

						fived_card.classList.remove('selected-card-modal-days');
						fived_card.classList.add('right-position');
					} else if (selectedCard == sixed_card) {
						fived_card.classList.remove('left-position');
						fived_card.classList.add('selected-card-modal-days');

						sixed_card.classList.remove('selected-card-modal-days');
						sixed_card.classList.add('right-position');
					} else if (selectedCard == sevened_card) {
						sixed_card.classList.remove('left-position');
						sixed_card.classList.add('selected-card-modal-days');

						sevened_card.classList.remove('selected-card-modal-days');
						sevened_card.classList.add('right-position');
					}
				} else {
					if (selectedCard == first_card) {
						first_card.classList.remove('selected-card-modal-days');
						first_card.classList.add('left-position');

						second_card.classList.remove('right-position');
						second_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == second_card) {
						second_card.classList.remove('selected-card-modal-days');
						second_card.classList.add('left-position');

						third_card.classList.remove('right-position');
						third_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == third_card) {
						third_card.classList.remove('selected-card-modal-days');
						third_card.classList.add('left-position');

						fourd_card.classList.remove('right-position');
						fourd_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == fourd_card) {
						fourd_card.classList.remove('selected-card-modal-days');
						fourd_card.classList.add('left-position');

						fived_card.classList.remove('right-position');
						fived_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == fived_card) {
						fived_card.classList.remove('selected-card-modal-days');
						fived_card.classList.add('left-position');

						sixed_card.classList.remove('right-position');
						sixed_card.classList.add('selected-card-modal-days');
					} else if (selectedCard == sixed_card) {
						sixed_card.classList.remove('selected-card-modal-days');
						sixed_card.classList.add('left-position');

						sevened_card.classList.remove('right-position');
						sevened_card.classList.add('selected-card-modal-days');
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

document.querySelectorAll('.reviews-card-review-button').forEach(button => {
	button.addEventListener('click', function () {
		let backblock;
		if (this.classList.contains('to-front')) {
			backblock = this.parentElement.parentElement;
		} else {
			backblock = this.parentElement.parentElement.parentElement;
		}
		backblock.classList.toggle('reviews-go-to-back');
	});
});

// swap gallery right

document.querySelector('#galery-button-right').addEventListener('click', function () {
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
	setTimeout(() => {
		this.disabled = false;
	}, 300);
});

// swap gallery left

document.querySelector('#galery-button-left').addEventListener('click', function () {
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
	setTimeout(() => {
		this.disabled = false;
	}, 300);
});
