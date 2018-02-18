$(document).ready(function(){


	function card(name,kind) {
		this.name = name;
		this.kind = kind;
	} 
	
	var deck = [
		new card('Ace', 'Hearts'),
		new card('Two', 'Hearts'),
		new card('Three', 'Hearts'),
		new card('Four', 'Hearts'),
		new card('Five', 'Hearts'),
		new card('Six', 'Hearts'),
		new card('Seven', 'Hearts'),
		new card('Eight', 'Hearts'),
		new card('Nine', 'Hearts'),
		new card('Ten', 'Hearts'),
		new card('Jack', 'Hearts'),
		new card('Queen', 'Hearts'),
		new card('King', 'Hearts'),
		new card('Ace', 'Diamonds'),
		new card('Two', 'Diamonds'),
		new card('Three', 'Diamonds'),
		new card('Four', 'Diamonds'),
		new card('Five', 'Diamonds'),
		new card('Six', 'Diamonds'),
		new card('Seven', 'Diamonds'),
		new card('Eight', 'Diamonds'),
		new card('Nine', 'Diamonds'),
		new card('Ten', 'Diamonds'),
		new card('Jack', 'Diamonds'),
		new card('Queen', 'Diamonds'),
		new card('King', 'Diamonds'),
		new card('Ace', 'Clubs'),
		new card('Two', 'Clubs'),
		new card('Three', 'Clubs'),
		new card('Four', 'Clubs'),
		new card('Five', 'Clubs'),
		new card('Six', 'Clubs'),
		new card('Seven', 'Clubs'),
		new card('Eight', 'Clubs'),
		new card('Nine', 'Clubs'),
		new card('Ten', 'Clubs'),
		new card('Jack', 'Clubs'),
		new card('Queen', 'Clubs'),
		new card('King', 'Clubs'),
		new card('Ace', 'Spades'),
		new card('Two', 'Spades'),
		new card('Three', 'Spades'),
		new card('Four', 'Spades'),
		new card('Five', 'Spades'),
		new card('Six', 'Spades'),
		new card('Seven', 'Spades'),
		new card('Eight', 'Spades'),
		new card('Nine', 'Spades'),
		new card('Ten', 'Spades'),
		new card('Jack', 'Spades'),
		new card('Queen', 'Spades'),
		new card('King', 'Spades')
	];
	
	
	function getRandom(num){
		var my_num = Math.floor(Math.random()*num);
		return my_num;
	}
	
	(function dealerHand() {
		for(var i=0;i<3;i++){
			var card = getRandom(52);
				var c = deck[card];
				var d = $("#dealer_hand");
				d.addClass("dealer_hand");
	  
				$("<img>").attr('src', 'images/cards/' + c.kind + '/' + c.name + '.jpg' )
						  .appendTo(d)
						//   .fadeOut('slow')
						//   .fadeIn('slow');
		}
	})();

	function myHand() {
		$('.clear').after('<div id="my_hand"></div>');
		for(var i=0;i<2;i++){
			
			var card = getRandom(52);
				var c = deck[card];
				var m = $("#my_hand");
				$box = $('.card_imgox')
				m.addClass("my_hand");
	
				$("<img>").attr('src', 'images/cards/' + c.kind + '/' + c.name + '.jpg' )
						  .appendTo(m)
						//   .fadeOut('slow')
						//   .fadeIn('slow')
						  .addClass('card_img');


		}
	};
	
	myHand();
	
	$('#btn').bind('click', function hit() {
		$("#my_hand").remove();
		myHand()
	  });

});