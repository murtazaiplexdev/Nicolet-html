// toggleclass between top logo 
$(".top-menu a").click(function (e) {
    e.preventDefault();
    $(".top-menu a").removeClass("activelogo");
    $(this).addClass("activelogo");
});
// paly and pause video
var video = document.getElementById("heroVideo");

// Get the button
var btn = document.getElementById("playPauseVideo");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
// toggle class to switch play pause image
$(".playpause-video").click(function () {
    $(".playpause-video").toggleClass("pause");
});

// The resize function
function resize() {
    var vheight = $(window).height();
    var vwidth = $(window).width();
    $('.fullsize-background').css({
        'height': vheight,
        'width': vwidth
    });
};

// The scroll-down function
function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
    }, 500);
};

// Click to Scroll DOWN Functions
$('.scroll-next').click(function (event) {
    $(".wristwatch-wrap").addClass("animate-watches");
    scrollDown();
    event.preventDefault();
});

// Resize Container on window resize
$(window).resize(function () {

    resize();

});

// Mega slider
var $status = $('.pagingInfo');
var $slickElement = $('.megaslider-mini');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});


$('.mega-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.megaslider-mini',
    autoplay: false,
    speed: 800,
});
$('.megaslider-mini').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.mega-slider',
    focusOnSelect: true,
    vertical: true,
    verticalScrolling: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            vertical: false,
            verticalScrolling:false,
        }
      }]
});


$('.megaslider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.megasliderinner-mini',
    autoplay: false,
});
$('.megasliderinner-mini').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    asNavFor: '.megaslider-inner',
    focusOnSelect: true,
});

// js for faq starts here
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }
//   js for faq ends here