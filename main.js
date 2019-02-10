/* 

Programmer's Name: Emmanuel Pitcher
Date: 09-FEB-2019

*/

function loadTest(){
    document.querySelector('.loader').className += ' fade';
    document.body.style.position = 'static';
}
window.addEventListener('load', loadTest());
/*
document.querySelector('.loader')
    .addEventListener('touchmove',
    function(x){
        x.preventDefault();
    });
*/

//menu bar toggle
function slide(){
    let x = document.getElementsByClassName('slide-bar');
    if(x[0].style.opacity == '0.8'){
        x[0].style.opacity = '0';
    }else{
        x[0].style.opacity = '0.8';
    }
}

//shorten by init
let landingSpan = document.getElementById('land-name');
let navbar = document.getElementsByClassName('nav-bar')[0];
let logo = document.getElementById('logo');
let scrollAnim = document.getElementById('scroll-anim');

//On Scroll Events
let isScrolling;
window.addEventListener('scroll', function(){
    window.clearTimeout( isScrolling );
    
    isScrolling = setTimeout(function(){
        if(window.pageYOffset != '0'){
            navbar.style.opacity = '0.5';
            navbar.style['border-bottom'] = '1px solid red';
            landingSpan.style.color = 'red';
            scrollAnim.style.display = 'none';
        }else{
            navbar.style.opacity = '1';
            navbar.style['border-bottom'] = '1px solid greenyellow';
            landingSpan.style.color = 'greenyellow';
            scrollAnim.style.display = 'block';
        }
        }, 50);
}, false);

