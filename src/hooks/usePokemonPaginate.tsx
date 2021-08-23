import React,{useEffect, useRef} from 'react'
import { useState } from 'react';
import { pokemonAPi } from '../api/pokemonApi';
import { PokemonPaginateResponse, SinglePokemon, Result } from '../interface/Pokemoninterfaces';

export const usePokemonPaginate = () => {
    //url Api
    const nextPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

    //State
    const [simplePokemon,setSimplePokemon] = useState<SinglePokemon[]>([]);
    const [isloader,setIsLoader] =useState(false);

    //cargar pokemones de la api
    const loaderPokemon=async()=>{
        setIsLoader(true);
        const res = await pokemonAPi.get<PokemonPaginateResponse>(nextPage.current);
        nextPage.current = res.data.next;
        mapPokemonList(res.data.results);
    }

    //
    const mapPokemonList =(pokemonList: Result[]) =>{
        const newPokemonList:SinglePokemon[]=pokemonList.map(({name,url})=>{
            const urlPart = url.split('/');
            const id = urlPart[urlPart.length-2];
            const picture =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return{ id,picture,name}
            
        });
        //acumular pokemones antigos del state con los nuevos
        setSimplePokemon([...simplePokemon,...newPokemonList]);
        setIsLoader(false);
    }

    //use effect para recargar lista de pokemones
    useEffect(() => {
        loaderPokemon();
    }, [])

    //return de hook
    return{
        isloader,
        simplePokemon,
        loaderPokemon
    }
}
