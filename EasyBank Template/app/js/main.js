const hamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeEle = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', function() {
    console.log('Clicked hamburger');

    if(header.classList.contains('open')) { //close hamburger menu
        body.classList.remove('no-scroll');
        header.classList.remove('open'); 
        fadeEle.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{ //open hamburger menu
        header.classList.add('open');  
        // fadeEle.classList.remove('has-fade');
        body.classList.add('no-scroll');
        fadeEle.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
})