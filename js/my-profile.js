const e = {
    cta: $('.cta'),
    cta_close: $('.cta__close'),
    mood_icons: $('.mood__icons img')
}

e.cta_close.on('click', () => {
    e.cta.animate({ height: 0, opacity: 0 }, 1500, () => {
        e.cta.hide();
    });    
});


e.mood_icons.on('click', (e) => {
    const mood = e.target;
    const icons = $('.mood__icons');
    icons.addClass('mood__icons--closing');
    let c = document.getElementsByClassName('mood__icons--closing')[0];
    c.addEventListener("animationend", () => {
        icons.fadeOut(0);
        icons.html(mood)
        icons.css("justify-content", "center");
        icons.fadeIn(1500);
        $('.mood__icons img').animate({height: '120%', width: '120%'}, 1500, () => {

            setTimeout(() => {
                $('.mood__content').animate({ height: 0, opacity: 0 }, 2000, () => {
                    $('.mood__content').css('display', 'none');
                    $('.mood__shared').fadeIn();
                });
            }, 3000)

        });

    });
});
