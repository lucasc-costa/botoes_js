function mudançaPag(botao){
    var titulo = document.getElementById('titulo');
    var fundo = document.getElementsByTagName('body')[0]
    switch (botao) {
        case 1:
            titulo.style.background = "black";
            titulo.style.color= "white";
            fundo.style.background = "red";
            break;
        case 2:
            titulo.style.background = "yellow";
            titulo.style.color= "blue";
            fundo.style.background = "green";
            break;
        default:
            titulo.style.background = "red";
            titulo.style.color= "yellow";
            fundo.style.background = "black";
            break;
    }
    
    }