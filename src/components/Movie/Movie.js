import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { THEME } from '../../theme';

const Movie = (props) => {
    const { title, year, imgURL, id } = props.movie;
    return (
        <Link to={`/movie/${id}`} style={styles.cardLink} component={TouchableOpacity} activeOpacity={0.8}>
            <View style = {styles.cardWrapper}>
                <Image source={{uri: imgURL}} style={{width: '100%', height: "100%", resizeMode: 'cover',}} />
                <View style = {styles.textWrapper}>
                    <Text style = {{...styles.text, fontWeight: 'bold'}}>{ title }</Text>
                    <Text style = {styles.text}>{ year }</Text>
                </View>
            </View>
        </Link>
        
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: 140,
        height: 200,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
        marginBottom: 15,
        position: 'relative',
        overflow: 'hidden',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#000",
        elevation: 5,
    },
    textWrapper: {
        position: 'absolute',
        top: 130,
        width: '100%',
        height: 70,
        backgroundColor: '#ffffff98',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    cardLink : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    text: {
        color: THEME.FIRST_TEXT_COLOR,
    }
})

export default Movie;