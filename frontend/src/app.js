import HomeScreen from './srceens/HomeScreen.js';
import ProductScreen from './srceens/ProductScreen.js';
const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen
}
const router = () => {
  const main = document.getElementById('main-container');
  main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);
