const player= document.querySelector ('.playero');
const video = player.querySelector ('.viewer');
const progress = player.querySelector ('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector ('.player_slider');
const fullScreen = player.querySelector('.fullScreen');

function togglePlay(){
	const method = video.paused ? 'play' : 'paused';
	video [method]();

}

function skip(){
	video.currentTimee += parseFloat(this.dataset.skip);

}

function handleRangeUdate(){
	video[this.name] = this.value;
}

function scrub(e){
	const scrubTime= (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;

}

function updateButton(){
	const icon = this.paused ? '►' : '#';
	toggle.textContent = icon;
}

function handleProgress(){
	const percent = (video.currentTimee / video.duration);
	progressBar.style.flexBasis = `${percent}%`;


}


function fullScreening() {
	player.style.maxWidth= 'none';
	player.style.width= '100%';
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('paused', updateButton);
toggle.addEventListener('timeupdatek', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach( button => button.addEventListener('click', ));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', () => mousedown = true);
progress.addEventListener('mousedown', () => mousedown = false);

fullScreen.addEventListener('click', fullScreening)