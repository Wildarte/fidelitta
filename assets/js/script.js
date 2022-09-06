
const secSobre = document.querySelector('.sec_sobre');
const secWait = document.querySelector('.sec_wait');
const btn_open_menu = document.querySelector('.btn_menu');
const btn_close_menu = document.querySelector('.btn_close_menu');
const menu = document.querySelector('.menu_resp');

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

$('.menu ul li a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    //header_menu.classList.remove('open_header_menu');
   // menu_mobile_over.classList.remove('open_over_mobile');
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});


$('.header_cta a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});

btn_open_menu.addEventListener('click', function(){

    menu.classList.add('open_menu');

});

btn_close_menu.addEventListener('click', function(){

    menu.classList.remove('open_menu');

});


const btn_contato = document.getElementById('btn_contato');

if(btn_contato){

    btn_contato.addEventListener('click', (e) => {

        e.preventDefault();

        
        
        let name = document.getElementById('contatoName').value;
        let telefone = document.getElementById('contatoTelefone').value;
        let email = document.getElementById('contatoEmail').value;
        let msg = document.getElementById('contatoMsg').value;

        if(name == "" || telefone == "" || email == "" || msg == ""){
            alert('Preencha todos os campos');
            
            
        }else{

            btn_contato.innerText = "Enviando..."

            btn_contato.disabled = true;

            $.ajax({
                method: 'POST',
                url: 'https://formsubmit.co/ajax/wildarte10@gmail.com',
                dataType: 'json',
                accepts: 'application/json',
                data: {
                    nome: name,
                    telefone: telefone,
                    email: email,
                    mensagem: msg,
                    _subject: "Contato do site"
                },
                success: (data) => {
    
                    alert('Agradecemos o contato');
    
                    btn_contato.innerText = "Enviar";
                    btn_contato.disabled = false;
        
                    document.getElementById('contatoName').value = "";
                    document.getElementById('contatoTelefone').value = "";
                    document.getElementById('contatoEmail').value = "";
                    document.getElementById('contatoMsg').value = "";
                },
                error: (err) => console.log(err)
            });

        }
    
        
    
    });

}