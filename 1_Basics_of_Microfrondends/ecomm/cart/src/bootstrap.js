import faker from 'faker';

function mount(el) {
  const cartMsg = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartMsg;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) {
    mount(el);
  }
}

export { mount };
