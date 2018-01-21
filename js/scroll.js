$(window).scroll(function(){
  
  var wScroll = $(this).scrollTop();
  
  if(wScroll > $('.btn-scroll-wrapper').offset().top) {
    
    $(".btn1").each(function(){
      
      $(".btn1").delay(800).fadeToggle(600);
      
    });
    } else if(wScroll < $('.btn-scroll-wrapper').offset().top){
        
        $('.btn1').each(function(){
           
            $('.btn1').hide();

            
        });        
    } 
    

});