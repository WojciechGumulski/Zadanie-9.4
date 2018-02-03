
function drawTree(h) {
	for ( var i = 0 ; i < h ; i++) {
		var star = '';
		for (var j = 0 ; j <= i ; j++) {
			var star = star += '*';
		}
			console.log(star);
	}
}


var navigation = document.getElementsByClassName('menuItem');

console.log(navigation[0].style);

navigation[0].style.background = 'red';
navigation[0].style.padding = '10px';

console.log(navigation[0].style);