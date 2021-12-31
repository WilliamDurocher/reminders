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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --low-priority: #18A558;\n  --medium-priority: #FAD02C;\n  --high-priority: #D01110;\n  --modal-window-color:#cfcfcf;\n  --checked-blue: #2196F3;\n  --background-color: white;\n  --navbar-color: #333;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color:black;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: black;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: var(--navbar-color);\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n  background-color: lightgray;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n  line-height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n  padding-top: 10px;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n.active-list{\n  background-color: red;\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n.reminders-header-count{\n  padding-left: 25px;\n  padding-bottom: 25px;\n  font-size: 14px;\n  vertical-align: top;\n}\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n\n}\n\n.reminders-empty-view{\n  width: 100%;\n  text-align: center;\n  height: 80vh;\n  line-height: 80vh;\n  font-size: 32px;\n  color: darkgray;\n\n}\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-details{\n  margin-top: 10px;\n  font-size: 12px;\n  max-width: 69px;\n  padding: 10px;\n  border-radius: 20px;\n  color: white;\n}\n\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 19px;\n  font-size: 22px;\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a var(--background-color) background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: var(--checked-blue);\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: lightgray;\n  box-sizing: border-box;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover {\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALS ***/\n\n.modal-reminder-container, .modal-list-container, .modal-info-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n\n\n.modal-reminder {\n\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn, .modal-list-btn{\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: black;\n  font-size: 21px;\n  border-style: solid;\n  color: white;\n}\n\n\n\nbutton:hover {\n  cursor: pointer;\n\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: black;\n  background-color: var(--modal-window-color);\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n  height: 50px;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container .radio:hover{\n  cursor: pointer;\n  /*Todo: animation that changes the background color to the priority color and text color white*/\n}\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: var(--low-priority);\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: var(--medium-priority);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: var(--high-priority);\n  color: white;\n\n}\n.priority-container *:hover{\ncursor: pointer;\n}\n\n.reminder-datepicker:hover{\n  cursor: pointer;\n\n}\n.low{\n  color: var(--low-priority);\n  border: 1px solid var(--low-priority);\n\n}\n\n.medium{\n  color: var(--medium-priority);\n  border: 1px solid var(--medium-priority);\n\n}\n\n.high{\n  color: var(--high-priority);\n  border: 1px solid var(--high-priority);\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.modal-list {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n.modal-list-title{\npadding-bottom: 20px;\n\n}\n.list-container:hover img {\n  display: block;\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-close{\nfont-size: 28px;\n}\n\n.modal-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.modal-info {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n  --low-priority: #18A558;\n  --medium-priority: #FAD02C;\n  --high-priority: #D01110;\n  --modal-window-color:#cfcfcf;\n  --checked-blue: #2196F3;\n  --background-color: white;\n  --navbar-color: #333;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color:black;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: black;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: var(--navbar-color);\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n  background-color: lightgray;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n  line-height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n  padding-top: 10px;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n.active-list{\n  background-color: red;\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n.reminders-header-count{\n  padding-left: 25px;\n  padding-bottom: 25px;\n  font-size: 14px;\n  vertical-align: top;\n}\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n\n}\n\n.reminders-empty-view{\n  width: 100%;\n  text-align: center;\n  height: 80vh;\n  line-height: 80vh;\n  font-size: 32px;\n  color: darkgray;\n\n}\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-details{\n  margin-top: 10px;\n  font-size: 12px;\n  max-width: 69px;\n  padding: 10px;\n  border-radius: 20px;\n  color: white;\n}\n\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 19px;\n  font-size: 22px;\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a var(--background-color) background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: var(--checked-blue);\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: lightgray;\n  box-sizing: border-box;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover {\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALS ***/\n\n.modal-reminder-container, .modal-list-container, .modal-info-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n\n\n.modal-reminder {\n\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn, .modal-list-btn{\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: black;\n  font-size: 21px;\n  border-style: solid;\n  color: white;\n}\n\n\n\nbutton:hover {\n  cursor: pointer;\n\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: black;\n  background-color: var(--modal-window-color);\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n  height: 50px;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container .radio:hover{\n  cursor: pointer;\n  /*Todo: animation that changes the background color to the priority color and text color white*/\n}\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: var(--low-priority);\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: var(--medium-priority);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: var(--high-priority);\n  color: white;\n\n}\n.priority-container *:hover{\ncursor: pointer;\n}\n\n.reminder-datepicker:hover{\n  cursor: pointer;\n\n}\n.low{\n  color: var(--low-priority);\n  border: 1px solid var(--low-priority);\n\n}\n\n.medium{\n  color: var(--medium-priority);\n  border: 1px solid var(--medium-priority);\n\n}\n\n.high{\n  color: var(--high-priority);\n  border: 1px solid var(--high-priority);\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.modal-list {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n.modal-list-title{\npadding-bottom: 20px;\n\n}\n.list-container:hover img {\n  display: block;\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-close{\nfont-size: 28px;\n}\n\n.modal-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.modal-info {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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




let allLists = [];


if (!localStorage.getItem('reminders')) {
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)("Groceries");
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('Fruits', '2025-12-31', 'low');
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('Bacon', '2025-12-31', 'medium');
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('Pizza', '2025-12-31', 'high');

}else{
    allLists = JSON.parse(window.localStorage.getItem('reminders'));
    console.log(allLists)
    ;(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showLists)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.showFirstList)();
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



const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const createList = (title) => {

    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.push({
        title,
        reminders: [],
        active: _index__WEBPACK_IMPORTED_MODULE_0__.allLists.size > 1 ? false: true,
    });
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLists)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showListHeader)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
    storeData();

};

const updateList = (list, newTitle) => {
    const index = getListIndex(list);

    _index__WEBPACK_IMPORTED_MODULE_0__.allLists[index].title = newTitle;

    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLists)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showListHeader)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
    storeData();
    
}

const removeList = (index) => {
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.splice(index, 1);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLists)();
    storeData();

};

const createReminder = (title, dueDate, priority) => {
//TODO Local Storage

    activeList().reminders.push({
        title,
        dueDate,
        priority,
        checked: false
    });
(0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
storeData();

};


const updateReminder = (reminder, newTitle, newDate, newPriority) => {
const index = getReminderIndex(reminder);


activeList().reminders[index].title = newTitle;
activeList().reminders[index].dueDate = newDate;
activeList().reminders[index].priority = newPriority;

(0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
storeData();

};

const removeReminder = (index) => {

    activeList().reminders.splice(index, 1);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
    storeData();

};

const checkReminder = (index, reminder) => {

    if (reminder.checked){
        activeList().reminders[index].checked = false;
    }else{
        activeList().reminders[index].checked = true;

    }
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
    storeData();


};

function getPriorityColor(priority){


    switch(priority){
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

function getReminderIndex(item){
    return activeList().reminders.indexOf(item);
}

function getListIndex(list){
    return _index__WEBPACK_IMPORTED_MODULE_0__.allLists.indexOf(list);
}

function storeData(){
    window.localStorage.setItem('reminders', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.allLists));
}


function activeList(){
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
/* harmony export */   "showLists": () => (/* binding */ showLists),
/* harmony export */   "showReminders": () => (/* binding */ showReminders),
/* harmony export */   "showFirstList": () => (/* binding */ showFirstList),
/* harmony export */   "showListHeader": () => (/* binding */ showListHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _assets_edit_regular_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/edit-regular.svg */ "./src/assets/edit-regular.svg");
/* harmony import */ var _assets_minus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/minus-circle-solid.svg */ "./src/assets/minus-circle-solid.svg");
/* harmony import */ var _assets_clipboard_check_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/clipboard-check-solid.svg */ "./src/assets/clipboard-check-solid.svg");
/* harmony import */ var _assets_list_ul_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/list-ul-solid.svg */ "./src/assets/list-ul-solid.svg");








// const root = document.querySelector(':root');
// const rootStyles = getComputedStyle(root);

const listsContainer = document.querySelector('.lists-container');
const activeListName = document.querySelector('.reminders-header-title');
const remindersContainer = document.querySelector('.reminders-container');

const reminderModalContainer = document.querySelector('.modal-reminder-container');
const reminderFormTitle = document.querySelector('.modal-reminder-title');
const reminderModalClose = document.getElementById('closeReminder');

const listModalContainer = document.querySelector('.modal-list-container');
const listFormTitle = document.querySelector('.modal-list-title');
const listModalClose = document.getElementById('closeList');

const infoModalContainer = document.querySelector('.modal-info-container');
const infoModalClose = document.getElementById('closeInfo');
const infoBtn = document.getElementById('info');
infoBtn.addEventListener('click', showInfoModal);


function showLists() {
    clearLists();

    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
        const listContainer = document.createElement('div');
        listContainer.classList.add('list-container');
        const list = document.createElement('div');
        list.className = 'list';
        list.innerText = item.title;
        list.addEventListener('click', setActiveList);
        listContainer.appendChild(list);


        const editListBtn = document.createElement('img');
        editListBtn.classList.add('list-options-edit');
        editListBtn.classList.add('icon');
        editListBtn.src = _assets_edit_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
        editListBtn.addEventListener('click', editListForm);
        editListBtn.list = item;


        const removeListBtn = document.createElement('img');
        removeListBtn.classList.add('list-options-remove');
        removeListBtn.classList.add('icon');
        removeListBtn.src = _assets_minus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
        removeListBtn.addEventListener('click', () => {
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.removeList)(index);
            showFirstList();
        });

        //options container

        const listOptionsContainer = document.createElement('div');
        listOptionsContainer.classList.add('list-options-container');

        listOptionsContainer.appendChild(editListBtn);
        listOptionsContainer.appendChild(removeListBtn);


        listContainer.appendChild(listOptionsContainer);


        listsContainer.appendChild(listContainer);

    });
}
    const listsFooterContainer = document.querySelector('.lists-footer');
    listsFooterContainer.style.display = '';
    const addListIcon = document.querySelector('.new-list-icon');
    addListIcon.src = _assets_clipboard_check_solid_svg__WEBPACK_IMPORTED_MODULE_4__;
    listsFooterContainer.addEventListener('click', newListForm);



function clearLists() {
    listsContainer.innerHTML = '';
}



//TODO: to use whenever a list is removed
function showFirstList() {
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
        if (index == 0) {
            item.active = true;
        } else {
            item.active = false;
        }
    });
    showReminders();
}

function setActiveList(list) {
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
        if (item.title === list.currentTarget.innerText) {
            item.active = true;
        } else {
            item.active = false;


        }
    });
    showReminders();
}

function showListHeader() {
    activeListName.innerText = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().title;
    const reminderCount = document.querySelector('.reminders-header-count');
    const count = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.length;
    reminderCount.innerText = count > 1 ? `${count} Reminders`: `${count} Reminder` ;

}
//Add List Modal function and listeners
function newListForm() {
    const createListBtn = document.getElementById('add-list');

    listModalContainer.style.display = 'block';
    createListBtn.innerText = 'Add';
    listFormTitle.innerText = 'Add a new List';
    createListBtn.removeEventListener('click', submitUpdateListForm);
    createListBtn.addEventListener('click', submitListForm);

}

function editListForm(evt) {
    const list = evt.currentTarget.list;
    const editListBtn = document.getElementById('add-list');


    listModalContainer.style.display = 'block';
    listform.title.value = list.title;
    listFormTitle.innerText = 'Update this List';
    editListBtn.innerText = 'Update';
    editListBtn.removeEventListener('click', submitListForm);
    editListBtn.addEventListener('click', submitUpdateListForm)
    editListBtn.list = list;

}

function submitUpdateListForm(evt) {

    listModalContainer.style.display = 'none';
    const title = listform.title.value;
    event.preventDefault();
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.updateList)(evt.currentTarget.list, title);

    listform.reset();

}
function submitListForm() {

    listModalContainer.style.display = 'none';
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
        item.active = false;

    })
    event.preventDefault();

    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)(listform.title.value);
    listform.reset();

}


function showReminders() {
    clearReminders();
    showListHeader();

    if ((0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.length == 0){

        hideRemindersFooter();
        const emptyView = document.createElement('div');
        emptyView.classList.add('reminders-empty-view');
        //TODO: add class, make event that pops the new reminder page, make it clickable from the whole page
        emptyView.innerText = "Add new Reminder";
        emptyView.addEventListener('click', newReminderForm);
        remindersContainer.appendChild(emptyView);
    }else{

    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.forEach((item, index) => {



        const reminderContainer = document.createElement('div');
        reminderContainer.classList.add('reminder-container');


        const checkbox = document.createElement('div');
        checkbox.classList.add('reminder-checkmark');

        if (item.checked) {
            checkbox.classList.add('checkbox-checked');
        } else {
            checkbox.classList.add('checkbox-unchecked');
        }

        checkbox.addEventListener('click', reminderCheckChange);
        checkbox.index = index;
        checkbox.reminder = item;


        const reminderLabel = document.createElement('div');
        reminderLabel.innerText = item.title;


        const reminderDetails = document.createElement('div');
        reminderDetails.innerText = item.dueDate;
        reminderDetails.classList.add('reminder-details');
        reminderDetails.style.backgroundColor = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getPriorityColor)(item.priority); 
        //TODO: get priority color (func), set color as variable for background of date

        reminderLabel.appendChild(checkbox);
        reminderLabel.appendChild(reminderDetails);

        const reminderInfoContainer = document.createElement('div');
        reminderInfoContainer.classList.add('reminder-info-container');
        reminderInfoContainer.appendChild(reminderLabel);

        const editBtn = document.createElement('img');
        editBtn.classList.add('reminder-options-edit');
        editBtn.classList.add('icon');
        editBtn.src = _assets_edit_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
        editBtn.addEventListener('click', editReminderForm);
        editBtn.reminder = item;

        const removeBtn = document.createElement('img');
        removeBtn.classList.add('reminder-options-remove');
        removeBtn.classList.add('icon');
        removeBtn.src = _assets_minus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
        removeBtn.addEventListener('click', () => {
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.removeReminder)(index, item.title, item.dueDate, item.priority)
        });

        const reminderOptionsContainer = document.createElement('div');
        reminderOptionsContainer.classList.add('reminder-options-container');
        reminderOptionsContainer.appendChild(editBtn);
        reminderOptionsContainer.appendChild(removeBtn);

        reminderContainer.appendChild(reminderInfoContainer);
        reminderContainer.appendChild(reminderOptionsContainer);

        remindersContainer.appendChild(reminderContainer);
    })
    const remindersFooterContainer = document.querySelector('.reminders-footer');
    remindersFooterContainer.style.display = '';
    const addReminderBtnIcon = document.querySelector('.new-reminder-icon');
    addReminderBtnIcon.src = _assets_list_ul_solid_svg__WEBPACK_IMPORTED_MODULE_5__;
    remindersFooterContainer.addEventListener('click', newReminderForm);

}


}

function clearReminders() {
    remindersContainer.innerHTML = '';
}

//Add Reminder Modal functions and listeners
function newReminderForm() {
    reminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    reminderFormTitle.innerText = 'Add a new Reminder';
    createReminderBtn.innerText = 'Add';
    document.querySelector('.reminder-datepicker').value = new Date().toISOString().slice(0, 10);
    createReminderBtn.removeEventListener('click', submitUpdateReminderForm);
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function editReminderForm(evt) {

    reminderModalContainer.style.display = 'block';

    const reminder = evt.currentTarget.reminder;
    const updateReminderBtn = document.getElementById('add-reminder');
    updateReminderBtn.removeEventListener('click', submitReminderForm);
    reminderFormTitle.innerText = 'Update this Reminder';
    updateReminderBtn.innerText = 'Update';
    reminderform.title.value = reminder.title;
    reminderform.due.value = reminder.dueDate;
    reminderform.priority.value = reminder.priority;
    updateReminderBtn.addEventListener('click', submitUpdateReminderForm);
    updateReminderBtn.reminder = reminder;


}

function submitReminderForm() {

    console.log(reminderform);
    event.preventDefault();
    reminderModalContainer.style.display = 'none';
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)(reminderform.title.value, reminderform.due.value, reminderform.priority.value);
    reminderform.reset();

}

function submitUpdateReminderForm(evt) {

    const title = reminderform.title.value;
    const dueDate = reminderform.due.value;
    const priority = reminderform.priority.value;

    event.preventDefault();
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.updateReminder)(evt.currentTarget.reminder, title, dueDate, priority);

    reminderModalContainer.style.display = 'none';
    reminderform.reset();

}

//checkbox change function

function reminderCheckChange(evt) {
    const index = evt.currentTarget.index;
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.checkReminder)(index, evt.currentTarget.reminder);

}

// shared modal functions
reminderModalClose.addEventListener('click', closeModal);
listModalClose.addEventListener('click', closeModal);
infoModalClose.addEventListener('click', closeModal);

function closeModal() {
    reminderModalContainer.style.display = 'none';
    listModalContainer.style.display = 'none';
    infoModalContainer.style.display = 'none';
    listform.reset();
    reminderform.reset();

}

function hideRemindersFooter(){
    const remindersFooter = document.querySelector('.reminders-footer');

    if (remindersFooter){
        remindersFooter.style.display = 'none';
    }
}

function showInfoModal(){
    infoModalContainer.style.display = 'block';

}

function toggleRemindersModal() {
    //TODO
}

function toggleListsModal() {
    //TODO
}
window.onclick = function (event) {
    if (event.target == reminderModalContainer || event.target == listModalContainer || event.target == infoModalContainer) {
        closeModal();
    }
}





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

/***/ "./src/assets/minus-circle-solid.svg":
/*!*******************************************!*\
  !*** ./src/assets/minus-circle-solid.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4fcf5b12d8777fbd03c.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxRQUFRLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxLQUFLLEtBQUssVUFBVSxRQUFRLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsU0FBUyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSwrQkFBK0IsNEJBQTRCLCtCQUErQiw2QkFBNkIsaUNBQWlDLDRCQUE0Qiw4QkFBOEIseUJBQXlCLEdBQUcsb0JBQW9CLDJEQUEyRCxnQkFBZ0IsZ0JBQWdCLDZCQUE2Qiw2Q0FBNkMsR0FBRyw4QkFBOEIscUNBQXFDLEdBQUcsVUFBVSw4Q0FBOEMsY0FBYywrREFBK0QsS0FBSyx3Q0FBd0Msa0JBQWtCLGlCQUFpQiwwQ0FBMEMsS0FBSyxlQUFlLGlCQUFpQix1QkFBdUIsdUJBQXVCLGNBQWMsMEJBQTBCLHNCQUFzQixvQkFBb0IsS0FBSyw0QkFBNEIsc0JBQXNCLEdBQUcsbURBQW1ELGtCQUFrQix3QkFBd0Isa0JBQWtCLEdBQUcsNkNBQTZDLGVBQWUsNEJBQTRCLEdBQUcsc0JBQXNCLGVBQWUsaUJBQWlCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLGtCQUFrQix1QkFBdUIsZ0NBQWdDLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLG1DQUFtQyxHQUFHLHVDQUF1QyxnQ0FBZ0MsS0FBSyxXQUFXLGlCQUFpQixzQkFBc0IsR0FBRyw2QkFBNkIsa0JBQWtCLHNCQUFzQixHQUFHLDJDQUEyQyxrQkFBa0IsR0FBRyx3QkFBd0Isa0JBQWtCLHdCQUF3QixHQUFHLDhEQUE4RCxlQUFlLDRCQUE0QixLQUFLLGVBQWUsMEJBQTBCLEdBQUcsMkRBQTJELGtCQUFrQixtQ0FBbUMsZ0JBQWdCLEtBQUssMEJBQTBCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLHdCQUF3QixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyw2QkFBNkIsb0JBQW9CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEtBQUssMEJBQTBCLGdCQUFnQix1QkFBdUIsaUJBQWlCLHNCQUFzQixvQkFBb0Isb0JBQW9CLEtBQUssdUZBQXVGLG9CQUFvQixHQUFHLDRDQUE0QyxxQkFBcUIsb0JBQW9CLG9CQUFvQixrQkFBa0Isd0JBQXdCLGlCQUFpQixHQUFHLGdDQUFnQyxrQkFBa0IsbUNBQW1DLDhCQUE4QiwyQkFBMkIsMEJBQTBCLHNCQUFzQixLQUFLLHlCQUF5QixrQkFBa0IsbUNBQW1DLHVCQUF1Qix1QkFBdUIsd0JBQXdCLG9CQUFvQixLQUFLLDBFQUEwRSx1QkFBdUIsZUFBZSxjQUFjLGFBQWEsR0FBRyx5REFBeUQsdUJBQXVCLFdBQVcsWUFBWSxpQkFBaUIsZ0JBQWdCLDJCQUEyQix3QkFBd0IsR0FBRyxvR0FBb0csb0JBQW9CLEdBQUcseUJBQXlCLDBDQUEwQywyQkFBMkIsNEJBQTRCLEdBQUcseUJBQXlCLGdDQUFnQywyQkFBMkIsR0FBRyxpQ0FBaUMsa0JBQWtCLEdBQUcsNEJBQTRCLGtCQUFrQix3QkFBd0IsR0FBRyw4QkFBOEIsa0JBQWtCLEtBQUssMkZBQTJGLGtCQUFrQixhQUFhLGNBQWMsZUFBZSx1QkFBdUIsZ0JBQWdCLHVCQUF1QixHQUFHLHNCQUFzQixLQUFLLGNBQWMsS0FBSyw0Q0FBNEMsb0JBQW9CLEdBQUcscUhBQXFILGtCQUFrQixvQkFBb0IsWUFBWSxXQUFXLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw0QkFBNEIseUNBQXlDLCtCQUErQixtQkFBbUIsZ0NBQWdDLHdDQUF3QyxHQUFHLHlCQUF5QixrREFBa0QsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLGtCQUFrQixHQUFHLDJCQUEyQix1QkFBdUIseUJBQXlCLEdBQUcseUNBQXlDLGlCQUFpQixpQkFBaUIsd0JBQXdCLDRCQUE0QixvQkFBb0Isd0JBQXdCLGlCQUFpQixHQUFHLHNCQUFzQixvQkFBb0IsS0FBSyxzQkFBc0IsaUJBQWlCLGlCQUFpQiw2QkFBNkIsK0JBQStCLDhCQUE4QixnQ0FBZ0MsK0JBQStCLGdEQUFnRCxHQUFHLDRCQUE0QixrQkFBa0IsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcseUJBQXlCLGtCQUFrQiw0QkFBNEIsY0FBYyx5QkFBeUIsR0FBRyw4Q0FBOEMsZ0JBQWdCLGlCQUFpQixzQkFBc0IsdUJBQXVCLEdBQUcscUNBQXFDLG9CQUFvQix1R0FBdUcseUNBQXlDLGtCQUFrQixHQUFHLHlEQUF5RCwwQ0FBMEMsaUJBQWlCLEdBQUcsMERBQTBELDZDQUE2QyxpQkFBaUIsS0FBSyx3REFBd0QsMkNBQTJDLGlCQUFpQixLQUFLLDhCQUE4QixrQkFBa0IsR0FBRywrQkFBK0Isb0JBQW9CLEtBQUssT0FBTywrQkFBK0IsMENBQTBDLEtBQUssWUFBWSxrQ0FBa0MsNkNBQTZDLEtBQUssVUFBVSxnQ0FBZ0MsMkNBQTJDLEtBQUssbUNBQW1DLG1CQUFtQixHQUFHLGlCQUFpQixnREFBZ0QsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLGtCQUFrQixLQUFLLG9CQUFvQix1QkFBdUIsS0FBSyw2QkFBNkIsbUJBQW1CLEdBQUcsb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxpQkFBaUIsZ0RBQWdELGlCQUFpQixrQkFBa0Isd0JBQXdCLHFCQUFxQixrQkFBa0IsS0FBSywrQkFBK0I7QUFDMXlrQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQjtBQUMrQjtBQUNTOztBQUU5RDs7O0FBR0E7QUFDQSxJQUFJLGtEQUFVO0FBQ2QsSUFBSSxzREFBYztBQUNsQixJQUFJLHNEQUFjO0FBQ2xCLElBQUksc0RBQWM7O0FBRWxCLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwrQ0FBUztBQUNiLElBQUksa0RBQWE7QUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJtQztBQUMyQjs7QUFFOUQ7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLGlEQUFhO0FBQ2pCO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQWE7QUFDN0IsS0FBSztBQUNMLElBQUksOENBQVM7QUFDYixJQUFJLG1EQUFjO0FBQ2xCLElBQUksa0RBQWE7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLDRDQUFROztBQUVaLElBQUksOENBQVM7QUFDYixJQUFJLG1EQUFjO0FBQ2xCLElBQUksa0RBQWE7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBZTtBQUNuQixJQUFJLDhDQUFTO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtEQUFhO0FBQ2I7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxrREFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxrREFBYTtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxrREFBYTtBQUNqQjs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxvREFBZ0I7QUFDM0I7O0FBRUE7QUFDQSw0REFBNEQsNENBQVE7QUFDcEU7OztBQUdBO0FBQ0EsMEJBQTBCLG1EQUFlO0FBQ3pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SG1DO0FBSWxCO0FBQ2tDO0FBQ1E7QUFDSTtBQUNKOzs7QUFHM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxJQUFJLG9EQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFVO0FBQ3BDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBWTtBQUN4QztBQUNBLFlBQVksa0RBQVU7QUFDdEI7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBYTtBQUNuQzs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxJQUFJLG9EQUFnQjtBQUNwQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7OztBQUdBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isa0RBQVU7QUFDekM7QUFDQSxrQkFBa0Isa0RBQVU7QUFDNUIsNkNBQTZDLE9BQU8sZUFBZSxPQUFPOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVTs7QUFFZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBZ0I7QUFDcEI7O0FBRUEsS0FBSztBQUNMOztBQUVBLElBQUksa0RBQVU7QUFDZDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsa0RBQVU7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLGtEQUFVOzs7O0FBSWQ7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsd0RBQWdCO0FBQ2hFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBVTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBWTtBQUNwQztBQUNBLFlBQVksc0RBQWM7QUFDMUIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBaUI7QUFDOUM7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWM7QUFDbEI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBYzs7QUFFbEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBYTs7QUFFakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgLS1sb3ctcHJpb3JpdHk6ICMxOEE1NTg7XFxuICAtLW1lZGl1bS1wcmlvcml0eTogI0ZBRDAyQztcXG4gIC0taGlnaC1wcmlvcml0eTogI0QwMTExMDtcXG4gIC0tbW9kYWwtd2luZG93LWNvbG9yOiNjZmNmY2Y7XFxuICAtLWNoZWNrZWQtYmx1ZTogIzIxOTZGMztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtLW5hdmJhci1jb2xvcjogIzMzMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG4vKioqIE5BVklHVUFUSU9OIEJBUiAqKiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG5cXG59XFxuXFxuLm5hdi1tZW51IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcblxcbn1cXG5cXG5cXG4ubmF2LW1lbnU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyoqKiBBUFBMSUNBVElPTiBCT0RZICoqKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKioqIExJU1RTIFNJREUgTUVOVSAqKiovXFxuXFxuLnNpZGUtbWVudSB7XFxuICB3aWR0aDogMjIlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuXFxufVxcblxcbi5saXN0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi8qdG9kbzogaWNvbiAqL1xcbi5saXN0LW9wdGlvbnMtcmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtZWRpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQUNUSVZFIExJU1QgLyBSRU1JTkRFUlMgVklFVyAqL1xcblxcbi5tYWluLW1lbnUge1xcbiAgd2lkdGg6IDc4JTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcblxcbn1cXG4uYWN0aXZlLWxpc3R7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qKiogQUNUSVZFIExJU1QgSEVBREVSICoqKi9cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxufVxcbi5yZW1pbmRlcnMtaGVhZGVyLWNvdW50e1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxufVxcblxcbi5yZW1pbmRlcnMtZW1wdHktdmlld3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgbGluZS1oZWlnaHQ6IDgwdmg7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogZGFya2dyYXk7XFxuXFxufVxcbi8qXFxuVE9ETzogaGVhZGVyIHNldHRpbmdzID9cXG4qL1xcblxcbi8qKiogUkVNSU5ERVJTIFZJRVcgKioqL1xcblxcbi5yZW1pbmRlcnMtY29udGFpbmVyIHtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qKiogUkVNSU5ERVIgKioqL1xcblxcbi5yZW1pbmRlci1kZXRhaWxze1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1heC13aWR0aDogNjlweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4ucmVtaW5kZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuXFxufVxcblxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIHZhcigtLWJhY2tncm91bmQtY29sb3IpIGJhY2tncm91bmQgY29sb3IgKi9cXG4ucmVtaW5kZXItY2hlY2ttYXJrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmNoZWNrYm94LWNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlZC1ibHVlKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrYm94LXVuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtZWRpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtcmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcblxcbi8qKiogTElTVFMgVklFVyAvIFJFTUlOREVSUyBWSUVXIEZPT1RFUlMgKioqL1xcblxcbi5yZW1pbmRlcnMtZm9vdGVyLCAubGlzdHMtZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLypcXG4ubmV3LXJlbWluZGVye1xcblxcbn1cXG5cXG4ubmV3LWxpc3R7XFxuXFxufVxcbiovXFxuLm5ldy1yZW1pbmRlcjpob3ZlciwgLm5ldy1saXN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTFMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciwgLm1vZGFsLWluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxufVxcblxcblxcblxcbi5tb2RhbC1yZW1pbmRlciB7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXItYnRuLCAubW9kYWwtbGlzdC1idG57XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGV4dElucHV0IHAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5sb3csIC5tZWRpdW0sIC5oaWdoIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLnJhZGlvOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLypUb2RvOiBhbmltYXRpb24gdGhhdCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBwcmlvcml0eSBjb2xvciBhbmQgdGV4dCBjb2xvciB3aGl0ZSovXFxufVxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTpub25lIDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmxvd3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5tZWRpdW17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHkpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuaGlnaHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyICo6aG92ZXJ7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtaW5kZXItZGF0ZXBpY2tlcjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuLmxvd3tcXG4gIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG5cXG59XFxuXFxuLm1lZGl1bXtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG5cXG59XFxuXFxuLmhpZ2h7XFxuICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG5cXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXdpbmRvdy1jb2xvcik7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcblxcbn1cXG4ubW9kYWwtbGlzdC10aXRsZXtcXG5wYWRkaW5nLWJvdHRvbTogMjBweDtcXG5cXG59XFxuLmxpc3QtY29udGFpbmVyOmhvdmVyIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2V7XFxuZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4ubW9kYWwtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuXFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxufVxcblxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBLGdCQUFnQix5Q0FBeUM7RUFDdkQsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0FBQzFCOztBQUVBLHlCQUF5Qiw0QkFBNEI7RUFDbkQsV0FBVztBQUNiOztBQUVBLDBCQUEwQixtQkFBbUI7RUFDM0MsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCwwREFBMEQ7O0FBRTVEOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUNBQXFDOztBQUV2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOzs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFB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QUMzQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTs7QUFFZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gIC0tbG93LXByaW9yaXR5OiAjMThBNTU4O1xcbiAgLS1tZWRpdW0tcHJpb3JpdHk6ICNGQUQwMkM7XFxuICAtLWhpZ2gtcHJpb3JpdHk6ICNEMDExMTA7XFxuICAtLW1vZGFsLXdpbmRvdy1jb2xvcjojY2ZjZmNmO1xcbiAgLS1jaGVja2VkLWJsdWU6ICMyMTk2RjM7XFxuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLS1uYXZiYXItY29sb3I6ICMzMzM7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXFxuICBjb2xvcjpibGFjaztcXG59XFxuXFxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLyoqKiBOQVZJR1VBVElPTiBCQVIgKioqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuXFxufVxcblxcbi5uYXYtbWVudSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG5cXG59XFxuXFxuXFxuLm5hdi1tZW51Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qKiogQVBQTElDQVRJT04gQk9EWSAqKiovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyoqKiBMSVNUUyBTSURFIE1FTlUgKioqL1xcblxcbi5zaWRlLW1lbnUge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcblxcbn1cXG5cXG4ubGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4vKnRvZG86IGljb24gKi9cXG4ubGlzdC1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcbi8qIEFDVElWRSBMSVNUIC8gUkVNSU5ERVJTIFZJRVcgKi9cXG5cXG4ubWFpbi1tZW51IHtcXG4gIHdpZHRoOiA3OCU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG5cXG59XFxuLmFjdGl2ZS1saXN0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKioqIEFDVElWRSBMSVNUIEhFQURFUiAqKiovXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG4ucmVtaW5kZXJzLWhlYWRlci1jb3VudHtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbn1cXG5cXG4ucmVtaW5kZXJzLWVtcHR5LXZpZXd7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIGxpbmUtaGVpZ2h0OiA4MHZoO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgY29sb3I6IGRhcmtncmF5O1xcblxcbn1cXG4vKlxcblRPRE86IGhlYWRlciBzZXR0aW5ncyA/XFxuKi9cXG5cXG4vKioqIFJFTUlOREVSUyBWSUVXICoqKi9cXG5cXG4ucmVtaW5kZXJzLWNvbnRhaW5lciB7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqIFJFTUlOREVSICoqKi9cXG5cXG4ucmVtaW5kZXItZGV0YWlsc3tcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXgtd2lkdGg6IDY5cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnJlbWluZGVyLWluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG4ucmVtaW5kZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcblxcbn1cXG5cXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuLnJlbWluZGVyLWNoZWNrbWFyazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5jaGVja2JveC1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZWQtYmx1ZSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVja2JveC11bmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG5cXG4vKioqIExJU1RTIFZJRVcgLyBSRU1JTkRFUlMgVklFVyBGT09URVJTICoqKi9cXG5cXG4ucmVtaW5kZXJzLWZvb3RlciwgLmxpc3RzLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi8qXFxuLm5ldy1yZW1pbmRlcntcXG5cXG59XFxuXFxuLm5ldy1saXN0e1xcblxcbn1cXG4qL1xcbi5uZXctcmVtaW5kZXI6aG92ZXIsIC5uZXctbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qKiogTElTVFMgLyBSRU1JTkRFUlMgTU9EQUxTICoqKi9cXG5cXG4ubW9kYWwtcmVtaW5kZXItY29udGFpbmVyLCAubW9kYWwtbGlzdC1jb250YWluZXIsIC5tb2RhbC1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbn1cXG5cXG5cXG5cXG4ubW9kYWwtcmVtaW5kZXIge1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLWJ0biwgLm1vZGFsLWxpc3QtYnRue1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXdpbmRvdy1jb2xvcik7XFxufVxcblxcbiN0ZXh0SW5wdXQgaW5wdXQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3RleHRJbnB1dCBwIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubG93LCAubWVkaXVtLCAuaGlnaCB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5yYWRpbzpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qVG9kbzogYW5pbWF0aW9uIHRoYXQgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgcHJpb3JpdHkgY29sb3IgYW5kIHRleHQgY29sb3Igd2hpdGUqL1xcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGRpc3BsYXk6bm9uZSA7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5sb3d7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAubWVkaXVte1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmhpZ2h7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciAqOmhvdmVye1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbWluZGVyLWRhdGVwaWNrZXI6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcbi5sb3d7XFxuICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5tZWRpdW17XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5oaWdoe1xcbiAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG59XFxuLm1vZGFsLWxpc3QtdGl0bGV7XFxucGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFxufVxcbi5saXN0LWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNsb3Nle1xcbmZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXdpbmRvdy1jb2xvcik7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXIgfSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7IHNob3dMaXN0cywgc2hvd1JlbWluZGVycywgc2hvd0ZpcnN0TGlzdH0gZnJvbSAnLi91aSc7XG5cbmxldCBhbGxMaXN0cyA9IFtdO1xuXG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWluZGVycycpKSB7XG4gICAgY3JlYXRlTGlzdChcIkdyb2Nlcmllc1wiKTtcbiAgICBjcmVhdGVSZW1pbmRlcignRnJ1aXRzJywgJzIwMjUtMTItMzEnLCAnbG93Jyk7XG4gICAgY3JlYXRlUmVtaW5kZXIoJ0JhY29uJywgJzIwMjUtMTItMzEnLCAnbWVkaXVtJyk7XG4gICAgY3JlYXRlUmVtaW5kZXIoJ1BpenphJywgJzIwMjUtMTItMzEnLCAnaGlnaCcpO1xuXG59ZWxzZXtcbiAgICBhbGxMaXN0cyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZW1pbmRlcnMnKSk7XG4gICAgY29uc29sZS5sb2coYWxsTGlzdHMpXG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc2hvd0ZpcnN0TGlzdCgpO1xufVxuXG5cblxuZXhwb3J0IHsgYWxsTGlzdHMgfTsiLCJpbXBvcnQgeyBhbGxMaXN0cyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtzaG93TGlzdHMsIHNob3dMaXN0SGVhZGVyLCBzaG93UmVtaW5kZXJzfSBmcm9tICcuL3VpJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG5jb25zdCByb290U3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KTtcblxuY29uc3QgY3JlYXRlTGlzdCA9ICh0aXRsZSkgPT4ge1xuXG4gICAgYWxsTGlzdHMucHVzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICByZW1pbmRlcnM6IFtdLFxuICAgICAgICBhY3RpdmU6IGFsbExpc3RzLnNpemUgPiAxID8gZmFsc2U6IHRydWUsXG4gICAgfSk7XG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc2hvd0xpc3RIZWFkZXIoKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3QgPSAobGlzdCwgbmV3VGl0bGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGdldExpc3RJbmRleChsaXN0KTtcblxuICAgIGFsbExpc3RzW2luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc2hvd0xpc3RIZWFkZXIoKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG4gICAgXG59XG5cbmNvbnN0IHJlbW92ZUxpc3QgPSAoaW5kZXgpID0+IHtcbiAgICBhbGxMaXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNob3dMaXN0cygpO1xuICAgIHN0b3JlRGF0YSgpO1xuXG59O1xuXG5jb25zdCBjcmVhdGVSZW1pbmRlciA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbi8vVE9ETyBMb2NhbCBTdG9yYWdlXG5cbiAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLnB1c2goe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG5zaG93UmVtaW5kZXJzKCk7XG5zdG9yZURhdGEoKTtcblxufTtcblxuXG5jb25zdCB1cGRhdGVSZW1pbmRlciA9IChyZW1pbmRlciwgbmV3VGl0bGUsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG5jb25zdCBpbmRleCA9IGdldFJlbWluZGVySW5kZXgocmVtaW5kZXIpO1xuXG5cbmFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XG5hY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5kdWVEYXRlID0gbmV3RGF0ZTtcbmFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbnNob3dSZW1pbmRlcnMoKTtcbnN0b3JlRGF0YSgpO1xuXG59O1xuXG5jb25zdCByZW1vdmVSZW1pbmRlciA9IChpbmRleCkgPT4ge1xuXG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbiAgICBzdG9yZURhdGEoKTtcblxufTtcblxuY29uc3QgY2hlY2tSZW1pbmRlciA9IChpbmRleCwgcmVtaW5kZXIpID0+IHtcblxuICAgIGlmIChyZW1pbmRlci5jaGVja2VkKXtcbiAgICAgICAgYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcblxuICAgIH1cbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cblxufTtcblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlDb2xvcihwcmlvcml0eSl7XG5cblxuICAgIHN3aXRjaChwcmlvcml0eSl7XG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgcmV0dXJuIHJvb3RTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnLS1sb3ctcHJpb3JpdHknKTtcbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICByZXR1cm4gcm9vdFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCctLW1lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgICByZXR1cm4gcm9vdFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCctLWhpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYmxhY2snO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVtaW5kZXJJbmRleChpdGVtKXtcbiAgICByZXR1cm4gYWN0aXZlTGlzdCgpLnJlbWluZGVycy5pbmRleE9mKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBnZXRMaXN0SW5kZXgobGlzdCl7XG4gICAgcmV0dXJuIGFsbExpc3RzLmluZGV4T2YobGlzdCk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlRGF0YSgpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVtaW5kZXJzJywgSlNPTi5zdHJpbmdpZnkoYWxsTGlzdHMpKTtcbn1cblxuXG5mdW5jdGlvbiBhY3RpdmVMaXN0KCl7XG4gICAgbGV0IGFjdGl2ZUxpc3RBcnJheSA9IGFsbExpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuYWN0aXZlKTtcbiAgICByZXR1cm4gYWN0aXZlTGlzdEFycmF5WzBdO1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3QsIGNyZWF0ZVJlbWluZGVyLCBhY3RpdmVMaXN0LCByZW1vdmVSZW1pbmRlciwgdXBkYXRlUmVtaW5kZXIsIGNoZWNrUmVtaW5kZXIsIHJlbW92ZUxpc3QsIHVwZGF0ZUxpc3QsIHN0b3JlRGF0YSwgZ2V0UHJpb3JpdHlDb2xvcn07IiwiaW1wb3J0IHsgYWxsTGlzdHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7XG4gICAgYWN0aXZlTGlzdCwgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXIsIHJlbW92ZVJlbWluZGVyLCB1cGRhdGVSZW1pbmRlciwgY2hlY2tSZW1pbmRlciwgcmVtb3ZlTGlzdCxcbiAgICB1cGRhdGVMaXN0LCBnZXRQcmlvcml0eUNvbG9yXG59IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IGVkaXRCdG5TcmMgZnJvbSAnLi9hc3NldHMvZWRpdC1yZWd1bGFyLnN2Zyc7XG5pbXBvcnQgcmVtb3ZlQnRuU3JjIGZyb20gJy4vYXNzZXRzL21pbnVzLWNpcmNsZS1zb2xpZC5zdmcnO1xuaW1wb3J0IGFkZExpc3RCdG5TcmMgZnJvbSAnLi9hc3NldHMvY2xpcGJvYXJkLWNoZWNrLXNvbGlkLnN2Zyc7XG5pbXBvcnQgYWRkUmVtaW5kZXJCdG5TcmMgZnJvbSAnLi9hc3NldHMvbGlzdC11bC1zb2xpZC5zdmcnO1xuXG5cbi8vIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuLy8gY29uc3Qgcm9vdFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUocm9vdCk7XG5cbmNvbnN0IGxpc3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzLWNvbnRhaW5lcicpO1xuY29uc3QgYWN0aXZlTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWhlYWRlci10aXRsZScpO1xuY29uc3QgcmVtaW5kZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWluZGVycy1jb250YWluZXInKTtcblxuY29uc3QgcmVtaW5kZXJNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1yZW1pbmRlci1jb250YWluZXInKTtcbmNvbnN0IHJlbWluZGVyRm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlbWluZGVyLXRpdGxlJyk7XG5jb25zdCByZW1pbmRlck1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VSZW1pbmRlcicpO1xuXG5jb25zdCBsaXN0TW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdC1jb250YWluZXInKTtcbmNvbnN0IGxpc3RGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdC10aXRsZScpO1xuY29uc3QgbGlzdE1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VMaXN0Jyk7XG5cbmNvbnN0IGluZm9Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1pbmZvLWNvbnRhaW5lcicpO1xuY29uc3QgaW5mb01vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VJbmZvJyk7XG5jb25zdCBpbmZvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKTtcbmluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SW5mb01vZGFsKTtcblxuXG5mdW5jdGlvbiBzaG93TGlzdHMoKSB7XG4gICAgY2xlYXJMaXN0cygpO1xuXG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgICAgIGxpc3QuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEFjdGl2ZUxpc3QpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICAgICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1vcHRpb25zLWVkaXQnKTtcbiAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBlZGl0TGlzdEJ0bi5zcmMgPSBlZGl0QnRuU3JjO1xuICAgICAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRMaXN0Rm9ybSk7XG4gICAgICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBpdGVtO1xuXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3Qtb3B0aW9ucy1yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uc3JjID0gcmVtb3ZlQnRuU3JjO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdChpbmRleCk7XG4gICAgICAgICAgICBzaG93Rmlyc3RMaXN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vb3B0aW9ucyBjb250YWluZXJcblxuICAgICAgICBjb25zdCBsaXN0T3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGlzdE9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdExpc3RCdG4pO1xuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMaXN0QnRuKTtcblxuXG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnNDb250YWluZXIpO1xuXG5cbiAgICAgICAgbGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cbiAgICB9KTtcbn1cbiAgICBjb25zdCBsaXN0c0Zvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1mb290ZXInKTtcbiAgICBsaXN0c0Zvb3RlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgY29uc3QgYWRkTGlzdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3QtaWNvbicpO1xuICAgIGFkZExpc3RJY29uLnNyYyA9IGFkZExpc3RCdG5TcmM7XG4gICAgbGlzdHNGb290ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdMaXN0Rm9ybSk7XG5cblxuXG5mdW5jdGlvbiBjbGVhckxpc3RzKCkge1xuICAgIGxpc3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5cblxuLy9UT0RPOiB0byB1c2Ugd2hlbmV2ZXIgYSBsaXN0IGlzIHJlbW92ZWRcbmZ1bmN0aW9uIHNob3dGaXJzdExpc3QoKSB7XG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUxpc3QobGlzdCkge1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlID09PSBsaXN0LmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuXG5cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0xpc3RIZWFkZXIoKSB7XG4gICAgYWN0aXZlTGlzdE5hbWUuaW5uZXJUZXh0ID0gYWN0aXZlTGlzdCgpLnRpdGxlO1xuICAgIGNvbnN0IHJlbWluZGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWhlYWRlci1jb3VudCcpO1xuICAgIGNvbnN0IGNvdW50ID0gYWN0aXZlTGlzdCgpLnJlbWluZGVycy5sZW5ndGg7XG4gICAgcmVtaW5kZXJDb3VudC5pbm5lclRleHQgPSBjb3VudCA+IDEgPyBgJHtjb3VudH0gUmVtaW5kZXJzYDogYCR7Y291bnR9IFJlbWluZGVyYCA7XG5cbn1cbi8vQWRkIExpc3QgTW9kYWwgZnVuY3Rpb24gYW5kIGxpc3RlbmVyc1xuZnVuY3Rpb24gbmV3TGlzdEZvcm0oKSB7XG4gICAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbGlzdCcpO1xuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNyZWF0ZUxpc3RCdG4uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgbGlzdEZvcm1UaXRsZS5pbm5lclRleHQgPSAnQWRkIGEgbmV3IExpc3QnO1xuICAgIGNyZWF0ZUxpc3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVMaXN0Rm9ybSk7XG4gICAgY3JlYXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcblxufVxuXG5mdW5jdGlvbiBlZGl0TGlzdEZvcm0oZXZ0KSB7XG4gICAgY29uc3QgbGlzdCA9IGV2dC5jdXJyZW50VGFyZ2V0Lmxpc3Q7XG4gICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWxpc3QnKTtcblxuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxpc3Rmb3JtLnRpdGxlLnZhbHVlID0gbGlzdC50aXRsZTtcbiAgICBsaXN0Rm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBMaXN0JztcbiAgICBlZGl0TGlzdEJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICBlZGl0TGlzdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcbiAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKVxuICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBsaXN0O1xuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKGV2dCkge1xuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgdGl0bGUgPSBsaXN0Zm9ybS50aXRsZS52YWx1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZUxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQubGlzdCwgdGl0bGUpO1xuXG4gICAgbGlzdGZvcm0ucmVzZXQoKTtcblxufVxuZnVuY3Rpb24gc3VibWl0TGlzdEZvcm0oKSB7XG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhbGxMaXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY3JlYXRlTGlzdChsaXN0Zm9ybS50aXRsZS52YWx1ZSk7XG4gICAgbGlzdGZvcm0ucmVzZXQoKTtcblxufVxuXG5cbmZ1bmN0aW9uIHNob3dSZW1pbmRlcnMoKSB7XG4gICAgY2xlYXJSZW1pbmRlcnMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuXG4gICAgaWYgKGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMubGVuZ3RoID09IDApe1xuXG4gICAgICAgIGhpZGVSZW1pbmRlcnNGb290ZXIoKTtcbiAgICAgICAgY29uc3QgZW1wdHlWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtcHR5Vmlldy5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlcnMtZW1wdHktdmlldycpO1xuICAgICAgICAvL1RPRE86IGFkZCBjbGFzcywgbWFrZSBldmVudCB0aGF0IHBvcHMgdGhlIG5ldyByZW1pbmRlciBwYWdlLCBtYWtlIGl0IGNsaWNrYWJsZSBmcm9tIHRoZSB3aG9sZSBwYWdlXG4gICAgICAgIGVtcHR5Vmlldy5pbm5lclRleHQgPSBcIkFkZCBuZXcgUmVtaW5kZXJcIjtcbiAgICAgICAgZW1wdHlWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UmVtaW5kZXJGb3JtKTtcbiAgICAgICAgcmVtaW5kZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5Vmlldyk7XG4gICAgfWVsc2V7XG5cbiAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cblxuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbWluZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLWNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItY2hlY2ttYXJrJyk7XG5cbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtdW5jaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbWluZGVyQ2hlY2tDaGFuZ2UpO1xuICAgICAgICBjaGVja2JveC5pbmRleCA9IGluZGV4O1xuICAgICAgICBjaGVja2JveC5yZW1pbmRlciA9IGl0ZW07XG5cblxuICAgICAgICBjb25zdCByZW1pbmRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbWluZGVyTGFiZWwuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlckRldGFpbHMuaW5uZXJUZXh0ID0gaXRlbS5kdWVEYXRlO1xuICAgICAgICByZW1pbmRlckRldGFpbHMuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItZGV0YWlscycpO1xuICAgICAgICByZW1pbmRlckRldGFpbHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0UHJpb3JpdHlDb2xvcihpdGVtLnByaW9yaXR5KTsgXG4gICAgICAgIC8vVE9ETzogZ2V0IHByaW9yaXR5IGNvbG9yIChmdW5jKSwgc2V0IGNvbG9yIGFzIHZhcmlhYmxlIGZvciBiYWNrZ3JvdW5kIG9mIGRhdGVcblxuICAgICAgICByZW1pbmRlckxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgcmVtaW5kZXJMYWJlbC5hcHBlbmRDaGlsZChyZW1pbmRlckRldGFpbHMpO1xuXG4gICAgICAgIGNvbnN0IHJlbWluZGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlckluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItaW5mby1jb250YWluZXInKTtcbiAgICAgICAgcmVtaW5kZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWluZGVyTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1vcHRpb25zLWVkaXQnKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIGVkaXRCdG4uc3JjID0gZWRpdEJ0blNyYztcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRSZW1pbmRlckZvcm0pO1xuICAgICAgICBlZGl0QnRuLnJlbWluZGVyID0gaXRlbTtcblxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLW9wdGlvbnMtcmVtb3ZlJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5zcmMgPSByZW1vdmVCdG5TcmM7XG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVJlbWluZGVyKGluZGV4LCBpdGVtLnRpdGxlLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlck9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1jb250YWluZXInKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICByZW1pbmRlck9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblxuICAgICAgICByZW1pbmRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckluZm9Db250YWluZXIpO1xuICAgICAgICByZW1pbmRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlck9wdGlvbnNDb250YWluZXIpO1xuXG4gICAgICAgIHJlbWluZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckNvbnRhaW5lcik7XG4gICAgfSlcbiAgICBjb25zdCByZW1pbmRlcnNGb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWZvb3RlcicpO1xuICAgIHJlbWluZGVyc0Zvb3RlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgY29uc3QgYWRkUmVtaW5kZXJCdG5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1yZW1pbmRlci1pY29uJyk7XG4gICAgYWRkUmVtaW5kZXJCdG5JY29uLnNyYyA9IGFkZFJlbWluZGVyQnRuU3JjO1xuICAgIHJlbWluZGVyc0Zvb3RlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1JlbWluZGVyRm9ybSk7XG5cbn1cblxuXG59XG5cbmZ1bmN0aW9uIGNsZWFyUmVtaW5kZXJzKCkge1xuICAgIHJlbWluZGVyc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuLy9BZGQgUmVtaW5kZXIgTW9kYWwgZnVuY3Rpb25zIGFuZCBsaXN0ZW5lcnNcbmZ1bmN0aW9uIG5ld1JlbWluZGVyRm9ybSgpIHtcbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNyZWF0ZVJlbWluZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdBZGQgYSBuZXcgUmVtaW5kZXInO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlci1kYXRlcGlja2VyJykudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKTtcbiAgICBjcmVhdGVSZW1pbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFJlbWluZGVyRm9ybSlcblxufVxuXG5mdW5jdGlvbiBlZGl0UmVtaW5kZXJGb3JtKGV2dCkge1xuXG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IHJlbWluZGVyID0gZXZ0LmN1cnJlbnRUYXJnZXQucmVtaW5kZXI7XG4gICAgY29uc3QgdXBkYXRlUmVtaW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJlbWluZGVyJyk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRSZW1pbmRlckZvcm0pO1xuICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBSZW1pbmRlcic7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4uaW5uZXJUZXh0ID0gJ1VwZGF0ZSc7XG4gICAgcmVtaW5kZXJmb3JtLnRpdGxlLnZhbHVlID0gcmVtaW5kZXIudGl0bGU7XG4gICAgcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZSA9IHJlbWluZGVyLmR1ZURhdGU7XG4gICAgcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlID0gcmVtaW5kZXIucHJpb3JpdHk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVSZW1pbmRlckZvcm0pO1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLnJlbWluZGVyID0gcmVtaW5kZXI7XG5cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRSZW1pbmRlckZvcm0oKSB7XG5cbiAgICBjb25zb2xlLmxvZyhyZW1pbmRlcmZvcm0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNyZWF0ZVJlbWluZGVyKHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZSwgcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZSwgcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICByZW1pbmRlcmZvcm0ucmVzZXQoKTtcblxufVxuXG5mdW5jdGlvbiBzdWJtaXRVcGRhdGVSZW1pbmRlckZvcm0oZXZ0KSB7XG5cbiAgICBjb25zdCB0aXRsZSA9IHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlUmVtaW5kZXIoZXZ0LmN1cnJlbnRUYXJnZXQucmVtaW5kZXIsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuLy9jaGVja2JveCBjaGFuZ2UgZnVuY3Rpb25cblxuZnVuY3Rpb24gcmVtaW5kZXJDaGVja0NoYW5nZShldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGV2dC5jdXJyZW50VGFyZ2V0LmluZGV4O1xuICAgIGNoZWNrUmVtaW5kZXIoaW5kZXgsIGV2dC5jdXJyZW50VGFyZ2V0LnJlbWluZGVyKTtcblxufVxuXG4vLyBzaGFyZWQgbW9kYWwgZnVuY3Rpb25zXG5yZW1pbmRlck1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbmxpc3RNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5pbmZvTW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbmZvTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuICAgIHJlbWluZGVyZm9ybS5yZXNldCgpO1xuXG59XG5cbmZ1bmN0aW9uIGhpZGVSZW1pbmRlcnNGb290ZXIoKXtcbiAgICBjb25zdCByZW1pbmRlcnNGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWZvb3RlcicpO1xuXG4gICAgaWYgKHJlbWluZGVyc0Zvb3Rlcil7XG4gICAgICAgIHJlbWluZGVyc0Zvb3Rlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0luZm9Nb2RhbCgpe1xuICAgIGluZm9Nb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxufVxuXG5mdW5jdGlvbiB0b2dnbGVSZW1pbmRlcnNNb2RhbCgpIHtcbiAgICAvL1RPRE9cbn1cblxuZnVuY3Rpb24gdG9nZ2xlTGlzdHNNb2RhbCgpIHtcbiAgICAvL1RPRE9cbn1cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSByZW1pbmRlck1vZGFsQ29udGFpbmVyIHx8IGV2ZW50LnRhcmdldCA9PSBsaXN0TW9kYWxDb250YWluZXIgfHwgZXZlbnQudGFyZ2V0ID09IGluZm9Nb2RhbENvbnRhaW5lcikge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgc2hvd0xpc3RzLCBzaG93UmVtaW5kZXJzICwgc2hvd0ZpcnN0TGlzdCwgc2hvd0xpc3RIZWFkZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=