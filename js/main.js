

const images = [
    "img/award_1.png",
    "img/award_2.png",
    "img/award_3.png",
    "img/award_4.png"
];

const track = document.querySelector('.carousel-track');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
const visibleSlides = 3;



//Создаем точки под карусулью
for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        currentIndex = i;
        renderSlides();
    });
    dotsContainer.appendChild(dot);
}


function renderSlides() {
    track.innerHTML = "";

    for (let i = 0; i < visibleSlides; i++) {
        let index = (currentIndex + i) % images.length;

        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.innerHTML = `<img src="${images[index]}" alt="Грамота ${index + 1}">`;
        track.appendChild(slide);
    }

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
    });

}



// Прокрутка тачпадом

let wheelDelta = 0;
track.addEventListener("wheel", (e) => {
    wheelDelta += e.deltaX;

    if (wheelDelta > 100) {
        currentIndex = (currentIndex + 1) % images.length;
        renderSlides();
        wheelDelta = 0;
    } else if (wheelDalta < -100) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderSlides();
        wheelDelta = 0;
    }
}, {passive: true});

renderSlides();

