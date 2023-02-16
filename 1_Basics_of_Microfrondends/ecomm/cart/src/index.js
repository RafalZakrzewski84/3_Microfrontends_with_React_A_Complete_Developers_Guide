import faker from 'faker';

const cartMsg = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.getElementById('dev-cart').innerHTML = cartMsg;
