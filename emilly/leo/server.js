const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para ler dados de POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Dados de horários em memória
let horarios = [
    { horario: "08:00 - 09:00", status: "Já Agendado" },
    { horario: "09:00 - 10:00", status: "Disponível" },
    { horario: "10:00 - 11:00", status: "Disponível" },
    { horario: "11:00 - 12:00", status: "Já Agendado" },
    { horario: "13:00 - 14:00", status: "Disponível" }
];

// Rota para obter horários
app.get('/horarios', (req, res) => {
    res.json(horarios);
});

// Rota para agendar horário
app.post('/agendar', (req, res) => {
    const horarioEscolhido = req.body.horario;
    horarios = horarios.map(h =>
        h.horario === horarioEscolhido ? { ...h, status: "Já Agendado" } : h
    );
    res.redirect('/');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(Servidor rodando em http://localhost:${port});
});