import MovieService from '../service/index';

export const moviesFetchDataSuccess = movies => ({
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    payload: movies
})

export const moviesFetchData = () => {
    return (dispatch) => {
        const service = new MovieService();
        service.getMovies().then(movies => dispatch(moviesFetchDataSuccess(movies)));
    }
}

export const movieFetchDataSuccess = movie => ({
    type: 'MOVIE_FETCH_DATA_SUCCESS',
    payload: movie
})

export const movieFetchDataById = (id) => {
    return (dispatch) => {
        const service = new MovieService();
        service.getMovieById(id).then(movie => dispatch(movieFetchDataSuccess(movie)));
    }
}