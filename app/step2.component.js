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
var router_1 = require('@angular/router');
var county_list_1 = require('./county-list');
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
var county_service_1 = require('./county.service');
var Step2Component = (function () {
    function Step2Component(router, location, route, countyService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.route = route;
        this.countyService = countyService;
        this.msgs = [];
        this.activeIndex = 2;
        //get cinema detail
        this.route.params.forEach(function (params) {
            var cinema = params["cinema"];
            _this.countyService.getCinema(cinema)
                .then(function (county) { return _this.county = county; });
        });
        this.countys = [];
        this.countys.push({ label: 'Select County', value: null });
        var _loop_1 = function(i) {
            this_1.route.params.forEach(function (params) {
                var cinema = params["cinema"];
                if (i.cinema == cinema)
                    _this.countys.push({ label: i.name, value: { id: i.id, name: i.name, cinema: i.cinema } });
            });
        };
        var this_1 = this;
        for (var _i = 0, COUNTYS_1 = county_list_1.COUNTYS; _i < COUNTYS_1.length; _i++) {
            var i = COUNTYS_1[_i];
            _loop_1(i);
        }
    }
    Step2Component.prototype.getCountys = function () {
        var _this = this;
        this.countyService.getCountys().then(function (countyList) { return _this.countyList = countyList; });
    };
    //validation
    Step2Component.prototype.goNext = function () {
        if (this.selectedCounty == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Select a County' });
        }
        else
            this.router.navigate(["/step3"]);
    };
    Step2Component.prototype.goBack = function () {
        this.location.back();
    };
    Step2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getCountys();
        this.items = [{
                label: 'Movie Details',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Movie Details', detail: event.item.label });
                    var link = ["step0"];
                    _this.router.navigate(link);
                }
            },
            {
                label: 'Cinema',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Chose Cinema', detail: event.item.label });
                    var link = ["step1"];
                    _this.router.navigate(link);
                }
            },
            {
                label: 'County',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Chose County', detail: event.item.label });
                    var link = ["step2"];
                    _this.router.navigate(link);
                }
            },
            {
                label: 'Time',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Time Details', detail: event.item.label });
                    var link = ["step3"];
                    _this.router.navigate(link);
                }
            }
        ];
    };
    Step2Component = __decorate([
        core_1.Component({
            selector: 'step2',
            template: "\n                <p-growl [value]=\"msgs\"></p-growl>\n                <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\"\n                 styleClass=\"steps-basic\" [readonly]=\"true\"></p-steps>\n                <div *ngIf=\"county\">{{county.cinema}}</div>\n                <p>&nbsp;</p>\n               <p-dropdown [options]=\"countys\" [(ngModel)]=\"selectedCounty\" [filter]=\"true\"></p-dropdown>\n               &nbsp;\n               <p>Selected County: {{selectedCounty ? selectedCounty.name : 'none'}}</p>\n                \n                <button (click)=\"goBack()\" class=\"button button2\"><span>Back</span></button>\n                <button (click)=\"goNext()\" class=\"button button1\"><span>Next</span></button>\n                <p-messages [value]=\"msgs\"></p-messages>\n                 "
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, router_2.ActivatedRoute, county_service_1.CountyService])
    ], Step2Component);
    return Step2Component;
}());
exports.Step2Component = Step2Component;
//# sourceMappingURL=step2.component.js.map