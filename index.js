var btnSalvar = document.querySelector("#btn_salvar");

btnSalvar.addEventListener("click", function(event) {
    event.preventDefault();

    var formularioDeCaptura = document.querySelector("#formulario_de_captura");

    var primeiroNome = formularioDeCaptura.primeiro_nome.value;
    var email = formularioDeCaptura.email.value;
    var whatsapp = formularioDeCaptura.whatsapp.value;

    console.log("Primeiro Nome: "+primeiroNome);
    console.log("Email: "+email);
    console.log("Whats app: "+whatsapp);
});