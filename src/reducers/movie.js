const initialState = {
    moviesList: [],
    detailedMovieInfoList: {'12': '12'}
};

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'MOVIES_FETCH_DATA_SUCCESS': {
            state.moviesList = payload;
            return {
                ...state
            };
        }
        case 'MOVIE_FETCH_DATA_SUCCESS': {
            
            state.detailedMovieInfoList = {
                [payload.id]: payload,
                ...state.detailedMovieInfoList
            }

            return {
                ...state
            }
        }
    }
    return state;
}