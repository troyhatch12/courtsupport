$(document).ready(function(){
	
	$('#hamburger').on('click', function(){
		
		$('.sidenav').width(250);
		
	});
	
	$('.closebtn').on('click',function(){
		$('.sidenav').width(0);
	});
	
});