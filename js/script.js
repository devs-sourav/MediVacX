$(function(){
    // banner-slider
    $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinity:true,
      autoplaySpeed: 1000,
      speed:2000,
      fade:true,
      prevArrow:'',
      nextArrow:''
    });
    $('.text_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinity:true,
      autoplaySpeed: 3000,
      speed:2000,
      dots:true,
      prevArrow:'.prev',
      nextArrow:'.next'
    });

  
  
});
new VenoBox({
  selector: '.my-video-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'fold'
});