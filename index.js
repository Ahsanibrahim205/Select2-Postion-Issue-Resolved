// get Select2 Generated element dropdown
            var selct2Dropdown = $('body').children('.select2-container').eq(0);
            // get select2Element
            $(".select2-selection").click(() => {
                select2Dropdown();
                // Select2 dropdown show
                selct2Dropdown.css('display', 'block');
            });


            let select2Dropdown = (() => {
                // select2 Dropdown
                selct2Dropdown.css('position', 'fixed');
                selct2Dropdown.css('top', '0px !important');
                // get window scroll position
                var windowScroll = $(window).scrollTop();
                // get top position of select2 dropdown
                var selectElement = $('.zoom-out-table .select2-container').offset().top;
                // make a top for select2 dropdown set 35 according to your page
                let ResultTop = selectElement - windowScroll + 35;
                // convert int to string with px
                let finalTop = `${ResultTop.toString()}px`;
                // set select2 dropdown postion
                selct2Dropdown.children('span').css('top', finalTop);
            });

            // run select2Dropdown() function in desktop using scroll function
            $(window).scroll(function (event) {
                select2Dropdown()
            });
            // run select2Dropdown() function in desktop using touchmove function
            $('body').bind('touchmove', function (e) {
                select2Dropdown();
            });
        });
