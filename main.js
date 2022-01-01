/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --low-priority: #18A558;\n  --medium-priority: #FAD02C;\n  --high-priority: #D01110;\n  --modal-window-color:#cfcfcf;\n  --checked-blue: #2196F3;\n  --background-color: white;\n  --navbar-color: #333;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color:black;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: black;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: var(--navbar-color);\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n  background-color: lightgray;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n  line-height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n  padding-top: 10px;\n}\n\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n.active-list{\n  background-color: red;\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n.reminders-header-count{\n  padding-top: 10px;\n  padding-left: 25px;\n  padding-bottom: 25px;\n  font-size: 14px;\n  vertical-align: top;\n}\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n\n}\n\n.reminders-empty-view{\n  width: 100%;\n  text-align: center;\n  height: 80vh;\n  line-height: 80vh;\n  font-size: 32px;\n  color: darkgray;\n\n}\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-details{\n  margin-top: 10px;\n  font-size: 12px;\n  max-width: 69px;\n  padding: 10px;\n  border-radius: 20px;\n  color: white;\n}\n\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 19px;\n  font-size: 22px;\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n\n\n\n.checkbox-checked {\n  background-color: var(--checked-blue);\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: lightgray;\n  box-sizing: border-box;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n\n\n/*** LISTS / REMINDERS MODALS ***/\n\n.modal-reminder-container, .modal-list-container, .modal-info-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n\n\n.modal-reminder {\n\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn, .modal-list-btn{\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: black;\n  font-size: 21px;\n  border-style: solid;\n  color: white;\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: black;\n  background-color: var(--modal-window-color);\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n  height: 50px;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: var(--low-priority);\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: var(--medium-priority);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: var(--high-priority);\n  color: white;\n\n}\n\n\n\n.low{\n  color: var(--low-priority);\n  border: 1px solid var(--low-priority);\n\n}\n\n.medium{\n  color: var(--medium-priority);\n  border: 1px solid var(--medium-priority);\n\n}\n\n.high{\n  color: var(--high-priority);\n  border: 1px solid var(--high-priority);\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.modal-list {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n.modal-list-title{\npadding-bottom: 20px;\n\n}\n.list-container:hover img {\n  display: block;\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-close{\nfont-size: 28px;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\n.modal-info {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 250px;\n\n}\n\n.hover:hover, button:hover, img:hover, .priority-container *:hover{\n  cursor: pointer;\n}\n.list-container:hover{\n  font-weight: 700;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,wBAAwB;EACxB,4BAA4B;EAC5B,uBAAuB;EACvB,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA,gBAAgB,yCAAyC;EACvD,YAAY;EACZ,UAAU,EAAE,YAAY;AAC1B;;AAEA,yBAAyB,4BAA4B;EACnD,WAAW;AACb;;AAEA,0BAA0B,mBAAmB;EAC3C,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,SAAS;EACT,0DAA0D;;AAE5D;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,YAAY;EACZ,qCAAqC;;AAEvC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;;AAEjB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA,wBAAwB;;AAExB;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;;AAE7B;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;;;;;AAMA,iCAAiC;;AAEjC;EACE,UAAU;EACV,uBAAuB;;AAEzB;AACA;EACE,qBAAqB;AACvB;;AAEA,2BAA2B;AAC3B;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;;AAEb;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;;AAEnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,eAAe;;AAEjB;;AAEA,uBAAuB;;AAEvB;;EAEE,aAAa;AACf;;AAEA,iBAAiB;;AAEjB;EACE,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;;AAEnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;;AAEjB;;AAEA,wCAAwC;AACxC;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,QAAQ;AACV;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;;;;AAKA;EACE,qCAAqC;EACrC,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;;AAEf;;;;AAIA,4CAA4C;;AAE5C;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;;;AAIA,iCAAiC;;AAEjC;EACE,aAAa;EACb,eAAe;EACf,OAAO;EACP,MAAM;EACN,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,oCAAoC;EACpC,0BAA0B;EAC1B,kCAAkC;EAClC,cAAc;EACd,2BAA2B;EAC3B,mCAAmC;AACrC;;;;AAIA;;EAEE,2CAA2C;EAC3C,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,2BAA2B;EAC3B,0BAA0B;EAC1B,2CAA2C;AAC7C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;AACA;EACE,wCAAwC;EACxC,YAAY;;AAEd;AACA;EACE,sCAAsC;EACtC,YAAY;;AAEd;;;;AAIA;EACE,0BAA0B;EAC1B,qCAAqC;;AAEvC;;AAEA;EACE,6BAA6B;EAC7B,wCAAwC;;AAE1C;;AAEA;EACE,2BAA2B;EAC3B,sCAAsC;;AAExC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2CAA2C;EAC3C,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;;AAEf;AACA;AACA,oBAAoB;;AAEpB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;AACA,eAAe;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,2CAA2C;EAC3C,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;;AAEf;;AAEA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB","sourcesContent":[":root{\n  --low-priority: #18A558;\n  --medium-priority: #FAD02C;\n  --high-priority: #D01110;\n  --modal-window-color:#cfcfcf;\n  --checked-blue: #2196F3;\n  --background-color: white;\n  --navbar-color: #333;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color:black;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: black;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: var(--navbar-color);\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n  background-color: lightgray;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n  line-height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n  padding-top: 10px;\n}\n\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n.active-list{\n  background-color: red;\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n.reminders-header-count{\n  padding-top: 10px;\n  padding-left: 25px;\n  padding-bottom: 25px;\n  font-size: 14px;\n  vertical-align: top;\n}\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n\n}\n\n.reminders-empty-view{\n  width: 100%;\n  text-align: center;\n  height: 80vh;\n  line-height: 80vh;\n  font-size: 32px;\n  color: darkgray;\n\n}\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-details{\n  margin-top: 10px;\n  font-size: 12px;\n  max-width: 69px;\n  padding: 10px;\n  border-radius: 20px;\n  color: white;\n}\n\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 19px;\n  font-size: 22px;\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n\n\n\n.checkbox-checked {\n  background-color: var(--checked-blue);\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: lightgray;\n  box-sizing: border-box;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n\n\n/*** LISTS / REMINDERS MODALS ***/\n\n.modal-reminder-container, .modal-list-container, .modal-info-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n\n\n.modal-reminder {\n\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn, .modal-list-btn{\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: black;\n  font-size: 21px;\n  border-style: solid;\n  color: white;\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: black;\n  background-color: var(--modal-window-color);\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n  height: 50px;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: var(--low-priority);\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: var(--medium-priority);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: var(--high-priority);\n  color: white;\n\n}\n\n\n\n.low{\n  color: var(--low-priority);\n  border: 1px solid var(--low-priority);\n\n}\n\n.medium{\n  color: var(--medium-priority);\n  border: 1px solid var(--medium-priority);\n\n}\n\n.high{\n  color: var(--high-priority);\n  border: 1px solid var(--high-priority);\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.modal-list {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n.modal-list-title{\npadding-bottom: 20px;\n\n}\n.list-container:hover img {\n  display: block;\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-close{\nfont-size: 28px;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\n.modal-info {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 250px;\n\n}\n\n.hover:hover, button:hover, img:hover, .priority-container *:hover{\n  cursor: pointer;\n}\n.list-container:hover{\n  font-weight: 700;\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allLists": () => (/* binding */ allLists)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");





let allLists = [];  // main application object: lists array, containing list information and reminders


// if we do not have localstorage yet or is not available, setup default Reminders page
if (!localStorage.getItem('reminders')) {
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)("My New Reminders List");
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('This is my reminders', '2025-12-31', 'low');
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('You can see the date that the reminder is due', '2025-12-31', 'medium');
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('And the priority it has been set in', '2025-12-31', 'high');
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('You can also create, update and remove any Reminder or List', '2025-12-31', 'low');
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)("Groceries");
}else{
    allLists = JSON.parse(window.localStorage.getItem('reminders'));
    _ui__WEBPACK_IMPORTED_MODULE_2__.lists.show();
    _ui__WEBPACK_IMPORTED_MODULE_2__.lists.showFirst();
}



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "createReminder": () => (/* binding */ createReminder),
/* harmony export */   "activeList": () => (/* binding */ activeList),
/* harmony export */   "removeReminder": () => (/* binding */ removeReminder),
/* harmony export */   "updateReminder": () => (/* binding */ updateReminder),
/* harmony export */   "checkReminder": () => (/* binding */ checkReminder),
/* harmony export */   "removeList": () => (/* binding */ removeList),
/* harmony export */   "updateList": () => (/* binding */ updateList),
/* harmony export */   "storeData": () => (/* binding */ storeData),
/* harmony export */   "getPriorityColor": () => (/* binding */ getPriorityColor)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



//variable initialization, to get styles variables
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const createList = (title) => {

    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.push({
        title,
        reminders: [],
        active: _index__WEBPACK_IMPORTED_MODULE_0__.allLists.size > 1 ? false : true,
    });
    _ui__WEBPACK_IMPORTED_MODULE_1__.lists.show();
    _ui__WEBPACK_IMPORTED_MODULE_1__.reminders.show();
    storeData();

};

const updateList = (list, newTitle) => {

    const index = getListIndex(list);
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists[index].title = newTitle;

    _ui__WEBPACK_IMPORTED_MODULE_1__.lists.show();
    _ui__WEBPACK_IMPORTED_MODULE_1__.reminders.show();
    storeData();

}

const removeList = (index) => {
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.splice(index, 1);
    storeData();
    _ui__WEBPACK_IMPORTED_MODULE_1__.lists.showFirst();

};

const createReminder = (title, dueDate, priority) => {

    activeList().reminders.push({
        title,
        dueDate,
        priority,
        checked: false
    });
    _ui__WEBPACK_IMPORTED_MODULE_1__.reminders.show();
    storeData();

};


const updateReminder = (reminder, newTitle, newDate, newPriority) => {
    const index = getReminderIndex(reminder);


    activeList().reminders[index].title = newTitle;
    activeList().reminders[index].dueDate = newDate;
    activeList().reminders[index].priority = newPriority;

    _ui__WEBPACK_IMPORTED_MODULE_1__.reminders.show();
    storeData();

};

const removeReminder = (index) => {

    activeList().reminders.splice(index, 1);
    _ui__WEBPACK_IMPORTED_MODULE_1__.reminders.show();
    storeData();

};

const checkReminder = (index, reminder) => {

    if (reminder.checked) {
        activeList().reminders[index].checked = false;
    } else {
        activeList().reminders[index].checked = true;

    }
    _ui__WEBPACK_IMPORTED_MODULE_1__.reminders.show();
    storeData();


};

function getPriorityColor(priority) {

    switch (priority) {
        case 'low':
            return rootStyles.getPropertyValue('--low-priority');
        case 'medium':
            return rootStyles.getPropertyValue('--medium-priority');
        case 'high':
            return rootStyles.getPropertyValue('--high-priority');
        default:
            return 'black';
    }
}

function getReminderIndex(item) {
    return activeList().reminders.indexOf(item);
}

function getListIndex(list) {
    return _index__WEBPACK_IMPORTED_MODULE_0__.allLists.indexOf(list);
}

function storeData() {
    window.localStorage.setItem('reminders', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.allLists));
}


function activeList() {
    let activeListArray = _index__WEBPACK_IMPORTED_MODULE_0__.allLists.filter(list => list.active);
    return activeListArray[0];
}



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "reminders": () => (/* binding */ reminders)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _assets_edit_regular_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/edit-regular.svg */ "./src/assets/edit-regular.svg");
/* harmony import */ var _assets_trash_alt_regular_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/trash-alt-regular.svg */ "./src/assets/trash-alt-regular.svg");
/* harmony import */ var _assets_clipboard_check_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/clipboard-check-solid.svg */ "./src/assets/clipboard-check-solid.svg");
/* harmony import */ var _assets_list_ul_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/list-ul-solid.svg */ "./src/assets/list-ul-solid.svg");







const lists = (() => {

    // lists view variables initialization
    const listsContainer = document.querySelector('.lists-container');
    const listsFooterContainer = document.querySelector('.lists-footer');
    const addListIcon = document.querySelector('.new-list-icon');

    function show() {

        _clear();

        _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {

            const listContainer = document.createElement('div');
            listContainer.classList.add('list-container', 'hover');

            // main list info
            const list = document.createElement('div');
            list.className = 'list';
            list.innerText = item.title;
            list.addEventListener('click', _setActive);

            listContainer.appendChild(list);

            // options container - update and remove buttons
            const listOptionsContainer = document.createElement('div');
            listOptionsContainer.classList.add('list-options-container');

            const listEditBtn = document.createElement('img');
            listEditBtn.classList.add('list-options-edit');
            listEditBtn.classList.add('icon');
            listEditBtn.src = _assets_edit_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
            listEditBtn.addEventListener('click', listForm.edit);
            listEditBtn.list = item;

            const removeListBtn = document.createElement('img');
            removeListBtn.classList.add('list-options-remove');
            removeListBtn.classList.add('icon');
            removeListBtn.src = _assets_trash_alt_regular_svg__WEBPACK_IMPORTED_MODULE_3__;
            removeListBtn.addEventListener('click', () => {
                (0,_logic__WEBPACK_IMPORTED_MODULE_1__.removeList)(index);
            });

            listOptionsContainer.appendChild(listEditBtn);
            listOptionsContainer.appendChild(removeListBtn);

            listContainer.appendChild(listOptionsContainer);

            listsContainer.appendChild(listContainer);
        });

        _showFooter();
    }

    // remove dynamically generated lists view
    function _clear() {

        listsContainer.innerHTML = '';
    }

    function showFirst() {

        _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
            if (index == 0) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
        show();
        reminders.show();
    }

    function _setActive(list) {

        _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
            if (item.title === list.currentTarget.innerText) {
                item.active = true;
            } else {
                item.active = false;
            }
        });

        reminders.show();
    }

    function _showFooter() {

        listsFooterContainer.addEventListener('click', listForm.add);
        addListIcon.src = _assets_clipboard_check_solid_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    return {
        show,
        showFirst,
    }

})();

const listForm = (() => {

    // list Form variables initialization
    const listModalContainer = document.querySelector('.modal-list-container');
    const listFormTitle = document.querySelector('.modal-list-title');
    const listModalClose = document.getElementById('closeList');
    const listFormSubmitBtn = document.getElementById('add-list');

    listModalClose.addEventListener('click', _close);
    window.addEventListener('click', _close); // Make sure modal closes if user click away from it


    function add() {

        _show();
        listFormSubmitBtn.innerText = 'Add';
        listFormTitle.innerText = 'Add a new List';
        listFormSubmitBtn.removeEventListener('click', _submitUpdate);
        listFormSubmitBtn.addEventListener('click', _submitAdd);

    }

    function edit(e) {

        const list = e.currentTarget.list;

        _show();
        listform.title.value = list.title;
        listFormTitle.innerText = 'Update this List';
        listFormSubmitBtn.innerText = 'Update';
        listFormSubmitBtn.removeEventListener('click', _submitAdd);
        listFormSubmitBtn.addEventListener('click', _submitUpdate)
        listFormSubmitBtn.list = list;
    }

    function _submitAdd() {

        _hide();

        _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
            item.active = false;

        });

        event.preventDefault();
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)(listform.title.value);
        listform.reset();
    }

    function _submitUpdate(e) {
        _hide();
        const title = listform.title.value;
        event.preventDefault();
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.updateList)(e.currentTarget.list, title);
        listform.reset();
    }

    function _close(e) {

        if (e.target == listModalContainer || e.target == listModalClose) {
            listModalContainer.style.display = 'none';
            listform.reset();
        }
    }

    function _show() {

        listModalContainer.style.display = 'block';
    }

    function _hide() {

        listModalContainer.style.display = 'none';

    }

    return {
        add,
        edit,
    };

})();

const reminders = (() => {

    // reminders view variable initialization
    const activeListName = document.querySelector('.reminders-header-title');
    const reminderCount = document.querySelector('.reminders-header-count');
    const addReminderBtnIcon = document.querySelector('.new-reminder-icon');
    const remindersFooterContainer = document.querySelector('.reminders-footer');
    const remindersContainer = document.querySelector('.reminders-container');


    function show() {

        _clear();
        _showHeader();

        // reminders view is different if no reminders, so that user can easily create reminder
        if ((0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.length == 0) {

            _hideFooter();
            _showEmpty();

        } else {

            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.forEach((item, index) => {

                const reminderContainer = document.createElement('div');
                reminderContainer.classList.add('reminder-container');

                // info container, with reminder info (title, priority, due date)
                const reminderInfoContainer = document.createElement('div');
                reminderInfoContainer.classList.add('reminder-info-container');

                const checkbox = document.createElement('div');
                _toggleChecked(item, checkbox); //since the checkboxes are divs and not actual checkboxes, this will change the checkbox UI
                checkbox.classList.add('reminder-checkmark', 'hover');
                checkbox.addEventListener('click', _checkChange);
                checkbox.index = index;
                checkbox.reminder = item;

                const reminderLabel = document.createElement('div');
                reminderLabel.innerText = item.title;

                const reminderDetails = document.createElement('div');
                reminderDetails.innerText = item.dueDate;
                reminderDetails.classList.add('reminder-details');
                reminderDetails.style.backgroundColor = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getPriorityColor)(item.priority);

                reminderLabel.appendChild(checkbox);
                reminderLabel.appendChild(reminderDetails);

                reminderInfoContainer.appendChild(reminderLabel);

                // options container, with reminder actions (edit, remove)
                const reminderOptionsContainer = document.createElement('div');
                reminderOptionsContainer.classList.add('reminder-options-container');

                const editBtn = document.createElement('img');
                editBtn.classList.add('reminder-options-edit');
                editBtn.classList.add('icon');
                editBtn.src = _assets_edit_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
                editBtn.addEventListener('click', reminderForm.update);
                editBtn.reminder = item;

                const removeBtn = document.createElement('img');
                removeBtn.classList.add('reminder-options-remove');
                removeBtn.classList.add('icon');
                removeBtn.src = _assets_trash_alt_regular_svg__WEBPACK_IMPORTED_MODULE_3__;
                removeBtn.addEventListener('click', () => {
                    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.removeReminder)(index, item.title, item.dueDate, item.priority)
                });

                reminderOptionsContainer.appendChild(editBtn);
                reminderOptionsContainer.appendChild(removeBtn);

                reminderContainer.appendChild(reminderInfoContainer);
                reminderContainer.appendChild(reminderOptionsContainer);

                remindersContainer.appendChild(reminderContainer);
            })

            _showFooter();


        }

    }

    function _clear() {

        remindersContainer.innerHTML = '';

    }

    function _toggleChecked(reminder, checkbox) {

        if (reminder.checked) {
            checkbox.classList.add('checkbox-checked');
        } else {
            checkbox.classList.add('checkbox-unchecked');
        }
    }

    function _checkChange(e) {

        const index = e.currentTarget.index;
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.checkReminder)(index, e.currentTarget.reminder);
    }

    function _showHeader() {

        const count = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.length;
        activeListName.innerText = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().title;
        reminderCount.innerText = count > 1 ? `${count} Reminders` : `${count} Reminder`;

    }

    function _hideFooter() {

        if (remindersFooterContainer) {
            remindersFooterContainer.style.display = 'none';
        }
    }

    function _showFooter() {
        remindersFooterContainer.style.display = '';
        remindersFooterContainer.addEventListener('click', reminderForm.add);
        addReminderBtnIcon.src = _assets_list_ul_solid_svg__WEBPACK_IMPORTED_MODULE_5__;
    }

    function _showEmpty() {
        const emptyView = document.createElement('div');
        emptyView.classList.add('reminders-empty-view', 'hover');
        emptyView.innerText = "Add new Reminder";
        emptyView.addEventListener('click', reminderForm.add);
        remindersContainer.appendChild(emptyView);
    }

    return {
        show,
    }
})();

const reminderForm = (() => {

    // reminder form variable initialization
    const reminderModalContainer = document.querySelector('.modal-reminder-container');
    const reminderFormTitle = document.querySelector('.modal-reminder-title');
    const reminderModalClose = document.getElementById('closeReminder');
    const reminderFormDatepicker = document.querySelector('.reminder-datepicker')
    const reminderFormSubmitBtn = document.getElementById('add-reminder');

    reminderModalClose.addEventListener('click', _close);
    window.addEventListener('click', _close); // Make sure modal closes if user click away from it

    function add() {

        _show();
        reminderFormTitle.innerText = 'Add a new Reminder';
        reminderFormSubmitBtn.innerText = 'Add';
        reminderFormDatepicker.value = new Date().toISOString().slice(0, 10); //set today's date as default
        reminderFormSubmitBtn.removeEventListener('click', _submitUpdate);
        reminderFormSubmitBtn.addEventListener('click', _submitAdd);
    }

    function update(e) {

        const reminder = e.currentTarget.reminder;

        _show();
        reminderFormTitle.innerText = 'Update this Reminder';
        reminderFormSubmitBtn.innerText = 'Update';
        reminderform.title.value = reminder.title;
        reminderform.due.value = reminder.dueDate;
        reminderform.priority.value = reminder.priority;
        reminderFormSubmitBtn.removeEventListener('click', _submitAdd);
        reminderFormSubmitBtn.addEventListener('click', _submitUpdate);
        reminderFormSubmitBtn.reminder = reminder;
    }

    function _submitAdd() {

        _hide();
        event.preventDefault();
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
        reminderform.reset();

    }

    function _submitUpdate(e) {

        _hide();
        const title = reminderform.title.value;
        const dueDate = reminderform.due.value;
        const priority = reminderform.priority.value;

        event.preventDefault();
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.updateReminder)(e.currentTarget.reminder, title, dueDate, priority);
        reminderform.reset();
    }

    function _show() {

        reminderModalContainer.style.display = 'block';
    }

    function _hide() {

        reminderModalContainer.style.display = 'none';
    }

    function _close(e) {
        if (e.target == reminderModalContainer || e.target == reminderModalClose) {
            reminderModalContainer.style.display = 'none';
            reminderform.reset();
        }
    }

    return {
        add,
        update,
    }
})();

// Information modal: not called by other functions or imported, but still calls itselfs
const information = (() => {

    const infoModalContainer = document.querySelector('.modal-info-container');
    const infoModalClose = document.getElementById('closeInfo');
    const infoBtn = document.getElementById('info');

    infoBtn.addEventListener('click', _show);
    infoModalClose.addEventListener('click', _close);
    window.addEventListener('click', _close); // Make sure modal closes if user click away from it

    function _show() {
        infoModalContainer.style.display = 'block';

    }

    function _close(e) {

        if (e.target == infoModalContainer || e.target == infoModalClose) {
            infoModalContainer.style.display = 'none';
        }

    }
})();



/***/ }),

/***/ "./src/assets/clipboard-check-solid.svg":
/*!**********************************************!*\
  !*** ./src/assets/clipboard-check-solid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d197318ed98b2d7e9aee.svg";

/***/ }),

/***/ "./src/assets/edit-regular.svg":
/*!*************************************!*\
  !*** ./src/assets/edit-regular.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c9aad14d3d21daa587b.svg";

/***/ }),

/***/ "./src/assets/list-ul-solid.svg":
/*!**************************************!*\
  !*** ./src/assets/list-ul-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c7809ab5517fc1f3718.svg";

/***/ }),

/***/ "./src/assets/trash-alt-regular.svg":
/*!******************************************!*\
  !*** ./src/assets/trash-alt-regular.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96ae42b30b69a72a189a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDRCQUE0QiwrQkFBK0IsNkJBQTZCLGlDQUFpQyw0QkFBNEIsOEJBQThCLHlCQUF5QixHQUFHLG9CQUFvQiwyREFBMkQsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsNkNBQTZDLEdBQUcsOEJBQThCLHFDQUFxQyxHQUFHLFVBQVUsOENBQThDLGNBQWMsK0RBQStELEtBQUssd0NBQXdDLGtCQUFrQixpQkFBaUIsMENBQTBDLEtBQUssZUFBZSxpQkFBaUIsdUJBQXVCLHVCQUF1QixjQUFjLDBCQUEwQixzQkFBc0Isb0JBQW9CLEtBQUssNEJBQTRCLHNCQUFzQixHQUFHLG1EQUFtRCxrQkFBa0Isd0JBQXdCLGtCQUFrQixHQUFHLDZDQUE2QyxlQUFlLDRCQUE0QixHQUFHLHNCQUFzQixlQUFlLGlCQUFpQix3QkFBd0IsNEJBQTRCLHNCQUFzQixrQkFBa0IsdUJBQXVCLGdDQUFnQyxHQUFHLHFCQUFxQixrQkFBa0Isd0JBQXdCLGdCQUFnQixtQ0FBbUMsR0FBRyx1Q0FBdUMsZ0NBQWdDLEtBQUssV0FBVyxpQkFBaUIsc0JBQXNCLEdBQUcsNkJBQTZCLGtCQUFrQixzQkFBc0IsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQix3QkFBd0IsR0FBRyw4REFBOEQsZUFBZSw0QkFBNEIsS0FBSyxlQUFlLDBCQUEwQixHQUFHLDJEQUEyRCxrQkFBa0IsbUNBQW1DLGdCQUFnQixLQUFLLDBCQUEwQixzQkFBc0IsdUJBQXVCLHlCQUF5QixvQkFBb0Isd0JBQXdCLEdBQUcsc0NBQXNDLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0IsdUJBQXVCLHdCQUF3QixzQkFBc0IsS0FBSywwQkFBMEIsZ0JBQWdCLHVCQUF1QixpQkFBaUIsc0JBQXNCLG9CQUFvQixvQkFBb0IsS0FBSyxzREFBc0Qsb0JBQW9CLEdBQUcsNENBQTRDLHFCQUFxQixvQkFBb0Isb0JBQW9CLGtCQUFrQix3QkFBd0IsaUJBQWlCLEdBQUcsZ0NBQWdDLGtCQUFrQixtQ0FBbUMsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLEtBQUsseUJBQXlCLGtCQUFrQixtQ0FBbUMsdUJBQXVCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLEtBQUssMEVBQTBFLHVCQUF1QixlQUFlLGNBQWMsYUFBYSxHQUFHLHlEQUF5RCx1QkFBdUIsV0FBVyxZQUFZLGlCQUFpQixnQkFBZ0IsMkJBQTJCLHdCQUF3QixHQUFHLDZCQUE2QiwwQ0FBMEMsMkJBQTJCLDRCQUE0QixHQUFHLHlCQUF5QixnQ0FBZ0MsMkJBQTJCLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLEdBQUcsOEJBQThCLGtCQUFrQixLQUFLLDJGQUEyRixrQkFBa0IsYUFBYSxjQUFjLGVBQWUsdUJBQXVCLGdCQUFnQix1QkFBdUIsR0FBRyx1SEFBdUgsa0JBQWtCLG9CQUFvQixZQUFZLFdBQVcsa0JBQWtCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDRCQUE0Qix5Q0FBeUMsK0JBQStCLHVDQUF1QyxtQkFBbUIsZ0NBQWdDLHdDQUF3QyxHQUFHLHlCQUF5QixrREFBa0QsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLGtCQUFrQixHQUFHLDJCQUEyQix1QkFBdUIseUJBQXlCLEdBQUcseUNBQXlDLGlCQUFpQixpQkFBaUIsd0JBQXdCLDRCQUE0QixvQkFBb0Isd0JBQXdCLGlCQUFpQixHQUFHLHNCQUFzQixpQkFBaUIsaUJBQWlCLDZCQUE2QiwrQkFBK0IsOEJBQThCLGdDQUFnQywrQkFBK0IsZ0RBQWdELEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyx5QkFBeUIsa0JBQWtCLDRCQUE0QixjQUFjLHlCQUF5QixHQUFHLDhDQUE4QyxnQkFBZ0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsR0FBRywyQ0FBMkMsa0JBQWtCLEdBQUcseURBQXlELDBDQUEwQyxpQkFBaUIsR0FBRywwREFBMEQsNkNBQTZDLGlCQUFpQixLQUFLLHdEQUF3RCwyQ0FBMkMsaUJBQWlCLEtBQUssYUFBYSwrQkFBK0IsMENBQTBDLEtBQUssWUFBWSxrQ0FBa0MsNkNBQTZDLEtBQUssVUFBVSxnQ0FBZ0MsMkNBQTJDLEtBQUssbUNBQW1DLG1CQUFtQixHQUFHLGlCQUFpQixnREFBZ0QsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLGtCQUFrQixLQUFLLG9CQUFvQix1QkFBdUIsS0FBSyw2QkFBNkIsbUJBQW1CLEdBQUcsb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsR0FBRyxtQkFBbUIsZ0RBQWdELGlCQUFpQixrQkFBa0Isd0JBQXdCLHFCQUFxQixrQkFBa0IsS0FBSyx1RUFBdUUsb0JBQW9CLEdBQUcsd0JBQXdCLHFCQUFxQixHQUFHLGlCQUFpQixpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLG1CQUFtQixXQUFXLG9CQUFvQixPQUFPLG1CQUFtQixXQUFXLE1BQU0sbUJBQW1CLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxPQUFPLGFBQWEsT0FBTyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsUUFBUSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxTQUFTLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcs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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAtLWxvdy1wcmlvcml0eTogIzE4QTU1ODtcXG4gIC0tbWVkaXVtLXByaW9yaXR5OiAjRkFEMDJDO1xcbiAgLS1oaWdoLXByaW9yaXR5OiAjRDAxMTEwO1xcbiAgLS1tb2RhbC13aW5kb3ctY29sb3I6I2NmY2ZjZjtcXG4gIC0tY2hlY2tlZC1ibHVlOiAjMjE5NkYzO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC0tbmF2YmFyLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgY29sb3I6YmxhY2s7XFxufVxcblxcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbi8qKiogTkFWSUdVQVRJT04gQkFSICoqKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcblxcbn1cXG5cXG4ubmF2LW1lbnUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcblxcbi5uYXYtbWVudTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4vKioqIEFQUExJQ0FUSU9OIEJPRFkgKioqL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qKiogTElTVFMgU0lERSBNRU5VICoqKi9cXG5cXG4uc2lkZS1tZW51IHtcXG4gIHdpZHRoOiAyMiU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG59XFxuXFxuLmxpc3Qge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBBQ1RJVkUgTElTVCAvIFJFTUlOREVSUyBWSUVXICovXFxuXFxuLm1haW4tbWVudSB7XFxuICB3aWR0aDogNzglO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuXFxufVxcbi5hY3RpdmUtbGlzdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyoqKiBBQ1RJVkUgTElTVCBIRUFERVIgKioqL1xcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG5cXG59XFxuLnJlbWluZGVycy1oZWFkZXItY291bnR7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbn1cXG5cXG4ucmVtaW5kZXJzLWVtcHR5LXZpZXd7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIGxpbmUtaGVpZ2h0OiA4MHZoO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgY29sb3I6IGRhcmtncmF5O1xcblxcbn1cXG5cXG4vKioqIFJFTUlOREVSUyBWSUVXICoqKi9cXG5cXG4ucmVtaW5kZXJzLWNvbnRhaW5lciB7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqIFJFTUlOREVSICoqKi9cXG5cXG4ucmVtaW5kZXItZGV0YWlsc3tcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXgtd2lkdGg6IDY5cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnJlbWluZGVyLWluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG4ucmVtaW5kZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcblxcbn1cXG5cXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4uY2hlY2tib3gtY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VkLWJsdWUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hlY2tib3gtdW5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuXFxuLyoqKiBMSVNUUyBWSUVXIC8gUkVNSU5ERVJTIFZJRVcgRk9PVEVSUyAqKiovXFxuXFxuLnJlbWluZGVycy1mb290ZXIsIC5saXN0cy1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA1JTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG5cXG4vKioqIExJU1RTIC8gUkVNSU5ERVJTIE1PREFMUyAqKiovXFxuXFxuLm1vZGFsLXJlbWluZGVyLWNvbnRhaW5lciwgLm1vZGFsLWxpc3QtY29udGFpbmVyLCAubW9kYWwtaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxufVxcblxcblxcblxcbi5tb2RhbC1yZW1pbmRlciB7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXItYnRuLCAubW9kYWwtbGlzdC1idG57XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGV4dElucHV0IHAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5sb3csIC5tZWRpdW0sIC5oaWdoIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTpub25lIDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmxvd3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5tZWRpdW17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHkpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuaGlnaHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG5cXG5cXG4ubG93e1xcbiAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcblxcbn1cXG5cXG4ubWVkaXVte1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tcHJpb3JpdHkpO1xcblxcbn1cXG5cXG4uaGlnaHtcXG4gIGNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcblxcbn1cXG5cXG4ucmVtaW5kZXItY29udGFpbmVyOmhvdmVyIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxufVxcbi5tb2RhbC1saXN0LXRpdGxle1xcbnBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcbn1cXG4ubGlzdC1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jbG9zZXtcXG5mb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5pY29uIHtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG5cXG4ubW9kYWwtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG5cXG59XFxuXFxuLmhvdmVyOmhvdmVyLCBidXR0b246aG92ZXIsIGltZzpob3ZlciwgLnByaW9yaXR5LWNvbnRhaW5lciAqOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlzdC1jb250YWluZXI6aG92ZXJ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxnQkFBZ0IseUNBQXlDO0VBQ3ZELFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQSx5QkFBeUIsNEJBQTRCO0VBQ25ELFdBQVc7QUFDYjs7QUFFQSwwQkFBMEIsbUJBQW1CO0VBQzNDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxTQUFT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YixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7O0FBRWY7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gIC0tbG93LXByaW9yaXR5OiAjMThBNTU4O1xcbiAgLS1tZWRpdW0tcHJpb3JpdHk6ICNGQUQwMkM7XFxuICAtLWhpZ2gtcHJpb3JpdHk6ICNEMDExMTA7XFxuICAtLW1vZGFsLXdpbmRvdy1jb2xvcjojY2ZjZmNmO1xcbiAgLS1jaGVja2VkLWJsdWU6ICMyMTk2RjM7XFxuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLS1uYXZiYXItY29sb3I6ICMzMzM7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXFxuICBjb2xvcjpibGFjaztcXG59XFxuXFxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLyoqKiBOQVZJR1VBVElPTiBCQVIgKioqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuXFxufVxcblxcbi5uYXYtbWVudSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG5cXG59XFxuXFxuXFxuLm5hdi1tZW51Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qKiogQVBQTElDQVRJT04gQk9EWSAqKiovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyoqKiBMSVNUUyBTSURFIE1FTlUgKioqL1xcblxcbi5zaWRlLW1lbnUge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcblxcbn1cXG5cXG4ubGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcbi8qIEFDVElWRSBMSVNUIC8gUkVNSU5ERVJTIFZJRVcgKi9cXG5cXG4ubWFpbi1tZW51IHtcXG4gIHdpZHRoOiA3OCU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG5cXG59XFxuLmFjdGl2ZS1saXN0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKioqIEFDVElWRSBMSVNUIEhFQURFUiAqKiovXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG4ucmVtaW5kZXJzLWhlYWRlci1jb3VudHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxufVxcblxcbi5yZW1pbmRlcnMtZW1wdHktdmlld3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgbGluZS1oZWlnaHQ6IDgwdmg7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogZGFya2dyYXk7XFxuXFxufVxcblxcbi8qKiogUkVNSU5ERVJTIFZJRVcgKioqL1xcblxcbi5yZW1pbmRlcnMtY29udGFpbmVyIHtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qKiogUkVNSU5ERVIgKioqL1xcblxcbi5yZW1pbmRlci1kZXRhaWxze1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1heC13aWR0aDogNjlweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4ucmVtaW5kZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuXFxufVxcblxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcblxcblxcblxcbi5jaGVja2JveC1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZWQtYmx1ZSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVja2JveC11bmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG5cXG4vKioqIExJU1RTIFZJRVcgLyBSRU1JTkRFUlMgVklFVyBGT09URVJTICoqKi9cXG5cXG4ucmVtaW5kZXJzLWZvb3RlciwgLmxpc3RzLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcblxcblxcbi8qKiogTElTVFMgLyBSRU1JTkRFUlMgTU9EQUxTICoqKi9cXG5cXG4ubW9kYWwtcmVtaW5kZXItY29udGFpbmVyLCAubW9kYWwtbGlzdC1jb250YWluZXIsIC5tb2RhbC1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG59XFxuXFxuXFxuXFxuLm1vZGFsLXJlbWluZGVyIHtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXdpbmRvdy1jb2xvcik7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXItdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlci1idG4sIC5tb2RhbC1saXN0LWJ0bntcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0ZXh0SW5wdXQgaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0OmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0ZXh0SW5wdXQgcCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmxvdywgLm1lZGl1bSwgLmhpZ2gge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5Om5vbmUgO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAubG93e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLm1lZGl1bXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxufVxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5oaWdoe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcblxcblxcbi5sb3d7XFxuICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5tZWRpdW17XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5oaWdoe1xcbiAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG59XFxuLm1vZGFsLWxpc3QtdGl0bGV7XFxucGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFxufVxcbi5saXN0LWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNsb3Nle1xcbmZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcblxcbi5tb2RhbC1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXdpbmRvdy1jb2xvcik7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcblxcbn1cXG5cXG4uaG92ZXI6aG92ZXIsIGJ1dHRvbjpob3ZlciwgaW1nOmhvdmVyLCAucHJpb3JpdHktY29udGFpbmVyICo6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0LWNvbnRhaW5lcjpob3ZlcntcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciB9IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IHsgbGlzdHMgfSBmcm9tICcuL3VpJztcblxuXG5sZXQgYWxsTGlzdHMgPSBbXTsgIC8vIG1haW4gYXBwbGljYXRpb24gb2JqZWN0OiBsaXN0cyBhcnJheSwgY29udGFpbmluZyBsaXN0IGluZm9ybWF0aW9uIGFuZCByZW1pbmRlcnNcblxuXG4vLyBpZiB3ZSBkbyBub3QgaGF2ZSBsb2NhbHN0b3JhZ2UgeWV0IG9yIGlzIG5vdCBhdmFpbGFibGUsIHNldHVwIGRlZmF1bHQgUmVtaW5kZXJzIHBhZ2VcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWluZGVycycpKSB7XG4gICAgY3JlYXRlTGlzdChcIk15IE5ldyBSZW1pbmRlcnMgTGlzdFwiKTtcbiAgICBjcmVhdGVSZW1pbmRlcignVGhpcyBpcyBteSByZW1pbmRlcnMnLCAnMjAyNS0xMi0zMScsICdsb3cnKTtcbiAgICBjcmVhdGVSZW1pbmRlcignWW91IGNhbiBzZWUgdGhlIGRhdGUgdGhhdCB0aGUgcmVtaW5kZXIgaXMgZHVlJywgJzIwMjUtMTItMzEnLCAnbWVkaXVtJyk7XG4gICAgY3JlYXRlUmVtaW5kZXIoJ0FuZCB0aGUgcHJpb3JpdHkgaXQgaGFzIGJlZW4gc2V0IGluJywgJzIwMjUtMTItMzEnLCAnaGlnaCcpO1xuICAgIGNyZWF0ZVJlbWluZGVyKCdZb3UgY2FuIGFsc28gY3JlYXRlLCB1cGRhdGUgYW5kIHJlbW92ZSBhbnkgUmVtaW5kZXIgb3IgTGlzdCcsICcyMDI1LTEyLTMxJywgJ2xvdycpO1xuICAgIGNyZWF0ZUxpc3QoXCJHcm9jZXJpZXNcIik7XG59ZWxzZXtcbiAgICBhbGxMaXN0cyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZW1pbmRlcnMnKSk7XG4gICAgbGlzdHMuc2hvdygpO1xuICAgIGxpc3RzLnNob3dGaXJzdCgpO1xufVxuXG5leHBvcnQgeyBhbGxMaXN0cyB9OyIsImltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBsaXN0cywgcmVtaW5kZXJzIH0gZnJvbSAnLi91aSc7XG5cbi8vdmFyaWFibGUgaW5pdGlhbGl6YXRpb24sIHRvIGdldCBzdHlsZXMgdmFyaWFibGVzXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbmNvbnN0IHJvb3RTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpO1xuXG5jb25zdCBjcmVhdGVMaXN0ID0gKHRpdGxlKSA9PiB7XG5cbiAgICBhbGxMaXN0cy5wdXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHJlbWluZGVyczogW10sXG4gICAgICAgIGFjdGl2ZTogYWxsTGlzdHMuc2l6ZSA+IDEgPyBmYWxzZSA6IHRydWUsXG4gICAgfSk7XG4gICAgbGlzdHMuc2hvdygpO1xuICAgIHJlbWluZGVycy5zaG93KCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3QgPSAobGlzdCwgbmV3VGl0bGUpID0+IHtcblxuICAgIGNvbnN0IGluZGV4ID0gZ2V0TGlzdEluZGV4KGxpc3QpO1xuICAgIGFsbExpc3RzW2luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgbGlzdHMuc2hvdygpO1xuICAgIHJlbWluZGVycy5zaG93KCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn1cblxuY29uc3QgcmVtb3ZlTGlzdCA9IChpbmRleCkgPT4ge1xuICAgIGFsbExpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmVEYXRhKCk7XG4gICAgbGlzdHMuc2hvd0ZpcnN0KCk7XG5cbn07XG5cbmNvbnN0IGNyZWF0ZVJlbWluZGVyID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVycy5wdXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICAgIHJlbWluZGVycy5zaG93KCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cblxuY29uc3QgdXBkYXRlUmVtaW5kZXIgPSAocmVtaW5kZXIsIG5ld1RpdGxlLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UmVtaW5kZXJJbmRleChyZW1pbmRlcik7XG5cblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICAgIHJlbWluZGVycy5zaG93KCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IHJlbW92ZVJlbWluZGVyID0gKGluZGV4KSA9PiB7XG5cbiAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmVtaW5kZXJzLnNob3coKTtcbiAgICBzdG9yZURhdGEoKTtcblxufTtcblxuY29uc3QgY2hlY2tSZW1pbmRlciA9IChpbmRleCwgcmVtaW5kZXIpID0+IHtcblxuICAgIGlmIChyZW1pbmRlci5jaGVja2VkKSB7XG4gICAgICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcblxuICAgIH1cbiAgICByZW1pbmRlcnMuc2hvdygpO1xuICAgIHN0b3JlRGF0YSgpO1xuXG5cbn07XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5Q29sb3IocHJpb3JpdHkpIHtcblxuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgICAgIHJldHVybiByb290U3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJy0tbG93LXByaW9yaXR5Jyk7XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICByZXR1cm4gcm9vdFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCctLW1lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgIHJldHVybiByb290U3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJy0taGlnaC1wcmlvcml0eScpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdibGFjayc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZW1pbmRlckluZGV4KGl0ZW0pIHtcbiAgICByZXR1cm4gYWN0aXZlTGlzdCgpLnJlbWluZGVycy5pbmRleE9mKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBnZXRMaXN0SW5kZXgobGlzdCkge1xuICAgIHJldHVybiBhbGxMaXN0cy5pbmRleE9mKGxpc3QpO1xufVxuXG5mdW5jdGlvbiBzdG9yZURhdGEoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZW1pbmRlcnMnLCBKU09OLnN0cmluZ2lmeShhbGxMaXN0cykpO1xufVxuXG5cbmZ1bmN0aW9uIGFjdGl2ZUxpc3QoKSB7XG4gICAgbGV0IGFjdGl2ZUxpc3RBcnJheSA9IGFsbExpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuYWN0aXZlKTtcbiAgICByZXR1cm4gYWN0aXZlTGlzdEFycmF5WzBdO1xufVxuXG5leHBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciwgYWN0aXZlTGlzdCwgcmVtb3ZlUmVtaW5kZXIsIHVwZGF0ZVJlbWluZGVyLCBjaGVja1JlbWluZGVyLCByZW1vdmVMaXN0LCB1cGRhdGVMaXN0LCBzdG9yZURhdGEsIGdldFByaW9yaXR5Q29sb3IgfTsiLCJpbXBvcnQgeyBhbGxMaXN0cyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBhY3RpdmVMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciwgcmVtb3ZlUmVtaW5kZXIsIHVwZGF0ZVJlbWluZGVyLCBjaGVja1JlbWluZGVyLCByZW1vdmVMaXN0LFxuICAgIHVwZGF0ZUxpc3QsIGdldFByaW9yaXR5Q29sb3Jcbn0gZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgZWRpdEJ0blNyYyBmcm9tICcuL2Fzc2V0cy9lZGl0LXJlZ3VsYXIuc3ZnJztcbmltcG9ydCByZW1vdmVCdG5TcmMgZnJvbSAnLi9hc3NldHMvdHJhc2gtYWx0LXJlZ3VsYXIuc3ZnJztcbmltcG9ydCBhZGRMaXN0QnRuU3JjIGZyb20gJy4vYXNzZXRzL2NsaXBib2FyZC1jaGVjay1zb2xpZC5zdmcnO1xuaW1wb3J0IGFkZFJlbWluZGVyQnRuU3JjIGZyb20gJy4vYXNzZXRzL2xpc3QtdWwtc29saWQuc3ZnJztcblxuY29uc3QgbGlzdHMgPSAoKCkgPT4ge1xuXG4gICAgLy8gbGlzdHMgdmlldyB2YXJpYWJsZXMgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBsaXN0c0Zvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1mb290ZXInKTtcbiAgICBjb25zdCBhZGRMaXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdC1pY29uJyk7XG5cbiAgICBmdW5jdGlvbiBzaG93KCkge1xuXG4gICAgICAgIF9jbGVhcigpO1xuXG4gICAgICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInLCAnaG92ZXInKTtcblxuICAgICAgICAgICAgLy8gbWFpbiBsaXN0IGluZm9cbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3QnO1xuICAgICAgICAgICAgbGlzdC5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zZXRBY3RpdmUpO1xuXG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgICAgICAgICAvLyBvcHRpb25zIGNvbnRhaW5lciAtIHVwZGF0ZSBhbmQgcmVtb3ZlIGJ1dHRvbnNcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBsaXN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtZWRpdCcpO1xuICAgICAgICAgICAgbGlzdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgbGlzdEVkaXRCdG4uc3JjID0gZWRpdEJ0blNyYztcbiAgICAgICAgICAgIGxpc3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdEZvcm0uZWRpdCk7XG4gICAgICAgICAgICBsaXN0RWRpdEJ0bi5saXN0ID0gaXRlbTtcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgcmVtb3ZlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtcmVtb3ZlJyk7XG4gICAgICAgICAgICByZW1vdmVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgICAgIHJlbW92ZUxpc3RCdG4uc3JjID0gcmVtb3ZlQnRuU3JjO1xuICAgICAgICAgICAgcmVtb3ZlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0KGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWRpdEJ0bik7XG4gICAgICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMaXN0QnRuKTtcblxuICAgICAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0T3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfc2hvd0Zvb3RlcigpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgbGlzdHMgdmlld1xuICAgIGZ1bmN0aW9uIF9jbGVhcigpIHtcblxuICAgICAgICBsaXN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Rmlyc3QoKSB7XG5cbiAgICAgICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2hvdygpO1xuICAgICAgICByZW1pbmRlcnMuc2hvdygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zZXRBY3RpdmUobGlzdCkge1xuXG4gICAgICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gbGlzdC5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVtaW5kZXJzLnNob3coKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc2hvd0Zvb3RlcigpIHtcblxuICAgICAgICBsaXN0c0Zvb3RlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RGb3JtLmFkZCk7XG4gICAgICAgIGFkZExpc3RJY29uLnNyYyA9IGFkZExpc3RCdG5TcmM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvdyxcbiAgICAgICAgc2hvd0ZpcnN0LFxuICAgIH1cblxufSkoKTtcblxuY29uc3QgbGlzdEZvcm0gPSAoKCkgPT4ge1xuXG4gICAgLy8gbGlzdCBGb3JtIHZhcmlhYmxlcyBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IGxpc3RNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxpc3RGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdC10aXRsZScpO1xuICAgIGNvbnN0IGxpc3RNb2RhbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTGlzdCcpO1xuICAgIGNvbnN0IGxpc3RGb3JtU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1saXN0Jyk7XG5cbiAgICBsaXN0TW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jbG9zZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2Nsb3NlKTsgLy8gTWFrZSBzdXJlIG1vZGFsIGNsb3NlcyBpZiB1c2VyIGNsaWNrIGF3YXkgZnJvbSBpdFxuXG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG5cbiAgICAgICAgX3Nob3coKTtcbiAgICAgICAgbGlzdEZvcm1TdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgIGxpc3RGb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0FkZCBhIG5ldyBMaXN0JztcbiAgICAgICAgbGlzdEZvcm1TdWJtaXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc3VibWl0VXBkYXRlKTtcbiAgICAgICAgbGlzdEZvcm1TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc3VibWl0QWRkKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXQoZSkge1xuXG4gICAgICAgIGNvbnN0IGxpc3QgPSBlLmN1cnJlbnRUYXJnZXQubGlzdDtcblxuICAgICAgICBfc2hvdygpO1xuICAgICAgICBsaXN0Zm9ybS50aXRsZS52YWx1ZSA9IGxpc3QudGl0bGU7XG4gICAgICAgIGxpc3RGb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ1VwZGF0ZSB0aGlzIExpc3QnO1xuICAgICAgICBsaXN0Rm9ybVN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICAgICAgbGlzdEZvcm1TdWJtaXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc3VibWl0QWRkKTtcbiAgICAgICAgbGlzdEZvcm1TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc3VibWl0VXBkYXRlKVxuICAgICAgICBsaXN0Rm9ybVN1Ym1pdEJ0bi5saXN0ID0gbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3VibWl0QWRkKCkge1xuXG4gICAgICAgIF9oaWRlKCk7XG5cbiAgICAgICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlTGlzdChsaXN0Zm9ybS50aXRsZS52YWx1ZSk7XG4gICAgICAgIGxpc3Rmb3JtLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3N1Ym1pdFVwZGF0ZShlKSB7XG4gICAgICAgIF9oaWRlKCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbGlzdGZvcm0udGl0bGUudmFsdWU7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHVwZGF0ZUxpc3QoZS5jdXJyZW50VGFyZ2V0Lmxpc3QsIHRpdGxlKTtcbiAgICAgICAgbGlzdGZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2xvc2UoZSkge1xuXG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBsaXN0TW9kYWxDb250YWluZXIgfHwgZS50YXJnZXQgPT0gbGlzdE1vZGFsQ2xvc2UpIHtcbiAgICAgICAgICAgIGxpc3RNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbGlzdGZvcm0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zaG93KCkge1xuXG4gICAgICAgIGxpc3RNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGlkZSgpIHtcblxuICAgICAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgZWRpdCxcbiAgICB9O1xuXG59KSgpO1xuXG5jb25zdCByZW1pbmRlcnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gcmVtaW5kZXJzIHZpZXcgdmFyaWFibGUgaW5pdGlhbGl6YXRpb25cbiAgICBjb25zdCBhY3RpdmVMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlJyk7XG4gICAgY29uc3QgcmVtaW5kZXJDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtaGVhZGVyLWNvdW50Jyk7XG4gICAgY29uc3QgYWRkUmVtaW5kZXJCdG5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1yZW1pbmRlci1pY29uJyk7XG4gICAgY29uc3QgcmVtaW5kZXJzRm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWluZGVycy1mb290ZXInKTtcbiAgICBjb25zdCByZW1pbmRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWNvbnRhaW5lcicpO1xuXG5cbiAgICBmdW5jdGlvbiBzaG93KCkge1xuXG4gICAgICAgIF9jbGVhcigpO1xuICAgICAgICBfc2hvd0hlYWRlcigpO1xuXG4gICAgICAgIC8vIHJlbWluZGVycyB2aWV3IGlzIGRpZmZlcmVudCBpZiBubyByZW1pbmRlcnMsIHNvIHRoYXQgdXNlciBjYW4gZWFzaWx5IGNyZWF0ZSByZW1pbmRlclxuICAgICAgICBpZiAoYWN0aXZlTGlzdCgpLnJlbWluZGVycy5sZW5ndGggPT0gMCkge1xuXG4gICAgICAgICAgICBfaGlkZUZvb3RlcigpO1xuICAgICAgICAgICAgX3Nob3dFbXB0eSgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWluZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmVtaW5kZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBpbmZvIGNvbnRhaW5lciwgd2l0aCByZW1pbmRlciBpbmZvICh0aXRsZSwgcHJpb3JpdHksIGR1ZSBkYXRlKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWluZGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHJlbWluZGVySW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1pbmZvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBfdG9nZ2xlQ2hlY2tlZChpdGVtLCBjaGVja2JveCk7IC8vc2luY2UgdGhlIGNoZWNrYm94ZXMgYXJlIGRpdnMgYW5kIG5vdCBhY3R1YWwgY2hlY2tib3hlcywgdGhpcyB3aWxsIGNoYW5nZSB0aGUgY2hlY2tib3ggVUlcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1jaGVja21hcmsnLCAnaG92ZXInKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jaGVja0NoYW5nZSk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5yZW1pbmRlciA9IGl0ZW07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1pbmRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmVtaW5kZXJMYWJlbC5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtaW5kZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmVtaW5kZXJEZXRhaWxzLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICByZW1pbmRlckRldGFpbHMuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItZGV0YWlscycpO1xuICAgICAgICAgICAgICAgIHJlbWluZGVyRGV0YWlscy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRQcmlvcml0eUNvbG9yKGl0ZW0ucHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgcmVtaW5kZXJMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICAgICAgcmVtaW5kZXJMYWJlbC5hcHBlbmRDaGlsZChyZW1pbmRlckRldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgcmVtaW5kZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWluZGVyTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gb3B0aW9ucyBjb250YWluZXIsIHdpdGggcmVtaW5kZXIgYWN0aW9ucyAoZWRpdCwgcmVtb3ZlKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1vcHRpb25zLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1lZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zcmMgPSBlZGl0QnRuU3JjO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1pbmRlckZvcm0udXBkYXRlKTtcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnJlbWluZGVyID0gaXRlbTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1vcHRpb25zLXJlbW92ZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQnRuLnNyYyA9IHJlbW92ZUJ0blNyYztcbiAgICAgICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbWluZGVyKGluZGV4LCBpdGVtLnRpdGxlLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZW1pbmRlck9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgICAgICAgICByZW1pbmRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckluZm9Db250YWluZXIpO1xuICAgICAgICAgICAgICAgIHJlbWluZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICByZW1pbmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJDb250YWluZXIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgX3Nob3dGb290ZXIoKTtcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jbGVhcigpIHtcblxuICAgICAgICByZW1pbmRlcnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdG9nZ2xlQ2hlY2tlZChyZW1pbmRlciwgY2hlY2tib3gpIHtcblxuICAgICAgICBpZiAocmVtaW5kZXIuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtdW5jaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2hlY2tDaGFuZ2UoZSkge1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmluZGV4O1xuICAgICAgICBjaGVja1JlbWluZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQucmVtaW5kZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zaG93SGVhZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gYWN0aXZlTGlzdCgpLnJlbWluZGVycy5sZW5ndGg7XG4gICAgICAgIGFjdGl2ZUxpc3ROYW1lLmlubmVyVGV4dCA9IGFjdGl2ZUxpc3QoKS50aXRsZTtcbiAgICAgICAgcmVtaW5kZXJDb3VudC5pbm5lclRleHQgPSBjb3VudCA+IDEgPyBgJHtjb3VudH0gUmVtaW5kZXJzYCA6IGAke2NvdW50fSBSZW1pbmRlcmA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGlkZUZvb3RlcigpIHtcblxuICAgICAgICBpZiAocmVtaW5kZXJzRm9vdGVyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICByZW1pbmRlcnNGb290ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zaG93Rm9vdGVyKCkge1xuICAgICAgICByZW1pbmRlcnNGb290ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICByZW1pbmRlcnNGb290ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1pbmRlckZvcm0uYWRkKTtcbiAgICAgICAgYWRkUmVtaW5kZXJCdG5JY29uLnNyYyA9IGFkZFJlbWluZGVyQnRuU3JjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zaG93RW1wdHkoKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbXB0eVZpZXcuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXJzLWVtcHR5LXZpZXcnLCAnaG92ZXInKTtcbiAgICAgICAgZW1wdHlWaWV3LmlubmVyVGV4dCA9IFwiQWRkIG5ldyBSZW1pbmRlclwiO1xuICAgICAgICBlbXB0eVZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1pbmRlckZvcm0uYWRkKTtcbiAgICAgICAgcmVtaW5kZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5Vmlldyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvdyxcbiAgICB9XG59KSgpO1xuXG5jb25zdCByZW1pbmRlckZvcm0gPSAoKCkgPT4ge1xuXG4gICAgLy8gcmVtaW5kZXIgZm9ybSB2YXJpYWJsZSBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IHJlbWluZGVyTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItY29udGFpbmVyJyk7XG4gICAgY29uc3QgcmVtaW5kZXJGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItdGl0bGUnKTtcbiAgICBjb25zdCByZW1pbmRlck1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VSZW1pbmRlcicpO1xuICAgIGNvbnN0IHJlbWluZGVyRm9ybURhdGVwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXItZGF0ZXBpY2tlcicpXG4gICAgY29uc3QgcmVtaW5kZXJGb3JtU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuXG4gICAgcmVtaW5kZXJNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2Nsb3NlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2xvc2UpOyAvLyBNYWtlIHN1cmUgbW9kYWwgY2xvc2VzIGlmIHVzZXIgY2xpY2sgYXdheSBmcm9tIGl0XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG5cbiAgICAgICAgX3Nob3coKTtcbiAgICAgICAgcmVtaW5kZXJGb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0FkZCBhIG5ldyBSZW1pbmRlcic7XG4gICAgICAgIHJlbWluZGVyRm9ybVN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgICAgcmVtaW5kZXJGb3JtRGF0ZXBpY2tlci52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7IC8vc2V0IHRvZGF5J3MgZGF0ZSBhcyBkZWZhdWx0XG4gICAgICAgIHJlbWluZGVyRm9ybVN1Ym1pdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9zdWJtaXRVcGRhdGUpO1xuICAgICAgICByZW1pbmRlckZvcm1TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc3VibWl0QWRkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoZSkge1xuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyID0gZS5jdXJyZW50VGFyZ2V0LnJlbWluZGVyO1xuXG4gICAgICAgIF9zaG93KCk7XG4gICAgICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBSZW1pbmRlcic7XG4gICAgICAgIHJlbWluZGVyRm9ybVN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICAgICAgcmVtaW5kZXJmb3JtLnRpdGxlLnZhbHVlID0gcmVtaW5kZXIudGl0bGU7XG4gICAgICAgIHJlbWluZGVyZm9ybS5kdWUudmFsdWUgPSByZW1pbmRlci5kdWVEYXRlO1xuICAgICAgICByZW1pbmRlcmZvcm0ucHJpb3JpdHkudmFsdWUgPSByZW1pbmRlci5wcmlvcml0eTtcbiAgICAgICAgcmVtaW5kZXJGb3JtU3VibWl0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3N1Ym1pdEFkZCk7XG4gICAgICAgIHJlbWluZGVyRm9ybVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zdWJtaXRVcGRhdGUpO1xuICAgICAgICByZW1pbmRlckZvcm1TdWJtaXRCdG4ucmVtaW5kZXIgPSByZW1pbmRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3VibWl0QWRkKCkge1xuXG4gICAgICAgIF9oaWRlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNyZWF0ZVJlbWluZGVyKHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZSwgcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZSwgcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3VibWl0VXBkYXRlKGUpIHtcblxuICAgICAgICBfaGlkZSgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHJlbWluZGVyZm9ybS5kdWUudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHVwZGF0ZVJlbWluZGVyKGUuY3VycmVudFRhcmdldC5yZW1pbmRlciwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Nob3coKSB7XG5cbiAgICAgICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGlkZSgpIHtcblxuICAgICAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2Nsb3NlKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IHJlbWluZGVyTW9kYWxDb250YWluZXIgfHwgZS50YXJnZXQgPT0gcmVtaW5kZXJNb2RhbENsb3NlKSB7XG4gICAgICAgICAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICByZW1pbmRlcmZvcm0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgdXBkYXRlLFxuICAgIH1cbn0pKCk7XG5cbi8vIEluZm9ybWF0aW9uIG1vZGFsOiBub3QgY2FsbGVkIGJ5IG90aGVyIGZ1bmN0aW9ucyBvciBpbXBvcnRlZCwgYnV0IHN0aWxsIGNhbGxzIGl0c2VsZnNcbmNvbnN0IGluZm9ybWF0aW9uID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGluZm9Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1pbmZvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGluZm9Nb2RhbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlSW5mbycpO1xuICAgIGNvbnN0IGluZm9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpO1xuXG4gICAgaW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93KTtcbiAgICBpbmZvTW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jbG9zZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2Nsb3NlKTsgLy8gTWFrZSBzdXJlIG1vZGFsIGNsb3NlcyBpZiB1c2VyIGNsaWNrIGF3YXkgZnJvbSBpdFxuXG4gICAgZnVuY3Rpb24gX3Nob3coKSB7XG4gICAgICAgIGluZm9Nb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jbG9zZShlKSB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IGluZm9Nb2RhbENvbnRhaW5lciB8fCBlLnRhcmdldCA9PSBpbmZvTW9kYWxDbG9zZSkge1xuICAgICAgICAgICAgaW5mb01vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGxpc3RzLCByZW1pbmRlcnMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9