import {Component} from '@angular/core';
import {AccordionModule} from 'primeng/primeng';
@Component({
    selector: 'cinemas',
    template: `<p-accordion>
    <p-accordionTab header="Irish Film Institute" [selected]="true">
       <p><b>Website</b></p>
       <a href="http://www.ifi.ie/" target="_blank">http://www.ifi.ie/</a>
       <p><b>County</b></p>
       <p>-6 Eustace St, Dublin 2</p>       
    </p-accordionTab>

    <p-accordionTab header="Odeon Cinemas">       
       <p><b>Website</b></p>
       <a href="http://www.odeoncinemas.ie/" target="_blank">http://www.odeoncinemas.ie/</a>
       <p><b>County</b></p>
       <p>-Blanchardstown Road South, Dublin 15</p>   
       <p>-Charlestown Leisure Building, St. Margaret's Road, Dublin 11</p> 
       <p>-84 Malahide Road, Coolock, Dublin 5</p>
       <p>-Point Village, Dublin 1</p>
       <p>-Stillorgan Plaza, Stillorgan</p>
    </p-accordionTab>

    <p-accordionTab header="Cineworld Cinema">      
       <p><b>Website</b></p>
       <a href="https://www.cineworld.ie/" target="_blank">https://www.cineworld.ie/</a>
       <p><b>County</b></p>
       <p>-Parnell Centre, Parnell Street, Dublin 1</p>          
    </p-accordionTab>

    <p-accordionTab header="IMC Cinema">       
       <p><b>Website</b></p>
       <p>-http://www.imccinemas.ie/</p>
       <p><b>County</b></p>
       <p>-Athlone</p>
       <p>-Ballina</p>
       <p>-Ballymena</p>
       <p>-Banbridge</p>
       <p>-Carlow</p>
       <p>-Clonmel</p>
       <p>-Dundalk</p>
       <p>-Dun Laoghaire</p>
       <p>-Enniskillen</p>
       <p>-Galway</p>
       <p>-Kilkenny</p>
       <p>-Mullingar</p>
       <p>-Omagh</p>
       <p>-Oranmore</p>
       <p>-Santry</p>
       <p>-Savoy Cinema</p>
       <p>-Tallaght</p>
       <p>-Thurles</p>
       <p>-Tullamore</p>          
    </p-accordionTab>

    <p-accordionTab header="Omniplex">       
       <p><b>Website</b></p>
       <a href="https://www.omniplex.ie/" target="_blank">https://www.omniplex.ie/</a>
       <p><b>County</b></p>
       <p>-Arklow</p> 
       <p>-Balbriggan</p> 
       <p>-Carlow</p>     
       <p>-Cork</p>    
       <p>-Rathmines, Dublin</p> 
       <p>-Dundalk</p>
       <p>-Dungannon</p>
       <p>-Limerick</p>
       <p>-Longford</p>
       <p>-Sligo</p>
       <p>-Tralee</p>
       <p>-Waterford</p>
       <p>-Wexford</p>
       <p>-Antrim</p>
       <p>-Armagh</p>
       <p>-Bangor</p>
       <p>-Banbridge</p>
       <p>-Kennedy Centre, Belfast</p>
       <p>-Carrickfergus</p>
       <p>-Derry</p>
       <p>-Craigavon</p>
       <p>-Dundonald, Belfast</p>
       <p>-Dungannon, Tyrone</p>
       <p>-Larne</p>
       <p>-Lisburn</p>   
       <p>-Newry</p>
    </p-accordionTab>

</p-accordion>`

})

export class CinemasComponent{
    
}