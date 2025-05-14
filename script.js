// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// async function rotateCarrousel() {
//     const imageA = document.querySelector('#landing-merch-img1');
//     const imageB = document.querySelector('#landing-merch-img2');
//     const imageC = document.querySelector('#landing-merch-img3');
//
//     console.log('test1');
//
//     await wait(5000);
//     imageA.classList.replace('landing-merch-img-left', 'landing-merch-img-center');
//     imageB.classList.replace('landing-merch-img-center', 'landing-merch-img-right');
//     imageC.classList.replace('landing-merch-img-right', 'landing-merch-img-left');
//
//     console.log('test4');
//     await wait(5000);
//
//     imageA.classList.replace('landing-merch-img-center', 'landing-merch-img-right');
//     imageB.classList.replace('landing-merch-img-right', 'landing-merch-img-left');
//     imageC.classList.replace('landing-merch-img-left', 'landing-merch-img-center');
//
//     await wait(5000);
//
//     imageA.classList.replace('landing-merch-img-right', 'landing-merch-img-left');
//     imageB.classList.replace('landing-merch-img-left', 'landing-merch-img-center');
//     imageC.classList.replace('landing-merch-img-center', 'landing-merch-img-right');
//
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//     rotateCarrousel();
// });
//
// console.log('testB');

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// const imageElements = [
//     document.querySelector('#landing-merch-img1'),
//     document.querySelector('#landing-merch-img2'),
//     document.querySelector('#landing-merch-img3')
// ];
//
// let currentIndex = 0;
//
// async function animateCarrousel() {
//
//     const left = (currentIndex + imageElements.length - 1) % imageElements.length;
//     const center = currentIndex % imageElements.length;
//     const right = (currentIndex + 1) % imageElements.length;
//
//
//     imageElements[left].classList.add('translate-center');
//
//     await wait(1);
//
//     imageElements[left].classList.remove('translate-center');
//
//     imageElements.forEach(
//         element => element.classList.remove('landing-merch-img-left', 'landing-merch-img-center', 'landing-merch-img-right')
//     );
//
//     imageElements[left].classList.add('landing-merch-img-center');
//     imageElements[center].classList.add('landing-merch-img-right');
//     imageElements[right].classList.add('landing-merch-img-left');
//
//     currentIndex = (currentIndex + 1) % imageElements.length;
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//
//     setInterval(animateCarrousel, 5000);
//
// });

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
