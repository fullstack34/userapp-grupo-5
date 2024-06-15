let form = document.getElementById('formulario');
let inputFields = document.querySelectorAll(".input-field")
let inputNome = document.getElementById('name');
let inputSobrenome = document.getElementById('lastname');
let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('password')
let inputConfirmarSenha = document.getElementById('confirm_password')
let inputChecked = document.querySelector('input[type="checkbox"]')
let termosDeUso = document.getElementById('termosErro');

document.body.style.overflow = 'hidden';

inputFields.forEach((Inputs) => {
    Inputs.style.margin = "12.5px 0"
})


form.addEventListener('submit', event => {
    event.preventDefault();
    let indentificarError = false

    document.body.style.overflow = 'auto';

    function isValidEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
    

let emailError = document.getElementById('emailErro');
let nomeError = document.getElementById('nomeErro');
let sobrenomeError = document.getElementById('sobrenomeErro')
let senhaError = document.getElementById('senhaErro');
let ConfirmSenhaError = document.getElementById('ConfirmErro');

// ErrorInp

let ErroInpNome = document.getElementById('inpNome');
let ErroInpSobrenome = document.getElementById('inpSobrenome');
let ErroInpEmail = document.getElementById('inpEmail');
let ErroInpSenha = document.getElementById('inpSenha');
let ErroInpConfirmSenha = document.getElementById('inpConfirmarSenha');

emailError.textContent = '';
nomeError.textContent = '';
sobrenomeError.textContent = '';
senhaError.textContent = '';
ConfirmSenhaError.textContent = '';

let indentificador = isValidEmail(inputEmail.value);

if(!inputEmail.value){
    emailErro.textContent = 'Campo obrigatório*'
    ErroInpEmail.style.borderBottom = '2px solid red'
    inputFields.forEach((Inputs) => {
        Inputs.style.marginBottom = "3.5px";
    })
   
    indentificarError = true
} else if (indentificador == false){
    emailErro.textContent = 'Por favor, insira um endereço de e-mail válido. *'
    ErroInpEmail.style.borderBottom = '2px solid red'
    inputFields.forEach((Inputs) => {
        Inputs.style.marginBottom = "3.5px";
    })

    indentificarError = true
} else {
    emailError.textContent = '';
    ErroInpEmail.style.borderBottom = '2px solid #ccc'

    !indentificarError
}



if(!inputNome.value) {
    nomeError.textContent = 'Campo obrigatório*'
    ErroInpNome.style.borderBottom = '2px solid red';
    indentificarError = true
} else {
    nomeError.textContent = '';
    ErroInpNome.style.borderBottom = '2px solid #ccc';
    inputFields.forEach((Inputs) => {
        Inputs.style.margin = "12.5px 0"
    })

    !indentificarError
}



if(!inputSobrenome.value) {
    sobrenomeError.textContent = 'Campo obrigatório*'
    ErroInpSobrenome.style.borderBottom = '2px solid red';
    indentificarError = true
} else {
    sobrenomeError.textContent = '';
    ErroInpSobrenome.style.borderBottom = '2px solid #ccc';
    inputFields.forEach((Inputs) => {
        Inputs.style.margin = "12.5px 0"
    })
    !indentificarError

}


if(!inputSenha.value) {
    senhaError.textContent = 'Campo obrigatório*'
    ErroInpSenha.style.borderBottom = '2px solid red';
    indentificarError = true
    
} else if (inputSenha.value.length < 8) 
 {
    senhaError.textContent = 'A senha precisa ter no minímo 8 caracteres.';
    ErroInpSenha.style.borderBottom = '2px solid red';

    indentificarError = true

} else {
    emailError.textContent = '';
    ErroInpSenha.style.borderBottom = '2px solid #ccc';
    inputFields.forEach((Inputs) => {
        Inputs.style.margin = "12.5px 0"
    })
    !indentificarError 

}

if(!inputConfirmarSenha.value) {
    ConfirmSenhaError.textContent = 'Campo obrigatório*'
    ErroInpConfirmSenha.style.borderBottom = '2px solid red';
    indentificarError = true


} else if (inputSenha.value != inputConfirmarSenha.value){
    ConfirmSenhaError.textContent = 'As senhas não coincidem. *'
    ErroInpConfirmSenha.style.borderBottom = '2px solid red';

    
    indentificarError = true
} else {
    ConfirmSenhaError.textContent = '';
    ErroInpConfirmSenha.style.borderBottom = '2px solid #ccc';
    inputFields.forEach((Inputs) => {
        Inputs.style.margin = "12.5px 0"
    })

    !indentificarError

}

if (!inputChecked.checked) {
    termosDeUso.classList.toggle('animate-color');
    indentificarError = true
} else {
    termosDeUso.style.color = '#ccc';
    !indentificarError
}


if(!indentificarError) {
    form.submit()

    window.localStorage.setItem(inputEmail.value,inputSenha.value);
    
}});
