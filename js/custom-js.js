$(document).ready(function(){
	// var links = [
 //                {   /* The first object will be the main button */
 //                    "bgcolor":"#cc6633",
 //                    "icon":"+",
 //                    "textalign":"center"
 //                },
 //                /* Following are the hidden button list */
 //                {
 //                    "tooltip":"test",
 //                    "bgcolor":"red",
 //                    "color":"#fffff",
 //                    "icon":"<i class='fa fa-phone'></i>",
 //                    "target":"_blank"
 //                },
 //                {
 //                    "url":"http://www.example.com",
 //                    "bgcolor":"black",
 //                    "color":"white",
 //                    "icon":"<i class='fa fa-map-marker'></i>"
 //                },
 //                {
 //                    "url":"http://www.example.com",
 //                    "bgcolor":"black",
 //                    "color":"white",
 //                    "icon":"<i class='fa fa-facebook'></i>"
 //                },
 //                {
 //                    "url":"http://www.example.com",
 //                    "bgcolor":"black",
 //                    "color":"white",
 //                    "icon":"<i class='fa fa-envelope'></i>"
 //                }
 //            ]

 //    	$('.kc_fab_wrapper').kc_fab(links);   
        $(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

});