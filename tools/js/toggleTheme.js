"use strict";
//
$(function(){
    //cuando hagamos click en el icono luna/sol
    $(".toggle-theme-light").click(function(){
       //dark/light icon
       $(".toggle-theme-light").toggleClass("toggle-theme-dark");
       
       //si no tiene la clase de darkImg añadirle el tag y poner las fotos en modo oscuro
       if (!$(".fotoG").hasClass("darkImg")) {
              //img src but dark mode
              $(".fotoG1").addClass("darkImg");
              $(".fotoG2").addClass("darkImg");
              $(".fotoG3").addClass("darkImg");
              $(".biggerFoto").addClass("darkImg");
              //
              $(".fotoG1").attr('src','./tools/img/night1mobile.png');
              $(".fotoG2").attr('src','./tools/img/night2mobile.png');
              $(".fotoG3").attr('src','./tools/img/night3mobile.png');
              $(".biggerFoto").attr('src','./tools/img/nightPhoto.png');
       }
       //si tiene la clase img, quitarsela y poner los elementos img daylight
       else {
              //img src but light mode
              $(".fotoG1").removeClass("darkImg");
              $(".fotoG2").removeClass("darkImg");
              $(".fotoG3").removeClass("darkImg");
              $(".biggerFoto").removeClass("darkImg");
              //
              $(".fotoG1").attr('src','./tools/img/day1mobile.png');
              $(".fotoG2").attr('src','./tools/img/day2mobile.png');
              $(".fotoG3").attr('src','./tools/img/day3mobile.png');
              $(".biggerFoto").attr('src','./tools/img/dayPhoto.png');
       }
       
       //general styles for dark theme
       //header
       $(".bigHeader").toggleClass("bigHeader-dark");
       $(".marketing-hamburger-button").toggleClass("marketing-hamburger-button-dark");
       
       //toggle shopify logo header
       if (!$(".shopifyLogotype").hasClass(".logo-dark")) {
              $(".shopifyLogotype").addClass(".logo-dark");
              $(".shopifyLogotype").attr('src','./tools/icons/shopifyDevDark.png');
       }
       else {
              $(".shopifyLogotype").removeClass(".logo-dark");
              $(".shopifyLogotype").attr('src','./tools/icons/shopifyDev.png');
       }
       $(".marketing-nav-item").toggleClass("marketing-nav-item-dark");
       $(".marketing-nav-expanded").toggleClass("marketing-nav-expanded-dark");
       $(".dropdownButton").toggleClass("dropdownButton-dark");
       $(".dropdownArrow").toggleClass("dropdownArrow-dark");
       $(".biggerSearch").toggleClass("biggerSearch-dark");

       //tag, gTag y blueBorders y greenBorders darán estilos a los colores generales
       $(".body").toggleClass("body-dark");
       $(".tag").toggleClass("tag-dark");
       $(".gTag").toggleClass("gTag-dark");
       $(".greenBorders").toggleClass("greenBorders-dark");
       $(".blueBorders").toggleClass("blueBorders-dark");

       //main
       $(".bigMain").toggleClass("bigMain-dark");
       $(".texto1").toggleClass("texto1-dark");
       $(".texto").toggleClass("texto-dark");
       $(".marketing-nav-container").toggleClass("marketing-nav-container-dark");
       $(".laBorders").toggleClass("laBorders-dark");
       $(".laText").toggleClass("laText-dark");
       //cambiar la imagen de los corazones por la misma pero darkmode
       $(".revHearts").attr('src','./tools/img/heartsDark.png');
       
       //footer
       $(".bigFooter").toggleClass("bigFooter-dark");
       $(".footer1").toggleClass("footer1-dark");
       $(".lf1Element").toggleClass("lf1Element-dark");
       $(".footer2").toggleClass("footer2-dark");
    });
});
