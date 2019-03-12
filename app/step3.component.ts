import {Component} from "@angular/core";
import {StepsModule,MenuItem} from 'primeng/primeng';
import {MoviesComponent} from './movies.component';
import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';
import {Step0Component} from './step0.component';
import {Step1Component} from './step1.component';
import {Step2Component} from './step2.component';
@Component({
    selector: 'step3',
    template: `
                <p-growl [value]="msgs"></p-growl>
                <p-steps [model]="items" [(activeIndex)]="activeIndex"
                 styleClass="steps-basic" [readonly]="true"></p-steps>
                 <div>Available Time</div>
                <div class="ui-g">
                    <div class="ui-g-1">0900</div>
                    <div class="ui-g-1">1100</div>
                    <div class="ui-g-1">1300</div>
                    <div class="ui-g-1">1500</div>
                    <div class="ui-g-1">1800</div>
                    <div class="ui-g-1">2000</div>
                    <div class="ui-g-1">2200</div>
                    <div class="ui-g-1">2300</div>
                </div>
                <button (click)="goBack()" class="button button2"><span>Back</span></button>
                
                 `
})

export class Step3Component{
    private items: MenuItem[];
    constructor(private router: Router, private location: Location) {  }
    msgs: Message[] = [];
    
    activeIndex: number = 3;

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