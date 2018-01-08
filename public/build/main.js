webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localdata__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddbusPage = (function () {
    function AddbusPage(navCtrl, navParams, view, toast, local) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toast = toast;
        this.local = local;
        this.username = this.navParams.get("username");
        this.email = this.navParams.get("email");
    }
    AddbusPage.prototype.ionViewDidLoad = function () {
    };
    AddbusPage.prototype.addNewBus = function (e) {
        var _this = this;
        if (this.numberplate == undefined) {
            var toast = this.toast.create({
                message: "Fill in the numberplate field",
                cssClass: "danger",
                duration: 2000,
                position: "top"
            });
            toast.present();
        }
        else if (this.route == undefined) {
            var toast = this.toast.create({
                message: "Fill in the route field",
                cssClass: "danger",
                duration: 2000,
                position: "top"
            });
            toast.present();
        }
        else if (this.seats == undefined) {
            var toast = this.toast.create({
                message: "Fill in the bus seats field",
                cssClass: "danger",
                duration: 2000,
                position: "top"
            });
            toast.present();
        }
        else {
            this.local.addBus(this.numberplate, this.username, this.email, this.route, this.seats, this.busmodel)
                .subscribe(function (response) {
                _this.view.dismiss({ buses: response.data }, "popover");
            });
        }
    };
    AddbusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addbus',template:/*ion-inline-start:"E:\Projects\sharon\site\src\pages\addbus\addbus.html"*/'<!--\n  Generated template for the AddbusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a new bus to your collection</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <br />\n  <br />\n  <ion-item>\n    <ion-label floating>Number Plate</ion-label>\n    <ion-input type="text" name="numberplate" [(ngModel)]="numberplate"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Bus Model</ion-label>\n    <ion-input type="text" name="model" [(ngModel)]="busmodel"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Route</ion-label>\n    <ion-input type="text" name="numberplate" [(ngModel)]="route"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Seats</ion-label>\n    <ion-input type="number" name="numberplate" [(ngModel)]="seats"></ion-input>\n  </ion-item>\n\n  <button ion-button full (click)="addNewBus($event)">Add Bus</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\Projects\sharon\site\src\pages\addbus\addbus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__services_localdata__["a" /* LocalData */]])
    ], AddbusPage);
    return AddbusPage;
}());

//# sourceMappingURL=addbus.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localdata__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverhomePage = (function () {
    function DriverhomePage(navCtrl, navParams, local, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.local = local;
        this.toast = toast;
        this.driver = {
            _id: this.navParams.get("id"),
            numberplate: this.navParams.get("numberplate"),
            username: this.navParams.get("username"),
            email: this.navParams.get("email"),
            phonenumber: this.navParams.get("phonenumber"),
            currentRoute: this.navParams.get("currentRoute"),
            available: this.navParams.get("available"),
            currently_from: this.navParams.get("currently_from"),
            currently_to: this.navParams.get("currently_to"),
            employed: this.navParams.get("employed"),
            on_route: this.navParams.get("on_route"),
            reviews: this.navParams.get("reviews"),
            employer: this.navParams.get("employer")
        };
    }
    DriverhomePage.prototype.ionViewDidLoad = function () {
    };
    DriverhomePage.prototype.setTrip = function () {
        if (this.driver.numberplate == null || this.driver.numberplate == undefined || this.driver.numberplate == "") {
            var warning = this.toast.create({
                message: "You do not have a bus to drive",
                duration: 3000
            });
            warning.present();
        }
        else {
            this.local.setTrip(this.driver.numberplate, this.at, this.dt, this.td, this.ss).subscribe(function (response) {
                console.log(response);
                if (response.data.ok == true) {
                    alert("Notify driver trip has begun");
                }
                else {
                    alert(response.data.message);
                }
            });
        }
    };
    DriverhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driverhome',template:/*ion-inline-start:"E:\Projects\sharon\site\src\pages\driverhome\driverhome.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Driver Dashboard </ion-title>\n\n    <ion-buttons end>\n      <button ion-button>{{driver.username}}</button>\n      <button ion-button>Log out</button>\n      <button ion-button>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div class="flexbox">\n      <div class="leftPanel">\n        <h5 class="text-info text-center"> You will be recognized as employed once a bus owner chooses you to drive a bus</h5>\n        <h5 class="text-info text-center">You can change your status to unavailable for work by toggling the available button.</h5>\n        <h5 class="text-info text-center">Once employed, your status will be automatically changed.</h5>\n        <h6 class="text-muted">Setting to unavailable while employed does not revoke access to your bus.</h6>\n        <ion-list>\n          \n          <div *ngIf="driver.employed == true; else unemployedBtn">\n            <button ion-button color="secondary">Employed</button>\n          </div>\n\n          <ng-template #unemployedBtn>\n            <button ion-button full disabled color="danger">Unemployed</button>\n          </ng-template>\n\n          <ion-item>\n            <ion-label>Available for work</ion-label>\n            <ion-toggle [(ngModel)]="driver.available"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>On Route </ion-label>\n            <ion-toggle [(ngModel)]="driver.on_route"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <div class="card card-body" *ngIf="driver.on_route === true;">\n          <ion-item>\n            <ion-label floating>Trip Destination</ion-label>\n            <ion-input type="text" required [(ngModel)]="td"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Arrival Time</ion-label>\n            <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="at"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Starting Stage</ion-label>\n            <ion-input type="text" required [(ngModel)]="ss"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Departure Time</ion-label>\n            <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="dt"></ion-datetime>\n          </ion-item>\n\n          <button ion-button full color="primary" (click)="setTrip()">Set Trip</button>\n        </div>\n\n        <br />\n\n        <ion-list>\n          <ion-item>\n          </ion-item>\n        </ion-list>\n\n      </div>\n\n      <div class="rightPanel">\n        <div *ngIf="driver.available == false; else gridbox">\n          <p>Please set yourself up as available to recieve jos</p>\n        </div>\n\n        <ng-template #gridbox>\n            <div class="gridbox">\n              <div>\n                <div class="card card-body">\n                  <h1 class="text-center"><strong>Plate: </strong> KBT 765T </h1>\n                  <h2 class="text-center">Current route: Utawala</h2>\n                </div>\n              </div>\n              <div>\n                <h1>Reviews:</h1>\n\n                <div class="card card-body" *ngFor="let review of driver.reviews">\n                  <h3 class="card-title">{{review.username}}</h3>\n                  <h4 class="card-subtitle mb-2 text-muted">Rating: {{review.star}}</h4>\n                  <p class="card-text">{{review.comment}}</p>\n\n                  <a href="#" class="card-link">{{review.time}}</a>\n                </div>\n              </div>\n            </div>\n        </ng-template>\n  \n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Projects\sharon\site\src\pages\driverhome\driverhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_localdata__["a" /* LocalData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], DriverhomePage);
    return DriverhomePage;
}());

//# sourceMappingURL=driverhome.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverpopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driverhome_driverhome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_localdata__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverpopPage = (function () {
    function DriverpopPage(navCtrl, local, navParams, view, toast) {
        this.navCtrl = navCtrl;
        this.local = local;
        this.navParams = navParams;
        this.view = view;
        this.toast = toast;
        //puts login segment as the default
        this.auth = "login";
    }
    DriverpopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverpopPage');
    };
    DriverpopPage.prototype.closePopup = function () {
        this.view.dismiss();
    };
    DriverpopPage.prototype.login = function () {
        var _this = this;
        if (this.email_login == undefined || this.pass_login == undefined) {
            var toast = this.toast.create({
                message: "Please input valid data to login",
                duration: 3000
            });
            toast.present();
        }
        else {
            this.local.driverlogin(this.email_login, this.pass_login).subscribe(function (data) {
                if (data.ok == true) {
                    //If OK == true, then navigate home with details
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driverhome_driverhome__["a" /* DriverhomePage */], {
                        email: data.data.email,
                        username: data.data.username,
                        id: data.data._id,
                        available: data.data.available,
                        currentRoute: data.data.currentRoute,
                        currently_from: data.data.currently_from,
                        currently_to: data.data.currently_to,
                        employed: data.data.employed,
                        on_route: data.data.on_route,
                        phonenumber: data.data.phonenumber,
                        reviews: data.data.reviews,
                        employer: data.data.employer
                    });
                }
                else {
                    //else create a toast
                    var toast = _this.toast.create({
                        message: "Incorrect email and password combination",
                        duration: 3000
                    });
                    //present the toast
                    toast.present();
                }
            });
        }
    };
    DriverpopPage.prototype.signDriver = function () {
        var _this = this;
        //If values are undefined create a toast to show to user
        if (this.name_signin == undefined || this.email_signin == undefined || this.pass_signin == undefined) {
            var toast = this.toast.create({
                message: "Please input valid data",
                duration: 3000,
            });
            toast.present();
        }
        else {
            this.local.driverSignup(this.name_signin, this.email_signin, this.pass_signin).subscribe(function (data) {
                if (data.ok == true) {
                    //navigate to home
                    var toast = _this.toast.create({
                        message: "Account successfully created",
                        duration: 3000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driverhome_driverhome__["a" /* DriverhomePage */], {
                        email: data.data.email,
                        username: data.data.username,
                        id: data.data._id
                    });
                }
                else {
                    var toast = _this.toast.create({
                        message: "User already exists, would you like to login?",
                        duration: 3000
                    });
                    toast.present();
                }
            });
        }
    };
    DriverpopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driverpop',template:/*ion-inline-start:"E:\Projects\sharon\site\src\pages\driverpop\driverpop.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <ion-title>Driver Authentication</ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="closePopup()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <br />\n        <div padding>\n          <ion-segment [(ngModel)]="auth">\n            <ion-segment-button value="login">\n              LOG IN\n            </ion-segment-button>\n            <ion-segment-button value="signup">\n              SIGN UP\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      <div [ngSwitch]="auth">\n        <!-- login segment -->\n        <ion-list *ngSwitchCase="\'login\'">\n          <br />\n          <h4 class="text-center"> Log onto your account to take charge of your bus.</h4>\n    \n          <ion-item>\n            <ion-label floating>email</ion-label>\n            <ion-input type="text" [(ngModel)]="email_login"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label floating>password</ion-label>\n            <ion-input type="password" [(ngModel)]="pass_login"></ion-input>\n          </ion-item>\n          <br />\n    \n          <button full ion-button (click)="login()">LOGIN</button>\n        </ion-list>\n      \n        <!-- signup segment -->\n        <ion-list *ngSwitchCase="\'signup\'">\n          <br />\n          <h4 class="text-center"> Create a new account and search for jobs on TransComfy as a bus driver. </h4>\n    \n          <ion-item>\n            <ion-label floating>full names</ion-label>\n            <ion-input type="text" [(ngModel)]="name_signin"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>email</ion-label>\n            <ion-input type="email" [(ngModel)]="email_signin"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label floating>password</ion-label>\n            <ion-input type="password" [(ngModel)]="pass_signin"></ion-input>\n          </ion-item>\n          <br />\n    \n          <button full ion-button (click)="signDriver()">CREATE ACCOUNT</button>\n        </ion-list>\n      </div>\n    </ion-content>\n    '/*ion-inline-end:"E:\Projects\sharon\site\src\pages\driverpop\driverpop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_localdata__["a" /* LocalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], DriverpopPage);
    return DriverpopPage;
}());

//# sourceMappingURL=driverpop.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaccoAuthPopOverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saccoowner_saccoowner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_localdata__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaccoAuthPopOverPage = (function () {
    function SaccoAuthPopOverPage(navCtrl, navParams, vc, local, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vc = vc;
        this.local = local;
        this.toast = toast;
        this.auth = "login";
    }
    SaccoAuthPopOverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaccoAuthPopOverPage');
    };
    SaccoAuthPopOverPage.prototype.closePopup = function () {
        this.vc.dismiss();
    };
    SaccoAuthPopOverPage.prototype.login = function () {
        var _this = this;
        if (this.lemail == undefined || this.lpassword == undefined) {
            alert("Fill in all values Bro");
        }
        else {
            this.local.saccologin(this.lemail, this.lpassword).subscribe(function (response) {
                if (response.ok == true) {
                    _this.vc.dismiss();
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("password", response.data.password);
                    localStorage.setItem("username", response.data.username);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__saccoowner_saccoowner__["a" /* SaccoownerPage */], {
                        email: _this.lemail,
                        username: response.data.username
                    });
                }
                else {
                    var toast = _this.toast.create({
                        message: "Wrong email and password combition",
                        duration: 3000,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
        }
    };
    SaccoAuthPopOverPage.prototype.signup = function () {
        var _this = this;
        if (this.susername == undefined || this.semail == undefined || this.spassword == undefined) {
            alert("Fill in all values Bro");
        }
        else {
            this.local.saccosignup(this.susername, this.semail, this.spassword).subscribe(function (response) {
                if (response.ok == true) {
                    _this.vc.dismiss();
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("password", response.data.password);
                    localStorage.setItem("username", response.data.username);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__saccoowner_saccoowner__["a" /* SaccoownerPage */], {
                        username: response.data.username,
                        email: response.data.email
                    });
                }
                else {
                    var toast = _this.toast.create({
                        message: "User already exists, would you like to login?",
                        duration: 7000,
                        position: "bottom",
                        showCloseButton: true,
                        closeButtonText: "Login",
                        dismissOnPageChange: true
                    });
                    toast.onDidDismiss(function () {
                        _this.auth = "login";
                    });
                    toast.present();
                }
            });
        }
    };
    SaccoAuthPopOverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sacco-auth-pop-over',template:/*ion-inline-start:"E:\Projects\sharon\site\src\pages\sacco-auth-pop-over\sacco-auth-pop-over.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Sacco Owner Authentication</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closePopup()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <br />\n    <div padding>\n      <ion-segment [(ngModel)]="auth">\n        <ion-segment-button value="login">\n          LOG IN\n        </ion-segment-button>\n        <ion-segment-button value="signup">\n          SIGN UP\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  <div [ngSwitch]="auth">\n    <!-- login segment -->\n    <ion-list *ngSwitchCase="\'login\'">\n      <br />\n      <h4 class="text-center"> Log into your account using your credentials. </h4>\n\n      <ion-item>\n        <ion-label floating>email</ion-label>\n        <ion-input type="email" name="lemail" [(ngModel)]="lemail"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>password</ion-label>\n        <ion-input type="password" name="lpassword" [(ngModel)]="lpassword"></ion-input>\n      </ion-item>\n      <br />\n\n      <button full ion-button (click)="login()">LOGIN</button>\n    </ion-list>\n  \n    <!-- signup segment -->\n    <ion-list *ngSwitchCase="\'signup\'">\n      <br />\n      <h4 class="text-center"> Create a new account and register your buses with TransComfy </h4>\n\n      <ion-item>\n        <ion-label floating>full names</ion-label>\n        <ion-input type="text" name="susername" [(ngModel)]="susername"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>email</ion-label>\n        <ion-input type="email" name="semail" [(ngModel)]="semail"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>password</ion-label>\n        <ion-input type="password" name="spassword" [(ngModel)]="spassword"></ion-input>\n      </ion-item>\n      <br />\n\n      <button full ion-button (click)="signup()">CREATE ACCOUNT</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Projects\sharon\site\src\pages\sacco-auth-pop-over\sacco-auth-pop-over.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_localdata__["a" /* LocalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SaccoAuthPopOverPage);
    return SaccoAuthPopOverPage;
}());

//# sourceMappingURL=sacco-auth-pop-over.js.map

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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addbus/addbus.module": [
		279,
		4
	],
	"../pages/driverhome/driverhome.module": [
		280,
		3
	],
	"../pages/driverpop/driverpop.module": [
		281,
		2
	],
	"../pages/sacco-auth-pop-over/sacco-auth-pop-over.module": [
		282,
		1
	],
	"../pages/saccoowner/saccoowner.module": [
		283,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sacco_auth_pop_over_sacco_auth_pop_over__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_saccoowner_saccoowner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_driverpop_driverpop__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_driverhome_driverhome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_addbus_addbus__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_localdata__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { BusdetailPage } from "../pages/busdetail/busdetail";
//services

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sacco_auth_pop_over_sacco_auth_pop_over__["a" /* SaccoAuthPopOverPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_saccoowner_saccoowner__["a" /* SaccoownerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_driverpop_driverpop__["a" /* DriverpopPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_driverhome_driverhome__["a" /* DriverhomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addbus_addbus__["a" /* AddbusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addbus/addbus.module#AddbusPageModule', name: 'AddbusPage', segment: 'addbus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driverhome/driverhome.module#DriverhomePageModule', name: 'DriverhomePage', segment: 'driverhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driverpop/driverpop.module#DriverpopPageModule', name: 'DriverpopPage', segment: 'driverpop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sacco-auth-pop-over/sacco-auth-pop-over.module#SaccoAuthPopOverPageModule', name: 'SaccoAuthPopOverPage', segment: 'sacco-auth-pop-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saccoowner/saccoowner.module#SaccoownerPageModule', name: 'SaccoownerPage', segment: 'saccoowner', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sacco_auth_pop_over_sacco_auth_pop_over__["a" /* SaccoAuthPopOverPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_saccoowner_saccoowner__["a" /* SaccoownerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_driverpop_driverpop__["a" /* DriverpopPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_driverhome_driverhome__["a" /* DriverhomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addbus_addbus__["a" /* AddbusPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_localdata__["a" /* LocalData */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Projects\sharon\site\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Projects\sharon\site\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalData = (function () {
    function LocalData(http) {
        this.http = http;
    }
    LocalData.prototype.getBuses = function (name) {
        var offline = "http://localhost:3000/sacco/buses/" + name;
        //var online = "http://transcomfy.herokuapp.com/sacco/buses/"+ name;
        return this.http.get("http://transcomfy.herokuapp.com/sacco/buses/" + name).map(function (res) { return res.json(); });
    };
    LocalData.prototype.busDetail = function (numberplate) {
        var offline = "http://localhost:3000/sacco/busdetail/" + numberplate;
        //var online = "http://transcomfy.herokuapp.com/sacco/busdetail"+ numberplate;
        return this.http.get("http://transcomfy.herokuapp.com/sacco/busdetail" + numberplate).map(function (res) { return res.json(); });
    };
    LocalData.prototype.addBus = function (numberplate, name, mail, route, seats, busmodel) {
        var offline = "http://localhost:3000/sacco/addbus";
        //var online = "http://transcomfy.herokuapp.com/sacco/addbus";
        return this.http.post("http://transcomfy.herokuapp.com/sacco/addbus", {
            numberplate: numberplate,
            ownername: name,
            ownermail: mail,
            route: route,
            seats: seats,
            model: busmodel
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.saccologin = function (email, password) {
        var offline = "http://localhost:3000/auth/saccologin";
        //var online = "https://transcomfy.herokuapp.com/auth/saccologin";
        return this.http.post("https://transcomfy.herokuapp.com/auth/saccologin", {
            email: email,
            password: password
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.saccosignup = function (username, email, password) {
        var offline = "http://localhost:3000/auth/saccosignup";
        //var online = "https://transcomfy.herokuapp.com/auth/saccosignup";
        return this.http.post("https://transcomfy.herokuapp.com/auth/saccosignup", {
            username: username,
            email: email,
            password: password
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.updateRoute = function (id, route) {
        var offline = "http://localhost:3000/sacco/updateroute";
        //var online = "https://transcomfy.herokuapp.com/sacco/updateroute";
        return this.http.post("https://transcomfy.herokuapp.com/sacco/updateroute", {
            id: id,
            route: route
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.addStop = function (id, busstop, route) {
        var offline = "http://localhost:3000/sacco/addstop";
        //var online = "https://transcomfy.herokuapp.com/sacco/addstop";
        return this.http.post("https://transcomfy.herokuapp.com/sacco/addstop", {
            id: id,
            stop: busstop,
            route: route
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.driverSignup = function (username, email, password) {
        var offline = "http://localhost:3000/auth/driversignup";
        //var online = "https://transcomfy.herokuapp.com/auth/driversignup";
        return this.http.post("https://transcomfy.herokuapp.com/auth/driversignup", {
            username: username,
            email: email,
            password: password
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.driverlogin = function (email, password) {
        var offline = "http://localhost:3000/auth/driverlogin";
        //var online = "https://transcomfy.herokuapp.com/auth/driverlogin";
        return this.http.post("https://transcomfy.herokuapp.com/auth/driverlogin", {
            email: email,
            password: password
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.setTrip = function (plate, arrival, departure, arrloc, deploc) {
        return this.http.post("https://transcomfy.herokuapp.com/driver/setTrip", {
            plate: plate,
            arrival: arrival,
            departure: departure,
            arrloc: arrloc,
            deploc: deploc
        }).map(function (res) { return res.json(); });
    };
    LocalData.prototype.availabledrivers = function () {
        return this.http.get("https://transcomfy.herokuapp.com/sacco/availabledrivers").map(function (res) { return res.json(); });
    };
    LocalData.prototype.hiredriver = function (number, email) {
        return this.http.post("https://transcomfy.herokuapp.com/sacco/hiredriver", {
            email: email,
            plate: number
        }).map(function (res) { return res.json(); });
    };
    LocalData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LocalData);
    return LocalData;
}());

//# sourceMappingURL=localdata.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaccoownerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addbus_addbus__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localdata__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { BusdetailPage } from "../busdetail/busdetail";


var SaccoownerPage = (function () {
    function SaccoownerPage(navCtrl, toast, alt, navParams, lD, popover, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.alt = alt;
        this.navParams = navParams;
        this.lD = lD;
        this.popover = popover;
        this.modal = modal;
        this.username = this.navParams.get("username");
        this.email = this.navParams.get("email");
        //should save to localStorage
        if (this.navParams.get("buses") == undefined) {
            //undefined so get from web.
            this.lD.getBuses(this.username).subscribe(function (buses) {
                _this.buses = buses.data;
            });
        }
        else {
            //use the the ones
            this.buses = this.navParams.get("buses");
        }
    }
    SaccoownerPage.prototype.ionViewDidLoad = function () { };
    SaccoownerPage.prototype.addbus = function () {
        var _this = this;
        var popover = this.popover.create(__WEBPACK_IMPORTED_MODULE_2__addbus_addbus__["a" /* AddbusPage */], {
            username: this.username,
            email: this.email
        }, { cssClass: 'custom-popover' });
        popover.present();
        popover.onDidDismiss(function (data) {
            if (data == null) {
            }
            else {
                _this.buses = data.buses;
            }
            console.log(data);
        });
    };
    ;
    SaccoownerPage.prototype.busDetail = function (numberplate) {
        var _this = this;
        //get bus details and update activebus object with details
        this.lD.busDetail(numberplate).subscribe(function (details) {
            console.log(details.data);
            _this.activebus = details.data;
        });
    };
    SaccoownerPage.prototype.editRoute = function (id, oldroute) {
        var _this = this;
        var route = prompt("Please assign your bus a new route name", oldroute);
        this.lD.updateRoute(id, route).subscribe(function (response) {
            _this.activebus = response.data;
        });
    };
    //add stop
    SaccoownerPage.prototype.addStop = function (id, route) {
        var _this = this;
        var stop = prompt("Enter a new Bus Stop name for this Route", "");
        this.lD.addStop(id, stop, route).subscribe(function (response) {
            _this.activebus = response.data;
        });
    };
    SaccoownerPage.prototype.showAvailableDrivers = function () {
        var _this = this;
        this.lD.availabledrivers().subscribe(function (data) {
            console.log(data);
            if (data.ok == false) {
                var mytoast = _this.toast.create({
                    message: data.message
                });
                mytoast.present();
            }
            else {
                var radioAlt = _this.alt.create();
                radioAlt.setTitle("Pick a driver");
                data.data.forEach(function (driver) {
                    radioAlt.addInput({
                        type: "radio",
                        label: driver.username,
                        value: driver.email
                    });
                });
                radioAlt.addButton("Cancel");
                radioAlt.addButton({
                    text: "Hire",
                    handler: function (data) {
                        alert(_this.activebus.numberplate);
                        alert("I have picked Driver " + data);
                        _this.lD.hiredriver(_this.activebus.numberplate, data).subscribe(function (myresp) {
                            console.log(myresp);
                        });
                    }
                });
                radioAlt.present();
            }
        });
    };
    SaccoownerPage.prototype.logout = function () {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SaccoownerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saccoowner',template:/*ion-inline-start:"E:\Projects\sharon\site\src\pages\saccoowner\saccoowner.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transcomfy</ion-title>\n\n    <ion-buttons end>\n      <button ion-button>{{username}}</button>\n      <button ion-button (click)="addbus()">Add A Bus</button>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div class="flexbox">\n      <div class="leftPanel">\n        <h3>Buses</h3>\n        <ion-list>\n          <ion-item *ngFor="let bus of buses">\n            <h2>{{bus.numberplate}}</h2>\n            <p>{{bus.drivername}}</p>\n            <ion-note item-end>{{bus.route}}</ion-note>\n            <button ion-button clear item-end (click)="busDetail(bus.numberplate)">View</button>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class="rightPanel">\n        <div *ngIf="!activebus; else businfo">\n          <h3 class="text-center">Hi, please select a bus to view it\'s details</h3>\n        </div>\n\n        <ng-template #businfo>\n          <br>\n          <div class="card card-body" id="info-panel">\n            <div>\n              <h3>{{activebus.numberplate}}</h3>\n              <div>Driver: {{activebus.driver}}\n                <button ion-button color="primary" clear (click)="showAvailableDrivers()">Edit</button>\n              </div>\n            </div>\n            <div>\n              <div class="list-group">\n                <button type="button" class="list-group-item list-group-item-active">Arrival: {{activebus.arrival}}</button>\n                <button type="button" class="list-group-item list-group-item-active">Departure: {{activebus.departure}}</button>\n                <button type="button" class="list-group-item list-group-item-active">Current Stop: {{activebus.currentStop}}</button>\n              </div>\n            </div>\n\n            <div>\n              <ion-list>\n                <ion-item>{{activebus.route}} \n                  <button clear ion-button item-end (click)="editRoute(activebus._id, activebus.route)">Edit</button>\n                </ion-item>\n              </ion-list>\n            </div>\n          </div>\n\n          <div class="container">\n            <br>\n            <h1>Bus Stops</h1>\n            <button ion-button clear *ngFor="let stop of activebus.stops">{{stop}}</button>\n            <br>\n            <button ion-button color="secondary" (click)="addStop(activebus.id, activebus.route)">Add Stop</button>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\Projects\sharon\site\src\pages\saccoowner\saccoowner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_localdata__["a" /* LocalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], SaccoownerPage);
    return SaccoownerPage;
}());

//# sourceMappingURL=saccoowner.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sacco_auth_pop_over_sacco_auth_pop_over__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saccoowner_saccoowner__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__driverpop_driverpop__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_localdata__ = __webpack_require__(30);
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
    function HomePage(navCtrl, popoverCtrl, local, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.local = local;
        this.toast = toast;
        if (localStorage.getItem("email") == null || localStorage.getItem("email") == undefined) {
            //do nothing to allow login
        }
        else {
            this.local.saccologin(localStorage.getItem("email"), localStorage.getItem("password")).subscribe(function (resp) {
                if (resp.ok == true) {
                    localStorage.setItem("email", resp.data.email);
                    localStorage.setItem("password", resp.data.password);
                    localStorage.setItem("username", resp.data.username);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__saccoowner_saccoowner__["a" /* SaccoownerPage */], {
                        email: resp.data.email,
                        username: resp.data.username
                    });
                }
                else {
                    //do nothing to allow login.
                }
            });
        }
    }
    HomePage.prototype.presentSaccoOwnerAuth = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sacco_auth_pop_over_sacco_auth_pop_over__["a" /* SaccoAuthPopOverPage */], {}, { cssClass: 'custom-popover' });
        popover.present({
            ev: event
        });
    };
    HomePage.prototype.presentDriverAuth = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__driverpop_driverpop__["a" /* DriverpopPage */], {}, { cssClass: 'custom-popover' });
        popover.present();
    };
    HomePage.prototype.gotoHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__saccoowner_saccoowner__["a" /* SaccoownerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Projects\sharon\site\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      TransComfy\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="presentSaccoOwnerAuth($event)">Sacco Portal</button>\n      <button ion-button (click)="presentDriverAuth()">Driver Portal</button>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"E:\Projects\sharon\site\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__services_localdata__["a" /* LocalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map