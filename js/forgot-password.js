let form = document.getElementById('form');
let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('senha');
let inputSenhaConfirm = document.getElementById('repeat');

form.addEventListener('submit', event =>{
    event.preventDefault();
    let indentifcErro = false

    function isValidEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
    
    let emailErro = document.getElementById('emailerro');
    let senhaErro = document.getElementById('senhaerro');
    let senhaConfirmErro = document.getElementById('confirmerro');
    
    emailErro.textContent = ''
    senhaErro.textContent = ''
    senhaConfirmErro.textContent = ''
    
    let indentificador = isValidEmail(inputEmail.value);
    
    if(!inputEmail.value){
        emailErro.textContent = 'Campo obrigatorio.'
        indentifcErro = true
    }else if (indentificador == false){
        emailErro.textContent = 'Por favor, insira um endereço de e-mail válido.'
        indentifcErro = true
    }

    if(!inputSenha.value){
        senhaErro.textContent = 'Campo obrigatorio.'
        indentifcErro = true
    }else if (inputSenha.value.length < 8){
        senhaErro.textContent = 'Sua senha precisa ter no minímo 8 caracteres.'
        indentifcErro = true
    }

    if(!inputSenhaConfirm.value){
        senhaConfirmErro.textContent = 'Campo obrigatorio.'
        indentifcErro = true
    }else if (inputSenha.value != inputSenhaConfirm.value){
        senhaConfirmErro.textContent = 'Senha nao indentificada.'
        indentifcErro = true
    }

    if(!indentifcErro){
        form.submit()
    }



});