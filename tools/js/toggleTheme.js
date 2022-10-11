"use strict";

$(function(){
    $(".toggle-theme-light").click(function(){
       //toggle moon/sun icon
       $(".toggle-theme-light").toggleClass("toggle-theme-dark");

       if (!$(".fotoG").hasClass("darkImg")) {
              //dark mode img class
              $(".fotoG1").addClass("darkImg");
              $(".fotoG2").addClass("darkImg");
              $(".fotoG3").addClass("darkImg");
              $(".biggerFoto").addClass("darkImg");
              //dark mode img src
              $(".fotoG1").attr('src','./tools/img/night1mobile.png');
              $(".fotoG2").attr('src','./tools/img/night2mobile.png');
              $(".fotoG3").attr('src','./tools/img/night3mobile.png');
              $(".biggerFoto").attr('src','./tools/img/nightPhoto.png');
       }
       else {
              //light mode img class
              $(".fotoG1").removeClass("darkImg");
              $(".fotoG2").removeClass("darkImg");
              $(".fotoG3").removeClass("darkImg");
              $(".biggerFoto").removeClass("darkImg");
              //light mode img src
              $(".fotoG1").attr('src','./tools/img/day1mobile.png');
              $(".fotoG2").attr('src','./tools/img/day2mobile.png');
              $(".fotoG3").attr('src','./tools/img/day3mobile.png');
              $(".biggerFoto").attr('src','./tools/img/dayPhoto.png');
       }
       
       if (!$(".shopifyLogotype").hasClass(".logo-dark")) {
              //dark mode brand logo
              $(".shopifyLogotype").addClass(".logo-dark");
              $(".shopifyLogotype").attr('src','./tools/icons/shopifyDevDark.png');
       }
       else {
              //light mode brand logo
              $(".shopifyLogotype").removeClass(".logo-dark");
              $(".shopifyLogotype").attr('src','./tools/icons/shopifyDev.png');
       }

       $(".bigHeader").toggleClass("bigHeader-dark");
       $(".navContainer").toggleClass("navContainer-dark");
       $(".navItem").toggleClass("navItem-dark");
       $(".navExpanded").toggleClass("navExpanded-dark");
       $(".dropdownButton").toggleClass("dropdownButton-dark");
       $(".dropdownArrow").toggleClass("dropdownArrow-dark");
       $(".biggerSearch").toggleClass("biggerSearch-dark");

       $(".body").toggleClass("body-dark");
       $(".tag").toggleClass("tag-dark");
       $(".gTag").toggleClass("gTag-dark");
       $(".greenBorders").toggleClass("greenBorders-dark");
       $(".blueBorders").toggleClass("blueBorders-dark");

       $(".bigMain").toggleClass("bigMain-dark");
       $(".texto1").toggleClass("texto1-dark");
       $(".texto").toggleClass("texto-dark");
       $(".laBorders").toggleClass("laBorders-dark");
       $(".laText").toggleClass("laText-dark");
       $(".revHearts").attr('src','./tools/img/heartsDark.png');
       
       $(".bigFooter").toggleClass("bigFooter-dark");
       $(".footer1").toggleClass("footer1-dark");
       $(".lf1Element").toggleClass("lf1Element-dark");
       $(".footer2").toggleClass("footer2-dark");
    });
});
