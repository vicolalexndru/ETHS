$(document).ready(function() {


   $('#navigation li').hover(function(){
    $(this).find('ul>li').stop().fadeToggle(400);
  });


   //------------------------ Start Wow Master ----------------------------// 

    wow = new WOW({ 
        animateClass: 'animated',
        offset:       100
    });
       
    wow.init();

   //----------------------- End Wow Master -----------------------------// 


   //------------------------ Start ShowMore ----------------------------// 


    $('.house_extension').showMore({
          speedDown: 300,
          speedUp: 300,
          height: '576px',
          showText: 'Read more',
          hideText: 'Hide'
    });


    $('.design_collapse, .bathroom_collapse').showMore({
          speedDown: 300,
          speedUp: 300,
          height: '290px',
          showText: 'Read more',
          hideText: 'Hide'
    });


    $('.question').showMore({
          speedDown: 300,
          speedUp: 300,
          height: '70px',
          showText: 'Show Answer',
          hideText: 'Hide'
    });

    //----------------------- End ShowMore -----------------------------// 

    
    //------------------------ Start Carousel --------------------------//

    $("#footer_testimonials, #testimonials_id").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigationText:false,
        autoPlay : true
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    $(".bathroom_carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
            itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
    
  //------------------------- End Carousel  -----------------------------//

  //------------------------ Start Toggle Menu --------------------------//

  $(".m-btn").click(function(){
      $("#header").slideToggle(800);
  });    

  //------------------------- End Toggle Menu --------------------------// 
  
  //------------------------ Start MagnificPopup -----------------------//

  $('.gallery_row').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
      enabled:true
    }
  });

  //------------------------- End MagnificPopup ------------------------// 
  
});