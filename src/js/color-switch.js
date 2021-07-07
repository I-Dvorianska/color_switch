const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');
let timerId = null;


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

startButton.addEventListener('click', onStartClick);
stopButton.addEventListener('click', onStopClick);


function onStartClick() {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        startButton.removeEventListener('click', onStartClick);
    }, 1000)
}

function onStopClick() {
    clearInterval(timerId);
    startButton.addEventListener('click', onStartClick);
}

