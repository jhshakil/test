import React from 'react';
import $ from 'jquery';


const Switcher = () => {
    // Switcher JS
    $('#switcher_open').on('click', function () {
        $(this).hide();
        $('#switcher_close').show();
        $('.switcher__icon').css('right', '280px');
        $('.switcher__items').css({
            'right': '0',
        });
    });

    $('#switcher_close').on('click', function () {
        $(this).hide();
        $('#switcher_open').show();
        $('.switcher__icon').css('right', '0');
        $('.switcher__items').css({
            'right': '-280px',
        });
    });

    // Mode JS
    $('.mode-type button').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');

        var mode_val = $('.mode-type button.active').attr('data-mode');
        if (mode_val == 'dark') {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
    });

    // Language JS
    $('.lang_dir button').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');

        var dir_val = $('.lang_dir button.active').attr('data-mode');
        if (dir_val == 'rtl') {
            $('body').addClass('dir-rtl');
        } else {
            $('body').removeClass('dir-rtl');
        }
    });

    // Cursor JS
    $('#cursor_style').on('change', function () {
        var cursor_val = $(this).val();

        if (cursor_val == '1') {
            $('.cursor1').hide();
            $('.cursor2').hide();
        } else {
            $('.cursor1').show();
            $('.cursor2').show();
        }
    });
    return (
        <div>
            <div className="switcher__area">
                <div className="switcher__icon">
                    <button id="switcher_open"><i className="fa-solid fa-gear"></i></button>
                    <button id="switcher_close"><i className="fa-solid fa-xmark"></i></button>
                </div>

                <div className="switcher__items">
                    <div className="switcher__item">
                        <div className="switch__title-wrap">
                            <h2 className="switcher__title">Cursor</h2>
                        </div>
                        <div className="switcher__btn">
                            <select name="cursor-style" id="cursor_style">
                                <option value="1">default</option>
                                <option selected value="2">animated</option>
                            </select>
                        </div>
                    </div>

                    <div className="switcher__item">
                        <div className="switch__title-wrap">
                            <h2 className="switcher__title">mode</h2>
                        </div>
                        <div className="switcher__btn mode-type wc-col-2">
                            <button data-mode="light">light</button>
                            <button className="active" data-mode="dark">dark</button>
                        </div>
                    </div>

                    <div className="switcher__item">
                        <div className="switch__title-wrap">
                            <h2 className="switcher__title">Language Support</h2>
                        </div>
                        <div className="switcher__btn lang_dir wc-col-2">
                            <button className="active" data-mode="ltr">LTR</button>
                            <button data-mode="rtl">RTL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Switcher;