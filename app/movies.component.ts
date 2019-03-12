import {Component, OnInit} from '@angular/core';
import {Step0Component} from './step0.component';
import {Movie} from './movie';
import {MovieService} from './movie.service';
import {Router} from '@angular/router';
import {MOVIES} from './movie-list';
import {ProgressBarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
@Component({
    selector: 'movies',
    template:`
                  <p-growl [(value)]="msgs"></p-growl>
                  <p-progressBar [value]="value" ng-model="progress"></p-progressBar>
                  <div *ngIf="value==100">
                  <div class="img" *ngFor="let movie of movies" (click)="onSelect(movie)">
                    <a [routerLink]="['/step0',movie.id]">
                      <img src={{movie.picture}} alt={{movie.picture}} width="600" height="400">
                    </a>
                  </div>      
                  </div>
                     
            `,
    providers: [MovieService]
})

export class MoviesComponent implements OnInit{
  movies: Movie[];
  selectedMovie: Movie;
    value: number = 0;

    msgs: Message[];
  constructor(
    private movieService: MovieService,
    private router: Router
    ) { }

    getMovies(): void {
     this.movieService.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit(): void {
    this.getMovies();
    let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 90) + 1;
            if(this.value >= 100) {
                this.value = 100;
                this.msgs = [{severity: 'info', summary: 'Success', detail: 'Movie List Completed'}];
                clearInterval(interval);
            }
        }, 1500);
  }

  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
  }

  gotoDetail(): void {
    this.router.navigate(['/step0', this.selectedMovie.id]);
  }
}