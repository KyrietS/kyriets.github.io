var button = document.getElementById("toggle-theme-button");
button.addEventListener("click", toggleTheme);

// When page is loaded restore the theme from local storage
let darkTheme = localStorage.getItem('darkTheme') === 'true';
if (darkTheme) {
    enableDarkTheme();
}

function toggleTheme() {
    if (darkTheme) {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
}

function enableDarkTheme() {
    addDarkStylesheet();
    setHighlightStylesheetToDark();
    setIconToMoon();
    darkTheme = true;
    localStorage.setItem('darkTheme', 'true');
}
function enableLightTheme() {
    removeDarkStylesheet();
    setHighlightStylesheetToLight();
    setIconToSun();
    darkTheme = false;
    localStorage.setItem('darkTheme', 'false')
}

function addDarkStylesheet() {
    var darkStylesheet = document.createElement('link');
    darkStylesheet.id = 'dark-stylesheet';
    darkStylesheet.rel = 'stylesheet';
    darkStylesheet.href = '/css/dark.css';
    document.head.appendChild(darkStylesheet);
}
function removeDarkStylesheet() {
    var darkStylesheet = document.getElementById('dark-stylesheet');
    darkStylesheet.remove();
}

function setHighlightStylesheetToDark() {
    var highlightStylesheet = document.getElementById('highlight-stylesheet');
    highlightStylesheet.href = '/css/highlight-dark.css';
}
function setHighlightStylesheetToLight() {
    var highlightStylesheet = document.getElementById('highlight-stylesheet');
    highlightStylesheet.href = '/css/highlight-light.css';
}

function setIconToMoon() {
    var button = document.getElementById("toggle-theme-button");
    button.innerHTML = '🌚';
}
function setIconToSun() {
    var button = document.getElementById("toggle-theme-button");
    button.innerHTML = '🌞';
}