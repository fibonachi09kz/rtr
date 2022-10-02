document.addEventListener('DOMContentLoaded', () => {

    jQuery(function() {
        let expandBody = $('[data-expand]');
        expandBody.each(function() {
            let btn = $(this).find('[data-expand-button]');
            let content = $(this).find('[data-expand-content]');
            btn.click(function() {
                $(this).toggleClass('opened');
                if ($(this).hasClass('opened')) {
                    content.removeClass('hidden')
                } else {
                    content.addClass('hidden')
                }
            })
        })
    })

    jQuery(function() {
        let parent = $('.tabs__section');
        parent.each(function() {
            let switchers = $(this).find('.tab');
            let sections = $(this).find('.section');
            if ( switchers ) {
                let defaultTarget = $(this).find('.tab.active').data('section');
                sections.each(function() {
                    $(this).hide();
                    if ( $(this).data('section') == defaultTarget ) {
                        $(this).show();
                    }
                });
                switchers.on('click', function() {
                    if ( !$(this).hasClass('active') && $(this).find('a').length == 0) {
                        switchers.removeClass('active');
                        let targetSection = $(this).data('section');
                        sections.each(function() {
                            $(this).hide();
                            if ( $(this).data('section') == targetSection ) {
                                $(this).show();
                            }
                        });
                        $(this).addClass('active');
                    }
                });
            }
        });
    });

    const reviewsSwiper = new Swiper('.reviews__swiper', {
        spaceBetween: 30,
        slidesPerView: 4,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        }
    });
    const brandsSwiper = new Swiper('.brands__swiper', {
        loop: true,
        freeMode: true,
        spaceBetween: 60,
        grabCursor: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        speed: 2000,
        slidesPerView: 'auto'
    });
    var galleryCategoriesSwiper = new Swiper(".gallery-categories", {
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
            hide: false
        },
        slidesPerView: "auto",
        spaceBetween: 40,
        grabCursor: true
    });
    var servSwiper = new Swiper(".serv-swiper", {
        spaceBetween: 30,
        slidesPerView: 5,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        }
    });





















})