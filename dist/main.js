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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: grey;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: #333;\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n.nav-menu:active {\n  background-color: red;\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 30px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n\n\n\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a grey background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: #2196F3;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: #eee;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover{\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.5s;\n  overflow: auto;\n  transition: all 0.3s linear;\n}\n\n.modal-reminder, .modal-list {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 800px;\n  height: 350px;\n\n}\n\n.modal-list-close, .modal-reminder-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.reminder-container:hover img{\n  display: block;\n}\n\n.list-container:hover img{\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,0DAA0D;;AAE5D;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;;AAExB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;;AAEjB;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA,wBAAwB;;AAExB;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;;AAE7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,cAAc;AACd;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;;;;;AAMA,iCAAiC;;AAEjC;EACE,UAAU;EACV,uBAAuB;;AAEzB;;AAEA,2BAA2B;AAC3B;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;;AAEb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;;CAEC;;AAED,uBAAuB;;AAEvB;;EAEE,aAAa;AACf;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;;AAEnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;;;;;AAKjB;;AAEA,wCAAwC;AACxC;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,SAAS;EACT,QAAQ;AACV;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,+CAA+C;AAC/C;EACE,eAAe;AACjB;;;AAGA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;;AAEf;;;;AAIA,4CAA4C;;AAE5C;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;;;;;;CAQC;AACD;EACE,eAAe;AACjB;;;AAGA,iCAAiC;;AAEjC;EACE,aAAa;EACb,eAAe;EACf,OAAO;EACP,MAAM;EACN,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,oCAAoC;EACpC,wBAAwB;EACxB,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;;AAEf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["body {\n  background-color: grey;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: #333;\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n.nav-menu:active {\n  background-color: red;\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n}\n\n/*todo: icon */\n.list-options-remove {\n  display: none;\n}\n\n.list-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 30px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n\n.reminder-info-container {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n}\n\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 22px;\n\n\n\n\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a grey background color */\n.reminder-checkmark:hover {\n  cursor: pointer;\n}\n\n\n.checkbox-checked {\n  background-color: #2196F3;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.checkbox-unchecked {\n  background-color: #eee;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  display: none;\n  padding-right: 10px;\n}\n\n.reminder-options-remove {\n  display: none;\n\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  display: flex;\n  gap: 5px;\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n.new-reminder:hover, .new-list:hover{\n  cursor: pointer;\n}\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.5s;\n  overflow: auto;\n  transition: all 0.3s linear;\n}\n\n.modal-reminder, .modal-list {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 800px;\n  height: 350px;\n\n}\n\n.modal-list-close, .modal-reminder-close:hover {\n  cursor: pointer;\n}\n\n.icon {\n  width: 22px;\n  height: 22px;\n}\n\n\nimg {\n  cursor: pointer;\n}\n\n.reminder-container:hover img{\n  display: block;\n}\n\n.list-container:hover img{\n  display: block;\n}\n"],"sourceRoot":""}]);
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
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.showReminders)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.showListHeader)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.showLists)();
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
/* harmony export */   "showListHeader": () => (/* binding */ showListHeader),
/* harmony export */   "showReminders": () => (/* binding */ showReminders)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsSUFBSSxzREFBYztBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFjOztBQUVsQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFhOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3VEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbi8qKiogTkFWSUdVQVRJT04gQkFSICoqKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcblxcbn1cXG5cXG4ubmF2LW1lbnUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcbi5uYXYtbWVudTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4ubmF2LW1lbnU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyoqKiBBUFBMSUNBVElPTiBCT0RZICoqKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKioqIExJU1RTIFNJREUgTUVOVSAqKiovXFxuXFxuLnNpZGUtbWVudSB7XFxuICB3aWR0aDogMjIlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuXFxufVxcblxcbi5saXN0IHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyp0b2RvOiBpY29uICovXFxuLmxpc3Qtb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBBQ1RJVkUgTElTVCAvIFJFTUlOREVSUyBWSUVXICovXFxuXFxuLm1haW4tbWVudSB7XFxuICB3aWR0aDogNzglO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuXFxufVxcblxcbi8qKiogQUNUSVZFIExJU1QgSEVBREVSICoqKi9cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qXFxuVE9ETzogaGVhZGVyIHNldHRpbmdzID9cXG4qL1xcblxcbi8qKiogUkVNSU5ERVJTIFZJRVcgKioqL1xcblxcbi5yZW1pbmRlcnMtY29udGFpbmVyIHtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qKiogUkVNSU5ERVIgKioqL1xcblxcbi5yZW1pbmRlci1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG5cXG5cXG5cXG5cXG59XFxuXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuLnJlbWluZGVyLWNoZWNrbWFyazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5jaGVja2JveC1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVja2JveC11bmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG5cXG4vKioqIExJU1RTIFZJRVcgLyBSRU1JTkRFUlMgVklFVyBGT09URVJTICoqKi9cXG5cXG4ucmVtaW5kZXJzLWZvb3RlciwgLmxpc3RzLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi8qXFxuLm5ldy1yZW1pbmRlcntcXG5cXG59XFxuXFxuLm5ldy1saXN0e1xcblxcbn1cXG4qL1xcbi5uZXctcmVtaW5kZXI6aG92ZXIsIC5uZXctbGlzdDpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTHMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlciwgLm1vZGFsLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuXFxufVxcblxcbi5tb2RhbC1saXN0LWNsb3NlLCAubW9kYWwtcmVtaW5kZXItY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuXFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbWd7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyOmhvdmVyIGltZ3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsMERBQTBEOztBQUU1RDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1os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QWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbi8qKiogTkFWSUdVQVRJT04gQkFSICoqKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcblxcbn1cXG5cXG4ubmF2LW1lbnUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuXFxufVxcblxcbi5uYXYtbWVudTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4ubmF2LW1lbnU6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyoqKiBBUFBMSUNBVElPTiBCT0RZICoqKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKioqIExJU1RTIFNJREUgTUVOVSAqKiovXFxuXFxuLnNpZGUtbWVudSB7XFxuICB3aWR0aDogMjIlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saXN0LWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuXFxufVxcblxcbi5saXN0IHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyp0b2RvOiBpY29uICovXFxuLmxpc3Qtb3B0aW9ucy1yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucy1lZGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBBQ1RJVkUgTElTVCAvIFJFTUlOREVSUyBWSUVXICovXFxuXFxuLm1haW4tbWVudSB7XFxuICB3aWR0aDogNzglO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuXFxufVxcblxcbi8qKiogQUNUSVZFIExJU1QgSEVBREVSICoqKi9cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qXFxuVE9ETzogaGVhZGVyIHNldHRpbmdzID9cXG4qL1xcblxcbi8qKiogUkVNSU5ERVJTIFZJRVcgKioqL1xcblxcbi5yZW1pbmRlcnMtY29udGFpbmVyIHtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qKiogUkVNSU5ERVIgKioqL1xcblxcbi5yZW1pbmRlci1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG5cXG5cXG5cXG5cXG59XFxuXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuLnJlbWluZGVyLWNoZWNrbWFyazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5jaGVja2JveC1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVja2JveC11bmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWVkaXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLXJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5cXG5cXG4vKioqIExJU1RTIFZJRVcgLyBSRU1JTkRFUlMgVklFVyBGT09URVJTICoqKi9cXG5cXG4ucmVtaW5kZXJzLWZvb3RlciwgLmxpc3RzLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi8qXFxuLm5ldy1yZW1pbmRlcntcXG5cXG59XFxuXFxuLm5ldy1saXN0e1xcblxcbn1cXG4qL1xcbi5uZXctcmVtaW5kZXI6aG92ZXIsIC5uZXctbGlzdDpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTHMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlciwgLm1vZGFsLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuXFxufVxcblxcbi5tb2RhbC1saXN0LWNsb3NlLCAubW9kYWwtcmVtaW5kZXItY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuXFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbWd7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyOmhvdmVyIGltZ3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXIgfSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7IHNob3dMaXN0cywgc2hvd0xpc3RIZWFkZXIsIHNob3dSZW1pbmRlcnMgfSBmcm9tICcuL3VpJztcblxubGV0IGFsbExpc3RzID0gW107XG5cblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtaW5kZXJzJykpIHtcbiAgICBjcmVhdGVMaXN0KFwiTmV3IExpc3RcIik7XG4gICAgY3JlYXRlUmVtaW5kZXIoJ015IG5ldyByZW1pbmRlcicsICcyMDIxLTEyLTMxJywgJ2xvdycpO1xufWVsc2V7XG4gICAgYWxsTGlzdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtaW5kZXJzJykpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuICAgIHNob3dMaXN0cygpO1xufVxuXG5cblxuZXhwb3J0IHsgYWxsTGlzdHMgfTsiLCJpbXBvcnQgeyBhbGxMaXN0cyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHtzaG93TGlzdHMsIHNob3dMaXN0SGVhZGVyLCBzaG93UmVtaW5kZXJzfSBmcm9tICcuL3VpJztcblxuY29uc3QgY3JlYXRlTGlzdCA9ICh0aXRsZSkgPT4ge1xuXG4gICAgYWxsTGlzdHMucHVzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICByZW1pbmRlcnM6IFtdLFxuICAgICAgICBhY3RpdmU6IGFsbExpc3RzLnNpemUgPiAxID8gZmFsc2U6IHRydWUsXG4gICAgfSk7XG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc2hvd0xpc3RIZWFkZXIoKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3QgPSAobGlzdCwgbmV3VGl0bGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGdldExpc3RJbmRleChsaXN0KTtcblxuICAgIGFsbExpc3RzW2luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc2hvd0xpc3RIZWFkZXIoKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG4gICAgXG59XG5cbmNvbnN0IHJlbW92ZUxpc3QgPSAoaW5kZXgpID0+IHtcbiAgICBhbGxMaXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNob3dMaXN0cygpO1xuICAgIHN0b3JlRGF0YSgpO1xuXG59O1xuXG5jb25zdCBjcmVhdGVSZW1pbmRlciA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbi8vVE9ETyBMb2NhbCBTdG9yYWdlXG5cbiAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLnB1c2goe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG5zaG93UmVtaW5kZXJzKCk7XG5zdG9yZURhdGEoKTtcblxufTtcblxuXG5jb25zdCB1cGRhdGVSZW1pbmRlciA9IChyZW1pbmRlciwgbmV3VGl0bGUsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG5jb25zdCBpbmRleCA9IGdldFJlbWluZGVySW5kZXgocmVtaW5kZXIpO1xuXG5cbmFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XG5hY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5kdWVEYXRlID0gbmV3RGF0ZTtcbmFjdGl2ZUxpc3QoKS5yZW1pbmRlcnNbaW5kZXhdLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbnNob3dSZW1pbmRlcnMoKTtcbnN0b3JlRGF0YSgpO1xuXG59O1xuXG5jb25zdCByZW1vdmVSZW1pbmRlciA9IChpbmRleCkgPT4ge1xuXG4gICAgYWN0aXZlTGlzdCgpLnJlbWluZGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbiAgICBzdG9yZURhdGEoKTtcblxufTtcblxuY29uc3QgY2hlY2tSZW1pbmRlciA9IChpbmRleCwgcmVtaW5kZXIpID0+IHtcblxuICAgIGlmIChyZW1pbmRlci5jaGVja2VkKXtcbiAgICAgICAgYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcblxuICAgIH1cbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgc3RvcmVEYXRhKCk7XG5cblxufTtcblxuZnVuY3Rpb24gZ2V0UmVtaW5kZXJJbmRleChpdGVtKXtcbiAgICByZXR1cm4gYWN0aXZlTGlzdCgpLnJlbWluZGVycy5pbmRleE9mKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBnZXRMaXN0SW5kZXgobGlzdCl7XG4gICAgcmV0dXJuIGFsbExpc3RzLmluZGV4T2YobGlzdCk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlRGF0YSgpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVtaW5kZXJzJywgSlNPTi5zdHJpbmdpZnkoYWxsTGlzdHMpKTtcbn1cblxuXG5mdW5jdGlvbiBhY3RpdmVMaXN0KCl7XG4gICAgbGV0IGFjdGl2ZUxpc3RBcnJheSA9IGFsbExpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuYWN0aXZlKTtcbiAgICByZXR1cm4gYWN0aXZlTGlzdEFycmF5WzBdO1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3QsIGNyZWF0ZVJlbWluZGVyLCBhY3RpdmVMaXN0LCByZW1vdmVSZW1pbmRlciwgdXBkYXRlUmVtaW5kZXIsIGNoZWNrUmVtaW5kZXIsIHJlbW92ZUxpc3QsIHVwZGF0ZUxpc3QsIHN0b3JlRGF0YX07IiwiaW1wb3J0IHsgYWxsTGlzdHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7XG4gICAgYWN0aXZlTGlzdCwgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXIsIHJlbW92ZVJlbWluZGVyLCB1cGRhdGVSZW1pbmRlciwgY2hlY2tSZW1pbmRlciwgcmVtb3ZlTGlzdCxcbiAgICB1cGRhdGVMaXN0XG59IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IGVkaXRCdG5TcmMgZnJvbSAnLi9hc3NldHMvZWRpdC1yZWd1bGFyLnN2Zyc7XG5pbXBvcnQgcmVtb3ZlQnRuU3JjIGZyb20gJy4vYXNzZXRzL21pbnVzLWNpcmNsZS1zb2xpZC5zdmcnO1xuaW1wb3J0IGFkZExpc3RCdG5TcmMgZnJvbSAnLi9hc3NldHMvY2xpcGJvYXJkLWNoZWNrLXNvbGlkLnN2Zyc7XG5pbXBvcnQgYWRkUmVtaW5kZXJCdG5TcmMgZnJvbSAnLi9hc3NldHMvbGlzdC11bC1zb2xpZC5zdmcnO1xuXG5cblxuY29uc3QgbGlzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGFpbmVyJyk7XG5jb25zdCBhY3RpdmVMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtaGVhZGVyLXRpdGxlJyk7XG5jb25zdCByZW1pbmRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtaW5kZXJzLWNvbnRhaW5lcicpO1xuXG5jb25zdCByZW1pbmRlck1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlbWluZGVyLWNvbnRhaW5lcicpO1xuY29uc3QgcmVtaW5kZXJGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItdGl0bGUnKTtcbmNvbnN0IHJlbWluZGVyTW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1yZW1pbmRlci1jbG9zZScpO1xuXG5jb25zdCBsaXN0TW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdC1jb250YWluZXInKTtcbmNvbnN0IGxpc3RGb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdC10aXRsZScpO1xuY29uc3QgbGlzdE1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdC1jbG9zZScpO1xuXG5cblxuZnVuY3Rpb24gc2hvd0xpc3RzKCkge1xuICAgIGNsZWFyTGlzdHMoKTtcbiAgICBhbGxMaXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTmFtZSA9ICdsaXN0JztcbiAgICAgICAgbGlzdC5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0QWN0aXZlTGlzdCk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG5cblxuICAgICAgICBjb25zdCBlZGl0TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtZWRpdCcpO1xuICAgICAgICBlZGl0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIGVkaXRMaXN0QnRuLnNyYyA9IGVkaXRCdG5TcmM7XG4gICAgICAgIGVkaXRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdExpc3RGb3JtKTtcbiAgICAgICAgZWRpdExpc3RCdG4ubGlzdCA9IGl0ZW07XG5cblxuICAgICAgICBjb25zdCByZW1vdmVMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1vcHRpb25zLXJlbW92ZScpO1xuICAgICAgICByZW1vdmVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ0bi5zcmMgPSByZW1vdmVCdG5TcmM7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVMaXN0KGluZGV4KTtcbiAgICAgICAgICAgIHNob3dGaXJzdExpc3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9vcHRpb25zIGNvbnRhaW5lclxuXG4gICAgICAgIGNvbnN0IGxpc3RPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RPcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3Qtb3B0aW9ucy1jb250YWluZXInKTtcblxuICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0TGlzdEJ0bik7XG4gICAgICAgIGxpc3RPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUxpc3RCdG4pO1xuXG5cbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0T3B0aW9uc0NvbnRhaW5lcik7XG5cblxuICAgICAgICBsaXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICAgIH0pO1xuICAgIGNvbnN0IGxpc3RzRm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzLWZvb3RlcicpO1xuICAgIGNvbnN0IGFkZExpc3RJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1saXN0LWljb24nKTtcbiAgICBhZGRMaXN0SWNvbi5zcmMgPSBhZGRMaXN0QnRuU3JjO1xuICAgIGxpc3RzRm9vdGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3TGlzdEZvcm0pO1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyTGlzdHMoKSB7XG4gICAgbGlzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cblxuXG4vL1RPRE86IHRvIHVzZSB3aGVuZXZlciBhIGxpc3QgaXMgcmVtb3ZlZFxuZnVuY3Rpb24gc2hvd0ZpcnN0TGlzdCgpIHtcbiAgICBhbGxMaXN0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlTGlzdChsaXN0KSB7XG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IGxpc3QuY3VycmVudFRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dMaXN0SGVhZGVyKCkge1xuICAgIGFjdGl2ZUxpc3ROYW1lLmlubmVyVGV4dCA9IGFjdGl2ZUxpc3QoKS50aXRsZTtcblxufVxuLy9BZGQgTGlzdCBNb2RhbCBmdW5jdGlvbiBhbmQgbGlzdGVuZXJzXG5mdW5jdGlvbiBuZXdMaXN0Rm9ybSgpIHtcbiAgICBjb25zdCBjcmVhdGVMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1saXN0Jyk7XG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY3JlYXRlTGlzdEJ0bi5pbm5lclRleHQgPSAnQWRkJztcbiAgICBsaXN0Rm9ybVRpdGxlLmlubmVyVGV4dCA9ICdBZGQgYSBuZXcgTGlzdCc7XG4gICAgY3JlYXRlTGlzdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKTtcbiAgICBjcmVhdGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0TGlzdEZvcm0pO1xuXG59XG5cbmZ1bmN0aW9uIGVkaXRMaXN0Rm9ybShldnQpIHtcbiAgICBjb25zdCBsaXN0ID0gZXZ0LmN1cnJlbnRUYXJnZXQubGlzdDtcbiAgICBjb25zdCBlZGl0TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbGlzdCcpO1xuXG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGlzdGZvcm0udGl0bGUudmFsdWUgPSBsaXN0LnRpdGxlO1xuICAgIGxpc3RGb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ1VwZGF0ZSB0aGlzIExpc3QnO1xuICAgIGVkaXRMaXN0QnRuLmlubmVyVGV4dCA9ICdVcGRhdGUnO1xuICAgIGVkaXRMaXN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0TGlzdEZvcm0pO1xuICAgIGVkaXRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VXBkYXRlTGlzdEZvcm0pXG4gICAgZWRpdExpc3RCdG4ubGlzdCA9IGxpc3Q7XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0VXBkYXRlTGlzdEZvcm0oZXZ0KSB7XG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCB0aXRsZSA9IGxpc3Rmb3JtLnRpdGxlLnZhbHVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlTGlzdChldnQuY3VycmVudFRhcmdldC5saXN0LCB0aXRsZSk7XG5cbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuXG59XG5mdW5jdGlvbiBzdWJtaXRMaXN0Rm9ybSgpIHtcblxuICAgIGxpc3RNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjcmVhdGVMaXN0KGxpc3Rmb3JtLnRpdGxlLnZhbHVlKTtcbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuXG59XG5cblxuZnVuY3Rpb24gc2hvd1JlbWluZGVycygpIHtcbiAgICBjbGVhclJlbWluZGVycygpO1xuICAgIHNob3dMaXN0SGVhZGVyKCk7XG5cblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuXG5cbiAgICAgICAgY29uc3QgcmVtaW5kZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItY29udGFpbmVyJyk7XG5cblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1jaGVja21hcmsnKTtcblxuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jaGVja2VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC11bmNoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtaW5kZXJDaGVja0NoYW5nZSk7XG4gICAgICAgIGNoZWNrYm94LmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGNoZWNrYm94LnJlbWluZGVyID0gaXRlbTtcblxuXG5cbiAgICAgICAgY29uc3QgcmVtaW5kZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlckxhYmVsLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIHJlbWluZGVyTGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIGNvbnN0IHJlbWluZGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlckluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItaW5mby1jb250YWluZXInKTtcbiAgICAgICAgcmVtaW5kZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWluZGVyTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1vcHRpb25zLWVkaXQnKTtcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIGVkaXRCdG4uc3JjID0gZWRpdEJ0blNyYztcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRSZW1pbmRlckZvcm0pO1xuICAgICAgICBlZGl0QnRuLnJlbWluZGVyID0gaXRlbTtcblxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLW9wdGlvbnMtcmVtb3ZlJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5zcmMgPSByZW1vdmVCdG5TcmM7XG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVJlbWluZGVyKGluZGV4LCBpdGVtLnRpdGxlLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlbWluZGVyT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1pbmRlck9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1jb250YWluZXInKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICByZW1pbmRlck9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblxuICAgICAgICByZW1pbmRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckluZm9Db250YWluZXIpO1xuICAgICAgICByZW1pbmRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlck9wdGlvbnNDb250YWluZXIpO1xuXG4gICAgICAgIHJlbWluZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1pbmRlckNvbnRhaW5lcik7XG4gICAgfSlcblxuICAgIGNvbnN0IHJlbWluZGVyc0Zvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtZm9vdGVyJyk7XG4gICAgY29uc3QgYWRkUmVtaW5kZXJCdG5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1yZW1pbmRlci1pY29uJyk7XG4gICAgYWRkUmVtaW5kZXJCdG5JY29uLnNyYyA9IGFkZFJlbWluZGVyQnRuU3JjO1xuICAgIHJlbWluZGVyc0Zvb3RlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1JlbWluZGVyRm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmVtaW5kZXJzKCkge1xuICAgIHJlbWluZGVyc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuLy9BZGQgUmVtaW5kZXIgTW9kYWwgZnVuY3Rpb25zIGFuZCBsaXN0ZW5lcnNcbmZ1bmN0aW9uIG5ld1JlbWluZGVyRm9ybSgpIHtcbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNyZWF0ZVJlbWluZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdBZGQgYSBuZXcgUmVtaW5kZXInO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLmlubmVyVGV4dCA9ICdBZGQnO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKTtcbiAgICBjcmVhdGVSZW1pbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFJlbWluZGVyRm9ybSlcblxufVxuXG5mdW5jdGlvbiBlZGl0UmVtaW5kZXJGb3JtKGV2dCkge1xuXG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IHJlbWluZGVyID0gZXZ0LmN1cnJlbnRUYXJnZXQucmVtaW5kZXI7XG4gICAgY29uc3QgdXBkYXRlUmVtaW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJlbWluZGVyJyk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRSZW1pbmRlckZvcm0pO1xuICAgIHJlbWluZGVyRm9ybVRpdGxlLmlubmVyVGV4dCA9ICdVcGRhdGUgdGhpcyBSZW1pbmRlcic7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4uaW5uZXJUZXh0ID0gJ1VwZGF0ZSc7XG4gICAgcmVtaW5kZXJmb3JtLnRpdGxlLnZhbHVlID0gcmVtaW5kZXIudGl0bGU7XG4gICAgcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZSA9IHJlbWluZGVyLmR1ZURhdGU7XG4gICAgcmVtaW5kZXJmb3JtLnByaW9yaXR5LnZhbHVlID0gcmVtaW5kZXIucHJpb3JpdHk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVSZW1pbmRlckZvcm0pO1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLnJlbWluZGVyID0gcmVtaW5kZXI7XG5cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRSZW1pbmRlckZvcm0oKSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjcmVhdGVSZW1pbmRlcihyZW1pbmRlcmZvcm0udGl0bGUudmFsdWUsIHJlbWluZGVyZm9ybS5kdWUudmFsdWUsIHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZSk7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKGV2dCkge1xuXG4gICAgY29uc3QgdGl0bGUgPSByZW1pbmRlcmZvcm0udGl0bGUudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHJlbWluZGVyZm9ybS5kdWUudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSByZW1pbmRlcmZvcm0ucHJpb3JpdHkudmFsdWU7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZVJlbWluZGVyKGV2dC5jdXJyZW50VGFyZ2V0LnJlbWluZGVyLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgcmVtaW5kZXJNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJlbWluZGVyZm9ybS5yZXNldCgpO1xuXG59XG5cbi8vY2hlY2tib3ggY2hhbmdlIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHJlbWluZGVyQ2hlY2tDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSBldnQuY3VycmVudFRhcmdldC5pbmRleDtcbiAgICBjaGVja1JlbWluZGVyKGluZGV4LCBldnQuY3VycmVudFRhcmdldC5yZW1pbmRlcik7XG5cbn1cblxuLy8gc2hhcmVkIG1vZGFsIGZ1bmN0aW9uc1xucmVtaW5kZXJNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5saXN0TW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuICAgIHJlbWluZGVyZm9ybS5yZXNldCgpO1xuXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlbWluZGVyc01vZGFsKCkge1xuICAgIC8vVE9ET1xufVxuXG5mdW5jdGlvbiB0b2dnbGVMaXN0c01vZGFsKCkge1xuICAgIC8vVE9ET1xufVxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHJlbWluZGVyTW9kYWxDb250YWluZXIgfHwgZXZlbnQudGFyZ2V0ID09IGxpc3RNb2RhbENvbnRhaW5lcikge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgc2hvd0xpc3RzLCBzaG93TGlzdEhlYWRlciwgc2hvd1JlbWluZGVycyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=