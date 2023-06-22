import { playMenuClickSound } from './sounds';
import { playOpenBrickSound } from './sounds';
import { playLoad } from './sounds';
import { playAddflagSound } from './sounds';
import { mainMenu } from './build-page'
import { isDark } from './build-page'
import { checkWin, handleCellClick, timerInterval, startTime } from './start-game';

export function load() {
    playLoad()
    var heightField = localStorage.getItem('heightField');
    var widthField = localStorage.getItem('widthField');
    var minesCount = localStorage.getItem('minesCount');
    var userName = localStorage.getItem('userName');
    var countOfBombs = localStorage.getItem('countOfBombs');
    var openedSquare = localStorage.getItem('openedSquare');
    var clickCount = localStorage.getItem('clickCount');
    var formattedTime = localStorage.getItem('formattedTime');
    var save = localStorage.getItem('save');
    var startTime = 0;
    var timerInterval;
    var timeArray = formattedTime.split(":");
    var minutes = parseInt(timeArray[0]);
    var seconds = parseInt(timeArray[1]);
    var milliseconds = (minutes * 60 + seconds) * 1000;
    function startTimer() {
          startTime = Date.now() - milliseconds
        timerInterval = setInterval(function() {
          var elapsedTime = Date.now() - startTime;
          var seconds = Math.floor(elapsedTime / 1000);
          var minutes = Math.floor(seconds / 60);
      
          seconds %= 60;
          minutes %= 60;
      
          var formattedTime = minutes.toString().padStart(2, '0') + ':' +
                              seconds.toString().padStart(2, '0');
      
          document.getElementById('time').textContent = formattedTime;
        }, 1000);
    }
    if (document.querySelector('.main')) {
    document.querySelector('.main').remove();
    }
    if (save) {
    var mainElement = document.createElement('main');
    mainElement.classList.add('main');
    mainElement.innerHTML = JSON.parse(save);
    document.body.appendChild(mainElement);
    }
    if (isDark){
        document.querySelector('.title').textContent = "MOONSWEEPER";
    } else {
        document.querySelector('.title').textContent = "MINESWEEPER";
    }
    var tableCells = document.querySelectorAll('.table-ceil');
    const menuClick = document.querySelectorAll('.sound-menu-click');
    menuClick.forEach(function(element) {
    element.addEventListener('click', playMenuClickSound);
    });
    startTimer()
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
              fontSize();
              window.addEventListener('resize', fontSize);
            }
            handleCellClick(this)
            if (document.querySelector('.popup')) {
            clearInterval(timerInterval);
            startTime = 0;
            }
          }
            if (localStorage.getItem('save')) {
                localStorage.removeItem('save');}
                
}
        );
        
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
      mainMenu()
      clearInterval(timerInterval);
      startTime = 0; 
    });
}
