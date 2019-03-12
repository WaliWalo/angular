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
var core_1 = require("@angular/core");
var county_list_1 = require('./county-list');
var CountyComponent = (function () {
    function CountyComponent() {
        this.countys = [];
        this.countys.push({ label: 'Select County', value: null });
        for (var _i = 0, COUNTYS_1 = county_list_1.COUNTYS; _i < COUNTYS_1.length; _i++) {
            var i = COUNTYS_1[_i];
            this.countys.push({ label: i.name, value: { id: i.id, name: i.name, cinema: i.cinema, cinema2: i.cinema2 } });
        }
    }
    CountyComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'images/bangor-opt1.jpg', alt: '', title: 'Omniplex Cinema' });
        this.images.push({ source: 'images/IMC.png', alt: '', title: 'IMC Cinema' });
        this.images.push({ source: 'images/Odeon_Cinema_ibeacon.jpg', alt: '', title: 'Odeon Cinema' });
        this.images.push({ source: 'images/ifi-logo.jpg', alt: '', title: 'Irish Film Institute' });
        this.images.push({ source: 'images/cineworld-birmingham.jpg', alt: '', title: 'Cineworld' });
    };
    CountyComponent = __decorate([
        core_1.Component({
            selector: 'county',
            template: "\n               &nbsp;\n               <div class=\"clearfix\">\n                <nav>\n                <p-galleria [images]=\"images\" panelWidth=\"1050\" panelHeight=\"481\" showCaption=\"false\"></p-galleria>\n                </nav>\n                <section>\n                <p-dropdown [options]=\"countys\" [(ngModel)]=\"selectedCounty\" [filter]=\"true\"></p-dropdown>\n               &nbsp;\n               <p>Cinema in County: {{selectedCounty ? selectedCounty.cinema : 'none'}}/{{selectedCounty ? selectedCounty.cinema2 : 'none'}}</p>\n               <div>&nbsp;</div>\n                </section>\n               </div>\n               \n               \n              "
        }), 
        __metadata('design:paramtypes', [])
    ], CountyComponent);
    return CountyComponent;
}());
exports.CountyComponent = CountyComponent;
//# sourceMappingURL=county.component.js.map