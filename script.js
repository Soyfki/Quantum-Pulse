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
    () => {
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
    () => {
        if (volumeContainer.classList.contains('volume-setting-container-hidden')) {
            volumeContainer.classList.remove('volume-setting-container-hidden');
        } else {
            volumeContainer.classList.add('volume-setting-container-hidden');
        }
    });

// --- On/Off Volume Icon
const volumeSetting = document.querySelector('#volume-setting');

volumeSetting.addEventListener('input',
    () => {
        if (volumeSetting.value < 1) {
            volumeBtn.classList.add('volume-off-icon');
        } else {
            volumeBtn.classList.remove('volume-off-icon');
        }
    });


// --- Volume Setting
volumeSetting.value = sound.volume() * 100;

volumeSetting.addEventListener('input',
    () => {
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

// ----------------- Sub-Menu display ------------------

let openSubMenu = null;

function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
}

function handleMenuInteraction(subMenu) {
    if (openSubMenu === subMenu) {
        subMenu.classList.remove('sub-menu-show');
        openSubMenu = null;
        return;
    }

    if (openSubMenu) {
        openSubMenu.classList.remove('sub-menu-show');
    }

    subMenu.classList.add('sub-menu-show');
    openSubMenu = subMenu;
}

function addToggleEventListener(btn, subMenu) {
    const specificEventHandler = () => {
        handleMenuInteraction(subMenu);
    };

    btn.addEventListener('click', specificEventHandler);

    if (!isTouchDevice()) {
        btn.addEventListener('mouseover', specificEventHandler);
    }
}

addToggleEventListener(document.querySelector('#festival-btn'), document.querySelector('#festival-sub-menu'));
addToggleEventListener(document.querySelector('#medias-btn'), document.querySelector('#medias-sub-menu'));
addToggleEventListener(document.querySelector('#menu-account-btn'), document.querySelector('#account-sub-menu'));

// ----------------- Promo Banner ------------------

const sentenceContainer = document.querySelector('.sentence-container');
const originalSentences = document.querySelectorAll('.sentence');
const banner = document.querySelector('.promos-banner');

const spacingVw = 60;
let spacingPx = 0;

let position = 0;
const speed = 0.5;

let initialPosition = 0;
let totalOriginalWidth = 0;

function calculateSpacingAndApply() {
    spacingPx = (window.innerWidth * spacingVw) / 100;
    originalSentences.forEach(sentence => {
        sentence.style.marginRight = `${spacingPx}px`;
    });

    const clonedSentences = document.querySelectorAll('.sentence-container .sentence:nth-child(n+' + (originalSentences.length + 1) + ')');
    clonedSentences.forEach(sentence => {
        sentence.style.marginRight = `${spacingPx}px`;
    });
}

function cloneSentences() {

    const oldClones = document.querySelectorAll('.sentence-container .sentence:nth-child(n+' + (originalSentences.length + 1) + ')');
    oldClones.forEach(clone => clone.remove());

    originalSentences.forEach(sentence => {
        const clone = sentence.cloneNode(true);
        sentenceContainer.appendChild(clone);
    });
}

function calculateMetrics() {
    const allSentences = document.querySelectorAll('.sentence-container .sentence');
    totalOriginalWidth = 0;
    for(let i = 0; i < originalSentences.length; i++) {
        totalOriginalWidth += originalSentences[i].offsetWidth + spacingPx;
    }
    totalOriginalWidth -= spacingPx;

    initialPosition = (banner.offsetWidth / 2) - (originalSentences[0].offsetWidth / 2);

    position = initialPosition;
    sentenceContainer.style.transform = `translateX(${position}px)`;
}

function animate() {
    position -= speed;

    if (position <= initialPosition - totalOriginalWidth - spacingPx) {
        position = initialPosition;
    }

    sentenceContainer.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    calculateSpacingAndApply();
    cloneSentences();
    calculateMetrics();
});

window.onload = () => {
    calculateSpacingAndApply();
    cloneSentences();
    calculateMetrics();
    animate();
};


// -----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    setInterval(animateCarrousel, 5000); //
});
