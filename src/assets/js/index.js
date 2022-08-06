class Cart {
    constructor() {
        this.cart = [];
        this.items = items = [{
            id: 1,
            name: 'Dove Soap',
            price: 39.99
        }, {
            id: 2,
            name: 'Axe Deo',
            price: 99.99
        }];
    }


    getItems() {
        return this.items;
    }


}

console.log(Cart);

export { Cart };

let a = 5;
let b = 5;

let res = a + b;

console.log(res);

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
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
});

// CODE MAPS
mapboxgl.accessToken = 'pk.eyJ1IjoibGVtb256aWxsYWgiLCJhIjoiY2w2Z3Y5aXZjMGczNjNlbzY5bTd0c2RoeiJ9.-W-rYIC6L_dBuRNJAMFBjw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});