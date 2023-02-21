//products should match in products federation remotes key in webpack config
import { mount } from 'products/ProductsIndex';
import('cart/CartShow');

console.log('container');
mount(document.querySelector('#my-products'));
