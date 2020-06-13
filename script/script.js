$(document).ready(function() { 

// get Data from JSON file
    let series = JSON.parse(data);

    let getimggrid = document.querySelector(".imggrid");
    let getcarousel = document.querySelector(".carousel");

    for (serie of series) {

        getimggrid.innerHTML +=
        `<div id="${serie.id}" title="${serie.title}" image="${serie.image}" description="${serie.description}" class="seriesimg"><img src=\"${serie.image}\"></div>`;
        
        getcarousel.innerHTML +=
        `<div id="${serie.id}2" title="${serie.title}" image="${serie.image_m}" description="${serie.description}" class="seriesimgm"><span>&hearts; 0</span><img src=\"${serie.image_m}\"></div>`;

        // show only 5 images in carousel div
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


    $(".seriesimgm").on("click", function() { 

        let title = $(this).attr("title");
        let image = $(this).attr("image");
        let description = $(this).attr("description");
        let id = $(this).attr("id");

    
            let count = 0;
            $(this).onclick = function() {
            count += 1;
            $("span").append(`&hearts; ${count}`);
            }
          });
        
           
          

});

