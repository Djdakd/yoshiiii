function play_se(){
	var warnig = new Audio('warnig.mp3');
	warnig.play();
	navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100])
}


$(function(){

	history.pushState(null, null, null);
	$(window).on('popstate', function(e))
	 if (!e.orinialEvent.state){
	 	play_se();
	 	history.pushState(null, null, null);
	 	return;
	 }
})

	

	$('.modal').modal({dismissible: false});
	$('#alert').modal('open');
	$('#close').click(function(){
		$('#alert').modal('close');
		play_se();
	})

	var device = navigator.userAgent.match(/Android|iPhone|iPad);
	if (device == null){
		device = '端末';
	}
	$('#device').text(device);

	alert(device);


	var time = 200;
	setInterval(function(){
		time--;
		$('#timer').text(time);
    }, 1000);

});