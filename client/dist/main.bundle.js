webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lobster+Two);", ""]);

// module
exports.push([module.i, ".col-4{\n  height:550px;\n  padding: 20px;\n  position: fixed;\n  overflow-y: auto;\n  background-color: rgba(85, 61, 103, .5);\n}\n.col-4::-webkit-scrollbar-track\n{\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  border-radius: 10px;\n}\n.col-4::-webkit-scrollbar\n{\n  width: 10px;\n}\n.col-4::-webkit-scrollbar-thumb\n{\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n  background-color: rgba(169, 169, 169, .7);\n}\n\n.col-8{\n  right: 0px;\n  position: fixed;\n  overflow-y: auto;\n  padding: 20px;\n  height: 550px;\n  background-color: rgba(47, 47, 162, .4);\n}\n.col-8::-webkit-scrollbar-track\n{\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  border-radius: 10px;\n}\n.col-8::-webkit-scrollbar\n{\n  width: 10px;\n}\n.col-8::-webkit-scrollbar-thumb\n{\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n  background-color: rgba(255, 203, 154, .7);\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row d-flex flex-row\">\n    <div class=\"col-4 col-md-4 col-sm-4\">\n      <flash-messages></flash-messages>\n      <app-stdent-reg></app-stdent-reg>\n    </div>\n    <div class=\"col-8 col-md-8 col-sm-8\">\n      <div class=\"container\">\n        <flash-messages></flash-messages>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stdent_reg_stdent_reg_component__ = __webpack_require__("./src/stdent-reg/stdent-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stdent_list_stdent_list_component__ = __webpack_require__("./src/stdent-list/stdent-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_details_student_details_component__ = __webpack_require__("./src/student-details/student-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_student_details_edit_student_details_component__ = __webpack_require__("./src/edit-student-details/edit-student-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'student-list',
        component: __WEBPACK_IMPORTED_MODULE_10__stdent_list_stdent_list_component__["a" /* StdentListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'student-details',
        component: __WEBPACK_IMPORTED_MODULE_11__student_details_student_details_component__["a" /* StudentDetailsComponent */],
        pathMatch: 'full'
    },
    {
        path: 'edit-student-details',
        component: __WEBPACK_IMPORTED_MODULE_12__edit_student_details_edit_student_details_component__["a" /* EditStudentDetailsComponent */],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'student-list',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'student-list'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__stdent_reg_stdent_reg_component__["a" /* StdentRegComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stdent_list_stdent_list_component__["a" /* StdentListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__student_details_student_details_component__["a" /* StudentDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__edit_student_details_edit_student_details_component__["a" /* EditStudentDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__student_service__["a" /* StudentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.domain = 'http://localhost:4070/api/student/';
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.domain).map(function (res) { return res.json(); });
    };
    StudentService.prototype.postStudent = function (student) {
        return this.http.post(this.domain, student).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getStudent = function (id) {
        return this.http.get(this.domain + id).map(function (res) { return res.json(); });
    };
    StudentService.prototype.deleteStudent = function (id) {
        return this.http.delete(this.domain + id).map(function (res) { return res.json(); });
    };
    StudentService.prototype.editStudent = function (id, student) {
        return this.http.put(this.domain + id, student).map(function (res) { return res.json(); });
    };
    StudentService.prototype.selectedStudent = function (stu) {
        this.id = stu;
    };
    return StudentService;
}());
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "./src/edit-student-details/edit-student-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #jji{\n  position: absolute;\n  height: 203px;\n  width: 220px;\n  top: 10px;\n  padding: 5px;\n  font-size: 25px;\n  text-align: center;\n  cursor: pointer;\n  color: #fff;\n  background: rgb(169, 169, 169);\n}\n\n#jji:hover{\n  background: rgba(169, 169, 169, 0.5);\n}\n#jji > span:first-child{\n  margin-top: 25px;\n  margin-bottom: 10px;\n  display: block;\n}\n#jji > span:first-child > fa{\n  color: #fff;\n  font-size: 50px;\n}\n#jji > span:nth-child(2){\n  color: #fff;\n  display: block;\n} */\n#image{\n  position: absolute;\n  height: 203px;\n  width: 220px;\n  top: 10px;\n  padding: 5px;\n  border: 2px solid rgb(169, 169, 169);\n}\n\n#imuh{\n  position:absolute;\n  left: 50px;\n  top: 50px;\n  display: none;\n}\n\n.first{\n  margin-top: 220px;\n}\n\n.title{\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: larger;\n  margin-bottom: 20px;\n  color: #fff;\n}\n\n.bckl{\n  margin-left: 530px;\n}\n.btn{\n  cursor: pointer;\n}\nlabel{\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/edit-student-details/edit-student-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row flex-md-row flex-sm-row\">\n  <span class=\"title\">\n    <strong>Edit Student Details</strong>\n  </span>\n\n  <button class=\"btn btn-lg btn-info bckl\" (click)=\"letgoBack()\">Back</button>\n</div>\n<div *ngIf=\"student\">\n  <form [formGroup]=\"myForm\"  (submit)=\"editStudent()\">\n\n    <div class=\"form-group input\">\n      <div class=\"input-group\">\n        <img [src]=\"logom\" alt=\"\" id=\"image\" style=\"cursor:pointer;\"/>\n      </div>\n    </div>\n\n    <div class=\"form-group input first\">\n      <label>Firstname</label>\n      <input id=\"input\" class=\"form-control\" type=\"text\" name=\"firstname\" [ngModel]=\"student.firstname\" formControlName=\"firstname\" />\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Lastname</label>\n      <input class=\"form-control\" type=\"text\" name=\"lastname\" [ngModel]=\"student.lastname\" formControlName=\"lastname\" />\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Age</label>\n      <input class=\"form-control\" type=\"Number\" name=\"age\" [ngModel]=\"student.age\" formControlName=\"age\" />\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Gender</label>\n      <select class=\"form-control\" formControlName=\"gender\" [ngModel]=\"student.gender\"  placeholder=\"Gender\" >\n        <option>Male</option>\n        <option>Female</option>\n      </select>\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Class</label>\n      <select class=\"form-control\" formControlName=\"studentClass\" [ngModel]=\"student.studentClass\" placeholder=\"class\" >\n        <option>JSS 1</option>\n        <option>JSS 2</option>\n        <option>JSS 3</option>\n        <option>SSS 1</option>\n        <option>SSS 2</option>\n        <option>SSS 3</option>\n      </select>\n    </div>\n\n    <input type=\"submit\" class=\"btn btn-primary\"  value=\"Update Student Info\" />\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/edit-student-details/edit-student-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStudentDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditStudentDetailsComponent = (function () {
    function EditStudentDetailsComponent(flashMessageService, router, studentService, formBuilder, el, location) {
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.studentService = studentService;
        this.formBuilder = formBuilder;
        this.el = el;
        this.location = location;
        this.createsForm();
    }
    EditStudentDetailsComponent.prototype.ngOnInit = function () {
        this.getStudentDetail();
    };
    EditStudentDetailsComponent.prototype.getStudentDetail = function () {
        var _this = this;
        this.id = this.studentService.id;
        console.log(this.studentService.id);
        this.studentService.getStudent(this.id).subscribe(function (data) {
            _this.student = data.student;
            _this.studentImage = data.student.student_pix;
            _this.logom = '../assets/images/' + _this.studentImage;
            console.log(_this.logom);
        });
    };
    EditStudentDetailsComponent.prototype.createsForm = function () {
        this.myForm = this.formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            age: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            studentClass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    };
    EditStudentDetailsComponent.prototype.editStudent = function () {
        var _this = this;
        var studentData = {
            "firstname": this.myForm.get('firstname').value,
            "lastname": this.myForm.get('lastname').value,
            "age": this.myForm.get('age').value,
            "gender": this.myForm.get('gender').value,
            "studentClass": this.myForm.get('studentClass').value
        };
        this.studentService.editStudent(this.id, studentData).subscribe(function (data) {
            console.log(_this.id);
            console.log(studentData);
            if (!data.success) {
                _this.flashMessageService.show("Failed to update student information", { cssClass: "alert-danger", timeout: 5000 });
                console.log({
                    success: false,
                    message: "failed to update student information"
                });
            }
            else {
                console.log({
                    success: true,
                    message: "student information saved successfully..."
                });
                setTimeout(function () {
                    _this.router.navigate(['/student-list']);
                }, 500);
            }
        });
    };
    EditStudentDetailsComponent.prototype.letgoBack = function () {
        this.location.back();
    };
    return EditStudentDetailsComponent;
}());
EditStudentDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-student-details',
        template: __webpack_require__("./src/edit-student-details/edit-student-details.component.html"),
        styles: [__webpack_require__("./src/edit-student-details/edit-student-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _f || Object])
], EditStudentDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-student-details.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/stdent-list/stdent-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Slab);", ""]);

// module
exports.push([module.i, ".rounded-circle{\n  width: 50px;\n  height: 50px;\n  border: 2px solid rgba(0, 0, 255, 0.3);\n}\n.cont{\n  margin-left: 20px;\n}\n.title{\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: larger;\n  margin-bottom: 20px;\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/stdent-list/stdent-list.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"title\">\n  <strong>List of Students</strong>\n</span>\n<br>\n<br>\n<div class=\"list-group\" *ngFor=\"let student of students\">\n  <a class=\"list-group-item list-group-item-action d-flex flex-row\" (click)=\"onSelect(student)\" routerLink=\"/student-details\">\n    <img src=\"../assets/images/{{student.student_pix}}\" alt=\"...\" class=\"rounded-circle\">\n    <span class=\"cont\">\n      <strong>{{student.firstname}} {{student.lastname}}</strong>\n    </span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/stdent-list/stdent-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StdentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StdentListComponent = (function () {
    function StdentListComponent(studentService) {
        this.studentService = studentService;
        this.loadStudents();
    }
    StdentListComponent.prototype.ngOnInit = function () {
        this.loadStudents();
    };
    StdentListComponent.prototype.loadStudents = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (data) {
            _this.students = data.student;
            console.log(_this.students);
        });
    };
    StdentListComponent.prototype.onSelect = function (student) {
        this.id = student._id;
        this.studentService.selectedStudent(this.id);
        console.log(this.id);
    };
    return StdentListComponent;
}());
StdentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stdent-list',
        template: __webpack_require__("./src/stdent-list/stdent-list.component.html"),
        styles: [__webpack_require__("./src/stdent-list/stdent-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_student_service__["a" /* StudentService */]) === "function" && _a || Object])
], StdentListComponent);

var _a;
//# sourceMappingURL=stdent-list.component.js.map

/***/ }),

/***/ "./src/stdent-reg/stdent-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  color: #fff;\n}\n#jji{\n  position: absolute;\n  height: 203px;\n  width: 220px;\n  top: 10px;\n  padding: 5px;\n  font-size: 25px;\n  text-align: center;\n  cursor: pointer;\n  color: #fff;\n  background: rgb(169, 169, 169);\n}\n\n#jji:hover{\n  background: rgba(169, 169, 169, 0.5);\n}\n.title{\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: larger;\n  margin-bottom: 20px;\n}\n#jji > span:first-child{\n  margin-top: 25px;\n  margin-bottom: 10px;\n  display: block;\n}\n#jji > span:first-child > fa{\n  color: #fff;\n  font-size: 50px;\n}\n#jji > span:nth-child(2){\n  color: #fff;\n  display: block;\n}\n#img{\n  position: absolute;\n  height: 203px;\n  width: 220px;\n  top: 10px;\n  padding: 5px;\n  border: 2px solid rgb(169, 169, 169);\n}\n\n#imh{\n  position:absolute;\n  left: 50px;\n  top: 50px;\n  display: none;\n}\n\n.first{\n  margin-top: 220px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/stdent-reg/stdent-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex flex-row flex-md-row flex-sm-row\">\n    <span class=\"title\">\n      <strong>Student Registration</strong>\n    </span>\n  </div>\n\n  <form [formGroup]=\"myForm\"  (submit)=\"registerStudent()\">\n    <div class=\"form-group input\">\n      <div class=\"input-group\">\n        <input type=\"file\" id=\"imh\" (change)=\"fileChange($event)\" />\n        <img [src]=\"logo\" alt=\"\" id=\"img\" style=\"cursor:pointer;\"/>\n        <label id=\"jji\">\n          <span id=\"ilj\">\n            <fa name=\"user\" size=\"2x\"></fa>\n          </span>\n          <span id=\"ikj\" style=\"font-size: 17px;\">\n            Select a picture to upload\n          </span>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"form-group input first\">\n      <label>Firstname</label>\n      <input id=\"input\" class=\"form-control\" type=\"text\" name=\"firstname\" formControlName=\"firstname\" />\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Lastname</label>\n      <input class=\"form-control\" type=\"text\" name=\"lastname\" formControlName=\"lastname\" />\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Age</label>\n      <input class=\"form-control\" type=\"Number\" name=\"age\" formControlName=\"age\" />\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Gender</label>\n      <select class=\"form-control\" formControlName=\"gender\" placeholder=\"Gender\" >\n        <option>Male</option>\n        <option>Female</option>\n      </select>\n    </div>\n\n    <div class=\"form-group input\">\n      <label>Class</label>\n      <select class=\"form-control\" formControlName=\"studentClass\" placeholder=\"class\" >\n        <option>JSS 1</option>\n        <option>JSS 2</option>\n        <option>JSS 3</option>\n        <option>SSS 1</option>\n        <option>SSS 2</option>\n        <option>SSS 3</option>\n      </select>\n    </div>\n\n    <input type=\"submit\" class=\"btn btn-primary\"  value=\"Register Student\" />\n\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/stdent-reg/stdent-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StdentRegComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StdentRegComponent = (function () {
    function StdentRegComponent(flashMessagesService, router, formBuilder, el, studentService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.el = el;
        this.studentService = studentService;
        this.createForm();
    }
    StdentRegComponent.prototype.ngOnInit = function () {
        this.start();
        this.edit();
    };
    StdentRegComponent.prototype.start = function () {
        document.getElementById("jji").addEventListener("click", function () {
            document.getElementById("imh").click();
        });
    };
    StdentRegComponent.prototype.edit = function () {
        document.getElementById("img").addEventListener("click", function () {
            document.getElementById("jji").click();
        });
    };
    StdentRegComponent.prototype.fileChange = function (input) {
        var _this = this;
        this.logo = input.target.files[0];
        console.log(this.logo);
        this.name = this.logo.name;
        console.log(this.name);
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.logo = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
        document.getElementById("jji").style.display = "none";
    };
    StdentRegComponent.prototype.createForm = function () {
        this.myForm = this.formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            age: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            studentClass: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            student_pix: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    StdentRegComponent.prototype.registerStudent = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#imh');
        var fileCount = inputEl.files.length;
        this.formData = new FormData();
        if (fileCount > 0) {
            this.formData.append('firstname', this.myForm.get('firstname').value);
            this.formData.append('lastname', this.myForm.get('lastname').value);
            this.formData.append('age', this.myForm.get('age').value);
            this.formData.append('gender', this.myForm.get('gender').value);
            this.formData.append('student_pix', inputEl.files.item(0));
            this.formData.append('studentClass', this.myForm.get('studentClass').value);
        }
        this.studentService.postStudent(this.formData).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService.show('Unable to register student', { cssClass: "alert-danger", timeout: 5000 });
                console.log("unable to save student record");
            }
            else {
                console.log({
                    success: true,
                    message: "student information saved successfully..."
                });
                setTimeout(function () {
                    window.location.reload();
                }, 500);
            }
        });
    };
    return StdentRegComponent;
}());
StdentRegComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stdent-reg',
        template: __webpack_require__("./src/stdent-reg/stdent-reg.component.html"),
        styles: [__webpack_require__("./src/stdent-reg/stdent-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__app_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_student_service__["a" /* StudentService */]) === "function" && _e || Object])
], StdentRegComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=stdent-reg.component.js.map

/***/ }),

/***/ "./src/student-details/student-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lobster+Two);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Slab);", ""]);

// module
exports.push([module.i, "\n.image{\n  width: 150px;\n  height: 150px;\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\nimg{\n  width: 150px;\n  height:150px;\n}\n.action{\n  clear: both;\n}\n.btn{\n  cursor: pointer;\n}\n.title{\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: larger;\n  margin-bottom: 20px;\n  color: #fff;\n}\nspan{\n  color: #fff;\n}\n\n#jj{\n  position: absolute;\n  height: 203px;\n  width: 220px;\n  top: 10px;\n  padding: 5px;\n  font-size: 25px;\n  text-align: center;\n  cursor: pointer;\n  color: #fff;\n  background: rgb(169, 169, 169);\n}\n\n#jj:hover{\n  background: rgba(169, 169, 169, 0.5);\n}\n.title{\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: larger;\n  margin-bottom: 20px;\n}\n#jj > span:first-child{\n  margin-top: 25px;\n  margin-bottom: 10px;\n  display: block;\n}\n#jj > span:first-child > fa{\n  color: #fff;\n  font-size: 50px;\n}\n#jj > span:nth-child(2){\n  color: #fff;\n  display: block;\n}\n#img{\n  position: absolute;\n  height: 203px;\n  width: 220px;\n  top: 10px;\n  padding: 5px;\n  border: 2px solid rgb(169, 169, 169);\n}\n\n#im{\n  position:absolute;\n  left: 50px;\n  top: 50px;\n  display: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/student-details/student-details.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"title\">\n  <strong>Student Details</strong>\n</span>\n<br>\n<br>\n<div *ngIf=\"student\">\n  <span class=\"image\">\n    <img src=\"../assets/images/{{student.student_pix}}\" alt=\"student picture\"/>\n  </span>\n\n  <span>\n    <strong>\n      Firstname: {{student.firstname}}\n    </strong>\n  </span>\n  <br>\n  <span>\n    <strong>\n      Lastname: {{student.lastname}}\n    </strong>\n  </span>\n  <br>\n  <span>\n    <strong>\n      Age: {{student.age}}\n    </strong>\n  </span>\n  <br>\n  <span>\n    <strong>\n      Gender: {{student.gender}}\n    </strong>\n  </span>\n  <br>\n  <span>\n    <strong>\n      Class: {{student.studentClass}}\n    </strong>\n  </span>\n</div>\n\n<div class=\"action\">\n  <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">Back</button>\n  <button class=\"btn btn-lg btn-info\" routerLink=\"/edit-student-details\">Edit</button>\n  <button class=\"btn btn-lg btn-danger\" (click)=\"deleteStudent()\">Delete</button>\n</div>\n"

/***/ }),

/***/ "./src/student-details/student-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentDetailsComponent = (function () {
    function StudentDetailsComponent(flashMessageService, el, studentService, location, router) {
        this.flashMessageService = flashMessageService;
        this.el = el;
        this.studentService = studentService;
        this.location = location;
        this.router = router;
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        this.studentDetails();
    };
    StudentDetailsComponent.prototype.studentDetails = function () {
        var _this = this;
        this.id = this.studentService.id;
        console.log(this.id);
        this.studentService.getStudent(this.id).subscribe(function (data) {
            _this.student = data.student;
            console.log(_this.student);
        });
    };
    StudentDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    StudentDetailsComponent.prototype.deleteStudent = function () {
        var _this = this;
        this.id = this.studentService.id;
        console.log(this.id);
        this.studentService.deleteStudent(this.id).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessageService.show("Unable to delete student", { cssClass: "alert-danger", timeout: 5000 });
                console.log("unable to delete data");
            }
        });
        setTimeout(function () {
            _this.router.navigate(['/student-list']);
        }, 400);
    };
    return StudentDetailsComponent;
}());
StudentDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-details',
        template: __webpack_require__("./src/student-details/student-details.component.html"),
        styles: [__webpack_require__("./src/student-details/student-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object])
], StudentDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=student-details.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map