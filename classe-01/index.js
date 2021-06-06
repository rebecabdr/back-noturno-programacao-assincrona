const axios = require('axios');



// letra A - sem id e sem nome

async function getPokeList (offset, limit){
    const response = await axios.get(` https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    return response.data.results
};

getPokeList(0, 3).then((x) => console.log(x));

// letra B
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

getPokeIdName(1).then((x) => console.log(x));

