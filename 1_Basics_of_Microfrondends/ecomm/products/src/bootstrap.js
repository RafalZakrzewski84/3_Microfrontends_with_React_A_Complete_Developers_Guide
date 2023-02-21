import faker from 'faker';

function mount(el) {
  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

//used locally in index.html in products project
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

//use in development and in production in container project
export { mount };
