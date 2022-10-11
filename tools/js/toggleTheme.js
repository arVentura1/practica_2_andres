"use strict";
//
$(function(){
    //cuando hagamos click en el icono luna/sol
    $(".toggle-theme-light").click(function(){
       //dark/light icon
       $(".toggle-theme-light").toggleClass("toggle-theme-dark");
       //img src but dark mode
       $(".fotoG1").attr('src','./tools/img/night1mobile.png');
       $(".fotoG2").attr('src','./tools/img/night2mobile.png');
       $(".fotoG3").attr('src','./tools/img/night3mobile.png');
       $(".biggerFoto").attr('src','./tools/img/nightPhoto.png');
       //header
       $(".bigHeader").toggleClass("bigHeader-dark");
       $(".marketing-hamburger-button").toggleClass("marketing-hamburger-button-dark");
       $(".shopifyLogotype").attr('src','./tools/icons/shopifyDevDark.png');
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
       //$(".navButton").toggleClass("navButton-dark");
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

       
       /*
            Propiedades a editar:

            //header
             -> textos: color pasa a ser de dark a light
             -> iconos: color pasa a ser de dark a light (.dev, dropwdownArrow, lupa)
            //main
             -> (sustituir la equiqueta img por otra(?) / o quizá mejor cambiar la propiedad y por tanto el elemento)
             -> textos:
                    - headings pasan de dark a light
                    - textos pasan de dark a light
                    - enlaces pasan de midGrey a un azul (revisar color)
             -> box-shadows pasan del color que tenga a uno verde (revisar color original) 
             -> launchApps (fondito verde): 
                    - la parte blanca y verde pasan a ser dark
                    - textos light
                    - de laRevenue, el box shadow desaparece, aparece un borde fino verde con radio de algunos px
             -> community:
                    - textos light, fondos dark
                    - las box shadows desaparecen por un fondo verde fino
            //footer
             -> letras pasan de dark a light
             -> en footer2:
                    - el fondo pasa de grey a uno verdecito
                    - las letras creo que no pasan 
        */


    });
});
