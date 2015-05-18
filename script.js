// JavaScript Document

$( document ).ready(function() {
    
    var tip = false;
    
    var settings = {
        sensitivity: 4,
        interval: 75,
        over: menuIn,
        out: menuOut
    };
    
   $(".small_text").first().click(function(){
        })
    
    $(".small_text").first().hoverIntent(settings);
    
    function menuIn(){
        $('.menu').fadeIn(400);
        $('.menu2').delay(100).fadeIn(400);
    }
    
    function menuOut(){
        $('.menu2').fadeOut("fast");
        $('.menu').delay(50).fadeOut("fast");
    }  
    
    
    $('.tuner').click(function(){
        if ($('.tipContainer').css('display')!=='none'){
            $('.tipContainer').fadeOut("fast");
        }
    });
    
    $('.button').click(function(){
        $('.tipContainer').fadeIn("fast");
        tip=true;
    });
    
    $('.tipContainer').click(function(){
        $('.tipContainer').fadeOut("fast");
        tip=false;
    });
    
    
    $('.button').click(function(){
        $('.tipContainer').fadeOut("fast");
        tip=false;
    });
    

    
});
        
        
            
    /*i don't have this working yet

    */
