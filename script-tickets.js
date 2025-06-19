// ----------------- Add and remove tickets ------------------

function ticketQuantity(card) {
    const removeBtn = card.querySelector('.cart-item-quantity-remove');
    const addBtn = card.querySelector('.cart-item-quantity-add');
    const quantityValue = card.querySelector('.cart-item-quantity-number');

    let quantity = parseInt(quantityValue.textContent);

    addBtn.addEventListener('click', (e) => {
        quantity++;
        quantityValue.textContent = quantity;
    });

    removeBtn.addEventListener('click', (e) => {
        if (quantity > 0) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const ticketCards = document.querySelectorAll('.ticket-card');

    ticketCards.forEach(card => {
        ticketQuantity(card);
    });
});