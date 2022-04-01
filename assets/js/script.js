
const secSobre = document.querySelector('.sec_sobre');
const secWait = document.querySelector('.sec_wait');

document.addEventListener('scroll', function(){

    const screenHeight = window.innerHeight;
    const rec_sobre = secSobre.getBoundingClientRect().top;

    console.log(secSobre.getBoundingClientRect().top);
    console.log("Height: "+ (window.innerHeight / (2 + 200)));

    if(rec_sobre < (screenHeight / 2)){
        document.querySelector('.sobre_left_img').classList.add('animate__backInLeft');
        document.querySelector('.sobre_header').classList.add('animate__backInRight');
        document.querySelector('.sobre_description').classList.add('animate__backInRight');
    }

});

document.addEventListener('scroll', function(){

    const screenHeight = window.innerHeight;
    const rec_sobre = secWait.getBoundingClientRect().top;

    console.log(secSobre.getBoundingClientRect().top);
    console.log("Height: "+ (window.innerHeight / (2 + 200)));

    if(rec_sobre < (screenHeight / 2)){
        document.querySelector('.wait_left_img').classList.add('animate__backInLeft');
        document.querySelector('.wait_header').classList.add('animate__backInRight');
        document.querySelector('.wait_text').classList.add('animate__backInRight');
    }

});


