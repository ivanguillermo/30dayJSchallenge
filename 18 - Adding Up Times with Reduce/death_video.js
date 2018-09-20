const playero= document.querySelector('.playero');
const videox = playero.querySelector('.viewer');
const progress = playero.querySelector('.progress');
const progressBar = playero.querySelector('.progress_filled');
const toggle = playero.querySelector('.toggle');
//const skipButtons = player.querySelectorAll('[data-skip]');
const speedBtn = document.getElementById('speed');
const ranges = playero.querySelectorAll('.player_slider');
let currentTime = videox.currentTime;


videox.volume = 0.2;
progressBar.style.flexBasis = `0%`;

function togglePlayBtn(){
	const method = videox.paused ? 'play' : 'pause';
	videox[method]();
	console.log(currentTime);

}

function death_vid(){
	videox.src = 'video.webm';
	videox.play();
console.log('d')};

function skip(t){
	//video.currentTime += parseFloat(this.dataset.skip);
	videox.currentTime += t;
	console.log(videox.currentTime);
}

function handleRangeUpdate(){
	videox[this.name] = this.value;
	console.log(videox.currentTime);
}

function scrub(e){
	const scrubTime= (e.offsetX / progress.offsetWidth) * videox.duration;
	videox.currentTime = scrubTime;
	console.log(videox.currentTime);
}
function resetSpeed(){
	videox.playbackRate = 1;
	speedBtn.value = 1;
	console.log(videox.currentTime);
}

function updateButton(){
	const icon = this.paused ? '►' : '=';
	toggle.textContent = icon;
	console.log(videox.currentTime);
}

function handleProgress(){
	const percent = (videox.currentTime / videox.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
	progressBar.style.width = `${percent}%`;
	progressBar.style.backgroundColor = '#C600ff';
	console.log(videox.currentTime + ' handleProgress');
}


function fullScreening() {
	videox.mozRequestFullScreen();
	videox.requestFullscreen();
	console.log(currentTime);
}

videox.addEventListener('click', togglePlayBtn);
videox.addEventListener('play', updateButton);
videox.addEventListener('pause', updateButton);
videox.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlayBtn);
//skipButtons.forEach(button => button.addEventListener('click', skip ));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

