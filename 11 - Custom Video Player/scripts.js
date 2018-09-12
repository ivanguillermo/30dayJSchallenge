const player= document.querySelector('.playero');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
//const skipButtons = player.querySelectorAll('[data-skip]');
const speedBtn = document.getElementById('speed');
const ranges = player.querySelectorAll('.player_slider');


function togglePlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();

}

function skip(t){
	console.log('3');
	//video.currentTime += parseFloat(this.dataset.skip);
	video.currentTime += t;
}

function handleRangeUpdate(){
	video[this.name] = this.value;
}

function scrub(e){
	const scrubTime= (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;

}
function resetSpeed(){
	video.playbackRate = 1;
	speedBtn.value = 1;
}

function updateButton(){
	const icon = this.paused ? '►' : '=';
	toggle.textContent = icon;
}

function handleProgress(){
	const percent = (video.currentTime / video.duration)*100;
	progressBar.style.flexBasis = `${percent}`+'%';
	progressBar.style.width = `${percent}`+'%';
	progressBar.style.background = '#c600ff';
}


function fullScreening() {
	video.mozRequestFullScreen();
	video.webkitRequestFullScreen();
	video.requestFullScreen();
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
//skipButtons.forEach(button => button.addEventListener('click', skip ));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

