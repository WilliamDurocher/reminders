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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: grey;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: #333;\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n.nav-menu:active {\n  background-color: red;\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n}\n\n/*todo: icon */\n.list-options-remove {}\n\n.list-options-edit {}\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 30px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a grey background color */\n.reminder-container:hover input~.reminder-checkmark {\n  background-color: #ccc;\n}\n\n/* When the checkbox is checked, add a blue background */\n.reminder-container input:checked~.reminder-checkmark {\n  background-color: #2196F3;\n  box-sizing: border-box;\n  border: 1px solid white;\n\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  /*\n    right: 0;\n    position: absolute;\n    padding-right: 100px;\n  */\n}\n\n.reminder-options-remove {\n  /*\n    margin-left: auto;\n    right: 0;\n    position: absolute;\n*/\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.5s;\n  overflow: auto;\n  transition: all 0.3s linear;\n}\n\n.modal-reminder, .modal-list {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 800px;\n  height: 350px;\n\n}\n\n.modal-list-close, .modal-reminder-close:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,0DAA0D;;AAE5D;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;;AAExB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;;AAEjB;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA,wBAAwB;;AAExB;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;;AAE7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,cAAc;AACd,sBAAsB;;AAEtB,oBAAoB;;;;;AAKpB,iCAAiC;;AAEjC;EACE,UAAU;EACV,uBAAuB;;AAEzB;;AAEA,2BAA2B;AAC3B;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;;AAEb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;;CAEC;;AAED,uBAAuB;;AAEvB;;EAEE,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA,wCAAwC;AACxC;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,SAAS;EACT,QAAQ;AACV;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,+CAA+C;AAC/C;EACE,sBAAsB;AACxB;;AAEA,wDAAwD;AACxD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;;;;GAIC;AACH;;AAEA;EACE;;;;CAID;AACD;;;;AAIA,4CAA4C;;AAE5C;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;;;;;;CAQC;;;AAGD,iCAAiC;;AAEjC;EACE,aAAa;EACb,eAAe;EACf,OAAO;EACP,MAAM;EACN,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,oCAAoC;EACpC,wBAAwB;EACxB,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;;AAEf;;AAEA;EACE,eAAe;AACjB","sourcesContent":["body {\n  background-color: grey;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/*** NAVIGUATION BAR ***/\n.navbar {\n  display: flex;\n  height: 45px;\n  background-color: #333;\n\n}\n\n.nav-menu {\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  margin: 0;\n  text-decoration: none;\n  line-height: 16px;\n  font-size: 20px;\n\n}\n\n.nav-menu:active {\n  background-color: red;\n}\n\n\n.nav-menu:last-child {\n  margin-left: auto;\n}\n\n/*** APPLICATION BODY ***/\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n/*** LISTS SIDE MENU ***/\n\n.side-menu {\n  width: 22%;\n  border: solid 1px black;\n}\n\n.lists-container {\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  border: solid 1px black;\n  margin: 15px auto;\n  padding: 10px;\n  position: relative;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-container:not(:first-child) {\n  border-top: 1px solid white;\n\n}\n\n.list {\n  height: 40px;\n}\n\n.list-options-container {\n  display: flex;\n}\n\n/*todo: icon */\n.list-options-remove {}\n\n.list-options-edit {}\n\n\n\n\n/* ACTIVE LIST / REMINDERS VIEW */\n\n.main-menu {\n  width: 78%;\n  border: solid 1px black;\n\n}\n\n/*** ACTIVE LIST HEADER ***/\n.reminders-header-title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n}\n\n.reminders-header-title:last-child {\n  margin-left: auto;\n}\n\n.reminders-header-title {\n  font-size: 30px;\n  padding: 20px;\n}\n\n/*\nTODO: header settings ?\n*/\n\n/*** REMINDERS VIEW ***/\n\n.reminders-container {\n\n  padding: 20px;\n}\n\n/*** REMINDER ***/\n.reminder-container {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* Hide the browser's default checkbox */\n.reminder-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.reminder-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50px;\n}\n\n/* On mouse-over, add a grey background color */\n.reminder-container:hover input~.reminder-checkmark {\n  background-color: #ccc;\n}\n\n/* When the checkbox is checked, add a blue background */\n.reminder-container input:checked~.reminder-checkmark {\n  background-color: #2196F3;\n  box-sizing: border-box;\n  border: 1px solid white;\n\n}\n\n.reminder-options-container {\n  display: flex;\n}\n\n.reminder-options-edit {\n  /*\n    right: 0;\n    position: absolute;\n    padding-right: 100px;\n  */\n}\n\n.reminder-options-remove {\n  /*\n    margin-left: auto;\n    right: 0;\n    position: absolute;\n*/\n}\n\n\n\n/*** LISTS VIEW / REMINDERS VIEW FOOTERS ***/\n\n.reminders-footer, .lists-footer {\n  bottom: 0;\n  height: 5%;\n  position: absolute;\n  width: 100%;\n  padding-left: 20px;\n}\n\n/*\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n*/\n\n\n/*** LISTS / REMINDERS MODALs ***/\n\n.modal-reminder-container, .modal-list-container {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-transition: 0.5s;\n  overflow: auto;\n  transition: all 0.3s linear;\n}\n\n.modal-reminder, .modal-list {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border-radius: 15px;\n  max-width: 800px;\n  height: 350px;\n\n}\n\n.modal-list-close, .modal-reminder-close:hover {\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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

//todo: new list = create list, push into all list, render on the UI
(0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)("New List");
//TESTING PURPOSES
(0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)('My new reminder', '2021-12-31', 'low');




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
/* harmony export */   "updateList": () => (/* binding */ updateList)
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
};

const updateList = (list, newTitle) => {
    const index = getListIndex(list);

    _index__WEBPACK_IMPORTED_MODULE_0__.allLists[index].title = newTitle;

    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLists)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showListHeader)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.allLists);
}

const removeList = (index) => {
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.splice(index, 1);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLists)();
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
};


const updateReminder = (reminder, newTitle, newDate, newPriority) => {
const index = getReminderIndex(reminder);


activeList().reminders[index].title = newTitle;
activeList().reminders[index].dueDate = newDate;
activeList().reminders[index].priority = newPriority;

(0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();


};

const removeReminder = (index) => {

    activeList().reminders.splice(index, 1);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
};

const checkReminder = (index, reminder) => {

    if (reminder.checked){
        activeList().reminders[index].checked = true;
    }else{
        activeList().reminders[index].checked = false;

    }

};

function getReminderIndex(item){
    return activeList().reminders.indexOf(item);
}

function getListIndex(list){
    return _index__WEBPACK_IMPORTED_MODULE_0__.allLists.indexOf(list);
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




const listsContainer = document.querySelector('.lists-container');
const activeListName = document.querySelector('.reminders-header-title');
const remindersContainer = document.querySelector('.reminders-container');

const reminderModalContainer = document.querySelector('.modal-reminder-container');
const reminderModalClose = document.querySelector('.modal-reminder-close');

const listModalContainer = document.querySelector('.modal-list-container');
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


     

        const editListBtn = document.createElement('div');
        editListBtn.classList.add('list-options-edit');
        editListBtn.innerText = 'Edit';
        editListBtn.addEventListener('click', editListForm);
        editListBtn.list = item;


        const removeListBtn = document.createElement('div');
        removeListBtn.classList.add('list-options-remove');
        removeListBtn.innerText = 'Del';
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
    const addListBtn = document.querySelector('.new-list');
    addListBtn.addEventListener('click', newListForm);

}

function clearLists() {
    listsContainer.innerHTML = '';
}



//TODO: to use whenever a list is removed
function showFirstList(){
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item,index) => {
        if (index == 0){
            item.active = true;
        }else{
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
    listModalContainer.style.display = 'block';
    const createListBtn = document.getElementById('add-list');
    createListBtn.removeEventListener('click', submitUpdateListForm);
    createListBtn.addEventListener('click', submitListForm);

}

function editListForm(evt){
    const list = evt.currentTarget.list;
    const editListBtn = document.getElementById('add-list');


    listModalContainer.style.display = 'block';
    listform.title.value = list.title;
    editListBtn.innerText = 'Update';
    editListBtn.removeEventListener('click', submitListForm);
    editListBtn.addEventListener('click', submitUpdateListForm)
    editListBtn.list = list;

}

function submitUpdateListForm(evt){

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
        const reminder = document.createElement('label');
        reminder.classList.add('reminder-container');
        reminder.innerText = item.title;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked == true ? true: false;
        checkbox.addEventListener('change', reminderCheckChange);
        checkbox.index = index;
        reminder.appendChild(checkbox);

        const checkIcon = document.createElement('span');
        checkIcon.classList.add('reminder-checkmark');
        reminder.appendChild(checkIcon);




        const editBtn = document.createElement('div');
        editBtn.classList.add('reminder-options-edit');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', editReminderForm);
        editBtn.reminder = item;

        const removeBtn = document.createElement('div');
        removeBtn.classList.add('reminder-options-remove');
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', () => {
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.removeReminder)(index, item.title, item.dueDate, item.priority)
        });

        const reminderOptionsContainer = document.createElement('div');
        reminderOptionsContainer.classList.add('reminder-options-container');

        reminderOptionsContainer.appendChild(editBtn);
        reminderOptionsContainer.appendChild(removeBtn);

        reminder.appendChild(reminderOptionsContainer);





        remindersContainer.appendChild(reminder);
        //TODO: generate reminders here, (title, date, completed status, etc)
    })

    const addReminderBtn = document.querySelector('.new-reminder');
    addReminderBtn.addEventListener('click', newReminderForm);
}

function clearReminders() {
    remindersContainer.innerHTML = '';
}

//Add Reminder Modal functions and listeners
function newReminderForm() {
    reminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    createReminderBtn.removeEventListener('click', submitUpdateReminderForm);
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function editReminderForm(evt) {

    reminderModalContainer.style.display = 'block';

    const reminder = evt.currentTarget.reminder;

    const updateReminderBtn = document.getElementById('add-reminder');
    updateReminderBtn.removeEventListener('click', submitReminderForm);
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

function submitUpdateReminderForm(evt){

    const title = reminderform.title.value;
    const dueDate = reminderform.due.value;
    const priority = reminderform.priority.value;

    event.preventDefault();
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.updateReminder)(evt.currentTarget.reminder, title, dueDate, priority);

    reminderModalContainer.style.display = 'none';
    reminderform.reset();

}

//checkbox change function

function reminderCheckChange(evt){
    const index = evt.currentTarget.index;
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.checkReminder)(index, this);

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

function toggleReminderModal(){
    reminderModalContainer
}

window.onclick = function (event) {
    if (event.target == reminderModalContainer || event.target == listModalContainer) {
        closeModal();
    }
}





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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBYztBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFjOztBQUVsQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFhOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztVQzlSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG4vKioqIE5BVklHVUFUSU9OIEJBUiAqKiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG5cXG59XFxuXFxuLm5hdi1tZW51IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcblxcbn1cXG5cXG4ubmF2LW1lbnU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLm5hdi1tZW51Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qKiogQVBQTElDQVRJT04gQk9EWSAqKiovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyoqKiBMSVNUUyBTSURFIE1FTlUgKioqL1xcblxcbi5zaWRlLW1lbnUge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcblxcbn1cXG5cXG4ubGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qdG9kbzogaWNvbiAqL1xcbi5saXN0LW9wdGlvbnMtcmVtb3ZlIHt9XFxuXFxuLmxpc3Qtb3B0aW9ucy1lZGl0IHt9XFxuXFxuXFxuXFxuXFxuLyogQUNUSVZFIExJU1QgLyBSRU1JTkRFUlMgVklFVyAqL1xcblxcbi5tYWluLW1lbnUge1xcbiAgd2lkdGg6IDc4JTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcblxcbn1cXG5cXG4vKioqIEFDVElWRSBMSVNUIEhFQURFUiAqKiovXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKlxcblRPRE86IGhlYWRlciBzZXR0aW5ncyA/XFxuKi9cXG5cXG4vKioqIFJFTUlOREVSUyBWSUVXICoqKi9cXG5cXG4ucmVtaW5kZXJzLWNvbnRhaW5lciB7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqIFJFTUlOREVSICoqKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbnB1dH4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbi5yZW1pbmRlci1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1lZGl0IHtcXG4gIC8qXFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgKi9cXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtcmVtb3ZlIHtcXG4gIC8qXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiovXFxufVxcblxcblxcblxcbi8qKiogTElTVFMgVklFVyAvIFJFTUlOREVSUyBWSUVXIEZPT1RFUlMgKioqL1xcblxcbi5yZW1pbmRlcnMtZm9vdGVyLCAubGlzdHMtZm9vdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLypcXG4ubmV3LXJlbWluZGVye1xcblxcbn1cXG5cXG4ubmV3LWxpc3R7XFxuXFxufVxcbiovXFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTHMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlciwgLm1vZGFsLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuXFxufVxcblxcbi5tb2RhbC1saXN0LWNsb3NlLCAubW9kYWwtcmVtaW5kZXItY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsMERBQTBEOztBQUU1RDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCOztBQUU3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxjQUFjO0FBQ2Qsc0JBQXNCOztBQUV0QixvQkFBb0I7Ozs7O0FBS3BCLGlDQUFpQzs7QUFFakM7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCOztBQUV6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBOztDQUVDOztBQUVELHVCQUF1Qjs7QUFFdkI7O0VBRUUsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUEsK0NBQStDO0FBQy9DO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFOzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFOzs7O0NBSUQ7QUFDRDs7OztBQUlBLDRDQUE0Qzs7QUFFNUM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7OztDQVFDOzs7QUFHRCxpQ0FBaUM7O0FBRWpDO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhOztBQUVmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG4vKioqIE5BVklHVUFUSU9OIEJBUiAqKiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG5cXG59XFxuXFxuLm5hdi1tZW51IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcblxcbn1cXG5cXG4ubmF2LW1lbnU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLm5hdi1tZW51Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qKiogQVBQTElDQVRJT04gQk9EWSAqKiovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyoqKiBMSVNUUyBTSURFIE1FTlUgKioqL1xcblxcbi5zaWRlLW1lbnUge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBtYXJnaW46IDE1cHggYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcblxcbn1cXG5cXG4ubGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5saXN0LW9wdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qdG9kbzogaWNvbiAqL1xcbi5saXN0LW9wdGlvbnMtcmVtb3ZlIHt9XFxuXFxuLmxpc3Qtb3B0aW9ucy1lZGl0IHt9XFxuXFxuXFxuXFxuXFxuLyogQUNUSVZFIExJU1QgLyBSRU1JTkRFUlMgVklFVyAqL1xcblxcbi5tYWluLW1lbnUge1xcbiAgd2lkdGg6IDc4JTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcblxcbn1cXG5cXG4vKioqIEFDVElWRSBMSVNUIEhFQURFUiAqKiovXFxuLnJlbWluZGVycy1oZWFkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucmVtaW5kZXJzLWhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKlxcblRPRE86IGhlYWRlciBzZXR0aW5ncyA/XFxuKi9cXG5cXG4vKioqIFJFTUlOREVSUyBWSUVXICoqKi9cXG5cXG4ucmVtaW5kZXJzLWNvbnRhaW5lciB7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqIFJFTUlOREVSICoqKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4ucmVtaW5kZXItY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLnJlbWluZGVyLWNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuLnJlbWluZGVyLWNvbnRhaW5lcjpob3ZlciBpbnB1dH4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbi5yZW1pbmRlci1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4ucmVtaW5kZXItY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFxufVxcblxcbi5yZW1pbmRlci1vcHRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmVtaW5kZXItb3B0aW9ucy1lZGl0IHtcXG4gIC8qXFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgKi9cXG59XFxuXFxuLnJlbWluZGVyLW9wdGlvbnMtcmVtb3ZlIHtcXG4gIC8qXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiovXFxufVxcblxcblxcblxcbi8qKiogTElTVFMgVklFVyAvIFJFTUlOREVSUyBWSUVXIEZPT1RFUlMgKioqL1xcblxcbi5yZW1pbmRlcnMtZm9vdGVyLCAubGlzdHMtZm9vdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLypcXG4ubmV3LXJlbWluZGVye1xcblxcbn1cXG5cXG4ubmV3LWxpc3R7XFxuXFxufVxcbiovXFxuXFxuXFxuLyoqKiBMSVNUUyAvIFJFTUlOREVSUyBNT0RBTHMgKioqL1xcblxcbi5tb2RhbC1yZW1pbmRlci1jb250YWluZXIsIC5tb2RhbC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbC1yZW1pbmRlciwgLm1vZGFsLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuXFxufVxcblxcbi5tb2RhbC1saXN0LWNsb3NlLCAubW9kYWwtcmVtaW5kZXItY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlcn0gZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQge3Nob3dMaXN0cywgc2hvd0xpc3RIZWFkZXIsIHNob3dSZW1pbmRlcnN9IGZyb20gJy4vdWknO1xuXG5sZXQgYWxsTGlzdHMgPSBbXTtcblxuLy90b2RvOiBuZXcgbGlzdCA9IGNyZWF0ZSBsaXN0LCBwdXNoIGludG8gYWxsIGxpc3QsIHJlbmRlciBvbiB0aGUgVUlcbmNyZWF0ZUxpc3QoXCJOZXcgTGlzdFwiKTtcbi8vVEVTVElORyBQVVJQT1NFU1xuY3JlYXRlUmVtaW5kZXIoJ015IG5ldyByZW1pbmRlcicsICcyMDIxLTEyLTMxJywgJ2xvdycpO1xuXG5cbmV4cG9ydCB7YWxsTGlzdHN9OyIsImltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge3Nob3dMaXN0cywgc2hvd0xpc3RIZWFkZXIsIHNob3dSZW1pbmRlcnN9IGZyb20gJy4vdWknO1xuXG5jb25zdCBjcmVhdGVMaXN0ID0gKHRpdGxlKSA9PiB7XG5cbiAgICBhbGxMaXN0cy5wdXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHJlbWluZGVyczogW10sXG4gICAgICAgIGFjdGl2ZTogYWxsTGlzdHMuc2l6ZSA+IDEgPyBmYWxzZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBzaG93TGlzdHMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3QgPSAobGlzdCwgbmV3VGl0bGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGdldExpc3RJbmRleChsaXN0KTtcblxuICAgIGFsbExpc3RzW2luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgc2hvd0xpc3RzKCk7XG4gICAgc2hvd0xpc3RIZWFkZXIoKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG4gICAgY29uc29sZS5sb2coYWxsTGlzdHMpO1xufVxuXG5jb25zdCByZW1vdmVMaXN0ID0gKGluZGV4KSA9PiB7XG4gICAgYWxsTGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzaG93TGlzdHMoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlbWluZGVyID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuLy9UT0RPIExvY2FsIFN0b3JhZ2VcblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMucHVzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbnNob3dSZW1pbmRlcnMoKTtcbn07XG5cblxuY29uc3QgdXBkYXRlUmVtaW5kZXIgPSAocmVtaW5kZXIsIG5ld1RpdGxlLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuY29uc3QgaW5kZXggPSBnZXRSZW1pbmRlckluZGV4KHJlbWluZGVyKTtcblxuXG5hY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uZHVlRGF0ZSA9IG5ld0RhdGU7XG5hY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG5zaG93UmVtaW5kZXJzKCk7XG5cblxufTtcblxuY29uc3QgcmVtb3ZlUmVtaW5kZXIgPSAoaW5kZXgpID0+IHtcblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59O1xuXG5jb25zdCBjaGVja1JlbWluZGVyID0gKGluZGV4LCByZW1pbmRlcikgPT4ge1xuXG4gICAgaWYgKHJlbWluZGVyLmNoZWNrZWQpe1xuICAgICAgICBhY3RpdmVMaXN0KCkucmVtaW5kZXJzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgYWN0aXZlTGlzdCgpLnJlbWluZGVyc1tpbmRleF0uY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiBnZXRSZW1pbmRlckluZGV4KGl0ZW0pe1xuICAgIHJldHVybiBhY3RpdmVMaXN0KCkucmVtaW5kZXJzLmluZGV4T2YoaXRlbSk7XG59XG5cbmZ1bmN0aW9uIGdldExpc3RJbmRleChsaXN0KXtcbiAgICByZXR1cm4gYWxsTGlzdHMuaW5kZXhPZihsaXN0KTtcbn1cblxuXG5mdW5jdGlvbiBhY3RpdmVMaXN0KCl7XG4gICAgbGV0IGFjdGl2ZUxpc3RBcnJheSA9IGFsbExpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QuYWN0aXZlKTtcbiAgICByZXR1cm4gYWN0aXZlTGlzdEFycmF5WzBdO1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3QsIGNyZWF0ZVJlbWluZGVyLCBhY3RpdmVMaXN0LCByZW1vdmVSZW1pbmRlciwgdXBkYXRlUmVtaW5kZXIsIGNoZWNrUmVtaW5kZXIsIHJlbW92ZUxpc3QsIHVwZGF0ZUxpc3R9OyIsImltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBhY3RpdmVMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciwgcmVtb3ZlUmVtaW5kZXIsIHVwZGF0ZVJlbWluZGVyLCBjaGVja1JlbWluZGVyLCByZW1vdmVMaXN0LFxuICAgIHVwZGF0ZUxpc3QgfSBmcm9tICcuL2xvZ2ljJztcblxuXG5jb25zdCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1jb250YWluZXInKTtcbmNvbnN0IGFjdGl2ZUxpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbWluZGVycy1oZWFkZXItdGl0bGUnKTtcbmNvbnN0IHJlbWluZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1pbmRlcnMtY29udGFpbmVyJyk7XG5cbmNvbnN0IHJlbWluZGVyTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItY29udGFpbmVyJyk7XG5jb25zdCByZW1pbmRlck1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVtaW5kZXItY2xvc2UnKTtcblxuY29uc3QgbGlzdE1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWxpc3QtY29udGFpbmVyJyk7XG5jb25zdCBsaXN0TW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saXN0LWNsb3NlJyk7XG5cblxuXG5mdW5jdGlvbiBzaG93TGlzdHMoKSB7XG4gICAgY2xlYXJMaXN0cygpO1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3QnO1xuICAgICAgICBsaXN0LmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRBY3RpdmVMaXN0KTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcblxuXG4gICAgIFxuXG4gICAgICAgIGNvbnN0IGVkaXRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3Qtb3B0aW9ucy1lZGl0Jyk7XG4gICAgICAgIGVkaXRMaXN0QnRuLmlubmVyVGV4dCA9ICdFZGl0JztcbiAgICAgICAgZWRpdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0TGlzdEZvcm0pO1xuICAgICAgICBlZGl0TGlzdEJ0bi5saXN0ID0gaXRlbTtcblxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMtcmVtb3ZlJyk7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uaW5uZXJUZXh0ID0gJ0RlbCc7XG4gICAgICAgIHJlbW92ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVMaXN0KGluZGV4KTtcbiAgICAgICAgICAgIHNob3dGaXJzdExpc3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgICAgLy9vcHRpb25zIGNvbnRhaW5lclxuXG4gICAgICAgICAgIGNvbnN0IGxpc3RPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIGxpc3RPcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3Qtb3B0aW9ucy1jb250YWluZXInKTtcblxuICAgICAgICAgICBsaXN0T3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0TGlzdEJ0bik7XG4gICAgICAgICAgIGxpc3RPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUxpc3RCdG4pO1xuXG5cbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0T3B0aW9uc0NvbnRhaW5lcik7XG5cblxuICAgICAgICBsaXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICAgIH0pO1xuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWxpc3QnKTtcbiAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3TGlzdEZvcm0pO1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyTGlzdHMoKSB7XG4gICAgbGlzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cblxuXG4vL1RPRE86IHRvIHVzZSB3aGVuZXZlciBhIGxpc3QgaXMgcmVtb3ZlZFxuZnVuY3Rpb24gc2hvd0ZpcnN0TGlzdCgpe1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApe1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUxpc3QobGlzdCkge1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlID09PSBsaXN0LmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2hvd1JlbWluZGVycygpO1xufVxuXG5mdW5jdGlvbiBzaG93TGlzdEhlYWRlcigpIHtcbiAgICBhY3RpdmVMaXN0TmFtZS5pbm5lclRleHQgPSBhY3RpdmVMaXN0KCkudGl0bGU7XG5cbn1cbi8vQWRkIExpc3QgTW9kYWwgZnVuY3Rpb24gYW5kIGxpc3RlbmVyc1xuZnVuY3Rpb24gbmV3TGlzdEZvcm0oKSB7XG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNyZWF0ZUxpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWxpc3QnKTtcbiAgICBjcmVhdGVMaXN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VXBkYXRlTGlzdEZvcm0pO1xuICAgIGNyZWF0ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRMaXN0Rm9ybSk7XG5cbn1cblxuZnVuY3Rpb24gZWRpdExpc3RGb3JtKGV2dCl7XG4gICAgY29uc3QgbGlzdCA9IGV2dC5jdXJyZW50VGFyZ2V0Lmxpc3Q7XG4gICAgY29uc3QgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWxpc3QnKTtcblxuXG4gICAgbGlzdE1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxpc3Rmb3JtLnRpdGxlLnZhbHVlID0gbGlzdC50aXRsZTtcbiAgICBlZGl0TGlzdEJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICBlZGl0TGlzdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdExpc3RGb3JtKTtcbiAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKVxuICAgIGVkaXRMaXN0QnRuLmxpc3QgPSBsaXN0O1xuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFVwZGF0ZUxpc3RGb3JtKGV2dCl7XG5cbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCB0aXRsZSA9IGxpc3Rmb3JtLnRpdGxlLnZhbHVlO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlTGlzdChldnQuY3VycmVudFRhcmdldC5saXN0LCB0aXRsZSk7XG5cbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuXG59XG5mdW5jdGlvbiBzdWJtaXRMaXN0Rm9ybSgpIHtcblxuICAgIGxpc3RNb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFsbExpc3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjcmVhdGVMaXN0KGxpc3Rmb3JtLnRpdGxlLnZhbHVlKTtcbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuXG59XG5cblxuZnVuY3Rpb24gc2hvd1JlbWluZGVycygpIHtcbiAgICBjbGVhclJlbWluZGVycygpO1xuICAgIHNob3dMaXN0SGVhZGVyKCk7XG5cblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtaW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICByZW1pbmRlci5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1jb250YWluZXInKTtcbiAgICAgICAgcmVtaW5kZXIuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaXRlbS5jaGVja2VkID09IHRydWUgPyB0cnVlOiBmYWxzZTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVtaW5kZXJDaGVja0NoYW5nZSk7XG4gICAgICAgIGNoZWNrYm94LmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHJlbWluZGVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdyZW1pbmRlci1jaGVja21hcmsnKTtcbiAgICAgICAgcmVtaW5kZXIuYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcblxuXG5cblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1lZGl0Jyk7XG4gICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFJlbWluZGVyRm9ybSk7XG4gICAgICAgIGVkaXRCdG4ucmVtaW5kZXIgPSBpdGVtO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtaW5kZXItb3B0aW9ucy1yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVSZW1pbmRlcihpbmRleCwgaXRlbS50aXRsZSwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1pbmRlck9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWluZGVyLW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgcmVtaW5kZXJPcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICByZW1pbmRlck9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblxuICAgICAgICByZW1pbmRlci5hcHBlbmRDaGlsZChyZW1pbmRlck9wdGlvbnNDb250YWluZXIpO1xuXG5cblxuXG5cbiAgICAgICAgcmVtaW5kZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWluZGVyKTtcbiAgICAgICAgLy9UT0RPOiBnZW5lcmF0ZSByZW1pbmRlcnMgaGVyZSwgKHRpdGxlLCBkYXRlLCBjb21wbGV0ZWQgc3RhdHVzLCBldGMpXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFJlbWluZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1yZW1pbmRlcicpO1xuICAgIGFkZFJlbWluZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UmVtaW5kZXJGb3JtKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJSZW1pbmRlcnMoKSB7XG4gICAgcmVtaW5kZXJzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xufVxuXG4vL0FkZCBSZW1pbmRlciBNb2RhbCBmdW5jdGlvbnMgYW5kIGxpc3RlbmVyc1xuZnVuY3Rpb24gbmV3UmVtaW5kZXJGb3JtKCkge1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgY3JlYXRlUmVtaW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJlbWluZGVyJyk7XG4gICAgY3JlYXRlUmVtaW5kZXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRVcGRhdGVSZW1pbmRlckZvcm0pO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UmVtaW5kZXJGb3JtKVxuXG59XG5cbmZ1bmN0aW9uIGVkaXRSZW1pbmRlckZvcm0oZXZ0KSB7XG5cbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgY29uc3QgcmVtaW5kZXIgPSBldnQuY3VycmVudFRhcmdldC5yZW1pbmRlcjtcblxuICAgIGNvbnN0IHVwZGF0ZVJlbWluZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuICAgIHVwZGF0ZVJlbWluZGVyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UmVtaW5kZXJGb3JtKTtcbiAgICB1cGRhdGVSZW1pbmRlckJ0bi5pbm5lclRleHQgPSAnVXBkYXRlJztcbiAgICByZW1pbmRlcmZvcm0udGl0bGUudmFsdWUgPSByZW1pbmRlci50aXRsZTtcbiAgICByZW1pbmRlcmZvcm0uZHVlLnZhbHVlID0gcmVtaW5kZXIuZHVlRGF0ZTtcbiAgICByZW1pbmRlcmZvcm0ucHJpb3JpdHkudmFsdWUgPSByZW1pbmRlci5wcmlvcml0eTtcbiAgICB1cGRhdGVSZW1pbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFVwZGF0ZVJlbWluZGVyRm9ybSk7XG4gICAgdXBkYXRlUmVtaW5kZXJCdG4ucmVtaW5kZXIgPSByZW1pbmRlcjtcbiAgICBcblxufVxuXG5mdW5jdGlvbiBzdWJtaXRSZW1pbmRlckZvcm0oKSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjcmVhdGVSZW1pbmRlcihyZW1pbmRlcmZvcm0udGl0bGUudmFsdWUsIHJlbWluZGVyZm9ybS5kdWUudmFsdWUsIHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZSk7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0VXBkYXRlUmVtaW5kZXJGb3JtKGV2dCl7XG5cbiAgICBjb25zdCB0aXRsZSA9IHJlbWluZGVyZm9ybS50aXRsZS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gcmVtaW5kZXJmb3JtLmR1ZS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHJlbWluZGVyZm9ybS5wcmlvcml0eS52YWx1ZTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlUmVtaW5kZXIoZXZ0LmN1cnJlbnRUYXJnZXQucmVtaW5kZXIsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVtaW5kZXJmb3JtLnJlc2V0KCk7XG5cbn1cblxuLy9jaGVja2JveCBjaGFuZ2UgZnVuY3Rpb25cblxuZnVuY3Rpb24gcmVtaW5kZXJDaGVja0NoYW5nZShldnQpe1xuICAgIGNvbnN0IGluZGV4ID0gZXZ0LmN1cnJlbnRUYXJnZXQuaW5kZXg7XG4gICAgY2hlY2tSZW1pbmRlcihpbmRleCwgdGhpcyk7XG5cbn1cblxuLy8gc2hhcmVkIG1vZGFsIGZ1bmN0aW9uc1xucmVtaW5kZXJNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5saXN0TW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHJlbWluZGVyTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0TW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaXN0Zm9ybS5yZXNldCgpO1xuICAgIHJlbWluZGVyZm9ybS5yZXNldCgpO1xuXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlbWluZGVyTW9kYWwoKXtcbiAgICByZW1pbmRlck1vZGFsQ29udGFpbmVyXG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSByZW1pbmRlck1vZGFsQ29udGFpbmVyIHx8IGV2ZW50LnRhcmdldCA9PSBsaXN0TW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IHNob3dMaXN0cywgc2hvd0xpc3RIZWFkZXIsIHNob3dSZW1pbmRlcnMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=