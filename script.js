console.log('testA');


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function rotateCarrousel() {
    const imageA = document.querySelector('#landing-merch-img1');
    const imageB = document.querySelector('#landing-merch-img2');
    const imageC = document.querySelector('#landing-merch-img3');

    console.log('test1');

        await wait(5000);

        // console.log('test2');
        // imageA.classList.remove('landing-merch-img-left');
        // imageB.classList.remove('landing-merch-img-center');
        // imageC.classList.remove('landing-merch-img-right');
        //
        // console.log('test3');
        //
        // imageC.classList.add('landing-merch-img-left');
        // imageA.classList.add('landing-merch-img-center');
        // imageB.classList.add('landing-merch-img-right');

        imageA.classList.replace('landing-merch-img-left', 'landing-merch-img-center');
        imageB.classList.replace('landing-merch-img-center', 'landing-merch-img-right');
        imageC.classList.replace('landing-merch-img-right', 'landing-merch-img-left');

        console.log('test4');
        await wait(5000);

        // imageC.classList.remove('landing-merch-img-left');
        // imageA.classList.remove('landing-merch-img-center');
        // imageB.classList.remove('landing-merch-img-right');
        //
        // imageB.classList.add('landing-merch-img-left');
        // imageC.classList.add('landing-merch-img-center');
        // imageA.classList.add('landing-merch-img-right');

        imageA.classList.replace('landing-merch-img-center', 'landing-merch-img-right');
        imageB.classList.replace('landing-merch-img-right', 'landing-merch-img-left');
        imageC.classList.replace('landing-merch-img-left', 'landing-merch-img-center');

        await wait(5000);

        // imageB.classList.remove('landing-merch-img-left');
        // imageC.classList.remove('landing-merch-img-center');
        // imageA.classList.remove('landing-merch-img-right');
        //
        // imageA.classList.add('landing-merch-img-left');
        // imageB.classList.add('landing-merch-img-center');
        // imageC.classList.add('landing-merch-img-right');

        imageA.classList.replace('landing-merch-img-right', 'landing-merch-img-left');
        imageB.classList.replace('landing-merch-img-left', 'landing-merch-img-center');
        imageC.classList.replace('landing-merch-img-center', 'landing-merch-img-right');

}

rotateCarrousel();

document.addEventListener('DOMContentLoaded', () => {
    rotateCarrousel();
});

console.log('testB');