$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("right").css('background-color', 'lime');
                } else {
                    $("right").css('background-color', 'white');
                }
            });
        });