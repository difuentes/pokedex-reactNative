import React from 'react'
import { Image, Text, View ,FlatList, ActivityIndicator} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { usePokemonPaginate } from '../hooks/usePokemonPaginate';
import { PokemonCard } from '../components/PokemonCard';
export const HomeScreen = () => {

    //Captura el valor de top de la pantalla
    const {top} = useSafeAreaInsets();
    //return a info de la api 
    const {simplePokemon,loaderPokemon} = usePokemonPaginate();
    
    return (
         <View>
           
            <View style={{alignItems:'center'}}>
                {/*FlatList */}
                <FlatList
                    ListHeaderComponent={ 
                        <Text style={{...styles.title,top:top+20,marginBottom:100,...styles.GlobalMargin,color:'#9E0000'}}>
                            Pokedex
                        </Text>
                    }
                    data={simplePokemon}   
                    keyExtractor={(pokemon)=>pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({item:pokemon})=> (
                        <PokemonCard pokemon={pokemon}/>
                        
                        )}
                    //infinite scroll
                    onEndReached={loaderPokemon}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={(
                        <ActivityIndicator 
                            size={30}
                            color='#9E0000'
                            style={{height:150}}
                        />
                    )}
                />
            </View>
            <Image
                style={styles.PokebolaBG}
                source={require('../assets/pokebola.png')}
            />
          
        </View>
       
    )
}
