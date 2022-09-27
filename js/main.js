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
























})