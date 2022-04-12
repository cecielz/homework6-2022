var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// document.querySelector("#video").load();;
	
	video = document.getElementById ("player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = document.getElementById ("player1");

	//slider
	var volume_number = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume_number + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New speed is "+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	var duration = video.duration;
	var checkpoint = duration - 15;
	if (video.currentTime > checkpoint){
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	else{
		video.currentTime += 15;
		console.log("New location is "+ video.currentTime);
	}

	
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false){
		//video.volume = 0
		video.muted = true;
		//console.log("Muted"); 
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		//video.volume = 1;
		video.muted = false;
		//console.log("Unmuted"); 
		document.getElementById("mute").innerHTML = "Mute";
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	var volume_number = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume_number + "%";
	video.volume = volume_number * 0.01;
	console.log(volume_number/100);
});
 

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	//video.className = "oldSchool";
	//console.log(volume_number/100);
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
	//console.log(volume_number/100);
});