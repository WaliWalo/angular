import {County} from './county';
import {COUNTYS} from './county-list'; 
import { Injectable } from '@angular/core';
@Injectable()
export class CountyService {
    getCountys(): Promise<County[]> {
    return Promise.resolve(COUNTYS);
  }

    getCinema(cinema: string): Promise<County> {
    return this.getCountys().then(countys => countys.find(county => county.cinema === cinema));
    }  

    

}
