


function drawTree(h) {
 	for ( var i = 0 ; i < h ; i++) {
 		var star = '*';
 		var y = ' ';
		
		for (var j = 0 ; j < i ; j++) {
			var star = star += '**';
		}
		
		for (var k = h ; k > i ; k--) {
			var y = y + ' ';
		}
			
	console.log(y + star);

	}

}

var a = prompt('podaj wysokość choinki');

drawTree(a); 

