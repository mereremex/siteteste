
var nivelDificuldade;
var tempoJogo;
var quantidadedeFantasmas = 15;
var quantidadedeFantasmasCapturados = 0;
var cronometroId = null;

function IniciarJogo()
{
    var textoURL = window.location.search;
    niverDificuldade = parseInt( textoURL.substring(1, textoURL.lenght));

    if(nivelDificuldade == 1)
        tempoJogo = 120;
    else if(nivelDificuldade == 2)
        tempoJogo = 60;
    else tempoJogo = 30;

    document.getElementById("tempoJogo").innerHTML = tempoJogo;
    document.getElementById("fan").innerHTML = quantidadedeFantasmas;
    document.getElementById("fancap").innerHTML = quantidadedeFantasmasCapturados;

    CriarFantasmas(quantidadedeFantasmas);
    Cronometro(tempoJogo);
}

function CriarFantasmas(quantidadeFantasmas)
{
    for(i = 0; i < quantidadeFantasmas; i++)
    {
        var fan = document.createElement("img");
        fan.src = "img/fantasma_pequeno.png";
        fan.style.margin = "20px";
        fan.id = "fan" + i;
        fan.onclick = function(){
            CaçarFantasmas(this);
        }
        document.getElementById("cenario").appendChild(fan);
    }
}

function CaçarFantasmas(qualFantasma)
{
    var idfan = qualFantasma.id;
    document.getElementById(idfan).src="img/fantasma_capturado_pequeno.png";
    document.getElementById(idfan).setAttribute("onclick", "");

    document.getElementById("fan").innerHTML = --quantidadedeFantasmas;
    document.getElementById("fancap").innerHTML = ++quantidadedeFantasmasCapturados;

    if(quantidadedeFantasmasCapturados >= 9)
    FinalDeJogo(true);
}

function Cronometro(segundos)
{
    segundos --;
    if(segundos <= 0)
        {
            clearTimeout(cronometroId);
            FinalDeJogo(false);
        }
        document.getElementById("tempoJogo").innerHTML = segundos;
        cronometroId  = setTimeout("Cronometro(" + segundos +")", 1000);
}

function FinalDeJogo(ganhou)
{
    if(ganhou)
        window.alert("Parabén, você se tornou um caçador!");
    else
        window.alert("Acabou o tempo, o fantasma te possuiu!");
}