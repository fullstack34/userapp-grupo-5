function carregarEndereco() {
    const addressList = document.getElementById('address-list');
    const enderecos = JSON.parse(localStorage.getItem('todo-list')) || [];

    enderecos.forEach((endereco, index) => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${index + 1}</td>
            <td>${endereco.CEP}</td>
            <td>${endereco.Rua}</td>
            <td>${endereco.numero}</td>
            <td>${endereco.Complemento || 'Opcional'}</td>
            <td>${endereco.Bairro}</td>
            <td>${endereco.Cidade}</td>
            <td>${endereco.UF}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="editarEndereco(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="excluirEndereco(${index})">Excluir</button>
            </td>
        `;

        addressList.appendChild(linha);
    });
};

function editarEndereco(index) {
    alert("Editar endereço com ID: " + index);
}

function excluirEndereco(index) {
    const enderecos = JSON.parse(localStorage.getItem('todo-list'));
    enderecos.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(enderecos));
    location.reload();
};

window.onload = carregarEndereco();
