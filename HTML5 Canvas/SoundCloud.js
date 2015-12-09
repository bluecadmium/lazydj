function playSomeSound(genre){
	SC.get('/tracks', {
		genres : genre,
		bpm: {
			from: 100
		}
	}
);
	
  
	var menuLinks = document.getElementsByClassName('genre');
	for (var i = 0; i < menuLinks.length; i++) {
		var menuLink = menuLinks[i];
		menuLink.onclick = function(e) {
			e.preventDefault();
			playSomeSound(menuLink.innerHTML);
		};
	}

