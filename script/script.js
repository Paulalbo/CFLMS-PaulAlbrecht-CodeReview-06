$(document).ready(function () {
    $(".innderdiv").append("<div class=\"star\">\n        <span class=\"rating1\">&#9733;</span>\n        <span class=\"rating2\">&#9733;</span>\n        <span class=\"rating3\">&#9733;</span>\n        <span class=\"rating4\">&#9733;</span>\n        <span class=\"rating5\">&#9733;</span>\n        <span></span>\n        </div>");
    // // click animation rating
    $(".rating1").on('click', function () {
        $(this).addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating2").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating3").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating4").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    $(".rating5").on('click', function () {
        $(this).addClass("active");
        $(this).prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
        //$(this).last().append("awesome")
    });
});
