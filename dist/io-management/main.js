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

/***/ "./src/app/app-navigation.ts":
/*!***********************************!*\
  !*** ./src/app/app-navigation.ts ***!
  \***********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = [
    {
        text: 'Home',
        path: '/home',
        icon: 'home'
    },
    {
        text: 'Examples',
        icon: 'folder',
        items: [
            {
                text: 'Profile',
                path: '/profile'
            },
            {
                text: 'Display Data',
                path: '/display-data'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/display-data/display-data.component */ "./src/app/pages/display-data/display-data.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_8__);









var routes = [
    {
        path: 'display-data',
        component: _pages_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDataComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'login-form',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: '**',
        redirectTo: 'home',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"]],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _pages_display_data_display_data_component__WEBPACK_IMPORTED_MODULE_7__["DisplayDataComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isAutorized(); else notAuthorized\">\r\n    <app-side-nav-outer-toolbar title=\"{{appInfo.title}}\">\r\n        <router-outlet></router-outlet>\r\n        <app-footer>\r\n            Copyright © 2011-2018 Developer Express Inc.\r\n            <br/>\r\n            All trademarks or registered trademarks are property of their respective owners.\r\n        </app-footer>\r\n    </app-side-nav-outer-toolbar>\r\n</ng-container>\r\n\r\n<ng-template #notAuthorized>\r\n    <app-single-card>\r\n        <router-outlet></router-outlet>\r\n    </app-single-card>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxubWFuaGN1b25nXFxpby1tYW5hZ2VtZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwwQkFBd0M7RUFDeEMsY0FBYTtFQUNiLGFBQVk7RUFDWixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQGltcG9ydCBcIi4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFzZS1iZywgNS4wMCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, screen, appInfo) {
        this.authService = authService;
        this.screen = screen;
        this.appInfo = appInfo;
    }
    Object.defineProperty(AppComponent.prototype, "getClass", {
        get: function () {
            var _this = this;
            return Object.keys(this.screen.sizes).filter(function (cl) { return _this.screen.sizes[cl]; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isAutorized = function () {
        return this.authService.isLoggedIn;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent.prototype, "getClass", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["AppInfoService"]])
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
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavOuterToolbarModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavInnerToolbarModule"],
                _layouts__WEBPACK_IMPORTED_MODULE_4__["SingleCardModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_5__["LoginFormModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["AppInfoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: APIauthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIauthentication", function() { return APIauthentication; });
var APIauthentication = {
    'APP_ID': 'XCVgXE6+fA8wql7Es3DDJzZuxpOP1G9t',
    'SECRET_KEY': 'z8lzJFtnCzNL1M9UvuDD3DbzozZ7rNK9LcV3CEmBV56='
};


/***/ }),

/***/ "./src/app/layouts/index.ts":
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule, SideNavInnerToolbarComponent, SideNavInnerToolbarModule, SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-outer-toolbar/side-nav-outer-toolbar.component */ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarModule"]; });

/* harmony import */ var _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-inner-toolbar/side-nav-inner-toolbar.component */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarModule"]; });

/* harmony import */ var _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-card/single-card.component */ "./src/app/layouts/single-card/single-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardModule"]; });






/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-drawer\r\n    class=\"drawer\"\r\n    position=\"before\"\r\n    [closeOnOutsideClick]=\"shaderEnabled\"\r\n    [openedStateMode]=\"menuMode\"\r\n    [revealMode]=\"menuRevealMode\"\r\n    [minSize]=\"minMenuSize\"\r\n    [shading]=\"shaderEnabled\"\r\n    [(opened)]=\"menuOpened\">\r\n\r\n    <app-side-navigation-menu\r\n        [items]=\"menuItems\"\r\n        [compactMode]=\"!menuOpened\"\r\n        [selectedItem]=\"selectedRoute\"\r\n        class=\"dx-swatch-additional\"\r\n        *dxTemplate=\"let dataMenu of 'panel'\"\r\n        (selectedItemChanged)=\"navigationChanged($event)\"\r\n        (click)=\"navigationClick()\">\r\n            <dx-toolbar id=\"navigation-header\">\r\n                <dxi-item\r\n                    *ngIf=\"minMenuSize !== 0\"\r\n                    location=\"before\"\r\n                    widget=\"dxButton\"\r\n                    [options]=\"{\r\n                        icon: 'menu',\r\n                        stylingMode: 'text',\r\n                        onClick: toggleMenu,\r\n                        elementAttr: { class: 'menu-button' }\r\n                    }\">\r\n                </dxi-item>\r\n                <dxi-item location=\"before\" [text]=\"title\">\r\n                </dxi-item>\r\n            </dx-toolbar>\r\n    </app-side-navigation-menu>\r\n\r\n    <div class=\"container\">\r\n        <app-header\r\n            [menuToggleEnabled]=\"minMenuSize === 0\"\r\n            (menuToggle)=\"menuOpened = !menuOpened;\">\r\n        </app-header>\r\n\r\n        <dx-scroll-view class=\"layout-body with-footer\">\r\n            <div class=\"content\">\r\n                <ng-content></ng-content>\r\n            </div>\r\n\r\n            <div class=\"content-block\">\r\n                <ng-content select=\"app-footer\"></ng-content>\r\n            </div>\r\n        </dx-scroll-view>\r\n    </div>\r\n</dx-drawer>\r\n"

/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.container {\n  height: 100%;\n  flex-direction: column;\n  display: flex; }\n\n.layout-body {\n  flex: 1;\n  min-height: 0; }\n\n.content {\n  flex-grow: 1; }\n\n#navigation-header {\n  background-color: #FF5722;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n#navigation-header ::ng-deep .menu-button .dx-icon {\n    color: #fff; }\n\n:host-context(.screen-x-small) #navigation-header {\n    padding-left: 20px; }\n\n:host-context(.dx-theme-generic) #navigation-header {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1pbm5lci10b29sYmFyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXGFwcFxcbGF5b3V0c1xcc2lkZS1uYXYtaW5uZXItdG9vbGJhclxcc2lkZS1uYXYtaW5uZXItdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1pbm5lci10b29sYmFyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUNaOztBQUdEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxRQUFPO0VBQ1AsY0FBYSxFQUNkOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBRUUsMEJDbEJtQjtFRG1CbkIseUVBQXdFLEVBY3pFOztBQWpCRDtJQU1JLFlDekJrQixFRDBCbkI7O0FBRUQ7SUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7SUFDRSxrQkFBaUI7SUFDakIscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1pbm5lci10b29sYmFyL3NpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGF5b3V0LWJvZHkge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuI25hdmlnYXRpb24taGVhZGVyIHtcclxuICBAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtYWNjZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuXHJcbiAgOjpuZy1kZWVwIC5tZW51LWJ1dHRvbiAuZHgtaWNvbiB7XHJcbiAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcclxuICB9XHJcblxyXG4gIDpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAmIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbiAgICBcclxuICA6aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSAmIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiRiYXNlLWJnOiAjMzYzNjQwO1xuJGJhc2UtdGV4dC1jb2xvcjogI2ZmZjtcbiRiYXNlLWJvcmRlci1jb2xvcjogIzUxNTE1OTtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiRiYXNlLWFjY2VudDogI0ZGNTcyMjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavInnerToolbarComponent, SideNavInnerToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return SideNavInnerToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return SideNavInnerToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "./node_modules/devextreme-angular/ui/drawer.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "./node_modules/devextreme-angular/ui/toolbar.js");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-navigation */ "./src/app/app-navigation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var SideNavInnerToolbarComponent = /** @class */ (function () {
    function SideNavInnerToolbarComponent(screen, router) {
        var _this = this;
        this.screen = screen;
        this.router = router;
        this.menuItems = _app_navigation__WEBPACK_IMPORTED_MODULE_8__["navigation"];
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
        this.toggleMenu = function (e) {
            _this.menuOpened = !_this.menuOpened;
            e.event.stopPropagation();
        };
    }
    SideNavInnerToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                _this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(function () { return _this.updateDrawer(); });
        this.updateDrawer();
    };
    SideNavInnerToolbarComponent.prototype.updateDrawer = function () {
        var isXSmall = this.screen.sizes['screen-x-small'];
        var isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    };
    Object.defineProperty(SideNavInnerToolbarComponent.prototype, "hideMenuAfterNavigation", {
        get: function () {
            return this.menuMode === 'overlap' || this.temporaryMenuOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavInnerToolbarComponent.prototype, "showMenuAfterClick", {
        get: function () {
            return !this.menuOpened;
        },
        enumerable: true,
        configurable: true
    });
    SideNavInnerToolbarComponent.prototype.navigationChanged = function (event) {
        var path = event.itemData.path;
        var pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    };
    SideNavInnerToolbarComponent.prototype.navigationClick = function () {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SideNavInnerToolbarComponent.prototype, "title", void 0);
    SideNavInnerToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav-inner-toolbar',
            template: __webpack_require__(/*! ./side-nav-inner-toolbar.component.html */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-inner-toolbar.component.scss */ "./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["ScreenService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], SideNavInnerToolbarComponent);
    return SideNavInnerToolbarComponent;
}());

var SideNavInnerToolbarModule = /** @class */ (function () {
    function SideNavInnerToolbarModule() {
    }
    SideNavInnerToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_components__WEBPACK_IMPORTED_MODULE_2__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: [SideNavInnerToolbarComponent],
            declarations: [SideNavInnerToolbarComponent]
        })
    ], SideNavInnerToolbarModule);
    return SideNavInnerToolbarModule;
}());



/***/ }),

/***/ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\r\n    class=\"layout-header\"\r\n    [menuToggleEnabled]=\"true\"\r\n    (menuToggle)=\"menuOpened = !menuOpened;\"\r\n    [title]=\"title\">\r\n</app-header>\r\n\r\n<dx-drawer\r\n    class=\"layout-body\"\r\n    position=\"before\"\r\n    [closeOnOutsideClick]=\"shaderEnabled\"\r\n    [openedStateMode]=\"menuMode\"\r\n    [revealMode]=\"menuRevealMode\"\r\n    [minSize]=\"minMenuSize\"\r\n    [shading]=\"shaderEnabled\"\r\n    [(opened)]=\"menuOpened\">\r\n\r\n    <app-side-navigation-menu\r\n        [items]=\"menuItems\"\r\n        [compactMode]=\"!menuOpened\"\r\n        [selectedItem]=\"selectedRoute\"\r\n        class=\"dx-swatch-additional\"\r\n        *dxTemplate=\"let dataMenu of 'panel'\"\r\n        (selectedItemChanged)=\"navigationChanged($event)\"\r\n        (click)=\"navigationClick()\">\r\n    </app-side-navigation-menu>\r\n\r\n    <dx-scroll-view class=\"with-footer\">\r\n        <div class=\"content\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n\r\n        <div class=\"content-block\">\r\n            <ng-content select=\"app-footer\"></ng-content>\r\n        </div>\r\n    </dx-scroll-view>\r\n</dx-drawer>\r\n"

/***/ }),

/***/ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-direction: column;\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n.layout-header {\n  z-index: 1501; }\n\n.layout-body {\n  flex: 1;\n  min-height: 0; }\n\n.content {\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zaWRlLW5hdi1vdXRlci10b29sYmFyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXGFwcFxcbGF5b3V0c1xcc2lkZS1uYXYtb3V0ZXItdG9vbGJhclxcc2lkZS1uYXYtb3V0ZXItdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFFBQU87RUFDUCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3NpZGUtbmF2LW91dGVyLXRvb2xiYXIvc2lkZS1uYXYtb3V0ZXItdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGF5b3V0LWhlYWRlciB7XHJcbiAgei1pbmRleDogMTUwMTtcclxufVxyXG5cclxuLmxheW91dC1ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return SideNavOuterToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return SideNavOuterToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "./node_modules/devextreme-angular/ui/drawer.js");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "./node_modules/devextreme-angular/ui/scroll-view.js");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-navigation */ "./src/app/app-navigation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var SideNavOuterToolbarComponent = /** @class */ (function () {
    function SideNavOuterToolbarComponent(screen, router) {
        this.screen = screen;
        this.router = router;
        this.menuItems = _app_navigation__WEBPACK_IMPORTED_MODULE_7__["navigation"];
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
    }
    SideNavOuterToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                _this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(function () { return _this.updateDrawer(); });
        this.updateDrawer();
    };
    SideNavOuterToolbarComponent.prototype.updateDrawer = function () {
        var isXSmall = this.screen.sizes['screen-x-small'];
        var isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    };
    Object.defineProperty(SideNavOuterToolbarComponent.prototype, "hideMenuAfterNavigation", {
        get: function () {
            return this.menuMode === 'overlap' || this.temporaryMenuOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavOuterToolbarComponent.prototype, "showMenuAfterClick", {
        get: function () {
            return !this.menuOpened;
        },
        enumerable: true,
        configurable: true
    });
    SideNavOuterToolbarComponent.prototype.navigationChanged = function (event) {
        var path = event.itemData.path;
        var pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    };
    SideNavOuterToolbarComponent.prototype.navigationClick = function () {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SideNavOuterToolbarComponent.prototype, "title", void 0);
    SideNavOuterToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav-outer-toolbar',
            template: __webpack_require__(/*! ./side-nav-outer-toolbar.component.html */ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-outer-toolbar.component.scss */ "./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["ScreenService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SideNavOuterToolbarComponent);
    return SideNavOuterToolbarComponent;
}());

var SideNavOuterToolbarModule = /** @class */ (function () {
    function SideNavOuterToolbarModule() {
    }
    SideNavOuterToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_components__WEBPACK_IMPORTED_MODULE_2__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_4__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_5__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
            exports: [SideNavOuterToolbarComponent],
            declarations: [SideNavOuterToolbarComponent]
        })
    ], SideNavOuterToolbarModule);
    return SideNavOuterToolbarModule;
}());



/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dx-card content\">\r\n    <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  display: flex; }\n\n.dx-card {\n  width: 330px;\n  margin: auto auto;\n  padding: 40px; }\n\n:host-context(.screen-x-small) .dx-card {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zaW5nbGUtY2FyZC9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFxhcHBcXGxheW91dHNcXHNpbmdsZS1jYXJkXFxzaW5nbGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixjQUFhLEVBVWQ7O0FBUkM7SUFDRSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsVUFBUztJQUNULFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2luZ2xlLWNhcmQvc2luZ2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5keC1jYXJkIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgcGFkZGluZzogNDBweDtcclxuXHJcbiAgOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpICYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9ICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/single-card/single-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return SingleCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return SingleCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var SingleCardComponent = /** @class */ (function () {
    function SingleCardComponent() {
    }
    SingleCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-card',
            template: __webpack_require__(/*! ./single-card.component.html */ "./src/app/layouts/single-card/single-card.component.html"),
            styles: [__webpack_require__(/*! ./single-card.component.scss */ "./src/app/layouts/single-card/single-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SingleCardComponent);
    return SingleCardComponent;
}());

var SingleCardModule = /** @class */ (function () {
    function SingleCardModule() {
    }
    SingleCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [SingleCardComponent],
            declarations: [SingleCardComponent]
        })
    ], SingleCardModule);
    return SingleCardModule;
}());



/***/ }),

/***/ "./src/app/pages/display-data/display-data.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/display-data/display-data.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Areas</h2>\r\n<dx-data-grid class=\"dx-card wide-card\" [dataSource]=\"dataSource\" [showBorders]=\"false\" [focusedRowEnabled]=\"true\"\r\n    [focusedRowIndex]=\"0\" [columnAutoWidth]=\"true\" [columnHidingEnabled]=\"true\" [columns]=\"['Id', 'Name', 'CV', 'IsCurrent', 'LastUpdated']\">\r\n    <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [showInfo]=\"true\"></dxo-pager>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n    <!-- <dxi-column\r\n        dataField=\"Task_ID\"\r\n        [width]=\"90\"\r\n        [hidingPriority]=\"2\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Subject\"\r\n        [width]=\"190\"\r\n        caption=\"Subject\"\r\n        [hidingPriority]=\"8\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Status\"\r\n        caption=\"Status\"\r\n        [hidingPriority]=\"6\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Priority\"\r\n        caption=\"Priority\"\r\n        [hidingPriority]=\"5\">\r\n        <dxo-lookup\r\n            [dataSource]=\"priority\"\r\n            valueExpr=\"value\"\r\n            displayExpr=\"name\">\r\n        </dxo-lookup>\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"ResponsibleEmployee.Employee_Full_Name\"\r\n        caption=\"Assigned To\"\r\n        [allowSorting]=\"false\"\r\n        [hidingPriority]=\"7\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Start_Date\"\r\n        caption=\"Start Date\"\r\n        dataType=\"date\"\r\n        [hidingPriority]=\"3\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Due_Date\"\r\n        caption=\"Due Date\"\r\n        dataType=\"date\"\r\n        [hidingPriority]=\"4\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Priority\"\r\n        caption=\"Priority\"\r\n        [hidingPriority]=\"1\">\r\n    </dxi-column>\r\n    <dxi-column\r\n        dataField=\"Task_Completion\"\r\n        caption=\"Completion\"\r\n        [hidingPriority]=\"0\">\r\n    </dxi-column> -->\r\n    <dxi-column dataField=\"Id\" [width]=\"100\" [hidingPriority]=\"2\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"Name\" [width]=\"500\" caption=\"NAME\" [hidingPriority]=\"8\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"CV\" [width]=\"100\" caption=\"CV(MJ/Sm3)\" [hidingPriority]=\"6\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"IsCurrent\" [width]=\"100\" caption=\"CURRENT\" [hidingPriority]=\"5\">\r\n        <dxo-lookup [dataSource]=\"isCurrent\" valueExpr=\"value\" displayExpr=\"name\">\r\n        </dxo-lookup>\r\n    </dxi-column>\r\n    <dxi-column dataField=\"LastUpdated\" [width]=\"200\" caption=\"LAST UPDATED\" dataType=\"date\">\r\n    </dxi-column>\r\n</dx-data-grid>"

/***/ }),

/***/ "./src/app/pages/display-data/display-data.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/display-data/display-data.component.ts ***!
  \**************************************************************/
/*! exports provided: DisplayDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDataComponent", function() { return DisplayDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/odata/store */ "./node_modules/devextreme/data/odata/store.js");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/area.service */ "./src/app/shared/services/area.service.ts");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6__);







var DisplayDataComponent = /** @class */ (function () {
    function DisplayDataComponent(areaService) {
        this.areaService = areaService;
        // this.dataSource = {
        //   store: {
        //     type: 'odata',
        //     key: 'Task_ID',
        //     url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
        //   },
        //   expand: 'ResponsibleEmployee',
        //   select: [
        //     'Task_ID',
        //     'Task_Subject',
        //     'Task_Start_Date',
        //     'Task_Due_Date',
        //     'Task_Status',
        //     'Task_Priority',
        //     'Task_Completion',
        //     'ResponsibleEmployee/Employee_Full_Name'
        //   ]
        // };
        // this.priority = [
        //   { name: 'High', value: 4 },
        //   { name: 'Urgent', value: 3 },
        //   { name: 'Normal', value: 2 },
        //   { name: 'Low', value: 1 }
        // ];
        this.isCurrent = [
            { name: 'Yes', value: true },
            { name: 'No', value: false },
        ];
    }
    DisplayDataComponent.prototype.ngOnInit = function () {
        this.getAreas();
    };
    DisplayDataComponent.prototype.getAreas = function () {
        var _this = this;
        this.areaService.getAreas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            return data.payload.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            // Catch if the Area API has reached its rate limit. Return empty data.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) {
            _this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_6___default.a({
                store: {
                    type: 'array',
                    key: 'Id',
                    data: data
                }
            });
        });
    };
    DisplayDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./display-data.component.html */ "./src/app/pages/display-data/display-data.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"]])
    ], DisplayDataComponent);
    return DisplayDataComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Home</h2>\r\n<div class=\"content-block\">\r\n    <div class=\"dx-card responsive-paddings\">\r\n        <div class=\"logos-container\">\r\n            <svg class=\"devextreme-logo\" viewBox=\"0 0 200 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z\" fill=\"#F05B41\"/>\r\n            </svg>\r\n            <svg class =\"plus\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z\" fill=\"#BCBCBC\"/>\r\n            </svg>\r\n            <svg class=\"angular-logo\" viewBox=\"0 0 512 139\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"#B52E31\"><path d=\"M150.6 102.8v-63h8.1l38.5 50.7V39.8h7.7v63h-8.1l-38.5-51.2v51.2h-7.7zM267.6 100.3c-5.1 1.9-10.6 2.9-16.4 2.9-22.8 0-34.2-10.9-34.2-32.8 0-20.7 11-31.1 33-31.1 6.3 0 12.2.9 17.6 2.6v7c-5.4-2.1-11-3.1-16.7-3.1-17.2 0-25.8 8.2-25.8 24.4 0 17.5 8.5 26.2 25.4 26.2 2.7 0 5.7-.4 9-1.1V74.2h8.1v26.1zM280.6 78.5V39.8h8.1v38.7c0 12.1 6 18.2 18.1 18.2 12 0 18.1-6.1 18.1-18.2V39.8h8.1v38.7c0 16.5-8.7 24.8-26.2 24.8s-26.2-8.3-26.2-24.8zM355.6 39.8v56.4h33v6.6h-41.1v-63h8.1zM400.3 102.8h-8.5l31.3-71.3 31.3 71.3h-9L437.3 83h-20.8l2.2-6.6h15.9l-11.8-28.5-22.5 54.9zM463.1 102.8v-63H490c12 0 18 5 18 15.1 0 8.2-5.9 14.3-17.6 18.2l21.6 29.7h-10.7l-20-28.3v-5.3c12-1.9 18.1-6.5 18.1-13.9 0-5.8-3.3-8.7-10-8.7h-18v56.2h-8.3z\"/></g><path d=\"M0 23L64.5 0l66.2 22.6-10.7 85.3-55.5 30.7-54.6-30.3L0 23z\" fill=\"#E23237\"/><path d=\"M130.7 22.6L64.5 0v138.6l55.5-30.7 10.7-85.3z\" fill=\"#B52E31\"/><path d=\"M64.6 16.2l-40.2 89.4 15-.3 8.1-20.2H83.4l8.8 20.4 14.3.3-41.9-89.6zm.1 28.7l13.6 28.4H52.8l11.9-28.4z\" fill=\"#FFF\"/></g>\r\n            </svg>\r\n        </div>\r\n\r\n        <p>Welcome to <b>Io Management</b>!</p><p>The application is built with:</p>\r\n        <ul>\r\n            <li><a href=\"https://cli.angular.io/\">Angular CLI</a></li>\r\n            <li><a href=\"https://github.com/devexpress/devextreme-cli\">DevExtreme CLI</a></li>\r\n            <li><a href=\"https://github.com/devexpress/devextreme-angular\">DevExtreme-Angular</a> components</li>\r\n        </ul>\r\n\r\n        <p>The application layouts are implemented using the <a href=\"https://js.devexpress.com/Documentation/\">Drawer</a> component. Several component examples are also available in the <b>Examples</b> section. For complete information on DevExtreme, check our <a href=\"https://js.devexpress.com/Documentation/\">documentation</a> and <a href=\"https://js.devexpress.com/Demos/WidgetsGallery/\">demos</a>.</p>\r\n        <p>You can do the following to create a custom application using this template as a base point:</p>\r\n\r\n        <ul>\r\n            <li><b>Add new views</b></li>\r\n            <li><b>Switch themes</b></li>\r\n            <li><b>Customize themes</b></li>\r\n            <li><b>Apply the additional theme to custom elements</b></li>\r\n            <li><b>Use theme colors in custom elements</b></li>\r\n            <li><b>Switch the layout</b></li>\r\n        </ul>\r\n\r\n        <p>Please, read README in <a href=\"https://github.com/DevExpress/devextreme-angular-template/blob/master/README.md\">devextreme-angular-template</a> GitHub repository for more information.</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos-container {\n  margin: 20px 0 40px 0;\n  text-align: center; }\n  .logos-container svg {\n    display: inline-block; }\n  .devextreme-logo {\n  width: 200px;\n  height: 34px;\n  margin-bottom: 13px; }\n  .angular-logo {\n  width: 220px;\n  height: 62px; }\n  .plus {\n  margin: 15px 10px;\n  width: 22px;\n  height: 22px; }\n  :host-context(.screen-x-small) .logos-container svg {\n  width: 100%;\n  display: block; }\n  :host-context(.screen-x-small) .logos-container svg.plus {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUluQjtFQU5EO0lBSUksc0JBQXFCLEVBQ3RCO0VBR0g7RUFDRSxhQUFZO0VBQ1osYUFBWTtFQUNaLG9CQUFtQixFQUNwQjtFQUVEO0VBQ0UsYUFBWTtFQUNaLGFBQVksRUFDYjtFQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxhQUFZLEVBQ2I7RUFFRDtFQUVJLFlBQVc7RUFDWCxlQUFjLEVBSWY7RUFQSDtJQUtNLFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvcy1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweCAwIDQwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgc3ZnIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5kZXZleHRyZW1lLWxvZ28ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuLmFuZ3VsYXItbG9nbyB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogNjJweDtcclxufVxyXG5cclxuLnBsdXMge1xyXG4gIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpIC5sb2dvcy1jb250YWluZXIge1xyXG4gIHN2ZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgJi5wbHVzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-block\">Profile</h2>\r\n\r\n<div class=\"content-block dx-card responsive-paddings\">\r\n    <div class=\"form-avatar\">\r\n        <img src=\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/{{employee.Picture}}\"/>\r\n    </div>\r\n    <span>{{employee.Notes}}</span>\r\n</div>\r\n\r\n<div class=\"content-block dx-card responsive-paddings\">\r\n    <dx-form id=\"form\"\r\n        [formData]=\"employee\"\r\n        labelLocation=\"top\"\r\n        [minColWidth]=\"233\"\r\n        colCount=\"auto\">\r\n    </dx-form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-avatar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  margin-right: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  overflow: hidden; }\n  .form-avatar img {\n    height: 120px;\n    display: block;\n    margin: 0 auto; }\n  .dx-card:not(:first-child) {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGNBQWE7RUFDYixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHFDQUFvQztFQUNwQyx5QkFBd0I7RUFDeEIsNkJBQTRCO0VBQzVCLDRCQUEyQjtFQUMzQix1QkFBc0I7RUFDdEIsaUJBQWdCLEVBT2pCO0VBakJEO0lBYUksY0FBYTtJQUNiLGVBQWM7SUFDZCxlQUFjLEVBQ2Y7RUFHSDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWF2YXRhciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uZHgtY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.employee = {
            ID: 7,
            FirstName: 'Sandra',
            LastName: 'Johnson',
            Prefix: 'Mrs.',
            Position: 'Controller',
            Picture: 'images/employees/06.png',
            BirthDate: new Date('1974/11/15'),
            HireDate: new Date('2005/05/11'),
            /* tslint:disable-next-line:max-line-length */
            Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if yo`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
            Address: '4600 N Virginia Rd.'
        };
    }
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  color: rgba(0, 0, 0, 0.609);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYmFzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLDRCQ0htQztFREluQyx5Q0FBd0M7RUFDeEMsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbn1cclxuIiwiJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjRkY1NzIyO1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent, FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: "\n    <footer><ng-content></ng-content></footer>\n  ",
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());

var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [FooterComponent],
            exports: [FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <dx-toolbar>\r\n        <dxi-item\r\n            *ngIf=\"menuToggleEnabled\"\r\n            location=\"before\"\r\n            widget=\"dxButton\"\r\n            [options]=\"{\r\n                icon: 'menu',\r\n                stylingMode: 'text',\r\n                onClick: toggleMenu,\r\n                elementAttr: { class: 'menu-button' }\r\n            }\">\r\n        </dxi-item>\r\n        <dxi-item\r\n            location=\"before\"\r\n            *ngIf=\"title\"\r\n            [text]=\"title\">\r\n        </dxi-item>\r\n        <dxi-item\r\n            location=\"after\"\r\n            locateInMenu=\"auto\"\r\n            menuItemTemplate=\"menuItem\">\r\n            <div *dxTemplate=\"let data of 'item'\">\r\n                <dx-button\r\n                    class=\"user-button authorization\"\r\n                    width=\"170px\"\r\n                    height=\"100%\"\r\n                    stylingMode=\"text\">\r\n                    <div *dxTemplate=\"let data of 'content'\">\r\n                        <app-user-panel [menuItems]=\"userMenuItems\" menuMode=\"context\"></app-user-panel>\r\n                    </div>\r\n                </dx-button>\r\n            </div>\r\n        </dxi-item>\r\n        <div *dxTemplate=\"let data of 'menuItem'\">\r\n            <app-user-panel [menuItems]=\"userMenuItems\" menuMode=\"list\"></app-user-panel>\r\n        </div>\r\n    </dx-toolbar>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  flex: 0 0 auto;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  :host ::ng-deep .dx-toolbar .dx-toolbar-item-content > .menu-button .dx-icon {\n    color: #FF5722; }\n  ::ng-deep .dx-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 40px; }\n  :host-context(.screen-x-small) ::ng-deep .dx-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n    padding: 0 20px; }\n  ::ng-deep .menu-button {\n  margin: 0 12px; }\n  :host ::ng-deep .dx-menu-base .dx-menu-item-wrapper {\n  width: 173px; }\n  :host-context(.dx-theme-generic) .dx-toolbar {\n  padding: 10px 0; }\n  :host-context(.dx-theme-generic) .user-button > .dx-button-content {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcbm1hbmhjdW9uZ1xcaW8tbWFuYWdlbWVudC9zcmNcXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYmFzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxXQUFVO0VBRVYseUVBQXdFLEVBS3pFO0VBVkQ7SUFRSSxlQ05pQixFRE9sQjtFQUdIO0VBQ0UsZ0JBQWUsRUFLaEI7RUFIQztJQUNFLGdCQUFlLEVBQ2hCO0VBR0g7RUFDRSxlQUFjLEVBQ2Y7RUFFRDtFQUVJLGFBQVksRUFDYjtFQUdIO0VBRUksZ0JBQWUsRUFDaEI7RUFISDtFQU1JLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG5cclxuICA6Om5nLWRlZXAgLmR4LXRvb2xiYXIgLmR4LXRvb2xiYXItaXRlbS1jb250ZW50ID4gLm1lbnUtYnV0dG9uIC5keC1pY29uIHtcclxuICAgIGNvbG9yOiAkYmFzZS1hY2NlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXRvb2xiYXIgLmR4LXRvb2xiYXItaXRlbXMtY29udGFpbmVyIC5keC10b29sYmFyLWFmdGVyIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcblxyXG4gIDpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAmIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWVudS1idXR0b24ge1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmR4LW1lbnUtYmFzZSB7XHJcbiAgLmR4LW1lbnUtaXRlbS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxNzNweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpIHtcclxuICAuZHgtdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAudXNlci1idXR0b24+LmR4LWJ1dHRvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjRkY1NzIyO1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "./node_modules/devextreme-angular/ui/toolbar.js");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__);







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuToggleEnabled = false;
        this.userMenuItems = [{
                text: 'Profile',
                icon: 'user'
            }, {
                text: 'Logout',
                icon: 'runner',
                onClick: function () {
                    _this.authService.logOut();
                }
            }];
        this.toggleMenu = function () {
            _this.menuToggle.emit();
        };
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "menuToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "menuToggleEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__["DxButtonModule"],
                _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelModule"],
                devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"]
            ],
            declarations: [HeaderComponent],
            exports: [HeaderComponent]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: FooterComponent, FooterModule, HeaderComponent, HeaderModule, LoginFormComponent, LoginFormModule, SideNavigationMenuComponent, SideNavigationMenuModule, UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterModule"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });

/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/shared/components/login-form/login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormModule"]; });

/* harmony import */ var _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-navigation-menu/side-navigation-menu.component */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationMenuModule"]; });

/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelModule"]; });








/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\r\n    <div class=\"login-header\">\r\n        <div class=\"title\">{{appInfo.title}}</div>\r\n        <div>Sign In to your account</div>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-text-box [(value)]=\"login\" placeholder=\"Login\" width=\"100%\">\r\n            <dx-validator>\r\n                <dxi-validation-rule type=\"required\" message=\"Login is required\"></dxi-validation-rule>\r\n            </dx-validator>\r\n        </dx-text-box>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-text-box mode=\"password\" [(value)]=\"password\" placeholder=\"Password\" width=\"100%\">\r\n            <dx-validator>\r\n                <dxi-validation-rule type=\"required\" message=\"Password is required\"></dxi-validation-rule>\r\n            </dx-validator>\r\n        </dx-text-box>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-check-box [value]=\"false\" text=\"Remember me\"></dx-check-box>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-button type=\"default\" text=\"Login\" (onClick)=\"onLoginClick($event)\" width=\"100%\"></dx-button>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <a routerLink=\"/recovery\">Forgot password ?</a>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n        <dx-button type=\"normal\" text=\"Create an account\" width=\"100%\"></dx-button>\r\n    </div>\r\n</dx-validation-group>\r\n"

/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-header {\n  text-align: center;\n  margin-bottom: 40px; }\n  .login-header .title {\n    color: #FF5722;\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tZm9ybS9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9naW4tZm9ybVxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tZm9ybS9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFRcEI7RUFWRDtJQUtJLGVDSGlCO0lESWpCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6ICRiYXNlLWFjY2VudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iLCIkYmFzZS1iZzogI2ZmZjtcbiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4kYmFzZS1hY2NlbnQ6ICNGRjU3MjI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/login-form/login-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent, LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/shared/services/index.ts");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/button */ "./node_modules/devextreme-angular/ui/button.js");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/check-box */ "./node_modules/devextreme-angular/ui/check-box.js");
/* harmony import */ var devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/text-box */ "./node_modules/devextreme-angular/ui/text-box.js");
/* harmony import */ var devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/validator */ "./node_modules/devextreme-angular/ui/validator.js");
/* harmony import */ var devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/validation-group */ "./node_modules/devextreme-angular/ui/validation-group.js");
/* harmony import */ var devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_9__);










var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, appInfo) {
        this.authService = authService;
        this.appInfo = appInfo;
        this.login = '';
        this.password = '';
    }
    LoginFormComponent.prototype.onLoginClick = function (args) {
        if (!args.validationGroup.validate().isValid) {
            return;
        }
        this.authService.logIn(this.login, this.password);
        args.validationGroup.reset();
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/shared/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/shared/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_4__["AppInfoService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__["DxButtonModule"],
                devextreme_angular_ui_check_box__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
                devextreme_angular_ui_text_box__WEBPACK_IMPORTED_MODULE_7__["DxTextBoxModule"],
                devextreme_angular_ui_validator__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
                devextreme_angular_ui_validation_group__WEBPACK_IMPORTED_MODULE_9__["DxValidationGroupModule"]
            ],
            declarations: [LoginFormComponent],
            exports: [LoginFormComponent]
        })
    ], LoginFormModule);
    return LoginFormModule;
}());



/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n\r\n<div class=\"menu-container\">\r\n    <dx-tree-view\r\n        expandEvent=\"click\"\r\n        width=\"100%\"\r\n        [items]=\"items\"\r\n        (onInitialized)=\"onMenuInitialized($event)\"\r\n        (onItemClick)=\"onItemClick($event)\"\r\n        (onContentReady)=\"updateSelection($event)\"\r\n        (onSelectionChanged)=\"updateSelection($event)\"\r\n        [selectByClick]=\"true\"\r\n        selectionMode=\"single\"\r\n        keyExpr=\"path\">\r\n    </dx-tree-view>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 250px !important; }\n  :host .menu-container {\n    display: flex;\n    flex: 1; }\n  :host .menu-container .dx-treeview {\n      white-space: nowrap; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node {\n  padding: 0 0; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {\n    background: transparent; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected > .dx-treeview-item * {\n    color: #FF5722; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node-container .dx-treeview-node:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {\n    background-color: #3f3f4b; }\n  :host ::ng-deep .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility {\n  left: 10px;\n  right: auto; }\n  :host ::ng-deep .dx-treeview .dx-treeview-item-content {\n  padding: 0 10px; }\n  :host ::ng-deep .dx-treeview .dx-treeview-toggle-item-visibility {\n  right: 10px;\n  left: auto; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node[aria-level='1'] {\n  border-bottom: 1px solid #515159; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node[aria-level='1'] .dx-treeview-item-content span {\n    padding: 0 13px; }\n  :host ::ng-deep .dx-treeview .dx-treeview-node[aria-level='2'] .dx-treeview-item-content {\n  font-weight: 300;\n  padding: 0 38px; }\n  :host :host-context(.dx-theme-generic) ::ng-deep.dx-treeview .dx-treeview-item .dx-icon {\n  width: 26px;\n  height: 26px;\n  padding: 4px; }\n  :host :host-context(.dx-theme-generic) ::ng-deep.dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item * {\n  color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXZpZ2F0aW9uLW1lbnUvQzpcXFVzZXJzXFxubWFuaGN1b25nXFxpby1tYW5hZ2VtZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGUtbmF2aWdhdGlvbi1tZW51XFxzaWRlLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXZpZ2F0aW9uLW1lbnUvQzpcXFVzZXJzXFxubWFuaGN1b25nXFxpby1tYW5hZ2VtZW50L3NyY1xcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osd0JBQXVCLEVBU3hCO0VBZEQ7SUFRSSxjQUFhO0lBQ2IsUUFBTyxFQUlSO0VBYkg7TUFXTSxvQkFBbUIsRUFDcEI7RUFJTDtFQUdNLGFBQVksRUFhYjtFQWhCTDtJQU1RLHdCQUF1QixFQUN4QjtFQVBQO0lBVVEsZUN4QmEsRUR5QmQ7RUFYUDtJQWNRLDBCQUF5QyxFQUMxQztFQWZQO0VBcUJNLFdBQVU7RUFDVixZQUFXLEVBQ1o7RUF2Qkw7RUEyQkksZ0JBQWUsRUFDaEI7RUE1Qkg7RUErQkksWUFBVztFQUNYLFdBQVUsRUFDWDtFQWpDSDtFQW9DSSxpQ0NwRHVCLEVEd0R4QjtFQXhDSDtJQXNDTSxnQkFBZSxFQUNoQjtFQXZDTDtFQTJDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7RUFHSDtFQUVJLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWSxFQUNiO0VBTEg7RUFRSSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLW5hdmlnYXRpb24tbWVudS9zaWRlLW5hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5hZGRpdGlvbmFsLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIC5keC10cmVldmlldyB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IHtcclxuICAuZHgtdHJlZXZpZXctbm9kZS1jb250YWluZXIge1xyXG4gICAgLmR4LXRyZWV2aWV3LW5vZGUge1xyXG4gICAgICBwYWRkaW5nOiAwIDA7XHJcblxyXG4gICAgICAmLmR4LXN0YXRlLXNlbGVjdGVkOm5vdCguZHgtc3RhdGUtZm9jdXNlZCk+IC5keC10cmVldmlldy1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5keC1zdGF0ZS1zZWxlY3RlZCA+IC5keC10cmVldmlldy1pdGVtICoge1xyXG4gICAgICAgIGNvbG9yOiAkYmFzZS1hY2NlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5keC1zdGF0ZS1mb2N1c2VkKT4uZHgtdHJlZXZpZXctaXRlbS5keC1zdGF0ZS1ob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmFzZS1iZywgNC4wMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5keC1ydGwge1xyXG4gICAgLmR4LXRyZWV2aWV3LXRvZ2dsZS1pdGVtLXZpc2liaWxpdHkge1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5keC10cmVldmlldy1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmR4LXRyZWV2aWV3LXRvZ2dsZS1pdGVtLXZpc2liaWxpdHkge1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmR4LXRyZWV2aWV3LW5vZGVbYXJpYS1sZXZlbD0nMSddIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYmFzZS1ib3JkZXItY29sb3I7XHJcbiAgICAuZHgtdHJlZXZpZXctaXRlbS1jb250ZW50IHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZHgtdHJlZXZpZXctbm9kZVthcmlhLWxldmVsPScyJ10gLmR4LXRyZWV2aWV3LWl0ZW0tY29udGVudCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzogMCAzOHB4O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOmhvc3QtY29udGV4dCguZHgtdGhlbWUtZ2VuZXJpYykgOjpuZy1kZWVwLmR4LXRyZWV2aWV3IHtcclxuICAuZHgtdHJlZXZpZXctaXRlbSAuZHgtaWNvbiB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcblxyXG4gIC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciAuZHgtdHJlZXZpZXctbm9kZS5keC1zdGF0ZS1zZWxlY3RlZC5keC1zdGF0ZS1mb2N1c2VkID4gLmR4LXRyZWV2aWV3LWl0ZW0gKiB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2UtYmc6ICMzNjM2NDA7XG4kYmFzZS10ZXh0LWNvbG9yOiAjZmZmO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjNTE1MTU5O1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjRkY1NzIyO1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideNavigationMenuComponent, SideNavigationMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return SideNavigationMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return SideNavigationMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ "./node_modules/devextreme-angular/ui/tree-view.js");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__);



var SideNavigationMenuComponent = /** @class */ (function () {
    function SideNavigationMenuComponent() {
        this.selectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._compactMode = false;
    }
    Object.defineProperty(SideNavigationMenuComponent.prototype, "selectedItem", {
        set: function (value) {
            if (this.menu.instance) {
                this.menu.instance.selectItem(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideNavigationMenuComponent.prototype, "compactMode", {
        get: function () {
            return this._compactMode;
        },
        set: function (val) {
            this._compactMode = val;
            if (val && this.menu.instance) {
                this.menu.instance.collapseAll();
            }
        },
        enumerable: true,
        configurable: true
    });
    SideNavigationMenuComponent.prototype.updateSelection = function (event) {
        var nodeClass = 'dx-treeview-node';
        var selectedClass = 'dx-state-selected';
        var leafNodeClass = 'dx-treeview-node-is-leaf';
        var element = event.element;
        var rootNodes = element.querySelectorAll("." + nodeClass + ":not(." + leafNodeClass);
        Array.from(rootNodes).forEach(function (node) {
            node.classList.remove(selectedClass);
        });
        var selectedNode = element.querySelector("." + nodeClass + "." + selectedClass);
        while (selectedNode && selectedNode.parentElement) {
            if (selectedNode.classList.contains(nodeClass)) {
                selectedNode.classList.add(selectedClass);
            }
            selectedNode = selectedNode.parentElement;
        }
    };
    SideNavigationMenuComponent.prototype.onItemClick = function (event) {
        this.selectedItemChanged.emit(event);
    };
    SideNavigationMenuComponent.prototype.onMenuInitialized = function (event) {
        event.component.option('deferRendering', false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewComponent"])
    ], SideNavigationMenuComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SideNavigationMenuComponent.prototype, "selectedItemChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SideNavigationMenuComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SideNavigationMenuComponent.prototype, "selectedItem", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SideNavigationMenuComponent.prototype, "compactMode", null);
    SideNavigationMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation-menu',
            template: __webpack_require__(/*! ./side-navigation-menu.component.html */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation-menu.component.scss */ "./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavigationMenuComponent);
    return SideNavigationMenuComponent;
}());

var SideNavigationMenuModule = /** @class */ (function () {
    function SideNavigationMenuModule() {
    }
    SideNavigationMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_2__["DxTreeViewModule"]],
            declarations: [SideNavigationMenuComponent],
            exports: [SideNavigationMenuComponent]
        })
    ], SideNavigationMenuModule);
    return SideNavigationMenuModule;
}());



/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-panel\">\r\n    <div class=\"user-info\">\r\n        <div class=\"image-container\">\r\n            <div class=\"user-image\"></div>\r\n        </div>\r\n        <div class=\"user-name\">Sandra Johnson</div>\r\n    </div>\r\n    <dx-context-menu\r\n        *ngIf=\"menuMode === 'context'\"\r\n        cssClass=\"user-menu\"\r\n        [items]=\"menuItems\"\r\n        target=\".user-button\"\r\n        showEvent=\"dxclick\"\r\n        width=\"170px\"\r\n        [position]=\"{ my: 'top center', at: 'bottom center' }\">\r\n    </dx-context-menu>\r\n    <dx-list\r\n        *ngIf=\"menuMode === 'list'\"\r\n        class=\"dx-toolbar-menu-action\"\r\n        [items]=\"menuItems\">\r\n    </dx-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  overflow: hidden;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  margin: 0 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15); }\n\n.user-image {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png\") no-repeat #fff;\n  background-size: cover; }\n\n.user-info {\n  display: flex;\n  align-items: center; }\n\n::ng-deep .dx-toolbar-menu-section .user-info {\n  padding: 10px 6px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.user-name {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 0 9px; }\n\n::ng-deep .user-panel .dx-rtl .dx-list-item .dx-icon {\n  margin-right: 0;\n  margin-left: 16px; }\n\n::ng-deep .user-panel .dx-list-item .dx-icon {\n  vertical-align: middle;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 16px; }\n\n::ng-deep .dx-context-menu.dx-rtl.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-left: 16px; }\n\n::ng-deep .dx-context-menu.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-right: 16px; }\n\n::ng-deep .dx-context-menu .dx-menu-item .dx-menu-item-content {\n  padding: 3px 15px 4px; }\n\n::ng-deep .dx-theme-generic .dx-menu-item-content .dx-menu-item-text {\n  padding-left: 4px;\n  padding-right: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1wYW5lbC9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdXNlci1wYW5lbFxcdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1wYW5lbC9DOlxcVXNlcnNcXG5tYW5oY3VvbmdcXGlvLW1hbmFnZW1lbnQvc3JjXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFlBQVc7RUFDWCxjQUFhO0VBQ2IscUNBQW9DO0VBQ3BDLDBDQUFzQyxFQUN2Qzs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUhBQWdIO0VBQ2hILHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFFSSxrQkFBaUI7RUFDakIsNENBQTJDLEVBQzVDOztBQUdIO0VBQ0UsZ0JBQWU7RUFDZiwyQkNoQ21DO0VEaUNuQyxjQUFhLEVBQ2Q7O0FBRUQ7RUFJUSxnQkFBZTtFQUNmLGtCQUFpQixFQUNsQjs7QUFOUDtFQVdNLHVCQUFzQjtFQUN0QiwyQkFBMEI7RUFDMUIsbUJBQWtCLEVBQ25COztBQUlMO0VBTVksa0JBQWlCLEVBQ2xCOztBQVBYO0VBZ0JVLG1CQUFrQixFQUNuQjs7QUFqQlQ7RUF1Qk0sc0JBQXFCLEVBQ3RCOztBQUlMO0VBR00sa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBtYXJnaW46IDAgNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG5cclxuLnVzZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2pzLmRldmV4cHJlc3MuY29tL0RlbW9zL1dpZGdldHNHYWxsZXJ5L0pTRGVtb3MvaW1hZ2VzL2VtcGxveWVlcy8wNi5wbmdcIikgbm8tcmVwZWF0ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LXRvb2xiYXItbWVudS1zZWN0aW9uIHtcclxuICAudXNlci1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcclxuICBtYXJnaW46IDAgOXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnVzZXItcGFuZWwge1xyXG4gIC5keC1ydGwge1xyXG4gICAgLmR4LWxpc3QtaXRlbSB7XHJcbiAgICAgIC5keC1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmR4LWxpc3QtaXRlbSB7XHJcbiAgICAuZHgtaWNvbiB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LWNvbnRleHQtbWVudSB7XHJcbiAgJi5keC1ydGwge1xyXG4gICAgJi51c2VyLW1lbnUge1xyXG4gICAgICAuZHgtc3VibWVudSB7XHJcbiAgICAgICAgLmR4LW1lbnUtaXRlbXMtY29udGFpbmVyIHtcclxuICAgICAgICAgIC5keC1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYudXNlci1tZW51IHtcclxuICAgIC5keC1zdWJtZW51IHtcclxuICAgICAgLmR4LW1lbnUtaXRlbXMtY29udGFpbmVyIHtcclxuICAgICAgICAuZHgtaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5keC1tZW51LWl0ZW0ge1xyXG4gICAgLmR4LW1lbnUtaXRlbS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogM3B4IDE1cHggNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC10aGVtZS1nZW5lcmljIHtcclxuICAuZHgtbWVudS1pdGVtLWNvbnRlbnQge1xyXG4gICAgLmR4LW1lbnUtaXRlbS10ZXh0IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuJGJhc2UtYWNjZW50OiAjRkY1NzIyO1xuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/user-panel/user-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return UserPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/list */ "./node_modules/devextreme-angular/ui/list.js");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/context-menu */ "./node_modules/devextreme-angular/ui/context-menu.js");
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_4__);





var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserPanelComponent.prototype, "menuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserPanelComponent.prototype, "menuMode", void 0);
    UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-panel',
            template: __webpack_require__(/*! ./user-panel.component.html */ "./src/app/shared/components/user-panel/user-panel.component.html"),
            styles: [__webpack_require__(/*! ./user-panel.component.scss */ "./src/app/shared/components/user-panel/user-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserPanelComponent);
    return UserPanelComponent;
}());

var UserPanelModule = /** @class */ (function () {
    function UserPanelModule() {
    }
    UserPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__["DxListModule"],
                devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_4__["DxContextMenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [UserPanelComponent],
            exports: [UserPanelComponent]
        })
    ], UserPanelModule);
    return UserPanelModule;
}());



/***/ }),

/***/ "./src/app/shared/services/app-info.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-info.service.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return AppInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppInfoService = /** @class */ (function () {
    function AppInfoService() {
    }
    Object.defineProperty(AppInfoService.prototype, "title", {
        get: function () {
            return 'IO Management';
        },
        enumerable: true,
        configurable: true
    });
    AppInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppInfoService);
    return AppInfoService;
}());



/***/ }),

/***/ "./src/app/shared/services/area.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/area.service.ts ***!
  \*************************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _decryptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decryptor.service */ "./src/app/shared/services/decryptor.service.ts");




var href = 'http://toddenergy.australiasoutheast.cloudapp.azure.com:8080/areas';
var AreaService = /** @class */ (function () {
    function AreaService(http) {
        this.http = http;
        this.getHttpOptions = function (data) {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'guid': '289d10cb-639b-43f3-9fc1-b232e5ae3371',
                    'hmac': _decryptor_service__WEBPACK_IMPORTED_MODULE_3__["getHmacString"](null)
                })
            };
        };
    }
    AreaService.prototype.getAreas = function () {
        var requestUrl = href + "?orderby=Name%20asc";
        return this.http.get(requestUrl, this.getHttpOptions(null));
    };
    AreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService, AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = true;
    }
    AuthService.prototype.logIn = function (login, passord) {
        this.loggedIn = true;
        this.router.navigate(['/']);
    };
    AuthService.prototype.logOut = function () {
        this.loggedIn = false;
        this.router.navigate(['/login-form']);
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());

var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route) {
        var isLoggedIn = this.authService.isLoggedIn;
        var isLoginForm = route.routeConfig.path === 'login-form';
        if (isLoggedIn && isLoginForm) {
            this.router.navigate(['/']);
            return false;
        }
        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }
        return isLoggedIn || isLoginForm;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], AuthService])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/decryptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/decryptor.service.ts ***!
  \******************************************************/
/*! exports provided: getHmacString, DecryptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHmacString", function() { return getHmacString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecryptorService", function() { return DecryptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "./src/app/configuration.ts");




var getUuidv4 = function () {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};
var getHmacString = function (data) {
    var APP_ID = _configuration__WEBPACK_IMPORTED_MODULE_3__["APIauthentication"].APP_ID;
    var SECRET_KEY = _configuration__WEBPACK_IMPORTED_MODULE_3__["APIauthentication"].SECRET_KEY;
    var bodyEncrypt = '';
    var bodyContent = '';
    if (data) {
        bodyContent = JSON.stringify(data);
        var cutBodyContent = bodyContent.substring(0, 128);
        var wordArray = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(cutBodyContent);
        bodyEncrypt = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64.stringify(wordArray);
    }
    var unixTime = Math.round(new Date().getTime() / 1000.0);
    var uuid = getUuidv4();
    var encrypt = APP_ID + bodyEncrypt + uuid + unixTime;
    var signature = crypto_js__WEBPACK_IMPORTED_MODULE_2__["HmacSHA256"](encrypt, SECRET_KEY);
    var base64sign = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64.stringify(signature);
    var author = APP_ID + ':' + base64sign + ':' + uuid + ':' + unixTime;
    return 'sign:' + author;
};
var DecryptorService = /** @class */ (function () {
    function DecryptorService() {
    }
    DecryptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DecryptorService);
    return DecryptorService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AppInfoService, AuthService, AuthGuardService, ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info.service */ "./src/app/shared/services/app-info.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return _app_info_service__WEBPACK_IMPORTED_MODULE_0__["AppInfoService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]; });

/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen.service */ "./src/app/shared/services/screen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return _screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]; });






/***/ }),

/***/ "./src/app/shared/services/screen.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var ScreenService = /** @class */ (function () {
    function ScreenService(breakpointObserver) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large])
            .subscribe(function () { return _this.changed.next(); });
    }
    ScreenService.prototype.isLargeScreen = function () {
        var isLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large);
        var isXLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge);
        return isLarge || isXLarge;
    };
    Object.defineProperty(ScreenService.prototype, "sizes", {
        get: function () {
            return {
                'screen-x-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall),
                'screen-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small),
                'screen-medium': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium),
                'screen-large': this.isLargeScreen(),
            };
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScreenService.prototype, "changed", void 0);
    ScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], ScreenService);
    return ScreenService;
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

module.exports = __webpack_require__(/*! C:\Users\nmanhcuong\io-management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map