

// ----------------- Player ------------------

// --- Play/Pause Animation
const playPauseBtn = document.querySelector('#play-pause-btn');
const playerTitle = document.querySelector('#player-title');
const playerSticks = [
    document.querySelector('#stickA'),
    document.querySelector('#stickB'),
    document.querySelector('#stickC'),
    document.querySelector('#stickD')
]
var sound = new Howl({
    src: ['resources/audios/sound-of-the-space.mp3'],
    loop: true,
    volume: 1,
});

playPauseBtn.addEventListener('click',
    function () {

        if (playPauseBtn.classList.contains('play-btn')) {
            sound.play();
            playPauseBtn.classList.replace('play-btn', 'pause-btn');
            playerTitle.classList.add('animated-player-title');
            playerSticks.forEach(element => {
                element.classList.remove('stick-paused');
            });
        } else {
            sound.stop();
            playPauseBtn.classList.replace('pause-btn', 'play-btn');
            playerTitle.classList.remove('animated-player-title');
            playerSticks.forEach(element => {
                element.classList.add('stick-paused');
            });
        }

    });

// --- Show Volume setting
const volumeBtn = document.querySelector('#volume-btn');
const volumeContainer = document.querySelector('#volume-setting-container');

volumeBtn.addEventListener('click',
    function () {
        if (volumeContainer.classList.contains('volume-setting-container-hidden')) {
            volumeContainer.classList.remove('volume-setting-container-hidden');
        } else {
            volumeContainer.classList.add('volume-setting-container-hidden');
        }
    });

// --- On/Off Volume Icon
const volumeSetting = document.querySelector('#volume-setting');

volumeSetting.addEventListener('input',
    function () {
        if (volumeSetting.value < 1) {
            volumeBtn.classList.add('volume-off-icon');
        } else {
            volumeBtn.classList.remove('volume-off-icon');
        }
    });


// --- Volume Setting
volumeSetting.value = sound.volume() * 100;

volumeSetting.addEventListener('input',
    function () {
    const sliderValue = this.value;
    const howlerVolume = sliderValue / 100;
    sound.volume(howlerVolume);
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
