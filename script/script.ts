  $(document).ready(function() {


    $(".innderdiv").append(
        `<div class="star">
        <span class="rating1">&#9733;</span>
        <span class="rating2">&#9733;</span>
        <span class="rating3">&#9733;</span>
        <span class="rating4">&#9733;</span>
        <span class="rating5">&#9733;</span>
        <span></span>
        </div>`);



       // // click animation rating

        $(".rating1").on('click', function(){
            $(this).addClass("active")
            $(this).nextAll().removeClass("active")
        });
        $(".rating2").on('click', function(){
            $(this).addClass("active")
            $(this).prevAll().addClass("active")
            $(this).nextAll().removeClass("active")

        });
        $(".rating3").on('click', function(){
            $(this).addClass("active")
            $(this).prevAll().addClass("active")
            $(this).nextAll().removeClass("active")
        });
        $(".rating4").on('click', function(){
            $(this).addClass("active")
            $(this).prevAll().addClass("active")
            $(this).nextAll().removeClass("active")
        });
        $(".rating5").on('click', function(){
            $(this).addClass("active")
            $(this).prevAll().addClass("active")
            $(this).nextAll().removeClass("active")
            //$(this).last().append("awesome")
        });
        


  });
