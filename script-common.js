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
    (event) => {
        const sliderValue = event.target.value;
        const howlerVolume = parseFloat(sliderValue) / 100;
        sound.volume(howlerVolume);
    });

// --- Footer position

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');

function footerPosition() {
    const windowHeight = window.innerHeight;
    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const mainHeight = main.offsetHeight;

    if ((mainHeight + headerHeight + footerHeight) < windowHeight) {
        footer.classList.add('bottom-footer');
    } else {
        footer.classList.remove('bottom-footer');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    footerPosition();
});

window.addEventListener('resize', footerPosition);
window.addEventListener('load', footerPosition);