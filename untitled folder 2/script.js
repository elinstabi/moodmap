$(function(){
var totalHeight = $(".img-container3").height(); 
console.log('hej')
$("#fill-it3").animate({
	height:'+=30%',
}, 
{	
	duration: 2000,			
	step: function(now, fx) 
	{ 
		$("#label").text( Math.round($(this).height() / totalHeight * 100 )); 
	}
});

$(function(){
var totalHeight = $(".img-container2").height(); 
console.log('hej')
$("#fill-it2").animate({
	height:'+=60%',
}, 
{	
	duration: 2000,			
	step: function(now, fx) 
	{ 
		$("#label").text( Math.round($(this).height() / totalHeight * 100 )); 
	}
});

});


});

$(function(){
var totalHeight = $(".img-container").height(); 
console.log('hej')
$("#fill-it").animate({
	height:'+=100%',
}, 
{	
	duration: 2000,			
	step: function(now, fx) 
	{ 
		$("#label").text( Math.round($(this).height() / totalHeight * 100 )); 
	}
});

});



