import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Link } from "react-router-native";
import { THEME } from '../../theme';

const SimilarMovieItem = (props) => {
    const { title, imgURL, id } = props.movie;
    const { PADDING_HORIZONTAL } = THEME;
    const width = Dimensions.get('window').width - PADDING_HORIZONTAL*2;
    return (
        <Link to={`/movie/${id}`} component={TouchableOpacity} activeOpacity={0.8}>
            <View>
                <Image source={{uri: imgURL ? imgURL : ' '}} style={{width, height: 200, resizeMode: 'cover',}} />
                <Text style={styles.smallerTitleText}>{title.toUpperCase()}</Text>
            </View>
        </Link>
        
    )
}

const styles = StyleSheet.create({
    smallerTitleText: {
        color: THEME.SECOND_TEXT_COLOR,
        paddingVertical: 15,
        fontSize: 18,
        fontWeight: 'bold',
        maxWidth: Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    },
})

export default SimilarMovieItem;