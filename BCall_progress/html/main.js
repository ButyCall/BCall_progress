const DEFAULT_TIME = 3000;

function startBar(text = 'Loading...', time = DEFAULT_TIME, options = {}) {
    const duration = Number(time) || DEFAULT_TIME;

    const $wrapper = $('#preloader-1');
    const $bar = $('.preloader-1');
    const $text = $('#loading-text');

    $text.text(text);

    $bar.stop(true, true)
        .removeAttr('style')
        .css({
            width: '0px'
        });

    if (options.color) {
        $bar.css('background-color', options.color);
    }

    if (options.customCSS && typeof options.customCSS === 'object') {
        $bar.css(options.customCSS);
    }

    $wrapper.stop(true, true).fadeIn(300);

    $bar.animate(
        {
            width: '98%'
        },
        duration,
        'linear',
        function () {
            $wrapper.fadeOut(600);
        }
    );
}

window.addEventListener('message', function (event) {
    const data = event.data || {};

    if (!data.text && !data.time) return;

    startBar(data.text, data.time, data.options);
});