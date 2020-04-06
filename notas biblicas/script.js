//// SCRIPT MATERIALIZE //////////////////////////////////////////
// M.AutoInit(); // A inicialização automática permite inicializar todos os componentes de materialização com uma única chamada de função.

//Obs: Alguns recursos ainda precisam de outra chamada pra funcionar, como os abaixo

$(document).ready(function(){
    $('.tabs').tabs();
});

// $(".dropdown-button").dropdown({ hover: true, constrainWidth: false, coverTrigger: false });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {hover: false, constrainWidth: false, coverTrigger: false });
});


//////////////////////////////////////////////////////////////////

// carrega a função dentro da variável navExtended
var navExtended = document.getElementById ("navExtended");       
navExtended.addEventListener("load", abaContent());

function abaContent(){
    //cria a nav-content onde ficarão as abas com o capitulos
    var divContent = document.createElement("div");
    divContent.setAttribute("class", "nav-content brown lighten-3");

    //cria a lista com as abas          
    var ulAba = document.createElement("ul");
    ulAba.setAttribute("class", "tabs tabs-transparent tabs-fixed-width");
               
    //cria a li da aba
    for (var i = 1 ; i <= 2; i++){
        var liAba = document.createElement("li");
        liAba.setAttribute("class", "tab");

        //cria um link dentro da li que vai apontar para as anotações do capitulo
        var aCap = document.createElement("a");
        aCap.setAttribute("href", "#cap"+ i);
        //criar o titulo da aba
        var txtAba = document.createTextNode("Capítulo "+ i);

        aCap.appendChild(txtAba);
        liAba.appendChild(aCap);
        ulAba.appendChild(liAba);  
    } 
    
    divContent.appendChild(ulAba);
    navExtended.appendChild(divContent);
}

// carrega a função dentro da variável 'capitulo' que está conectada ao id 'capitulo' no html
var capitulo = document.getElementById ("capitulo");       
capitulo.addEventListener("load", funContCapitulo());

function funContCapitulo(){
    
    for(i = 0; i < listaCapitulos.length; i++){
        // cria a div com o conteudo dos capítulos, e pega esse conteúdo de uma lista de capítulos
        var cp = document.createElement("div");
        cp.setAttribute("id", listaCapitulos[i].id);
        cp.setAttribute("class", "col s12 spc");
        cp.innerHTML = listaCapitulos[i].conteudo;
        capitulo.appendChild(cp);
    }
}


// carrega a função dentro da variável 'notas' que está conectada ao id 'notas' no html 
var notas = document.getElementById("notas");       
notas.addEventListener("load", funNotas());

function funNotas(){
    
    for(i = 0; i < listaNotas.length; i++){
        // cria a div com o conteudo das notas, e pega esse conteúdo de uma lista de notas
        var nt = document.createElement("div");
        nt.setAttribute("id", listaNotas[i].id);
        nt.setAttribute("class", "dropdown-content formaNota z-depth-2");
        nt.innerHTML = listaNotas[i].conteudo;
        notas.appendChild(nt);
    }
}