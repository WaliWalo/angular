import {Component, OnInit} from "@angular/core";
import {DropdownModule} from 'primeng/primeng';
import {County} from './county';
import {SelectItem} from 'primeng/primeng';
import {COUNTYS} from './county-list';
import {GalleriaModule} from 'primeng/primeng';
@Component({
    selector: 'county',
    template: `
               &nbsp;
               <div class="clearfix">
                <nav>
                <p-galleria [images]="images" panelWidth="1050" panelHeight="481" showCaption="false"></p-galleria>
                </nav>
                <section>
                <p-dropdown [options]="countys" [(ngModel)]="selectedCounty" [filter]="true"></p-dropdown>
               &nbsp;
               <p>Cinema in County: {{selectedCounty ? selectedCounty.cinema : 'none'}}/{{selectedCounty ? selectedCounty.cinema2 : 'none'}}</p>
               <div>&nbsp;</div>
                </section>
               </div>
               
               
              `
})

export class CountyComponent implements OnInit{
    countys: SelectItem[];
    selectedCounty: string;
    images: any[];
    constructor(){
        this.countys = [];
        this.countys.push({label:'Select County', value:null});
        for (let i of COUNTYS){
            this.countys.push({label: i.name, value:{id: i.id, name: i.name, cinema: i.cinema, cinema2: i.cinema2}});
        }
        
    }
    ngOnInit() {
        this.images = [];
        this.images.push({source:'images/bangor-opt1.jpg', alt:'', title:'Omniplex Cinema'});
        this.images.push({source:'images/IMC.png', alt:'', title:'IMC Cinema'});
        this.images.push({source:'images/Odeon_Cinema_ibeacon.jpg', alt:'', title:'Odeon Cinema'});
        this.images.push({source:'images/ifi-logo.jpg', alt:'', title:'Irish Film Institute'});
        this.images.push({source:'images/cineworld-birmingham.jpg', alt:'', title:'Cineworld'});
        
    }
}