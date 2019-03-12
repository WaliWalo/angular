import { Component, OnInit } from '@angular/core';
import {MoviesComponent} from './movies.component';

@Component({
  selector: 'my-app',
  template: `   <div class="container">
                <header>
                <a routerLink="/movies">
                <img src="images/vector-cinema-logo-6816599.jpg" alt="logo" width="100" height="100">
                </a>
                <h1>Cinema Application</h1>
                </header>

                
                  <ul>
                      <li><a routerLink="/cinemas">Cinemas</a></li>
                      <li><a routerLink="/movies">Movies</a></li>                      
                      <li><a routerLink="/county">Counties</a></li>
                  </ul>
                
                
                <content>
                  
                  <router-outlet></router-outlet>
                </content>

                <footer>
                  <h1>Cinema Application</h1>
                  <p>cineApplication@hotmail.com</p>
                </footer>
                
                </div>
                
             `
})
export class AppComponent { 
  title = 'Cinema Application';


}
