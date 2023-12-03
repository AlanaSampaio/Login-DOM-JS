let user = document.getElementById("usuario");
let senha = document.getElementById("senha");
let botao = document.getElementById("bnt")

botao.addEventListener("click", function() {

    let usuario = user.value;
    let pass = senha.value;

    if (usuario == "adm" && pass == "abc123") {
        alert("Senha e usuário corretos!")
    } else {
        alert("Erro ao inserir os dados, tente novamente!")
    }
})