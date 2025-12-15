const startTime = Date.now(); // load time
const closeBtn = document.querySelector('.close');
const result = document.getElementById('result');
const timeText = document.getElementById('time');
const rankText = document.getElementById('rank');

closeBtn.addEventListener('click', endGame);

function endGame() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeText.textContent = `You lasted ${formatTime(elapsed)}`;
    rankText.textContent = getRank(elapsed);
    result.classList.remove('hidden');
    result.style.display = 'flex';
}

function formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}

function getRank(seconds) {
    if (seconds < 10) 
        return 'Didn’t Even Try';
    else if (seconds < 30) 
        return 'Zero Patience';
    else if (seconds < 60) 
        return 'Average Disappointment';
    else if (seconds < 180) 
        return 'Thinks They’re Patient';
    else if (seconds < 300) 
        return 'Annoyingly Persistent';
    else 
        return 'Why Are You Still Here';
}