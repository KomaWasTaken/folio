    var width = $(window).width();
        console.log(width);
        if ( width <= 1366)
        {
            var passion = document.getElementById('passion');
            var techno = document.getElementById('techno');
            var about = document.getElementById('apropos');
            
            var tooltipsDiv = $('.fp-tooltips');
            var checkActive = $('li a');
            
            var activeContent = $('li a div');

            about.removeAttribute('data-anchor');
            about.classList.remove('section');

            passion.setAttribute('data-anchor', 'passions');
            techno.setAttribute('data-anchor', 'dev');
            passion.classList.add('section');
            techno.classList.add('section');
            

            var anchor = ['index', 'passions', 'dev', 'coffeart', 'champispot', 'ddg', 'contact'];
            var tooltips = ['Index', 'Passions', 'Technologies', 'Coffeart', 'ChampiSpot', 'DDG', 'Me contacter'];
        }
        if (width < 1300){
            
            var navPosition = 'left';
            /* if (checkActive.classList.contains('active')){
                console.log(isActive.textContent);
                 if (activeContent.textContent == "Coffeart" || activeContent.textContent == "ChampiSpot" || activeContent.textContent == "DDG"){

                }
            } */
            console.log(navPosition);        
        }
        if (width > 1300){
            var navPosition = 'right';
            console.log(navPosition);
        } 
        if( width > 1366 ){
            var anchor = ['index', 'about', 'coffeart', 'champispot', 'ddg', 'contact'];
            var tooltips = ['Index', 'A propos', 'Coffeart', 'ChampiSpot', 'DDG', 'Me contacter'];
        }
    
        
        
    
$(function() {
    var projects = $("#Coffee");
    $(window).on('scroll', (function() { 
        var burger = $("#burger-toggle"); 
        var projectsTop = projects.offset().top;  
        var projscroll = $(window).scrollTop();
        if (projscroll >= projectsTop) {
            burger[0].classList.add("changed-burger");
        } else{
            burger[0].classList.remove("changed-burger");
        }
    }));
    
});
        
        
    
$(function() {


    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      hamburger.classList.toggle('color-1');
      $('#navigation').fadeToggle(500);
      $('#logo').fadeToggle(500);
    });
    var closeBurger = document.querySelector(".close");
    $( '.close' ).on("click", function(){
        hamburger.classList.toggle("is-active");
        $('#navigation').fadeToggle(500);
      });
}); 





    
