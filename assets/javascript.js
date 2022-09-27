const startTime = 10;
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const countdownEl = document.getElementById('countdown');
let time = startTime * 60;


function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
};

startBtn.addEventListener("click", () => {
    document.getElementById('startBtn').style.visibility = 'hidden';
    document.getElementById('stopBtn').style.visibility = 'visible';
    myInterval = setInterval(timer, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(myInterval);   
});