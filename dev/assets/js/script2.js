var width = $(window).width();
    
        new fullpage('#fullpage', {
            licenseKey: 'D46578CF-FD334FAC-AF095A2A-44D6CCC8',
            anchors: anchor,
            easing: 'easeOutCubic',
            slidesNavPosition: 'bottom',
            keyboardScrolling: true,
            animateAnchor: false,
            controlArrows: false,
            navigation: "true",
            responsiveHeight: 'auto',
            navigationTooltips : tooltips,
            navigationPosition : navPosition,
            showActiveTooltip:"true",
            fadingEffect:"true",
            responsiveWidth: 769,
            afterResponsive: function(isResponsive){

            },
            //options here
            autoScrolling:true,
            scrollHorizontally: true,
            
            });

function checkMenuColor(){
    var isActive = $('#fp-nav ul li a.active');
    var menuSpan = $('#fp-nav ul li a span, .fp-slidesNav ul li a span');
    var otherSpans = $('li a span');
    var toolTip = $('.fp-tooltip');
    if(isActive[0].lastChild.baseURI.indexOf("coffeart") !== -1 || isActive[0].lastChild.baseURI.indexOf("champispot") !== -1 || isActive[0].lastChild.baseURI.indexOf("ddg") !== -1){
        menuSpan.css({
            'border-color': '#222222',
            
        })
        otherSpans.css({
            'background-color': '#ffffff',
        })
        isActive[0].lastChild.style.backgroundColor = '#222222';
        toolTip.css({
            'color': '#222222',
            'font-weight' :'700',
        })
    
    }
    else{
        otherSpans.css({
            'background-color' : 'transparent',
        })
        isActive[0].lastChild.style.backgroundColor = '#ffffff';
        menuSpan.css({
            'border-color': 'white',
        })
        toolTip.css({
            'color': 'white',
        })
    }
}
function changeMenuColor(){
    var isActive = $('#fp-nav ul li a.active');
    var menuSpan = $('#fp-nav ul li a span, .fp-slidesNav ul li a span');
    var otherSpans = $('li a span');
    var toolTip = $('.fp-tooltip');
    if(window.location.href.indexOf("coffeartdetails") > -1 || window.location.href.indexOf("champispotdetails") > -1 || window.location.href.indexOf("ddgdetails") > -1){
        menuSpan.css({
            'border-color': '#222222',
            
        })
        otherSpans.css({
            'background-color': '#ffffff',
        })
        isActive[0].lastChild.style.backgroundColor = '#222222';
        toolTip.css({
            'color': '#222222',
            'font-weight' :'700',
        })
    
    }
    else{
        otherSpans.css({
            'background-color' : 'transparent',
        })
        isActive[0].lastChild.style.backgroundColor = '#ffffff';
        menuSpan.css({
            'border-color': 'white',
        })
        toolTip.css({
            'color': 'white',
        })
    }
}
if(width < 1300){
    checkMenuColor();
    setInterval(checkMenuColor,50);
}

changeMenuColor();
setInterval(changeMenuColor,50);

fullpage_api.setAllowScrolling(true);  