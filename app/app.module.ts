import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { FormsModule }   from '@angular/forms';
import {MoviesComponent} from './movies.component';
import { RouterModule }   from '@angular/router';
import {CinemasComponent} from './cinemas.component';
import {CountyComponent} from './county.component';
import {AccordionModule} from 'primeng/primeng';
import {MovieService} from './movie.service';
import {StepsModule,MenuItem} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {Step0Component} from './step0.component';
import {Step1Component} from './step1.component';
import {Step2Component} from './step2.component';
import {Step3Component} from './step3.component';
import {DropdownModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {CountyService} from './county.service';
import {MessagesModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'movies',
      component: MoviesComponent
    },
    {
      path: 'cinemas',
      component: CinemasComponent
    },
    {
      path: 'county',
      component: CountyComponent
    },
    {
      path: 'step0/:id',
      component: Step0Component
    },
    {
      path: 'step1',
      component: Step1Component
    },
    {
      path: 'step2/:cinema',
      component: Step2Component
    },
    {
      path: 'step3',
      component: Step3Component
    },
    {
      path: '',
      redirectTo: '/movies',
      pathMatch: 'full'
    }
  ]),
  AccordionModule,
  StepsModule,
  GrowlModule,
  DropdownModule,
  RadioButtonModule ,
  MessagesModule,
  RatingModule,
  GalleriaModule,
  ProgressBarModule
  ],
  declarations: [
    AppComponent, 
    MoviesComponent,
    CinemasComponent,
    CountyComponent,    
    Step0Component,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  providers: [MovieService,CountyService],
  bootstrap: [AppComponent]
})


export class AppModule { }
