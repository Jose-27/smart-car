
/*window.onload = function(){

	var numberOfBlades = 1000;
	var grass = document.getElementsByClassName('grass')[0];

	function assignRandomStyles(blade) {
		var randomHeight =  Math.floor(Math.random() * 80);
		var randomLeft = Math.floor(Math.random() * (window.innerWidth - 8));
		var randomRotation = Math.floor(Math.random() * 40) - 5;
		blade.style.height = (randomHeight + 100) + 'px';
		blade.style.zIndex = randomHeight;
		blade.style.opacity = randomHeight * 0.02;
		blade.style.left = randomLeft + 'px';
		blade.style.transform = 'rotate(' + randomRotation + 'deg)';
	}

	for (var i = 0; i < numberOfBlades; i++) {
		var blade = document.createElement('div');
		assignRandomStyles(blade);
		grass.appendChild(blade);
	}
};*/
