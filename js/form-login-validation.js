if(!window.localStorage.getItem('logged-in')){
    window.localStorage.setItem('logged-in',false)
}

document.getElementById('form-login').addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('input-email');
    const senhaInput = document.getElementById('input-senha');
    const emailError = document.getElementById('email-error');
    const senhaError = document.getElementById('senha-error');

    emailError.textContent = '';
    senhaError.textContent = '';
    document.getElementById('senhaemail').style.display = 'none'

    let senhaLength = senhaInput.value.length;
    let hasError = false;

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    if (!emailInput.value.trim()) {
        emailError.textContent = 'Campo obrigatório.';
        hasError = true;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
        hasError = true;
    }

    if (!senhaInput.value.trim()) {
        senhaError.textContent = 'Campo obrigatório.';
        hasError = true;
    } else if (senhaLength < 8)  {
        senhaError.textContent = "Sua senha precisa ter no minímo 8 caracteres!"
        hasError = true;
    }

    if (!hasError) {
        if (!window.localStorage.getItem(emailInput.value)||JSON.parse(window.localStorage.getItem(emailInput.value)).senha !== String(senhaInput.value)){
            console.log('invalido')
            document.getElementById('senhaemail').style.display = 'flex'
        }else {
            document.getElementById('form-login').submit();
            window.localStorage.setItem('logged-in',true)
        }
        

    }
});


document.getElementById('input-email').addEventListener('focus', function () {
    document.getElementById('email-error').textContent = '';
});

document.getElementById('input-senha').addEventListener('focus', function () {
    document.getElementById('senha-error').textContent = '';
});



