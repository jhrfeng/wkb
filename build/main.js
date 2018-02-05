webpackJsonp([13],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actdetail/actdetail.module": [
		277,
		11
	],
	"../pages/actlist/actlist.module": [
		278,
		10
	],
	"../pages/game/game-1.module": [
		279,
		9
	],
	"../pages/game/game-2.module": [
		280,
		8
	],
	"../pages/game/game.module": [
		281,
		7
	],
	"../pages/home/home.module": [
		282,
		6
	],
	"../pages/join/join.module": [
		283,
		5
	],
	"../pages/look/look.module": [
		284,
		4
	],
	"../pages/me/me.module": [
		285,
		3
	],
	"../pages/myact/myact.module": [
		286,
		2
	],
	"../pages/news/news.module": [
		287,
		12
	],
	"../pages/result/result.module": [
		288,
		1
	],
	"../pages/trade/trade.module": [
		289,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpProvider = (function () {
    // SERVER = 'http://127.0.0.1:3200' 
    function HttpProvider(http, storage, alertCtrl, loadingCtrl) {
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.SERVER = 'http://47.52.29.233:3200';
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.post = function (url, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.SERVER + url, params)
                .subscribe(function (res) {
                resolve(JSON.parse(res['_body']));
            }, function (err) {
                _this.show('服务异常');
                reject(err);
            });
        });
    };
    HttpProvider.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.SERVER + url)
                .subscribe(function (res) {
                resolve(JSON.parse(res['_body']));
            }, function (err) {
                _this.show('服务异常');
                reject(err);
            });
        });
    };
    HttpProvider.prototype.authPost = function (url, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json;charset=UTF-8');
                headers.append('Authorization', 'Bearer ' + token);
                _this.http.post(_this.SERVER + url, params, { headers: headers })
                    .subscribe(function (res) {
                    resolve(JSON.parse(res['_body']));
                }, function (err) {
                    if (err['status'] == 401)
                        _this.showLoader('请先登录');
                    else
                        _this.show('服务异常');
                    reject(err);
                });
            });
        });
    };
    HttpProvider.prototype.authGet = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (token) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json;charset=UTF-8');
                headers.append('Authorization', 'Bearer ' + token);
                _this.http.get(_this.SERVER + url, { headers: headers })
                    .subscribe(function (res) {
                    resolve(JSON.parse(res['_body']));
                }, function (err) {
                    if (err['status'] == 401)
                        _this.show('请先登录');
                    else
                        _this.show('服务异常');
                    reject(err);
                });
            });
        });
    };
    HttpProvider.prototype.show = function (text) {
        var alert = this.alertCtrl.create({
            subTitle: text,
            buttons: ['确定']
        });
        alert.present(prompt);
    };
    HttpProvider.prototype.showLoader = function (content) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: content
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
], HttpProvider);

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        // 定时器
        this.user = { addr: '', password: '', spassword: '', vcode: '' };
    }
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.user.addr.trim() == '' || this.user.password.trim() == '') {
            this.http.show('地址或密码不能为空');
            return false;
        }
        if (this.user.password.trim() != this.user.spassword.trim()) {
            this.http.show('两次密码不一样');
            return false;
        }
        this.http.register(this.user, function (result) {
            if (result)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad registerPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/register/register.html"*/'<ion-header>\n  	<ion-navbar color="primary">\n    	<ion-title>注  册</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-list margin-top inset>\n	  	<ion-item padding-left padding-right>\n	    	<ion-input [(ngModel)]="user.addr" type="text" placeholder="请输入钱包地址"></ion-input>\n	  	</ion-item>\n	  	<ion-item padding-left padding-right>\n	    	<ion-input [(ngModel)]="user.password" type="password" placeholder="请输入密码"></ion-input>\n	  	</ion-item>\n	  	<ion-item padding-left padding-right>\n	    	<ion-input [(ngModel)]="user.spassword" type="password" placeholder="请再次输入密码"></ion-input>\n	  	</ion-item>\n	  	<ion-item padding-left padding-right>\n	    	<ion-input [(ngModel)]="user.vcode" type="vcode" placeholder="请输入邀请码"></ion-input>\n	  	</ion-item>\n	  	<ion-item no-lines clear>\n	  		<span item-end>密码丢失后不可找回</span>\n	  	</ion-item>\n	</ion-list>\n\n    <div padding class="btn">\n	  	<button ion-button full \n	  	(click)="register()">注  册</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPage = (function () {
    function ForgetPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sms = { text: '获取验证码', ok: false };
        this.user = { username: '', password: '', oldpassword: '', smscode: '' };
    }
    ForgetPage.prototype.cowndown = function () {
        var _this = this;
        var d = 60;
        this.timer = setInterval(function () {
            d--;
            if (d == 0) {
                _this.sms.text = '获取验证码';
                _this.sms.ok = false;
                clearInterval(_this.timer);
            }
            else {
                _this.sms.text = '剩余 ' + d + 's';
                _this.sms.ok = true;
            }
        }, 1000);
    };
    ForgetPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ForgetPage.prototype.forget = function () {
        var _this = this;
        if (this.user.username.length != 11 || this.user.username.slice(0, 1) != '1') {
            this.http.show('请输入正确的手机号');
            return false;
        }
        if (this.user.smscode.length != 6) {
            this.http.show('验证码不能为空');
            return false;
        }
        if (this.user.password.trim() != '' &&
            this.user.password == this.user.oldpassword)
            this.http.forget(this.user, function (result) {
                if (result)
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            });
        else
            this.http.show('密码不一致');
    };
    ForgetPage.prototype.sendsms = function () {
        var _this = this;
        if (this.user.username.length == 11 && this.user.username.slice(0, 1) == '1') {
            this.http.sendsms(this.user, function (result) {
                if (result)
                    _this.cowndown();
            });
        }
        else {
            this.http.show('请输入正确的手机号');
        }
    };
    ForgetPage.prototype.ionViewDidLeave = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    return ForgetPage;
}());
ForgetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forget',template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/forget/forget.html"*/'<ion-header>\n  	<ion-navbar color="primary">\n    	<ion-title>忘记密码</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-list margin-top inset>\n	  	<ion-item padding-left padding-right>\n	  		<ion-icon name="ios-phone-portrait-outline" item-start></ion-icon>\n	    	<ion-input [(ngModel)]="user.username" type="text" placeholder="请输入手机号"></ion-input>\n	  	</ion-item>\n	  	<ion-item padding-left padding-right>\n	  		<ion-icon name="ios-mail-outline" item-start></ion-icon>\n	    	<ion-input [(ngModel)]="user.smscode" type="text" \n			maxlength="6"\n	    	placeholder="请输入验证码"></ion-input>\n	    	<button ion-button round item-end\n	    	[disabled]="sms.ok"\n	    	(click)="sendsms()">{{sms.text}}</button>\n	  	</ion-item>\n	  	<ion-item padding-left padding-right>\n	  		<ion-icon name="ios-lock-outline" item-start></ion-icon>\n	    	<ion-input [(ngModel)]="user.password" type="password" placeholder="请输入新密码"></ion-input>\n	  	</ion-item>\n	  	<ion-item padding-left padding-right>\n	  		<ion-icon name="ios-lock-outline" item-start></ion-icon>\n	    	<ion-input [(ngModel)]="user.oldpassword" type="password" placeholder="请再次输入密码"></ion-input>\n	  	</ion-item>\n	  	<ion-item no-lines clear></ion-item>\n	</ion-list>\n\n    <div padding class="btn">\n	  	<button ion-button full\n	  	(click)="forget()">提  交</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/forget/forget.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], ForgetPage);

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.tab1Root = 'HomePage';
        this.tab2Root = 'ActlistPage';
        this.tab3Root = 'MePage';
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="活动" tabIcon="pricetag"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我"   tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_forget_forget__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_clipboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_http_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_http_service_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_util_util__ = __webpack_require__(276);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_forget_forget__["a" /* ForgetPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '',
                mode: 'ios',
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/actdetail/actdetail.module#ActdetailPageModule', name: 'ActdetailPage', segment: 'actdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/actlist/actlist.module#ActdetailPageModule', name: 'ActlistPage', segment: 'actlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game-1.module#Game1PageModule', name: 'Game1Page', segment: 'game-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game-2.module#Game2PageModule', name: 'Game2Page', segment: 'game-2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/join/join.module#JoinPageModule', name: 'JoinPage', segment: 'join', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/look/look.module#LookPageModule', name: 'LookPage', segment: 'look', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/me/me.module#MePageModule', name: 'MePage', segment: 'me', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/myact/myact.module#MyactPageModule', name: 'MyactPage', segment: 'myact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trade/trade.module#TradePageModule', name: 'TradePage', segment: 'trade', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_forget_forget__["a" /* ForgetPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_clipboard__["a" /* Clipboard */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_util_util__["a" /* UtilProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
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
            setTimeout(function () {
                splashScreen.hide();
            }, 100);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mac/home/wkb/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/setting/setting.html"*/'<ion-header>\n  	<ion-navbar color="primary">\n   		<ion-buttons start>\n      		<button ion-button icon-only>\n        		<ion-icon name="ios-notifications-outline"></ion-icon>\n      		</button>\n    	</ion-buttons>\n\n    	<ion-buttons end>\n      		<button ion-button icon-only (click)="setting()">\n        		<ion-icon name="ios-settings-outline"></ion-icon>\n      		</button>\n    	</ion-buttons>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	\n	<h1>111111111111</h1>\n	\n</ion-content>'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilProvider = (function () {
    function UtilProvider() {
    }
    return UtilProvider;
}());
UtilProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilProvider);

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpServiceProvider = (function () {
    function HttpServiceProvider(http, loadingCtrl, storage, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        console.log('Hello HttpServiceProvider Provider');
    }
    // 炸金花新手教程
    HttpServiceProvider.prototype.znews = function (callback) {
        this.http.get('/home/znews').then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) {
        });
    };
    // 活动在线人数
    HttpServiceProvider.prototype.sumact = function (id, callback) {
        this.http.get('/order/sumact?actid=' + id).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) {
        });
    };
    // 获取消息列表
    HttpServiceProvider.prototype.newlist = function (callback) {
        this.http.get('/home/news').then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) { });
    };
    // 活动是否结束
    HttpServiceProvider.prototype.isend = function (params, callback) {
        var _this = this;
        this.http.post('/order/isend', params).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 我的地址
    HttpServiceProvider.prototype.me = function (callback) {
        this.http.authGet('/user/me').then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) {
        });
    };
    // 活动总金额
    HttpServiceProvider.prototype.totalm = function (id, callback) {
        this.http.get('/order/totalm?actid=' + id).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) {
        });
    };
    // 权重订单
    HttpServiceProvider.prototype.onlyOrder = function (params, callback) {
        this.http.post('/order/onlyOrder', params).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) {
        });
    };
    // 我的活动订单列表
    HttpServiceProvider.prototype.mylist = function (params, callback) {
        this.http.authPost('/order/mylist', params).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                callback(null);
            }
        }, function (err) {
        });
    };
    // 活动订单列表
    HttpServiceProvider.prototype.actorderlist = function (params, callback) {
        var _this = this;
        this.http.post('/order/actlist', params).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 活动列表
    HttpServiceProvider.prototype.actlist = function (params, callback) {
        var _this = this;
        this.http.post('/act/list', params).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 活动详情, id为记录主键
    HttpServiceProvider.prototype.actDetail = function (id, callback) {
        var _this = this;
        this.http.get('/act/actDetail?id=' + id).then(function (result) {
            if (result['status'] == 200) {
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 登录
    HttpServiceProvider.prototype.login = function (params, callback) {
        var _this = this;
        this.http.post('/user/signin', params).then(function (result) {
            if (result['status'] == 200) {
                _this.storage.set('token', result['token']);
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 发送注册验证码
    HttpServiceProvider.prototype.sendsms = function (params, callback) {
        var _this = this;
        this.http.post('/user/send', params).then(function (result) {
            if (result['status'] == 200)
                callback(result);
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 注册
    HttpServiceProvider.prototype.register = function (params, callback) {
        var _this = this;
        this.http.post('/user/register', params).then(function (result) {
            if (result['status'] == 200) {
                _this.showLoader(result['msg']);
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    // 忘记密码
    HttpServiceProvider.prototype.forget = function (params, callback) {
        var _this = this;
        this.http.post('/user/forget', params).then(function (result) {
            if (result['status'] == 200) {
                _this.showLoader(result['msg']);
                callback(result);
            }
            else {
                _this.show(result['msg']);
                callback(null);
            }
        }, function (err) {
        });
    };
    HttpServiceProvider.prototype.show = function (text) {
        var alert = this.alertCtrl.create({
            subTitle: text,
            buttons: ['确定']
        });
        alert.present(prompt);
    };
    HttpServiceProvider.prototype.showLoader = function (content) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: content
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 2000);
    };
    return HttpServiceProvider;
}());
HttpServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HttpServiceProvider);

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_forget__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.user = { username: '', password: '' };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.http.login(this.user, function (result) {
            if (result)
                _this.navCtrl.setRoot('MePage');
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.forget = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mac/home/wkb/src/pages/login/login.html"*/'<ion-header>\n  	<ion-navbar color="primary">\n    	<ion-title>登  录</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/login.png" >\n	</div>\n	<ion-list inset>\n	  	<ion-item>\n	    	<ion-input type="text" [(ngModel)]="user.username"\n	    	 placeholder="登录地址"></ion-input>\n	  	</ion-item>\n	  	<ion-item>\n	    	<ion-input type="password" [(ngModel)]="user.password"\n	    	 placeholder="密  码"></ion-input>\n	  	</ion-item>\n	  	<ion-item no-lines>\n	  		<span item-end>登录后请用该地址进行支付</span>\n	  	</ion-item>\n	</ion-list>\n\n    <div padding>\n	  	<button ion-button full (click)="login()">登  录</button>\n	</div>\n\n	<div padding  class="register">\n	  	<button ion-button outline block (click)="register()">注  册</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/home/wkb/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map