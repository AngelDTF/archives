const themeElem = document.querySelector('#csstheme');
const selectedBtn = document.querySelector('.nav-btn-selected');
const githubBtn = document.querySelector('#nav-btn-github');
const liteBtn = document.querySelector('#lite');

if (selectedBtn)
	setTimeout(() => selectedBtn.classList.add('nav-btn-selected-transition'), 10);

githubBtn.addEventListener('click', () =>
{
	selectedBtn.classList.remove('nav-btn-selected', 'nav-btn-selected-transition');
	githubBtn.classList.add('nav-btn-selected', 'nav-btn-selected-transition');
});

liteBtn.addEventListener('click', () =>
{
	var newTheme = (themeElem.href.endsWith('themes/dark.css')) ? 'lite' : 'dark';
	themeElem.href = `themes/${newTheme}.css`;
});
