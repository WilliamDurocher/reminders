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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: grey;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: #333;\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 30px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n\n\n\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a grey background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: #2196F3;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: #eee;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover {\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n.modal-reminder-container {\n  display: block;\n}\n\n.modal-reminder {\n\n  background-color: #cfcfcf;\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn {\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: #2196F3;\n  font-size: 21px;\n}\n\nbutton:hover {\n  cursor: pointer;\n\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: #2196F3;\n  background-color: #cfcfcf;\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n\n  height: 50px;\n}\n\n.modal-list {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 800px;\n  height: 350px;\n\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-list-close, .modal-reminder-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 35px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container .radio:hover{\n  cursor: pointer;\n  /*Todo: animation that changes the background color to the priority color and text color white*/\n}\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: green;\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: rgb(230, 179, 13);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: red;\n  color: white;\n\n}\n\n.low{\n  color: green;\n  border: 1px solid green;\n\n}\n\n.medium{\n  color: rgb(230, 179, 13);\n  border: 1px solid rgb(230, 179, 13);\n\n}\n\n.high{\n  color: red;\n  border: 1px solid red;\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.list-container:hover img {\n  display: block;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #2196F3;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: #2196F3;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: #2196F3;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: grey;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: #333;\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 30px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n\n\n\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a grey background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: #2196F3;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: #eee;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover {\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(5px);\n  overflow: auto;\n  transition: all 0.5s linear;\n  -webkit-transition: all 0.5s linear;\n}\n\n.modal-reminder-container {\n  display: block;\n}\n\n.modal-reminder {\n\n  background-color: #cfcfcf;\n  margin: auto;\n  padding: 30px;\n  border-radius: 30px;\n  max-width: 450px;\n  height: 500px;\n}\n\n.modal-reminder-title {\n  text-align: center;\n  padding-bottom: 80px;\n}\n\n.modal-reminder-btn {\n  width: 150px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: #2196F3;\n  font-size: 21px;\n}\n\nbutton:hover {\n  cursor: pointer;\n\n}\n\n#textInput input {\n  height: 30px;\n  width: 300px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: groove;\n  border-bottom-color: #2196F3;\n  background-color: #cfcfcf;\n}\n\n#textInput input:hover {\n  outline: none;\n}\n\n#textInput p {\n\n  height: 50px;\n}\n\n.modal-list {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 800px;\n  height: 350px;\n\n}\n\n.modal-content {\n  text-align: center;\n}\n\n.modal-list-close, .modal-reminder-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.priority-container {\n  display: flex;\n  justify-content: center;\n  gap: 35px;\n  padding-bottom: 20px;\n}\n\n.priority-container .low, .medium, .high {\n  width: 80px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 7px;\n}\n\n.priority-container .radio:hover{\n  cursor: pointer;\n  /*Todo: animation that changes the background color to the priority color and text color white*/\n}\n.priority-container input[type=radio] {\n  display:none ;\n}\n\n.priority-container input[type=radio]:checked + .low{\n  background-color: green;\n  color: white;\n}\n.priority-container input[type=radio]:checked + .medium{\n  background-color: rgb(230, 179, 13);\n  color: white;\n\n}\n.priority-container input[type=radio]:checked + .high{\n  background-color: red;\n  color: white;\n\n}\n\n.low{\n  color: green;\n  border: 1px solid green;\n\n}\n\n.medium{\n  color: rgb(230, 179, 13);\n  border: 1px solid rgb(230, 179, 13);\n\n}\n\n.high{\n  color: red;\n  border: 1px solid red;\n\n}\n\n.reminder-container:hover img {\n  display: block;\n}\n\n.list-container:hover img {\n  display: block;\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #2196F3;\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: #2196F3;\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: #2196F3;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "storeData": () => (/* binding */ storeData)
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









const listsContainer = document.querySelector('.lists-container');
const activeListName = document.querySelector('.reminders-header-title');
const remindersContainer = document.querySelector('.reminders-container');

const reminderModalContainer = document.querySelector('.modal-reminder-container');
const reminderFormTitle = document.querySelector('.modal-reminder-title');
const reminderModalClose = document.querySelector('.modal-reminder-close');

const listModalContainer = document.querySelector('.modal-list-container');
const listFormTitle = document.querySelector('.modal-list-title');
const listModalClose = document.querySelector('.modal-list-close');



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
        reminderLabel.appendChild(checkbox);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQWE7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLyoqKiBOQVZJR1VBVElPTiBCQVIgKioqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuXFxufVxcblxcbi5uYXYtbWVudSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG5cXG59XFxuXFxuXFxuLm5hdi1tZW51Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qKiogQVBQTElDQVRJT04gQk9EWSAqKiovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyoqKiBMSVNUUyBTSURFIE1FTlUgKioqL1xcblxcbi5zaWRlLW1lbnUge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcblxcbn1cXG5cXG4ubGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qdG9kbzogaWNvbiAqL1xcbi5saXN0LW9wdGlvbnMtcmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtZWRpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQUNUSVZFIExJU1QgLyBSRU1JTkRFUlMgVklFVyAqL1xcblxcbi5tYWluLW1lbnUge1xcbiAgd2lkdGg6IDc4JTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcblxcbn1cXG5cXG4vKioqIEFDVElWRSBMSVNUIEhFQURFUiAqKiovXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKlxcblRPRE86IGhlYWRlciBzZXR0aW5ncyA/XFxuKi9cXG5cXG4vKioqIFJFTUlOREVSUyBWSUVXICoqKi9cXG5cXG4ucmVtaW5kZXJzLWNvbnRhaW5lciB7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqIFJFTUlOREVSICoqKi9cXG5cXG4ucmVtaW5kZXItaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuXFxuXFxuXFxuXFxufVxcblxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbi5yZW1pbmRlci1jaGVja21hcms6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uY2hlY2tib3gtY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hlY2tib3gtdW5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuXFxuXFxuLyoqKiBMSVNUUyBWSUVXIC8gUkVNSU5ERVJTIFZJRVcgRk9PVEVSUyAqKiovXFxuXFxuLnJlbWluZGVycy1mb290ZXIsIC5saXN0cy1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA1JTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4vKlxcbi5uZXctcmVtaW5kZXJ7XFxuXFxufVxcblxcbi5uZXctbGlzdHtcXG5cXG59XFxuKi9cXG4ubmV3LXJlbWluZGVyOmhvdmVyLCAubmV3LWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKioqIExJU1RTIC8gUkVNSU5ERVJTIE1PREFMcyAqKiovXFxuXFxuLm1vZGFsLXJlbWluZGVyLWNvbnRhaW5lciwgLm1vZGFsLWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlciB7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZjZmNmO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXItYnRuIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGdyb292ZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyMTk2RjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZjZmNmO1xcbn1cXG5cXG4jdGV4dElucHV0IGlucHV0OmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0ZXh0SW5wdXQgcCB7XFxuXFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tb2RhbC1saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcblxcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1saXN0LWNsb3NlLCAubW9kYWwtcmVtaW5kZXItY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuXFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDM1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubG93LCAubWVkaXVtLCAuaGlnaCB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5yYWRpbzpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qVG9kbzogYW5pbWF0aW9uIHRoYXQgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgcHJpb3JpdHkgY29sb3IgYW5kIHRleHQgY29sb3Igd2hpdGUqL1xcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGRpc3BsYXk6bm9uZSA7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5sb3d7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLm1lZGl1bXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDE3OSwgMTMpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuaGlnaHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmxvd3tcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcblxcbn1cXG5cXG4ubWVkaXVte1xcbiAgY29sb3I6IHJnYigyMzAsIDE3OSwgMTMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMCwgMTc5LCAxMyk7XFxuXFxufVxcblxcbi5oaWdoe1xcbiAgY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG5cXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lcjpob3ZlciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gIGNvbG9yOiAjMjE5NkYzO1xcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOiAjMjE5NkYzO1xcbn1cXG5cXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogIzIxOTZGMztcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULDBEQUEwRDs7QUFFNUQ7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTs7QUFFakI7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjs7QUFFN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7Ozs7O0FBTUEsaUNBQWlDOztBQUVqQztFQUNFLFVBQVU7RUFDVix1QkFBdUI7O0FBRXpCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVzs7QUFFYjs7QUFF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RUFDbkMsWUFBWTs7QUFFZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7O0FBRXJDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0IseUNBQXlDO0VBQ3ZELGNBQWM7RUFDZCxVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQSx5QkFBeUIsNEJBQTRCO0VBQ25ELGNBQWM7QUFDaEI7O0FBRUEsMEJBQTBCLG1CQUFtQjtFQUMzQyxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbi8qKiogTkFWSUdVQVRJT04gQkFSICoqKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcblxcbn1cXG5cXG4ubmF2LW1lbnUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcblxcbi5uYXYtbWVudTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4vKioqIEFQUExJQ0FUSU9OIEJPRFkgKioqL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qKiogTElTVFMgU0lERSBNRU5VICoqKi9cXG5cXG4uc2lkZS1tZW51IHtcXG4gIHdpZHRoOiAyMiU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG59XFxuXFxuLmxpc3Qge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKnRvZG86IGljb24gKi9cXG4ubGlzdC1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcbi8qIEFDVElWRSBMSVNUIC8gUkVNSU5ERVJTIFZJRVcgKi9cXG5cXG4ubWFpbi1tZW51IHtcXG4gIHdpZHRoOiA3OCU7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG5cXG59XFxuXFxuLyoqKiBBQ1RJVkUgTElTVCBIRUFERVIgKioqL1xcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLypcXG5UT0RPOiBoZWFkZXIgc2V0dGluZ3MgP1xcbiovXFxuXFxuLyoqKiBSRU1JTkRFUlMgVklFVyAqKiovXFxuXFxuLnJlbWluZGVycy1jb250YWluZXIge1xcblxcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyoqKiBSRU1JTkRFUiAqKiovXFxuXFxuLnJlbWluZGVyLWluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG4ucmVtaW5kZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcblxcblxcblxcblxcbn1cXG5cXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbi5yZW1pbmRlci1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4ucmVtaW5kZXItY2hlY2ttYXJrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmNoZWNrYm94LWNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrYm94LXVuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtZWRpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtcmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcblxcblxcbi8qKiogTElTVFMgVklFVyAvIFJFTUlOREVSUyBWSUVXIEZPT1RFUlMgKioqL1xcblxcbi5yZW1pbmRlcnMtZm9vdGVyLCAubGlzdHMtZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLypcXG4ubmV3LXJlbWluZGVye1xcblxcbn1cXG5cXG4ubmV3LWxpc3R7XFxuXFxufVxcbiovXFxuLm5ldy1yZW1pbmRlcjpob3ZlciwgLm5ldy1saXN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTHMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtcmVtaW5kZXIge1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuLm1vZGFsLXJlbWluZGVyLWJ0biB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjE5NkYzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjtcXG59XFxuXFxuI3RleHRJbnB1dCBpbnB1dDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGV4dElucHV0IHAge1xcblxcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubW9kYWwtbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG5cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtbGlzdC1jbG9zZSwgLm1vZGFsLXJlbWluZGVyLWNsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcblxcbmltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmxvdywgLm1lZGl1bSwgLmhpZ2gge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAucmFkaW86aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKlRvZG86IGFuaW1hdGlvbiB0aGF0IGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHByaW9yaXR5IGNvbG9yIGFuZCB0ZXh0IGNvbG9yIHdoaXRlKi9cXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5Om5vbmUgO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAubG93e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5tZWRpdW17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAxNzksIDEzKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmhpZ2h7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5sb3d7XFxuICBjb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG5cXG59XFxuXFxuLm1lZGl1bXtcXG4gIGNvbG9yOiByZ2IoMjMwLCAxNzksIDEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzAsIDE3OSwgMTMpO1xcblxcbn1cXG5cXG4uaGlnaHtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuXFxufVxcblxcbi5yZW1pbmRlci1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6aG92ZXIgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICBjb2xvcjogIzIxOTZGMztcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXFxuICBjb2xvcjogIzIxOTZGMztcXG59XFxuXFxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgY29sb3I6ICMyMTk2RjM7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciB9IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IHsgc2hvd0xpc3RzLCBzaG93UmVtaW5kZXJzLCBzaG93Rmlyc3RMaXN0fSBmcm9tICcuL3VpJztcblxubGV0IGFsbExpc3RzID0gW107XG5cblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtaW5kZXJzJykpIHtcbiAgICBjcmVhdGVMaXN0KFwiTmV3IExpc3RcIik7XG4gICAgY3JlYXRlUmVtaW5kZXIoJ015IG5ldyByZW1pbmRlcicsICcyMDIxLTEyLTMxJywgJ2xvdycpO1xufWVsc2V7XG4gICAgYWxsTGlzdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtaW5kZXJzJykpO1xuICAgIGNvbnNvbGUubG9nKGFsbExpc3RzKVxuICAgIHNob3dMaXN0cygpO1xuICAgIHNob3dGaXJzdExpc3QoKTtcbn1cblxuXG5cbmV4cG9ydCB7IGFsbExpc3RzIH07IiwiaW1wb3J0IHsgYWxsTGlzdHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7c2hvd0xpc3RzLCBzaG93TGlzdEhlYWRlciwgc2hvd1JlbWluZGVyc30gZnJvbSAnLi91aSc7XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAodGl0bGUpID0+IHtcblxuICAgIGFsbExpc3RzLnB1c2goe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgcmVtaW5kZXJzOiBbXSxcbiAgICAgICAgYWN0aXZlOiBhbGxMaXN0cy5zaXplID4gMSA/IGZhbHNlOiB0cnVlLFxuICAgIH0pO1xuICAgIHNob3dMaXN0cygpO1xuICAgIHNob3dMaXN0SGVhZGVyKCk7XG4gICAgc2hvd1JlbWluZGVycygpO1xuICAgIHN0b3JlRGF0YSgpO1xuXG59O1xuXG5jb25zdCB1cGRhdGVMaXN0ID0gKGxpc3QsIG5ld1RpdGxlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBnZXRMaXN0SW5kZXgobGlzdCk7XG5cbiAgICBhbGxMaXN0c1tpbmRleF0udGl0bGUgPSBuZXdUaXRsZTtcblxuICAgIHNob3dMaXN0cygpO1xuICAgIHNob3dMaXN0SGVhZGVyKCk7XG4gICAgc2hvd1JlbWluZGVycygpO1xuICAgIHN0b3JlRGF0YSgpO1xuICAgIFxufVxuXG5jb25zdCByZW1vdmVMaXN0ID0gKGluZGV4KSA9PiB7XG4gICAgYWxsTGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzaG93TGlzdHMoKTtcbiAgICBzdG9yZURhdGEoKTtcblxufTtcblxuY29uc3QgY3JlYXRlUmVtaW5kZXIgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4vL1RPRE8gTG9jYWwgU3RvcmFnZVxuXG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVycy5wdXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuc2hvd1JlbWluZGVycygpO1xuc3RvcmVEYXRhKCk7XG5cbn07XG5cblxuY29uc3QgdXBkYXRlUmVtaW5kZXIgPSAocmVtaW5kZXIsIG5ld1RpdGxlLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuY29uc3QgaW5kZXggPSBnZXRSZW1pbmRlckluZGV4KHJlbWluZGVyKTtcblxuXG5hY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uZHVlRGF0ZSA9IG5ld0RhdGU7XG5hY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG5zaG93UmVtaW5kZXJzKCk7XG5zdG9yZURhdGEoKTtcblxufTtcblxuY29uc3QgcmVtb3ZlUmVtaW5kZXIgPSAoaW5kZXgpID0+IHtcblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IGNoZWNrUmVtaW5kZXIgPSAoaW5kZXgsIHJlbWluZGVyKSA9PiB7XG5cbiAgICBpZiAocmVtaW5kZXIuY2hlY2tlZCl7XG4gICAgICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uY2hlY2tlZCA9IHRydWU7XG5cbiAgICB9XG4gICAgc2hvd1JlbWluZGVycygpO1xuICAgIHN0b3JlRGF0YSgpO1xuXG5cbn07XG5cbmZ1bmN0aW9uIGdldFJlbWluZGVySW5kZXgoaXRlbSl7XG4gICAgcmV0dXJuIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMuaW5kZXhPZihpdGVtKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlzdEluZGV4KGxpc3Qpe1xuICAgIHJldHVybiBhbGxMaXN0cy5pbmRleE9mKGxpc3QpO1xufVxuXG5mdW5jdGlvbiBzdG9yZURhdGEoKXtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbWluZGVycycsIEpTT04uc3RyaW5naWZ5KGFsbExpc3RzKSk7XG59XG5cblxuZnVuY3Rpb24gYWN0aXZlTGlzdCgpe1xuICAgIGxldCBhY3RpdmVMaXN0QXJyYXkgPSBhbGxMaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0LmFjdGl2ZSk7XG4gICAgcmV0dXJuIGFjdGl2ZUxpc3RBcnJheVswXTtcbn1cblxuZXhwb3J0IHtjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciwgYWN0aXZlTGlzdCwgcmVtb3ZlUmVtaW5kZXIsIHVwZGF0ZVJlbWluZGVyLCBjaGVja1JlbWluZGVyLCByZW1vdmVMaXN0LCB1cGRhdGVMaXN0LCBzdG9yZURhdGF9OyIsImltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge1xuICAgIGFjdGl2ZUxpc3QsIGNyZWF0ZUxpc3QsIGNyZWF0ZVJlbWluZGVyLCByZW1vdmVSZW1pbmRlciwgdXBkYXRlUmVtaW5kZXIsIGNoZWNrUmVtaW5kZXIsIHJlbW92ZUxpc3QsXG4gICAgdXBkYXRlTGlzdFxufSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCBlZGl0QnRuU3JjIGZyb20gJy4vYXNzZXRzL2VkaXQtcmVndWxhci5zdmcnO1xuaW1wb3J0IHJlbW92ZUJ0blNyYyBmcm9tICcuL2Fzc2V0cy9taW51cy1jaXJjbGUtc29saWQuc3ZnJztcbmltcG9ydCBhZGRMaXN0QnRuU3JjIGZyb20gJy4vYXNzZXRzL2NsaXBib2FyZC1jaGVjay1zb2xpZC5zdmcnO1xuaW1wb3J0IGFkZFJlbWluZGVyQnRuU3JjIGZyb20gJy4vYXNzZXRzL2xpc3QtdWwtc29saWQuc3ZnJztcblxuXG5cbmNvbnN0IGxpc3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzLWNvbnRhaW5lcicpO1xuY29uc3QgYWN0aXZlTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWhlYWRlci10aXRsZScpO1xuY29uc3QgcmVtaW5kZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWluZGVycy1jb250YWluZXInKTtcblxuY29uc3QgcmVtaW5kZXJNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1yZW1pbmRlci1jb250YWluZXInKTtcbmNvbnN0IHJlbWluZGVyRm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlbWluZGVyLXRpdGxlJyk7XG5jb25zdCByZW1pbmRlck1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItY2xvc2UnKTtcblxuY29uc3QgbGlzdE1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxpc3QtY29udGFpbmVyJyk7XG5jb25zdCBsaXN0Rm9ybVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxpc3QtdGl0bGUnKTtcbmNvbnN0IGxpc3RNb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxpc3QtY2xvc2UnKTtcblxuXG5cbmZ1bmN0aW9uIHNob3dMaXN0cygpIHtcbiAgICBjbGVhckxpc3RzKCk7XG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgICAgIGxpc3QuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEFjdGl2ZUxpc3QpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICAgICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1vcHRpb25zLWVkaXQnKTtcbiAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBlZGl0TGlzdEJ0bi5zcmMgPSBlZGl0QnRuU3JjO1xuICAgICAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRMaXN0Rm9ybSk7XG4gICAgICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBpdGVtO1xuXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3Qtb3B0aW9ucy1yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uc3JjID0gcmVtb3ZlQnRuU3JjO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdChpbmRleCk7XG4gICAgICAgICAgICBzaG93Rmlyc3RMaXN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vb3B0aW9ucyBjb250YWluZXJcblxuICAgICAgICBjb25zdCBsaXN0T3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGlzdE9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdExpc3RCdG4pO1xuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVMaXN0QnRuKTtcblxuXG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnNDb250YWluZXIpO1xuXG5cbiAgICAgICAgbGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cbiAgICB9KTtcbiAgICBjb25zdCBsaXN0c0Zvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1mb290ZXInKTtcbiAgICBjb25zdCBhZGRMaXN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdC1pY29uJyk7XG4gICAgYWRkTGlzdEljb24uc3JjID0gYWRkTGlzdEJ0blNyYztcbiAgICBsaXN0c0Zvb3RlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0xpc3RGb3JtKTtcblxufVxuXG5mdW5jdGlvbiBjbGVhckxpc3RzKCkge1xuICAgIGxpc3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG5cblxuLy9UT0RPOiB0byB1c2Ugd2hlbmV2ZXIgYSBsaXN0IGlzIHJlbW92ZWRcbmZ1bmN0aW9uIHNob3dGaXJzdExpc3QoKSB7XG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUxpc3QobGlzdCkge1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlID09PSBsaXN0LmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2hvd1JlbWluZGVycygpO1xufVxuXG5mdW5jdGlvbiBzaG93TGlzdEhlYWRlcigpIHtcbiAgICBhY3RpdmVMaXN0TmFtZS5pbm5lclRleHQgPSBhY3RpdmVMaXN0KCkudGl0bGU7XG5cbn1cbi8vQWRkIExpc3QgTW9kYWwgZnVuY3Rpb24gYW5kIGxpc3RlbmVyc1xuZnVuY3Rpb24gbmV3TGlzdEZvcm0oKSB7XG4gICAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbGlzdCcpO1xuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNyZWF0ZUxpc3RCdG4uaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgbGlzdEZvcm1UaXRsZS5pbm5lclRleHQgPSAnQWRkIGEgbmV3IExpc3QnO1xuICAgIGNyZWF0ZUxpc3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVMaXN0Rm9ybSk7XG4gICAgY3JlYXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcblxufVxuXG5mdW5jdGlvbiBlZGl0TGlzdEZvcm0oZXZ0KSB7XG4gICAgY29uc3QgbGlzdCA9IGV2dC5jdXJyZW50VGFyZ2V0Lmxpc3Q7XG4gICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWxpc3QnKTtcblxuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxpc3Rmb3JtLnRpdGxlLnZhbHVlID0gbGlzdC50aXRsZTtcbiAgICBsaXN0Rm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBMaXN0JztcbiAgICBlZGl0TGlzdEJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICBlZGl0TGlzdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcbiAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKVxuICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBsaXN0O1xuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKGV2dCkge1xuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgdGl0bGUgPSBsaXN0Zm9ybS50aXRsZS52YWx1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZUxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQubGlzdCwgdGl0bGUpO1xuXG4gICAgbGlzdGZvcm0ucmVzZXQoKTtcblxufVxuZnVuY3Rpb24gc3VibWl0TGlzdEZvcm0oKSB7XG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhbGxMaXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY3JlYXRlTGlzdChsaXN0Zm9ybS50aXRsZS52YWx1ZSk7XG4gICAgbGlzdGZvcm0ucmVzZXQoKTtcblxufVxuXG5cbmZ1bmN0aW9uIHNob3dSZW1pbmRlcnMoKSB7XG4gICAgY2xlYXJSZW1pbmRlcnMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuXG5cbiAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cblxuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbWluZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLWNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItY2hlY2ttYXJrJyk7XG5cbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtdW5jaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbWluZGVyQ2hlY2tDaGFuZ2UpO1xuICAgICAgICBjaGVja2JveC5pbmRleCA9IGluZGV4O1xuICAgICAgICBjaGVja2JveC5yZW1pbmRlciA9IGl0ZW07XG5cblxuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJMYWJlbC5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgICAgICByZW1pbmRlckxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCByZW1pbmRlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLWluZm8tY29udGFpbmVyJyk7XG4gICAgICAgIHJlbWluZGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckxhYmVsKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1lZGl0Jyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBlZGl0QnRuLnNyYyA9IGVkaXRCdG5TcmM7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UmVtaW5kZXJGb3JtKTtcbiAgICAgICAgZWRpdEJ0bi5yZW1pbmRlciA9IGl0ZW07XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1vcHRpb25zLXJlbW92ZScpO1xuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICByZW1vdmVCdG4uc3JjID0gcmVtb3ZlQnRuU3JjO1xuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVSZW1pbmRlcihpbmRleCwgaXRlbS50aXRsZSwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1pbmRlck9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyJyk7XG4gICAgICAgIHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgcmVtaW5kZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJJbmZvQ29udGFpbmVyKTtcbiAgICAgICAgcmVtaW5kZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJPcHRpb25zQ29udGFpbmVyKTtcblxuICAgICAgICByZW1pbmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXJDb250YWluZXIpO1xuICAgIH0pXG5cbiAgICBjb25zdCByZW1pbmRlcnNGb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWZvb3RlcicpO1xuICAgIGNvbnN0IGFkZFJlbWluZGVyQnRuSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcmVtaW5kZXItaWNvbicpO1xuICAgIGFkZFJlbWluZGVyQnRuSWNvbi5zcmMgPSBhZGRSZW1pbmRlckJ0blNyYztcbiAgICByZW1pbmRlcnNGb290ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdSZW1pbmRlckZvcm0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclJlbWluZGVycygpIHtcbiAgICByZW1pbmRlcnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8vQWRkIFJlbWluZGVyIE1vZGFsIGZ1bmN0aW9ucyBhbmQgbGlzdGVuZXJzXG5mdW5jdGlvbiBuZXdSZW1pbmRlckZvcm0oKSB7XG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBjcmVhdGVSZW1pbmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcmVtaW5kZXInKTtcbiAgICByZW1pbmRlckZvcm1UaXRsZS5pbm5lclRleHQgPSAnQWRkIGEgbmV3IFJlbWluZGVyJztcbiAgICBjcmVhdGVSZW1pbmRlckJ0bi5pbm5lclRleHQgPSAnQWRkJztcbiAgICBjcmVhdGVSZW1pbmRlckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZVJlbWluZGVyRm9ybSk7XG4gICAgY3JlYXRlUmVtaW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRSZW1pbmRlckZvcm0pXG5cbn1cblxuZnVuY3Rpb24gZWRpdFJlbWluZGVyRm9ybShldnQpIHtcblxuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBjb25zdCByZW1pbmRlciA9IGV2dC5jdXJyZW50VGFyZ2V0LnJlbWluZGVyO1xuICAgIGNvbnN0IHVwZGF0ZVJlbWluZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UmVtaW5kZXJGb3JtKTtcbiAgICByZW1pbmRlckZvcm1UaXRsZS5pbm5lclRleHQgPSAnVXBkYXRlIHRoaXMgUmVtaW5kZXInO1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLmlubmVyVGV4dCA9ICdVcGRhdGUnO1xuICAgIHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZSA9IHJlbWluZGVyLnRpdGxlO1xuICAgIHJlbWluZGVyZm9ybS5kdWUudmFsdWUgPSByZW1pbmRlci5kdWVEYXRlO1xuICAgIHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZSA9IHJlbWluZGVyLnByaW9yaXR5O1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKTtcbiAgICB1cGRhdGVSZW1pbmRlckJ0bi5yZW1pbmRlciA9IHJlbWluZGVyO1xuXG5cbn1cblxuZnVuY3Rpb24gc3VibWl0UmVtaW5kZXJGb3JtKCkge1xuXG4gICAgY29uc29sZS5sb2cocmVtaW5kZXJmb3JtKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjcmVhdGVSZW1pbmRlcihyZW1pbmRlcmZvcm0udGl0bGUudmFsdWUsIHJlbWluZGVyZm9ybS5kdWUudmFsdWUsIHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZSk7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKGV2dCkge1xuXG4gICAgY29uc3QgdGl0bGUgPSByZW1pbmRlcmZvcm0udGl0bGUudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHJlbWluZGVyZm9ybS5kdWUudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSByZW1pbmRlcmZvcm0ucHJpb3JpdHkudmFsdWU7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZVJlbWluZGVyKGV2dC5jdXJyZW50VGFyZ2V0LnJlbWluZGVyLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJlbWluZGVyZm9ybS5yZXNldCgpO1xuXG59XG5cbi8vY2hlY2tib3ggY2hhbmdlIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHJlbWluZGVyQ2hlY2tDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSBldnQuY3VycmVudFRhcmdldC5pbmRleDtcbiAgICBjaGVja1JlbWluZGVyKGluZGV4LCBldnQuY3VycmVudFRhcmdldC5yZW1pbmRlcik7XG5cbn1cblxuLy8gc2hhcmVkIG1vZGFsIGZ1bmN0aW9uc1xucmVtaW5kZXJNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5saXN0TW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuICAgIHJlbWluZGVyZm9ybS5yZXNldCgpO1xuXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlbWluZGVyc01vZGFsKCkge1xuICAgIC8vVE9ET1xufVxuXG5mdW5jdGlvbiB0b2dnbGVMaXN0c01vZGFsKCkge1xuICAgIC8vVE9ET1xufVxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHJlbWluZGVyTW9kYWxDb250YWluZXIgfHwgZXZlbnQudGFyZ2V0ID09IGxpc3RNb2RhbENvbnRhaW5lcikge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgc2hvd0xpc3RzLCBzaG93UmVtaW5kZXJzICwgc2hvd0ZpcnN0TGlzdCwgc2hvd0xpc3RIZWFkZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=