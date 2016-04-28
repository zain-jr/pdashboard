 
 $(function() {
	 if ($(".addPropertyFormContianer")[0]){
		handleAddPropertyFormScrolling();
		//$(document).on("scroll", onScroll);
	 }
});

/*
$(window).scroll(function(){
	if ($(".addPropertyFormContianer")[0]){
		if ($(this).scrollTop() >= $('#header').height()) {
			$('.addPropertyFormContianer').addClass('fixed-position');
		} else {
			$('.addPropertyFormContianer').removeClass('fixed-position');
		}
	}
});
*/

$(".searchable-select").select2({
	placeholder: "Select",
  allowClear: true
});
// tabs
jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {
	jQuery('.tabset').contentTabs({
		tabLinks: 'a'
	});
}

//accordion
jQuery(function(){
	initAccordion();
});

// accordion menu init
function initAccordion() {
	jQuery('.accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});
}
