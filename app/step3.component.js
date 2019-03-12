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
var common_1 = require('@angular/common');
var Step3Component = (function () {
    function Step3Component(router, location) {
        this.router = router;
        this.location = location;
        this.msgs = [];
        this.activeIndex = 3;
    }
    Step3Component.prototype.goBack = function () {
        this.location.back();
    };
    Step3Component.prototype.ngOnInit = function () {
        var _this = this;
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
    Step3Component = __decorate([
        core_1.Component({
            selector: 'step3',
            template: "\n                <p-growl [value]=\"msgs\"></p-growl>\n                <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\"\n                 styleClass=\"steps-basic\" [readonly]=\"true\"></p-steps>\n                 <div>Available Time</div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-1\">0900</div>\n                    <div class=\"ui-g-1\">1100</div>\n                    <div class=\"ui-g-1\">1300</div>\n                    <div class=\"ui-g-1\">1500</div>\n                    <div class=\"ui-g-1\">1800</div>\n                    <div class=\"ui-g-1\">2000</div>\n                    <div class=\"ui-g-1\">2200</div>\n                    <div class=\"ui-g-1\">2300</div>\n                </div>\n                <button (click)=\"goBack()\" class=\"button button2\"><span>Back</span></button>\n                \n                 "
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], Step3Component);
    return Step3Component;
}());
exports.Step3Component = Step3Component;
//# sourceMappingURL=step3.component.js.map