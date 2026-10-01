function validar() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const msg = document.getElementById("mensagem");

    msg.style.color = "red";

    if (nome === "") {
        msg.innerHTML = "⚠️ O campo Nome é obrigatório!";
        return; 
    }
    
    if (email === "") {
        msg.innerHTML = "⚠️ O campo E-mail é obrigatório!";
        return;
    }
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        msg.innerHTML = "⚠️ Digite um formato de e-mail válido!";
        return;
    }

    if (idade === "") {
        msg.innerHTML = "⚠️ O campo Idade é obrigatório!";
        return;
    }
    
    if (isNaN(idade) || Number(idade) <= 0) {
        msg.innerHTML = "⚠️ A idade deve ser um número maior que zero!";
        return;
    }

    msg.style.color = "green";
    msg.innerHTML = "✅ Formulário enviado com sucesso!";
}

function multiplicar(a, b) {
    return a * b;
}

function testarMultiplicacao() {
    console.assert(multiplicar(3, 4) === 12, "Teste 1 falhou: 3 * 4 deveria ser 12");
    console.assert(multiplicar(-2, 5) === -10, "Teste 2 falhou: -2 * 5 deveria ser -10");
    console.assert(multiplicar(7, 0) === 0, "Teste 3 falhou: 7 * 0 deveria ser 0");
    
    console.log("Todos os testes de multiplicação passaram!");
}

testarMultiplicacao();