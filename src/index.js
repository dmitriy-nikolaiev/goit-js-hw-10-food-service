import './styles.css';
import menuItems from './menu.json';
import menuListTemplate from './templates/menu-list.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitchRef = bodyRef.querySelector('#theme-switch-toggle');
const menuListRef = bodyRef.querySelector('ul.js-menu');

menuListRef.innerHTML = menuListTemplate(menuItems);

const setTheme = newTheme => {
  if (newTheme === Theme.LIGHT) {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    themeSwitchRef.checked = false;
  } else if (newTheme === Theme.DARK) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    themeSwitchRef.checked = true;
  }
  localStorage.setItem('theme', newTheme);
};

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme ? savedTheme : Theme.LIGHT);

themeSwitchRef.addEventListener('change', event => {
  setTheme(event.target.checked ? Theme.DARK : Theme.LIGHT);
});
