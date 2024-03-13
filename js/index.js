let indiceAtual = 0;
const secoes 
        = document.querySelectorAll("section");
const btnAvancar 
        = document.getElementById("avancar");
const btnVoltar 
        = document.getElementById("voltar");

function rolarParaSecao(indice){
    if(indice >= 0 && indice < secoes.length){
        secoes[indice]
            .scrollIntoView({ behavior: "smooth"});
        indiceAtual = indice;
    }
}

btnAvancar.addEventListener("click", function(){
    rolarParaSecao(indiceAtual + 1);
})

btnVoltar.addEventListener("click", function(){
    rolarParaSecao(indiceAtual - 1);
})

const botoesLikes = document.querySelectorAll('.like');
botoesLikes.forEach(like => {
    like.addEventListener("click", function(){
        this.classList.toggle("curti")
    });
});