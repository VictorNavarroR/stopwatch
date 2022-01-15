const timeH1 = document.querySelector('.time');
const startBtn = document.querySelector('.btnswrap__start');
const stopBtn = document.querySelector('.btnswrap__stop');
const resetBtn = document.querySelector('.btnswrap__reset');

let min = 0;
let sec = 0;
let mil = 0;
let runTimeState = true;
let interval;

const runTimer = () => {

    mil = mil + 1;
    if(mil === 60) {
        sec = sec + 1;
        mil = 0;
    }

    if(sec === 60) {
        min = min + 1;
        sec = 0;
    }

    if(min === 60) {
        min = 0;
    }

    timeH1.innerText = `${min <= 9 ? '0' + min : min}:${sec <= 9 ? '0' + sec : sec}:${mil <= 9 ? '0' + mil : mil}`;

}

const startTime = () => {
    clearInterval(interval);
    interval = setInterval(runTimer, 16.5);
}
const stopTime = () => {
    clearInterval(interval);
}
const resetTime = () => {
    min = 0;
    sec = 0;
    mil = 0;
    timeH1.innerText = `${min <= 9 ? '0' + min : min}:${sec <= 9 ? '0' + sec : sec}:${mil <= 9 ? '0' + mil : mil}`;
    stopTime();
}
startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime);



