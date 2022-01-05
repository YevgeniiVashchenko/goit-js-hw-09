function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startColorBtn = document.querySelector('button[data-start]');
const stopColorBtn = document.querySelector('button[data-stop]');

startColorBtn.addEventListener('click', startChangeColor);
stopColorBtn.addEventListener('click', stopChangeColor);
stopColorBtn.setAttribute('disabled', 'disabled');

let timerId = null;

function startChangeColor() {
  startColorBtn.setAttribute('disabled', 'disabled');
  stopColorBtn.removeAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  clearInterval(timerId);
  startColorBtn.removeAttribute('disabled', 'disabled');
  stopColorBtn.setAttribute('disabled', 'disabled');
}
