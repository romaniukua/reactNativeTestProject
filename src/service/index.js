import axios from 'axios';

export default class MovieService {
    _apiBase = 'https://api.themoviedb.org/3/discover/movie';
    _apiToken = 'e8ae59d95e445da13e5a518624ac0972';
    _language= 'en-US';

    async getResourse(url){
        const res = await axios(`${this._apiBase}${url}?${this._apiToken}&language=${this._language}`);
        if(res.data.status !== 'ok'){
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`);
        }
        return res;
    }

    async getMovies(){
        const res = await this.getResourse('');
        return res.data.results.map(item => this._transformNews(item));
    }

    _transformMovie(item){
        console.log(item)
        return item;
    }
}