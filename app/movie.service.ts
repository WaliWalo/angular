import {Movie} from './movie';
import {MOVIES} from './movie-list';
import { Injectable } from '@angular/core';
@Injectable()
export class MovieService {
    getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

    getMovie(id: number): Promise<Movie> {
    return this.getMovies().then(movies => movies.find(movie => movie.id === id));
    }      

}
