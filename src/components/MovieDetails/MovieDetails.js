import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Link } from "react-router-native";
import { movieFetchDataById } from '../../action';
import { THEME } from '../../theme';

import SimilarMovieItem from '../SimilarMovieItem/SimilarMovieItem';

class MovieDetails extends Component {
    state = {
        movieData: {
            id: '_',
            imgURL: '',
            title: '',
            overview: '',
            vote_average: '',
            year: '',
            similarMovies: []
        },
        currentMovieId: ''
    }
    componentDidMount(){
        const { movieId } = this.props.match.params;
        const { movieFetchDataById } = this.props;
        const currMovie = this.props.detailedMovieInfoList[movieId];
        if(currMovie) {
            this.setState({
                movieData: currMovie
            });
        } else {
            movieFetchDataById(movieId);
        }
    }

    componentDidUpdate(){
        const currMovie = this.props.detailedMovieInfoList[this.state.currentMovieId];
        const { movieFetchDataById } = this.props;
        if(!currMovie){
            movieFetchDataById(this.state.currentMovieId);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const { movieId } = nextProps.match.params;
        const currMovie = nextProps.detailedMovieInfoList[movieId];
        const { id: prevMovieId } = prevState.movieData;
        if(prevMovieId !== movieId || currMovie){
            return {
                movieData: currMovie || {
                    id: '_',
                    imgURL: '',
                    title: '',
                    overview: '',
                    vote_average: '',
                    year: '',
                    similarMovies: []
                },
                currentMovieId: movieId
            }
        }
        return null;
    }

    render(){
        const { imgURL, title, overview, vote_average, year, similarMovies } = this.state.movieData;
        return (
            <View style={styles.container}>
                <ImageBackground source={{uri: imgURL ? imgURL : ' '}} style={{width: '100%', height: 200, resizeMode: 'cover', position: 'relative', marginBottom: 20}} >
                    <Text style={styles.vote_average_icon}>{`${vote_average*10}%`}</Text>
                </ImageBackground>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.plainText}>{year}</Text>
                    <Text style={styles.titleText}>
                        {title.toUpperCase()}
                    </Text>
                    <Text style={styles.smallerTitleText}>OVERVIEW:</Text>
                    <Text style={styles.plainText}>{overview}</Text>
                    <Text style={styles.smallerTitleText}>SIMILAR MOVIES:</Text>
                    <FlatList 
                        data={similarMovies}
                        renderItem = {({item}) => {
                            const { id, title, imgURL } = item;
                            const movie = {
                                id,
                                title,
                                imgURL
                            }
                            return <SimilarMovieItem movie = {movie}/>
                        }}
                        horizontal={true}
                        keyExtractor={item => `${item.id}`}
                    />
                    <View style={styles.linkContainer}>
                        <Link to='/' component={TouchableOpacity} activeOpacity={0.8}>
                            <Text style = {styles.smallerTitleText}>Come back to the Home page</Text>
                        </Link>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: THEME.BACKGROUND_COLOR_GREY,
    },
    link: {
        paddingTop: 30
    },
    vote_average_icon: {
        position: 'absolute',
        width: 60,
        height: 60,
        color: THEME.SECOND_TEXT_COLOR,
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#9E9E9E',
        borderRadius: 30,
        bottom: -30,
        right: 20,
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL
    },
    titleText: {
        color: THEME.SECOND_TEXT_COLOR,
        paddingBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    smallerTitleText: {
        color: THEME.SECOND_TEXT_COLOR,
        paddingBottom: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    plainText: {
        color: THEME.SECOND_TEXT_COLOR,
        paddingBottom: 20,
        fontSize: 14,
        textAlign: 'justify'
    },
    linkContainer: {
        alignItems:'center'
    }
});

const mapStateToProps = (state) => {
    const {detailedMovieInfoList} = state.movie;
    return {
        detailedMovieInfoList
    };
}

export default connect(mapStateToProps, {movieFetchDataById})(MovieDetails);