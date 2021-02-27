$(document).ready(function() {
	let textHolder = document.getElementById('textHolder');
	var i;
	for (i = 0; i < 100; i++) {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		let marquee = document.createElement("marquee");
		marquee.setAttribute("behavior", "scroll");
		marquee.innerHTML = "Lucy Smells!";
		marquee.style.fontSize = "3em";
		marquee.style.color = randomColor;
		if (i%2 === 0){
			marquee.setAttribute("direction", "left");
		} else {
			marquee.setAttribute("direction", "right");
		}
		textHolder.appendChild(marquee);
	}
	
	function changeColor() {
		let marquees = document.getElementsByTagName('marquee');
		for (var i = 0; i < marquees.length; i++) {
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			marquees[i].style.color = randomColor;
		}
	}

	setInterval(changeColor, 100)
});