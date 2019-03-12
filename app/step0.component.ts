import {Component, OnInit} from "@angular/core";
import {StepsModule,MenuItem} from 'primeng/primeng';
import {MoviesComponent} from './movies.component';
import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import {Movie} from './movie';
import {Step1Component} from './step1.component';
import {Step2Component} from './step2.component';
import {Step3Component} from './step3.component';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { MovieService } from './movie.service';
import {RatingModule} from 'primeng/primeng';
@Component({
    selector: 'step0',
    template: `
                <p-growl [value]="msgs"></p-growl>
                <p-steps [model]="items" [(activeIndex)]="activeIndex"
                 styleClass="steps-basic" [readonly]="true"></p-steps>
                <div *ngIf="movie">
                    <div class="clearfix">
                    <h1>{{movie.name}}</h1>
                    <nav>
                    <img src={{movie.picture}} alt={{movie.picture}} class="img" width="200" height="300">
                    </nav>
                    <section><b>Rating: </b><p-rating [ngModel]="3" readonly="true" stars="5" [cancel]="false"></p-rating></section>
                    &nbsp;
                    <section><b>Director: </b>{{movie.director}}</section>
                    &nbsp;
                    <section><b>Cast: </b>{{movie.cast}}</section>
                    &nbsp;
                    <section><b>Summary: </b>{{movie.summary}}</section>
                    &nbsp;
                    <section><b>Review: </b>{{movie.review}}</section>  
                    &nbsp;
                    <section><b><a href={{movie.trailer}} target="_blank">Watch Trailer</a></b></section>                  
                    &nbsp;
                    <section><button routerLink="/step1" class="button button1"><span>Choose Cinema</span></button></section>
                    </div>                     
                    &nbsp;
                </div>    
                
                 `,
    providers: [MovieService]
})

export class Step0Component implements OnInit{
    private items: MenuItem[];
    movie: Movie;
  
    constructor(
        private router: Router,
        private movieService: MovieService,
        private route: ActivatedRoute,
        private location: Location,        
        ) { }    

    //steps menu
    msgs: Message[] = [];
    
    activeIndex: number = 0;

    ngOnInit() {
        
        this.items = [{
                label: 'Movie Details',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Movie Details', detail: event.item.label});
                    let link = ["step0"];
                    this.router.navigate(link);
                }
            },
            {
                label: 'Cinema',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Choose Cinema', detail: event.item.label});
                    let link = ["step1"];
                    this.router.navigate(link);
                }
            },
            {
                label: 'County',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Choose County', detail: event.item.label});
                    let link = ["step2"];
                    this.router.navigate(link);
                }
            },
            {
                label: 'Time',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Time Details', detail: event.item.label});
                    let link = ["step3"];
                    this.router.navigate(link);
                }
            }
        ];
         //get movie detail
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.movieService.getMovie(id)
                .then(movie => this.movie = movie)                
        });  
        
    }
     
        
    
}