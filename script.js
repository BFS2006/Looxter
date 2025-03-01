document.getElementById("toggleButton").addEventListener("click", function() {
    var area = document.getElementById("areaToggle");

    if (area.style.display === "flex") {
        area.style.animation = "toggleEsquerda 0.5s ease-in-out forwards";
        
        setTimeout(function() {
            area.style.display = "none";
        }, 500);
    } else {
        var area1 = document.getElementById("areaToggle2");
        if(area1.style.display === "flex") {
            area1.style.animation = "togglecima 0.5s ease-in-out forwards";
        
            setTimeout(function() {
            area1.style.display = "none";
            }, 500);

            area.style.display = "flex";
            area.style.animation = "toggleDireita 0.5s ease-in-out forwards";

        } else {
            area.style.display = "flex";
            area.style.animation = "toggleDireita 0.5s ease-in-out forwards";
        }
        area.style.display = "flex";
        area.style.animation = "toggleDireita 0.5s ease-in-out forwards";
    }
});


document.getElementById("home").addEventListener("click", function() {
    var conteiner = document.getElementById("c-home");

    // Usando transform: translateX() para mover o contêiner
    conteiner.style.transform = "translateX(0%)";
    // this.style.borderBottom = "4px solid #bf4a30";
    console.log("Movendo o contêiner para a página 1.");
});

document.getElementById("chat").addEventListener("click", function() {
    var conteiner = document.getElementById("c-home");

    // Usando transform: translateX() para mover o contêiner para a página 2
    conteiner.style.transform = "translateX(-50%)";
    console.log("Movendo o contêiner para a página 2.");
});

function logadoHome() {
    var logado = localStorage.getItem("logado");
    var fotoPerfil = document.getElementById("fPerfil");

    if (logado === "true") {
        var foto = localStorage.getItem("fotoPerfil");
        var nome = localStorage.getItem("nome")
        if (foto) {
            // Limpa o conteúdo anterior
            fotoPerfil.innerHTML = "";
            fotoPerfil.setAttribute("onclick", "irPerfil()");
            fotoPerfil.innerHTML = `
            <img id="paraPerfil" src="${foto}" class="imagemPerfil" style="cursor: pointer; alt="">

            <marquee direction="right">
            <span id="paraPerfil" style="font-size: 15px; cursor: pointer;">${nome}</span>
            </marquee>
            `

            // // Cria um novo elemento de imagem
            // var img = document.createElement("img");
            // img.className = "imagemPerfil"
            // img.src = foto; // Define a fonte da imagem
            // img.alt = "Foto do perfil"; // Atributo alt
            // img.width = 1; // Define a largura da imagem

            // // Adiciona a imagem ao elemento fotoPerfil
            // fotoPerfil.appendChild(img);
            
        } else {
            var nome = localStorage.getItem("nome")
            console.log("Nenhuma foto de perfil encontrada.");
            fotoPerfil.innerHTML = "";
            fotoPerfil.setAttribute("onclick", "irPerfil()");
            fotoPerfil.innerHTML = `<i class="bi bi-person-circle" cursor: pointer;" ></i>
            <marquee direction="right">
            
            <span cursor: pointer;">${nome}</span>
            </marquee>
            `
        }
    } else {
        console.log("Usuário não está logado.");
    }
}

function irPerfil() {
    var area1 = document.getElementById("areaToggle2");

    if (area1.style.display === "flex") {
        area1.style.animation = "togglecima 0.5s ease-in-out forwards";
        
        setTimeout(function() {
            area1.style.display = "none";
        }, 500);
    } else {
        var area = document.getElementById("areaToggle");
        if(area.style.display === "flex") {
            area.style.animation = "toggleEsquerda 0.5s ease-in-out forwards";
        
            setTimeout(function() {
            area.style.display = "none";
            }, 500);

            area1.style.display = "flex";
            area1.style.animation = "togglebaixo 0.5s ease-in-out forwards";

        } else {
            area1.style.display = "flex";
            area1.style.animation = "togglebaixo 0.5s ease-in-out forwards";
        }
    }
}

function Tperfil() {
    var logadoP = localStorage.getItem("logado");
    
    if (logadoP === "true") {
        console.log("Usuário está logado.");
        irPerfil()
        // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
    } else {
        console.log("Usuário não está logado.");
        // Aqui você pode redirecionar para a página de login, se necessário
    }
}

window.onload = function() {
    var logado = localStorage.getItem("logado");
  
    if (logado === "true") {
        console.log("Usuário está logado.");
        logadoHome();
        // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
    } else {
        console.log("Usuário não está logado.");
        redirecionarLogin()
        // Aqui você pode redirecionar para a página de login, se necessário
    }
}

function redirecionarLogin() {
    window.location.href = "./login2/index.html";
}

function redirecionarPerfil() {
    window.location.href = "./TelaPerfil/index.html";
}

function deslogar() {
    var logado1 = localStorage.getItem("logado");

    if(logado1 === "true") {
        localStorage.clear()
        location.reload();
    }
}

// function logadoHome() {
//     var logado = localStorage.getItem("logado");
//     var fotoPerfil = document.getElementById("fPerfil")

//     if(logado === true) {
//         fotoPerfil.innerHTML = localStorage.getItem("fotoPerfil")
//     } else {
//         console.log("Usuário não está logado.");
//     }
// }

// window.onload = function() {
//     var logado = localStorage.getItem("logado");
  
//     if (logado === "true") {
//       console.log("Usuário está logado.");
//       logadoHome()
//       // Aqui você pode fazer o que precisar para exibir informações do usuário, etc.
//     } else {
//       console.log("Usuário não está logado.");
//       // Aqui você pode redirecionar para a página de login, se necessário
      
//     }
//   }