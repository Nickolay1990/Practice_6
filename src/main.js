// DOM elements
const DOM = {
	menuButtons: document.querySelectorAll('[data-menuButton]'),
	contentHero: document.querySelector('.hero .container'),
	darkWindow: document.querySelector('#dark-window'),
	header: document.querySelector('#pageheader'),
	menu: document.querySelector('#mobile-menu'),
	modalButtons: document.querySelectorAll('[data-modal-window]'),
	modal: document.querySelector('#backdrop'),
	upcomingButtonRight: document.querySelector('#upcoming-button-right'),
	upcomingButtonLeft: document.querySelector('#upcoming-button-left'),
	upcomingList: document.querySelector('#upcoming-tours-list'),
	upcomingModalItems: document.querySelectorAll('.upcoming-modal-list-item'),
	upcomingNavButtons: document.querySelectorAll('.upcoming-modal-list-item-listbtn-item'),
	swapCardButtonsList: document.querySelectorAll('.upcoming-modal-list-item-listbtn'),
	upcomingToggleModalButtons: document.querySelectorAll('[data-toggle-modal]'),
	reviewsBlock: document.querySelector('.reviews-block'),
	reviewsCards: document.querySelectorAll('.reviews-inner'),
};

// open and close mobile menu

DOM.menuButtons.forEach(button => button.addEventListener('click', mobileMenuHandler));

function mobileMenuHandler() {
	DOM.menu.classList.toggle('open-menu');
	DOM.darkWindow.classList.toggle('dark-window');
	DOM.header.classList.toggle('padding-for-tablet-menu');
	changeVisuallyHidden([DOM.contentHero, ...DOM.menuButtons]);
}

function changeVisuallyHidden(elements) {
	elements.forEach(element => element.classList.toggle('visually-hidden'));
}

// open and close modal window

DOM.modalButtons.forEach(button => button.addEventListener('click', modalWindowHandler));

function modalWindowHandler() {
	DOM.modal.classList.toggle('is-open');
}

// swap upcoming tours

DOM.upcomingButtonRight.addEventListener('click', upcomingButtonRightHandler);
DOM.upcomingButtonLeft.addEventListener('click', upcomingButtonLeftHandler);

const step = innerWidth < 768 ? 326 : 374;
let translate = 0;

function upcomingButtonRightHandler() {
	translate += step;
	DOM.upcomingList.style.transform = `translate(-${translate}px)`;
	DOM.upcomingButtonLeft.disabled = false;
	if (innerWidth >= 768 || translate === 652) {
		this.disabled = true;
	}
}

function upcomingButtonLeftHandler() {
	translate -= step;
	DOM.upcomingList.style.transform = `translate(-${translate}px)`;
	DOM.upcomingButtonRight.disabled = false;
	if (translate === 0) {
		this.disabled = true;
	}
}

// resize

const breakpoints = [768, 1440, 1920];

breakpoints.forEach(bp => {
	const maxWidth = window.matchMedia(`(max-width: ${bp - 1}px)`);
	const minWidth = window.matchMedia(`(min-width: ${bp}px)`);

	maxWidth.addEventListener('change', resizeHandler);
	minWidth.addEventListener('change', resizeHandler);
});

function resizeHandler(event) {
	if (event.matches) {
		location.reload();
	}
}

// swap upcoming days mobile

document.addEventListener('DOMContentLoaded', swapDays);

const classSelected = 'selected-card-modal-days';
const classRight = 'right-position';
const classLeft = 'left-position';

function swapDays() {
	DOM.upcomingModalItems.forEach((item, index) => {
		let startX = 0;
		let endX = 0;

		item.addEventListener('touchstart', event => {
			startX = event.touches[0].clientX;
		});

		item.addEventListener('touchend', event => {
			endX = event.changedTouches[0].clientX;
			const diffX = endX - startX;

			if (diffX < -50 || diffX > 50) {
				checkCardPosition.call(item, index, diffX);
			}
		});
	});
}

function checkCardPosition(index, diffX) {
	if (this.nextElementSibling && diffX < -50) {
		moveCard(this, classSelected, classLeft);
		moveCard(this.nextElementSibling, classRight, classSelected);
		paintButton(index + 1);
	} else if (this.previousElementSibling && diffX > 50) {
		moveCard(this, classSelected, classRight);
		moveCard(this.previousElementSibling, classLeft, classSelected);
		paintButton(index);
	}
}

function moveCard(card, removeClass, addClass) {
	card.classList.remove(removeClass);
	card.classList.add(addClass);
}

function paintButton(index) {
	DOM.upcomingNavButtons[index].classList.toggle('selected-card-days');
}

// swap upcoming days desctop

if (innerWidth >= 1440) {
	DOM.swapCardButtonsList.forEach(button => button.addEventListener('click', swapDescHandler));
}

function swapDescHandler(event) {
	if (!event.target.classList.contains('upcoming-modal-list-item-listbtn-item')) {
		return;
	}

	const buttons = Array.from(this.children);
	const cards = this.closest('.upcoming-modal').querySelectorAll('.upcoming-modal-list-item');

	paintButtonsDesc(buttons, buttons.indexOf(event.target));
	swapCardsDesc(cards, buttons.indexOf(event.target));
}

function paintButtonsDesc(buttons, index) {
	buttons.forEach((button, i) => {
		if (i > index) {
			button.classList.remove('selected-card-days');
			return;
		}
		button.classList.add('selected-card-days');
	});
}

function swapCardsDesc(cards, index) {
	let classForAdd = classLeft;
	cards.forEach((card, i) => {
		card.classList.remove(classSelected, classRight, classLeft);
		if (i === index) {
			classForAdd = classRight;
			card.classList.add(classSelected);
			return;
		}
		card.classList.add(classForAdd);
	});
}

// open and close upcoming days

DOM.upcomingToggleModalButtons.forEach(button => button.addEventListener('click', openUpcomingModal));

function openUpcomingModal() {
	const modal = document.querySelector(`[data-modal="${this.dataset.toggleModal}"]`);
	modal.classList.toggle('is-open');
}

// reviews show back photo

DOM.reviewsBlock.addEventListener('click', getAroundCard);

function getAroundCard(event) {
	if (!event.target.closest('.reviews-card-review-button')) {
		return;
	}
	const cards = window.innerWidth >= 1440 ? DOM.reviewsCards : [event.target.closest('.reviews-inner')];
	cards.forEach(card => card.classList.toggle('reviews-go-to-back'));
}

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

// open modal gallery

const galleryList = document.querySelector('.galery-list');
galleryList.addEventListener('click', galleryModalHandler);

function galleryModalHandler(event) {
	if (window.innerWidth >= 1440 && event.target.nodeName == 'IMG') {
		const imgNumber = event.target.src.split('-')[1].split('.')[0];
		const modal = basicLightbox.create(`<img
							src="./gallery-modal-${imgNumber}.jpg"
							srcset="./gallery-modal-${imgNumber}@2x.jpg 2x"
							alt="Nature in the Ukrainian mountains"
						/>`);
		modal.show();
	}
}
