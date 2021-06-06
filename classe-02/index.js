const express = require('express');
const axios = require('axios');
const fs = require('fs')

const app = express();

app.get('/enderecos/:cep', (req, res) =>{
    let cepConsulta = req.params.cep.split("");
    cepConsulta.splice(5, 0, "-");
    cepConsulta = cepConsulta.join("")



});



app.listen(8000);
