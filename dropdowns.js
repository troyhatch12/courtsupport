$(document).ready(function(){
	$('.navdropdown').hide();
	$('#conference').hover(
	function(){
		$('#confDropdown').stop().slideDown(250);
		
	},
	function(){
		$('#confDropdown').stop().slideUp(250);
	});
	
	
	
	$('#supportservices').hover(
	function(){
		$('#supDropdown').stop().slideDown(250);
		
	},
	function(){
		$('#supDropdown').stop().slideUp(250);
	});
	
	
});