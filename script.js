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

            <marquee direction="right" style="cursor: pointer;">
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
            <marquee direction="right" style="cursor: pointer;">
            
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
        atualizarNome()
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



function atualizarNome() {
    var foto = localStorage.getItem("fotoPerfil");
    var nome = localStorage.getItem("nome");

    var LE = document.getElementsByClassName("lado_esquerdo");

    // Verifica se há elementos com a classe "lado_esquerdo"
    if (LE.length > 0) {
        for (let i = 0; i < LE.length; i++) {
            LE[i].innerHTML = `<img src="${foto}" alt="Foto de perfil">
                               <h4>${nome ? nome : 'Usuário'}</h4>`;
        }
    }
    
}


function salvarItem() {
    var foto = localStorage.getItem("fotoPerfil")
    const input = document.getElementById("post");
    const item = input.value.trim(); // Pega o valor do input e remove espaços extras
    const nome = localStorage.getItem("nome"); // Obtém o nome armazenado no localStorage

    

    if (item) {
        if(foto) {
            console.log("olaaaaaaaaaaaa")
            // Gera um índice único para a chave do item
            const index = localStorage.length; // A chave será o índice atual
    
            // Cria o conteúdo HTML dinâmico com a interpolação correta
            const htmlContent = `
                <div class="publi2">
                    <div class="cima">
                        <div class="lado_esquerdo" id="LE">
                            
                        </div>
                        <i class="bi bi-sliders"></i>
                    </div>
                    <div class="meio">
                        <h1>${item}</h1>
                    </div>
                    <div class="baixo">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-chat-left-text"></i>
                        <i class="bi bi-share"></i>
                    </div>
                </div>
            `;
    
            // Armazena o conteúdo HTML com a chave sendo um índice único
            localStorage.setItem(`item_${index}`, htmlContent);
    
            // Limpa o campo de input
            input.value = '';
    
            // Chama a função para exibir os itens
            // exibirItensLocalStorage();
        } else {
            console.log("ola")
            // Gera um índice único para a chave do item
            const index = localStorage.length; // A chave será o índice atual
    
            // Cria o conteúdo HTML dinâmico com a interpolação correta
            const htmlContent = `
                <div class="publi2">
                    <div class="cima">
                        <div class="lado_esquerdo" id="LE">
                            <i class="bi bi-person"></i>
                            <h4>${nome}</h4>
                        </div>
                        <i class="bi bi-sliders"></i>
                    </div>
                    <div class="meio">
                        <h1>${item}</h1>
                    </div>
                    <div class="baixo">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-chat-left-text"></i>
                        <i class="bi bi-share"></i>
                    </div>
                </div>
            `;
    
            // Armazena o conteúdo HTML com a chave sendo um índice único
            localStorage.setItem(`item_${index}`, htmlContent);
    
            // Limpa o campo de input
            input.value = '';
    
            // Chama a função para exibir os itens
            // exibirItensLocalStorage();
        }
    }
}

function exibirItensLocalStorage() {
    var espaçoPubli = document.getElementById("espaçoPublis");

    // Verifica se o elemento existe no DOM
    if (!espaçoPubli) {
        console.error("Elemento com id 'espaçoPublis' não encontrado.");
        return;
    }

    // Limpa o conteúdo atual antes de exibir os novos itens
    espaçoPubli.innerHTML = '';

    // Cria uma variável para acumular os itens HTML
    let htmlContent = '';

    // Itera sobre todos os itens do LocalStorage
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i); // Pega a chave do item
        const valor = localStorage.getItem(chave); // Pega o valor (HTML) do item

        // Verifica se a chave começa com "item_" antes de adicionar o conteúdo
        if (chave.startsWith("item_")) {
            htmlContent += valor; // Adiciona o conteúdo HTML do item que corresponde ao padrão
        }
    }

    // Atualiza o conteúdo de espaçoPubli de uma vez só
    espaçoPubli.innerHTML = htmlContent;
    // location.reload();
}


// Espera o DOM estar carregado antes de adicionar o listener
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de clique ao botão de salvar
    document.getElementById("saveButton").addEventListener("click", salvarItem);

    // Chama a função para exibir os itens ao carregar a página
    exibirItensLocalStorage();
});








// document.addEventListener("DOMContentLoaded", function() {
//     function exibirItensLocalStorage() {
//         var espaçoPubli = document.getElementById("espaçoPublis");

//         // Verifique se o elemento existe antes de tentar acessar o innerHTML
//         if (espaçoPubli) {
//             // Limpa o conteúdo atual antes de exibir os novos itens
//             espaçoPubli.innerHTML = '';

//             // Cria uma variável para acumular os itens HTML
//             let htmlContent = '';

//             // Itera sobre todos os itens do LocalStorage
//             for (let i = 0; i < localStorage.length; i++) {
//                 const chave = localStorage.key(i); // Pega a chave do item
//                 const valor = localStorage.getItem(chave); // Pega o valor (HTML) do item

//                 // Acumula o conteúdo HTML
//                 htmlContent += valor;
//             }

//             // Atualiza o conteúdo de espaçoPubli de uma vez só
//             espaçoPubli.innerHTML = htmlContent;
//         } else {
//             console.error("Elemento com id 'espaçoPublis' não encontrado.");
//         }
//     }

//     // Chama a função para exibir os itens
//     exibirItensLocalStorage();
// });


// function postar() {
    //     var post = document.getElementById("post")

    
// }