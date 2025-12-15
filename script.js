const startTime = Date.now(); // load time
const closeBtn = document.getElementById('close');
const closeBox = document.querySelector('.btn-wrapper');
const result = document.getElementById('result');
const timeText = document.getElementById('time');
const rankText = document.getElementById('rank');
const game = document.getElementById('game');
const secondModal = document.querySelector('.second-modal');
const secondComment = document.querySelector('.second-comment');

// UI transform
setTimeout(() => {
  closeBox.classList.add('large');
}, 10000); // after 10 sec

setTimeout(() => {
  closeBtn.classList.add('shake');
}, 15000); // after 15 sec

setTimeout(() => {
    closeBox.classList.remove('large');
    closeBtn.classList.remove('shake');
}, 20000); // after 20 sec

setTimeout(() => {
  game.style.backgroundImage = "url(./images/puppy.webp)";
}, 25000); // after 25 sec

setTimeout(() => {
  game.style.backgroundImage = "url(./images/pointing.jpg)";
}, 27000); // after 25 sec

setTimeout(() => {
  game.style.backgroundImage = "none";
}, 30000); // after 25 sec

setTimeout(() => {
  secondModal.classList.remove('hidden');
}, 32000); // after 30 sec

setTimeout(() => {
  secondComment.textContent = 'Nothing bad will happen';
}, 35000); // after 35 sec

setTimeout(() => {
  secondComment.textContent = '...Probably';
}, 40000); // after 35 sec

// fnish game trigger
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