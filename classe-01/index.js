const axios = require('axios');
const express = require('express');

const app = express();



// letra A - sem id e sem nome

app.get("/pokemon/", (req, res) => {

        getPokeList(Number(req.query.offset), Number(req.query.limit)).then((x) => res.json(x));
});

async function getPokeList (offset, limit){
    const response = await axios.get(` https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    return response.data.results
};



// letra B

app.get("/pokemon/:id", (req, res) => {
    getPokeIdName(req.params.id).then((x) => res.json(x));
});

async function getPokeIdName (idName){
    const promiseOrigin = await axios.get(` https://pokeapi.co/api/v2/pokemon/${idName}`);
    const {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    } = promiseOrigin.data;

    return {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    }
};



app.listen(8000);