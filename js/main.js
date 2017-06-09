




$(document).ready( function (){
  var homeSymbol = $(".home__symbol");  
  var homeContainer = $(".home__container");

  
  homeSymbol.click( function (event){ 
    homeContainer.toggleClass("color-primary--invert");
  });



});