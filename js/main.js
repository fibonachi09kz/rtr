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
            clickable: true
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
        slidesPerView: 1,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            550: {
                slidesPerView: 2,
            },
            678: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 5,
            }
        }
    });
    var dopsSwiper = new Swiper(".dops-swiper", {
        grabCursor: true,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    const delay = (n) => {
		return new Promise (res => {
			let tm = setTimeout (() => res(tm), n);
		})
	}

    jQuery(function() {
        let wheels = document.querySelectorAll('.front-w');
        const anim = async (wh) => {
            for ( const e of wh) {
                for ( const a of wh ) {
                    a.classList.remove('an')
                }
                
                e.classList.add('an')
                await delay(2000)
            }
            anim(wheels)
        }
        anim(wheels)
    })

    window.addEventListener('scroll', function() {
		if (scrollY > 0 && scrollY < 140) {
			$('header').css({
				'position': 'absolute',
				'background-color': 'transparent',
                'box-shadow': 'none'
			});
		}
		if (scrollY > 140) {
			$('header').css({
				'position': 'fixed',
                'background-color': 'rgb(24 24 24 / 95%)',
                'box-shadow': '0px 10px 10px rgba(0, 0, 0, 0.3)'
			});
		}
	});

    $("a.lazy").on("click", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body, html').animate({
            scrollTop: top
        }, 700);
	});

    $.arcticmodal('setDefault', {
        openEffect: {
            type: 'fade',
            speed: 200
        },
        closeEffect: {
            type: 'fade',
            speed: 200
        },
    });


    $('.polit-modal-btn').click(function(e) {
        e.preventDefault();
        $('#polit-modal').arcticmodal();
    })

    $('address').click(function(e) {
        e.preventDefault();
        $('#map-modal').arcticmodal();
    })















})