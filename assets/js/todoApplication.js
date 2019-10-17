$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    countLi();
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='fas fa-minus-square'></i></span> " + todoText + "</li>");
    };
});

function countLi() {
    if($("li").length >= 0) {
        console.log($("li").length)
    };
};

$("i.fas.fa-plus-square").clik(function() {
    $("input[type='text']").fadeOut();
});

// Idee om later uit te werken:
// - Todo maken om galgje te maken.
// $.ajax({
//     url:'http://www.example.com/somefile.ext',
//     type:'HEAD',
//     error: function()
//     {
//         //file not exists : Todo moet actief zijn.
//         
//     },
//     success: function()
//     {
//         //file exists : Todo moet veranderen in een "play galgje optie"
//     }
// });

// Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele