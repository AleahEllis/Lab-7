 $(document).ready(function(){ 
    $('#header').slideUp('slow');



	var lItem = $('li');
	// console.log(img.attr('src'));

	// img.attr('src', 'kid.jpg');

	lItem.css('width'); 
	lItem.css('width', '200px');
	lItem.css('height', '70px');
	lItem.css('color','purple');
	lItem.css('font-family', 'san-serif');

	// console.log(lItem.css('width'));

	lItem.on('mouseover', function(){
		$(this).fadeTo("fast", 0.25); 
		
	});

	lItem.on('mouseout', function(){
		$(this).fadeTo("fast", 1);
	});

	// var newWords = $('')

	lItem.on('click', function(){
		$(this).css('background-color', 'teal');
		$(this).add('these words')

		
	});

	// lItem.on('mouseout', function(){
	// 	$(this).fadeTo("fast", 1);
	// });








});

