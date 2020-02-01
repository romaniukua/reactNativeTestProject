import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const Movie = (props) => {
    // const { name, year } = props.movie;
    return (
        <View style = {styles.cardWrapper}>
            {/* <ImageBackground source={require('../../img/dark_phoenix.jpg')} style={{width: '100%', height: "100%", resizeMode: 'cover',}} />
            <View style = {styles.textWrapper}>
                <Text style = {styles.text}>{name}</Text>
                <Text style = {styles.text}>{year}</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: '45%',
        height: 200,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
        marginBottom: 10,
        position: 'relative',
        overflow: 'hidden'
    },
    textWrapper: {
        position: 'absolute',
        top: 130,
        width: '100%',
        height: 70,
        backgroundColor: '#e0e0eb95',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    text : {
        
    }
})

export default Movie;