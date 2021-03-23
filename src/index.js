import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitchRef = bodyRef.querySelector('#theme-switch-toggle');
const menuListRef = bodyRef.querySelector('ul.js-menu');

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
if (savedTheme === null) {
  // localStorage.setItem('theme', Theme.LIGHT);
  setTheme(Theme.LIGHT);
} else {
  setTheme(savedTheme);
}

themeSwitchRef.addEventListener('change', event => {
  if (event.target.checked) {
    setTheme(Theme.DARK);
  } else {
    setTheme(Theme.LIGHT);
  }
});

// console.log(menuListRef);
