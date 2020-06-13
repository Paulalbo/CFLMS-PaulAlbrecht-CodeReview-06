$(document).ready(function() { 

// get Data from JSON file
    let series = JSON.parse(data);

    let getimggrid = document.querySelector(".imggrid");
    let getcarousel = document.querySelector(".carousel");

    for (serie of series) {

        getimggrid.innerHTML +=
        `<div id="${serie.id}2" title="${serie.title}" image="${serie.image}" description="${serie.description}" class="seriesimg"><img src=\"${serie.image}\"></div>`;
        
        getcarousel.innerHTML +=
        `<div id="${serie.id}" title="${serie.title}" image="${serie.image_m}" description="${serie.description}" class="seriesimgm${serie.id}"><span id="${serie.id}">❤ </span><img src=\"${serie.image_m}\"></div>`;

        // show only the first 5 images in carousel div
        $(".carousel > div").slice(5).remove();
    }


    
        
// insert infocontainer div

$(".seriesimg").on("click", function() { 

        let title = $(this).attr("title");
        let image = $(this).attr("image");
        let description = $(this).attr("description");
        let id = $(this).attr("id");

        $(".infocontainer").remove();
        $(".imggrid").after(`<div class="infocontainer"><div><h1>${title}</h1><p>${description}</p></div><div><button id="closing">+</button><img src=\"${image}\"></div></div>`);
        
        // change opacity on chosen image
        $("img").removeAttr("style")
        $(`#${id} img`).css("opacity","1");
       
        // close button when infocontainer is open
        $("#closing").click(function() {
            $(".infocontainer").slideUp();
            $("img").removeAttr("style")

          });
        
           
});


    

    //click counter
    
    counter1 = 0
    counter2 = 0
    counter3 = 0
    counter4 = 0
    counter5 = 0
        
    $(".seriesimgm1").click(function() { 
        counter1++;

            $("#1 span").text("❤ " + counter1);
        });

    $(".seriesimgm2").click(function() { 
        counter2++;

            $("#2 span").text("❤ " + counter2);
        });
    
    $(".seriesimgm3").click(function() { 
        counter3++;

            $("#3 span").text("❤ " + counter3);
        });

    $(".seriesimgm4").click(function() { 
        counter4++;

            $("#4 span").text("❤ " + counter4);
        });

    $(".seriesimgm5").click(function() { 
        counter5++;

            $("#5 span").text("❤ " + counter5);
        });



        // sort function 
        $(".sort button").click(function() { 
            var movielist1 = $(".seriesimgm1");
            var movielist2 = $(".seriesimgm2");
            var movielist3 = $(".seriesimgm3");
            var movielist4 = $(".seriesimgm4");
            var movielist5 = $(".seriesimgm5");
            

        });

});

