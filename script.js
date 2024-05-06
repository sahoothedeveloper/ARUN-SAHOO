
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active')
    })
});


/*********Website loader************/ 

 setTimeout(function(){
     $('.preloader_bg').fadeToggle();
 },3000);

/*********Website loader************/   


 /****top button*****/
   
     $(document).ready(function(){ 
         $(window).scroll(function(){ 
             if ($(this).scrollTop() > 100) { 
                 $('#scroll').fadeIn(); 
             } else { 
                 $('#scroll').fadeOut(); 
             } 
         }); 
         $('#scroll').click(function(){ 
             $("html,").animate({ scrollTop: 0 }, 600); 
             return false; 
         }); 
     });
     
/****top button******/


/**********skills*************/ 

