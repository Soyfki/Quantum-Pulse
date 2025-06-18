// ----------------- Product Show Images ------------------

function startProduct() {
    const productImg = new Map();

    productImg.set(document.getElementById("product-small-img-1"), document.getElementById("product-big-img-1"));
    productImg.set(document.getElementById("product-small-img-2"), document.getElementById("product-big-img-2"));
    productImg.set(document.getElementById("product-small-img-3"), document.getElementById("product-big-img-3"));

    let savedValue = document.getElementById("product-small-img-1");

    let changeImg = (event) => {
        savedValue.classList.remove('product-img-active');
        productImg.get(savedValue).classList.remove('product-img-show');
        savedValue = event.target;
        savedValue.classList.add('product-img-active');
        productImg.get(savedValue).classList.add('product-img-show');
    }

    productImg.keys().forEach(key => {
        key.addEventListener('click', changeImg)
    })
}

// ----------------- Size selector ------------------

const sizeSelector = document.querySelectorAll('.size-item');

function startSizeSelector() {
    sizeSelector.forEach(size => {
        size.addEventListener('click', (event) => {
            const clickedSize = event.target;
            sizeSelector.forEach(size => {
                size.classList.remove('size-item-active');
            });
            clickedSize.classList.add('size-item-active');
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    startProduct();
    startSizeSelector();
});

// ----------------- Show Product details ------------------

const detailsLine = document.getElementById('product-details-title-line');
const arrow = document.getElementById('small-arrow');
const detailsBlock = document.getElementById('product-details');

detailsLine.addEventListener('click', (event) => {
    arrow.classList.toggle('flipped-arrow');
    detailsBlock.classList.toggle('product-details-showed');
})

