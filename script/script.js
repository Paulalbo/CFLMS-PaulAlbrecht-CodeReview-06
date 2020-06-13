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

        // show only the first 6 images in carousel div
        $(".carousel > div").slice(8).remove();
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
    counter6 = 0
    counter7 = 0
    counter8 = 0
        
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
    
    $(".seriesimgm6").click(function() { 
        counter6++;

            $("#6 span").text("❤ " + counter6);
        });
    
    $(".seriesimgm7").click(function() { 
        counter7++;

            $("#7 span").text("❤ " + counter7);
        });
    
    $(".seriesimgm8").click(function() { 
        counter8++;

            $("#8 span").text("❤ " + counter8);
        });



        // sort function ---> currently not working

        $(".sort button").click(function() { 
            var movielist1 = counter1
            var movielist2 = counter2
            var movielist3 = counter3
            var movielist4 = counter4
            var movielist5 = counter5
            var movielist6 = counter6
            var movielist7 = counter7
            var movielist8 = counter8

            alert("sorry currently not working")

            
        });

});

