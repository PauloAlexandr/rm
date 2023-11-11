const formularioDeDados = document.getElementById('formulario');
function obterDadosDaTela(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const convenio = document.getElementById('convenio').value;
    return {
        nome,
        idade,
        sexo,
        convenio
    }
}
formularioDeDados.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(obterDadosDaTela());
})