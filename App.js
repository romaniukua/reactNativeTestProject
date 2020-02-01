import React, { Component } from 'react';
import { Provider } from 'react-redux'

import MoviesList from './src/components/MoviesList/MoviesList';

import store from './src/store'

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
        <MoviesList/>
      </Provider>
      
    );
  }
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
// });
