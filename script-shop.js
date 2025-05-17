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

// ----------------- Merch Sort ------------------

const mensMerch = document.querySelectorAll('.mens-merch');
const womensMerch = document.querySelectorAll('.womens-merch');
const accMerch = document.querySelectorAll('.acc-merch');
const allMerch = document.querySelectorAll('.merch-card'); // NodeList
const merchBtns = document.querySelectorAll('.merch-nav-item');
const allBtn = document.querySelector('#all-btn');
const menBtn = document.querySelector('#mens-btn');
const womenBtn = document.querySelector('#womens-btn');
const accBtn = document.querySelector('#acc-btn');

const animationDuration = 500; // 0.5s

function sortMerch() {

    merchBtns.forEach(button => {
        button.addEventListener('click', (event) => {

            merchBtns.forEach(btn => {
                btn.classList.remove('merch-nav-item-active');
            });
            const clickedButton = event.target;
            clickedButton.classList.add('merch-nav-item-active');

            let cardsToShow = [];
            if (allBtn.classList.contains('merch-nav-item-active')) {
                cardsToShow = Array.from(allMerch);
            } else if (menBtn.classList.contains('merch-nav-item-active')) {
                cardsToShow = Array.from(mensMerch);
            } else if (womenBtn.classList.contains('merch-nav-item-active')) {
                cardsToShow = Array.from(womensMerch);
            } else if (accBtn.classList.contains('merch-nav-item-active')) {
                cardsToShow = Array.from(accMerch);
            }

            const cardsToHide = Array.from(allMerch).filter(card => !cardsToShow.includes(card));

            cardsToHide.forEach(card => {

                card.classList.remove('merch-card-hidden-final');
                card.classList.add('merch-card-hidden-animation');

                setTimeout(() => {
                    card.classList.add('merch-card-hidden');
                }, animationDuration);
            });

            cardsToShow.forEach(card => {
                card.classList.remove('merch-card-hidden-animation');
                card.classList.remove('merch-card-hidden');
                card.classList.add('merch-card-appearing');
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    sortMerch();
});