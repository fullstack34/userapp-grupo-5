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
        
        let taskList = window.localStorage.getItem('todo-list') ?? '[]';
        taskList = JSON.parse(taskList);
            

        cepErro.textContent = '';
        ruaErro.textContent = '';
        bairroErro.textContent = '';
        cidadeErro.textContent = '';
        ufErro.textContent = '';
        numeroErro.textContent = '';

        let ceptask = cepField.value;
        let ruatask = ruaField.value;
        let bairrotask = bairroField.value;
        let cidadetask = cidadeField.value;
        let uftask = ufField.value;
        let numerotask = numeroField.value;
        let complementtask = complementoField.value;

        if (cepField.value.length < 9) {
            cepErro.textContent = 'O CEP deve conter no mínimo 8 caracteres.';
            isValid = false;
        } 

        if (ruaField.value.trim() === '') {
            ruaErro.textContent = 'Campo obrigatório.';
            isValid = false;
        } 

        if (bairroField.value.trim() === '') {
            bairroErro.textContent = 'Campo obrigatório.';
            isValid = false;
        } 

        if (cidadeField.value.trim() === '') {
            cidadeErro.textContent = 'Campo obrigatório.';
            isValid = false;
        }

        if (ufField.value.trim().length !== 2) {
            ufErro.textContent = 'UF deve conter 2 caracteres.';
            isValid = false;
        }

        if (numeroField.value.trim() === '') {
            numeroErro.textContent = 'Campo obrigatório.';
            isValid = false;
        }


        cepErro.classList.add('erro');
        ruaErro.classList.add('erro');
        bairroErro.classList.add('erro');
        cidadeErro.classList.add('erro');
        ufErro.classList.add('erro');
        numeroErro.classList.add('erro');

        if (!isValid) {
            e.preventDefault();
            
        } else {

            taskList.push({
                CEP: ceptask, Rua: ruatask, Bairro: bairrotask, 
                Cidade: cidadetask, UF: uftask, numero: 
               numerotask, Complemento: complementtask })
    
            window.localStorage.setItem('todo-list', JSON.stringify(taskList));       
            
        }
    });
});
