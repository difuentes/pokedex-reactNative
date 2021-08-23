import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet,Image } from 'react-native';
import { SinglePokemon } from '../interface/Pokemoninterfaces';
import { FadeInImage } from './fadeInImage';


interface Prop{
    pokemon:SinglePokemon;
}

export const PokemonCard = ({pokemon}:Prop) => {
    return (
        <TouchableOpacity style={{marginTop:10}} activeOpacity={0.9}>
            <View style={styles.container}>            
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#'+ pokemon.id}
                </Text>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />
                <FadeInImage
                    uri={pokemon.picture}  
                    style={styles.pokemonImagen}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
        backgroundColor:'#CACFD2',
        height:120,
        width:170,
        marginVertical:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:10,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:10,
      
    },
    pokemonImagen:{
        width:110,
        height:110,
        position:'absolute',
        right:-7,
        bottom:-10
    },
    name:{
        fontWeight:'bold',
        color:'black',
        fontSize:20,
        top:10,
        left:10
        
    },
    pokebola:{
        width:100,
        height:100,
        position:'absolute',
        right:-20,
        bottom:-20,
        opacity:0.5
    }
})