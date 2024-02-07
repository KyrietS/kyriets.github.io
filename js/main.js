var button = document.getElementById("toggle-theme-button");
button.addEventListener("click", toggleTheme);

// When page is loaded restore the theme from local storage
if (localStorage.getItem('darkTheme') === 'true') {
    enableDarkTheme();
} else {
    enableLightTheme();
}

function enableDarkTheme() {
    console.log("Dark theme enabled");

    loadDarkStylesheet();
    setIconToMoon();
    localStorage.setItem('darkTheme', 'true');
}
function enableLightTheme() {
    console.log("Light theme enabled");

    unloadDarkStylesheet();
    setIconToSun();
    localStorage.setItem('darkTheme', 'false');
}

function toggleTheme() {
    let darkTheme = localStorage.getItem('darkTheme') === 'true';
    if (darkTheme) {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
}

function loadDarkStylesheet() {
    document.getElementById('dark-stylesheet').rel = 'stylesheet';
    document.getElementById('highlight-dark-stylesheet').rel = 'stylesheet';
    document.getElementById('highlight-light-stylesheet').rel = 'prefetch';
}
function unloadDarkStylesheet() {
    document.getElementById('dark-stylesheet').rel = 'prefetch';
    document.getElementById('highlight-light-stylesheet').rel = 'stylesheet';
    document.getElementById('highlight-dark-stylesheet').rel = 'prefetch';
}

function setIconToMoon() {
    var button = document.getElementById("toggle-theme-button");
    button.innerHTML = '🌚';
}
function setIconToSun() {
    var button = document.getElementById("toggle-theme-button");
    button.innerHTML = '🌞';
}