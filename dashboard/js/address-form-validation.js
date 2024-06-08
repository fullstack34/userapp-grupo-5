document.addEventListener('DOMContentLoaded', () => {
    const addressForm = document.getElementById('addressForm');
    const cepField = document.getElementById('cep');
    const ruaField = document.getElementById('rua');
    const bairroField = document.getElementById('bairro');
    const cidadeField = document.getElementById('cidade');
    const ufField = document.getElementById('uf');
    const numeroField = document.getElementById('numero');
    const complementoField = document.getElementById('complement');

    const cepErro = document.getElementById('cepErro');
    const ruaErro = document.getElementById('ruaErro');
    const bairroErro = document.getElementById('bairroErro');
    const cidadeErro = document.getElementById('cidadeErro');
    const ufErro = document.getElementById('ufErro');
    const numeroErro = document.getElementById('numeroErro');

    cepField.addEventListener('input', () => {
        let cep = cepField.value.replace(/\D/g, '');
        if (cep.length > 5) {
            cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
        }
        cepField.value = cep;
    });

    addressForm.addEventListener('submit', (e) => {
        let isValid = true;
        
        window.localStorage.removeItem('todo-list')

        cepErro.textContent = '';
        ruaErro.textContent = '';
        bairroErro.textContent = '';
        cidadeErro.textContent = '';
        ufErro.textContent = '';
        numeroErro.textContent = '';

        if (cepField.value.length < 9) {
            cepErro.textContent = 'O CEP deve conter no mínimo 8 caracteres.';
            isValid = false;
        } else {
            window.localStorage.setItem('Cep', cepField.value)
        }
        if (ruaField.value.trim() === '') {
            ruaErro.textContent = 'Campo obrigatório.';
            isValid = false;
        } else {
            window.localStorage.setItem('Rua', ruaField.value)
        } 

        if (bairroField.value.trim() === '') {
            bairroErro.textContent = 'Campo obrigatório.';
            isValid = false;
        } else {
            window.localStorage.setItem('Bairro', bairroField.value)
        } 

        if (cidadeField.value.trim() === '') {
            cidadeErro.textContent = 'Campo obrigatório.';
            isValid = false;
        }else {
            window.localStorage.setItem('Cidade', cidadeField.value)
        } 

        if (ufField.value.trim().length !== 2) {
            ufErro.textContent = 'UF deve conter 2 caracteres.';
            isValid = false;
        }else {
            window.localStorage.setItem('UF', ufField.value)
                } 

        if (numeroField.value.trim() === '') {
            numeroErro.textContent = 'Campo obrigatório.';
            isValid = false;
        }else {
            window.localStorage.setItem('Numero', numeroField.value)
        } if (complementoField.value) {
            window.localStorage.setItem('Complemento', complementoField.value)
        }


        cepErro.classList.add('erro');
        ruaErro.classList.add('erro');
        bairroErro.classList.add('erro');
        cidadeErro.classList.add('erro');
        ufErro.classList.add('erro');
        numeroErro.classList.add('erro');

        if (!isValid) {
            e.preventDefault();
        }
    });
});
