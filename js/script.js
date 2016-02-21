$(function(){
	var tracker = 0
	var turn = 0
	var scoreArray = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
	var playerScore = {0:0,1:0};
		{
			$('.field2').on('click', function(){
			var id = this.id;
			//console.log(this.id)
			//console.log(turn)
			//alert("You have pushed button " + id);
					if(turn == 0) {
						//alert("You have pushed button " + id);
						$(this).removeClass('hid')
						scoreArray[id] = 1;
						turn = turn + 1
						tracker = tracker + 1
						//console.log(turn)
						//console.log(playerScore);
						
					}
					else if(turn ==1) {
						$(this).find('img').removeAttr('src', 'file:///home/toddzio/code/wdi/myWebsites/Tic-Tac-Toes/assets/toe1crop.jpg')
						$(this).find('img').attr('src', 'file:///home/toddzio/code/wdi/myWebsites/Tic-Tac-Toes/assets/toe2crop.jpg')
						$(this).removeClass('hid')
						scoreArray[id] = 10;
						turn = turn -1
						tracker = tracker + 1
						//console.log(turn)
					}
				score()
				
			});
		}
		//$.when( Typer() ).done(function() {
       //calcScore();
	$('#reload').click(function() {
			location.reload();
	});		
	$('#reset').click(function() {
			scoreArray = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
			playerScore = {0:0,1:0}
			tracker = 0
			turn = 0
			$('.field2').addClass('hid')
			//console.log(scoreArray);
			//console.log(playerScore);
	});
	function calcScore() {
		if (turn == 0) {
			score = playerScore[0] + 1
			alert("Player 1 has won!")
			$('#player1').html(score);
		}
		else if (turn == 1) {
			score = playerScore[1] + 1
			aler("Player 2 has won!")
			$('#player1').html(score);
		}
	};
	
	function score() {
		console.log(scoreArray)
		if (scoreArray[1] + scoreArray[2] + scoreArray[3] == 3) {
			
			
		}
		else if (scoreArray[4] +scoreArray[5] + scoreArray[6] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[7] +scoreArray[8] + scoreArray[9] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[1] +scoreArray[4] + scoreArray[7] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[2] +scoreArray[5] + scoreArray[8] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[3] +scoreArray[6] + scoreArray[9] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[1] +scoreArray[5] + scoreArray[9] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[3] +scoreArray[5] + scoreArray[7] ==3) {
			alert("player 1 has won!");
		}
		else if (scoreArray[1] + scoreArray[2] + scoreArray[3] == 30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[4] +scoreArray[5] + scoreArray[6] ==30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[7] +scoreArray[8] + scoreArray[9] ==30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[1] +scoreArray[4] + scoreArray[7] ==30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[2] +scoreArray[5] + scoreArray[8] ==30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[3] +scoreArray[6] + scoreArray[9] ==30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[1] +scoreArray[5] + scoreArray[9] ==30) {
			alert("player 2 has won!");
		}
		else if (scoreArray[3] +scoreArray[5] + scoreArray[7] ==30) {
			alert("player 2 has won!");
		}
		else if (tracker > 7){
			alert("TIE!")
		};
	};
	//function board(){
		//var board = 0
		//$('#checkingBalance').html('$' + total);
});
