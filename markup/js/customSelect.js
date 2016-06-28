$(window).click(function() {
	$('.searchAbleCustom-select').removeClass('active');
});

$(document).on('change', '.custom_select_radio', function(){
	$(this).closest('.searchAbleCustom-select').removeClass('active');
 });
 $(document).on('click', '.searchValue', function(event){
	event.stopPropagation();
    
	// $('.searchAbleCustom-select').removeClass('active');
    // var elementFromTop = $(this).closest('.searchAbleCustom-select').position().top;
    // var windowHeight = $(window).height();
    // var elementFromBottom = windowHeight - elementFromTop;
    // console.log(elementFromTop)
    // console.log('windowHeight: '+windowHeight)
    // console.log('elementFromBottom: '+elementFromBottom)
    // if(elementFromBottom < 150){
    //     alert();
    // }
	$(this).closest('.searchAbleCustom-select').toggleClass('active');
 });
  $(document).on('click', '.searchAbleCustom-select', function(event){
	event.stopPropagation();
 });