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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var movies_component_1 = require('./movies.component');
var router_1 = require('@angular/router');
var cinemas_component_1 = require('./cinemas.component');
var county_component_1 = require('./county.component');
var primeng_1 = require('primeng/primeng');
var movie_service_1 = require('./movie.service');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var step0_component_1 = require('./step0.component');
var step1_component_1 = require('./step1.component');
var step2_component_1 = require('./step2.component');
var step3_component_1 = require('./step3.component');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var county_service_1 = require('./county.service');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var primeng_8 = require('primeng/primeng');
var primeng_9 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'movies',
                        component: movies_component_1.MoviesComponent
                    },
                    {
                        path: 'cinemas',
                        component: cinemas_component_1.CinemasComponent
                    },
                    {
                        path: 'county',
                        component: county_component_1.CountyComponent
                    },
                    {
                        path: 'step0/:id',
                        component: step0_component_1.Step0Component
                    },
                    {
                        path: 'step1',
                        component: step1_component_1.Step1Component
                    },
                    {
                        path: 'step2/:cinema',
                        component: step2_component_1.Step2Component
                    },
                    {
                        path: 'step3',
                        component: step3_component_1.Step3Component
                    },
                    {
                        path: '',
                        redirectTo: '/movies',
                        pathMatch: 'full'
                    }
                ]),
                primeng_1.AccordionModule,
                primeng_2.StepsModule,
                primeng_3.GrowlModule,
                primeng_4.DropdownModule,
                primeng_5.RadioButtonModule,
                primeng_6.MessagesModule,
                primeng_7.RatingModule,
                primeng_8.GalleriaModule,
                primeng_9.ProgressBarModule
            ],
            declarations: [
                app_component_1.AppComponent,
                movies_component_1.MoviesComponent,
                cinemas_component_1.CinemasComponent,
                county_component_1.CountyComponent,
                step0_component_1.Step0Component,
                step1_component_1.Step1Component,
                step2_component_1.Step2Component,
                step3_component_1.Step3Component
            ],
            providers: [movie_service_1.MovieService, county_service_1.CountyService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map