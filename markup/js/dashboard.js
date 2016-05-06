$(document).on('click', '.sideBar-opener', function(){
   $('body').toggleClass('sideBar-active'); 
});

$(document).on('click', '.slide-onMobile-opener', function(){
   $('.property-listing-holder').toggleClass('slide-onMobile-active'); 
});

$(document).on('click', '.slide-onMobile > li > a', function(){
   $('.property-listing-holder').removeClass('slide-onMobile-active'); 
});