import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from "react-router-native";

import MoviesList from './src/components/MoviesList/MoviesList';
import MovieDetails from './src/components/MovieDetails/MovieDetails';

import store from './src/store'

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
        <NativeRouter>
          <Route exact path="/" component={MoviesList} />
          <Route path = '/movie/:movieId' component={MovieDetails}/>
        </NativeRouter>
      </Provider>
    );
  }
}

export default App;