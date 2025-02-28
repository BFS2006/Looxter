var nome = localStorage.getItem("nome");

console.log(nome)

var fotoPerfil = localStorage.getItem("fotoPerfil")

var areaFperfil = document.getElementById("imagemPerfil")

areaFperfil.innerHTML = `
<img src="${fotoPerfil}" alt="">
<h1>${nome}</h1>
`