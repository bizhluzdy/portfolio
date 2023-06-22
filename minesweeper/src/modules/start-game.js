
import { playMenuClickSound } from './sounds';
import { playAddflagSound } from './sounds';
import { playVictorySound } from './sounds';
import { playOpenBrickSound } from './sounds';
import { playDefeatSound } from './sounds';
import { mainMenu } from './build-page'
import { newGame } from './build-page'
import { updateResults } from './results'
import { isDark } from './build-page'
let bordersPlayMenu = `
    <main class="main">
        <h1 class="title game-title">MINESWEEPER</h1>
        <div class="game-info" id="push-here">
          <div class="info-wrapper">Bombs:<span id="bombs">0</span></div>
          <div class="info-wrapper">Flags:<span id="flags">0</span></div>
        </div>
        <div class="game-info">
          <div class="info-wrapper">Time:<span id="time">00:00</span></div>
          <div class="info-wrapper">Step:<span id="click">0</span></div>
        </div>
        <li class="setting-list__item back sound-menu-click difficulty" id="exit">Save & Quit</li>
    </main>
    `
let heightField
let widthField
let minesCount
let userName
let startTime = 0;
let timerInterval;
var flagCount
let isLoad = false;
import { isCustom } from './build-page'
import { inputM } from "./build-page";
export function startTimer() {
  startTime = Date.now()
  timerInterval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    var seconds = Math.floor(elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    minutes %= 60;

    var formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    document.getElementById('time').textContent = formattedTime;
  }, 1000);
}
export function handleCellClick(cell) {
  
  if (cell.classList.contains('bomb')) {
    const bombCells = Array.from(document.getElementsByClassName('bomb'));
    bombCells.forEach(function(bomb) {
      bomb.classList.add('open-deff');
    });
      let popupDeff = `
      <div class="popup-shadow">
      </div>
      <div class="popup">
        <h2 class="title result-game">GAME OVER</h2>
        <ul class="nav-list">
          <li class="nav-list__item new-game result-game sound-menu-click">Try Again</li>
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
    clearInterval(timerInterval);
    startTime = 0;
    if (localStorage.getItem('save')) {
      localStorage.removeItem('save');
    }
    const newGameButton = document.querySelector('.new-game');
    newGameButton.addEventListener('click', newGame)
    newGameButton.addEventListener('click', playMenuClickSound)
    playDefeatSound()
    return;
}

if (cell.textContent === '') {
  const neighbors = getNeighborCells(cell);

  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];

    if (!neighbor.classList.contains('open')) {
      if (neighbor.textContent === '' && neighbor.classList.contains('flag')) {
        neighbor.classList.remove('flag');
      }
      neighbor.classList.add('open');
      handleCellClick(neighbor);
    }
  }
}


const openCells = document.querySelectorAll('.open');
for (let i = 0; i < openCells.length; i++) {
  openCells[i].classList.remove('flag');
}
const popupElement = document.querySelector('.popup');
if (!popupElement) {
  checkWin();
}

}
function addBombs(count) {
  var tableCells = document.querySelectorAll('.table-ceil');
  var cellCount = tableCells.length;

  if (count > cellCount) {
    count = cellCount; 
  }

  var cellIndexes = Array.from({ length: cellCount }, (_, index) => index);
  shuffleArray(cellIndexes);

  for (var i = 0; i < count; i++) {
    var randomIndex = cellIndexes[i];
    if (!tableCells[randomIndex].classList.contains('open')) {
      tableCells[randomIndex].classList.add('bomb');
    }
  }
}
export function checkWin() {
  var bombCells = document.getElementsByClassName('bomb').length;
  var totalCells = document.getElementsByClassName('table-ceil').length;
  var openCells = document.getElementsByClassName('open').length;
  var nonBombCells = totalCells - bombCells;

  if (openCells === nonBombCells) {
    let popupDeff = `
      <div class="popup-shadow">
      </div>
      <div class="popup">
        <h2 class="title result-game">VICTORY</h2>
        <ul class="nav-list">
        <li class="setting-list__item victory result-game">You found all mines in ${document.getElementById('time').textContent} and ${document.getElementById('click').textContent} moves!</li>
          <li class="nav-list__item victory result-game sound-menu-click" id="victory">To Menu</li>
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

      minesCount = document.getElementsByClassName('bomb').length;

      if (heightField === undefined) {
        heightField = localStorage.getItem('heightField');
      }
      if (widthField === undefined) {
        widthField = localStorage.getItem('widthField');
      }
      if (minesCount === undefined) {
        minesCount = localStorage.getItem('countOfBombs');
      }
      if (userName === undefined) {
        userName = localStorage.getItem('userName');
      }
    localStorage.setItem('heightField', heightField);
    localStorage.setItem('widthField', widthField);
    localStorage.setItem('countOfBombs', minesCount);
    localStorage.setItem('userName', userName);
    localStorage.setItem('formattedTime', document.getElementById('time').textContent);
    if (localStorage.getItem('save')) {
      localStorage.removeItem('save');
    }
    const newVictoryButton = document.querySelector('#victory');
    newVictoryButton.addEventListener('click', mainMenu)
    updateResults()
    clearInterval(timerInterval);
    startTime = 0;
    playVictorySound()
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function (element) {
        element.addEventListener('click', playMenuClickSound);

    });
  }
}
function addNumbers() {
  var tableCells = document.querySelectorAll('.table-ceil');
  var cellCount = tableCells.length;

  for (var i = 0; i < cellCount; i++) {
    var cell = tableCells[i];
    if (cell.classList.contains('bomb')) {
      continue; 
    }

    var bombCount = 0;
    var neighborCells = getNeighborCells(cell);
    for (var j = 0; j < neighborCells.length; j++) {
      if (neighborCells[j].classList.contains('bomb')) {
        bombCount++;
      }
    }

    if (bombCount > 0) {
      cell.classList.add('bomb-number');
      var numberElement = cell.querySelector('.hidden');
      numberElement.textContent = bombCount;
    }
  }
}
function applyNumberStyles() {
  var bombNumberCells = document.querySelectorAll('.bomb-number');

  bombNumberCells.forEach(function(cell) {
    var number = parseInt(cell.querySelector('.hidden').textContent);

    switch (number) {
      case 1:
        cell.style.color = 'blue';
        break;
      case 2:
        cell.style.color = 'green';
        break;
      case 3:
        cell.style.color = 'red';
        break;
      case 4:
        cell.style.color = 'darkblue';
        break;
      case 5:
        cell.style.color = 'brown';
        break;
      case 6:
        cell.style.color = 'turquoise';
        break;
      case 7:
        cell.style.color = 'black';
        break;
      case 8:
        cell.style.color = 'purple';
        break;
    }
  });
}
function fontSize() {
  var tableCells = document.querySelectorAll('.table-ceil');

  tableCells.forEach(function(cell) {
    var cellWidth = cell.clientWidth;
    var fontSize = Math.floor(cellWidth / 1.5); 
    cell.style.fontSize = fontSize + 'px';
  });
}
function getNeighborCells(cell) {
  const table = cell.closest('table');
  const rowIndex = cell.parentNode.rowIndex;
  const cellIndex = cell.cellIndex;

  const neighborCells = [];
  for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
    if (i < 0 || i >= table.rows.length) continue;

    for (let j = cellIndex - 1; j <= cellIndex + 1; j++) {
      if (j < 0 || j >= table.rows[i].cells.length) continue;
      if (i === rowIndex && j === cellIndex) continue;

      neighborCells.push(table.rows[i].cells[j]);
    }
  }

  return neighborCells;
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function play(){
    if (isCustom){
        heightField = document.querySelector('#fieldH').value
        widthField = document.querySelector('#fieldW').value
        minesCount = parseInt(document.querySelector('#fieldM').value)
        if (parseInt(heightField) * parseInt(widthField) <= minesCount){
          minesCount = minesCount + 1;
        } else {
          minesCount = minesCount;
        }

        userName = document.querySelector('#username').value
    } else {
        var radioButtons = Array.from(document.getElementsByName("difficulty"));
        radioButtons.forEach(function(button) {
            if (button.checked) {
              var selectedButtonValue = button.value;
              if (selectedButtonValue === 'Hard'){
                heightField = 25;
                widthField = 25;
                minesCount = 100;
              }
              if (selectedButtonValue === 'Normal'){
                heightField = 15;
                widthField = 15;
                minesCount = 40;
              }
              if (selectedButtonValue === 'Easy'){
                heightField = 10;
                widthField = 10;
                minesCount = 10;
              }
            }
        });
        userName = document.querySelector('#username').value
    }
    if(document.querySelector('.main')){
            document.querySelector('.main').remove();
        }

    let table = "<table>";
    for (var i = 0; i < heightField; i++) {
      table += "<tr>";
      for (var j = 0; j < widthField; j++) {
        table += "<td class='table-ceil'><span class='hidden'></span></td>";
      }
      table += "</tr>";
    }

    table += "</table>";
    document.body.innerHTML += bordersPlayMenu
    document.querySelector("#push-here").insertAdjacentHTML('afterend', table);

    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function(element) {
    element.addEventListener('click', playMenuClickSound);
    if (isDark){
      document.querySelector('.title').textContent = "MOONSWEEPER";
    }
    });
    let countOfBombs
    var bombCount = document.querySelectorAll('.bomb').length;
      document.getElementById('bombs').textContent = bombCount;
        countOfBombs = minesCount;
    var openedSquare = false;
    var tableCells = document.querySelectorAll('.table-ceil');
    var clickCount = 0; 
    
    document.getElementById('flags').textContent = 0;
    tableCells.forEach(function(cell) {
      cell.addEventListener('click', function() {
        if (!this.classList.contains('open') && !this.classList.contains('flag')) {
          this.classList.add('open');
          if (!this.classList.contains('bomb')){
          playOpenBrickSound()}
          clickCount++;
          document.getElementById('click').textContent = clickCount;
          if (!openedSquare) {
            openedSquare = true;
            addBombs(minesCount);
            fontSize();
            window.addEventListener('resize', fontSize);
            addNumbers();
            applyNumberStyles();
            startTimer();
          }
          handleCellClick(cell)
          var flagCount = document.querySelectorAll('.flag').length;
          var bombCount = document.querySelectorAll('.bomb').length;
          document.getElementById('flags').textContent = flagCount;
          document.getElementById('bombs').textContent = bombCount - flagCount;
        }
      });
    
      cell.addEventListener('contextmenu', function(event) {
        if (!this.classList.contains('open')) {
          if (this.classList.contains('flag')) {
            this.classList.remove('flag');
            playAddflagSound()
            countOfBombs++;
          } else {
            if (countOfBombs > 0) {
              this.classList.add('flag');
              playAddflagSound()
              countOfBombs--;
            }
          }
          var flagCount = document.querySelectorAll('.flag').length;
          document.getElementById('flags').textContent = flagCount;
          document.getElementById('bombs').textContent = minesCount - flagCount;
          countOfBombs = minesCount - flagCount
        }
      });
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
    var saveQuit = document.getElementById('exit');
    saveQuit.addEventListener('click', function() {
      localStorage.setItem('heightField', heightField);
      localStorage.setItem('widthField', widthField);
      localStorage.setItem('minesCount', minesCount);
      localStorage.setItem('userName', userName);
      localStorage.setItem('save', JSON.stringify(document.querySelector('main').innerHTML));
      localStorage.setItem('countOfBombs', countOfBombs);
      localStorage.setItem('openedSquare', openedSquare);
      localStorage.setItem('clickCount', clickCount);
      localStorage.setItem('tableCells', tableCells);
      localStorage.setItem('formattedTime', document.getElementById('time').textContent);
      localStorage.setItem('flagCount', flagCount);
      mainMenu()
      clearInterval(timerInterval);
      startTime = 0; 
    });
}