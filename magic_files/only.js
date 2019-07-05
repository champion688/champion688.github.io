
// banner
$(function(){
$('.slide_banner').slick({
	dots: true, 
	arrows: true,
	speed:1000,
	autoplay:true,
	autoplaySpeed:4000,
	fade:true
});
$('.slide_banner div').css("display","");	
});



// 菜单下拉
$("#menuph").click(function(){
	$(this).find(".point").toggleClass("active");
	$(".xialaph").slideToggle();
	$(".phonemeng").toggleClass('active');
	$("body,html").animate({
		scrollTop:0
	},500);
});
$(".xialaph h4").click(function(){
	$(this).siblings(".ul2").slideToggle();
	$(this).parent().siblings().find(".ul2,.ul3").slideUp();
	$(this).toggleClass("active");
	$(this).parent().siblings().find("h4,h5").removeClass('active');
});
$(".xialaph h5").click(function(){
	$(this).siblings(".ul3").slideToggle();
	$(this).parent().siblings().find(".ul3").slideUp();
	$(this).toggleClass("active");
	$(this).parent().siblings().find("h4,h5").removeClass('active');
});
$(".xialaph .lian h5").click(function(){
	$(this).siblings().toggleClass('active');
});

//返回顶部

$(".pf_down .l3").on("click", function () {
	$('body,html').animate({ scrollTop: 0 });
})
$(".pf_right .ico5").on("click", function () {
	$('body,html').animate({ scrollTop: 0 });
})

//友情链接
$('.inside_tit1_ph').click(function(){
	$(this).siblings(".inside_tit2").slideToggle();
});

//
$(".pz_SideLayer").slick({
  dots: true,
  infinite: false,
  variableWidth: true,
  onReInit:null
});


//头部搜索
$('.Search_but').click(function(){
	$('.so_but').slideToggle();
});

$(function(){
  var wow = new WOW({
	  boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 0,
	  mobile: true,
	  live: true
  });
  wow.init();
});











