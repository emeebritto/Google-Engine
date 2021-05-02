var botao = document.querySelector("#other-botton");
var barra = document.querySelector("#pesquisa");
var elemento = document.querySelector(".imgif");
var logo = document.querySelector(".icon");

barra.addEventListener("input", function(event) {
	this.remove()
	logo.classList.add("desabilitar");
	elemento.classList.remove("imgif");
});

botao.addEventListener("click", function(event) {
	event.target.remove()
	logo.classList.add("desabilitar");
	elemento.classList.remove("imgif");
});