 
 $(function() {
	 if ($(".addPropertyFormContainer")[0]){
		handleAddPropertyFormScrolling();
		$(document).on("scroll", onScroll);
	 }
});

$(window).scroll(function(){
	if ($(".addPropertyFormContainer")[0]){
		if ($(this).scrollTop() >= $('#header').height()) {
			$('.addPropertyFormContianer').addClass('fixed-position');
		} else {
			$('.addPropertyFormContianer').removeClass('fixed-position');
		}
	}
});

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

$(document).ready(function(){
	$('.registration-form').find('.role-listing').hide();
});

$(document).on('click', '.role-opener', function(){
	$('.registration-form').find('.role-listing').slideToggle();
	$(this).toggleClass('active');
});

function countCheckedRoles(){
	var totalCheckedRoles = 0;
	$('.userRole-checkbox').each(function() {
  		if($(this).is(':checked'))
		  totalCheckedRoles++;
	});
	if(totalCheckedRoles == 0)
		$('.role-opener').html('Other Roles');
	else	
		$('.role-opener').html(totalCheckedRoles+' Roles selected');
}

$(document).on('change', '.userRole-checkbox', function(){
	countCheckedRoles();
});

$(document).on('change', '.agent-brokerCheckbox', function(){
	if($(this).is(':checked')){
		$('.agent-brokerCheckbox').each(function(){
			$(this).prop('checked', true);
		});
		$('.registration-form').addClass('agent-info')
	}
	else {
		$('.agent-brokerCheckbox').each(function(){
			$(this).prop('checked', false);
			$('.registration-form').removeClass('agent-info')
		});
	}
	countCheckedRoles();
});

function companyLogoUploader(file, target)
 {
	previewFile(file, target);
	$(file).closest('.company-logo').find('.picture-holder').css({
		 'display':'block'
	});
	$(file).closest('.company-logo').addClass('hover');
 }
 
 $(document).on('click', '.registration-form .delete', function(){
	 $(this).closest('.company-logo').find('.company-profileP').attr('src', '');
	 $(this).closest('.company-logo').find('.company-profileP').attr('alt', '');
	 $(this).closest('.company-logo').removeClass('hover');
	 $(this).closest('.company-logo').find('.picture-holder').css({
		 'display':'none'
	 });
 });