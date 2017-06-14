var viewSection = "#home";




$(document).ready( function (){
  var homeSymbol = $(".home__symbol");  
  var homeContainer = $(".home__container")
  var navButton = $(".nav__button");
  var cards = $(".card")
  
  
  homeSymbol.on('click', function(event) { 
    homeContainer.toggleClass("color-page color-page--invert");
  });

  cards.on('click', function(event) { 
    cards.toggleClass("color-page color-page--invert");
  });

  //view changes on navigation click
  navButton.on('click', function(event) { 
    var selectSection = "#"+this.dataset.linkto;
    var selectSectionButtons = ".button__"+this.dataset.linkto;
    //cancel if destination view is same as current view
    if (viewSection === selectSection) { return; }
    //update to the destination view
    viewSection = selectSection;
    $("section").removeClass("section--show");
    $(selectSection).addClass("section--show");
    //nav menu deselect class changes
    $(".nav-main__button--selected, .nav-mobile__button--selected").removeClass("nav-main__button--selected nav-mobile__button--selected");
    $(".nav-main__icon-top, .nav-mobile__icon-top").removeClass("color-button--invert nav-main__icon-top--selected nav-mobile__icon-top--selected");
    $(".nav-main__icon-base, .nav-mobile__icon-base").removeClass("color-button").addClass("color-button--invert");
    $(".button__hire .nav-main__icon-base").addClass("color-cta");
    $(".button__hire .nav-mobile__icon-base").addClass("color-cta");
    //nav menu selected class changes 
    $(selectSectionButtons).each( function () {
      //selected transition
      if ($(this).hasClass("nav-main__button")) {
        $(this).addClass("nav-main__button--selected");
        $(this).find(".nav-main__icon-top").addClass("color-button--invert nav-main__icon-top--selected");
        $(this).find(".nav-main__icon-base").removeClass("color-button--invert color-cta").addClass("color-button");
        //spin animation 
        $(this).find(".nav-main__icon").toggleClass("spin");
      }
      if ($(this).hasClass("nav-mobile__button")) {
        $(this).addClass("nav-mobile__button--selected");
        $(this).find(".nav-mobile__icon-top").addClass("color-button--invert nav-mobile__icon-top--selected");
        $(this).find(".nav-mobile__icon-base").removeClass("color-button--invert color-cta").addClass("color-button");
        //spin animation 
        $(this).find(".nav-mobile__icon").toggleClass("spin");
      }
    });
  });



});