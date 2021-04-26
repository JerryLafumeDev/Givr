/*
Author       : Dreamguys
Template Name: Dreamschat - Bootstrap Chat Template
Version      : 1.0
*/

(function($) {
    "use strict";

	$("#search-contact").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#chatsidebar ul li").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	jQuery(window).on('load resize', function () {

		// Variable Declarations

		var right_sidebar = $('.right-sidebar').width();
		var left_sidebar = $('.left-sidebar').width();
		var chat_bar = $('.chat').width();
		var win_width = $(window).width();

		$(".user-list-item").on('click', function () {
		if ($(window).width() < 992) {
				$('.left-sidebar').addClass('hide-left-sidebar');
				$('.chat').addClass('show-chatbar');
			}
		});

		$(".dream_profile_menu").on('click', function () {
			$('.right-sidebar').addClass('show-right-sidebar');
			$('.right-sidebar').removeClass('hide-right-sidebar');
				if ( $(window).width() > 991 && $(window).width() < 1201) {
				$(".chat").css('margin-left', - chat_bar);
			}
			if ($(window).width() < 992) {
				$('.chat').addClass('hide-chatbar');
			}
		});

		$(".close_profile").on('click', function () {
			$('.right-sidebar').addClass('hide-right-sidebar');
			$('.right-sidebar').removeClass('show-right-sidebar');
			if ( $(window).width() > 991 && $(window).width() < 1201) {
				$(".chat").css('margin-left', 0);
			}
			if ($(window).width() < 992) {
				$('.chat').removeClass('hide-chatbar');
			}
		});
		$(".nav-tabs a").on('click', function () {
			$(this).tab('show');
		});

		$(".chat-header .left_side i").on('click', function () {
			$('.left-sidebar').removeClass('hide-left-sidebar');
			$('.chat').removeClass('show-chatbar');
		});
			
	});

	//Rightside accordian
	$('.accordion-col .accordion-title').on('click', function () {
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});
	//Custom modal click for status view
	$('*[data-target="#status-modal"]').on('click', function () {
		$('body').addClass('custom-model-open');
	});
	$('.custom-status-close').on('click', function () {
		$('body').removeClass('custom-model-open');
	});
	
	// Tooltip
	if($('[data-toggle="tooltip"]').length > 0 ){
		$('[data-toggle="tooltip"]').tooltip();
	}

	//Custom scroll bar
	if ($(window).width() > 992) {
		if($('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').length > 0 ){
			$('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').mCustomScrollbar();
		}
	}
	
})(jQuery);

$('.chat-header .menu .menu-ico').click(function(){
	$('.chat-header .menu ul.list').slideToggle('fast');
});
$(document).click(function(){
	$(".chat-header .menu ul.list").slideUp('fast');
});
$(".chat-header .menu ul.list,.chat-header .menu .menu-ico").click(function(e){
	e.stopPropagation();
});
$('.chat-inp .emoji').click(function(){
	$('.emoji-dashboard').slideToggle('fast');
});
$(document).click(function(){
	$(".emoji-dashboard").slideUp('fast');
});
$(".chat-header .menu ul.list,.chat-inp .emoji").click(function(e){
	e.stopPropagation();
});
$('.emoji-dashboard li .em').click(function(){
	var emo = $(this).css('background-image').split('"')[1];
	$('.chat-inp .input').find('div').remove();
	$('.chat-inp .input').append('<img src="'+emo+'">');
	$(".emoji-dashboard").slideUp('fast');

});
$('.chat-inp .opts .send').click(function(){
	var val = $('.chat-inp .input').html();
	if (val.length > 0){
		$('.chat-body .chats-text-cont').append('<p class="chat-text"><span>'+val+'</span></p>')
	}
	$('.chat-inp .input').html('');
	$('.chats-text-cont div').remove();
});
$('input,.input').each(function(){
	tmpval = $(this).text().length;
	if(tmpval != '') {
		$(this).prev().addClass('trans');
		$(this).parent().addClass('lined');
	}
});
$('input,.input').focus(function() {
	$(this).prev().addClass('trans');
	$(this).parent().addClass('lined');
	$(document).keypress(function(e) {
		if(e.which == 13) {
			$('.chat-inp .opts .send').click();
		}
	});
}).blur(function() {
	if ($(this).text().length == ''){
		$(this).prev().removeClass('trans');
		$(this).parent().removeClass('lined');
	}
});
$(document).on("click","#emoji-picker",function(e){
	e.stopPropagation();
	 $('.intercom-composer-emoji-popover').toggleClass("active");
 });
 
 $(document).click(function (e) {
	 if ($(e.target).attr('class') != '.intercom-composer-emoji-popover' && $(e.target).parents(".intercom-composer-emoji-popover").length == 0) {
		 $(".intercom-composer-emoji-popover").removeClass("active");
	 }
 });
 
 $(document).on("click",".intercom-emoji-picker-emoji",function(e){
	 $(".test-emoji").append($(this).html());
 });
 
 $('.intercom-composer-popover-input').on('input', function() {
	 var query = this.value;
	 if(query != ""){
	   $(".intercom-emoji-picker-emoji:not([title*='"+query+"'])").hide();
	 }
	 else{
	   $(".intercom-emoji-picker-emoji").show();
	 }
 });