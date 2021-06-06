const axios = require('axios');
const express = require('express');

const app = express();



// letra A - sem id e sem nome

app.get("/pokemon/", (req, res) => {
    
    const inicio = Number(req.query.offset);
    const quantidade = Number(req.query.limit);
    if (!req.query.offset || !req.query.limit){
        res.json("É necessário inserir um valor inicial e a quantidade, favor revisar!")
    } else {
        getPokeList(inicio, quantidade).then((x) => res.json(x));
    }
});

async function getPokeList (offset, limit){
    const response = await axios.get(` https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    return response.data.results
};



// letra B
// async function getPokeIdName (idName){
//     const promiseOrigin = await axios.get(` https://pokeapi.co/api/v2/pokemon/${idName}`);
//     const {
//         id,
//         name,
//         height,
//         weight,
//         base_experience,
//         forms,
//         abilities,
//         species
//     } = promiseOrigin.data;

//     return {
//         id,
//         name,
//         height,
//         weight,
//         base_experience,
//         forms,
//         abilities,
//         species
//     }
// };

// getPokeIdName(1).then((x) => console.log(x));

app.listen(8000);