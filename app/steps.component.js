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
var StepsComponent = (function () {
    function StepsComponent(router) {
        this.router = router;
        this.msgs = [];
        this.activeIndex = 0;
    }
    StepsComponent.prototype.ngOnInit = function () {
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
                }
            },
            {
                label: 'Time',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Time Details', detail: event.item.label });
                }
            }
        ];
    };
    StepsComponent = __decorate([
        core_1.Component({
            selector: 'steps',
            template: "<h1>steps testing</h1>\n                <p-growl [value]=\"msgs\"></p-growl>\n                <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\"\n                 styleClass=\"steps-basic\" [readonly]=\"false\"></p-steps>\n                \n              "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StepsComponent);
    return StepsComponent;
}());
exports.StepsComponent = StepsComponent;
//# sourceMappingURL=steps.component.js.map