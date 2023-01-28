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

    // Next Form
    $(document).on('click', '#btn-next', function(){
        $(this).closest('.form-step').removeClass('active').next().addClass('active');
        $(".steps-slider .active").last().addClass('active-bar');
        $(".steps-slider .active").last().next().addClass('active');
    })
    
    // Previous Form
    $(document).on('click', '#btn-prev', function(){
        $(this).closest('.form-step').removeClass('active').prev().addClass('active');
        $(".steps-slider .active").last().prev().removeClass('active-bar');
        $(".steps-slider .active").last().removeClass('active');
    })
});

