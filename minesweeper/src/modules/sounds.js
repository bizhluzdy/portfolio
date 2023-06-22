import menuClickSound from '../assets/sounds/clickbutton.mp3';
import playClickMusic from '../assets/sounds/mylovesoundtrack.mp3';
import openbrick from '../assets/sounds/openbrick.wav';
import victory from '../assets/sounds/victory.mp3';
import defeat from '../assets/sounds/defeat.wav';
import addflag from '../assets/sounds/addflag.wav';
import loadSong from '../assets/sounds/load.wav';
import { volumeSlider } from './build-page'
import { volumeMusic } from './build-page'


let currentSound = null;

export function playLoad() {
  playSound(loadSong, volumeSlider);
}

export function playVictorySound() {
  playSound(victory, volumeMusic);
}

export function playMenuClickSound() {
  playSound(menuClickSound, volumeSlider);
}

export function playClickSound() {
  playSound(playClickMusic, volumeMusic);
}

export function playDefeatSound() {
  playSound(defeat, volumeSlider);
}

export function playOpenBrickSound() {
  playSound(openbrick, volumeSlider);
}

export function playAddflagSound() {
  playSound(addflag, volumeSlider);
}

function playSound(soundPath, volume) {
  if (currentSound) {
    currentSound.pause();
    currentSound = null;
  }

  const sound = new Audio(soundPath);
  sound.volume = volume / 100;
  sound.onended = function() {
    currentSound = null;
  };
  sound.play();

  currentSound = sound;
}

let activeSounds = [];

function stopAllSounds() {
  activeSounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });

  activeSounds = [];
}
