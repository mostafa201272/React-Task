$(function(){

    // Hide Splash SCREEN afte 3 seconds
    setTimeout(function(){

        // Fade out the splash screen
        $("#splash-screen").fadeOut();

    }, 100)

    

    // Open Home Page
    $(document).on("click", "#page-icon-home-page", function(){
        $(this).addClass('active').siblings().removeClass('active')
        $("#home-page").fadeIn().siblings().fadeOut()
    });

    // Open Create Cutomer Page
    $(document).on("click", "#create-customer-page-link", function(){
        $("#create-customer-page").fadeIn().siblings().fadeOut()
        $('#page-icon-create-customer-page').addClass('active').siblings().removeClass('active')
    });
    
    // Open Create Cutomer Page
    $(document).on("click", "#page-icon-create-customer-page", function(){
        $(this).addClass('active').siblings().removeClass('active')
        $("#create-customer-page").fadeIn().siblings().fadeOut()
    });

    

});

