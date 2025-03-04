// var nome = localStorage.getItem("nome");

// console.log(nome);

// var fotoPerfil = localStorage.getItem("fotoPerfil");

// var areaFperfil = document.getElementById("imagemPerfil");

// areaFperfil.innerHTML = `
// <img src="${fotoPerfil}" alt="">
// <h1>${nome}</h1>
// `;
function logadoHome() {
  var logado = localStorage.getItem("logado");

  var nome = localStorage.getItem("nome");

  console.log(nome);

  var fotoPerfil = localStorage.getItem("fotoPerfil");

  var areaFperfil = document.getElementById("imagemPerfil");

//   areaFperfil.innerHTML = `
// <img src="${fotoPerfil}" alt="">
// <h1>${nome}</h1>`;

  if (logado === "true") {
    var foto = localStorage.getItem("fotoPerfil");
    
    var nome = localStorage.getItem("nome");
    if (foto) {
      // Limpa o conteúdo anterior
      areaFperfil.innerHTML = "";
      areaFperfil.innerHTML = `
            <img id="paraPerfil" src="${foto}" class="imagemPerfil" style="cursor: pointer; alt="">

            <h1>${nome}</h1>
            `;

      // // Cria um novo elemento de imagem
      // var img = document.createElement("img");
      // img.className = "imagemPerfil"
      // img.src = foto; // Define a fonte da imagem
      // img.alt = "Foto do perfil"; // Atributo alt
      // img.width = 1; // Define a largura da imagem

      // // Adiciona a imagem ao elemento fotoPerfil
      // fotoPerfil.appendChild(img);
    } else {
      var nome = localStorage.getItem("nome");
      console.log("Nenhuma foto de perfil encontrada.");
      areaFperfil.innerHTML = "";
      areaFperfil.innerHTML = `
      <img src="../imgs/icon_user.png" alt="">

            <h1>${nome}</h1>
            `;
    }
  } else {
    console.log("Usuário não está logado.");
  }
}

function redirecionarLogin() {
  window.location.href = "../login2/index.html";
}

window.onload = function () {
  var logado = localStorage.getItem("logado");

  if (logado === "true") {
    console.log("Usuário está logado.");
    logadoHome();
    // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
  } else {
    console.log("Usuário não está logado.");
    redirecionarLogin();
    // Aqui você pode redirecionar para a página de login, se necessário
  }
};
