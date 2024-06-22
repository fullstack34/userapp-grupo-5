async function buscarCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Error ao buscar CEP')
        }

        const data = await response.json()

        if (data.erro) {
            throw new Error('CEP não encontrado')
        }

        document.getElementById('rua').value = data.logradouro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('uf').value = data.uf || '';
    } catch (error) {
        console.error('Error', error)
        alert(error)
    }
};

function limparCampo() {
    document.getElementById('rua').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
}

function handleChangeCep(event) {
    const cep = event.target.value.replace(/\D+/g, '');

    if (cep.length === 8) {
        buscarCEP(cep)
    } else if (cep.length === 0) {
        limparCampo()
    }
};

document.getElementById('cep').addEventListener('input', handleChangeCep);
