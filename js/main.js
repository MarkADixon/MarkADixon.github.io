var viewSection = "home";




$(document).ready( function (){
  var homeSymbol = $(".home__symbol");  
  var homeContainer = $(".home__container");
  var mainArea = $("main");
  var navButtons = $(".nav-main__button, .nav-mobile__button");
  
  homeSymbol.click( function (event){ 
    homeContainer.toggleClass("color-page--invert");
  });
  homeContainer.click( function (event){ 
    $(this).toggleClass("spin");
  });
  navButtons.click( function (event){
    //if already selected button was clicked, return doing nothing
    if($(this).hasClass("nav-main__button--selected") || $(this).hasClass("nav-mobile__button--selected")) { return; }
    //spin animation 
    var icon = $(this).children(".nav-main__icon, .nav-mobile__icon")
    icon.toggleClass("spin");
    //deselect class changes
    $(".nav-main__button--selected, .nav-mobile__button--selected").removeClass("nav-main__button--selected nav-mobile__button--selected");
    $(".nav-main__icon-top, .nav-mobile__icon-top").removeClass("color-button--invert nav-main__icon-top--selected nav-mobile__icon-top--selected");
    $(".nav-main__icon-base, .nav-mobile__icon-base").removeClass("color-button").addClass("color-button--invert");
    $(".button__hire .nav-main__icon-base").addClass("color-cta");
    $(".button__hire .nav-mobile__icon-base").addClass("color-cta");
    //flag section change
    if ($(this).hasClass("button__home")) viewSection = "home";
    else if ($(this).hasClass("button__about")) viewSection = "about";
    else if ($(this).hasClass("button__resume")) viewSection = "resume";
    else if ($(this).hasClass("button__portfolio")) viewSection = "portfolio";
    else if ($(this).hasClass("button__hire")) viewSection = "hire";
    //make transistion class changes on nav menus
    var selectString = ".button__"+viewSection;
    $(selectString).each( function () {
      //selected transition
      if ($(this).hasClass("nav-main__button")) {
        $(this).addClass("nav-main__button--selected");
        $(this).find(".nav-main__icon-top").addClass("color-button--invert nav-main__icon-top--selected");
        $(this).find(".nav-main__icon-base").removeClass("color-button--invert color-cta").addClass("color-button");
      }
      if ($(this).hasClass("nav-mobile__button")) {
        $(this).addClass("nav-mobile__button--selected");
        $(this).find(".nav-mobile__icon-top").addClass("color-button--invert nav-mobile__icon-top--selected");
        $(this).find(".nav-mobile__icon-base").removeClass("color-button--invert color-cta").addClass("color-button");
      }
    });
  });




});