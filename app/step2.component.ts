import {Component, OnInit} from "@angular/core";
import {StepsModule,MenuItem} from 'primeng/primeng';
import {MoviesComponent} from './movies.component';
import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import {DropdownModule} from 'primeng/primeng';
import {County} from './county';
import {SelectItem} from 'primeng/primeng';
import {COUNTYS} from './county-list';
import {Step0Component} from './step0.component';
import {Step1Component} from './step1.component';
import {Step3Component} from './step3.component';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {CountyService} from './county.service';
import {MessagesModule} from 'primeng/primeng';
@Component({
    selector: 'step2',
    template: `
                <p-growl [value]="msgs"></p-growl>
                <p-steps [model]="items" [(activeIndex)]="activeIndex"
                 styleClass="steps-basic" [readonly]="true"></p-steps>
                <div *ngIf="county">{{county.cinema}}</div>
                <p>&nbsp;</p>
               <p-dropdown [options]="countys" [(ngModel)]="selectedCounty" [filter]="true"></p-dropdown>
               &nbsp;
               <p>Selected County: {{selectedCounty ? selectedCounty.name : 'none'}}</p>
                
                <button (click)="goBack()" class="button button2"><span>Back</span></button>
                <button (click)="goNext()" class="button button1"><span>Next</span></button>
                <p-messages [value]="msgs"></p-messages>
                 `
})

export class Step2Component implements OnInit{
    private items: MenuItem[];
    countys: SelectItem[];
    selectedCounty: string;    
    county: County;
    countyList: County[];
    msgs: Message[] = [];
    getCountys(): void {
            this.countyService.getCountys().then(countyList => this.countyList = countyList);
            
        }
        
    constructor(private router: Router,
                private location: Location, 
                private route: ActivatedRoute,
                private countyService: CountyService,) {

        //get cinema detail
        this.route.params.forEach((params: Params) => {
            let cinema = params["cinema"];
            this.countyService.getCinema(cinema)
                .then(county => this.county = county)                
        });  

        this.countys = [];
        this.countys.push({label:'Select County', value:null});
        
        for (let i of COUNTYS){
            this.route.params.forEach((params: Params) => {
            let cinema = params["cinema"];
            if(i.cinema==cinema)
            this.countys.push({label: i.name, value:{id: i.id, name: i.name, cinema: i.cinema}});
            })
        }
      }

    //validation
    goNext(): void{
        if(this.selectedCounty==null)
        {
             this.msgs = [];
             this.msgs.push({severity:'error', summary:'Error Message', detail:'Please Select a County'});
        }            
        else            
            this.router.navigate(["/step3"]);
    }

   
    
    activeIndex: number = 2;

    goBack(): void {
    this.location.back();
    }

    ngOnInit() {
        this.getCountys();
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
                    this.msgs.push({severity:'info', summary:'Chose Cinema', detail: event.item.label});
                    let link = ["step1"];
                    this.router.navigate(link);
                }
            },
            {
                label: 'County',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Chose County', detail: event.item.label});
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
        
    }
}