$(function(){

    // Este es para hacer un scroll suave

    $('a').click(function(event){

        if (this.hash !== '') {
            
            event.preventDefault();

            var gato = this.hash;
          
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
               
                window.location.hash = gato;
            });
        }
    });

    // Fin scroll suave

    $('[data-toggle="popover"]').popover()
    
});
