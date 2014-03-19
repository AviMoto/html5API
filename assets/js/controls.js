window.onload = function(){
	var audio = document.getElementById("myAudio");
	var video = document.getElementById("myVideo");
	var playButton =  document.getElementById("playPause");
	
	playButton.onclick = function(){
		if(!(audio.paused || video.paused)){
			audio.pause();
			video.pause();
			playButton.value = "play";
		} else {
			audio.play();
			video.play();
			playButton.value = "pause";
		}
	};
};

