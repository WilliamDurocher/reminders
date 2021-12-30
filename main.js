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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --low-priority: green;\n  --medium-priority: rgb(230, 179, 13);\n  --high-priority: red;\n  --modal-window-color:#cfcfcf;\n  --checked-blue: #2196F3;\n  --background-color: grey;\n  --navbar-color: #333;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color:black;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: black;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: var(--navbar-color);\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n  line-height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n  padding-top: 10px;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 35px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-details{\n  margin-top: 10px;\n  font-size: 12px;\n  border: solid 1px black;\n  max-width: 69px;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 19px;\n  font-size: 22px;\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a var(--background-color) background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: var(--checked-blue);\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: #eee;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover {\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n\n\n.modal-reminder {\n\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn, .modal-list-btn{\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: black;\n  font-size: 21px;\n  border-style: solid;\n  color: white;\n}\n\n\n\nbutton:hover {\n  cursor: pointer;\n\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: var(--checked-blue);\n  background-color: var(--modal-window-color);\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n  height: 50px;\n}\n\n.modal-list {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n.modal-list-title{\npadding-bottom: 20px;\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-close{\n/* todo: change size, background border  */\n}\n\n.modal-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container .radio:hover{\n  cursor: pointer;\n  /*Todo: animation that changes the background color to the priority color and text color white*/\n}\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: var(--low-priority);\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: var(--medium-priority);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: var(--high-priority);\n  color: white;\n\n}\n\n.low{\n  color: var(--low-priority);\n  border: 1px solid var(--low-priority);\n\n}\n\n.medium{\n  color: var(--medium-priority);\n  border: 1px solid var(--medium-priority);\n\n}\n\n.high{\n  color: var(--high-priority);\n  border: 1px solid var(--high-priority);\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.list-container:hover img {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n  --low-priority: green;\n  --medium-priority: rgb(230, 179, 13);\n  --high-priority: red;\n  --modal-window-color:#cfcfcf;\n  --checked-blue: #2196F3;\n  --background-color: grey;\n  --navbar-color: #333;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color:black;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: black;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: var(--navbar-color);\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n  line-height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n  padding-top: 10px;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 35px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-details{\n  margin-top: 10px;\n  font-size: 12px;\n  border: solid 1px black;\n  max-width: 69px;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 19px;\n  font-size: 22px;\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a var(--background-color) background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: var(--checked-blue);\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: #eee;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover {\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n\n\n.modal-reminder {\n\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn, .modal-list-btn{\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: black;\n  font-size: 21px;\n  border-style: solid;\n  color: white;\n}\n\n\n\nbutton:hover {\n  cursor: pointer;\n\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: var(--checked-blue);\n  background-color: var(--modal-window-color);\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n  height: 50px;\n}\n\n.modal-list {\n  background-color: var(--modal-window-color);\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 400px;\n  height: 300px;\n\n}\n.modal-list-title{\npadding-bottom: 20px;\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-close{\n/* todo: change size, background border  */\n}\n\n.modal-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container .radio:hover{\n  cursor: pointer;\n  /*Todo: animation that changes the background color to the priority color and text color white*/\n}\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: var(--low-priority);\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: var(--medium-priority);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: var(--high-priority);\n  color: white;\n\n}\n\n.low{\n  color: var(--low-priority);\n  border: 1px solid var(--low-priority);\n\n}\n\n.medium{\n  color: var(--medium-priority);\n  border: 1px solid var(--medium-priority);\n\n}\n\n.high{\n  color: var(--high-priority);\n  border: 1px solid var(--high-priority);\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.list-container:hover img {\n  display: block;\n}\n"],"sourceRoot":""}]);
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
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)("New List");
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('My new reminder', '2021-12-31', 'low');
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
             return '--low-priority';
        case 'medium':
             return '--medium-priority';
        case 'high':
             return '--high-priority';
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
// const rootStyles = window.getComputedStyles(root);

const listsContainer = document.querySelector('.lists-container');
const activeListName = document.querySelector('.reminders-header-title');
const remindersContainer = document.querySelector('.reminders-container');

const reminderModalContainer = document.querySelector('.modal-reminder-container');
const reminderFormTitle = document.querySelector('.modal-reminder-title');
const reminderModalClose = document.getElementById('closeReminder');

const listModalContainer = document.querySelector('.modal-list-container');
const listFormTitle = document.querySelector('.modal-list-title');
const listModalClose = document.getElementById('closeList');



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
    const listsFooterContainer = document.querySelector('.lists-footer');
    const addListIcon = document.querySelector('.new-list-icon');
    addListIcon.src = _assets_clipboard_check_solid_svg__WEBPACK_IMPORTED_MODULE_4__;
    listsFooterContainer.addEventListener('click', newListForm);

}

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

        const emptyView = document.createElement('div');
        //TODO: add class, make event that pops the new reminder page, make it clickable from the whole page
        emptyView.innerText = "empty";
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
        reminderDetails.style.backgroundColor = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getPriorityColor)(item.priority); //todo not working
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

}

    const remindersFooterContainer = document.querySelector('.reminders-footer');
    const addReminderBtnIcon = document.querySelector('.new-reminder-icon');
    addReminderBtnIcon.src = _assets_list_ul_solid_svg__WEBPACK_IMPORTED_MODULE_5__;
    remindersFooterContainer.addEventListener('click', newReminderForm);
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

function closeModal() {
    reminderModalContainer.style.display = 'none';
    listModalContainer.style.display = 'none';
    listform.reset();
    reminderform.reset();

}

function toggleRemindersModal() {
    //TODO
}

function toggleListsModal() {
    //TODO
}
window.onclick = function (event) {
    if (event.target == reminderModalContainer || event.target == listModalContainer) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFFBQVEsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLEtBQUssS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxTQUFTLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FB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RUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAtLWxvdy1wcmlvcml0eTogZ3JlZW47XFxuICAtLW1lZGl1bS1wcmlvcml0eTogcmdiKDIzMCwgMTc5LCAxMyk7XFxuICAtLWhpZ2gtcHJpb3JpdHk6IHJlZDtcXG4gIC0tbW9kYWwtd2luZG93LWNvbG9yOiNjZmNmY2Y7XFxuICAtLWNoZWNrZWQtYmx1ZTogIzIxOTZGMztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIC0tbmF2YmFyLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgY29sb3I6YmxhY2s7XFxufVxcblxcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbi8qKiogTkFWSUdVQVRJT04gQkFSICoqKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcblxcbn1cXG5cXG4ubmF2LW1lbnUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcblxcbi5uYXYtbWVudTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4vKioqIEFQUExJQ0FUSU9OIEJPRFkgKioqL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qKiogTElTVFMgU0lERSBNRU5VICoqKi9cXG5cXG4uc2lkZS1tZW51IHtcXG4gIHdpZHRoOiAyMiU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG59XFxuXFxuLmxpc3Qge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLyp0b2RvOiBpY29uICovXFxuLmxpc3Qtb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBBQ1RJVkUgTElTVCAvIFJFTUlOREVSUyBWSUVXICovXFxuXFxuLm1haW4tbWVudSB7XFxuICB3aWR0aDogNzglO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuXFxufVxcblxcbi8qKiogQUNUSVZFIExJU1QgSEVBREVSICoqKi9cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qXFxuVE9ETzogaGVhZGVyIHNldHRpbmdzID9cXG4qL1xcblxcbi8qKiogUkVNSU5ERVJTIFZJRVcgKioqL1xcblxcbi5yZW1pbmRlcnMtY29udGFpbmVyIHtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qKiogUkVNSU5ERVIgKioqL1xcblxcbi5yZW1pbmRlci1kZXRhaWxze1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgbWF4LXdpZHRoOiA2OXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcblxcbi5yZW1pbmRlci1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG5cXG59XFxuXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgdmFyKC0tYmFja2dyb3VuZC1jb2xvcikgYmFja2dyb3VuZCBjb2xvciAqL1xcbi5yZW1pbmRlci1jaGVja21hcms6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uY2hlY2tib3gtY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VkLWJsdWUpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hlY2tib3gtdW5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuXFxuLyoqKiBMSVNUUyBWSUVXIC8gUkVNSU5ERVJTIFZJRVcgRk9PVEVSUyAqKiovXFxuXFxuLnJlbWluZGVycy1mb290ZXIsIC5saXN0cy1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA1JTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4vKlxcbi5uZXctcmVtaW5kZXJ7XFxuXFxufVxcblxcbi5uZXctbGlzdHtcXG5cXG59XFxuKi9cXG4ubmV3LXJlbWluZGVyOmhvdmVyLCAubmV3LWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKioqIExJU1RTIC8gUkVNSU5ERVJTIE1PREFMcyAqKiovXFxuXFxuLm1vZGFsLXJlbWluZGVyLWNvbnRhaW5lciwgLm1vZGFsLWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxufVxcblxcblxcblxcbi5tb2RhbC1yZW1pbmRlciB7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXItYnRuLCAubW9kYWwtbGlzdC1idG57XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWNoZWNrZWQtYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0OmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0ZXh0SW5wdXQgcCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tb2RhbC1saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXdpbmRvdy1jb2xvcik7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcblxcbn1cXG4ubW9kYWwtbGlzdC10aXRsZXtcXG5wYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2V7XFxuLyogdG9kbzogY2hhbmdlIHNpemUsIGJhY2tncm91bmQgYm9yZGVyICAqL1xcbn1cXG5cXG4ubW9kYWwtY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuXFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubG93LCAubWVkaXVtLCAuaGlnaCB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5yYWRpbzpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qVG9kbzogYW5pbWF0aW9uIHRoYXQgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgcHJpb3JpdHkgY29sb3IgYW5kIHRleHQgY29sb3Igd2hpdGUqL1xcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGRpc3BsYXk6bm9uZSA7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5sb3d7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAubWVkaXVte1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmhpZ2h7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmxvd3tcXG4gIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbG93LXByaW9yaXR5KTtcXG5cXG59XFxuXFxuLm1lZGl1bXtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG5cXG59XFxuXFxuLmhpZ2h7XFxuICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oaWdoLXByaW9yaXR5KTtcXG5cXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOztBQUVBLGdCQUFnQix5Q0FBeUM7RUFDdkQsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0FBQzFCOztBQUVBLHlCQUF5Qiw0QkFBNEI7RUFDbkQsV0FBVztBQUNiOztBQUVBLDBCQUEwQixtQkFBbUI7RUFDM0MsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCwwREFBMEQ7O0FBRTVEOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUNBQXFDOztBQUV2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOzs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7O0FBRTdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7Ozs7O0FBTUEsaUNBQWlDOztBQUVqQztFQUNFLFVBQVU7RUFDVix1QkFBdUI7O0FBRXpCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0NBRUM7O0FBRUQsdUJBQXVCOztBQUV2Qjs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7O0FBRWpCOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBLGtFQUFrRTtBQUNsRTtFQUNFLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhOztBQUVmOzs7O0FBSUEsNENBQTRDOztBQUU1QztFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7Q0FRQztBQUNEO0VBQ0UsZUFBZTtBQUNqQjs7O0FBR0EsaUNBQWlDOztBQUVqQztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixtQ0FBbUM7QUFDckM7Ozs7QUFJQTs7RUFFRSwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7Ozs7QUFJQTtFQUNFLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTs7QUFFZjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrRkFBK0Y7QUFDakc7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZOztBQUVkO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixxQ0FBcUM7O0FBRXZDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHdDQUF3Qzs7QUFFMUM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDOztBQUV4Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgLS1sb3ctcHJpb3JpdHk6IGdyZWVuO1xcbiAgLS1tZWRpdW0tcHJpb3JpdHk6IHJnYigyMzAsIDE3OSwgMTMpO1xcbiAgLS1oaWdoLXByaW9yaXR5OiByZWQ7XFxuICAtLW1vZGFsLXdpbmRvdy1jb2xvcjojY2ZjZmNmO1xcbiAgLS1jaGVja2VkLWJsdWU6ICMyMTk2RjM7XFxuICAtLWJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAtLW5hdmJhci1jb2xvcjogIzMzMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOmJsYWNrO1xcbn1cXG5cXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG4vKioqIE5BVklHVUFUSU9OIEJBUiAqKiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG5cXG59XFxuXFxuLm5hdi1tZW51IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcblxcbn1cXG5cXG5cXG4ubmF2LW1lbnU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyoqKiBBUFBMSUNBVElPTiBCT0RZICoqKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKioqIExJU1RTIFNJREUgTUVOVSAqKiovXFxuXFxuLnNpZGUtbWVudSB7XFxuICB3aWR0aDogMjIlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuXFxufVxcblxcbi5saXN0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi8qdG9kbzogaWNvbiAqL1xcbi5saXN0LW9wdGlvbnMtcmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtZWRpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQUNUSVZFIExJU1QgLyBSRU1JTkRFUlMgVklFVyAqL1xcblxcbi5tYWluLW1lbnUge1xcbiAgd2lkdGg6IDc4JTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcblxcbn1cXG5cXG4vKioqIEFDVElWRSBMSVNUIEhFQURFUiAqKiovXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKlxcblRPRE86IGhlYWRlciBzZXR0aW5ncyA/XFxuKi9cXG5cXG4vKioqIFJFTUlOREVSUyBWSUVXICoqKi9cXG5cXG4ucmVtaW5kZXJzLWNvbnRhaW5lciB7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqIFJFTUlOREVSICoqKi9cXG5cXG4ucmVtaW5kZXItZGV0YWlsc3tcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIG1heC13aWR0aDogNjlweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5cXG4ucmVtaW5kZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuXFxufVxcblxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIHZhcigtLWJhY2tncm91bmQtY29sb3IpIGJhY2tncm91bmQgY29sb3IgKi9cXG4ucmVtaW5kZXItY2hlY2ttYXJrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmNoZWNrYm94LWNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlZC1ibHVlKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrYm94LXVuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtZWRpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtcmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcblxcbi8qKiogTElTVFMgVklFVyAvIFJFTUlOREVSUyBWSUVXIEZPT1RFUlMgKioqL1xcblxcbi5yZW1pbmRlcnMtZm9vdGVyLCAubGlzdHMtZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLypcXG4ubmV3LXJlbWluZGVye1xcblxcbn1cXG5cXG4ubmV3LWxpc3R7XFxuXFxufVxcbiovXFxuLm5ldy1yZW1pbmRlcjpob3ZlciwgLm5ldy1saXN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTHMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbn1cXG5cXG5cXG5cXG4ubW9kYWwtcmVtaW5kZXIge1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLWJ0biwgLm1vZGFsLWxpc3QtYnRue1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1jaGVja2VkLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtd2luZG93LWNvbG9yKTtcXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGV4dElucHV0IHAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubW9kYWwtbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC13aW5kb3ctY29sb3IpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG5cXG59XFxuLm1vZGFsLWxpc3QtdGl0bGV7XFxucGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNsb3Nle1xcbi8qIHRvZG86IGNoYW5nZSBzaXplLCBiYWNrZ3JvdW5kIGJvcmRlciAgKi9cXG59XFxuXFxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmxvdywgLm1lZGl1bSwgLmhpZ2gge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAucmFkaW86aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKlRvZG86IGFuaW1hdGlvbiB0aGF0IGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHByaW9yaXR5IGNvbG9yIGFuZCB0ZXh0IGNvbG9yIHdoaXRlKi9cXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5Om5vbmUgO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAubG93e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLm1lZGl1bXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxufVxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5oaWdoe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5sb3d7XFxuICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvdy1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5tZWRpdW17XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLXByaW9yaXR5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5oaWdoe1xcbiAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGlnaC1wcmlvcml0eSk7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXIgfSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7IHNob3dMaXN0cywgc2hvd1JlbWluZGVycywgc2hvd0ZpcnN0TGlzdH0gZnJvbSAnLi91aSc7XG5cbmxldCBhbGxMaXN0cyA9IFtdO1xuXG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWluZGVycycpKSB7XG4gICAgY3JlYXRlTGlzdChcIk5ldyBMaXN0XCIpO1xuICAgIGNyZWF0ZVJlbWluZGVyKCdNeSBuZXcgcmVtaW5kZXInLCAnMjAyMS0xMi0zMScsICdsb3cnKTtcbn1lbHNle1xuICAgIGFsbExpc3RzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWluZGVycycpKTtcbiAgICBjb25zb2xlLmxvZyhhbGxMaXN0cylcbiAgICBzaG93TGlzdHMoKTtcbiAgICBzaG93Rmlyc3RMaXN0KCk7XG59XG5cblxuXG5leHBvcnQgeyBhbGxMaXN0cyB9OyIsImltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge3Nob3dMaXN0cywgc2hvd0xpc3RIZWFkZXIsIHNob3dSZW1pbmRlcnN9IGZyb20gJy4vdWknO1xuXG5jb25zdCBjcmVhdGVMaXN0ID0gKHRpdGxlKSA9PiB7XG5cbiAgICBhbGxMaXN0cy5wdXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHJlbWluZGVyczogW10sXG4gICAgICAgIGFjdGl2ZTogYWxsTGlzdHMuc2l6ZSA+IDEgPyBmYWxzZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBzaG93TGlzdHMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbiAgICBzdG9yZURhdGEoKTtcblxufTtcblxuY29uc3QgdXBkYXRlTGlzdCA9IChsaXN0LCBuZXdUaXRsZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0TGlzdEluZGV4KGxpc3QpO1xuXG4gICAgYWxsTGlzdHNbaW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XG5cbiAgICBzaG93TGlzdHMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbiAgICBzdG9yZURhdGEoKTtcbiAgICBcbn1cblxuY29uc3QgcmVtb3ZlTGlzdCA9IChpbmRleCkgPT4ge1xuICAgIGFsbExpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IGNyZWF0ZVJlbWluZGVyID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuLy9UT0RPIExvY2FsIFN0b3JhZ2VcblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMucHVzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbnNob3dSZW1pbmRlcnMoKTtcbnN0b3JlRGF0YSgpO1xuXG59O1xuXG5cbmNvbnN0IHVwZGF0ZVJlbWluZGVyID0gKHJlbWluZGVyLCBuZXdUaXRsZSwgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbmNvbnN0IGluZGV4ID0gZ2V0UmVtaW5kZXJJbmRleChyZW1pbmRlcik7XG5cblxuYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0udGl0bGUgPSBuZXdUaXRsZTtcbmFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLmR1ZURhdGUgPSBuZXdEYXRlO1xuYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuc2hvd1JlbWluZGVycygpO1xuc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IHJlbW92ZVJlbWluZGVyID0gKGluZGV4KSA9PiB7XG5cbiAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2hvd1JlbWluZGVycygpO1xuICAgIHN0b3JlRGF0YSgpO1xuXG59O1xuXG5jb25zdCBjaGVja1JlbWluZGVyID0gKGluZGV4LCByZW1pbmRlcikgPT4ge1xuXG4gICAgaWYgKHJlbWluZGVyLmNoZWNrZWQpe1xuICAgICAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgfVxuICAgIHNob3dSZW1pbmRlcnMoKTtcbiAgICBzdG9yZURhdGEoKTtcblxuXG59O1xuXG5mdW5jdGlvbiBnZXRQcmlvcml0eUNvbG9yKHByaW9yaXR5KXtcblxuICAgIHN3aXRjaChwcmlvcml0eSl7XG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgcmV0dXJuICctLWxvdy1wcmlvcml0eSc7XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgcmV0dXJuICctLW1lZGl1bS1wcmlvcml0eSc7XG4gICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgIHJldHVybiAnLS1oaWdoLXByaW9yaXR5JztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYmxhY2snO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVtaW5kZXJJbmRleChpdGVtKXtcbiAgICByZXR1cm4gYWN0aXZlTGlzdCgpLnJlbWluZGVycy5pbmRleE9mKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBnZXRMaXN0SW5kZXgobGlzdCl7XG4gICAgcmV0dXJuIGFsbExpc3RzLmluZGV4T2YobGlzdCk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlRGF0YSgpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVtaW5kZXJzJywgSlNPTi5zdHJpbmdpZnkoYWxsTGlzdHMpKTtcbn1cblxuXG5mdW5jdGlvbiBhY3RpdmVMaXN0KCl7XG4gICAgbGV0IGFjdGl2ZUxpc3RBcnJheSA9IGFsbExpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuYWN0aXZlKTtcbiAgICByZXR1cm4gYWN0aXZlTGlzdEFycmF5WzBdO1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3QsIGNyZWF0ZVJlbWluZGVyLCBhY3RpdmVMaXN0LCByZW1vdmVSZW1pbmRlciwgdXBkYXRlUmVtaW5kZXIsIGNoZWNrUmVtaW5kZXIsIHJlbW92ZUxpc3QsIHVwZGF0ZUxpc3QsIHN0b3JlRGF0YSwgZ2V0UHJpb3JpdHlDb2xvcn07IiwiaW1wb3J0IHsgYWxsTGlzdHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7XG4gICAgYWN0aXZlTGlzdCwgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXIsIHJlbW92ZVJlbWluZGVyLCB1cGRhdGVSZW1pbmRlciwgY2hlY2tSZW1pbmRlciwgcmVtb3ZlTGlzdCxcbiAgICB1cGRhdGVMaXN0LCBnZXRQcmlvcml0eUNvbG9yXG59IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IGVkaXRCdG5TcmMgZnJvbSAnLi9hc3NldHMvZWRpdC1yZWd1bGFyLnN2Zyc7XG5pbXBvcnQgcmVtb3ZlQnRuU3JjIGZyb20gJy4vYXNzZXRzL21pbnVzLWNpcmNsZS1zb2xpZC5zdmcnO1xuaW1wb3J0IGFkZExpc3RCdG5TcmMgZnJvbSAnLi9hc3NldHMvY2xpcGJvYXJkLWNoZWNrLXNvbGlkLnN2Zyc7XG5pbXBvcnQgYWRkUmVtaW5kZXJCdG5TcmMgZnJvbSAnLi9hc3NldHMvbGlzdC11bC1zb2xpZC5zdmcnO1xuXG5cbi8vIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuLy8gY29uc3Qgcm9vdFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlcyhyb290KTtcblxuY29uc3QgbGlzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGFpbmVyJyk7XG5jb25zdCBhY3RpdmVMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlJyk7XG5jb25zdCByZW1pbmRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWNvbnRhaW5lcicpO1xuXG5jb25zdCByZW1pbmRlck1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlbWluZGVyLWNvbnRhaW5lcicpO1xuY29uc3QgcmVtaW5kZXJGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItdGl0bGUnKTtcbmNvbnN0IHJlbWluZGVyTW9kYWxDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVJlbWluZGVyJyk7XG5cbmNvbnN0IGxpc3RNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saXN0LWNvbnRhaW5lcicpO1xuY29uc3QgbGlzdEZvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saXN0LXRpdGxlJyk7XG5jb25zdCBsaXN0TW9kYWxDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUxpc3QnKTtcblxuXG5cbmZ1bmN0aW9uIHNob3dMaXN0cygpIHtcbiAgICBjbGVhckxpc3RzKCk7XG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgICAgIGxpc3QuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEFjdGl2ZUxpc3QpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICAgICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1vcHRpb25zLWVkaXQnKTtcbiAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBlZGl0TGlzdEJ0bi5zcmMgPSBlZGl0QnRuU3JjO1xuICAgICAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRMaXN0Rm9ybSk7XG4gICAgICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBpdGVtO1xuXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3Qtb3B0aW9ucy1yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uc3JjID0gcmVtb3ZlQnRuU3JjO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdChpbmRleCk7XG4gICAgICAgICAgICBzaG93Rmlyc3RMaXN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vb3B0aW9ucyBjb250YWluZXJcblxuICAgICAgICBjb25zdCBsaXN0T3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGlzdE9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdExpc3RCdG4pO1xuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMaXN0QnRuKTtcblxuXG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnNDb250YWluZXIpO1xuXG5cbiAgICAgICAgbGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cbiAgICB9KTtcbiAgICBjb25zdCBsaXN0c0Zvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1mb290ZXInKTtcbiAgICBjb25zdCBhZGRMaXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdC1pY29uJyk7XG4gICAgYWRkTGlzdEljb24uc3JjID0gYWRkTGlzdEJ0blNyYztcbiAgICBsaXN0c0Zvb3RlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0xpc3RGb3JtKTtcblxufVxuXG5mdW5jdGlvbiBjbGVhckxpc3RzKCkge1xuICAgIGxpc3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5cblxuLy9UT0RPOiB0byB1c2Ugd2hlbmV2ZXIgYSBsaXN0IGlzIHJlbW92ZWRcbmZ1bmN0aW9uIHNob3dGaXJzdExpc3QoKSB7XG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUxpc3QobGlzdCkge1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlID09PSBsaXN0LmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2hvd1JlbWluZGVycygpO1xufVxuXG5mdW5jdGlvbiBzaG93TGlzdEhlYWRlcigpIHtcbiAgICBhY3RpdmVMaXN0TmFtZS5pbm5lclRleHQgPSBhY3RpdmVMaXN0KCkudGl0bGU7XG5cbn1cbi8vQWRkIExpc3QgTW9kYWwgZnVuY3Rpb24gYW5kIGxpc3RlbmVyc1xuZnVuY3Rpb24gbmV3TGlzdEZvcm0oKSB7XG4gICAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbGlzdCcpO1xuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNyZWF0ZUxpc3RCdG4uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgbGlzdEZvcm1UaXRsZS5pbm5lclRleHQgPSAnQWRkIGEgbmV3IExpc3QnO1xuICAgIGNyZWF0ZUxpc3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVMaXN0Rm9ybSk7XG4gICAgY3JlYXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcblxufVxuXG5mdW5jdGlvbiBlZGl0TGlzdEZvcm0oZXZ0KSB7XG4gICAgY29uc3QgbGlzdCA9IGV2dC5jdXJyZW50VGFyZ2V0Lmxpc3Q7XG4gICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWxpc3QnKTtcblxuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxpc3Rmb3JtLnRpdGxlLnZhbHVlID0gbGlzdC50aXRsZTtcbiAgICBsaXN0Rm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBMaXN0JztcbiAgICBlZGl0TGlzdEJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICBlZGl0TGlzdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcbiAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKVxuICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBsaXN0O1xuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKGV2dCkge1xuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgdGl0bGUgPSBsaXN0Zm9ybS50aXRsZS52YWx1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZUxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQubGlzdCwgdGl0bGUpO1xuXG4gICAgbGlzdGZvcm0ucmVzZXQoKTtcblxufVxuZnVuY3Rpb24gc3VibWl0TGlzdEZvcm0oKSB7XG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhbGxMaXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY3JlYXRlTGlzdChsaXN0Zm9ybS50aXRsZS52YWx1ZSk7XG4gICAgbGlzdGZvcm0ucmVzZXQoKTtcblxufVxuXG5cbmZ1bmN0aW9uIHNob3dSZW1pbmRlcnMoKSB7XG4gICAgY2xlYXJSZW1pbmRlcnMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuXG4gICAgaWYgKGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMubGVuZ3RoID09IDApe1xuXG4gICAgICAgIGNvbnN0IGVtcHR5VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL1RPRE86IGFkZCBjbGFzcywgbWFrZSBldmVudCB0aGF0IHBvcHMgdGhlIG5ldyByZW1pbmRlciBwYWdlLCBtYWtlIGl0IGNsaWNrYWJsZSBmcm9tIHRoZSB3aG9sZSBwYWdlXG4gICAgICAgIGVtcHR5Vmlldy5pbm5lclRleHQgPSBcImVtcHR5XCI7XG4gICAgICAgIHJlbWluZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVZpZXcpO1xuICAgIH1lbHNle1xuXG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVycy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG5cblxuICAgICAgICBjb25zdCByZW1pbmRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1jb250YWluZXInKTtcblxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLWNoZWNrbWFyaycpO1xuXG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXVuY2hlY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1pbmRlckNoZWNrQ2hhbmdlKTtcbiAgICAgICAgY2hlY2tib3guaW5kZXggPSBpbmRleDtcbiAgICAgICAgY2hlY2tib3gucmVtaW5kZXIgPSBpdGVtO1xuXG5cbiAgICAgICAgY29uc3QgcmVtaW5kZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlckxhYmVsLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cblxuICAgICAgICBjb25zdCByZW1pbmRlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJEZXRhaWxzLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgcmVtaW5kZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLWRldGFpbHMnKTtcbiAgICAgICAgcmVtaW5kZXJEZXRhaWxzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFByaW9yaXR5Q29sb3IoaXRlbS5wcmlvcml0eSk7IC8vdG9kbyBub3Qgd29ya2luZ1xuICAgICAgICAvL1RPRE86IGdldCBwcmlvcml0eSBjb2xvciAoZnVuYyksIHNldCBjb2xvciBhcyB2YXJpYWJsZSBmb3IgYmFja2dyb3VuZCBvZiBkYXRlXG5cbiAgICAgICAgcmVtaW5kZXJMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIHJlbWluZGVyTGFiZWwuYXBwZW5kQ2hpbGQocmVtaW5kZXJEZXRhaWxzKTtcblxuICAgICAgICBjb25zdCByZW1pbmRlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLWluZm8tY29udGFpbmVyJyk7XG4gICAgICAgIHJlbWluZGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckxhYmVsKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1lZGl0Jyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBlZGl0QnRuLnNyYyA9IGVkaXRCdG5TcmM7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UmVtaW5kZXJGb3JtKTtcbiAgICAgICAgZWRpdEJ0bi5yZW1pbmRlciA9IGl0ZW07XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1vcHRpb25zLXJlbW92ZScpO1xuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICByZW1vdmVCdG4uc3JjID0gcmVtb3ZlQnRuU3JjO1xuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVSZW1pbmRlcihpbmRleCwgaXRlbS50aXRsZSwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1pbmRlck9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyJyk7XG4gICAgICAgIHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgcmVtaW5kZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJJbmZvQ29udGFpbmVyKTtcbiAgICAgICAgcmVtaW5kZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJPcHRpb25zQ29udGFpbmVyKTtcblxuICAgICAgICByZW1pbmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJDb250YWluZXIpO1xuICAgIH0pXG5cbn1cblxuICAgIGNvbnN0IHJlbWluZGVyc0Zvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtZm9vdGVyJyk7XG4gICAgY29uc3QgYWRkUmVtaW5kZXJCdG5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1yZW1pbmRlci1pY29uJyk7XG4gICAgYWRkUmVtaW5kZXJCdG5JY29uLnNyYyA9IGFkZFJlbWluZGVyQnRuU3JjO1xuICAgIHJlbWluZGVyc0Zvb3RlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1JlbWluZGVyRm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmVtaW5kZXJzKCkge1xuICAgIHJlbWluZGVyc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuLy9BZGQgUmVtaW5kZXIgTW9kYWwgZnVuY3Rpb25zIGFuZCBsaXN0ZW5lcnNcbmZ1bmN0aW9uIG5ld1JlbWluZGVyRm9ybSgpIHtcbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNyZWF0ZVJlbWluZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdBZGQgYSBuZXcgUmVtaW5kZXInO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlci1kYXRlcGlja2VyJykudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKTtcbiAgICBjcmVhdGVSZW1pbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFJlbWluZGVyRm9ybSlcblxufVxuXG5mdW5jdGlvbiBlZGl0UmVtaW5kZXJGb3JtKGV2dCkge1xuXG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IHJlbWluZGVyID0gZXZ0LmN1cnJlbnRUYXJnZXQucmVtaW5kZXI7XG4gICAgY29uc3QgdXBkYXRlUmVtaW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJlbWluZGVyJyk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRSZW1pbmRlckZvcm0pO1xuICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBSZW1pbmRlcic7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4uaW5uZXJUZXh0ID0gJ1VwZGF0ZSc7XG4gICAgcmVtaW5kZXJmb3JtLnRpdGxlLnZhbHVlID0gcmVtaW5kZXIudGl0bGU7XG4gICAgcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZSA9IHJlbWluZGVyLmR1ZURhdGU7XG4gICAgcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlID0gcmVtaW5kZXIucHJpb3JpdHk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVSZW1pbmRlckZvcm0pO1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLnJlbWluZGVyID0gcmVtaW5kZXI7XG5cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRSZW1pbmRlckZvcm0oKSB7XG5cbiAgICBjb25zb2xlLmxvZyhyZW1pbmRlcmZvcm0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNyZWF0ZVJlbWluZGVyKHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZSwgcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZSwgcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICByZW1pbmRlcmZvcm0ucmVzZXQoKTtcblxufVxuXG5mdW5jdGlvbiBzdWJtaXRVcGRhdGVSZW1pbmRlckZvcm0oZXZ0KSB7XG5cbiAgICBjb25zdCB0aXRsZSA9IHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlUmVtaW5kZXIoZXZ0LmN1cnJlbnRUYXJnZXQucmVtaW5kZXIsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuLy9jaGVja2JveCBjaGFuZ2UgZnVuY3Rpb25cblxuZnVuY3Rpb24gcmVtaW5kZXJDaGVja0NoYW5nZShldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGV2dC5jdXJyZW50VGFyZ2V0LmluZGV4O1xuICAgIGNoZWNrUmVtaW5kZXIoaW5kZXgsIGV2dC5jdXJyZW50VGFyZ2V0LnJlbWluZGVyKTtcblxufVxuXG4vLyBzaGFyZWQgbW9kYWwgZnVuY3Rpb25zXG5yZW1pbmRlck1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbmxpc3RNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxpc3RNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxpc3Rmb3JtLnJlc2V0KCk7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUmVtaW5kZXJzTW9kYWwoKSB7XG4gICAgLy9UT0RPXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxpc3RzTW9kYWwoKSB7XG4gICAgLy9UT0RPXG59XG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gcmVtaW5kZXJNb2RhbENvbnRhaW5lciB8fCBldmVudC50YXJnZXQgPT0gbGlzdE1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBzaG93TGlzdHMsIHNob3dSZW1pbmRlcnMgLCBzaG93Rmlyc3RMaXN0LCBzaG93TGlzdEhlYWRlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==