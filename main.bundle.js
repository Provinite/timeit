webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-timer {\n    cursor: pointer;\n}\n\ndiv.plus-sign {\n    position: relative;\n    height: 150px;\n}\n\ndiv.plus-sign::before {\n    content: '+';\n    font-size: 10rem;\n    text-align: center;\n    color: #CCC;\n    display: block;\n    height: 150px;\n    line-height: 150px;\n}\n\ndiv.add-timer .callout {\n    background-color: #777;\n    height: 250px;\n    cursor: pointer;\n}\n\ndiv.add-timer span {\n    color: #CCC;\n    font-size: 2rem;\n    display: block;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n    <div class=\"small-6 medium-4 column\" *ngFor=\"let timer of timers\">\n        <app-timer \n            [showCloseButton]=\"true\"\n            (onClose)=\"doClose(timer)\"\n            (onToggle)=\"toggled(timer, $event)\">\n        </app-timer>\n    </div>\n    <div (click)=\"clkAddTimer()\" class=\"small-6 medium-4 column add-timer end\">\n        <div class=\"callout\">\n            <div class=\"plus-sign\"></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_component__ = __webpack_require__("../../../../../src/app/timer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App';
        this.timers = [0];
        this.maxTimer = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.toggled = function (e, event) {
        var idx = this.timers.indexOf(e);
        var components = this.timerComponents.toArray();
        var newState = event.isRunning;
        // we started a timer. stop the others
        if (newState) {
            for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
                var c = components_1[_i];
                if (c !== components[idx]) {
                    c.stop();
                }
            }
        }
    };
    AppComponent.prototype.doClose = function (timer) {
        var idx = this.timers.indexOf(timer);
        this.timers.splice(idx, 1);
    };
    AppComponent.prototype.clkAddTimer = function () {
        this.timers.push(++this.maxTimer);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.timerComponents.map(function (t) { return t.stop(); });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__timer_component__["a" /* TimerComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* QueryList */]) === "function" && _a || Object)
], AppComponent.prototype, "timerComponents", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timer_component__ = __webpack_require__("../../../../../src/app/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_source_service__ = __webpack_require__("../../../../../src/app/time-source.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__timer_component__["a" /* TimerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__time_source_service__["a" /* TimeSourceService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/time-source.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeSourceService = (function () {
    function TimeSourceService() {
    }
    TimeSourceService.prototype.currentTimeMillis = function () {
        return (+new Date());
    };
    TimeSourceService.prototype.currentDate = function () {
        return new Date();
    };
    return TimeSourceService;
}());
TimeSourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TimeSourceService);

//# sourceMappingURL=time-source.service.js.map

/***/ }),

/***/ "../../../../../src/app/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timer {\n    min-height: 250px;\n}\n\n.timerclock {\n    position: absolute;\n    bottom: 0;\n    display: inline-block;\n    max-width: 200px;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n}\n\ninput {\n    text-align: center;\n    border-radius:5px;\n}\n\n.timer-close-button {\n    color: #8a8a8a;\n    cursor: pointer;\n    font-size: 1.4rem;\n    line-height: 1;\n    position: absolute;\n    top: -0.2rem;\n    right: 0.2rem;\n}\n\n.timer-close-button:hover {\n    color:#000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"divClass + ' timer'\">\n    <a \n        *ngIf=\"showCloseButton\" \n        class=\"timer-close-button\" \n        (click)=\"close()\">\n        &times;\n    </a>\n    <div class=\"row\">\n        <div class=\"small-12 column\">\n            <input type=\"text\" />\n        </div>\n    </div>\n    <div class=\"timerclock\">\n        {{runtime[0]}}H {{runtime[1]}}M {{runtime[2] | number:'2.0-0'}}.{{runtime[3] | number:'2.0-0'}}S ({{fractionalHours | number:'1.2-2'}}H)\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_service__ = __webpack_require__("../../../../../src/app/timer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = (function () {
    function TimerComponent(timerService) {
        this.timerService = timerService;
        this.showCloseButton = false;
        this.runtime = [0, 0, 0, 0];
        this.fractionalHours = 0;
        this.divClass = 'callout warning';
        this.interval = null;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TimerComponent.prototype.click = function (event) {
        if (event.toElement.tagName.toLowerCase() === 'input' || event.toElement.tagName.toLowerCase() === 'a') {
            return true;
        }
        ;
        this.toggle();
        this.onToggle.emit({ isRunning: this.timerService.isRunning() });
    };
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerService.state$.subscribe(function (state) {
            if (state === true) {
                _this.divClass = 'callout success';
                _this.startInterval();
            }
            else {
                _this.divClass = 'callout warning';
                _this.stopInterval();
            }
        });
    };
    TimerComponent.prototype.startInterval = function () {
        if (this.interval !== null) {
            return;
        }
        this.interval = window.setInterval(this.updateDisplay.bind(this), 10);
    };
    TimerComponent.prototype.stopInterval = function () {
        if (this.interval === null) {
            return;
        }
        window.clearInterval(this.interval);
        this.interval = null;
    };
    TimerComponent.prototype.updateDisplay = function () {
        this.runtime = this.timerService.read();
        this.fractionalHours = (this.timerService.getTime() / 1000) / 3600;
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        this.stopInterval();
    };
    TimerComponent.prototype.close = function () {
        this.onClose.emit();
    };
    TimerComponent.prototype.toggle = function () {
        this.timerService.toggle();
    };
    TimerComponent.prototype.stop = function () {
        this.timerService.stop();
    };
    TimerComponent.prototype.start = function () {
        this.timerService.start();
    };
    ;
    return TimerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TimerComponent.prototype, "showCloseButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], TimerComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], TimerComponent.prototype, "onToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TimerComponent.prototype, "click", null);
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../src/app/timer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timer.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__timer_service__["a" /* TimerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__timer_service__["a" /* TimerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timer_service__["a" /* TimerService */]) === "function" && _c || Object])
], TimerComponent);

var _a, _b, _c;
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_source_service__ = __webpack_require__("../../../../../src/app/time-source.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerService = (function () {
    function TimerService(timeSource) {
        this.timeSource = timeSource;
        this.running = false;
        this.accumulatedTime = 0;
        this.stateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.state$ = this.stateSource.asObservable();
    }
    TimerService.prototype.reset = function () {
        this.running = false;
        this.accumulatedTime = 0;
        this.initTime = this.timeSource.currentTimeMillis();
        this.stateSource.next(false);
    };
    TimerService.prototype.start = function () {
        if (this.isRunning()) {
            return;
        }
        ;
        this.running = true;
        this.initTime = this.timeSource.currentTimeMillis();
        this.stateSource.next(true);
    };
    TimerService.prototype.stop = function () {
        if (!this.isRunning()) {
            return;
        }
        ;
        this.running = false;
        this.accumulatedTime += this.getSegmentRunningTime();
        this.stateSource.next(false);
    };
    TimerService.prototype.toggle = function () {
        if (!this.isRunning()) {
            this.start();
        }
        else {
            this.stop();
        }
    };
    TimerService.prototype.isRunning = function () {
        return this.running;
    };
    TimerService.prototype.getTime = function () {
        if (!this.isRunning()) {
            return this.accumulatedTime;
        }
        return this.getTotalRunningTime();
    };
    TimerService.prototype.read = function () {
        var time = Math.floor(this.getTime() / 10);
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        var centiseconds = 0;
        centiseconds = time % 100;
        time = (time - centiseconds) / 100;
        seconds = time % 60;
        time = (time - seconds) / 60;
        minutes = time % 60;
        time = (time - minutes) / 60;
        hours = time;
        if (minutes < 1) {
            minutes = 0;
        }
        if (hours < 1) {
            hours = 0;
        }
        if (seconds < 1) {
            seconds = 0;
        }
        return [hours, minutes, seconds, centiseconds];
    };
    TimerService.prototype.getSegmentRunningTime = function () {
        return this.timeSource.currentTimeMillis() - this.initTime;
    };
    TimerService.prototype.getTotalRunningTime = function () {
        return this.getSegmentRunningTime() + this.accumulatedTime;
    };
    return TimerService;
}());
TimerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__time_source_service__["a" /* TimeSourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__time_source_service__["a" /* TimeSourceService */]) === "function" && _a || Object])
], TimerService);

var _a;
//# sourceMappingURL=timer.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map