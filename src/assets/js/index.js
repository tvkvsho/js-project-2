// Swiper slider initiation
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// SWIPER NEWS
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
});

// Map Box
mapboxgl.accessToken = 'pk.eyJ1IjoibGVtb256aWxsYWgiLCJhIjoiY2w2Z3Y5aXZjMGczNjNlbzY5bTd0c2RoeiJ9.-W-rYIC6L_dBuRNJAMFBjw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/lemonzillah/cl6gvddyc000015t7xhcf3rlk', // style URL
    center: [-122.11, 37.42], // starting position [lng, lat]
    zoom: 13, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

// HOVER EFFECTS
let menuItems = document.querySelectorAll('.menu__item');
let menuItem = document.querySelectorAll('.menu__dot');
let socialItems = document.querySelectorAll('.social__item');
let arrowBtn = document.querySelector('.header__arrow');

// menu hover
function menuHover() {
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener('mouseover', () => {
            for(let j = 0; j < menuItem.length; j++){
                menuItem[i].classList.add('white')
                menuItem[i].setAttribute('style', 'transition: ease-in-out 0.3s')
            }
        })
        menuItems[i].addEventListener('mouseout', () => {
            for(let j = 0; j < menuItem.length; j++){
                menuItem[i].classList.remove('white')
                menuItem[i].setAttribute('style', 'transition: ease-in-out 0.3s')
            }
        })
    }
}
menuHover();

// social hover
function socialHover () {
    for (let i = 0; i < socialItems.length; i++){
        socialItems[i].addEventListener('mouseover', () => {
            socialItems[i].setAttribute('style', 'transform: scale(1.2); transition: ease-in-out 0.3s')
        })
        socialItems[i].addEventListener('mouseout', () => {
            socialItems[i].setAttribute('style', 'transform: scale(1); transition: ease-in-out 0.3s')
        })
    }
}
socialHover()
console.log('hover effects')

// button hover
let btns = document.querySelectorAll('.button');
function btnHover () {
    btns.forEach(function (button){
        button.addEventListener('mouseover', () => {
            button.classList.add('black')
            button.setAttribute('style', 'transition: ease-in-out 0.3s')
        })
        button.addEventListener('mouseout', () => {
            button.classList.remove('black')
            button.setAttribute('style', 'transition: ease-in-out 0.3s')
        })
    })
} btnHover()

// gallery hover
let photos = document.querySelectorAll('.gallery__img');
let galleryModal = document.querySelector('.modal');
let galleryModalContainer = document.querySelector('.modal__container');

function galleryHover() {
    photos.forEach(function (photo){
        photo.addEventListener('mouseover', () => {
            photo.setAttribute('style', 'transform: scale(1.2); transition: all 0.3s')
        })
        photo.addEventListener('mouseout', () => {
            photo.setAttribute('style', 'transform: scale(1); transition: all 0.3s')
        })
    })
} galleryHover()

// GALLERY MODAL
document.querySelectorAll('.gallery__img').forEach(function (photo){
    photo.addEventListener('click', () => {
        let imgSrc = photo.getAttribute('src');
        galleryModal.innerHTML = `
            <i class="fa-solid fa-xmark modal__close"></i>
            <img class="gallery__modal-img" src="${imgSrc}">
        `
        galleryModalContainer.style.display = 'block';
        document.querySelector('.modal').style.display = 'block'
        document.querySelector('.gallery__icon').style.display = 'none'
        document.querySelector('body').style.overflow = 'hidden'

        document.querySelector('.modal__close').addEventListener('click', () => {
            galleryModalContainer.style.display = 'none';
            document.querySelector('.modal').style.display = 'none'
            document.querySelector('.gallery__icon').style.display = 'block'
            document.querySelector('body').style.overflow = 'scroll'
        })
    })
})

//SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FORM VALIDATION
let formOne = document.querySelector('.contact__form');
let formInputs = document.querySelectorAll('.contact__inp');

formOne.onsubmit = function () {
    formInputs.forEach(function (input){
        if(input.value === ''){
            input.classList.add('error')
        } else {
            input.classList.remove('error')
            document.querySelector('.fieldset').innerHTML = `<p class="form__success">Your request was successfully submitted</p>`
        }
    })

    console.log('THE FORM IS WORKING')
    return false;
}