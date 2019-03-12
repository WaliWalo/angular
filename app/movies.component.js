"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_service_1 = require('./movie.service');
var router_1 = require('@angular/router');
var MoviesComponent = (function () {
    function MoviesComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
        this.value = 0;
    }
    MoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().then(function (movies) { return _this.movies = movies; });
    };
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMovies();
        var interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 90) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                _this.msgs = [{ severity: 'info', summary: 'Success', detail: 'Movie List Completed' }];
                clearInterval(interval);
            }
        }, 1500);
    };
    MoviesComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    MoviesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/step0', this.selectedMovie.id]);
    };
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'movies',
            template: "\n                  <p-growl [(value)]=\"msgs\"></p-growl>\n                  <p-progressBar [value]=\"value\" ng-model=\"progress\"></p-progressBar>\n                  <div *ngIf=\"value==100\">\n                  <div class=\"img\" *ngFor=\"let movie of movies\" (click)=\"onSelect(movie)\">\n                    <a [routerLink]=\"['/step0',movie.id]\">\n                      <img src={{movie.picture}} alt={{movie.picture}} width=\"600\" height=\"400\">\n                    </a>\n                  </div>      \n                  </div>\n                     \n            ",
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.Router])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map