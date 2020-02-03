import axios from 'axios';

export default class MovieService {
    _apiBase = 'https://api.themoviedb.org/3/discover/movie';
    _apiBaseForSingleMovie = 'https://api.themoviedb.org/3/movie';
    _apiToken = 'e8ae59d95e445da13e5a518624ac0972';

    async getResourse(url){
        const res = await axios(`${this._apiBase}${url}?api_key=${this._apiToken}`);
        return res;
    }

    async getMovieById(id){
        const res = await axios(`${this._apiBaseForSingleMovie}/${id}?api_key=${this._apiToken}`);
        const similarMovies = await axios(`${this._apiBaseForSingleMovie}/${id}/similar?api_key=${this._apiToken}`);
        const similarMoviesRes = similarMovies.data.results.map(item => this._transformSimilarMovie(item));
        const finalResult = this._transformMovie(res.data);
        finalResult['similarMovies'] = similarMoviesRes;
        return finalResult;
    }

    async getMovies(){
        const res = await this.getResourse('');
        return res.data.results.map(item => this._transformMovie(item));
    }


    _transformMovie(item){
        const { id, backdrop_path, title, overview, vote_average, release_date } = item;
        const year = release_date.split('-')[0];
        const imgURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;
        return {
            id,
            imgURL,
            title,
            overview,
            vote_average,
            year
        };
    }

    _transformSimilarMovie (item){
        const {id, backdrop_path, title} = item;
        const imgURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;
        return {
            id, 
            imgURL, 
            title
        }
    }
}