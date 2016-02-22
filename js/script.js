$(function(){
	var tracker = 0
	var turn = 0
	var scoreArray = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
	var playerScore = {0:0,1:0};
		{
			$('.field2').on('click', function(){
			var id = this.id;
					if(turn == 0) {
						$(this).find('img').removeAttr('src', 'file:///home/toddzio/code/wdi/myWebsites/Tic-Tac-Toes/assets/toe2crop.jpg')
						$(this).find('img').attr('src', 'file:///home/toddzio/code/wdi/myWebsites/Tic-Tac-Toes/assets/toe1crop.jpg')
						$(this).removeClass('hid')
						scoreArray[id] = 1;
						turn = turn + 1
						tracker = tracker + 1						
					}
					else if(turn ==1) {
						$(this).find('img').removeAttr('src', 'file:///home/toddzio/code/wdi/myWebsites/Tic-Tac-Toes/assets/toe1crop.jpg')
						$(this).find('img').attr('src', 'file:///home/toddzio/code/wdi/myWebsites/Tic-Tac-Toes/assets/toe2crop.jpg')
						$(this).removeClass('hid')
						scoreArray[id] = 10;
						turn = turn -1
						tracker = tracker + 1
					};
			Score()			
			});
};		
	$('#reload').click(function() {
			location.reload();
	});		
	function reset(){
			scoreArray = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
			tracker = 0
			turn = 0
			$('.field2').addClass('hid');
	}
function calcScore() {
		if (turn == 1) {
			score = (playerScore[0] + 1)
			playerScore[0] = score
			alert("Player 1 has won!")
			$('#player1').html(score)
			reset();
		}
		else if (turn == 0) {
			score = (playerScore[1] + 1)
			playerScore[1] = score
			alert("Player 2 has won!")
			$('#player2').html(score)
			reset();
		}
	};
function Score() {

		if (scoreArray[1] + scoreArray[2] + scoreArray[3] == 3) {
			calcScore();		
		}
		else if (scoreArray[4] +scoreArray[5] + scoreArray[6] ==3) {
			calcScore();
		}
		else if (scoreArray[7] +scoreArray[8] + scoreArray[9] ==3) {
			calcScore();
		}
		else if (scoreArray[1] +scoreArray[4] + scoreArray[7] ==3) {
			calcScore();
		}
		else if (scoreArray[2] +scoreArray[5] + scoreArray[8] ==3) {
			calcScore();
		}
		else if (scoreArray[3] +scoreArray[6] + scoreArray[9] ==3) {
			calcScore();
		}
		else if (scoreArray[1] +scoreArray[5] + scoreArray[9] ==3) {
			calcScore();
		}
		else if (scoreArray[3] +scoreArray[5] + scoreArray[7] ==3) {
			calcScore();
		}
		else if (scoreArray[1] +scoreArray[2] +scoreArray[3] == 30) {
			calcScore();
		}
		else if (scoreArray[4] +scoreArray[5] +scoreArray[6] ==30) {
			calcScore();
		}
		else if (scoreArray[7] +scoreArray[8] +scoreArray[9] ==30) {
			calcScore();
		}
		else if (scoreArray[1] +scoreArray[4] +scoreArray[7] ==30) {
			calcScore();
		}
		else if (scoreArray[2] +scoreArray[5] +scoreArray[8] ==30) {
			calcScore();
		}
		else if (scoreArray[3] +scoreArray[6] +scoreArray[9] ==30) {
			calcScore();
		}
		else if (scoreArray[1] +scoreArray[5] +scoreArray[9] ==30) {
			calcScore();
		}
		else if (scoreArray[3] +scoreArray[5] +scoreArray[7] ==30) {
			calcScore();
		}
		else if (tracker > 7){
			alert("TIE!")
			reset();
		};
	}
})
