// Style import //
import "./style.css";
import "./bel.png";
import "./eng.png";

// Add html in html file //
document.body.innerHTML += `
<h2 class="app-title">Віртуальная клавіятура</h2>
<textarea name="text" id="textarea" class="keyboard-textarea" maxlength="259" placeholder="Наша мова - беларуская, таму што мы беларусы, наша дзяржава - Беларусь, і мы вялікі культурны народ. Зянон Пазьняк"></textarea>
<p class="discription"></p>
<div class="keyboard-body">
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key key backquote" data-code="Backquote" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit1" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit2" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit3" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit4" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit5" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit6" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit7" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit8" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit9" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Digit0" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Minus" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Equal" value=""></button>
        <button class="keyboard-body__row_key backspace" data-code="Backspace">Backspace</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key tab" data-code="Tab" value="">Tab</button>
        <button class="keyboard-body__row_key key" data-code="KeyQ" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyW" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyE" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyR" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyT" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyY" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyU" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyI" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyO" value=""></button>
        <button class="keyboard-body__row_key key" data-code="KeyP" value=""></button>
        <button class="keyboard-body__row_key key" data-code="BracketLeft" value=""></button>
        <button class="keyboard-body__row_key key" data-code="BracketRight" value=""></button>
        <button class="keyboard-body__row_key key" data-code="Backslash" value=""></button>
        <button class="keyboard-body__row_key del" data-code="Delete">Del</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key caps" data-code="CapsLock"> CapsLock</button>
        <button class="keyboard-body__row_key key" data-code="KeyA"></button>
        <button class="keyboard-body__row_key key" data-code="KeyS"></button>
        <button class="keyboard-body__row_key key" data-code="KeyD"></button>
        <button class="keyboard-body__row_key key" data-code="KeyF"></button>
        <button class="keyboard-body__row_key key" data-code="KeyG"></button>
        <button class="keyboard-body__row_key key" data-code="KeyH"></button>
        <button class="keyboard-body__row_key key" data-code="KeyJ"></button>
        <button class="keyboard-body__row_key key" data-code="KeyK"></button>
        <button class="keyboard-body__row_key key" data-code="KeyL"></button>
        <button class="keyboard-body__row_key key" data-code="Semicolon"></button>
        <button class="keyboard-body__row_key key" data-code="Quote"></button>
        <button class="keyboard-body__row_key enter" data-code="Enter">Enter</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key shift left-shift" data-code="ShiftLeft">Shift</button>
        <button class="keyboard-body__row_key key" data-code="KeyZ"></button>
        <button class="keyboard-body__row_key key" data-code="KeyX"></button>
        <button class="keyboard-body__row_key key" data-code="KeyC"></button>
        <button class="keyboard-body__row_key key" data-code="KeyV"></button>
        <button class="keyboard-body__row_key key" data-code="KeyB"></button>
        <button class="keyboard-body__row_key key" data-code="KeyN"></button>
        <button class="keyboard-body__row_key key" data-code="KeyM"></button>
        <button class="keyboard-body__row_key key" data-code="Comma"></button>
        <button class="keyboard-body__row_key key" data-code="Period"></button>
        <button class="keyboard-body__row_key key" data-code="Slash"></button>
        <button class="keyboard-body__row_key up" data-code="ArrowUp">⮝</button>
        <button class="keyboard-body__row_key shift right-shift" data-code="ShiftRight">Shift</button>
    </div>
    <div class="keyboard-body__row">
        <button class="keyboard-body__row_key ctrl left-ctrl" data-code="ControlLeft">Ctrl</button>
        <button class="keyboard-body__row_key win" data-code="MetaLeft">Win</button>
        <button class="keyboard-body__row_key alt" data-code="AltLeft">Alt</button>
        <button class="keyboard-body__row_key space" data-code="Space"></button>
        <button class="keyboard-body__row_key alt" data-code="AltRight">Alt</button>
        <button class="keyboard-body__row_key left" data-code="ArrowLeft">⮜</button>
        <button class="keyboard-body__row_key down" data-code="ArrowDown">⮟</button>
        <button class="keyboard-body__row_key right" data-code="ArrowRight">⮞</button>
        <button class="keyboard-body__row_key ctrl right-ctrl" data-code="ControlRight">Ctrl</button>
    </div>
</div>
`;

// Keyboard symbols | нужно ли все это //
const englishKeyboard = {
  values: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "\t", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\n", "", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "⮝", "", "", "", "", " ", "", "⮜", "⮟", "⮞", ""],
  symbols: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "⮝", "Shift", "Ctrl", "Win", "Alt", "", "Alt", "⮜", "⮟", "⮞", "Ctrl"],
};
const englishShiftKeys = {
  values: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "\t", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "\n", "", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "⮝", "", "", "", "", "", "", "⮜", "⮟", "⮞", ""],
  symbols: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "⮝", "Shift", "Ctrl", "Win", "Alt", "", "Alt", "⮜", "⮟", "⮞", "Ctrl"],
};
const belarusKeyboard = {
  values: ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "\t", "й", "ц", "у", "к", "е", "н", "г", "ш", "ў", "з", "х", "'", "\\", "", "", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\n", "", "я", "ч", "с", "м", "і", "т", "ь", "б", "ю", ".", "⮝", "", "", "", "", " ", "", "⮜", "⮟", "⮞", ""],
  symbols: ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "ў", "з", "х", "'", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "і", "т", "ь", "б", "ю", ".", "⮝", "Shift", "Ctrl", "Win", "Alt", "", "Alt", "⮜", "⮟", "⮞", "Ctrl"],
};
const belarusShiftKeys = {
  values: ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "", "\t", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Ў", "З", "Х", "'", "/", "", "", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "", "", "Я", "Ч", "С", "М", "І", "Т", "Ь", "Б", "Ю", ",", "⮝", "", "", "", "", " ", "", "⮜", "⮟", "⮞", ""],
  symbols: ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Ў", "З", "Х", "'", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "І", "Т", "Ь", "Б", "Ю", ",", "⮝", "Shift", "Ctrl", "Win", "Alt", "", "Alt", "⮜", "⮟", "⮞", "Ctrl"],
};

// Lang settings //
let lang = localStorage.getItem("lang") || document.documentElement.lang;
function saveLangStorage() {
  localStorage.setItem("lang", lang);
}
window.addEventListener("beforeunload", saveLangStorage);
localStorage.setItem("lang", lang);

// Change lang //
const favicon = document.querySelector("link[rel=\"shortcut icon\"]");
const discription = document.getElementsByClassName("discription")[0];
const title = document.getElementsByClassName("app-title")[0];
const textarea = document.querySelector("#textarea");
const keyboardButtons = document.querySelectorAll(".keyboard-body__row_key");
const capsButtons = document.querySelectorAll(".key");
let shiftInPress = false;
let capslockIsOn = false;
let currCase = false;

// Caps //
function toUpper() {
  capsButtons.forEach((key) => {
    const character = key.textContent;
    const characterUpper = character.toUpperCase();
    const keyElem = key;
    keyElem.textContent = characterUpper;
    keyElem.value = characterUpper;
  });
  currCase = true;
}
function toLower() {
  capsButtons.forEach((key) => {
    const character = key.textContent;
    const characterLower = character.toLowerCase();
    const keyElem = key;
    keyElem.textContent = characterLower;
    keyElem.value = characterLower;
  });
  currCase = false;
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.altKey) {
    if (lang === "be") {
      lang = "en";
      document.documentElement.lang = "en";
      favicon.href = "./assets/eng.png";
      document.title = "Virtual Keyboard";
      title.innerHTML = "Virtual Keyboard";
      textarea.placeholder = "Our language is Belarusian, because we are Belarusians, our state is Belarus, and we are a great cultural nation. Zenon Pazniak";
      discription.innerHTML = "The application is designed for the <b>Windows</b> operating system.<br>To switch the input language, press <b>Ctrl + Alt</b>.<br>Painting: B. Lavern, Vysoky Rynak";
      keyboardButtons.forEach((button, index) => {
        const buttonNew = button;
        buttonNew.value = englishKeyboard.values[index];
        buttonNew.textContent = englishKeyboard.symbols[index];
      });
    } else {
      lang = "be";
      document.documentElement.lang = "be";
      favicon.href = "./assets/bel.png";
      document.title = "Віртуальная Клавіятура";
      title.innerHTML = "Віртуальная Клавіятура";
      textarea.placeholder = "Наша мова - беларуская, таму што мы беларусы, наша дзяржава - Беларусь, і мы вялікі культурны народ. Зянон Пазьняк";
      discription.innerHTML = "Дадатак распрацаваны для аператыўнай сістэмы <b>Windows</b>.<br>Каб пераключыць мову ўвода націсьніце <b>Ctrl + Alt</b>.<br>Жывапіс: Б. Лявэрнь, Высокі Рынак";
      keyboardButtons.forEach((button, index) => {
        const buttonNew = button;
        buttonNew.value = belarusKeyboard.values[index];
        buttonNew.textContent = belarusKeyboard.symbols[index];
      });
    }
    if (capslockIsOn === true) {
      toUpper();
    } else {
      toLower();
    }
  }
});

// Init app //
if (lang === "en") {
  document.documentElement.lang = "en";
  favicon.href = "./assets/eng.png";
  document.title = "Virtual Keyboard";
  title.innerHTML = "Virtual Keyboard";
  textarea.placeholder = "Our language is Belarusian, because we are Belarusians, our state is Belarus, and we are a great cultural nation. Zenon Pazniak";
  discription.innerHTML = "The application is designed for the <b>Windows</b> operating system.<br>To switch the input language, press <b>Ctrl + Alt</b>.<br>Painting: B. Lavern, Vysoky Rynak";
  keyboardButtons.forEach((button, index) => {
    const buttonNew = button;
    buttonNew.value = englishKeyboard.values[index];
    buttonNew.textContent = englishKeyboard.symbols[index];
  });
} else {
  lang = "be";
  document.documentElement.lang = "be";
  favicon.href = "./assets/bel.png";
  document.title = "Віртуальная Клавіятура";
  title.innerHTML = "Віртуальная Клавіятура";
  textarea.placeholder = "Наша мова - беларуская, таму што мы беларусы, наша дзяржава - Беларусь, і мы вялікі культурны народ. Зянон Пазьняк";
  discription.innerHTML = "Дадатак распрацаваны для аператыўнай сістэмы <b>Windows</b>.<br>Каб пераключыць мову ўвода націсьніце <b>Ctrl + Alt</b>.<br>Жывапіс: Б. Лявэрнь, Высокі Рынак";
  keyboardButtons.forEach((button, index) => {
    const buttonNew = button;
    buttonNew.value = belarusKeyboard.values[index];
    buttonNew.textContent = belarusKeyboard.symbols[index];
  });
}

// Add & remove text //
function inputText(text) {
  const { selectionStart, selectionEnd, value } = textarea;
  const newValue = value.substring(0, selectionStart) + text + value.substring(selectionEnd);
  textarea.value = newValue;
  textarea.setSelectionRange(selectionStart + text.length, selectionStart + text.length);
}
function backspaceText() {
  const { selectionStart, selectionEnd, value } = textarea;
  if (selectionStart < selectionEnd) {
    const newValue = value.substring(0, selectionStart) + value.substring(selectionEnd);
    textarea.value = newValue;
    textarea.setSelectionRange(selectionStart, selectionStart);
  } else if (selectionStart > 0) {
    const newValue = value.substring(0, selectionStart - 1) + value.substring(selectionStart);
    textarea.value = newValue;
    textarea.setSelectionRange(selectionStart - 1, selectionStart - 1);
  }
}
function deleteText() {
  const { selectionStart, selectionEnd, value } = textarea;
  if (selectionStart < selectionEnd) { // удаление выделенного текста
    const newValue = value.substring(0, selectionStart) + value.substring(selectionEnd);
    textarea.value = newValue;
    textarea.setSelectionRange(selectionStart, selectionStart);
  } else if (selectionStart < value.length) { // удаление одного символа
    const newValue = value.substring(0, selectionStart) + value.substring(selectionStart + 1);
    textarea.value = newValue;
    textarea.setSelectionRange(selectionStart, selectionStart);
  }
}

// Shift | более-менее //
function shiftdown() {
  keyboardButtons.forEach((button, index) => {
    if (lang === "en") {
      const buttonNew = button;
      buttonNew.value = englishShiftKeys.values[index];
      buttonNew.textContent = englishShiftKeys.symbols[index];
    } else {
      const buttonNew = button;
      buttonNew.value = belarusShiftKeys.values[index];
      buttonNew.textContent = belarusShiftKeys.symbols[index];
    }
    if (capslockIsOn) {
      capslockIsOn = false;
    } else {
      capslockIsOn = true;
    }
  });
}
function shiftup() {
  keyboardButtons.forEach((button, index) => {
    if (lang === "en") {
      const buttonNew = button;
      buttonNew.value = englishKeyboard.values[index];
      buttonNew.textContent = englishKeyboard.symbols[index];
    } else {
      const buttonNew = button;
      buttonNew.value = belarusKeyboard.values[index];
      buttonNew.textContent = belarusKeyboard.symbols[index];
    }
    if (capslockIsOn) {
      capslockIsOn = false;
    } else {
      capslockIsOn = true;
    }
  });
}
document.addEventListener("keydown", (event) => {
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    shiftdown();
    if (!currCase && !shiftInPress) {
      toUpper();
    } else if (currCase && !shiftInPress) {
      toLower();
    }
    shiftInPress = true;
  }
});
document.addEventListener("keyup", (event) => {
  shiftInPress = false;
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    shiftup();
    if (!currCase && !shiftInPress) {
      toUpper();
    } else if (currCase && !shiftInPress) {
      toLower();
    }
  }
});

// press animation | в идеале можно заняться отладкой в лучшее время //
document.addEventListener("keydown", (event) => {
  const virtualKey = document.querySelector(`.keyboard-body__row_key[data-code="${event.code}"]`);
  if (virtualKey) {
    if (event.key !== "CapsLock") {
      virtualKey.classList.add("active");
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      backspaceText();
    } else if (event.key === "Delete") {
      event.preventDefault();
      deleteText();
    } else {
      event.preventDefault();
      const character = virtualKey.value;
      if (character !== "") {
        inputText(character);
      }
    }
    if (event.key === "CapsLock") {
      virtualKey.classList.toggle("active");
      if (shiftInPress === false) {
        capslockIsOn = !capslockIsOn;
      }
      if (!currCase && capslockIsOn) {
        toUpper();
      } else {
        toLower();
      }
    }
  }
});
document.addEventListener("keyup", (event) => {
  const virtualKey = document.querySelector(`.keyboard-body__row_key[data-code="${event.code}"]`);
  if (virtualKey) {
    event.preventDefault();
    if (event.key !== "CapsLock") {
      virtualKey.classList.remove("active");
    }
  }
});
const virtualKeys = document.querySelectorAll(".keyboard-body__row_key");
virtualKeys.forEach((key) => {
  key.addEventListener("mousedown", (event) => {
    const code = key.getAttribute("data-code");
    const character = key.value;
    if (code === "Backspace") {
      backspaceText();
    } else if (code === "Delete") {
      deleteText();
    } else if (code === "CapsLock") {
      key.classList.toggle("active");
      capslockIsOn = !capslockIsOn;
      if (capslockIsOn) {
        toUpper();
      } else {
        toLower();
      }
    } else if (code === "ShiftLeft" || code === "ShiftRight") {
      shiftInPress = true;
      shiftdown();
      if (capslockIsOn) {
        toLower();
      } else {
        toUpper();
      }
    } else if (character !== "") {
      inputText(character);
    }
    event.preventDefault();
  });
});
document.addEventListener("mouseup", (event) => {
  if (shiftInPress) {
    shiftInPress = false;
    shiftup();
    if (!capslockIsOn) {
      toLower();
    } else {
      toUpper();
    }
    event.preventDefault();
  }
});
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

// need update in future for best performance, but now is all works //
