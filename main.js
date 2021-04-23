
    /*------------ TOGGLE MENU -----------------*/

    $nav = $(".nav");
    $check = $(".check");
    $navItems = $(".nav-items");
    $closeMenu = $(".closeMenu");
    $social = $(".social");
    $banner = $(".banner");
    $navLink = $(".nav-link");
    $scrollTop = $(".scrollTop");
    $brand = $(".nav-brand");
    $main = $(".main");
    $content = $(".content");

    // A $( document ).ready() block.
    $(document ).ready(function() {
      $content.fadeIn(5000, function(){
        $content.css("display", "block");
        $content.css("top", "30vh");
        $content.css("transition" ,"1.5s ease-in")
    })
  });
  
    function checkFalse(){
      $check.prop('checked', false);
    }

    $bodyWidth = $('body').width();

    $(window).resize(function() {
    if ($(window).width() >= 768) {
      checkFalse();
    }
    }).resize();

    $closeMenu.click(function(){
     checkFalse();
    });

    $brand.click(function(){
      checkFalse();
    });


    /*------------ SCROLLED NAVBAR -----------------*/

    $(document).scroll(function(){
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $scrollTop.toggleClass('bannerScrolled', $(this).scrollTop() > $banner.height());
    });

    /*------X----- SCROLLED NAVBAR --------X--------*/
