const express = require('express');
const app = express();

function sumar(a, b) { return a + b; }
function saludo() { return "Hola DevSecOps"; }

app.get('/', (req, res) => res.send(saludo()));
app.get('/sumar/:a/:b', (req, res) => {
  res.json({ resultado: sumar(Number(req.params.a), Number(req.params.b)) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

module.exports = { sumar, saludo };
