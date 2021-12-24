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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: grey;\n    margin:0;\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/* navigation */\n.navbar{\n    display: flex;\n    height: 45px;\n    background-color: #333;\n\n}\n\n.nav-menu{\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    margin: 0;\n    text-decoration: none;\n    line-height: 16px;\n    font-size: 20px;\n    \n}\n\n.nav-menu:active{\n    background-color: red;\n}\n\n\n.nav-menu:last-child {\n    margin-left: auto;\n  }\n\n  /* side bar */\n\n.main-container{\n    display: flex;\n    flex-direction: row;\n    height: 100vh;\n}\n\n\n\n.side-menu{\nwidth: 22%;\nborder: solid 1px black;\n}\n\n.group-card{\n    width: 85%;\n    height: auto;\n    border-radius: 15px;\n    border: solid 1px black;\n    margin: 15px auto;\n    padding: 10px;\n    position: relative;\n}\n\n.group-item{\n\n    height: 40px;\n\n}\n\n.group-item:not(:first-child){\n    border-top: 1px solid white;\n\n}\n\n\n/* main frame */\n\n.main-menu{\n    width: 78%;\n    border: solid 1px black;\n    \n}\n\n/* header */\n.main-header{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    \n}\n\n.main-header:last-child {\n    margin-left: auto;\n  }\n\n.group-title{\n    font-size: 30px;\n    padding: 20px;\n}\n\n.group-settings{\n    padding-right: 20px;\n    padding-top: 20px;\n}\n\n/* reminder list */\n\n.main-body{\n\n    padding: 20px;\n}\n\n\n\n\n/* The container */\n.container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  /* Hide the browser's default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50px;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: #2196F3;\n    box-sizing: border-box;\n    border: 1px solid white;\n\n  }\n\n/* footer */\n\n.main-footer, .side-footer{\n    bottom: 0;\n    height: 5%;\n    position: absolute;\n    width: 100%;\n    padding-left: 20px;\n}\n\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n\n/*add reminder modal*/\n\n.modal-add-reminder-container{\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    padding-top: 100px;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4);\n    -webkit-transition: 0.5s;\n    overflow: auto;\n    transition: all 0.3s linear;\n}\n\n.modal-add-reminder{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border-radius: 15px;\n    max-width: 800px;\n    height: 350px;\n    \n}\n\n.modal-add-reminder-close:hover{\n    cursor: pointer;\n  }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,QAAQ;IACR,0DAA0D;;AAE9D;;AAEA,eAAe;AACf;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;;AAE1B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,iBAAiB;EACnB;;EAEA,aAAa;;AAEf;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;;;AAIA;AACA,UAAU;AACV,uBAAuB;AACvB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;;AAEhB;;AAEA;IACI,2BAA2B;;AAE/B;;;AAGA,eAAe;;AAEf;IACI,UAAU;IACV,uBAAuB;;AAE3B;;AAEA,WAAW;AACX;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;;AAEf;;AAEA;IACI,iBAAiB;EACnB;;AAEF;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA,kBAAkB;;AAElB;;IAEI,aAAa;AACjB;;;;;AAKA,kBAAkB;AAClB;IACI,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;EACnB;;EAEA,wCAAwC;EACxC;IACE,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,SAAS;IACT,QAAQ;EACV;;EAEA,6BAA6B;EAC7B;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA,+CAA+C;EAC/C;IACE,sBAAsB;EACxB;;EAEA,wDAAwD;EACxD;IACE,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;;EAEzB;;AAEF,WAAW;;AAEX;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA,qBAAqB;;AAErB;IACI,aAAa;IACb,eAAe;IACf,OAAO;IACP,MAAM;IACN,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,oCAAoC;IACpC,wBAAwB;IACxB,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;;AAEjB;;AAEA;IACI,eAAe;EACjB","sourcesContent":["body{\n    background-color: grey;\n    margin:0;\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n}\n\n/* navigation */\n.navbar{\n    display: flex;\n    height: 45px;\n    background-color: #333;\n\n}\n\n.nav-menu{\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    margin: 0;\n    text-decoration: none;\n    line-height: 16px;\n    font-size: 20px;\n    \n}\n\n.nav-menu:active{\n    background-color: red;\n}\n\n\n.nav-menu:last-child {\n    margin-left: auto;\n  }\n\n  /* side bar */\n\n.main-container{\n    display: flex;\n    flex-direction: row;\n    height: 100vh;\n}\n\n\n\n.side-menu{\nwidth: 22%;\nborder: solid 1px black;\n}\n\n.group-card{\n    width: 85%;\n    height: auto;\n    border-radius: 15px;\n    border: solid 1px black;\n    margin: 15px auto;\n    padding: 10px;\n    position: relative;\n}\n\n.group-item{\n\n    height: 40px;\n\n}\n\n.group-item:not(:first-child){\n    border-top: 1px solid white;\n\n}\n\n\n/* main frame */\n\n.main-menu{\n    width: 78%;\n    border: solid 1px black;\n    \n}\n\n/* header */\n.main-header{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    \n}\n\n.main-header:last-child {\n    margin-left: auto;\n  }\n\n.group-title{\n    font-size: 30px;\n    padding: 20px;\n}\n\n.group-settings{\n    padding-right: 20px;\n    padding-top: 20px;\n}\n\n/* reminder list */\n\n.main-body{\n\n    padding: 20px;\n}\n\n\n\n\n/* The container */\n.container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  /* Hide the browser's default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50px;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: #2196F3;\n    box-sizing: border-box;\n    border: 1px solid white;\n\n  }\n\n/* footer */\n\n.main-footer, .side-footer{\n    bottom: 0;\n    height: 5%;\n    position: absolute;\n    width: 100%;\n    padding-left: 20px;\n}\n\n.new-reminder{\n\n}\n\n.new-list{\n\n}\n\n/*add reminder modal*/\n\n.modal-add-reminder-container{\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    padding-top: 100px;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4);\n    -webkit-transition: 0.5s;\n    overflow: auto;\n    transition: all 0.3s linear;\n}\n\n.modal-add-reminder{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border-radius: 15px;\n    max-width: 800px;\n    height: 350px;\n    \n}\n\n.modal-add-reminder-close:hover{\n    cursor: pointer;\n  }\n"],"sourceRoot":""}]);
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
(0,_logic__WEBPACK_IMPORTED_MODULE_1__.createList)("new List");
(0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)("new reminder", "2021-12-31", "low");
(0,_ui__WEBPACK_IMPORTED_MODULE_2__.showReminders)();




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
/* harmony export */   "activeList": () => (/* binding */ activeList)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



const createList = (title) => {

    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.push({
        title,
        reminders: [],
        active: true,
    });
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showLists)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showListHeader)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showReminders)();
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




const listContainer = document.querySelector('.group-card');
const listNameActive = document.querySelector('.main-header');
const remindersContainer = document.querySelector('.main-body');

const addReminderModalContainer = document.querySelector('.modal-add-reminder-container');
const addReminderModalClose = document.querySelector('.modal-add-reminder-close');



function showLists(){
    //clear lists
    _index__WEBPACK_IMPORTED_MODULE_0__.allLists.forEach((item, index) => {
        const list = document.createElement('div');
        list.className = 'group-item';
        list.innerText = item.title;
        listContainer.appendChild(list);

    });
    const addListBtn = document.querySelector('.new-list');
    addListBtn.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_1__.createList);

}

function clearLists(){
    listContainer.innerHTML = '';
}

function showListHeader(){
    //TODO: put list title in active reminders list
}

function showReminders(){
    clearReminders();
    listNameActive.innerText = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().title;


(0,_logic__WEBPACK_IMPORTED_MODULE_1__.activeList)().reminders.forEach((item, index) => {
    const reminder = document.createElement('label');
    reminder.classList.add('container');
    reminder.innerText = item.title;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    reminder.appendChild(checkbox);

    const checkIcon = document.createElement('span');
    checkIcon.classList.add('checkmark');
    reminder.appendChild(checkIcon);

    remindersContainer.appendChild(reminder);
    //TODO: generate reminders here, (title, date, completed status, etc)
})

const addReminderBtn = document.querySelector('.new-reminder');
addReminderBtn.addEventListener('click', newReminderForm);
}



function clearReminders(){
    remindersContainer.innerHTML = '';
}

//Add Reminder Modal functions and listeners

addReminderModalClose.addEventListener('click', closeModal);

function newReminderForm(){


    addReminderModalContainer.style.display = 'block';
    const createReminderBtn = document.getElementById('add-reminder');
    createReminderBtn.addEventListener('click', submitReminderForm)

}

function submitReminderForm(){
 
        event.preventDefault();
        addReminderModalContainer.style.display = 'none';
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createReminder)(form.title.value, form.due.value, form.priority.value);
        form.reset();
    
}
  
  function closeModal() {
    addReminderModalContainer.style.display = 'none';
  }
  
  window.onclick = function (event) {
    if (event.target == addReminderModalContainer) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW1pbmRlcnMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3JlbWluZGVycy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlbWluZGVycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVtaW5kZXJzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZW1pbmRlcnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbi8qIG5hdmlnYXRpb24gKi9cXG4ubmF2YmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuXFxufVxcblxcbi5uYXYtbWVudXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4ubmF2LW1lbnU6YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5uYXYtbWVudTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XFxuXFxuICAvKiBzaWRlIGJhciAqL1xcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuXFxuXFxuLnNpZGUtbWVudXtcXG53aWR0aDogMjIlO1xcbmJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uZ3JvdXAtY2FyZHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyb3VwLWl0ZW17XFxuXFxuICAgIGhlaWdodDogNDBweDtcXG5cXG59XFxuXFxuLmdyb3VwLWl0ZW06bm90KDpmaXJzdC1jaGlsZCl7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG59XFxuXFxuXFxuLyogbWFpbiBmcmFtZSAqL1xcblxcbi5tYWluLW1lbnV7XFxuICAgIHdpZHRoOiA3OCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBcXG59XFxuXFxuLyogaGVhZGVyICovXFxuLm1haW4taGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuXFxuLm1haW4taGVhZGVyOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG5cXG4uZ3JvdXAtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmdyb3VwLXNldHRpbmdze1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLyogcmVtaW5kZXIgbGlzdCAqL1xcblxcbi5tYWluLWJvZHl7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcblxcblxcblxcbi8qIFRoZSBjb250YWluZXIgKi9cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4gIC5jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuICAuY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgfVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXG4gIH1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG4ubWFpbi1mb290ZXIsIC5zaWRlLWZvb3RlcntcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uZXctcmVtaW5kZXJ7XFxuXFxufVxcblxcbi5uZXctbGlzdHtcXG5cXG59XFxuXFxuLyphZGQgcmVtaW5kZXIgbW9kYWwqL1xcblxcbi5tb2RhbC1hZGQtcmVtaW5kZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbC1hZGQtcmVtaW5kZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgXFxufVxcblxcbi5tb2RhbC1hZGQtcmVtaW5kZXItY2xvc2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsMERBQTBEOztBQUU5RDs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxpQkFBaUI7RUFDbkI7O0VBRUEsYUFBYTs7QUFFZjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7OztBQUlBO0FBQ0EsVUFBVTtBQUNWLHVCQUF1QjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0I7OztBQUdBLGVBQWU7O0FBRWY7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCOztBQUUzQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUEsa0JBQWtCOztBQUVsQjs7SUFFSSxhQUFhO0FBQ2pCOzs7OztBQUtBLGtCQUFrQjtBQUNsQjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQSx3Q0FBd0M7RUFDeEM7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtFQUNWOztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQSwrQ0FBK0M7RUFDL0M7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUEsd0RBQXdEO0VBQ3hEO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0VBRXpCOztBQUVGLFdBQVc7O0FBRVg7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksZUFBZTtFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG5cXG59XFxuXFxuLyogbmF2aWdhdGlvbiAqL1xcbi5uYXZiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG5cXG59XFxuXFxuLm5hdi1tZW51e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgXFxufVxcblxcbi5uYXYtbWVudTphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLm5hdi1tZW51Omxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG5cXG4gIC8qIHNpZGUgYmFyICovXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5cXG5cXG4uc2lkZS1tZW51e1xcbndpZHRoOiAyMiU7XFxuYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5ncm91cC1jYXJke1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3JvdXAtaXRlbXtcXG5cXG4gICAgaGVpZ2h0OiA0MHB4O1xcblxcbn1cXG5cXG4uZ3JvdXAtaXRlbTpub3QoOmZpcnN0LWNoaWxkKXtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcblxcbn1cXG5cXG5cXG4vKiBtYWluIGZyYW1lICovXFxuXFxuLm1haW4tbWVudXtcXG4gICAgd2lkdGg6IDc4JTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIFxcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG4ubWFpbi1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4ubWFpbi1oZWFkZXI6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcblxcbi5ncm91cC10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZ3JvdXAtc2V0dGluZ3N7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4vKiByZW1pbmRlciBsaXN0ICovXFxuXFxuLm1haW4tYm9keXtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuXFxuXFxuLyogVGhlIGNvbnRhaW5lciAqL1xcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgXFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcbiAgfVxcblxcbi8qIGZvb3RlciAqL1xcblxcbi5tYWluLWZvb3RlciwgLnNpZGUtZm9vdGVye1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLm5ldy1yZW1pbmRlcntcXG5cXG59XFxuXFxuLm5ldy1saXN0e1xcblxcbn1cXG5cXG4vKmFkZCByZW1pbmRlciBtb2RhbCovXFxuXFxuLm1vZGFsLWFkZC1yZW1pbmRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG59XFxuXFxuLm1vZGFsLWFkZC1yZW1pbmRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBcXG59XFxuXFxuLm1vZGFsLWFkZC1yZW1pbmRlci1jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2NyZWF0ZUxpc3QsIGNyZWF0ZVJlbWluZGVyfSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7c2hvd0xpc3RzLCBzaG93TGlzdEhlYWRlciwgc2hvd1JlbWluZGVyc30gZnJvbSAnLi91aSc7XG5cbmxldCBhbGxMaXN0cyA9IFtdO1xuXG4vL3RvZG86IG5ldyBsaXN0ID0gY3JlYXRlIGxpc3QsIHB1c2ggaW50byBhbGwgbGlzdCwgcmVuZGVyIG9uIHRoZSBVSVxuY3JlYXRlTGlzdChcIm5ldyBMaXN0XCIpO1xuY3JlYXRlUmVtaW5kZXIoXCJuZXcgcmVtaW5kZXJcIiwgXCIyMDIxLTEyLTMxXCIsIFwibG93XCIpO1xuc2hvd1JlbWluZGVycygpO1xuXG5cbmV4cG9ydCB7YWxsTGlzdHN9OyIsImltcG9ydCB7IGFsbExpc3RzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge3Nob3dMaXN0cywgc2hvd0xpc3RIZWFkZXIsIHNob3dSZW1pbmRlcnN9IGZyb20gJy4vdWknO1xuXG5jb25zdCBjcmVhdGVMaXN0ID0gKHRpdGxlKSA9PiB7XG5cbiAgICBhbGxMaXN0cy5wdXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHJlbWluZGVyczogW10sXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBzaG93TGlzdHMoKTtcbiAgICBzaG93TGlzdEhlYWRlcigpO1xuICAgIHNob3dSZW1pbmRlcnMoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlbWluZGVyID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuLy9UT0RPIExvY2FsIFN0b3JhZ2VcblxuICAgIGFjdGl2ZUxpc3QoKS5yZW1pbmRlcnMucHVzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbiAgICBcbiAgICBzaG93UmVtaW5kZXJzKCk7XG59O1xuXG5cblxuZnVuY3Rpb24gYWN0aXZlTGlzdCgpe1xuICAgIGxldCBhY3RpdmVMaXN0QXJyYXkgPSBhbGxMaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0LmFjdGl2ZSk7XG4gICAgcmV0dXJuIGFjdGl2ZUxpc3RBcnJheVswXTtcbn1cblxuZXhwb3J0IHtjcmVhdGVMaXN0LCBjcmVhdGVSZW1pbmRlciwgYWN0aXZlTGlzdH07IiwiaW1wb3J0IHsgYWxsTGlzdHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7YWN0aXZlTGlzdCwgY3JlYXRlTGlzdCwgY3JlYXRlUmVtaW5kZXJ9IGZyb20gJy4vbG9naWMnO1xuXG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtY2FyZCcpO1xuY29uc3QgbGlzdE5hbWVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXInKTtcbmNvbnN0IHJlbWluZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcblxuY29uc3QgYWRkUmVtaW5kZXJNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtcmVtaW5kZXItY29udGFpbmVyJyk7XG5jb25zdCBhZGRSZW1pbmRlck1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLXJlbWluZGVyLWNsb3NlJyk7XG5cblxuXG5mdW5jdGlvbiBzaG93TGlzdHMoKXtcbiAgICAvL2NsZWFyIGxpc3RzXG4gICAgYWxsTGlzdHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTmFtZSA9ICdncm91cC1pdGVtJztcbiAgICAgICAgbGlzdC5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgfSk7XG4gICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbGlzdCcpO1xuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVMaXN0KTtcblxufVxuXG5mdW5jdGlvbiBjbGVhckxpc3RzKCl7XG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gc2hvd0xpc3RIZWFkZXIoKXtcbiAgICAvL1RPRE86IHB1dCBsaXN0IHRpdGxlIGluIGFjdGl2ZSByZW1pbmRlcnMgbGlzdFxufVxuXG5mdW5jdGlvbiBzaG93UmVtaW5kZXJzKCl7XG4gICAgY2xlYXJSZW1pbmRlcnMoKTtcbiAgICBsaXN0TmFtZUFjdGl2ZS5pbm5lclRleHQgPSBhY3RpdmVMaXN0KCkudGl0bGU7XG5cblxuYWN0aXZlTGlzdCgpLnJlbWluZGVycy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlbWluZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICByZW1pbmRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICByZW1pbmRlci5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICByZW1pbmRlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICBjb25zdCBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbWFyaycpO1xuICAgIHJlbWluZGVyLmFwcGVuZENoaWxkKGNoZWNrSWNvbik7XG5cbiAgICByZW1pbmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtaW5kZXIpO1xuICAgIC8vVE9ETzogZ2VuZXJhdGUgcmVtaW5kZXJzIGhlcmUsICh0aXRsZSwgZGF0ZSwgY29tcGxldGVkIHN0YXR1cywgZXRjKVxufSlcblxuY29uc3QgYWRkUmVtaW5kZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXJlbWluZGVyJyk7XG5hZGRSZW1pbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1JlbWluZGVyRm9ybSk7XG59XG5cblxuXG5mdW5jdGlvbiBjbGVhclJlbWluZGVycygpe1xuICAgIHJlbWluZGVyc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cblxuLy9BZGQgUmVtaW5kZXIgTW9kYWwgZnVuY3Rpb25zIGFuZCBsaXN0ZW5lcnNcblxuYWRkUmVtaW5kZXJNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbmZ1bmN0aW9uIG5ld1JlbWluZGVyRm9ybSgpe1xuXG5cbiAgICBhZGRSZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNyZWF0ZVJlbWluZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yZW1pbmRlcicpO1xuICAgIGNyZWF0ZVJlbWluZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UmVtaW5kZXJGb3JtKVxuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFJlbWluZGVyRm9ybSgpe1xuIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRSZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNyZWF0ZVJlbWluZGVyKGZvcm0udGl0bGUudmFsdWUsIGZvcm0uZHVlLnZhbHVlLCBmb3JtLnByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIFxufVxuICBcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBhZGRSZW1pbmRlck1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhZGRSZW1pbmRlck1vZGFsQ29udGFpbmVyKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cblxuICAgIFxuZXhwb3J0IHtzaG93TGlzdHMsIHNob3dMaXN0SGVhZGVyLCBzaG93UmVtaW5kZXJzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=