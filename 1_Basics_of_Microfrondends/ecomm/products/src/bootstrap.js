import faker from 'faker';

console.log('From products');

let products = '';

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

const devProducts = document.getElementById('dev-products');
devProducts.innerHTML = products;
