/* JQUERY
$("button").html();

$("a").attr("href", "https://www.yahoo.com");


$("button").click(function(){
    $("h1").css("color", "purple");

});

$("input").keypress(function(event){
    console.log(event.keypress);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");

});

$("button").on("click", function(){

    $("h1").hide();
});

$("button").on("click", function(){

    $("h1").animate({opacity: 0.5});
});
*/


$("button").on("click", function(){

    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

