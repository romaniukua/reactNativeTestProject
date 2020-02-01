const initialState = {
    moviesList: []
};

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'MOVIES_FETCH_DATA_SUCCESS': {
            store.moviesList = payload;
            return {
                ...store
            };
        }
    }
    return state;
}