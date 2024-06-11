"use strict";
class Carousel {
    constructor(carouselSelector, dotsContainerSelector, selectionButtonsSelector) {
        this.carouselSlide = document.querySelector(carouselSelector);
        this.dotsContainer = document.querySelector(dotsContainerSelector);
        this.selectionButtons = document.querySelector(selectionButtonsSelector);
        this.index = 0;
        this.images = [];
        this.icons = [];
        this.init();
    }
    init() {
        if (!this.carouselSlide) {
            console.error(`Element with selector '${this.carouselSlide}' not found.`);
            return;
        }
        this.carouselSlide.style.width = '80%';
        this.carouselSlide.style.height = '80%';
        this.carouselSlide.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.9)';
        this.images = Array.from(this.carouselSlide.querySelectorAll('img'));
        this.images.forEach(image => {
            if (this.index == 0) {
                image.style.display = 'block';
            }
            else {
                image.style.display = 'none';
            }
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.minWidth = '600px';
            image.style.background = 'cover';
        });
        const carouselContainer = this.carouselSlide.parentElement;
        if (carouselContainer) {
            carouselContainer.style.display = 'flex';
            carouselContainer.style.justifyContent = 'center';
            carouselContainer.style.flexDirection = 'column';
            carouselContainer.style.alignItems = 'center';
            carouselContainer.style.width = '90vw';
            carouselContainer.style.margin = 'auto';
        }
        if (!this.selectionButtons) {
            console.error(`Element with selector '${this.selectionButtons}' not found.`);
            return;
        }
        this.selectionButtons.style.display = 'flex';
        this.selectionButtons.style.position = 'absolute';
        this.selectionButtons.style.width = '110%';
        this.selectionButtons.style.justifyContent = 'space-between';
        this.icons = Array.from(this.selectionButtons.querySelectorAll('.icon'));
        this.icons.forEach(icon => {
            icon.style.color = 'black';
            icon.style.fontSize = '20px';
        });
        setInterval(() => {
            this.nextIndex();
        }, 8000);
        this.createDots();
        this.addDotEventListeners();
    }
    nextIndex() {
        this.index >= this.images.length - 1 ? (this.index = 0) : this.index++;
        this.showSlide();
        this.updateDots();
    }
    prevIndex() {
        this.index <= 0 ? (this.index = this.images.length - 1) : this.index--;
        this.showSlide();
        this.updateDots();
    }
    showSlide() {
        this.images.forEach((image, i) => {
            image.style.display = i === this.index ? 'block' : 'none';
            if (i === this.index)
                image.classList.add('animation');
            else
                image.classList.remove('animation');
        });
    }
    createDots() {
        if (!this.dotsContainer) {
            console.error("Dots container not found.");
            return;
        }
        this.images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0)
                dot.classList.add('active');
            if (this.dotsContainer)
                this.dotsContainer.appendChild(dot);
        });
    }
    updateDots() {
        var _a;
        const dots = (_a = this.dotsContainer) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.dot');
        dots === null || dots === void 0 ? void 0 : dots.forEach((dot, i) => {
            if (i === this.index) {
                dot.classList.add('active');
            }
            else {
                dot.classList.remove('active');
            }
        });
    }
    addDotEventListeners() {
        var _a;
        const dots = (_a = this.dotsContainer) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.dot');
        dots === null || dots === void 0 ? void 0 : dots.forEach((dot, dotIndex) => {
            dot.addEventListener('click', () => {
                this.index = dotIndex;
                this.showSlide();
                this.updateDots();
            });
        });
    }
}
// Usage
const carousel = new Carousel('.carousel-slide', '.dots-container', '.selection-buttons');
