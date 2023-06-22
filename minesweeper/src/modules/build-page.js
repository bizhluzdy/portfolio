/* import image */
import githubDay from '../assets/svg/github.svg'
import rsSchoolDay from '../assets/svg/rs_school.svg'
import githubNight from '../assets/svg/githubNight.svg'
import rsSchoolNight from '../assets/svg/rs_schoolNight.svg'
import { playMenuClickSound } from './sounds';
import { playClickSound } from './sounds';
import { play } from './start-game';
import { load } from './load';
export let volumeSlider = 30;
export let volumeMusic = 30;
export let isCustom = false;
export let isDark = false;
export let gameTitle;
let github;
let rsSchool;
export function applyDarkTheme() {
    const bodyElement = document.body;
    const elements = bodyElement.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('dark-theme');
    }
  }
export function mainMenu() {
    if (document.querySelector('.main')) {
        document.querySelector('.main').remove();
    }
    if (isDark){
        github = githubNight;
        rsSchool = rsSchoolNight;
        gameTitle = "MOONSWEEPER"
    } else {
        github = githubDay
        rsSchool = rsSchoolDay
        gameTitle = "MINESWEEPER"
    }
    document.body.innerHTML += `
    <main class="main">
        <nav class="nav-menu">
          <h1 class="title">${gameTitle}</h1>
          <ul class="nav-list">
            <li class="nav-list__item new-game sound-menu-click">New Game</li>
            <li class="nav-list__item load-game">Load Game</li>
            <li class="nav-list__item resultsbord sound-menu-click">Resultsbord</li>
            <li class="nav-list__item settings sound-menu-click">Settings</li>
          </ul>
        </nav>
        <div class="link-list">
          <a href="https://github.com/bizhluzdy" target="_blank"><img src="${github}" alt="git" class="link-list__git"></a>
          <a href="https://rs.school/" target="_blank"><img src="${rsSchool}" alt="rs" class="link-list__rs"></a>
        </div>
      </main>
    `;
    const settingsbutton = document.querySelector('.settings');
    settingsbutton.addEventListener('click', settings);
    const newGameButton = document.querySelector('.new-game');
    newGameButton.addEventListener('click', newGame)
    const resultsButton = document.querySelector('.resultsbord');
    resultsButton.addEventListener('click', results)
    const loadButton = document.querySelector('.load-game');
    loadButton.addEventListener('click', function() {
    if (localStorage.getItem('save')) {
        load();
    } else {
        playMenuClickSound()
        let popupDeff = `
      <div class="popup-shadow">
      </div>
      <div class="popup">
        <h2 class="title result-game">SAVE NOT FOUND </h2>
        <ul class="nav-list">
          <li class="nav-list__item new-game result-game sound-menu-click" id='new-game'>Start The Game</li>
        </ul>
      </div>
    `;
    const popupContainer = document.createElement('div');
    popupContainer.innerHTML = popupDeff;
    const mainContainer = document.querySelector('.main');
    while (popupContainer.firstChild) {
      mainContainer.appendChild(popupContainer.firstChild);
    }
    if(isDark){
        document.querySelectorAll('.popup-shadow, .popup, .title.result-game, .nav-list, .setting-list__item.victory.result-game, .nav-list__item.victory.result-game.sound-menu-click#victory').forEach(element => {
          element.classList.add('dark-theme');
        });
      }
    const newGameButton = document.querySelector('#new-game');
    newGameButton.addEventListener('click', newGame)
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);
    });
    }
    });
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);

    });

    const bodyElement = document.body;
    if (isDark) {
    bodyElement.classList.add('dark-theme');
    } else {
    bodyElement.classList.remove('dark-theme');
    }
    if (isDark){
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
    } else {
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
    }
}
mainMenu()

function settings() {
    if (isDark){
        github = githubNight
        rsSchool = rsSchoolNight

    } else {
        github = githubDay
        rsSchool = rsSchoolDay
    }
    document.querySelector('.main').remove();
    document.body.innerHTML += `
    <main class="main">
        <nav class="nav-menu">
        <h1 class="title">SETTINGS</h1>
        <ul class="setting-list">
            <li class="setting-list__item">
                <p>Sound Volume</p>
                <input type="range" min="0" max="100" value="50" class="sound" id="sound">
            </li>
            <li class="setting-list__item">
                <p>Music Volume</p>
                <input type="range" min="0" max="100" value="50" class="music" id="music">
            </li>
            <li class="setting-list__item">
                <p>Language</p>
                <div>
                    <input type="radio" id="eng" name="lang" value="eng" checked="checked">
                    <label for="eng" class="sound-menu-click">ENG</label>
                    <input type="radio" id="bel" name="lang" value="bel">
                    <label for="bel" class="sound-menu-click">BEL</label>
                    <input type="radio" id="rus" name="lang" value="rus">
                    <label for="rus" class="sound-menu-click">RUS</label>  
                </div>
            </li>
            <li class="setting-list__item">
                <p style="width: 72px;">Theme</p>
                <div>
                    <input type="radio" id="light" name="theme" value="light">
                    <label for="light" class="sound-menu-click">Light</label>
                    <input type="radio" id="dark" name="theme" value="dark">
                    <label for="dark" class="sound-menu-click">Dark</label>
                </div>
            </li>
            <li class="nav-list__item back sound-menu-click">Back</li>
        </ul>
        </nav>
        <div class="link-list">
        <a href="https://github.com/bizhluzdy" target="_blank"><img src="${github}" alt="git" class="link-list__git"></a>
        <a href="https://rs.school/" target="_blank"><img src="${rsSchool}" alt="rs" class="link-list__rs"></a>
        </div>
    </main>
    `
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', mainMenu);;
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);
    });
    const soundSlider = document.getElementById('sound');
    soundSlider.value = volumeSlider;

    soundSlider.addEventListener('change', function () {
        volumeSlider = soundSlider.value;
    });

    const musicSlider = document.getElementById('music');
    musicSlider.value = volumeMusic;

    musicSlider.addEventListener('change', function () {
        volumeMusic = musicSlider.value;
    });
    const bodyElement = document.body;
    if (isDark) {
    bodyElement.classList.add('dark-theme');
    } else {
    bodyElement.classList.remove('dark-theme');
    }
    if (isDark){
        document.getElementById('dark').checked = true;
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
    } else {
        document.getElementById('light').checked = true;
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
    }
    function ThemeChange(event) {
        const bodyElement = document.body;
        if (!isDark) {
        bodyElement.classList.add('dark-theme');
        } else {
        bodyElement.classList.remove('dark-theme');
        }
        if (event.target.value === 'light') {
          isDark = false;
          document.getElementById('dark').checked = false;
          const elements = bodyElement.getElementsByTagName('*');
          for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
        } else if (event.target.value === 'dark') {
          isDark = true;
          document.getElementById('light').checked = false;
          const elements = bodyElement.getElementsByTagName('*');
          for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
        }
        settings()
      }
      document.getElementsByName('theme').forEach(function(radio) {
        radio.addEventListener('change', ThemeChange);
      });
}
export function newGame() {
    if (isDark){
        github = githubNight
        rsSchool = rsSchoolNight
    } else {
        github = githubDay
        rsSchool = rsSchoolDay
    }
    document.querySelector('.main').remove();
    isCustom = false;
    document.body.innerHTML += `
    <main class="main">
        <nav class="nav-menu">
        <h1 class="title">NEW GAME</h1>
        <ul class="setting-list">
            <li class="setting-list__item">
                <p>Difficulty</p>
                <div class="diff-block">
                    <input type="radio" id="easy" name="difficulty" value="Easy">
                    <label for="easy" class="difficulty sound-menu-click">Easy</label>
                    <input type="radio" id="normal" name="difficulty" value="Normal">
                    <label for="normal" class="difficulty sound-menu-click">Normal</label>
                    <input type="radio" id="hard" name="difficulty" value="Hard">
                    <label for="hard" class="difficulty sound-menu-click">Hard</label>  
                </div>
            </li>
            <li class="setting-list__item">
                <p>Nickname</p>
                    <input type="text" class="sound-menu-click" id="username" name="user" value="" maxlength="12" autocomplete="off" placeholder="Enter here">
            </li>
            <li class="setting-list__item"><button id="play" disabled>Play</button></li>
            <li class="nav-list__item custom-game sound-menu-click">Custom Game</li>
            <li class="nav-list__item rules sound-menu-click">Rules</li>
            <li class="nav-list__item back sound-menu-click">Back</li>
        </ul>
        </nav>
        <div class="link-list">
        <a href="https://github.com/bizhluzdy" target="_blank"><img src="${github}" alt="git" class="link-list__git"></a>
        <a href="https://rs.school/" target="_blank"><img src="${rsSchool}" alt="rs" class="link-list__rs"></a>
        </div>
    </main>
    `
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', mainMenu);
    const rulesButton = document.querySelector('.rules');
    rulesButton.addEventListener('click', rules);
    const customGameButton = document.querySelector('.custom-game');
    customGameButton.addEventListener('click', customGame);

    const difficultyRadios = document.querySelectorAll("input[name='difficulty']");
    const userName = document.querySelector('#username');
    const playButton = document.getElementById("play");

    difficultyRadios.forEach(function (radio) {
        radio.addEventListener("change", checkForms);
    });

    userName.addEventListener('input', checkForms);

    function checkForms() {
        const isDifficultySelected = Array.from(difficultyRadios).some(radio => radio.checked);
        const isUserNameFilled = userName.value !== '';

        playButton.disabled = !(isDifficultySelected && isUserNameFilled);
    }
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);
    });
    document.querySelector('#play').addEventListener('click', playClickSound);
    playButton.addEventListener('click', play);
    const bodyElement = document.body;
    if (isDark) {
    bodyElement.classList.add('dark-theme');
    } else {
    bodyElement.classList.remove('dark-theme');
    }
    if (isDark){
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
    } else {
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
    }
}
function rules() {
    if (isDark){
        github = githubNight
        rsSchool = rsSchoolNight
        console.log('sdada123')
    } else {
        github = githubDay
        rsSchool = rsSchoolDay
    }
    document.querySelector('.main').remove();
    document.body.innerHTML += `
    <main class="main">
        <nav class="nav-menu">
        <h1 class="title">RULES</h1>
        <ul class="setting-list">
            <p>The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells. The number on a cell shows the number of mines adjacent to it. Using this information, you can determine cells that are safe, and cells that contain mines. Cells suspected of being mines can be marked with a flag using the right mouse button.</p>
            <li class="nav-list__item back sound-menu-click">Back</li>
        </ul>
        </nav>
        <div class="link-list">
        <a href="https://github.com/bizhluzdy" target="_blank"><img src="${github}" alt="git" class="link-list__git"></a>
        <a href="https://rs.school/" target="_blank"><img src="${rsSchool}" alt="rs" class="link-list__rs"></a>
        </div>
    </main>
    `
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', newGame);
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);
    });
    const bodyElement = document.body;
    if (isDark) {
    bodyElement.classList.add('dark-theme');
    } else {
    bodyElement.classList.remove('dark-theme');
    }
    if (isDark){
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
    } else {
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
    }
}
function results() {
    if (isDark){
        github = githubNight
        rsSchool = rsSchoolNight
    } else {
        github = githubDay
        rsSchool = rsSchoolDay
    }
    if (document.querySelector('.main')) {
      document.querySelector('.main').remove();
    }
    
    document.body.innerHTML += `
      <main class="main">
        <nav class="nav-menu">
          <h1 class="title">RESULTS</h1>
          <ul class="nav-list">
            <li class="setting-list__item result">Size Mines Time </li>
            <li class="nav-list__item back sound-menu-click">Back</li>
          </ul>
          
        </nav>
        
      </main>
    `;
  
    const resultsList = JSON.parse(localStorage.getItem('results')) || [];
  
    resultsList.forEach((result) => {
      const { name, size, bombs, timer } = result;
      const resultItem = `
        <li class="setting-list__item result">
          <div><span class="name">${name}</span></div>
          <div><span class="size">${size}</span> <span class="bombss">${bombs}</span> <span class="timer">${timer}</span></div>
        </li>
      `;
      const navList = document.querySelector('.result');
      navList.insertAdjacentHTML('afterend', resultItem);
    });
  
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', mainMenu);
    
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
      element.addEventListener('click', playMenuClickSound);
    });
    const bodyElement = document.body;
    if (isDark) {
    bodyElement.classList.add('dark-theme');
    } else {
    bodyElement.classList.remove('dark-theme');
    }
    if (isDark){
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
    } else {
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
    }
  }
function customGame() {
    if (isDark){
        github = githubNight
        rsSchool = rsSchoolNight
        console.log('sdada123')
    } else {
        github = githubDay
        rsSchool = rsSchoolDay
    }
    if (document.querySelector('.main')) {
        document.querySelector('.main').remove();
    }
    isCustom = true
    document.body.innerHTML += `
    <main class="main">
        <nav class="nav-menu">
          <h1 class="title">CUSTOM GAME</h1>
          <ul class="nav-list">
            <li class="setting-list__item">
                <p>Field Width</p>
                <input type="range" min="1" max="30" value="10" class="music" id="fieldW">
                <div id="widthtVal"></div>
            </li>
            <li class="setting-list__item">
                <p>Field Height <span class="disrc">less than width</span></p>
                <input type="range" min="1" max="30" value="10" class="music" id="fieldH">
                <div id="heightVal"></div>
            </li>
            <li class="setting-list__item">
                <p>Number of Minese</p>
                <input type="range" min="1" max="100" value="10" class="music" id="fieldM">
                <div id="bombVal"></div>
            </li>
            <li class="setting-list__item">
                <p>Nickname</p>
                    <input type="text" class="sound-menu-click" id="username" name="user" value="" maxlength="12" autocomplete="off" placeholder="Enter here">
            </li>
            <li class="setting-list__item "><button id="play" disabled>Play</button></li>
            <li class="nav-list__item back sound-menu-click">Back</li>
          </ul>
        </nav>
        <div class="link-list">
          <a href="https://github.com/bizhluzdy" target="_blank"><img src="${github}" alt="git" class="link-list__git"></a>
          <a href="https://rs.school/" target="_blank"><img src="${rsSchool}" alt="rs" class="link-list__rs"></a>
        </div>
      </main>
    `;
    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', newGame);


    const valueW = document.querySelector("#widthtVal")
    const inputW = document.querySelector("#fieldW")
    valueW.textContent = inputW.value
    inputW.addEventListener("input", (event) => {
        valueW.textContent = event.target.value
    })
    const valueH = document.querySelector("#heightVal")
    const inputH = document.querySelector("#fieldH")
    valueH.textContent = inputH.value
    inputH.addEventListener("input", (event) => {
        valueH.textContent = event.target.value
    })
    const valueM = document.querySelector("#bombVal")
    const inputM = document.querySelector("#fieldM")
    valueM.textContent = inputM.value
    inputM.addEventListener("input", (event) => {
        valueM.textContent = event.target.value
    })
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);
    });

    const userName = document.querySelector('#username');
    const fieldWidthInput = document.getElementById('fieldW');
    const fieldHeightInput = document.getElementById('fieldH');
    const playButton = document.getElementById("play");

    userName.addEventListener('input', checkForms);
    fieldHeightInput.addEventListener('input', checkForms);
    fieldWidthInput.addEventListener('input', checkForms);

    function checkForms() {
        const isUserNameFilled = userName.value !== '';
        const widthValue = parseInt(fieldWidthInput.value);
        const heightValue = parseInt(fieldHeightInput.value);
        const isHeightGreaterThanWidth = heightValue > widthValue;

        playButton.disabled = !isUserNameFilled || isHeightGreaterThanWidth;
    }

    document.querySelector('#play').addEventListener('click', playClickSound);
    playButton.addEventListener('click', play);
    const bodyElement = document.body;
    if (isDark) {
    bodyElement.classList.add('dark-theme');
    } else {
    bodyElement.classList.remove('dark-theme');
    }
    if (isDark){
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('dark-theme');
        }
    } else {
        const elements = bodyElement.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('dark-theme');
        }
    }
}

