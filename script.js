// ----------------- Player ------------------

const playPauseBtn = document.querySelector('#play-pause-btn');
const playerTitle = document.querySelector('#player-title');

playPauseBtn.addEventListener('click',
    function(){

    if (playPauseBtn.classList.contains('play-btn')) {
        // playPauseBtn.classList.remove('play-btn');
        // playPauseBtn.classList.add('pause-btn');
        playPauseBtn.classList.replace('play-btn', 'pause-btn');
        playerTitle.classList.add('animated-player-title');
    } else {
        // playPauseBtn.classList.remove('pause-btn');
        // playPauseBtn.classList.add('play-btn');
        playPauseBtn.classList.replace('pause-btn', 'play-btn');
        playerTitle.classList.remove('animated-player-title');
    }

});

// ----------------- Merch carousel ------------------

const imageElements = [
    document.querySelector('#landing-merch-img1'),
    document.querySelector('#landing-merch-img2'),
    document.querySelector('#landing-merch-img3')
];

let currentIndex = 1;

function animateCarrousel() {

    const left = (currentIndex + imageElements.length - 1) % imageElements.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % imageElements.length;

    imageElements.forEach(
        element => element.classList.remove('landing-merch-img-left', 'landing-merch-img-center', 'landing-merch-img-right')
    );

    imageElements[left].classList.add('landing-merch-img-center');
    imageElements[center].classList.add('landing-merch-img-right');
    imageElements[right].classList.add('landing-merch-img-left');

    currentIndex = left;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(animateCarrousel, 5000); //
});
