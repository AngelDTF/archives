const selectedBtn = document.querySelector('.nav-btn-selected');
const githubBtn = document.querySelector('#nav-btn-github');

if (selectedBtn)
	setTimeout(() => selectedBtn.classList.add('nav-btn-selected-transition'), 10);

githubBtn.addEventListener('click', () =>
{
	selectedBtn.classList.remove('nav-btn-selected', 'nav-btn-selected-transition');
	githubBtn.classList.add('nav-btn-selected-transition');
});
