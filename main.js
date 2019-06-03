(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [href]=\"'https://github.com/o-wth'\">\n  <mdc-top-app-bar style=\"border-bottom-right-radius: 24px; border-bottom-left-radius: 24px;\">\n    <mdc-top-app-bar-row>\n      <mdc-top-app-bar-section align=\"start\" title=\"O(wth)\">\n      </mdc-top-app-bar-section>\n    </mdc-top-app-bar-row>\n  </mdc-top-app-bar>\n</a>\n<particles [style]=\"particleSize\" [params]=\"particleStyle\"></particles>\n<div style=\"display: flex; align-items: center; text-align: center; width: 100%; height: 100%\">\n  <div style=\"margin: auto\">\n    <app-player>\n    </app-player>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mugen';
        this.particleSize = {
            'width': '100%',
            'height': '100%',
            'position': 'fixed'
        };
        this.particleStyle = {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#ffffff"
                    },
                    "polygon": {
                        "nb_sides": 9
                    },
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": true
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/player/player.component */ "./src/app/views/player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _views_player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcIconModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTypographyModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTopAppBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcElevationModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcFabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcSelectModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcChipsModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_6__["ParticlesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/views/player/player.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/player/player.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdc-top-app-bar--fixed-adjust\" style=\"display: block\">\n  <div mdcHeadline1><a [href]=\"'https://github.com/o-wth/mugen'\" class=\"mdc-theme--on-surface\">Mugen</a></div>\n  <div mdcSubtitle1 class=\"mdc-theme--on-surface\">An open source online music generator.</div>\n  <div mdcSubtitle1 class=\"mdc-theme--on-surface\">(May take a couple of seconds to load)</div>\n  <div class=\"play-pause-container\">\n    <button mdc-fab class=\"controls\" icon=\"play_arrow\" #playPauseFAB (click)=\"toggleControl();\"></button>\n  </div>\n  <mdc-chip-set>\n    <mdc-chip>\n      <a [href]=\"'https://magenta.tensorflow.org/js-announce'\">\n        <mdc-chip-text>Magenta.js</mdc-chip-text>\n      </a>\n    </mdc-chip>\n    <mdc-chip>\n      <a [href]=\"'https://angular.io'\">\n        <mdc-chip-text>Angular</mdc-chip-text>\n      </a>\n    </mdc-chip>\n    <mdc-chip>\n      <a [href]=\"'https://www.tensorflow.org/js/'\">\n        <mdc-chip-text>TensorFlow.js</mdc-chip-text>\n      </a>\n    </mdc-chip>\n  </mdc-chip-set>\n</div>\n"

/***/ }),

/***/ "./src/app/views/player/player.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/player/player.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/views/player/player.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/player/player.component.ts ***!
  \**************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _magenta_music__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @magenta/music */ "./node_modules/@magenta/music/es5/index.js");
/* harmony import */ var _magenta_music__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_magenta_music__WEBPACK_IMPORTED_MODULE_4__);





var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
        var _this = this;
        this.classical = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["MusicVAE"]('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar');
        this.player = PlayerComponent_1.initPlayerAndEffects();
        this.pause = function () { return _this.player.stop(); };
        this.musicTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            musicType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Classical')
        });
    }
    PlayerComponent_1 = PlayerComponent;
    PlayerComponent.initPlayerAndEffects = function () {
        var MAX_PAN = 0.2;
        var MIN_DRUM = 35;
        var MAX_DRUM = 81;
        // Set up effects chain.
        var globalCompressor = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.MultibandCompressor();
        var globalReverb = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Freeverb(0.25);
        var globalLimiter = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Limiter();
        globalCompressor.connect(globalReverb);
        globalReverb.connect(globalLimiter);
        globalLimiter.connect(_magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Master);
        // Set up per-program effects.
        var programMap = new Map();
        for (var i = 0; i < 128; i++) {
            var programCompressor = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Compressor();
            var pan = 2 * MAX_PAN * Math.random() - MAX_PAN;
            var programPanner = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Panner(pan);
            programMap.set(i, programCompressor);
            programCompressor.connect(programPanner);
            programPanner.connect(globalCompressor);
        }
        // Set up per-drum effects.
        var drumMap = new Map();
        for (var i = MIN_DRUM; i <= MAX_DRUM; i++) {
            var drumCompressor = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Compressor();
            var pan = 2 * MAX_PAN * Math.random() - MAX_PAN;
            var drumPanner = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["Player"].tone.Panner(pan);
            drumMap.set(i, drumCompressor);
            drumCompressor.connect(drumPanner);
            drumPanner.connect(globalCompressor);
        }
        // Set up SoundFont player.
        var player = new _magenta_music__WEBPACK_IMPORTED_MODULE_4__["SoundFontPlayer"]('https://storage.googleapis.com/download.magenta.tensorflow.org/soundfonts_js/sgm_plus', globalCompressor, programMap, drumMap);
        return player;
    };
    PlayerComponent.prototype.play = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sampleAndStart;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sampleAndStart = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.player.resumeContext();
                                this.classical.sample(1)
                                    .then(function (samples) {
                                    _this.player.start(samples[0], 80).then(function () { return _this.playPauseFAB.icon === 'play_arrow' ? undefined : _this.play(); });
                                });
                                return [2 /*return*/];
                            });
                        }); };
                        return [4 /*yield*/, sampleAndStart()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.toggleControl = function () {
        this.playPauseFAB.icon = this.playPauseFAB.icon === 'play_arrow' ? 'pause' : 'play_arrow';
        this.playPauseFAB.icon === 'play_arrow' ? this.pause() : this.play();
    };
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var init = function () { return _this.classical.initialize(); };
    };
    var PlayerComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('playPauseFAB'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcFab"])
    ], PlayerComponent.prototype, "playPauseFAB", void 0);
    PlayerComponent = PlayerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/views/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/views/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/autinmitra/Apps/mugen/mugen/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map