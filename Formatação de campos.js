
function filtroValor(valor) {
    var vlBruto = document.getElementById(valor).value;
    vlBruto = Number(vlBruto.replace(/\D/g, ''));
    if (vlBruto === '' || parseInt(vlBruto) === 0) {
        vlBruto = '0';
    } else {
        vlBruto = parseInt(vlBruto) / 100;
        vlBruto = vlBruto.toLocaleString('pt-BR', { minimumFractionDigits: 2 }).replace(',', ',');
    }
    vlBruto = vlBruto.toLocaleString('pt-BR', { maximumFractionDigits: 2 }).replace(',', ',');
    document.getElementById(valor).value = vlBruto;
}

function formatarCNPJLogin (valor) {
    var docent = document.getElementById(valor).value;
    cnpj = docent.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    document.getElementById(valor).value = cnpj;
}

function formatarCNPJ(valor, natureza) {
    var Escolha = document.getElementById(natureza).value
    var docent = document.getElementById(valor).value;
    docent = docent.replace(/\D/g, '');
    if (Escolha === "1") {
        cnpj = docent.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
    else {
        cnpj = docent.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    document.getElementById(valor).value = cnpj;
}

function FormatarTelefone(valor) {
    var EditnrTelefone = document.getElementById(valor).value;
    EditnrTelefone = EditnrTelefone.replace(/\D/g, '');
    EditnrTelefone = EditnrTelefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    document.getElementById(valor).value = EditnrTelefone;
}

function FormatarCelular(valor) {
    var EditCelular = document.getElementById(valor).value;
    EditCelular = EditCelular.replace(/\D/g, '');
    EditCelular = EditCelular.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    document.getElementById(valor).value = EditCelular;
}


function FormatarCEP(valor) {
    var editCEP = document.getElementById(valor).value;
    editCEP = editCEP.replace(/\D/g, '');
    var editCEP = editCEP.replace(/(\d{5})(\d{3})/, "$1-$2");
    document.getElementById(valor).value = editCEP;
}

function validarEmail(valor) {
    function validarEmail(email) {
        const expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expressaoRegular.test(email);
    }

    const email = document.getElementById(valor).value;
    if (validarEmail(email)) {
    } 
    else {

        alert('E-mail invalido!');
        document.getElementById(valor).value = '';
    }

}

function numeroEndereco(valor) {
    var editNumero = document.getElementById(valor).value;
    editNumero = editNumero.replace(/\D/g, '');
    document.getElementById(valor).value = editNumero;
}
