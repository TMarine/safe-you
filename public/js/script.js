$.fn.circleText = function (diff) {
    $.each($(this), function(){
        const self = $(this), text = self.children('div');
        let deg = 0;
        const letters = text.text().split('');
        text.html('');
        for (const letter of letters) {
            deg += diff;
            $('<span></span>').text(letter).css('transform', 'rotate(' + deg + 'deg)').appendTo(text);
        }
        const rotate = self.data('rotate').split(',');
        if (rotate) {
            const transform = text.css('transform').split(',');
            text.css('transform', 'rotate('+rotate+') translate('+transform[4]+'px, 0)');
        }
    })
};

// Owl Carousel
$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4.4,
        margin: 0,
        loop: true,
        autoplay: true,
        autoPlay: 500,
        stagePaddingLeft: 100,
        nav: true
    });
});
// responsive menu
$(document).ready(function () {
    $('.sidebarbtn').click(function () {
        $('#mySidenav, body').toggleClass('active');
    });
    $('.closebtn').click(function () {
        $('#mySidenav, body').removeClass('active');
    });
});

$(function () {
    $(".circle-text").lettering();
});