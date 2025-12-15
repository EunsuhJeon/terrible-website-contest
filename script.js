const startTime = Date.now(); // load time
const closeBtn = document.getElementById('close');
const closeBox = document.querySelector('.btn-wrapper');
const result = document.getElementById('result');
const timeText = document.getElementById('time');
const rankText = document.getElementById('rank');
const game = document.getElementById('game');
const secondModal = document.querySelector('.second-modal');
const secondClose = secondModal.querySelector('.close-second');
const secondComment = secondModal.querySelector('.second-comment');
const message = document.getElementById('message');
const timers = [];

// UI transform
timers.push(setTimeout(() => {
    closeBox.classList.add('large');
}, 15000));

timers.push(setTimeout(() => {
    closeBtn.classList.add('shake');
}, 20000));

timers.push(setTimeout(() => {
    closeBox.classList.remove('large');
    closeBtn.classList.remove('shake');
}, 30000));

timers.push(setTimeout(() => {
    game.style.backgroundImage = "url(./images/puppy.webp)";
}, 35000));

timers.push(setTimeout(() => {
    game.style.backgroundImage = "url(./images/pointing.jpg)";
}, 50000));

timers.push(setTimeout(() => {
    game.style.backgroundImage = "none";
}, 60000));

timers.push(setTimeout(() => {
    secondModal.classList.remove('hidden');
}, 70000));

timers.push(setTimeout(() => {
    secondComment.textContent = 'Nothing bad will happen';
}, 75000));

timers.push(setTimeout(() => {
    secondComment.textContent = '...Probably';
}, 80000));

timers.push(setTimeout(() => {
    message.textContent = 'Wanna stop?';
}, 100000));

timers.push(setTimeout(() => {
    message.textContent = 'Just do it.';
    document.querySelector('.first-modal').style.zIndex = '100';
    if(document.querySelectorAll('.second-modal').length){
        for (let index = 0; index < document.querySelectorAll('.second-modal').length; index++) {
            var item = document.querySelectorAll('.second-modal')[index];
            item.style.opacity = '0';
        }
    }
}, 105000));

timers.push(setTimeout(() => {
    message.textContent = 'Are you still here?';
}, 120000));

timers.push(setTimeout(() => {
    message.textContent = 'But ...WHY?';
}, 140000));

timers.push(setTimeout(() => {
    message.textContent = 'You could leave anytime.';
}, 160000));

timers.push(setTimeout(() => {
    message.textContent = 'Most people already closed it.';
}, 180000));

timers.push(setTimeout(() => {
    message.textContent = 'You’re really good at doing nothing.';
}, 220000));

timers.push(setTimeout(() => {
    message.textContent = 'Still Here. Interesting.';
}, 220000));

// fnish game trigger
closeBtn.addEventListener('click', endGame);

function endGame() {
    timers.forEach(id => {
        clearTimeout(id);
        clearInterval(id);
    });
    timers.length = 0;

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

// second modal close click event
function spawnMultipleModals(count, delay) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
        const newModal = document.createElement('div');
        newModal.classList.add('modal', 'second-modal');
        newModal.innerHTML = `
            <div class="title-bar">
            <span>¯\\_(ツ)_/¯</span>
            <button class="close-btn">×</button>
            </div>
            <p>Nice try!</p>
        `;

        newModal.style.top = `${50 + Math.random() * 20}%`;
        newModal.style.left = `${40 + Math.random() * 20}%`;
        newModal.style.transform = 'translate(-50%, -50%)';

        game.appendChild(newModal);

        }, i * delay);
    }
}

secondClose.addEventListener('click', () => {
    spawnMultipleModals(10, 200);
});