const themeElem = document.querySelector('#csstheme');
const selectedBtn = document.querySelector('.nav-btn-selected');
const githubBtn = document.querySelector('#nav-btn-github');
const liteBtn = document.querySelector('#lite');

var theme = 'dark';
if (document.cookie != '')
{
	theme = getCookie('theme');
	if (theme == null)
		theme = 'dark';
}
themeElem.href = `/archives/lilacide.github.io/themes/${theme}.css`;

if (selectedBtn)
	setTimeout(() => selectedBtn.classList.add('nav-btn-selected-transition'), 10);

githubBtn.addEventListener('click', () =>
{
	selectedBtn.classList.remove('nav-btn-selected', 'nav-btn-selected-transition');
	githubBtn.classList.add('nav-btn-selected', 'nav-btn-selected-transition');
});

liteBtn.addEventListener('click', () =>
{
	theme = (themeElem.href.endsWith('themes/dark.css')) ? 'lite' : 'dark';
	themeElem.href = `/archives/lilacide.github.io/themes/${theme}.css`;
	setCookie('theme', theme);
});

function setCookie(name, value, days)
{
    var expires = "";
	if (days)
	{
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
	for (var i=0;i < ca.length;i++)
	{
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name)
{   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
