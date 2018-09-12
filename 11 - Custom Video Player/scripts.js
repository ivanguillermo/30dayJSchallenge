const player= document.querySelector('.playero');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
//const skipButtons = player.querySelectorAll('[data-skip]');
const speedBtn = document.getElementById('speed');
const ranges = player.querySelectorAll('.player_slider');
let currentTime = video.currentTime;


video.volume = 0.2;
progressBar.style.flexBasis = `0%`;

function togglePlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();
	console.log(currentTime);

}

function skip(t){
	//video.currentTime += parseFloat(this.dataset.skip);
	video.currentTime += t;
	console.log(video.currentTime);
}

function handleRangeUpdate(){
	video[this.name] = this.value;
	console.log(video.currentTime);
}

function scrub(e){
	const scrubTime= (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	console.log(video.currentTime);
}
function resetSpeed(){
	video.playbackRate = 1;
	speedBtn.value = 1;
	console.log(video.currentTime);
}

function updateButton(){
	const icon = this.paused ? '►' : '=';
	toggle.textContent = icon;
	console.log(video.currentTime);
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
	progressBar.style.width = `${percent}%`;
	progressBar.style.backgroundColor = '#C600ff';
	console.log(video.currentTime + ' handleProgress');
}


function fullScreening() {
	video.mozRequestFullScreen();
	video.requestFullscreen();
	console.log(currentTime);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
//skipButtons.forEach(button => button.addEventListener('click', skip ));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

