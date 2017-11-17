webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusPage = (function () {
    function BusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BusPage.prototype.ionViewDidLoad = function () {
    };
    BusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bus',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/bus/bus.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Kochi KSRTC Low floor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/bus/bus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BusPage);
    return BusPage;
}());

//# sourceMappingURL=bus.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upcoming_upcoming__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.businessCheck = false;
        this.concertsCheck = false;
        this.exhibitionsCheck = false;
        this.festivalsCheck = false;
        this.meetupsCheck = false;
        this.musicCheck = false;
        this.partiesCheck = false;
        this.performancesCheck = false;
        this.sportsCheck = false;
        this.workshopsCheck = false;
        this.select = 'Select All';
        this.secondary = 'secondary';
        this.allCheck = false;
        this.day = this.navParams.get('param');
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
    };
    CategoryPage.prototype.check = function () {
        if (this.businessCheck &&
            this.concertsCheck &&
            this.exhibitionsCheck &&
            this.festivalsCheck &&
            this.meetupsCheck &&
            this.musicCheck &&
            this.partiesCheck &&
            this.performancesCheck &&
            this.sportsCheck &&
            this.workshopsCheck) {
            this.allCheck = true;
        }
        else {
            this.allCheck = false;
        }
    };
    CategoryPage.prototype.checking = function () {
        this.check();
        if (this.allCheck) {
            this.redButton();
            console.log('True');
        }
        else if (!this.businessCheck &&
            !this.concertsCheck &&
            !this.exhibitionsCheck &&
            !this.festivalsCheck &&
            !this.meetupsCheck &&
            !this.musicCheck &&
            !this.partiesCheck &&
            !this.performancesCheck &&
            !this.sportsCheck &&
            !this.workshopsCheck) {
            this.allCheck = false;
            this.greenButton();
            console.log('False');
        }
        else {
            this.greenButton();
        }
    };
    CategoryPage.prototype.business = function () {
        if (this.businessCheck === false) {
            this.businessCheck = true;
        }
        else {
            this.businessCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.concerts = function () {
        if (this.concertsCheck === false) {
            this.concertsCheck = true;
        }
        else {
            this.concertsCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.exhibitions = function () {
        if (this.exhibitionsCheck === false) {
            this.exhibitionsCheck = true;
        }
        else {
            this.exhibitionsCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.festivals = function () {
        if (this.festivalsCheck === false) {
            this.festivalsCheck = true;
        }
        else {
            this.festivalsCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.meetups = function () {
        if (this.meetupsCheck === false) {
            this.meetupsCheck = true;
        }
        else {
            this.meetupsCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.music = function () {
        if (this.musicCheck === false) {
            this.musicCheck = true;
        }
        else {
            this.musicCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.parties = function () {
        if (this.partiesCheck === false) {
            this.partiesCheck = true;
        }
        else {
            this.partiesCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.performances = function () {
        if (this.performancesCheck === false) {
            this.performancesCheck = true;
        }
        else {
            this.performancesCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.sports = function () {
        if (this.sportsCheck === false) {
            this.sportsCheck = true;
        }
        else {
            this.sportsCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.workshops = function () {
        if (this.workshopsCheck === false) {
            this.workshopsCheck = true;
        }
        else {
            this.workshopsCheck = false;
        }
        this.checking();
    };
    CategoryPage.prototype.selection = function () {
        this.check();
        if (!this.allCheck) {
            this.tick();
            this.redButton();
        }
        else {
            this.untick();
            this.greenButton();
        }
    };
    CategoryPage.prototype.greenButton = function () {
        this.select = 'Select All';
        this.secondary = 'secondary';
    };
    CategoryPage.prototype.redButton = function () {
        this.select = "Deslect All";
        this.secondary = "danger";
    };
    CategoryPage.prototype.tick = function () {
        this.allCheck = false;
        this.businessCheck =
            this.concertsCheck =
                this.exhibitionsCheck =
                    this.festivalsCheck =
                        this.meetupsCheck =
                            this.musicCheck =
                                this.partiesCheck =
                                    this.performancesCheck =
                                        this.sportsCheck =
                                            this.workshopsCheck = true;
    };
    CategoryPage.prototype.untick = function () {
        this.allCheck = true;
        this.businessCheck =
            this.concertsCheck =
                this.exhibitionsCheck =
                    this.festivalsCheck =
                        this.meetupsCheck =
                            this.musicCheck =
                                this.partiesCheck =
                                    this.performancesCheck =
                                        this.sportsCheck =
                                            this.workshopsCheck = false;
    };
    CategoryPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'No category selected!',
            subTitle: 'Please select at least one category from the list',
            buttons: ['OK']
        });
        alert.present();
    };
    CategoryPage.prototype.pageChange = function () {
        if (this.businessCheck ||
            this.concertsCheck ||
            this.exhibitionsCheck ||
            this.festivalsCheck ||
            this.meetupsCheck ||
            this.musicCheck ||
            this.partiesCheck ||
            this.performancesCheck ||
            this.sportsCheck ||
            this.workshopsCheck) {
            if (this.day) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upcoming_upcoming__["a" /* UpcomingPage */]);
            }
        }
        else {
            this.showAlert();
        }
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/category/category.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n    <div class="first">    \n      <div class="all">\n        <div class="container" (click)="business()">\n          <div class="contain">\n            <ion-checkbox color="secondary" checked={{businessCheck}}></ion-checkbox>\n            <div class="iconName">\n              <div class="icon"><ion-icon name="briefcase"></ion-icon></div>\n              <div>Business</div>\n            </div>\n          </div>\n        </div>\n        <div class="container" (click)="concerts()">\n          <div class="containe">\n            <ion-checkbox color="secondary" checked={{concertsCheck}}></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="microphone"></ion-icon>\n              </div>\n              <div>Concerts</div>\n            </div>\n          </div>\n        </div>\n        <div class="container" (click)="exhibitions()">\n          <div class="contain">\n            <ion-checkbox color="secondary" checked={{exhibitionsCheck}}></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n              <ion-icon name="barcode"></ion-icon>\n            </div>\n            <div>Exhibitions</div>\n            </div>\n          </div>\n        </div>\n        <div class="container" (click)="festivals()">\n          <div class="containe">\n            <ion-checkbox color="secondary" checked="{{festivalsCheck}}"></ion-checkbox>\n            <div class="iconName">\n            <div class="icon">\n              <ion-icon name="aperture"></ion-icon>\n            </div>\n            <div>Festivals</div>\n            </div>\n           </div>\n        </div>\n        <div class="container" (click)="meetups()">\n          <div class="contain">\n            <ion-checkbox color="secondary" checked="{{meetupsCheck}}"></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="people"></ion-icon>\n              </div>\n              <div>Meet Ups</div>\n            </div>\n           </div>\n         </div>\n        <div class="container" (click)="music()">\n          <div class="containe">\n            <ion-checkbox color="secondary" checked="{{musicCheck}}"></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="musical-note"></ion-icon>\n              </div>\n              <div>Music</div>\n            </div>\n          </div>\n         </div>\n        <div class="container" (click)="parties()">\n          <div class="contain">\n            <ion-checkbox color="secondary" checked="{{partiesCheck}}"></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="disc"></ion-icon>\n              </div>\n              <div>Parties</div>\n            </div>\n          </div>\n        </div>\n        <div class="container" (click)="performances()">\n          <div class="containe">\n            <ion-checkbox color="secondary" checked="{{performancesCheck}}"></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="logo-freebsd-devil"></ion-icon>\n              </div>\n              <div>Performances</div>\n            </div>\n          </div>\n        </div>\n        <div class="container" (click)="sports()">\n          <div class="contain">\n            <ion-checkbox color="secondary" checked="{{sportsCheck}}"></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="football"></ion-icon>\n              </div>\n              <div>Sports</div>\n            </div>\n          </div>\n        </div>\n        <div class="container" (click)="workshops()">\n          <div class="containe">\n            <ion-checkbox color="secondary" checked="{{workshopsCheck}}"></ion-checkbox>\n            <div class="iconName">\n              <div class="icon">\n                <ion-icon name="construct"></ion-icon>\n              </div>\n              <div>Workshops</div>\n            </div>\n          </div>\n        </div>\n      </div>\n          <button ion-button color={{secondary}} class="select" (click)="selection()">{{select}}</button>\n          <button ion-button color="secondary" class="done" (click)="pageChange()">Done</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/events/events.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Today\'s Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpcomingPage = (function () {
    function UpcomingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpcomingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingPage');
    };
    UpcomingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upcoming',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/upcoming/upcoming.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Upcoming Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/upcoming/upcoming.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UpcomingPage);
    return UpcomingPage;
}());

//# sourceMappingURL=upcoming.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetroPage = (function () {
    function MetroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MetroPage.prototype.ionViewDidLoad = function () {
    };
    MetroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-metro',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/metro/metro.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Kochi Metro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/metro/metro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MetroPage);
    return MetroPage;
}());

//# sourceMappingURL=metro.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.initializeItems();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
        ];
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/search/search.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Search Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		280,
		6
	],
	"../pages/bus/bus.module": [
		281,
		5
	],
	"../pages/category/category.module": [
		282,
		4
	],
	"../pages/events/events.module": [
		283,
		3
	],
	"../pages/metro/metro.module": [
		284,
		2
	],
	"../pages/search/search.module": [
		285,
		1
	],
	"../pages/upcoming/upcoming.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metro_metro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bus_bus__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__metro_metro__["a" /* MetroPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__bus_bus__["a" /* BusPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Metro" tabIcon="train"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bus" tabIcon="bus"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Add Event" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.today = function () {
        this.day = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */], { param: this.day });
    };
    HomePage.prototype.upcoming = function () {
        this.day = false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */], { param: this.day });
    };
    HomePage.prototype.search = function () {
        console.log('Search');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary"> \n    <ion-title>KOCHI EVENTS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="background">\n    <div class="box"><div class="blur" (click)="search()"></div><div>Search Events</div></div>\n    <div class="box" (click)="today()"><div class="blur" ></div><div>Today\'s Events</div></div>\n    <div class="box" (click)="upcoming()"><div class="blur" ></div><div >Upcoming Events</div></div>\n    <div class="box"><div class="blur"></div><div>Offers</div></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      About Us\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_metro_metro__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bus_bus__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_add__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_category_category__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_events_events__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_upcoming_upcoming__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_metro_metro__["a" /* MetroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bus_bus__["a" /* BusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_upcoming_upcoming__["a" /* UpcomingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/bus.module#BusPageModule', name: 'BusPage', segment: 'bus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/metro/metro.module#MetroPageModule', name: 'MetroPage', segment: 'metro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcoming/upcoming.module#UpcomingPageModule', name: 'UpcomingPage', segment: 'upcoming', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_metro_metro__["a" /* MetroPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bus_bus__["a" /* BusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_upcoming_upcoming__["a" /* UpcomingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPage = (function () {
    function AddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddPage.prototype.ionViewDidLoad = function () {
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"/home/nikhil/Documents/Ionic/myApp/src/pages/add/add.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Add Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/nikhil/Documents/Ionic/myApp/src/pages/add/add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map