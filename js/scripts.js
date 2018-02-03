function drawTree(h) {
 	for ( var i = 0 ; i < h ; i++) {
		var star = '';
		for (var j = 0 ; j <= i ; j++) {
			var star = star += '*';
		}
			console.log(star);
	}
}

var a = prompt('podaj wysokość choinki');
drawTree(a); 