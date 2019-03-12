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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Cinema Application';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "   <div class=\"container\">\n                <header>\n                <a routerLink=\"/movies\">\n                <img src=\"images/vector-cinema-logo-6816599.jpg\" alt=\"logo\" width=\"100\" height=\"100\">\n                </a>\n                <h1>Cinema Application</h1>\n                </header>\n\n                \n                  <ul>\n                      <li><a routerLink=\"/cinemas\">Cinemas</a></li>\n                      <li><a routerLink=\"/movies\">Movies</a></li>                      \n                      <li><a routerLink=\"/county\">Counties</a></li>\n                  </ul>\n                \n                \n                <content>\n                  \n                  <router-outlet></router-outlet>\n                </content>\n\n                <footer>\n                  <h1>Cinema Application</h1>\n                  <p>cineApplication@hotmail.com</p>\n                </footer>\n                \n                </div>\n                \n             "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map