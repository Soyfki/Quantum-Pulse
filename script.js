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

// let openSubMenu = undefined;
//
// function addToggleEventListener(btn, subMenu) {
//     const eventHandler = () => {
//         if (openSubMenu === subMenu) {
//             // If the clicked/hovered menu is already open, close it.
//             subMenu.classList.remove('sub-menu-show');
//             openSubMenu = null;
//             return;
//         }
//
//         // If another menu is open, close it.
//         if (openSubMenu) {
//             openSubMenu.classList.remove('sub-menu-show');
//         }
//
//         // Open the new menu.
//         subMenu.classList.add('sub-menu-show');
//         openSubMenu = subMenu;
//     };
//
//     btn.addEventListener('click', eventHandler);
//     btn.addEventListener('mouseover', eventHandler);
//     subMenu.addEventListener('mouseleave', eventHandler);
// }
//
// addToggleEventListener(document.querySelector('#festival-btn'), document.querySelector('#festival-sub-menu'));
// addToggleEventListener(document.querySelector('#medias-btn'), document.querySelector('#medias-sub-menu'));
// addToggleEventListener(document.querySelector('#menu-account-btn'), document.querySelector('#account-sub-menu'));

let openSubMenu = undefined;

function isTouchDevice() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

function addToggleEventListener(btn, subMenu) {
    const eventHandler = (event) => {
        // Prevent the default action for 'click' on touch devices to avoid potential issues
        if (isTouchDevice() && event.type === 'click') {
            event.preventDefault();
        }

        // If the clicked/hovered menu is already open, close it.
        if (openSubMenu === subMenu) {
            subMenu.classList.remove('sub-menu-show');
            openSubMenu = null;
            return;
        }

        // If another menu is open, close it.
        if (openSubMenu) {
            openSubMenu.classList.remove('sub-menu-show');
        }

        // Open the new menu.
        subMenu.classList.add('sub-menu-show');
        openSubMenu = subMenu;
    };

    const touchDevice = isTouchDevice();

    if (touchDevice) {
        // Only use 'click' on touch devices
        btn.addEventListener('click', eventHandler);
        // On touch devices, you might want a different way to close the menu,
        // like clicking outside of it. The current mouseleave won't work here.
        // You might need to add a global click listener to close the menu
        // when clicking anywhere else on the page.
    } else {
        // Use 'click' and 'mouseover' on non-touch devices
        btn.addEventListener('click', eventHandler);
        btn.addEventListener('mouseover', eventHandler);
        subMenu.addEventListener('mouseleave', eventHandler);
    }
}

addToggleEventListener(document.querySelector('#festival-btn'), document.querySelector('#festival-sub-menu'));
addToggleEventListener(document.querySelector('#medias-btn'), document.querySelector('#medias-sub-menu'));
addToggleEventListener(document.querySelector('#menu-account-btn'), document.querySelector('#account-sub-menu'));

// -----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    setInterval(animateCarrousel, 5000); //
});
