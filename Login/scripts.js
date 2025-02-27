// document.getElementById('').addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         var lista = document.getElementById("lista");
//         var id = this.value;

//         fetch('produtos.json')
//             .then(response => response.json())
//             .then(teste => {
//                 teste.forEach(el => {
//                     if (el.id == id) {
//                         lista.innerHTML += `
//                             <li>${el.nome} ${el.preço.toFixed(2)}</li>
//                         `;

//                         var valorFormatado = parseFloat(el.preço);
//                         valorTotal += valorFormatado;

//                         document.getElementById("resultado").textContent = "Valor total: " + valorTotal.toFixed(2);
//                     }
//                 });
//                 this.value = "";
//             })
//             .catch(error => {
//                 console.log('Erro ao carregar o arquivo JSON:', error);
//             });
//     }
// });

function redirecionar() {
    // Defina o URL do site para o qual você deseja redirecionar
    var url = "../index.html";
    
    // Redireciona o usuário para a URL definida
    window.location.href = url;
}

function limparCampos() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    // Apaga os valores dos campos
    email.value = "";
    senha.value = "";
}

function Usuario() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

//   console.log(email, senha)

  fetch("users.json")
    .then((response) => response.json())
    .then((teste) => {
    let usuarioValido = false;
      teste.forEach((el) => {
        if (el.email == email && el.senha == senha) {
            usuarioValido = true;
            redirecionar()
        }
      });
      if(!usuarioValido) {
        limparCampos()
        alert("Email ou senha incorretos");
      }
      limparCampos()
    })
    .catch((error) => {
      console.log("Erro ao carregar o arquivo JSON:", error);
    });
}
