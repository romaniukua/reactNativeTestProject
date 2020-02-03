import React, { Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { moviesFetchData } from '../../action/index';

import Movie from '../Movie/Movie';
import { THEME } from '../../theme';


class MoviesList extends Component {

    componentDidMount(){
        const { moviesFetchData } = this.props;
        moviesFetchData();
    }

    render(){
        const { moviesList } = this.props;
        return (
            <View style = {styles.container}>
                <View style = {styles.headerWrapper}>
                    <Text style = {styles.text}>MOVIES</Text>
                </View>
                <ScrollView contentContainerStyle = {styles.contentWrapper}>
                    {moviesList.map( movie => (<Movie movie = {movie} key={movie.id}/>))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME.BACKGROUND_COLOR_MAIN,
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
    },
    headerWrapper: {
        paddingVertical: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: THEME.FIRST_TEXT_COLOR,
    },
    contentWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
  });

const mapStateToProps = (state) => {
    const {moviesList} = state.movie;
    return {
        moviesList
    };
}

export default connect(mapStateToProps, { moviesFetchData })(MoviesList);