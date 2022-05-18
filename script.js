//Bloco 1
/* var nome = "Rafael";
var idade = 20;
alert("Bem vindo " + nome + "! Sua idade é de " + idade + " anos"); */

//Bloco 2

/*
var frase = "Japão é o melhor país do mundo!";
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
*/


//bloco 3

/*
var lista = ["maça","pera","laranja"];
console.log(lista);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
alert(lista[0]);

lista.push("uva"); //adiciona na lista
lista.pop(); //remove o ultimo item da lista
console.log(lista.reverse()); //imprime ao contrário
console.log(lista.toString());// traz a lista como uma string
console.log(lista.join("-"));// para definir a separação
*/


//Bloco 4
/*
var fruta = {nome:"maça", cor:"vermelho"};
console.log(fruta);
alert(fruta.cor);
*/



//bloco 5

/*
var d = new Date();
alert(d.getHours());
*/

//bloco 6

/*
function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite sua idade:");
console.log(validaIdade(idade));

alert(soma(5,10));
*/

// Bloco 7

function botao(){
    alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
}

function passar() {
    document.getElementById("teste").innerHTML = "Obrigado por passar";
}

function tirar() {
    document.getElementById("teste").innerHTML = "Passe o mouse aqui"
}