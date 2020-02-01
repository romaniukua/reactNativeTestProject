import MovieService from '../service/index';

export const moviesFetchDataSuccess = movies => ({
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    payload: movies
})

export const moviesFetchData = () => {
    return (dispatch) => {
        const service = new MovieService();
        service.getMovies().then(movies => dispatch(newsFetchDataSuccess(movies)));
    }
}