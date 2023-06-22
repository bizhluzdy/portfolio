export function updateResults() {
  const resultsList = [
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
    { name: '', size: '', bombs: '', timer: '' },
  ];
  const heightField = localStorage.getItem('heightField');
  const widthField = localStorage.getItem('widthField');
  const countOfBombs = localStorage.getItem('countOfBombs') || localStorage.getItem('mineCount');
  const userName = localStorage.getItem('userName');
  const formattedTime = localStorage.getItem('formattedTime');
  
  let storedResults = JSON.parse(localStorage.getItem('results')) || [];
  
  const newData = {
    name: userName,
    size: `${heightField}x${widthField}`,
    bombs: countOfBombs,
    timer: formattedTime,
  };
  
  storedResults.push(newData);

  if (storedResults.length > 10) {
    storedResults = storedResults.slice(storedResults.length - 10);
  }

  storedResults.forEach((result, index) => {
    const resultItem = document.querySelector(`.setting-list__item.result:nth-child(${index + 2})`);
  
    if (resultItem) {
      resultItem.innerHTML = `
        <div><span class="name">${result.name}</span></div>
        <div><span class="size">${result.size}</span> <span class="bombss">${result.bombs}</span> <span class="timer">${result.timer}</span></div>
      `;
    }
  });

  localStorage.setItem('results', JSON.stringify(storedResults)); 
}