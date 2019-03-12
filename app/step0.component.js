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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
var movie_service_1 = require('./movie.service');
var Step0Component = (function () {
    function Step0Component(router, movieService, route, location) {
        this.router = router;
        this.movieService = movieService;
        this.route = route;
        this.location = location;
        //steps menu
        this.msgs = [];
        this.activeIndex = 0;
    }
    Step0Component.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [{
                label: 'Movie Details',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Movie Details', detail: event.item.label });
                    var link = ["step0"];
                    _this.router.navigate(link);
                }
            },
            {
                label: 'Cinema',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Choose Cinema', detail: event.item.label });
                    var link = ["step1"];
                    _this.router.navigate(link);
                }
            },
            {
                label: 'County',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Choose County', detail: event.item.label });
                    var link = ["step2"];
                    _this.router.navigate(link);
                }
            },
            {
                label: 'Time',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Time Details', detail: event.item.label });
                    var link = ["step3"];
                    _this.router.navigate(link);
                }
            }
        ];
        //get movie detail
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.movieService.getMovie(id)
                .then(function (movie) { return _this.movie = movie; });
        });
    };
    Step0Component = __decorate([
        core_1.Component({
            selector: 'step0',
            template: "\n                <p-growl [value]=\"msgs\"></p-growl>\n                <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\"\n                 styleClass=\"steps-basic\" [readonly]=\"true\"></p-steps>\n                <div *ngIf=\"movie\">\n                    <div class=\"clearfix\">\n                    <h1>{{movie.name}}</h1>\n                    <nav>\n                    <img src={{movie.picture}} alt={{movie.picture}} class=\"img\" width=\"200\" height=\"300\">\n                    </nav>\n                    <section><b>Rating: </b><p-rating [ngModel]=\"3\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating></section>\n                    &nbsp;\n                    <section><b>Director: </b>{{movie.director}}</section>\n                    &nbsp;\n                    <section><b>Cast: </b>{{movie.cast}}</section>\n                    &nbsp;\n                    <section><b>Summary: </b>{{movie.summary}}</section>\n                    &nbsp;\n                    <section><b>Review: </b>{{movie.review}}</section>  \n                    &nbsp;\n                    <section><b><a href={{movie.trailer}} target=\"_blank\">Watch Trailer</a></b></section>                  \n                    &nbsp;\n                    <section><button routerLink=\"/step1\" class=\"button button1\"><span>Choose Cinema</span></button></section>\n                    </div>                     \n                    &nbsp;\n                </div>    \n                \n                 ",
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, movie_service_1.MovieService, router_2.ActivatedRoute, common_1.Location])
    ], Step0Component);
    return Step0Component;
}());
exports.Step0Component = Step0Component;
//# sourceMappingURL=step0.component.js.map