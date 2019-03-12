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
var CinemasComponent = (function () {
    function CinemasComponent() {
    }
    CinemasComponent = __decorate([
        core_1.Component({
            selector: 'cinemas',
            template: "<p-accordion>\n    <p-accordionTab header=\"Irish Film Institute\" [selected]=\"true\">\n       <p><b>Website</b></p>\n       <a href=\"http://www.ifi.ie/\" target=\"_blank\">http://www.ifi.ie/</a>\n       <p><b>County</b></p>\n       <p>-6 Eustace St, Dublin 2</p>       \n    </p-accordionTab>\n\n    <p-accordionTab header=\"Odeon Cinemas\">       \n       <p><b>Website</b></p>\n       <a href=\"http://www.odeoncinemas.ie/\" target=\"_blank\">http://www.odeoncinemas.ie/</a>\n       <p><b>County</b></p>\n       <p>-Blanchardstown Road South, Dublin 15</p>   \n       <p>-Charlestown Leisure Building, St. Margaret's Road, Dublin 11</p> \n       <p>-84 Malahide Road, Coolock, Dublin 5</p>\n       <p>-Point Village, Dublin 1</p>\n       <p>-Stillorgan Plaza, Stillorgan</p>\n    </p-accordionTab>\n\n    <p-accordionTab header=\"Cineworld Cinema\">      \n       <p><b>Website</b></p>\n       <a href=\"https://www.cineworld.ie/\" target=\"_blank\">https://www.cineworld.ie/</a>\n       <p><b>County</b></p>\n       <p>-Parnell Centre, Parnell Street, Dublin 1</p>          \n    </p-accordionTab>\n\n    <p-accordionTab header=\"IMC Cinema\">       \n       <p><b>Website</b></p>\n       <p>-http://www.imccinemas.ie/</p>\n       <p><b>County</b></p>\n       <p>-Athlone</p>\n       <p>-Ballina</p>\n       <p>-Ballymena</p>\n       <p>-Banbridge</p>\n       <p>-Carlow</p>\n       <p>-Clonmel</p>\n       <p>-Dundalk</p>\n       <p>-Dun Laoghaire</p>\n       <p>-Enniskillen</p>\n       <p>-Galway</p>\n       <p>-Kilkenny</p>\n       <p>-Mullingar</p>\n       <p>-Omagh</p>\n       <p>-Oranmore</p>\n       <p>-Santry</p>\n       <p>-Savoy Cinema</p>\n       <p>-Tallaght</p>\n       <p>-Thurles</p>\n       <p>-Tullamore</p>          \n    </p-accordionTab>\n\n    <p-accordionTab header=\"Omniplex\">       \n       <p><b>Website</b></p>\n       <a href=\"https://www.omniplex.ie/\" target=\"_blank\">https://www.omniplex.ie/</a>\n       <p><b>County</b></p>\n       <p>-Arklow</p> \n       <p>-Balbriggan</p> \n       <p>-Carlow</p>     \n       <p>-Cork</p>    \n       <p>-Rathmines, Dublin</p> \n       <p>-Dundalk</p>\n       <p>-Dungannon</p>\n       <p>-Limerick</p>\n       <p>-Longford</p>\n       <p>-Sligo</p>\n       <p>-Tralee</p>\n       <p>-Waterford</p>\n       <p>-Wexford</p>\n       <p>-Antrim</p>\n       <p>-Armagh</p>\n       <p>-Bangor</p>\n       <p>-Banbridge</p>\n       <p>-Kennedy Centre, Belfast</p>\n       <p>-Carrickfergus</p>\n       <p>-Derry</p>\n       <p>-Craigavon</p>\n       <p>-Dundonald, Belfast</p>\n       <p>-Dungannon, Tyrone</p>\n       <p>-Larne</p>\n       <p>-Lisburn</p>   \n       <p>-Newry</p>\n    </p-accordionTab>\n\n</p-accordion>"
        }), 
        __metadata('design:paramtypes', [])
    ], CinemasComponent);
    return CinemasComponent;
}());
exports.CinemasComponent = CinemasComponent;
//# sourceMappingURL=cinemas.component.js.map