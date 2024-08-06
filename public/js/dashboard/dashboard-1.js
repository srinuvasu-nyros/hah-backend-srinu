(function($) {
    "use strict"


    //todo list
    $(".tdl-new").on('keypress', function(e) {

        var code = (e.keyCode ? e.keyCode : e.which);

        if (code == 13) {

            var v = $(this).val();

            var s = v.replace(/ +?/g, '');

            if (s == "") {

                return false;

            } else {

                $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>" + v + "</span><a href='#' class='ti-trash'></a></label></li>");

                $(this).val("");

            }

        }

    });





    $(".tdl-content a").on("click", function() {

        var _li = $(this).parent().parent("li");

        _li.addClass("remove").stop().delay(100).slideUp("fast", function() {

            _li.remove();

        });

        return false;

    });



    // for dynamically created a tags

    $(".tdl-content").on('click', "a", function() {

        var _li = $(this).parent().parent("li");

        _li.addClass("remove").stop().delay(100).slideUp("fast", function() {

            _li.remove();

        });

        return false;

    });








})(jQuery);

function user_bars(data){
    (function($) {
        "use strict"


         // LINE CHART
          // Morris bar chart
     Morris.Bar({
        element: 'morris-bar-chart',
        data: data,
        xkey: 'role',
        labels: ['count'],
        ykeys: ['count'],
        barColors: ['#7571f9'],
        hideHover: 'auto',
        gridLineColor: 'transparent',
        resize: true
    });
    })(jQuery);
}

function donut_chart(data) {
    Morris.Donut({
        element: 'morris-donut-chart',
        data: data,
        resize: true,
        colors: ['#4d7cff', '#7571F9', '#9097c4']
    });
}