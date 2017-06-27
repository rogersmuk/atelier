// App
// menu flags
function menu(id) {

    for(i=1;i<=3;i++) {

        var div = document.getElementById("conteudo"+i);

        if(i == id)
        
        {
            div.style.display = "block"
        }
        
        else
        
        {
            div.style.display = "none"
        }
    }
};

// menu flags
// add, remove "active" class
$(function() {

    var lista = $('.nav-tabs li');

    lista.click(function(e) {

        lista.each( function() {

            if (this == e.currentTarget) {
        
                $(this).toggleClass('active');
        
            } else  {
                
                $(this).removeClass('active');
        
            }
        })

    });

    //Menu mobile
    $( "#change-hamburguer" ).click(function() {

        $( "#menu-list" ).toggle( "slow");
        
    });

});
