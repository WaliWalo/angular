import {Component} from "@angular/core";
import {StepsModule,MenuItem} from 'primeng/primeng';
import {MoviesComponent} from './movies.component';
import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';
import {Step0Component} from './step0.component';
import {Step2Component} from './step2.component';
import {Step3Component} from './step3.component';
import {RadioButtonModule} from 'primeng/primeng';
import {County} from './county';
import {COUNTYS} from './county-list';
import {CountyService} from './county.service'
@Component({
    selector: 'step1',
    template: `
                <p-growl [value]="msgs"></p-growl>
                <p-steps [model]="items" [(activeIndex)]="activeIndex"
                 styleClass="steps-basic" [readonly]="true"></p-steps>
                <h3 class="first">Choose Cinema</h3>
                    <div class="ui-g" style="width:250px;margin-bottom:10px" (click)="onSelect(cinema)" >
                        <div class="ui-g-12"><p-radioButton name="group1" value="Odeon Cinema" label="Odeon Cinema" [(ngModel)]="val1"></p-radioButton></div>
                        <div class="ui-g-12"><p-radioButton name="group1" value="IMC Cinemas" label="IMC Cinema" [(ngModel)]="val1"></p-radioButton></div>
                        <div class="ui-g-12"><p-radioButton name="group1" value="Omniplex Cinemas" label="Omniplex Cinema" [(ngModel)]="val1"></p-radioButton></div>
                        <div class="ui-g-12"><p-radioButton name="group1" value="Cineworld Cinema" label="Cineworld Cinema" [(ngModel)]="val1"></p-radioButton></div>
                        <div class="ui-g-12"><p-radioButton name="group1" value="Irish Film Institute" label="Irish Film Institute" [(ngModel)]="val1"></p-radioButton></div>
                    </div>

                    <p>Selected Cinema: {{val1||'none'}}</p>
                <button (click)="goBack()" class="button button2"><span>Back</span></button>
                <button [routerLink] = "['/step2',val1]" class="button button1"><span>Next</span></button>
                <div>&nbsp;</div>                
                 `
})

export class Step1Component{
    private items: MenuItem[];
     val1: string = 'Odeon Cinema';
    constructor(private router: Router, 
                private location: Location, 
                private countyService: CountyService) {  }
    msgs: Message[] = [];
    selectedCinema: County;
    activeIndex: number = 1;
    
    onSelect(cinema: County): void{
    this.selectedCinema = cinema;
     }
    
    goBack(): void {
    this.location.back();
    }

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