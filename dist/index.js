"use strict";
// Grabbing the element with class "carousel-slide"
const carouselSlide = document.querySelector('.carousel-slide');
const dotsContainer = document.querySelector('.dots-container');
const images = document.querySelectorAll('.carousel-slide img');
// Checking if the element was found
if (carouselSlide instanceof HTMLElement) {
    carouselSlide.style.width = '80%';
    carouselSlide.style.height = '80%';
    carouselSlide.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.9)';
    // Grabbing all images inside the carousel-slide element
    const images = carouselSlide.getElementsByTagName('img');
    // Looping through each image and resizing it
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        const image = images[i];
        // Setting new width and height
        image.style.width = '100%'; // Change this to your desired width
        image.style.height = '100%'; // Change this to your desired height
        image.style.background = 'cover';
        image.style.minWidth = '600px';
    }
}
else {
    console.error("Element with class 'carousel-slide' not found.");
}
const carouselContainer = document.querySelector('.carousel-container');
// Checking if the element was found
if (carouselContainer instanceof HTMLElement) {
    // Setting the necessary CSS styles
    carouselContainer.style.display = 'flex';
    carouselContainer.style.justifyContent = 'center';
    carouselContainer.style.flexDirection = 'column';
    carouselContainer.style.alignItems = 'center';
    carouselContainer.style.width = '90vw';
    carouselContainer.style.margin = 'auto';
}
else {
    console.error("Element with class 'carousel-container' not found.");
}
const selectionButtons = document.querySelector('.selection-buttons');
// Checking if the element was found
if (selectionButtons instanceof HTMLElement) {
    // Setting the necessary CSS styles
    selectionButtons.style.display = 'flex';
    selectionButtons.style.position = 'absolute';
    selectionButtons.style.width = '110%';
    selectionButtons.style.justifyContent = 'space-between';
}
else {
    console.error("Element with class 'carousel-container' not found.");
}
const icons = document.querySelectorAll('.icon');
// Checking if any icons were found
if (icons.length > 0) {
    // Looping through each icon and setting its color and font size
    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        icon.style.color = 'black';
        icon.style.fontSize = '20px';
    }
}
else {
    console.error("No elements with class 'icon' found.");
}
//Image carousel logic
let index = 0;
initalizeSlider();
function initalizeSlider() {
    if (carouselSlide instanceof HTMLElement) {
        const images = carouselSlide.getElementsByTagName('img');
        console.log(images);
        images[index].style.display = 'block'; //Displaying the first image while the screen loads
        createDots();
        setInterval(nextIndex, 8000); //Shifts to the next image after 10 seconds
        addDotEventListeners();
    }
    else {
        console.error("Element with class 'carousel-slide' not found.");
    }
}
//Incrementing the index
function nextIndex() {
    console.log(index);
    index >= 4 ? index = 0 : index++;
    showSlide(index);
    updateDots();
}
//Going to the previous index
function prevIndex() {
    index <= 0 ? index = 4 : index--;
    showSlide(index);
    updateDots();
}
//Showing the image
function showSlide(index) {
    if (carouselSlide instanceof HTMLElement) {
        const images = carouselSlide.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            i === index ? images[i].style.display = 'block' : images[i].style.display = 'none';
            images[index].classList.add('animation');
        }
    }
    else {
        console.error("Element with class 'carousel-slide' not found.");
    }
}
//Creating the dots
function createDots() {
    if (dotsContainer instanceof HTMLElement) {
        images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dotsContainer.appendChild(dot);
        });
    }
    else {
        console.error("Dots container not found.");
    }
}
//Making the relevent dot as active
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        }
        else {
            dot.classList.remove('active');
        }
    });
}
//Clicking on the dots to go to the next image  
function addDotEventListeners() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            index = dotIndex;
            showSlide(index);
            updateDots();
        });
    });
}
