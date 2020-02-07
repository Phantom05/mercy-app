module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/_app.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es7.weak-map.of */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js");
__webpack_require__(/*! ../modules/es7.weak-map.from */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").WeakMap;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*****************************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!****************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../node_modules/@redq/reuse-modal/lib/index.css":
/*!*******************************************************!*\
  !*** ../node_modules/@redq/reuse-modal/lib/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/rc-collapse/assets/index.css":
/*!****************************************************!*\
  !*** ../node_modules/rc-collapse/assets/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/rc-table/assets/index.css":
/*!*************************************************!*\
  !*** ../node_modules/rc-table/assets/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-multi-carousel/lib/styles.css":
/*!***********************************************************!*\
  !*** ../node_modules/react-multi-carousel/lib/styles.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/AllSvgIcon.tsx":
/*!***********************************!*\
  !*** ./components/AllSvgIcon.tsx ***!
  \***********************************/
/*! exports provided: Accessories, BathOil, BeautyHealth, Beverage, Breakfast, Cooking, Dairy, Deodorent, Eyes, Face, FacialCare, FruitsVegetable, HandBags, HomeCleaning, LaptopBags, Lips, MeatFish, OralCare, OuterWear, Pants, PetCare, Purse, ShavingNeeds, Shirts, ShoulderBags, Skirts, Snacks, Tops, Wallet, WomenDress, Google, GooglePlus, Facebook, Twitter, Linkedin, MinusSquareO, PlusSquareO, CloseSquareO, Plus, Minus, CartIcon, GroceryIcon, MakeupIcon, MedicineIcon, DressIcon, Handbag, EllipsisIcon, GiftBox, ArrowNext, ArrowPrev, LockIcon, SearchIcon, SearchIconSmall, SmartPhone, CloseIcon, CategoryIcon, ArrowDropDown, ShoppingBag, ShoppingBagLarge, PencilIcon, LongArrowLeft, CheckMark, NotificationIcon, AlertDotIcon, DashboardIcon, ProductIcon, SidebarCategoryIcon, OrderIcon, CustomerIcon, InboxIcon, RefundIcon, CouponIcon, SettingIcon, LogoutIcon, CarretDownIcon, CarretUpIcon, OptionIcon, Revenue, Refund, ArrowUp, ArrowDown, UploadIcon, SiteSettings, Members, MenuIcon, ArrowLeftRound, CoinIcon, CartIconBig, UserIcon, DeliveryIcon, IosArrowUp, IosArrowDown, MenuDown, HelpIcon, SAFlag, DEFlag, ESFlag, ILFlag, CNFlag, USFlag, InkPen, AdobeIcon, UserAvatar, BookIcon, FurnitureIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessories", function() { return Accessories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathOil", function() { return BathOil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyHealth", function() { return BeautyHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beverage", function() { return Beverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakfast", function() { return Breakfast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cooking", function() { return Cooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dairy", function() { return Dairy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deodorent", function() { return Deodorent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eyes", function() { return Eyes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Face", function() { return Face; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacialCare", function() { return FacialCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitsVegetable", function() { return FruitsVegetable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandBags", function() { return HandBags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCleaning", function() { return HomeCleaning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopBags", function() { return LaptopBags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lips", function() { return Lips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeatFish", function() { return MeatFish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OralCare", function() { return OralCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterWear", function() { return OuterWear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pants", function() { return Pants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetCare", function() { return PetCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purse", function() { return Purse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShavingNeeds", function() { return ShavingNeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shirts", function() { return Shirts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoulderBags", function() { return ShoulderBags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skirts", function() { return Skirts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snacks", function() { return Snacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tops", function() { return Tops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenDress", function() { return WomenDress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Google", function() { return Google; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlus", function() { return GooglePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusSquareO", function() { return MinusSquareO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusSquareO", function() { return PlusSquareO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSquareO", function() { return CloseSquareO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return Minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIcon", function() { return CartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryIcon", function() { return GroceryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeupIcon", function() { return MakeupIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineIcon", function() { return MedicineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DressIcon", function() { return DressIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handbag", function() { return Handbag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisIcon", function() { return EllipsisIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftBox", function() { return GiftBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowNext", function() { return ArrowNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowPrev", function() { return ArrowPrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockIcon", function() { return LockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIconSmall", function() { return SearchIconSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartPhone", function() { return SmartPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDropDown", function() { return ArrowDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBag", function() { return ShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagLarge", function() { return ShoppingBagLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilIcon", function() { return PencilIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongArrowLeft", function() { return LongArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMark", function() { return CheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationIcon", function() { return NotificationIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDotIcon", function() { return AlertDotIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardIcon", function() { return DashboardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductIcon", function() { return ProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCategoryIcon", function() { return SidebarCategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderIcon", function() { return OrderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIcon", function() { return CustomerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxIcon", function() { return InboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundIcon", function() { return RefundIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponIcon", function() { return CouponIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingIcon", function() { return SettingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutIcon", function() { return LogoutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarretDownIcon", function() { return CarretDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarretUpIcon", function() { return CarretUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionIcon", function() { return OptionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Revenue", function() { return Revenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Refund", function() { return Refund; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return ArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return ArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadIcon", function() { return UploadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSettings", function() { return SiteSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return MenuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftRound", function() { return ArrowLeftRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinIcon", function() { return CoinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIconBig", function() { return CartIconBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryIcon", function() { return DeliveryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosArrowUp", function() { return IosArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosArrowDown", function() { return IosArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDown", function() { return MenuDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return HelpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAFlag", function() { return SAFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFlag", function() { return DEFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESFlag", function() { return ESFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ILFlag", function() { return ILFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CNFlag", function() { return CNFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USFlag", function() { return USFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InkPen", function() { return InkPen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdobeIcon", function() { return AdobeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookIcon", function() { return BookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIcon", function() { return FurnitureIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/AllSvgIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Accessories = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 15",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 53",
    d: "M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 54",
    d: "M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 55",
    d: "M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 56",
    d: "M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 57",
    d: "M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 58",
    d: "M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 59",
    d: "M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })));
};
const BathOil = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 27",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 67",
    d: "M3.866 16.077a2.481 2.481 0 001.645-1.613h-.42q-.269 0-.531-.012a1.23 1.23 0 01-.87.755.724.724 0 10.175.863z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 68",
    d: "M15.172 16.479a.725.725 0 10-.432-1.309 1.458 1.458 0 01-.78-.77 4.085 4.085 0 01-.686.062h-.315a2.318 2.318 0 001.543 1.579.725.725 0 00.67.438z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 69",
    d: "M13.988 2.638l-1.482-1.482a5.015 5.015 0 00-1.356.863l1.972 1.972a4.972 4.972 0 00.866-1.353z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 70",
    d: "M11.173 3.19a.148.148 0 00.108-.043l.208-.208a.147.147 0 00-.164-.237.15.15 0 00-.044.029l-.209.208a.148.148 0 00.108.252z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 71",
    d: "M10.547 3.819a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 72",
    d: "M9.92 4.445a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 73",
    d: "M11.932 3.313a.146.146 0 00-.193-.193.15.15 0 00-.044.029l-.208.209a.148.148 0 00.209.208l.208-.209a.144.144 0 00.028-.044z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 74",
    d: "M11.277 3.775a.148.148 0 00-.208 0l-.208.208a.148.148 0 00.209.208l.208-.208a.148.148 0 000-.208z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 75",
    d: "M10.652 4.402a.148.148 0 00-.208 0l-.208.209a.148.148 0 00.209.208l.208-.209a.148.148 0 000-.208z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 76",
    d: "M12.007 4.028a.148.148 0 00.108-.043l.208-.208a.143.143 0 00.029-.044.148.148 0 00-.238-.164l-.208.208a.148.148 0 000 .208.146.146 0 00.101.043z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 77",
    d: "M11.38 4.654a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 78",
    d: "M10.756 5.28a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 79",
    d: "M17.414 7.083h-.886V.295a.295.295 0 00-.3-.3h-1.277a.3.3 0 00-.2.078l-1.061.976a1.175 1.175 0 00-.69.096l1.013 1.014a1.187 1.187 0 00.083-.68l.966-.888h.872v6.493H.59a.59.59 0 00-.59.591v.59a.59.59 0 00.59.59h.367c.045.229.108.491.176.794l.413 1.98a2.9 2.9 0 003.138 2.53c.134 0 .27.006.408.006h8.191a3.876 3.876 0 00.565-.041 3.157 3.157 0 002.637-2.342l.671-2.929h.3A.588.588 0 0018 8.265v-.59a.59.59 0 00-.586-.592zm-4.7 6.168a.035.035 0 000 .005v-.005z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })));
};
const BeautyHealth = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 11",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 31",
    d: "M2.662 15.865a.612.612 0 00.611.611H4.82a.612.612 0 00.611-.611v-1.368H2.662z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 32",
    d: "M1.435 13.195a.793.793 0 00.791.791h3.64a.793.793 0 00.791-.791l1.015-8.766-6.614 5.507z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 33",
    d: "M7.3 0H.791A.791.791 0 000 .79l.917 7.919 6.927-5.768L8.093.79a.791.791 0 00-.792-.791z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 34",
    d: "M15.238 7.065a.769.769 0 00-.769-.769h-1.9a.769.769 0 00-.769.769v1.742h3.443z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 35",
    d: "M16.269 9.343a2.021 2.021 0 00-.275-.02h-4.956a2.006 2.006 0 00-2 2v3.661a2 2 0 002 2h4.956a2 2 0 002.005-2v-3.66a2 2 0 00-1.731-1.985zm-2.753 5.4a1.582 1.582 0 111.582-1.582 1.582 1.582 0 01-1.582 1.582z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }))));
};
const Beverage = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 30",
    d: "M12.405.7a3.635 3.635 0 00-3.591 3.1H4.4L.811 0 .043.723l2.9 3.084H-.001l6.262 7.018v6.121H3.327V18h7.03v-1.054H7.32v-6.122l3.091-3.46a3.629 3.629 0 102-6.66zM9.817 6.442H3.771L2.358 4.863h8.87z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })));
};
const Breakfast = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 7",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 27",
    d: "M13.034 14.465c2.98-.12 4.31-1.476 4.31-3.136 0-1.442-1-2.655-3.217-3.028.01-.539.011-1.054.011-1.536H0c0 3.158 0 7.743 2.84 9.935-1.724.131-2.84.342-2.84.577 0 .4 3.163.723 7.067.723s7.066-.323 7.066-.723c0-.236-1.118-.446-2.84-.577a5.965 5.965 0 001.741-2.235zm1.035-4.79c1.243.288 1.465.9 1.451 1.687-.016.9-.276 1.508-1.973 1.712a16.339 16.339 0 00.521-3.4zM1.706 7.862h2.209c-.99 2.922.681 7.542.68 7.542-3.611-2.765-2.889-7.542-2.889-7.542z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M8.229 4.861c.281-2.545 5.9-1.272 4.729-4.576-.18-.5-.989-.287-.808.222.514 1.449-1.437 1.625-2.432 1.958a2.92 2.92 0 00-2.328 2.4c-.061.534.774.528.839-.004z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M12.207 3.082a2.924 2.924 0 00-2.439 1.879.419.419 0 00.807.222c.377-1.272 2.047-1.293 3.115-1.6a2.031 2.031 0 001.644-2.346c-.069-.528-.906-.539-.837 0 .195 1.472-1.16 1.579-2.29 1.845z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  })));
};
const Cooking = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 22",
    d: "M13.68 6.482H9.835a.63.63 0 100-1.259H8.268a.63.63 0 000 1.259H4.417a2.327 2.327 0 00-2.127 1.98h13.52a2.328 2.328 0 00-2.13-1.98z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M15.84 9.544v-.18H0v.9h2.256v5.578a2.16 2.16 0 002.16 2.16h9.264a2.16 2.16 0 002.16-2.16v-5.398H18v-.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M5.743 2.166a3.089 3.089 0 00.2.237l.175.175c.112.112.213.224.294.321a1.464 1.464 0 01.1.137.266.266 0 01.051.112.269.269 0 01-.068.178 1.08 1.08 0 01-.2.188.636.636 0 00.309.036.544.544 0 00.336-.167.655.655 0 00.165-.4 1.1 1.1 0 00-.043-.375 1.972 1.972 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.69 1.736 1.736 0 01.157-.945 1.162 1.162 0 00-.858.873 1.4 1.4 0 00.017.7 1.888 1.888 0 00.289.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M8.077 2.166c.063.083.13.162.2.237l.173.175c.112.112.213.224.3.321.039.05.073.1.1.137a.243.243 0 01.05.112.264.264 0 01-.067.178 1.041 1.041 0 01-.2.188.642.642 0 00.31.036.543.543 0 00.336-.167.653.653 0 00.165-.4 1.1 1.1 0 00-.041-.375 2 2 0 00-.28-.572c-.055-.082-.124-.165-.173-.224a1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.694A1.736 1.736 0 018.63 0a1.161 1.161 0 00-.857.873 1.4 1.4 0 00.016.7 1.884 1.884 0 00.289.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.204 2.166a2.971 2.971 0 00.2.237l.175.175c.112.112.212.224.294.321a1.465 1.465 0 01.1.137.28.28 0 01.051.112.266.266 0 01-.068.178 1.041 1.041 0 01-.2.188.64.64 0 00.309.036.547.547 0 00.336-.167.654.654 0 00.163-.4 1.086 1.086 0 00-.041-.375 1.96 1.96 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.672 1.672 0 01-.135-.176 1.679 1.679 0 01-.33-.694 1.738 1.738 0 01.151-.941A1.16 1.16 0 009.9.874a1.4 1.4 0 00.017.7 1.857 1.857 0 00.29.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  })));
};
const Dairy = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 19",
    d: "M4.313 14.945V12.23a.34.34 0 00-.34-.34H.332a5.534 5.534 0 00-.125 3.393h3.767a.34.34 0 00.339-.338z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M7.652 16.402l.345-.4a3.843 3.843 0 00-.065-4.593l-.223-.278V9.176a1.876 1.876 0 01-.21-.465 1.015 1.015 0 00-.462-1.925H2.968a1.018 1.018 0 00-.391 1.958A2.656 2.656 0 011.7 9.93a4.641 4.641 0 00-1.056 1.282h3.331a1.019 1.019 0 011.014 1.017v2.714a1.019 1.019 0 01-1.018 1.018H.462A3.259 3.259 0 003.41 18h3.261a3.056 3.056 0 001.428-.36 2.313 2.313 0 01-.321-.723zM3.689 8.147h-.722a.34.34 0 010-.678h4.07a.34.34 0 110 .678H3.682z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Rectangle 1",
    d: "M13.136 7.14h3.732v7.465h-3.732z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M15.237 3.144l-.25-.21a.4.4 0 01-.13-.321.547.547 0 01.062-.221h-2.368a.34.34 0 010-.678h2.886a1.006 1.006 0 00.071-.353v-.343A1.019 1.019 0 0014.492 0H10.76a1.019 1.019 0 00-1.018 1.018v.34a1 1 0 00.072.353h1.38a.34.34 0 010 .678h-.838a.546.546 0 01.073.2.355.355 0 01-.081.284.68.68 0 01-.063.063c-.077.066-.158.133-.241.2a3.638 3.638 0 00-1.657 2.967v4.786l.074.092a4.507 4.507 0 01.049 5.461l-.115.133.042.171a1.619 1.619 0 001.572 1.233h5.24a1.623 1.623 0 001.622-1.622v-1.074h-4.414V6.462h4.411v-.355a3.645 3.645 0 00-1.631-2.963z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  })));
};
const Deodorent = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "018---Roll-On",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, __jsx("ellipse", {
    cx: "1.607",
    cy: "3.535",
    rx: "1.607",
    ry: "3.535",
    transform: "translate(2.176 8.678)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }), __jsx("path", {
    d: "M7.244 4.821H.321a.321.321 0 00-.32.356l.027.254a71.835 71.835 0 01.311 11.215A1.282 1.282 0 001.621 18h4.325a1.282 1.282 0 001.282-1.353 71.835 71.835 0 01.3-11.214l.027-.254a.321.321 0 00-.316-.358zm-6.355.962a.321.321 0 01.321-.321h.641a.321.321 0 110 .641H1.21a.321.321 0 01-.321-.32zm2.9 10.607c-1.261 0-2.25-1.832-2.25-4.178s.988-4.178 2.25-4.178 2.25 1.832 2.25 4.178-.995 4.181-2.256 4.181zM6.354 6.104H3.14a.321.321 0 110-.641h3.214a.321.321 0 110 .641z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M3.783 0a2.25 2.25 0 00-2.224 1.929h4.447A2.25 2.25 0 003.783 0zM6.443 2.572H1.128a5.946 5.946 0 00-.237 1.607h5.785a5.946 5.946 0 00-.233-1.607zM11.82 16.716h3.214v-1.284a2.893 2.893 0 10-5.786 0v1.284h.964a.321.321 0 010 .641h-.964v.321a.321.321 0 00.321.321h5.143a.321.321 0 00.321-.321v-.321H11.82a.321.321 0 110-.641zm-.964-1.929a.321.321 0 01-.641 0 1.55 1.55 0 011.606-1.608.321.321 0 110 .641.916.916 0 00-.966.964z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  })));
};
const Eyes = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 49",
    d: "M3.002 0h-1.5v.75h-1.5v1.5h1.5V3h-1.5v1.5h1.5v.75h-1.5v1.5h1.5v3.75h-.75a.75.75 0 00-.744.842l.75 6a.75.75 0 00.744.657h1.5a.75.75 0 00.744-.657l.75-6a.75.75 0 00-.744-.842h-.75V6.748h1.5v-1.5h-1.5V4.5h1.5V3h-1.5v-.75h1.5V.75h-1.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 50",
    d: "M11.995 17.187l-.746-9.69h-4.5l-.747 9.69a.75.75 0 00.748.807h4.5a.75.75 0 00.748-.807z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 51",
    d: "M11.251 5.249a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5h4.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  })));
};
const Face = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 41",
    d: "M6.388 9.238c-3.319 0-5.11 1.36-5.11 1.911s1.791 1.911 5.11 1.911a9.995 9.995 0 002.653-.345 5.1 5.1 0 011.387-2.612 8.865 8.865 0 00-4.04-.864z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 42",
    d: "M8.34 8.908a7.515 7.515 0 012.3.841 5.111 5.111 0 01.581-.391 7 7 0 00-1.969-.887 5.957 5.957 0 01-.912.438z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 43",
    d: "M8.958 13.383a10.774 10.774 0 01-2.571.3c-3.29 0-5.749-1.349-5.749-2.555 0-.908 1.394-1.9 3.484-2.33a6.017 6.017 0 01-.9-.433c-1.96.571-3.224 1.647-3.224 2.762 0 1.731 2.922 3.193 6.388 3.193a11.64 11.64 0 002.573-.285c-.008-.112-.018-.234-.018-.354.002-.097.011-.197.017-.298z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 44",
    d: "M6.388 8.952a4.833 4.833 0 005.11-4.471A4.833 4.833 0 006.388.01a4.833 4.833 0 00-5.11 4.471 4.833 4.833 0 005.11 4.471zm0-8.3a4.194 4.194 0 014.471 3.833 4.194 4.194 0 01-4.471 3.833A4.194 4.194 0 011.917 4.48 4.194 4.194 0 016.388.647z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 45",
    d: "M6.391 7.675a3.561 3.561 0 003.833-3.193 3.561 3.561 0 00-3.833-3.195A3.561 3.561 0 002.558 4.48a3.561 3.561 0 003.833 3.195zm0-5.749a2.969 2.969 0 013.193 2.555h-.638c0-1.039-1.17-1.911-2.555-1.911z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 46",
    d: "M17.39 11.304a6.91 6.91 0 01-.592.319 5.4 5.4 0 00-2.518 2.518 6.026 6.026 0 01-2.81 2.81 7.22 7.22 0 00-.486.259 4.466 4.466 0 006.407-5.9zm-3.877 6.051v-.638a3.238 3.238 0 00.581-.053l.112.628a3.847 3.847 0 01-.694.063zm1.394-.261l-.233-.595a3.176 3.176 0 002.032-2.976h.638a3.812 3.812 0 01-2.438 3.571z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 47",
    d: "M12.66 15.332a4.74 4.74 0 001.044-1.472 6.029 6.029 0 012.809-2.815c.173-.085.337-.17.518-.278a4.527 4.527 0 00-.4-.45 6.37 6.37 0 01-.731.407 5.386 5.386 0 00-2.512 2.521 6.03 6.03 0 01-2.81 2.81 6.962 6.962 0 00-.532.285 4.507 4.507 0 00.414.438 6.34 6.34 0 01.727-.406 4.733 4.733 0 001.474-1.042z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 48",
    d: "M11.769 14.439a4.74 4.74 0 001.044-1.472 6.022 6.022 0 012.81-2.81c.166-.082.328-.164.5-.265a4.462 4.462 0 00-6.435 5.922c.219-.136.419-.236.614-.337a4.747 4.747 0 001.47-1.037z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  })));
};
const FacialCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: undefined
  }, __jsx("path", {
    d: "M14.651 1.933a3.534 3.534 0 00-3.5 6.1h.1a1.285 1.285 0 011.033.527 3.549 3.549 0 002.37-.206 3.213 3.213 0 110-6.425z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M12.86 0a5.147 5.147 0 00-4.247 8.037h1.555a4.176 4.176 0 014.755-6.693.643.643 0 01-.244 1.226 2.57 2.57 0 000 5.14.643.643 0 01.248 1.23 4.207 4.207 0 01-2.261.349c-.173-.021-.125-.045-.125.032v.958A5.143 5.143 0 0012.862 0zM1.284 16.715h4.5a.322.322 0 110 .643H1.915a2.362 2.362 0 001.606.643h6.457a2.19 2.19 0 001.113-.292 5.568 5.568 0 002.365-4.533H.046a6.639 6.639 0 001.238 3.534zm5.792 0a.321.321 0 11-.321.321.321.321 0 01.321-.321zM12.77 11.253H.731a.743.743 0 00-.731.75c0 .176 0 .3.007.535h13.486c.007-.244.007-.373.007-.535a.743.743 0 00-.73-.75z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M1.607 9.322v1.285h10.288V9.322a.643.643 0 00-.642-.642h-9a.643.643 0 00-.646.642z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: undefined
  }));
};
const FruitsVegetable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Layer 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 16",
    d: "M10.235 3.966a2.943 2.943 0 00-1.38-2.122c-.528-.243-.485-.618-.338-.854s.41-.231.832.164a5 5 0 011.368 2.87z",
    fill: color,
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M14.731 5.045s1.506 1.544.714 2.993c-.287.526-1.2.192-1.234-.485s.25-1.27-.236-2.05c-.349-.566.26-.878.756-.458z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 22",
    d: "M10.516 4.513a10.193 10.193 0 015.63-2.863c-2.736-.521-6.018 1.748-6.018 1.748s.289.864.388 1.115z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".035",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3.19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".069",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.895 9.896c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308 4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M1.595 11.342a4.375 4.375 0 00.128.684 2.664 2.664 0 00.3.335c1.067 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.2 1.2 0 001.232-.735 4.126 4.126 0 00-.121-.509c-.272-.876-1.974-1.644-4.239-1.715a5.286 5.286 0 00-4.515 1.858 2.024 2.024 0 00-.545 1.31z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M1.921 9.984a1.569 1.569 0 00.1 2.377c1.066 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.183 1.183 0 001.259-.823 1.321 1.321 0 00-.785-1.413",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M8.013 10.78c-.018.471-.87.791-1.9.752s-1.856-.423-1.837-.9.87-.963 1.9-.924 1.855.605 1.837 1.072z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9.722 12.123a2.411 2.411 0 01.467 2.08 2.759 2.759 0 01-1.5 2.427",
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: undefined
  }))));
};
const HandBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 10",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 45",
    d: "M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Rectangle 36",
    d: "M.102 8.77h17.795v.913H.102z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 46",
    d: "M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: undefined
  }))));
};
const HomeCleaning = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(-1.125 -1.125)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 7",
    d: "M1.125 18.54H1.7v.58h-.58z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 8",
    d: "M18.54 18.54h.58v.58h-.58z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: undefined
  }), __jsx("circle", {
    "data-name": "Ellipse 1",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(14.28 9.345)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 9",
    d: "M9.834 10.968V9.543H8.409a1.744 1.744 0 001.425 1.425z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: undefined
  }), __jsx("circle", {
    "data-name": "Ellipse 2",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(4.99 12.247)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 10",
    d: "M9.834 7.537a1.744 1.744 0 00-1.425 1.425h1.425z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 11",
    d: "M2.867 15.64h3.486v.58H2.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 12",
    d: "M13.898 15.64h3.491v.58h-3.491z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 13",
    d: "M16.802 16.801H14.48v1.742h-.58v-1.742h-.58v-1.742h3.486v-6.66l-6.68-2.637-6.678 2.637v6.66h3.486v1.742h-.583v1.742h-.578v-1.742H3.448v1.742H2.286v.58h15.677v-.58h-1.161zm-3.486-7.257a1.163 1.163 0 001.164-1.165h.58a1.163 1.163 0 001.162 1.162v.58a1.163 1.163 0 00-1.159 1.162h-.58a1.163 1.163 0 00-1.162-1.162zm-3.191-2.613a2.322 2.322 0 11-2.328 2.322 2.322 2.322 0 012.328-2.322zm-4.352 7.258h-.584a1.163 1.163 0 00-1.162-1.162v-.58a1.163 1.163 0 001.162-1.162h.584a1.163 1.163 0 001.158 1.162v.58a1.163 1.163 0 00-1.158 1.162zm6.39 4.354v-3.77a2.032 2.032 0 10-4.064 0v3.77h-.584v-3.77a2.613 2.613 0 115.225 0v3.77zm-3.49-2.322v-.58h.59v.58z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 14",
    d: "M11.839 9.543h-1.425v1.425a1.744 1.744 0 001.425-1.425z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 15",
    d: "M18.049 6.598l-7.925-3.13-7.925 3.13a.772.772 0 00-.494.722.76.76 0 00.337.637.787.787 0 00.742.082l7.337-2.9 7.337 2.9a.787.787 0 00.742-.082.76.76 0 00.337-.637.772.772 0 00-.494-.719z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 16",
    d: "M10.414 7.537v1.425h1.425a1.744 1.744 0 00-1.425-1.425z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M17.962 2.286h-.58a1.163 1.163 0 01-1.162 1.162v.58a1.163 1.163 0 011.162 1.162h.58a1.163 1.163 0 011.162-1.162v-.58a1.163 1.163 0 01-1.162-1.162z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M4.028 4.027h.58a1.163 1.163 0 011.161-1.161v-.58a1.163 1.163 0 01-1.16-1.161h-.58a1.163 1.163 0 01-1.162 1.161v.58a1.163 1.163 0 011.161 1.161z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: undefined
  })));
};
const LaptopBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 6",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 22",
    d: "M6.224 1.741a.408.408 0 01-.292-.175l-.013-.018v-.022c-.08-.612.818-.747.856-.753l.4-.057-.334.222h0a.807.807 0 00-.128.338c-.105.42-.375.465-.489.465zm-.13-.263a.213.213 0 00.13.081c.106 0 .244-.056.305-.323a1.686 1.686 0 01.07-.237c-.214.064-.523.205-.505.479z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M9 6.496H.046v6.8a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833v-6.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M17.44 2.135H.561a.515.515 0 00-.515.515v6.285a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833V2.65a.515.515 0 00-.515-.515z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M11.776 1.741c-.113 0-.387-.045-.482-.464a.734.734 0 00-.134-.342l-.334-.222.4.061c.038.006.936.141.856.753v.022l-.013.018a.408.408 0 01-.293.174zM11.4.999a1.682 1.682 0 01.071.238c.061.267.2.323.305.323a.216.216 0 00.13-.081c.019-.276-.291-.416-.506-.48z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M11.295.752A3.333 3.333 0 009 .045a3.333 3.333 0 00-2.295.707.136.136 0 00.158.222A3.036 3.036 0 018.999.318a3.037 3.037 0 012.136.656.136.136 0 10.158-.222z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M9 9.419h-.958v.751h1.917v-.751z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M8.698 8.214h0a.9.9 0 00-.657 1.24h1.917a.9.9 0 00-.657-1.24h0a1.656 1.656 0 00-.6 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M9 10.17h-.958v1.009h1.917V10.17z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9 10.473h-.807v.706h1.615v-.706z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 31",
    d: "M4.725 2.135h1.136a1.287 1.287 0 00.648-.83.118.118 0 00-.117-.139h0a.116.116 0 00-.095.048 1.873 1.873 0 01-1.38.721.118.118 0 00-.088.05z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 32",
    d: "M13.275 2.135H12.14a1.287 1.287 0 01-.648-.83.118.118 0 01.116-.139h0a.116.116 0 01.095.048 1.873 1.873 0 001.38.721.118.118 0 01.088.05z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: undefined
  })));
};
const Lips = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 52",
    d: "M6.035 17.392v-6.2a.567.567 0 00-.516-.61H5.5V5.269h-.527c0-.877.008-1.608.013-2.212.019-2.149.023-2.66-.235-2.923A.454.454 0 004.422 0a1.282 1.282 0 00-.549.193 4.29 4.29 0 01-.708.3 2.882 2.882 0 00-2.117 2.235v2.541H.541v5.306H.519a.567.567 0 00-.516.61v6.2a.567.567 0 00.516.61h5.006a.567.567 0 00.51-.603zm-1.144-6.817H1.148V5.932l3.743.043z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: undefined
  })));
};
const MeatFish = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Layer 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Layer 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 31",
    d: "M9.976 12.775c-3.038-.539-8.7-1.222-9.868-4.621h.008C-.977 5.471 5.959-1.484 8.663.284a2.2 2.2 0 011.139 1.685c.058 1.832-1.961 4.468-4.123 6.1 2.183-1.393 4.262-4.117 4.643-6.1a9.461 9.461 0 011.014 9.288c1.112 1.079 2.5 2.252 3.735 2.053a1.566 1.566 0 011.868 1.437 1.49 1.49 0 01-.662 1.445 1.394 1.394 0 01-.877.2 1.34 1.34 0 01-.143.82 1.621 1.621 0 01-3-1c.117-1.248-1.117-2.45-2.279-3.435zM6.212 2.807c.983.643-2.222 3.936-3.21 3.293s2.226-3.936 3.21-3.293zM8.302.936c2.58 1.689-4.417 9.1-7 7.415s4.417-9.1 7-7.415zm3.072 11.145l-1.6-.155c1.211 1.034 3.237 2.4 3.062 4.271-.161 1.724 2.284 1.5 1.988.126a.4.4 0 01.475-.5c1.417.243 1.47-2.216-.184-1.949-1.318.21-2.647-.774-3.747-1.793z",
    fill: color,
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: undefined
  }))));
};
const OralCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 65",
    d: "M3.118 11.024a2.267 2.267 0 01.142 1.454l-.027.333c-.127 1.655.111 3.807 1.157 4.887a.463.463 0 00.1.046.252.252 0 00.317-.127.255.255 0 00.017-.15v-.02c-.017-.157-.385-3.87 1.27-5.887a1.035 1.035 0 011.6.009c1.623 2.025 1.257 5.719 1.241 5.875v.02a.255.255 0 00.017.15.252.252 0 00.317.127.388.388 0 00.111-.049c1.043-1.078 1.281-3.231 1.154-4.887a35.384 35.384 0 00-.027-.333 2.268 2.268 0 01.142-1.455 3.792 3.792 0 011.517-1.087 2.221 2.221 0 001-1.522 3.819 3.819 0 00-.16-2.192c-.555-1.388-1.827-1.924-3.5-1.466a4.521 4.521 0 00-1.368.622c-.2.126-.409.253-.666.384a2.761 2.761 0 001.566.237.248.248 0 11.1.486 3.837 3.837 0 01-2.355-.493 10.454 10.454 0 01-.478-.265 7.466 7.466 0 00-2.338-1.014A2.73 2.73 0 00.698 6.581a2.908 2.908 0 00.92 3.343 3.784 3.784 0 011.5 1.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 66",
    d: "M17.256.93H6.409L6.036.558A1.888 1.888 0 004.693.003H.664a.666.666 0 00-.666.666v1.889a.25.25 0 00.5 0V.667A.165.165 0 01.663.502h.1v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.507a1.4 1.4 0 01.823.4l.792.789a1.888 1.888 0 001.343.555h9.441a.666.666 0 100-1.323z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: undefined
  })));
};
const OuterWear = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 29",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 99",
    d: "M15.643 5.659a1.993 1.993 0 00.453-.062c-.224-1.2-.4-1.9-.4-1.9a5.546 5.546 0 00-1.713-1.068 1.964 1.964 0 001.66 3.03z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 100",
    d: "M.896 5.596a1.962 1.962 0 002.113-2.97 5.561 5.561 0 00-1.712 1.068s-.178.697-.401 1.902z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 101",
    d: "M15.641 6.146a2.466 2.466 0 01-2.463-2.463 2.436 2.436 0 01.348-1.24 14.661 14.661 0 00-2.08-.61L11.422.664A5.484 5.484 0 008.947.008c-.225-.01-.677-.01-.904 0a5.5 5.5 0 00-2.478.653l-.02 1.169a14.746 14.746 0 00-2.08.612 2.446 2.446 0 01-2.658 3.64 53.686 53.686 0 00-.771 11.244H.26v.123a.512.512 0 00.532.493h1.24a.512.512 0 00.532-.493v-.123h.23s-.238-7.281 1.02-9.143v9.08a23.275 23.275 0 004.326.735V1.151a5.227 5.227 0 01-1.749-.19S6.529.498 8.043.516h.9c1.5.023 1.653.445 1.653.445a5.226 5.226 0 01-1.751.19v16.847a23.274 23.274 0 004.329-.736V8.184c1.259 1.866 1.023 9.143 1.023 9.143h.229v.123a.511.511 0 00.532.493H16.2a.512.512 0 00.532-.493v-.123h.224a53.827 53.827 0 00-.771-11.246 2.462 2.462 0 01-.544.065z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: undefined
  })));
};
const Pants = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 102",
    d: "M7.999 1.165a10.721 10.721 0 00-.139-.71L7.797.187A.243.243 0 007.561 0H.553a.243.243 0 00-.236.187L.253.455c-.056.235-.1.472-.139.71z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 103",
    d: "M.018 2.048a9.93 9.93 0 00-.015.828l.379 13.479a.243.243 0 00.242.236H.86v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.172a.243.243 0 00.242-.225l.833-11.228a.15.15 0 01.3 0l.825 11.228a.243.243 0 00.242.225h.233v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.179a.243.243 0 00.242-.236L8.1 2.876c.008-.276 0-.553-.015-.828z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822
    },
    __self: undefined
  })));
};
const PetCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M11.335 8.363h-.139a4.189 4.189 0 01-1.864-.44l-1.116-.558.011-.022-.493.493a1.283 1.283 0 01.536.457.879.879 0 00.732.392.326.326 0 01.326.326v.643a1.288 1.288 0 01-.964 1.245v.888a1.76 1.76 0 01-.3.977l-.35.515v.734l.737-.737a.326.326 0 01.548.227v2.186l.643-.426v-2.4a.326.326 0 01.128-.257l1.257-.944a2.143 2.143 0 00.5-1.274 4.447 4.447 0 00-.034-.809z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M9.08 7.077l.543.27a3.543 3.543 0 001.577.372h.056V5.791a.326.326 0 01.326-.326h.8a.483.483 0 00.482-.482v-.472h-.643a.326.326 0 01-.227-.094l-.651-.651a.76.76 0 00-.543-.223h-.7a.8.8 0 00-.564.233 2.932 2.932 0 00-.869 2.086v.573h.4a.242.242 0 00.241-.241V5.149h.643v1.045a.885.885 0 01-.881.887zm1.206-2.894h.643v.643h-.643z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M10.287 14.841l.643-.426v-1.873l-.643.482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M17.794 3.684a6.04 6.04 0 00-.612-1.464 4.466 4.466 0 00-7.43-.434l-.493.651a.326.326 0 01-.515 0l-.493-.651A4.488 4.488 0 004.678 0H4.56A4.466 4.466 0 00.789 2.077 5.038 5.038 0 000 4.783v.929a7.535 7.535 0 003.244 6.206l.326-.485a8.686 8.686 0 01-1.6-1.539l-.29-.362a.326.326 0 01.5-.4l.289.362a8.042 8.042 0 001.455 1.412l.9-1.346v-.993A2.419 2.419 0 015.4 7.091l.457-.537a.326.326 0 01.557.13l.261 1.042h.258l1.1-1.1v-.76a3.57 3.57 0 011.052-2.541 1.441 1.441 0 011.018-.421h.7a1.394 1.394 0 01.992.412l.553.554h.832a.326.326 0 01.326.326v.8a1.126 1.126 0 01-1.128 1.118H11.9V7.7l.24 1.8a5.09 5.09 0 01.039.926 2.785 2.785 0 01-.6 1.593v1.975l3.04-2.016A7.541 7.541 0 0018 5.677v-.414a6.023 6.023 0 00-.208-1.573zM1.388 8.344a.326.326 0 01-.41-.2l-.05-.15A5.6 5.6 0 01.64 6.218v-.109a.326.326 0 11.643 0v.109a4.962 4.962 0 00.255 1.572l.05.149a.326.326 0 01-.2.407zm14.937 1.181l-.289.362a8.649 8.649 0 01-2.472 2.115l-.869.494a.326.326 0 01-.319-.558l.869-.494a8.009 8.009 0 002.29-1.954l.289-.362a.326.326 0 11.506.4zm1.035-3.309a5.6 5.6 0 01-.288 1.775l-.05.15a.326.326 0 01-.612-.2v.003l.05-.15a4.961 4.961 0 00.255-1.571v-.109a.326.326 0 11.643 0v.109zm0-1.392a.326.326 0 11-.643 0v-.326a.326.326 0 01.643 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 5",
    d: "M7.126 13.007l.4-.6a1.119 1.119 0 00.189-.624v-1.169a.326.326 0 01.326-.326.644.644 0 00.643-.643v-.356a1.52 1.52 0 01-.946-.644.642.642 0 00-.535-.287H6.43a.326.326 0 01-.312-.243l-.169-.679-.052.061a1.774 1.774 0 00-.434 1.078v1.072a.326.326 0 01-.054.178L3.78 12.271l.185.121.676.443 2.584 1.693-.118-.237a.326.326 0 01-.034-.143v-.964a.326.326 0 01.054-.174zM6.75 9.649v-.643h.645v.643z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 6",
    d: "M8.002 14.648a.325.325 0 01.034.144v.269l.326.211v-.99l-.359.359z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: undefined
  })));
};
const Purse = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 1",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091",
    transform: "translate(-85.169 -7.348)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M98.946 11.381l.217-.061a5.124 5.124 0 00-.6-1.341 11.3 11.3 0 00-1.04-1.279 4.724 4.724 0 00-.93-.679l-.269-.143a3.735 3.735 0 00-.88-.323 5.437 5.437 0 00-1.274-.167l-.317.014a5.3 5.3 0 00-.957.152c-.1.024-.2.061-.3.092a5.009 5.009 0 00-.846.374 4.734 4.734 0 00-.93.679 5.709 5.709 0 00-1.639 2.615l.217.061.217.061a4.7 4.7 0 01.972-1.8 5.106 5.106 0 01.6-.508 4.982 4.982 0 01.874-.521 5.2 5.2 0 011.018-.35 5.315 5.315 0 011.1-.123 5.5 5.5 0 011.1.123 5.2 5.2 0 011.018.35 4.99 4.99 0 01.874.521 5.066 5.066 0 01.585.5 4.7 4.7 0 01.982 1.806z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M93.787 22.392a22.149 22.149 0 01-8.561-1.727l3.3-9.285h11.282l3.3 9.285a22.149 22.149 0 01-8.561 1.727z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M88.531 11.381l-1.353 3.8a17.645 17.645 0 006.609 1.351h.765a17.643 17.643 0 006.609-1.351l-1.353-3.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M88.531 11.23l-1.225 3.442a14.059 14.059 0 006.481 1.71h.765a14.059 14.059 0 006.481-1.71l-1.224-3.442z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906
    },
    __self: undefined
  }), __jsx("rect", {
    "data-name": "Rectangle 26",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 5",
    d: "M101.162 15.182h0l-.173-.486a14.034 14.034 0 01-6.436 1.687h-.273v.15h.272a17.649 17.649 0 006.61-1.351z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917
    },
    __self: undefined
  }), __jsx("rect", {
    "data-name": "Rectangle 27",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921
    },
    __self: undefined
  }), __jsx("rect", {
    "data-name": "Rectangle 28",
    width: "1.5",
    height: "1.5",
    rx: ".501",
    transform: "rotate(-44.999 66.206 -104.411)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928
    },
    __self: undefined
  }))));
};
const ShavingNeeds = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 60",
    d: "M17.24.609h-5.239a.741.741 0 00-.731.731v.667a.741.741 0 00.731.731h.183a1.222 1.222 0 011.222 1.222v1.222l-.152 3.351h2.777l-.183-3.351V3.959a1.222 1.222 0 011.222-1.222h.183a.741.741 0 00.731-.731v-.667a.741.741 0 00-.744-.731zm-2.011 4.265h-1.222v-.609h1.222zm.03-1.222h-1.28a1.741 1.741 0 00-.457-.914h2.163a1.952 1.952 0 00-.425.92z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 61",
    d: "M16.023 9.138h-2.8l-.061 1.222h2.924z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 21",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 62",
    d: "M16.413 16.144l-.243-5.178h-3.046l-.243 5.178a1.768 1.768 0 103.533 0z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 23",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 63",
    d: "M8.499 1.827V0H2.436v2.742h-.918V4.11A2.283 2.283 0 000 6.274V7.31h6.092v7.31H0v1.066a2.3 2.3 0 002.284 2.285h3.934a2.282 2.282 0 002.284-2.284V6.244a2.312 2.312 0 00-1.526-2.163V2.742h-.915v-.915zM6.092 3.351h.3v.609h-4.26v-.609z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 64",
    d: "M0 7.92v1.222h2.132a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v1.222h5.482V7.927z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991
    },
    __self: undefined
  }))));
};
const Shirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 109",
    d: "M6.751 2.546a.172.172 0 00.04 0l2.206-.525 2.2.543a.171.171 0 00.041 0 .142.142 0 00.111-.051.149.149 0 00.027-.128l-.21-.983a.362.362 0 010-.115l.221-1.1a.144.144 0 00-.026-.122.138.138 0 00-.168-.029l-2.192 1.05L6.813.017a.137.137 0 00-.169.028.144.144 0 00-.027.122l.21 1.1a.362.362 0 010 .115l-.217.979a.149.149 0 00.027.128.142.142 0 00.11.053z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 110",
    d: "M2.563 15.126l-1.806-.153a.4.4 0 00-.4.278l-.342 1.214a.285.285 0 00.039.248.285.285 0 00.224.112l1.8.058h.013a.428.428 0 00.391-.288l.334-1.1a.282.282 0 00-.252-.372z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 111",
    d: "M17.985 16.466l-.338-1.2a.4.4 0 00-.4-.278l-1.806.152a.282.282 0 00-.252.372l.33 1.083a.428.428 0 00.391.288l1.815-.058a.274.274 0 00.264-.359z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 112",
    d: "M17.024 14.342a.286.286 0 00.257-.372l-.756-2.678a5.452 5.452 0 01-.105-.451l-1.321-6.627a.61.61 0 00-.315-.4l-2.139-.945a.63.63 0 00-.248-.046.638.638 0 00-.263.051L9.176 4.248a.483.483 0 01-.346 0L5.865 2.876a.64.64 0 00-.263-.051.63.63 0 00-.248.046l-2.139.945a.61.61 0 00-.315.4l-1.318 6.626c-.025.125-.074.328-.105.451l-.759 2.662a.286.286 0 00.257.372l1.824.154a.405.405 0 00.407-.275l.874-2.857a3.587 3.587 0 00.105-.476l.278-2.1-.254 8.162a.326.326 0 00.327.337h8.99a.325.325 0 00.326-.338l-.292-8.058.265 2.006a3.582 3.582 0 00.105.476l.875 2.874a.405.405 0 00.407.275zM8.998 16.3a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.562z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027
    },
    __self: undefined
  })));
};
const ShoulderBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 3",
    transform: "translate(-100.548 -66.187)",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 6",
    d: "M105.083 69.531l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.343 1.343 0 01.708-.188h0a.149.149 0 01.141.111z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 7",
    d: "M104.167 69.774l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.342 1.342 0 01.708-.188h0a.149.149 0 01.141.111z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 8",
    d: "M106.5 69.531l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.343 1.343 0 00-.708-.188h0a.149.149 0 00-.141.111z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 9",
    d: "M107.421 69.774l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.342 1.342 0 00-.708-.188h0a.149.149 0 00-.141.111z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 10",
    d: "M110.987 80.15l-.645-7.545a3.781 3.781 0 00-3.768-3.459h-.78v1.23h0v-1.23h-.78a3.781 3.781 0 00-3.768 3.459l-.646 7.545a3.407 3.407 0 003.395 3.7h3.598a3.407 3.407 0 003.395-3.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 11",
    d: "M108.494 69.668c-1.336-.669-1.426-1.652-2.7-1.654h0c-1.272 0-1.362.985-2.7 1.654l.294-.046c1.191-.519 1.271-1.282 2.406-1.283s1.215.764 2.406 1.283z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 12",
    d: "M105.795 77.868l.132-.006 4.385-.192.239 2.792h0a16.8 16.8 0 01-4.579.636h-.177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 13",
    d: "M105.788 77.868l-.132-.006-4.385-.192-.239 2.792h0a16.8 16.8 0 004.579.636h.177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 14",
    d: "M110.625 80.455l-.591-6.916a3.54 3.54 0 00-3.527-3.239h-1.427a3.54 3.54 0 00-3.527 3.238l-.591 6.916a3.2 3.2 0 001.393 2.92l.083-.123a3.056 3.056 0 01-1.328-2.785l.591-6.916a3.372 3.372 0 013.38-3.1h1.426a3.372 3.372 0 013.379 3.1l.591 6.916a3.056 3.056 0 01-1.328 2.785l.083.123a3.2 3.2 0 001.392-2.921z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 15",
    d: "M105.792 84.149v-3.008h0a25.049 25.049 0 01-4.756-.676l-.447-.039A3.568 3.568 0 00104 84.149z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 16",
    d: "M105.795 81.141v3.008h1.8A3.568 3.568 0 00111 80.426l-.447.039a25.083 25.083 0 01-4.758.676z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M105.792 81.083v2.767h1.647a3.123 3.123 0 003.112-3.389 27.2 27.2 0 01-4.757.622z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M105.795 83.85v-2.765h0a27.157 27.157 0 01-4.759-.622h0a3.123 3.123 0 003.112 3.389z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104
    },
    __self: undefined
  }), __jsx("rect", {
    "data-name": "Rectangle 34",
    width: "2.177",
    height: "1.086",
    rx: ".281",
    transform: "rotate(-3.21 1460.138 -1873.834)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M103.251 80.12h0a.158.158 0 01-.158-.158v-6.679a.158.158 0 01.158-.158h0a.158.158 0 01.158.158v6.679a.158.158 0 01-.158.158z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Rectangle 35",
    d: "M103.093 74.874h.316v1.036h-.316z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119
    },
    __self: undefined
  })));
};
const Skirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 107",
    d: "M17.688 16.585L14.826 5.454a3.95 3.95 0 00-.26-.682l-.822-1.6a.749.749 0 00-.616-.376H4.576a.746.746 0 00-.615.377l-.841 1.65a4.017 4.017 0 00-.258.683L.017 16.585a.373.373 0 00.374.482h.64a1.52 1.52 0 01.612.158l1.246.691a.824.824 0 00.728 0l1.24-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a1.52 1.52 0 01.612-.158h.64a.373.373 0 00.374-.482z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 108",
    d: "M4.525 2.1h8.656a.333.333 0 00.333-.333V.333A.333.333 0 0013.181 0H4.525a.333.333 0 00-.331.333v1.438a.333.333 0 00.331.331zM7.833.652a.267.267 0 01.262-.266h1.508a.267.267 0 01.266.266v.8a.267.267 0 01-.266.266H8.095a.267.267 0 01-.266-.266z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Rectangle 2",
    d: "M8.275.83h1.153v.444H8.275z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146
    },
    __self: undefined
  })));
};
const Snacks = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 36",
    d: "M2.109 5.274H12.66a1.055 1.055 0 000-2.11h-.1a1.67 1.67 0 00-1.5-1.054 2.626 2.626 0 00-1.854-1.044 2.1 2.1 0 00-3.653 0 2.626 2.626 0 00-1.85 1.045h-.011a1.577 1.577 0 00-1.481 1.055h-.1a1.055 1.055 0 100 2.11z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 37",
    d: "M7.956 15.891l.863-9.562H5.946l.862 9.562z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 38",
    d: "M2.884 12.881a2.118 2.118 0 011.253 1.378 2.626 2.626 0 011.07 1.633h.542L4.887 6.33H2.164z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 39",
    d: "M12.601 6.329H9.877l-.862 9.562h2.059a.527.527 0 00.524-.469z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 40",
    d: "M1.054 16.946a.876.876 0 00.091-.019 1.577 1.577 0 102-2c0-.031.019-.058.019-.091a1.055 1.055 0 00-2.11 0 1.055 1.055 0 100 2.109z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181
    },
    __self: undefined
  })));
};
const Tops = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1196
    },
    __self: undefined
  }, __jsx("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 104",
    d: "M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 105",
    d: "M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 106",
    d: "M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1211
    },
    __self: undefined
  })));
};
const Wallet = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1233
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 42",
    d: "M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234
    },
    __self: undefined
  })), __jsx("path", {
    "data-name": "Path 43",
    d: "M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 44",
    d: "M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1245
    },
    __self: undefined
  })));
};
const WomenDress = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1261
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1267
    },
    __self: undefined
  }, __jsx("clipPath", {
    id: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1268
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Rectangle 20",
    transform: "translate(226 1073)",
    fill: "#ebe7e7",
    d: "M0 0h18v18H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1269
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Women Dress",
    transform: "translate(-226 -1073)",
    clipPath: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1277
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 28",
    transform: "translate(230.461 1073)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1282
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 80",
    d: "M8.236 12.619c-.12-.6-.384-3.422-1.008-4.358a1.446 1.446 0 01-.19-.8.039.039 0 000-.007c.02-.29.052-.6.073-.762a.493.493 0 01.01-.076c.016-.1.036-.192.057-.289a16.065 16.065 0 00.515-2.746c0-1.429-.733-1.849-.733-1.849.251-1.069.434-1.647.434-1.647L7.179 0A10.558 10.558 0 006.7 1.717a2.911 2.911 0 01-2.161.694 2.913 2.913 0 01-2.161-.694A10.578 10.578 0 001.897 0l-.216.087s.18.577.434 1.647c0 0-.733.421-.733 1.849a14.672 14.672 0 00.491 2.631.1.1 0 000 .039.2.2 0 00.01.035l.007.028c.03.123.074.347.081.347.014.087.029.243.043.4.006.055.01.109.014.163l.016.207h-.007a1.462 1.462 0 01-.191.826c-.624.936-.889 3.758-1.008 4.358s-.408 2.81-.552 3.459-.288 1.537-.288 1.537a3.7 3.7 0 001.2.144s-.087.252.649.18a14.433 14.433 0 011.969-.06c.5.024.153.12.72.12s.216-.1.72-.12a14.388 14.388 0 011.969.06c.733.072.649-.18.649-.18a3.708 3.708 0 001.2-.144s-.144-.889-.289-1.537-.428-2.857-.549-3.457zM6.955 6.468c-.056.077-.106.2-.041.251-.017.115-.027.231-.039.347-.065-.075-.274-.006-.274-.006-.155-.068.137.335.254.181-.005.065-.007.13-.01.2-.142-.01-.284-.02-.427-.028a.66.66 0 00-.068-.149c.016-.108-.108.016-.15.137a25.847 25.847 0 00-.925-.02C5.211 7.304 5 7.373 5 7.373c-.031-.014-.044-.008-.044.009h-.032a.147.147 0 00.016-.067.152.152 0 00-.3 0 .149.149 0 00.017.067c-.406 0-.812.013-1.214.023a.791.791 0 00-.042-.077c.014-.092-.074-.017-.126.081l-.207.005a.491.491 0 00.112-.2c.154-.1-.434-.074-.271.151a.2.2 0 00.051.051h-.173a.087.087 0 000-.122c-.136-.2-.238.094-.25.127l-.3.006a.43.43 0 00-.005-.081c.073-.011.315-.308.087-.354a.173.173 0 00-.109.005 4.818 4.818 0 00-.048-.385.674.674 0 00.059-.135c.067-.042-.005-.062-.1-.051a2.26 2.26 0 00-.039-.147h.224a.152.152 0 10.292.057.148.148 0 00-.014-.062l1.04-.019a.1.1 0 000 .132c.143.2.244-.072.266-.137l.479-.005c.075.095.22.2.277.043a.207.207 0 00.009-.046h.7a.15.15 0 00-.034.092.152.152 0 10.3 0 .149.149 0 00-.033-.087c.384.007.766.024 1.148.048-.116.015-.254.077-.166.2.161.225.271-.151.271-.151.029-.018.032-.032.018-.042l.1.007a.042.042 0 00.009.008c-.007.052-.016.1-.026.153z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1287
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 81",
    d: "M4.951 7.161c-.144.087.4.076.252-.134s-.252.134-.252.134z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1291
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 82",
    d: "M4.286 7.052c-.1.235.249.14.249.14.15.075-.149-.375-.249-.14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1295
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 83",
    d: "M4.768 6.721c-.284-.057-.1.31-.1.31-.049.19.384-.249.1-.31z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1299
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 84",
    d: "M5.973 6.533c.095-.26-.277-.138-.277-.138-.167-.073.183.398.277.138z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 85",
    d: "M5.382 6.898c.276.023.061-.3.061-.3.027-.184-.34.279-.061.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1307
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 86",
    d: "M4.985 6.632c.161.225.271-.151.271-.151.154-.097-.433-.076-.271.151z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1311
    },
    __self: undefined
  }), __jsx("circle", {
    "data-name": "Ellipse 3",
    cx: ".152",
    cy: ".152",
    r: ".152",
    transform: "translate(3.253 6.916)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1315
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 87",
    d: "M3.851 6.782c-.144-.21-.252.134-.252.134-.144.086.396.076.252-.134z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1322
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 88",
    d: "M3.649 7.126c-.167-.073.183.4.277.138s-.277-.138-.277-.138z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1326
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 89",
    d: "M2.903 6.808c-.1.235.249.14.249.14.151.075-.149-.374-.249-.14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1330
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 90",
    d: "M3.384 6.48c-.284-.057-.1.31-.1.31-.046.185.385-.256.1-.31z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1334
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 91",
    d: "M6.359 6.852a.152.152 0 11-.152.152.152.152 0 01.152-.152z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1338
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 92",
    d: "M6.553 6.853c-.144.087.4.076.252-.134s-.252.134-.252.134z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1342
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 93",
    d: "M5.861 7.3c.161.225.271-.151.271-.151.152-.1-.435-.074-.271.151z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1346
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 94",
    d: "M5.856 6.744c-.1.235.249.14.249.14.15.075-.15-.375-.249-.14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1350
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 95",
    d: "M6.338 6.413c-.284-.057-.1.31-.1.31-.049.187.385-.25.1-.31z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1354
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 96",
    d: "M4.064 6.654c.276.023.061-.3.061-.3.027-.184-.339.276-.061.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1358
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 97",
    d: "M2.972 6.533c.094-.26-.277-.138-.277-.138-.168-.073.182.398.277.138z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1362
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 98",
    d: "M2.381 6.898c.276.023.061-.3.061-.3.026-.184-.336.279-.061.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1366
    },
    __self: undefined
  }))));
};
const Google = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.677 17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1382
    },
    __self: undefined
  }, __jsx("path", {
    d: "M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z",
    transform: "translate(-52 -48.1)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1388
    },
    __self: undefined
  }));
};
const GooglePlus = ({
  color = 'currentColor',
  width = '17px',
  height = '11px'
}) => {
  return __jsx("svg", {
    id: "google-hangouts",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17.239 11.111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1403
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_1",
    "data-name": "Path 1",
    d: "M5.589,2.02A3.559,3.559,0,0,1,8.417,3.444L9.852,2a5.552,5.552,0,1,0,1.081,5.071,5.385,5.385,0,0,0,.212-1.515V5.05H6.094V7.07H8.771A3.514,3.514,0,0,1,5.589,9.091,3.568,3.568,0,0,1,2.02,5.555,3.568,3.568,0,0,1,5.589,2.02Zm0,0",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1410
    },
    __self: undefined
  }), __jsx("path", {
    id: "Path_2",
    "data-name": "Path 2",
    d: "M364.535,90h-2.02v1.515H361v2.02h1.515V95.05h2.02V93.535h1.549v-2.02h-1.549Zm0,0",
    transform: "translate(-348.845 -86.97)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1416
    },
    __self: undefined
  }));
};
const Facebook = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17 17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1433
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_logo-facebook (1)",
    d: "M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z",
    transform: "translate(-64 -64)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1439
    },
    __self: undefined
  }));
};
const Twitter = ({
  color = 'currentColor',
  width = '30px',
  height = '24px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 29.915 24.313",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1455
    },
    __self: undefined
  }, __jsx("path", {
    id: "twitter_2_",
    "data-name": "twitter (2)",
    d: "M9.408,24.812c11.289,0,17.463-9.353,17.463-17.463q0-.4-.017-.793a12.488,12.488,0,0,0,3.062-3.178,12.243,12.243,0,0,1-3.525.966,6.159,6.159,0,0,0,2.7-3.395,12.313,12.313,0,0,1-3.9,1.49,6.143,6.143,0,0,0-10.459,5.6A17.426,17.426,0,0,1,2.082,1.624a6.143,6.143,0,0,0,1.9,8.194A6.091,6.091,0,0,1,1.2,9.05c0,.026,0,.051,0,.078a6.139,6.139,0,0,0,4.924,6.017,6.129,6.129,0,0,1-2.772.105,6.144,6.144,0,0,0,5.734,4.263A12.313,12.313,0,0,1,1.464,22.14,12.514,12.514,0,0,1,0,22.055a17.375,17.375,0,0,0,9.408,2.757",
    transform: "translate(0 -0.5)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1461
    },
    __self: undefined
  }));
};
const Linkedin = ({
  width = '60px',
  height = '60px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 60.046 60.046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group_3542",
    "data-name": "Group 3542",
    transform: "translate(-167 -582)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1484
    },
    __self: undefined
  }, __jsx("g", {
    id: "linkedin",
    transform: "translate(167 582)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1489
    },
    __self: undefined
  }, __jsx("circle", {
    id: "Ellipse_46",
    "data-name": "Ellipse 46",
    cx: "30.023",
    cy: "30.023",
    r: "30.023",
    transform: "translate(0 0)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1490
    },
    __self: undefined
  }), __jsx("g", {
    id: "Group_3541",
    "data-name": "Group 3541",
    transform: "translate(14.486 12.828)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1499
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_6184",
    "data-name": "Path 6184",
    d: "M60.543,43.579V55.957H53.366V44.409c0-2.9-1.036-4.88-3.634-4.88a3.925,3.925,0,0,0-3.681,2.624,4.912,4.912,0,0,0-.238,1.749V55.956H38.637s.1-19.559,0-21.583h7.177v3.059c-.014.024-.035.048-.048.071h.048v-.071a7.125,7.125,0,0,1,6.468-3.565c4.721,0,8.261,3.085,8.261,9.713ZM31.129,23.969a3.74,3.74,0,1,0-.094,7.459h.047a3.741,3.741,0,1,0,.048-7.459ZM27.495,55.957h7.174V34.373H27.495Z",
    transform: "translate(-27.068 -23.969)",
    fill: "#f1f2f2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1504
    },
    __self: undefined
  })))));
};
const MinusSquareO = props => __jsx("svg", _extends({}, props, {
  viewBox: "64 -65 897 897",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1519
  },
  __self: undefined
}), __jsx("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1520
  },
  __self: undefined
}, __jsx("path", {
  d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z",
  fill: "currentColor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1521
  },
  __self: undefined
})));
const PlusSquareO = props => __jsx("svg", _extends({}, props, {
  viewBox: "64 -65 897 897",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1531
  },
  __self: undefined
}), __jsx("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1532
  },
  __self: undefined
}, __jsx("path", {
  d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z",
  fill: "currentColor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1533
  },
  __self: undefined
})));
const CloseSquareO = props => __jsx("svg", _extends({}, props, {
  viewBox: "64 -65 897 897",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1543
  },
  __self: undefined
}), __jsx("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1544
  },
  __self: undefined
}, __jsx("path", {
  d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z",
  fill: "currentColor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1545
  },
  __self: undefined
}))); // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1561
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group_3351",
    "data-name": "Group 3351",
    transform: "translate(-1367 -190)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1567
    },
    __self: undefined
  }, __jsx("rect", {
    "data-name": "Rectangle 520",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1367 195)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1572
    },
    __self: undefined
  }), __jsx("rect", {
    "data-name": "Rectangle 521",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1374 190) rotate(90)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1580
    },
    __self: undefined
  })));
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1600
    },
    __self: undefined
  }, __jsx("rect", {
    "data-name": "Rectangle 522",
    width: "12",
    height: "2",
    rx: "1",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1606
    },
    __self: undefined
  }));
}; // SVG Cart icon

const CartIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.4",
    height: "12",
    viewBox: "0 0 14.4 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1620
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 120",
    transform: "translate(-288 -413.89)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1626
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 154",
    fill: "currentColor",
    d: "M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1627
    },
    __self: undefined
  })));
}; // SVG Grocery icon

const GroceryIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1640
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 69",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1646
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 112",
    d: "M302.952,415.83a.326.326,0,0,0,.1.016.3.3,0,0,0,.287-.207.533.533,0,0,1,.675-.332,1.139,1.139,0,0,0,1.443-.71.3.3,0,1,0-.573-.2.533.533,0,0,1-.675.332,1.142,1.142,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0",
    transform: "translate(-293.38 -408.637)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1647
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 113",
    d: "M304.847,410.255a.31.31,0,0,0,.1.015.3.3,0,0,0,.287-.2.532.532,0,0,1,.675-.332,1.138,1.138,0,0,0,1.442-.712.3.3,0,1,0-.572-.194.533.533,0,0,1-.675.332,1.139,1.139,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0",
    transform: "translate(-294.558 -405.009)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1653
    },
    __self: undefined
  }), __jsx("g", {
    "data-name": "Group 68",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1659
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 114",
    d: "M306.737,404.967a.312.312,0,0,0,.1.015.3.3,0,0,0,.287-.205.4.4,0,0,1,.5-.245,1,1,0,0,0,1.266-.625.3.3,0,1,0-.573-.194.387.387,0,0,1-.2.226.393.393,0,0,1-.3.019,1,1,0,0,0-1.266.623.3.3,0,0,0,.189.385Zm0,0",
    transform: "translate(-295.734 -401.531)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1660
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 115",
    d: "M292,405.326a18.15,18.15,0,0,0,1.006-5.3,1.918,1.918,0,0,0-.582-1.376,1.4,1.4,0,0,0-1.6-.212c-.93.433-1.6,1.711-2.128,2.736q-.046.089-.091.173a1.664,1.664,0,0,0-.986-1.129,1.42,1.42,0,0,0-1.153-1.038.631.631,0,0,0-.024-.088,1.048,1.048,0,0,0-.889-.686,1.133,1.133,0,0,0-.662.122,1.209,1.209,0,0,0-.55-.129,1.127,1.127,0,0,0-1.114.8,1.3,1.3,0,0,0-1.03,1.207,1.443,1.443,0,0,0-1.167,1.367,1.3,1.3,0,0,0,.106.509,1.036,1.036,0,0,0-.273.7,1.025,1.025,0,0,0,.1.441,1.716,1.716,0,0,0-1.239-.542.282.282,0,1,0,.009.563.288.288,0,0,0,.03,0,1.114,1.114,0,0,1,.759.377,2.148,2.148,0,0,0-1.365.813,1.315,1.315,0,0,0-.076,1.034.442.442,0,0,0-.076.281l.529,6.812a1.705,1.705,0,0,0,1.771,1.523h8.733a1.7,1.7,0,0,0,1.77-1.518l.542-7.053a.347.347,0,0,0-.111-.274.416.416,0,0,0-.242-.109Zm-3.14-3.173c.123-.208.257-.466.4-.74.468-.9,1.108-2.129,1.849-2.476a.722.722,0,0,1,.869.1,1.386,1.386,0,0,1,.407.968,17.688,17.688,0,0,1-1,5.209c-.02.059-.065.177-.129.341l-.53.213-.033.015a1.054,1.054,0,0,1-.992,0l-.222-.119a1.736,1.736,0,0,0-.828-.208,1.87,1.87,0,0,0-.234.017,1.693,1.693,0,0,0-.614.191l-.222.121a1.055,1.055,0,0,1-.4.112c.006-.022.015-.043.021-.063q.13-.4.277-.788c.035-.1.073-.19.109-.285.082-.206.167-.411.254-.613.038-.087.075-.173.113-.26a17.883,17.883,0,0,1,.9-1.74Zm-3.6,3.332c-.033.006-.068.011-.1.019a1.722,1.722,0,0,0-.3.087l-.061-.247c.09.007.179.014.263.014a2.56,2.56,0,0,0,1.481-.47,4.033,4.033,0,0,1,.431-.242c-.029.073-.056.146-.084.22-.02.054-.042.1-.061.158q-.139.376-.26.759l-.208-.113a1.742,1.742,0,0,0-.826-.208,1.694,1.694,0,0,0-.223.017c-.017,0-.034.005-.052.007Zm-.494-3.806a.131.131,0,0,1-.153-.089.118.118,0,0,1,.1-.138l1.745-.344a.13.13,0,0,1,.126.092.109.109,0,0,1-.018.088.134.134,0,0,1-.08.051Zm.123,1.143c.036-.043.071-.084.1-.125a.523.523,0,0,0,.065-.091.551.551,0,0,0,.058-.419l1.3-.257a.622.622,0,0,0,.033.1.661.661,0,0,0,.307.312l.147.071.126.062.062.03c.036.018.071.038.108.059l.091.053c.035.022.068.047.1.07s.058.045.085.069.058.053.085.082a.977.977,0,0,1,.132.171c-.132.263-.257.532-.377.8-.018.043-.038.082-.056.125a3.293,3.293,0,0,0-1.077.487,1.975,1.975,0,0,1-1.524.336l-.19-.784a1.213,1.213,0,0,1,.42-1.159Zm-1.843,7a.283.283,0,1,1,0,.564h-2.178a.283.283,0,1,1,0-.564Zm-2.178,1.126h2.8a.283.283,0,1,1,0,.564h-2.8a.283.283,0,1,1,0-.564Zm.837-8.4.2-.153-.132-.206a.778.778,0,0,1-.128-.424.888.888,0,0,1,.9-.847l.378-.015-.088-.333a.615.615,0,0,1-.023-.162.733.733,0,0,1,.713-.7l.287-.02v-.279a.5.5,0,0,1,.523-.458.537.537,0,0,1,.346.124l.219.179.21-.187a.454.454,0,0,1,.363-.111.437.437,0,0,1,.365.286.339.339,0,0,1,.015.15l-.037.315h.351a.825.825,0,0,1,.851.719l.015.186.193.061a1.085,1.085,0,0,1,.795,1.038.946.946,0,0,1-.2.558,3.375,3.375,0,0,0-.621-.358c-.049-.023-.1-.045-.143-.07a.064.064,0,0,1-.037-.048.16.16,0,0,1,.044-.125.562.562,0,0,0,.146-.52l-.038-.155a.678.678,0,0,0-.789-.458l-.083.017h0l-.913.181-.89.176a.6.6,0,0,0-.506.714l.018.077h0l.018.076a.622.622,0,0,0,.386.422.18.18,0,0,1,.1.091c.007.021,0,.032-.015.058s-.064.076-.1.115-.07.081-.107.124l-.032.041c-.027.033-.053.066-.08.1l-.039.054c-.024.034-.047.069-.07.1-.014.019-.026.039-.038.059a1.2,1.2,0,0,0-.065.125l-.028.052a1.551,1.551,0,0,0-.071.194.26.26,0,0,1-.006.032,1.375,1.375,0,0,0-.035.18c0,.025,0,.051-.006.077s-.008.065-.008.1l-.026-.03-.063-.069c-.046-.052-.092-.1-.138-.147l-.068-.066c-.049-.044-.1-.085-.147-.125l-.054-.044a2.1,2.1,0,0,0-.2-.128c-.02-.011-.041-.02-.061-.03-.049-.025-.1-.047-.146-.066-.028-.011-.055-.019-.081-.027a1.3,1.3,0,0,0-.134-.036c-.027-.006-.055-.012-.082-.017a1.217,1.217,0,0,0-.17-.015l-.039,0a1.736,1.736,0,0,0-.88.268.52.52,0,0,1-.042-.2.528.528,0,0,1,.222-.424Zm-2,2.338a1.582,1.582,0,0,1,1.006-.539,1.735,1.735,0,0,0,.7-.362c.086-.074.168-.14.247-.2s.14-.1.205-.136l.007-.006a1.33,1.33,0,0,1,.363-.153l.014,0a.745.745,0,0,1,.161-.019c.392,0,.811.353,1.247,1.051a1.958,1.958,0,0,1,.206,1.375l-.07-.008a1.04,1.04,0,0,1-.316-.1l-.222-.121a1.752,1.752,0,0,0-.828-.208,1.954,1.954,0,0,0-.848.208l-.108.059a1.3,1.3,0,0,1-1.22,0l-.419-.228a.566.566,0,0,0-.175-.059.735.735,0,0,1,.051-.548Zm4.585,7.747h-3.423a.282.282,0,1,1,0-.562h3.423a.283.283,0,1,1,0,.562Zm1.867,0h-.623a.282.282,0,1,1,0-.562h.623a.283.283,0,1,1,0,.562Zm0,0",
    transform: "translate(-279.002 -398.28)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1666
    },
    __self: undefined
  }))));
};
const MakeupIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.401",
    height: "16",
    viewBox: "0 0 11.401 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1680
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(-0.004)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1686
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2031",
    d: "M20.758,112.77v2.76h3.383v-2.352a2.422,2.422,0,0,1-1.367.409A3.01,3.01,0,0,1,20.758,112.77Zm0,0",
    transform: "translate(-20.105 -109.246)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1687
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2032",
    d: "M4.228,233.031H.408a.4.4,0,0,0-.4.4v7.909a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-7.909A.4.4,0,0,0,4.228,233.031Zm0,0",
    transform: "translate(0 -225.749)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1693
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2033",
    d: "M216.715,453.338a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-1.475h-4.629Zm0,0",
    transform: "translate(-209.939 -437.743)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1699
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2034",
    d: "M220.939,233.031h-3.82a.4.4,0,0,0-.4.4v5.494h4.629v-5.494A.4.4,0,0,0,220.939,233.031Zm0,0",
    transform: "translate(-209.939 -225.749)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1705
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2035",
    d: "M22.7.482a1.7,1.7,0,0,0-2.381.006,1.7,1.7,0,0,0,.431,2.342,1.7,1.7,0,0,0,2.381-.006A1.7,1.7,0,0,0,22.7.482Zm0,0",
    transform: "translate(-19.381)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1711
    },
    __self: undefined
  })));
};
const MedicineIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16.001",
    viewBox: "0 0 16 16.001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1724
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 175",
    transform: "translate(553.392 -314.288)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1730
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 178",
    d: "M-541.294,317.863a3.621,3.621,0,0,1-1.017,2.627c-1.62,1.639-3.24,3.28-4.891,4.888a3.655,3.655,0,0,1-6.033-1.643,3.5,3.5,0,0,1,.907-3.579q2.366-2.417,4.782-4.784a3.491,3.491,0,0,1,3.662-.9,3.536,3.536,0,0,1,2.514,2.77A4.929,4.929,0,0,1-541.294,317.863Zm-4.4,3.7c.791-.786,1.6-1.527,2.329-2.336a1.853,1.853,0,0,0,.293-2.017,2.042,2.042,0,0,0-3.36-.669q-2.632,2.617-5.252,5.247a1.289,1.289,0,0,0-.09.1.594.594,0,0,0,.321.955.622.622,0,0,0,.625-.21q1.47-1.474,2.944-2.945c.048-.048.1-.094.166-.158Z",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1731
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 179",
    d: "M-408.46,467.03l1.364-.817a3.95,3.95,0,0,0,4.856,2.139,3.856,3.856,0,0,0,2.756-3.015h-6.746c.067-.075.1-.12.145-.162.444-.445.884-.893,1.336-1.329a.464.464,0,0,1,.292-.12c1.533-.007,3.066-.005,4.6-.005h.367a4.05,4.05,0,0,0-2.268-2.837l.83-1.383a5.562,5.562,0,0,1,3.106,5.582,5.621,5.621,0,0,1-4.764,5.019A5.6,5.6,0,0,1-408.46,467.03Z",
    transform: "translate(-139.595 -139.873)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1736
    },
    __self: undefined
  })));
};
const DressIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8.069",
    height: "16",
    viewBox: "0 0 8.069 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1749
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1755
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2037",
    d: "M128.461,11.218c-.107-.534-.341-3.042-.9-3.875a1.286,1.286,0,0,1-.169-.714.035.035,0,0,0,0-.006c.018-.257.046-.531.065-.677,0-.026.007-.051.01-.067.014-.086.033-.171.051-.257h0a14.282,14.282,0,0,0,.458-2.441c0-1.27-.651-1.644-.651-1.644.224-.95.384-1.462.384-1.462L127.522,0a9.387,9.387,0,0,0-.427,1.526,2.588,2.588,0,0,1-1.921.619,2.59,2.59,0,0,1-1.921-.619A9.4,9.4,0,0,0,122.825,0l-.192.075s.16.512.384,1.462c0,0-.651.374-.651,1.644a13.042,13.042,0,0,0,.437,2.339.086.086,0,0,0,0,.035c0,.008.006.019.009.031l.006.024c.027.109.066.3.072.311.013.077.027.216.039.358.005.049.009.1.012.145.005.068.01.132.014.184h-.006a1.3,1.3,0,0,1-.17.735c-.555.833-.79,3.341-.9,3.874s-.363,2.5-.491,3.074-.256,1.367-.256,1.367a3.288,3.288,0,0,0,1.068.128s-.075.224.576.16a12.831,12.831,0,0,1,1.75-.054c.448.021.135.107.64.107s.192-.085.64-.107a12.79,12.79,0,0,1,1.751.054c.651.064.576-.16.576-.16a3.3,3.3,0,0,0,1.067-.128s-.128-.79-.256-1.367S128.568,11.752,128.461,11.218Zm-1.139-5.467c-.05.069-.094.177-.036.224-.015.1-.024.206-.034.309-.058-.066-.243-.006-.243-.006-.138-.06.121.3.226.161,0,.058-.006.115-.009.173-.126-.009-.253-.018-.38-.025a.586.586,0,0,0-.061-.133c.014-.1-.1.014-.134.122-.273-.011-.547-.016-.822-.018-.057-.068-.244-.007-.244-.007-.028-.012-.04-.007-.039.008h-.028a.13.13,0,0,0,.015-.059.135.135,0,0,0-.27,0,.133.133,0,0,0,.015.06c-.361,0-.721.012-1.081.021a.7.7,0,0,0-.037-.069c.012-.082-.065-.015-.112.073l-.184,0a.436.436,0,0,0,.1-.178c.137-.086-.384-.065-.241.134a.182.182,0,0,0,.045.046l-.151,0a.078.078,0,0,0,0-.109c-.121-.176-.212.084-.222.114l-.263.006c0-.024,0-.048,0-.072.065-.01.28-.273.075-.315a.151.151,0,0,0-.1,0c-.01-.115-.024-.229-.043-.342a.6.6,0,0,0,.052-.12c.06-.037,0-.054-.085-.046-.01-.044-.022-.087-.035-.13l.2,0a.135.135,0,1,0,.26.051.132.132,0,0,0-.012-.055l.926-.017a.085.085,0,0,0,0,.117c.127.177.217-.064.236-.122l.426,0c.066.084.2.175.246.038a.184.184,0,0,0,.008-.041c.208,0,.417,0,.624,0a.133.133,0,0,0-.03.082.135.135,0,1,0,.27,0,.132.132,0,0,0-.029-.08c.342.006.681.022,1.021.042-.1.013-.226.069-.147.179.143.2.241-.134.241-.134.026-.016.028-.029.016-.037l.091.006s0,.005.007.007C127.34,5.661,127.331,5.706,127.322,5.751Z",
    transform: "translate(-121.139)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1756
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2038",
    d: "M254.937,189.152c-.128.076.352.067.224-.119S254.937,189.152,254.937,189.152Z",
    transform: "translate(-250.536 -182.787)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1762
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2039",
    d: "M237.086,189.725c-.088.209.221.124.221.124C237.441,189.916,237.175,189.516,237.086,189.725Z",
    transform: "translate(-233.276 -183.455)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1768
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2040",
    d: "M246.479,182.469c-.253-.051-.088.275-.088.275C246.346,182.908,246.731,182.52,246.479,182.469Z",
    transform: "translate(-242.24 -176.491)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1774
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2041",
    d: "M274.916,173.035c.084-.231-.247-.122-.247-.122C274.521,172.847,274.832,173.266,274.916,173.035Z",
    transform: "translate(-269.605 -167.228)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1780
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2042",
    d: "M264.6,178.247c.245.021.054-.27.054-.27C264.673,177.816,264.35,178.226,264.6,178.247Z",
    transform: "translate(-259.81 -172.115)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1786
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2043",
    d: "M255.758,174.715c.143.2.241-.134.241-.134C256.136,174.495,255.615,174.515,255.758,174.715Z",
    transform: "translate(-251.328 -168.82)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1792
    },
    __self: undefined
  }), __jsx("circle", {
    "data-name": "Ellipse 71",
    cx: "0.135",
    cy: "0.135",
    r: "0.135",
    transform: "translate(2.892 6.148)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1798
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2044",
    d: "M218.467,182.406c-.128-.187-.224.119-.224.119C218.114,182.6,218.595,182.592,218.467,182.406Z",
    transform: "translate(-215.043 -176.377)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1806
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2045",
    d: "M219.072,192.782c-.148-.065.163.354.247.123S219.072,192.782,219.072,192.782Z",
    transform: "translate(-215.828 -186.447)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1812
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2046",
    d: "M199.506,183.093c-.088.209.221.124.221.124C199.86,183.284,199.594,182.885,199.506,183.093Z",
    transform: "translate(-196.925 -177.041)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1818
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2047",
    d: "M208.891,175.836c-.253-.051-.088.275-.088.275C208.758,176.276,209.143,175.887,208.891,175.836Z",
    transform: "translate(-205.882 -170.076)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1824
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2048",
    d: "M289.843,186.1a.135.135,0,1,1-.135.135A.135.135,0,0,1,289.843,186.1Z",
    transform: "translate(-284.19 -180.009)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1830
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2049",
    d: "M298.459,180.79c-.128.077.352.067.224-.119S298.459,180.79,298.459,180.79Z",
    transform: "translate(-292.633 -174.698)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1836
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2050",
    d: "M279.489,192.851c.143.2.241-.134.241-.134C279.867,192.631,279.346,192.651,279.489,192.851Z",
    transform: "translate(-274.281 -186.362)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1842
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2051",
    d: "M279.72,181.364c-.088.209.221.124.221.124C280.075,181.555,279.808,181.155,279.72,181.364Z",
    transform: "translate(-274.514 -175.368)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1848
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2052",
    d: "M289.113,174.1c-.253-.051-.089.275-.089.275C288.98,174.541,289.366,174.153,289.113,174.1Z",
    transform: "translate(-283.478 -168.398)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1854
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2053",
    d: "M228.78,171.616c.245.021.054-.27.054-.27C228.858,171.185,228.535,171.6,228.78,171.616Z",
    transform: "translate(-225.167 -165.701)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1860
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2054",
    d: "M193.371,173.035c.084-.231-.247-.122-.247-.122C192.976,172.847,193.287,173.266,193.371,173.035Z",
    transform: "translate(-190.73 -167.228)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1866
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2055",
    d: "M183.052,178.247c.245.021.054-.27.054-.27C183.13,177.816,182.807,178.226,183.052,178.247Z",
    transform: "translate(-180.936 -172.115)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1872
    },
    __self: undefined
  })));
};
const Handbag = () => {
  return __jsx("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.999 511.999",
    width: "15",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1885
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1893
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1894
    },
    __self: undefined
  }, __jsx("path", {
    d: "M496.619,428.582l-51.45-221.82h-62.616v48.827H393.1v30.001h-51.096v-30.001h10.547v-48.827H159.448v48.827h10.547 v30.001H118.9v-30.001h10.547v-48.827H66.83l-51.45,221.82c-4.715,20.332,0.026,41.364,13.011,57.705 c12.985,16.341,32.401,25.712,53.272,25.712h348.672c20.871,0,40.289-9.372,53.273-25.712 C496.593,469.946,501.335,448.914,496.619,428.582z M298.917,285.591H271v23.18h-30.001v-23.18h-27.917V255.59h85.836V285.591z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1895
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1903
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1904
    },
    __self: undefined
  }, __jsx("path", {
    d: "M255.999,0c-69.781,0-126.553,56.772-126.553,126.552v80.21h30.001v-80.21c0-53.239,43.313-96.551,96.552-96.551 c53.238,0,96.552,43.313,96.552,96.551v80.21h30.001v-80.21C382.552,56.772,325.781,0,255.999,0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1905
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1911
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1912
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1913
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1914
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1915
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1916
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1917
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1918
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1919
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1920
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1921
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1922
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1923
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1924
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1925
    },
    __self: undefined
  }));
}; // SVG EllipsisIcon icon

const EllipsisIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "6",
    viewBox: "0 0 26 6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1933
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 152",
    transform: "translate(589 479)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1939
    },
    __self: undefined
  }, __jsx("ellipse", {
    "data-name": "Ellipse 20",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-589 -479)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1940
    },
    __self: undefined
  }), __jsx("ellipse", {
    "data-name": "Ellipse 22",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-569.271 -479)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1949
    },
    __self: undefined
  }), __jsx("ellipse", {
    "data-name": "Ellipse 21",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-579.136 -479)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1958
    },
    __self: undefined
  })));
}; // SVG ArrowNext icon

const GiftBox = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.857",
    height: "16",
    viewBox: "0 0 14.857 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1975
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2485",
    transform: "translate(-81.5 40)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1981
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1982
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(-5.5 21)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1983
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-gift (1)",
    d: "M61.714,35.714H58.7a2.1,2.1,0,0,0,.725-1.571A2.2,2.2,0,0,0,57.175,32a1.993,1.993,0,0,0-1.746.979A1.993,1.993,0,0,0,53.682,32a2.2,2.2,0,0,0-2.254,2.143,2.086,2.086,0,0,0,.725,1.571H49.143A1.142,1.142,0,0,0,48,36.857v.714a.143.143,0,0,0,.143.143H62.714a.143.143,0,0,0,.143-.143v-.714A1.142,1.142,0,0,0,61.714,35.714ZM57.175,33a1.144,1.144,0,1,1,0,2.286h-1.2C55.971,33.571,56.511,33,57.175,33Zm-3.493,0c.664,0,1.2.571,1.2,2.286h-1.2a1.144,1.144,0,1,1,0-2.286Zm-5.111,5.929v7.929A1.146,1.146,0,0,0,49.714,48h5.214V38.643H48.857A.287.287,0,0,0,48.571,38.929ZM62,38.643H55.929V48h5.214a1.146,1.146,0,0,0,1.143-1.143V38.929A.287.287,0,0,0,62,38.643Z",
    transform: "translate(39 -93)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1984
    },
    __self: undefined
  })))));
}; // SVG ArrowNext icon

const ArrowNext = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2000
    },
    __self: undefined
  }, __jsx("path", {
    d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
    fill: "currentColor",
    stroke: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2001
    },
    __self: undefined
  }));
}; // SVG ArrowPrev icon

const ArrowPrev = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2013
    },
    __self: undefined
  }, __jsx("path", {
    d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
    fill: "currentColor",
    stroke: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2014
    },
    __self: undefined
  }));
}; // SVG Lock icon

const LockIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2026
    },
    __self: undefined
  }, __jsx("path", {
    d: "M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2027
    },
    __self: undefined
  }));
}; // SVG SearchIcon icon

const SearchIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2039
    },
    __self: undefined
  }, __jsx("path", {
    d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
    transform: "translate(-0.984)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2045
    },
    __self: undefined
  }));
}; // SVG SearchIcon icon

const SearchIconSmall = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.01",
    height: "14.01",
    viewBox: "0 0 14.01 14.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2057
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-search (5)",
    d: "M77.845,76.9l-3.9-3.932a5.553,5.553,0,1,0-.843.854l3.871,3.906a.6.6,0,0,0,.846.022A.6.6,0,0,0,77.845,76.9Zm-8.26-3.031a4.384,4.384,0,1,1,3.1-1.284A4.358,4.358,0,0,1,69.586,73.865Z",
    transform: "translate(-64 -63.9)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2063
    },
    __self: undefined
  }));
}; // SVG SmartPhone icon

const SmartPhone = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.602",
    height: "24",
    viewBox: "0 0 15.602 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2076
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2082
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 111",
    d: "M67.566,18.7V.808A.808.808,0,0,0,66.757,0H52.772a.808.808,0,0,0-.808.808V18.7h15.6Zm-7.8-4.449a.848.848,0,1,1,.848-.848A.848.848,0,0,1,59.765,14.247Zm2.844-2.267a.647.647,0,0,1-.914,0,2.728,2.728,0,0,0-3.859,0,.647.647,0,0,1-.915-.914,4.021,4.021,0,0,1,5.688,0A.646.646,0,0,1,62.609,11.98ZM54.991,9.134a6.75,6.75,0,0,1,9.548,0,.647.647,0,1,1-.915.914,5.457,5.457,0,0,0-7.719,0,.647.647,0,0,1-.915-.914Z",
    transform: "translate(-51.964)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2083
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 112",
    d: "M51.964,247.371v3.2a.808.808,0,0,0,.808.808H66.757a.808.808,0,0,0,.808-.808v-3.2Zm8.5,2.289h-1.4a.647.647,0,1,1,0-1.293h1.4a.647.647,0,1,1,0,1.293Z",
    transform: "translate(-51.964 -227.381)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2089
    },
    __self: undefined
  })));
}; // SVG CloseIcon icon

const CloseIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.003",
    height: "10",
    viewBox: "0 0 10.003 10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2103
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-close (5)",
    d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
    transform: "translate(-160.5 -160.55)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2109
    },
    __self: undefined
  }));
}; // SVG CategoryIcon icon

const CategoryIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2122
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2029",
    d: "M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z",
    transform: "translate(0 -0.001)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2128
    },
    __self: undefined
  }));
};
const ArrowDropDown = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2140
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2030",
    d: "M0,63.75l5,5,5-5Z",
    transform: "translate(0 -63.75)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2146
    },
    __self: undefined
  }));
};
const ShoppingBag = () => {
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2158
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.686",
    height: "16",
    viewBox: "0 0 12.686 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2159
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2704",
    transform: "translate(-27.023 -2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2165
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 17",
    transform: "translate(27.023 5.156)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2166
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2167
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3",
    d: "M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",
    transform: "translate(-53.023 -101.005)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2168
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 19",
    transform: "translate(30.274 2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2176
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2177
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 4",
    d: "M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",
    transform: "translate(-157.039)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2178
    },
    __self: undefined
  }))))));
};
const ShoppingBagLarge = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 23.786 30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2198
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "shopping-bag (3)",
    transform: "translate(-53.023)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2204
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2205
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 17",
    transform: "translate(53.023 5.918)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2206
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2207
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3",
    d: "M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z",
    transform: "translate(-53.023 -101.005)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2208
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 19",
    transform: "translate(59.118)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2216
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2217
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 4",
    d: "M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z",
    transform: "translate(-157.039)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2218
    },
    __self: undefined
  }))))));
};
const PencilIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "7.2",
    height: "7.2",
    viewBox: "0 0 7.2 7.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2234
    },
    __self: undefined
  }, __jsx("path", {
    d: "M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z",
    transform: "translate(-64 -63.999)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2240
    },
    __self: undefined
  }));
};
const LongArrowLeft = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "8.003",
    viewBox: "0 0 12 8.003",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2251
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
    d: "M116.447,160.177a.545.545,0,0,1,0,.767l-2.53,2.538h9.641a.542.542,0,0,1,0,1.084h-9.641l2.534,2.538a.549.549,0,0,1,0,.767.54.54,0,0,1-.763,0l-3.435-3.46a.608.608,0,0,1-.113-.171.517.517,0,0,1-.042-.208.543.543,0,0,1,.154-.379l3.435-3.46A.531.531,0,0,1,116.447,160.177Z",
    transform: "translate(-112.1 -160.023)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2257
    },
    __self: undefined
  }));
};
const CheckMark = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.894",
    height: "16",
    viewBox: "0 0 20.894 16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2269
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-checkmark (3)",
    d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
    transform: "translate(-148.4 -173.6)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2275
    },
    __self: undefined
  }));
}; // SVG notification icon

const NotificationIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.898",
    height: "18",
    viewBox: "0 0 15.898 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2288
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2062",
    d: "M3756.814,4042.745c-.321,1.887-1.279,2.844-2.816,2.832-1.495-.011-2.448-.987-2.74-2.8-.834-.14-1.684-.218-2.494-.44a7.131,7.131,0,0,1-1.956-.838,1.354,1.354,0,0,1-.333-2.139,7.716,7.716,0,0,0,1.7-4.647,16.446,16.446,0,0,1,.793-3.939,4.785,4.785,0,0,1,4.625-3.188,8.258,8.258,0,0,1,2.4.256,4.649,4.649,0,0,1,3.432,3.795c.3,1.292.441,2.62.646,3.934a7.247,7.247,0,0,0,.836,2.789,6.2,6.2,0,0,0,.573.74,1.577,1.577,0,0,1-.41,2.6,7.794,7.794,0,0,1-2.977.89C3757.661,4042.654,3757.234,4042.695,3756.814,4042.745Zm3.407-2.482a8.64,8.64,0,0,1-1.888-5.015c-.139-1.1-.309-2.195-.547-3.274a3.019,3.019,0,0,0-2.075-2.482,5.458,5.458,0,0,0-1.612-.264c-2.086.031-3.318.688-3.815,2.928-.259,1.167-.388,2.365-.561,3.55a7.6,7.6,0,0,1-1.781,4.458c-.022.023-.019.071-.026.1C3749.689,4041.453,3758.313,4041.456,3760.221,4040.263Zm-4.717,2.583h-2.94a1.47,1.47,0,1,0,2.94,0Z",
    transform: "translate(-3746.087 -4027.577)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2294
    },
    __self: undefined
  }));
}; // SVG Notification dot icon

const AlertDotIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2307
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2830",
    transform: "translate(-1598 -32)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2313
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Ellipse 73",
    transform: "translate(1598 32)",
    fill: "#ffffff",
    stroke: "currentColor",
    strokeWidth: "0.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2314
    },
    __self: undefined
  }, __jsx("circle", {
    cx: "5",
    cy: "5",
    r: "5",
    stroke: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2321
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "5",
    cy: "5",
    r: "4.85",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2322
    },
    __self: undefined
  })), __jsx("path", {
    "data-name": "Path 2700",
    d: "M2,0A2,2,0,1,1,0,2,2,2,0,0,1,2,0Z",
    transform: "translate(1601 35)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2324
    },
    __self: undefined
  })));
}; // Dashboard

const DashboardIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2338
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2583",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2344
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2129",
    d: "M1667.731,877.683a3.066,3.066,0,1,1-3.067-3.068A3.061,3.061,0,0,1,1667.731,877.683Z",
    transform: "translate(-1652.731 -865.747)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2345
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2130",
    d: "M1471.213,874.615a3.066,3.066,0,1,1-3.072,3.064A3.06,3.06,0,0,1,1471.213,874.615Z",
    transform: "translate(-1468.141 -865.747)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2351
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2131",
    d: "M1474.272,684.227a3.066,3.066,0,1,1-3.044-3.075A3.063,3.063,0,0,1,1474.272,684.227Z",
    transform: "translate(-1468.14 -681.152)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2357
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2132",
    d: "M1674.436,691.284q0,1.143,0,2.286c0,.335-.107.441-.443.441h-4.572c-.326,0-.438-.108-.438-.43q0-2.295,0-4.589c0-.323.111-.433.435-.433h4.572c.344,0,.445.105.446.455Q1674.436,690.149,1674.436,691.284Z",
    transform: "translate(-1659.775 -688.219)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2363
    },
    __self: undefined
  })));
}; // Product

const ProductIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.6",
    height: "13",
    viewBox: "0 0 15.6 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2377
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 154",
    d: "M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0",
    transform: "translate(-288 -413.89)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2383
    },
    __self: undefined
  }));
}; // Category

const SidebarCategoryIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.958",
    height: "13",
    viewBox: "0 0 12.958 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2396
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 321",
    d: "M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z",
    transform: "translate(-1.001)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2402
    },
    __self: undefined
  }));
}; // Orders

const OrderIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.321",
    height: "13",
    viewBox: "0 0 11.321 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2415
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 1087",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2421
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 1086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2422
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 322",
    d: "M274.867.365A.733.733,0,0,0,274.234,0h-2.718V3.215h5Z",
    transform: "translate(-265.461)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2423
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 323",
    d: "M48.821,0H46.077a.733.733,0,0,0-.633.366L43.8,3.215h5.02V0Z",
    transform: "translate(-43.528)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2429
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 324",
    d: "M33.057,156.648v8.127a.9.9,0,0,0,.9.9h9.529a.9.9,0,0,0,.9-.9v-8.127Zm7.39,3.418-1.971,1.971a.38.38,0,0,1-.539,0l-.924-.924a.381.381,0,1,1,.539-.539l.654.654,1.7-1.7a.381.381,0,1,1,.539.539Z",
    transform: "translate(-33.057 -152.671)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2435
    },
    __self: undefined
  }))));
}; // Customers

const CustomerIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.489",
    height: "13",
    viewBox: "0 0 12.489 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2450
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "group (1)",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2456
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 327",
    d: "M43.356,2.708a.328.328,0,0,0,.459-.062,5.053,5.053,0,0,1,8.04,0,.328.328,0,1,0,.521-.4,5.708,5.708,0,0,0-9.081,0A.328.328,0,0,0,43.356,2.708Z",
    transform: "translate(-41.591)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2457
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 328",
    d: "M228.037,79.44a1.023,1.023,0,1,0,1.023-1.023A1.024,1.024,0,0,0,228.037,79.44Z",
    transform: "translate(-218.311 -74.985)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2463
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 329",
    d: "M214.438,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306h1.731a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,214.438,130.872Z",
    transform: "translate(-202.642 -125.054)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2469
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 330",
    d: "M23.247,80.463a1.023,1.023,0,1,0-1.023-1.023A1.024,1.024,0,0,0,23.247,80.463Z",
    transform: "translate(-21.507 -74.985)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2475
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 331",
    d: "M8.626,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306H8.445a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,8.626,130.872Z",
    transform: "translate(-5.839 -125.054)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2481
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 332",
    d: "M121,40.028a1.319,1.319,0,1,0-1.319,1.319A1.321,1.321,0,0,0,121,40.028Z",
    transform: "translate(-113.433 -37.015)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2487
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 333",
    d: "M100.82,110.947h0l-.377-.116a.117.117,0,0,0-.144.072l-.792,2.173a.143.143,0,0,1-.269,0l-.792-2.173a.117.117,0,0,0-.11-.077c-.011,0-.411.121-.411.121a1.169,1.169,0,0,0-.8,1.11v2.3a.117.117,0,0,0,.019.064l.826,1.257v3.181a.117.117,0,0,0,.117.117h2.573a.117.117,0,0,0,.117-.117v-3.181l.826-1.257a.117.117,0,0,0,.019-.064v-2.3A1.161,1.161,0,0,0,100.82,110.947Z",
    transform: "translate(-93.126 -105.975)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2493
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 334",
    d: "M141.079,111.386a.174.174,0,0,0-.129-.054h-.361a.174.174,0,0,0-.129.054.167.167,0,0,0-.022.2l.193.291-.09.762.178.473a.054.054,0,0,0,.1,0l.178-.473-.09-.762.193-.291A.167.167,0,0,0,141.079,111.386Z",
    transform: "translate(-134.525 -106.459)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2499
    },
    __self: undefined
  })));
}; // Inbox

const InboxIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13.867",
    height: "12.133",
    viewBox: "0 0 13.867 12.133",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2513
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2932",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2519
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 325",
    d: "M7,3V0H5V3H4L6,5.5,8,3Z",
    transform: "translate(1 4)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2520
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 326",
    d: "M11.267,1H9.533v.867H10.66L12.913,8.8H9.533v1.733h-5.2V8.8H.953L3.207,1.867H4.333V1H2.6L0,8.8v4.333H13.867V8.8Z",
    transform: "translate(0 -1)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2526
    },
    __self: undefined
  })));
}; // Refund

const RefundIcon = () => {
  return __jsx("svg", {
    "data-name": "Group 2392",
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "13",
    viewBox: "0 0 15 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2540
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2547
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 335",
    d: "M301.479,70.5a3.284,3.284,0,1,0-2.812-3.25A3.058,3.058,0,0,0,301.479,70.5Zm-.765-4.656.625-.361a.275.275,0,0,1,.3.016.377.377,0,0,1,.148.307v2.889a.316.316,0,1,1-.625,0v-2.3l-.173.1a.3.3,0,0,1-.419-.162A.389.389,0,0,1,300.715,65.844Z",
    transform: "translate(-289.917 -64)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2548
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 336",
    d: "M2.919,213.931l-2.545-.588a.284.284,0,0,0-.259.075A.387.387,0,0,0,0,213.7v5.778a.339.339,0,0,0,.313.361H2.271a1,1,0,0,0,.928-.93l.464-3.759A1.08,1.08,0,0,0,2.919,213.931Z",
    transform: "translate(0 -208.28)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2554
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 337",
    d: "M138.085,247.5a7.23,7.23,0,0,0-1.64.332.362.362,0,0,0-.235.368c0,.007,0,.014,0,.022a1.747,1.747,0,0,1-.585,1.351,2.141,2.141,0,0,1-1.477.462,11.623,11.623,0,0,1-3.5-.769.38.38,0,0,1-.236-.418.315.315,0,0,1,.4-.281,11.347,11.347,0,0,0,3.339.745,1.552,1.552,0,0,0,1.1-.319.984.984,0,0,0,.334-.772,1.416,1.416,0,0,0-.016-.172c-.118-1-1.254-1.353-2.422-1.627a4.926,4.926,0,0,1-1.335-.569,3.055,3.055,0,0,0-1.539-.521,5.015,5.015,0,0,0-.752.06.353.353,0,0,0-.27.386,1.994,1.994,0,0,1-.009.384l-.464,3.76a.985.985,0,0,1-.02.1l-.017.072a.38.38,0,0,0,.176.416,13.78,13.78,0,0,0,4.481,1.685c1.212,0,3.708-1.418,5.359-2.356.426-.242.779-.443,1.01-.56a.364.364,0,0,0,.193-.321C139.968,248.1,139.195,247.5,138.085,247.5Z",
    transform: "translate(-124.96 -239.191)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2560
    },
    __self: undefined
  })));
}; // Coupons

const CouponIcon = () => {
  return __jsx("svg", {
    "data-name": "Group 2930",
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.426",
    height: "13",
    viewBox: "0 0 11.426 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2574
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2581
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3616",
    d: "M116.344,226.9a1.513,1.513,0,0,0-.27.027l-.982-1.113,1.958-2.219a1.526,1.526,0,0,0-.135-2.15l-2.839,3.218,0,0-.632.716h-.769l.386.439-.984,1.115a1.523,1.523,0,1,0,1.222,1.493,1.5,1.5,0,0,0-.085-.478l.862-.977.839.952a1.5,1.5,0,0,0-.093.5,1.523,1.523,0,1,0,1.523-1.523Zm-4.57,2.285a.762.762,0,1,1,.762-.762A.764.764,0,0,1,111.774,229.182Zm4.57,0a.762.762,0,1,1,.762-.762A.764.764,0,0,1,116.344,229.182Zm0,0",
    transform: "translate(-107.965 -216.944)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2582
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 3617",
    d: "M4.605,0V1.574H3.844V0H-2.25V7.668H2.884l.96-1.089v-1.2h.762v.335L6.632,3.425l.571.5A2.287,2.287,0,0,1,7.409,7.15l-.457.518H9.176V0ZM1.178,3.479A1.141,1.141,0,0,1,1.559,5.7v.8H.8V5.7A1.139,1.139,0,0,1,.035,4.621H.8a.381.381,0,1,0,.381-.381A1.141,1.141,0,0,1,.8,2.024v-.83h.762v.83A1.139,1.139,0,0,1,2.32,3.1H1.559a.381.381,0,1,0-.381.381ZM4.605,4.621H3.844V3.859h.762Zm0-1.523H3.844V2.336h.762Zm0,0",
    transform: "translate(2.25)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2588
    },
    __self: undefined
  })));
}; // Settings

const SettingIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2602
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "005-repairing-service",
    d: "M12.961,5.778a.423.423,0,0,0-.418-.32,1.435,1.435,0,0,1-.982-2.5.361.361,0,0,0,.04-.49,6.435,6.435,0,0,0-1.03-1.04.362.362,0,0,0-.494.04,1.5,1.5,0,0,1-1.621.364A1.444,1.444,0,0,1,7.577.422a.361.361,0,0,0-.319-.38A6.487,6.487,0,0,0,5.8.039a.362.362,0,0,0-.322.372A1.446,1.446,0,0,1,4.584,1.8a1.5,1.5,0,0,1-1.609-.367.362.362,0,0,0-.491-.041,6.462,6.462,0,0,0-1.051,1.04.362.362,0,0,0,.039.494,1.44,1.44,0,0,1,.363,1.622,1.5,1.5,0,0,1-1.414.879.354.354,0,0,0-.376.319,6.516,6.516,0,0,0,0,1.478.43.43,0,0,0,.426.32,1.426,1.426,0,0,1,1.338.891,1.446,1.446,0,0,1-.364,1.607.361.361,0,0,0-.039.49,6.458,6.458,0,0,0,1.028,1.04.361.361,0,0,0,.495-.039,1.5,1.5,0,0,1,1.62-.364,1.442,1.442,0,0,1,.88,1.411.361.361,0,0,0,.319.38,6.472,6.472,0,0,0,1.462,0,.362.362,0,0,0,.322-.372,1.445,1.445,0,0,1,.89-1.386,1.5,1.5,0,0,1,1.61.366.363.363,0,0,0,.491.041,6.47,6.47,0,0,0,1.051-1.04.361.361,0,0,0-.039-.494,1.44,1.44,0,0,1-.364-1.621,1.455,1.455,0,0,1,1.33-.881l.08,0a.362.362,0,0,0,.38-.319A6.487,6.487,0,0,0,12.961,5.778ZM6.5,10.247A3.747,3.747,0,1,1,9.719,8.421L8.078,6.78A2.3,2.3,0,0,0,5.356,3.666a.26.26,0,0,0-.18.181.254.254,0,0,0,.072.248s.81.816,1.081,1.087a.168.168,0,0,1,.024.121l0,.018a5.181,5.181,0,0,1-.123.793l-.017.017-.018.018a5.107,5.107,0,0,1-.805.125v0l-.014,0H5.361a.173.173,0,0,1-.125-.053c-.282-.282-1.06-1.055-1.06-1.055a.265.265,0,0,0-.189-.084.257.257,0,0,0-.242.2A2.3,2.3,0,0,0,6.859,8L8.518,9.657A3.728,3.728,0,0,1,6.5,10.247Z",
    transform: "translate(-0.002 0.001)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2608
    },
    __self: undefined
  }));
}; // Logout

const LogoutIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.999",
    height: "13",
    viewBox: "0 0 15.999 13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2621
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2627
    },
    __self: undefined
  }, __jsx("filter", {
    x: "4.583",
    y: "1.792",
    width: "11.416",
    height: "10.333",
    filterUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2628
    },
    __self: undefined
  }, __jsx("feGaussianBlur", {
    stdDeviation: "1",
    result: "blur",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2636
    },
    __self: undefined
  }), __jsx("feFlood", {
    floodOpacity: "0.161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2637
    },
    __self: undefined
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2638
    },
    __self: undefined
  }), __jsx("feComposite", {
    in: "SourceGraphic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2639
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "007-logout",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2642
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 1075",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2643
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 1074",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2644
    },
    __self: undefined
  }, __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#Path_319)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2645
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 319",
    d: "M304.055,151.3a.547.547,0,0,0-.118-.177l-1.624-1.624a.542.542,0,0,0-.766.766l.7.7h-3.026a.542.542,0,1,0,0,1.083h3.026l-.7.7a.542.542,0,1,0,.766.766l1.624-1.624a.536.536,0,0,0,.118-.177A.542.542,0,0,0,304.055,151.3Z",
    transform: "translate(-291.1 -145.55)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2646
    },
    __self: undefined
  })), __jsx("path", {
    "data-name": "Path 320",
    d: "M9.222,7.583a.542.542,0,0,0-.542.542v2.708H6.514V2.167a.542.542,0,0,0-.386-.519L4.247,1.083H8.681V3.792a.542.542,0,0,0,1.083,0V.542A.542.542,0,0,0,9.222,0H.556A.483.483,0,0,0,.5.01.535.535,0,0,0,.27.09C.258.1.244.1.232.107S.226.116.222.12A.537.537,0,0,0,.078.291.442.442,0,0,0,.063.336.514.514,0,0,0,.02.463a.337.337,0,0,0,0,.047C.021.521.014.531.014.542V11.375a.541.541,0,0,0,.435.531l5.417,1.083A.5.5,0,0,0,5.972,13a.542.542,0,0,0,.542-.542v-.542H9.222a.542.542,0,0,0,.542-.542V8.125A.542.542,0,0,0,9.222,7.583Z",
    transform: "translate(-0.014)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2653
    },
    __self: undefined
  })))));
};
const CarretDownIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2668
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-arrow-dropdown (2)",
    d: "M128,192l5,5,5-5Z",
    transform: "translate(-128 -192)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2674
    },
    __self: undefined
  }));
};
const CarretUpIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2686
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-arrow-dropdown (2)",
    d: "M128,192l5,5,5-5Z",
    transform: "translate(138 197) rotate(180)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2692
    },
    __self: undefined
  }));
};
const OptionIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "3.5",
    height: "14",
    viewBox: "0 0 3.5 14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2704
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-more (1)",
    d: "M219.5,97.75a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,97.75Zm0,10.5a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,108.25Zm0-5.25a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,103Z",
    transform: "translate(-216 -96)",
    fill: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2710
    },
    __self: undefined
  }));
};
const Revenue = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2726
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2541",
    transform: "translate(-1719 -150)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2732
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2087",
    d: "M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z",
    transform: "translate(1719 150)",
    fill: "#00c58d",
    opacity: "0.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2733
    },
    __self: undefined
  }), __jsx("g", {
    "data-name": "Group 2542",
    transform: "translate(1734.867 165.867)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2740
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2088",
    d: "M3854.718,4669.131a.507.507,0,0,0-.359-.15l-.048,0-8.585.831a.511.511,0,0,0-.31.864l1.58,1.58-12.093,12.093a.507.507,0,0,0,0,.718l3.877,3.877a.511.511,0,0,0,.718,0l2.112-2.111a.508.508,0,0,0,.148-.359.507.507,0,0,0-.867-.358l-1.753,1.752-3.159-3.159,12.093-12.094a.506.506,0,0,0,0-.717l-1.177-1.178,6.9-.668-.667,6.9-1.178-1.177a.506.506,0,0,0-.718,0l-9.166,9.165a.508.508,0,1,0,.719.718l8.806-8.806,1.579,1.579a.5.5,0,0,0,.353.146h0a.507.507,0,0,0,.512-.455l.831-8.585A.5.5,0,0,0,3854.718,4669.131Z",
    transform: "translate(-3830.598 -4668.98)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2741
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2089",
    d: "M3806.064,5023.59a.51.51,0,0,0-.718,0,.509.509,0,0,0,0,.72l3.877,3.876a.5.5,0,0,0,.359.147h0a.5.5,0,0,0,.386-.177.509.509,0,0,0-.026-.688Z",
    transform: "translate(-3802.428 -5006.836)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2747
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2090",
    d: "M3776.51,5053.146a.508.508,0,0,0-.867.36.5.5,0,0,0,.149.358l3.877,3.877a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.359-.865Z",
    transform: "translate(-3774.258 -5035.007)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2753
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2091",
    d: "M3746.954,5082.7a.508.508,0,1,0-.718.718l3.876,3.876a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.36-.865Z",
    transform: "translate(-3746.086 -5063.178)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2759
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2092",
    d: "M4054.57,4973.039a4.424,4.424,0,1,0,4.424,4.424A4.43,4.43,0,0,0,4054.57,4973.039Zm0,7.833a3.409,3.409,0,1,1,3.408-3.409A3.413,3.413,0,0,1,4054.57,4980.873Z",
    transform: "translate(-4035.901 -4958.794)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2765
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2093",
    d: "M4114.442,5005.083a.522.522,0,0,0,.108.011.508.508,0,0,0,.507-.507v-.255a1.265,1.265,0,0,0-1.017-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.38,2.745h.255a.383.383,0,0,1,0,.767h-.382a.257.257,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.281a.508.508,0,1,0,1.016,0v-.308a1.4,1.4,0,0,0,.4-2.5Zm-.251-.137,0,0a1.388,1.388,0,0,0-.535-.106h-.255a.383.383,0,0,1,0-.767h.381a.256.256,0,0,1,.256.256v.255A.5.5,0,0,0,4114.19,5004.945Z",
    transform: "translate(-4094.863 -4986.681)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2771
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2094",
    d: "M3770.35,4697.666a4.424,4.424,0,1,0-4.424-4.424A4.428,4.428,0,0,0,3770.35,4697.666Zm0-7.832a3.409,3.409,0,1,1-3.408,3.408A3.412,3.412,0,0,1,3770.35,4689.834Z",
    transform: "translate(-3764.996 -4687.888)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2777
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2095",
    d: "M3829.184,4721.638h.255a.383.383,0,0,1,0,.767h-.382a.256.256,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.282a.508.508,0,0,0,1.015,0v-.309a1.4,1.4,0,0,0,.4-2.5.474.474,0,0,0,.108.011.508.508,0,0,0,.508-.508v-.254a1.266,1.266,0,0,0-1.018-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.381,2.745Zm.791-.909a1.391,1.391,0,0,0-.536-.107h-.255a.383.383,0,1,1,0-.766h.382a.256.256,0,0,1,.256.256v.254A.5.5,0,0,0,3829.975,4720.729Z",
    transform: "translate(-3823.958 -4715.777)",
    fill: "#00c58d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2783
    },
    __self: undefined
  }))));
};
const Refund = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2801
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2541",
    transform: "translate(-1719 -150)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2807
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2087",
    d: "M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z",
    transform: "translate(1719 150)",
    fill: "#2170ff",
    opacity: "0.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2808
    },
    __self: undefined
  }), __jsx("g", {
    "data-name": "Group 2543",
    transform: "translate(1733 164)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2815
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2544",
    transform: "translate(4.304 4.304)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2816
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2543",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2817
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2096",
    d: "M5368.315,4398.011a9.7,9.7,0,1,1,9.7-9.7A9.708,9.708,0,0,1,5368.315,4398.011Zm0-18.171a8.475,8.475,0,1,0,8.476,8.475A8.484,8.484,0,0,0,5368.315,4379.84Z",
    transform: "translate(-5358.62 -4378.62)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2818
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2097",
    d: "M5371.153,4381.62a9.534,9.534,0,1,0,9.533,9.533A9.545,9.545,0,0,0,5371.153,4381.62Zm0,18.171a8.638,8.638,0,1,1,8.638-8.638A8.647,8.647,0,0,1,5371.153,4399.791Z",
    transform: "translate(-5361.456 -4381.458)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2824
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2546",
    transform: "translate(10.041 8.13)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2832
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2545",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2833
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2098",
    d: "M5468.736,4461.133a.611.611,0,0,1-.61-.61v-.375c-1.949-.181-3.348-1.2-3.348-2.465a.611.611,0,0,1,1.222,0c0,.5.847,1.09,2.126,1.239v-3.194c-1.642-.465-3.348-1.128-3.348-2.886,0-1.263,1.4-2.284,3.348-2.465V4450a.61.61,0,1,1,1.22,0v.374c1.949.181,3.348,1.2,3.348,2.465a.61.61,0,0,1-1.22,0c0-.495-.848-1.091-2.127-1.238v3.194c1.643.466,3.348,1.126,3.348,2.886,0,1.263-1.4,2.284-3.348,2.465v.375A.61.61,0,0,1,5468.736,4461.133Zm.61-2.21c1.28-.148,2.127-.744,2.127-1.239,0-.7-.562-1.128-2.127-1.611Zm-1.22-7.318c-1.279.147-2.126.743-2.126,1.238,0,.7.562,1.128,2.126,1.611Z",
    transform: "translate(-5464.777 -4449.392)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2834
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2099",
    d: "M5472.021,4457.758v-3.5c1.465.118,2.452.8,2.452,1.417a.448.448,0,1,0,.9,0c0-1.214-1.438-2.183-3.348-2.314v-.525a.448.448,0,1,0-.9,0v.525c-1.911.131-3.348,1.1-3.348,2.314,0,1.626,1.545,2.26,3.348,2.763v3.495c-1.465-.118-2.452-.8-2.452-1.416a.448.448,0,1,0-.9,0c0,1.213,1.437,2.183,3.348,2.316v.523a.448.448,0,1,0,.9,0v-.523c1.91-.133,3.348-1.1,3.348-2.316C5475.369,4458.895,5473.824,4458.26,5472.021,4457.758Zm-.9-.249c-1.819-.537-2.452-1.026-2.452-1.83,0-.618.987-1.3,2.452-1.417Zm.9,4.428v-3.246c1.818.538,2.452,1.025,2.452,1.83C5474.474,4461.139,5473.486,4461.82,5472.021,4461.937Z",
    transform: "translate(-5467.616 -4452.229)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2840
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2548",
    transform: "translate(2.391 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2848
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2547",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2849
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2100",
    d: "M5334.839,4327a.61.61,0,1,1,0-1.221,12.786,12.786,0,1,0-9.167-21.685l.844-.281a.6.6,0,0,1,.194-.031.61.61,0,0,1,.192,1.19l-2.869.956a.626.626,0,0,1-.193.031.61.61,0,0,1-.6-.7l.478-3.348a.613.613,0,0,1,.6-.522.667.667,0,0,1,.087,0,.611.611,0,0,1,.518.691l-.173,1.2A14,14,0,1,1,5334.839,4327Z",
    transform: "translate(-5323.23 -4299)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2850
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2101",
    d: "M5347.463,4306.052a13.838,13.838,0,0,0-20.106.568l.246-1.718a.449.449,0,0,0-.888-.128l-.478,3.348a.451.451,0,0,0,.443.513.449.449,0,0,0,.144-.025l2.869-.956a.448.448,0,0,0-.284-.851l-1.442.48a12.941,12.941,0,1,1,9.712,21.493.449.449,0,0,0,0,.9,13.838,13.838,0,0,0,9.785-23.623Z",
    transform: "translate(-5326.069 -4301.836)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2856
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2550",
    transform: "translate(11.005 26.567)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2864
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2549",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2865
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2102",
    d: "M5483.667,4791.79a.585.585,0,0,1-.087-.006c-.165-.024-.333-.05-.493-.08a.61.61,0,0,1,.106-1.21.563.563,0,0,1,.108.009c.147.025.3.051.451.072a.61.61,0,0,1-.085,1.215Z",
    transform: "translate(-5482.584 -4790.493)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2866
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2103",
    d: "M5486.569,4793.572c-.153-.021-.307-.045-.457-.073a.448.448,0,1,0-.159.882c.161.03.325.055.487.078a.373.373,0,0,0,.065.006.449.449,0,0,0,.063-.894Z",
    transform: "translate(-5485.422 -4793.329)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2872
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2552",
    transform: "translate(8.34 25.795)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2880
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2551",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2881
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2104",
    d: "M5434.763,4777.729a.579.579,0,0,1-.19-.032c-.305-.1-.611-.212-.909-.333a.611.611,0,1,1,.459-1.131c.272.11.552.213.83.305a.611.611,0,0,1-.19,1.191Z",
    transform: "translate(-5433.283 -4776.188)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2882
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2105",
    d: "M5437.738,4779.53c-.281-.092-.565-.2-.84-.308a.448.448,0,1,0-.339.83c.3.12.6.231.9.331a.449.449,0,0,0,.279-.853Z",
    transform: "translate(-5436.119 -4779.026)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2888
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2554",
    transform: "translate(0.141 15.345)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2896
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2553",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2897
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2106",
    d: "M5282.4,4585.042a.614.614,0,0,1-.6-.481c-.069-.312-.126-.634-.174-.952a.613.613,0,0,1,.516-.693.771.771,0,0,1,.089,0,.614.614,0,0,1,.6.521c.042.29.1.583.158.87a.607.607,0,0,1-.082.459.614.614,0,0,1-.384.267A.653.653,0,0,1,5282.4,4585.042Z",
    transform: "translate(-5281.624 -4582.911)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2898
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2107",
    d: "M5285.676,4587.172c-.062-.29-.116-.586-.16-.88a.448.448,0,0,0-.887.13c.046.314.1.631.17.942a.45.45,0,0,0,.438.354.389.389,0,0,0,.1-.012A.446.446,0,0,0,5285.676,4587.172Z",
    transform: "translate(-5284.462 -4585.747)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2904
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2556",
    transform: "translate(0.262 9.839)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2912
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2555",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2913
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2108",
    d: "M5284.464,4483.11a.72.72,0,0,1-.121-.011.611.611,0,0,1-.478-.719c.063-.316.138-.632.223-.943a.614.614,0,0,1,.589-.45.635.635,0,0,1,.161.023.611.611,0,0,1,.428.751c-.077.282-.146.572-.2.86A.611.611,0,0,1,5284.464,4483.11Z",
    transform: "translate(-5283.853 -4480.987)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2914
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2109",
    d: "M5287.632,4484a.449.449,0,0,0-.552.314c-.083.306-.156.619-.22.931a.448.448,0,0,0,.352.528.461.461,0,0,0,.087.009.452.452,0,0,0,.441-.36c.059-.292.127-.585.206-.87A.45.45,0,0,0,5287.632,4484Z",
    transform: "translate(-5286.689 -4483.826)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2920
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2558",
    transform: "translate(0.829 18.034)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2928
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2557",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2929
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2110",
    d: "M5295.269,4634.7a.61.61,0,0,1-.557-.358c-.132-.293-.257-.594-.368-.9a.612.612,0,0,1,.36-.785.6.6,0,0,1,.211-.039.613.613,0,0,1,.573.4c.1.275.215.55.335.818a.611.611,0,0,1-.306.807A.592.592,0,0,1,5295.269,4634.7Z",
    transform: "translate(-5294.306 -4632.626)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2930
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2111",
    d: "M5298.513,4636.747c-.122-.271-.236-.549-.34-.829a.448.448,0,0,0-.84.311c.11.3.233.6.363.886a.45.45,0,0,0,.409.264.469.469,0,0,0,.185-.04A.447.447,0,0,0,5298.513,4636.747Z",
    transform: "translate(-5297.143 -4635.463)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2936
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2560",
    transform: "translate(0 12.575)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2944
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2559",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2945
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2112",
    d: "M5279.609,4533.781a.612.612,0,0,1-.611-.606c0-.039,0-.077,0-.116,0-.282.01-.569.027-.85a.608.608,0,0,1,.607-.574h.038a.612.612,0,0,1,.573.646c-.015.258-.023.52-.023.778,0,.035,0,.07,0,.107a.612.612,0,0,1-.606.615h0Z",
    transform: "translate(-5278.998 -4531.634)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2946
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2113",
    d: "M5282.5,4534.634a.449.449,0,0,0-.475.421c-.016.277-.025.561-.025.84v.117a.448.448,0,0,0,.449.443h0a.45.45,0,0,0,.446-.451v-.108c0-.262.006-.526.022-.787A.447.447,0,0,0,5282.5,4534.634Z",
    transform: "translate(-5281.836 -4534.47)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2952
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2562",
    transform: "translate(5.893 24.485)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2960
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2561",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2961
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2114",
    d: "M5389.413,4753.693a.618.618,0,0,1-.306-.083c-.28-.161-.556-.335-.82-.515a.61.61,0,1,1,.685-1.011c.243.165.5.323.748.47a.612.612,0,0,1,.223.834A.615.615,0,0,1,5389.413,4753.693Z",
    transform: "translate(-5388.019 -4751.979)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2962
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2115",
    d: "M5392.479,4755.533c-.257-.149-.512-.309-.759-.476a.449.449,0,0,0-.5.743c.264.178.537.348.811.509a.454.454,0,0,0,.225.061.449.449,0,0,0,.226-.836Z",
    transform: "translate(-5390.858 -4754.817)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2968
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2564",
    transform: "translate(2.054 20.521)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2976
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2563",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2977
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2116",
    d: "M5318.141,4680.616a.613.613,0,0,1-.493-.25c-.19-.26-.375-.529-.544-.8a.61.61,0,1,1,1.032-.65c.158.248.324.494.5.731a.611.611,0,0,1-.493.971Z",
    transform: "translate(-5317.009 -4678.629)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2978
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2117",
    d: "M5321.343,4682.579c-.175-.239-.344-.489-.5-.74a.448.448,0,1,0-.758.479c.169.27.35.535.537.792a.449.449,0,0,0,.724-.53Z",
    transform: "translate(-5319.85 -4681.467)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2984
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2566",
    transform: "translate(3.769 22.7)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2992
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2565",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2993
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2118",
    d: "M5350,4720.845a.609.609,0,0,1-.408-.156c-.238-.216-.473-.442-.7-.673a.61.61,0,0,1,.877-.849c.205.211.419.417.637.614a.61.61,0,0,1-.408,1.064Z",
    transform: "translate(-5348.718 -4718.981)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2994
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2119",
    d: "M5353.132,4722.74c-.221-.2-.437-.408-.644-.623a.448.448,0,1,0-.644.625c.221.228.453.452.688.664a.443.443,0,0,0,.3.116.449.449,0,0,0,.3-.782Z",
    transform: "translate(-5351.555 -4721.819)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3000
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2568",
    transform: "translate(1.091 7.652)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3008
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2567",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3009
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2120",
    d: "M5299.792,4442.2a.61.61,0,0,1-.566-.385.609.609,0,0,1,.005-.466c.067-.153.136-.308.208-.457a.616.616,0,0,1,.552-.348.607.607,0,0,1,.261.058.614.614,0,0,1,.29.814c-.066.136-.128.276-.19.415A.608.608,0,0,1,5299.792,4442.2Z",
    transform: "translate(-5299.182 -4440.542)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3010
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2121",
    d: "M5303.023,4443.585a.449.449,0,0,0-.6.212c-.07.148-.139.3-.2.45a.449.449,0,0,0,.824.356c.061-.141.125-.282.191-.421A.45.45,0,0,0,5303.023,4443.585Z",
    transform: "translate(-5302.022 -4443.379)",
    fill: "#2170ff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3016
    },
    __self: undefined
  }))))));
};
const ArrowUp = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.996 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3036
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2462",
    d: "M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z",
    transform: "translate(-6.4 -6.4)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3042
    },
    __self: undefined
  }));
};
const ArrowDown = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.996 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3058
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2462",
    d: "M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z",
    transform: "translate(18.396 18.4) rotate(180)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3064
    },
    __self: undefined
  }));
};
const UploadIcon = ({
  color = 'currentColor',
  width = '41px',
  height = '30px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 40.909 30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3080
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(0 -73.091)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3086
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2125",
    d: "M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z",
    transform: "translate(0)",
    fill: "#e6e6e6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3087
    },
    __self: undefined
  })));
};
const SiteSettings = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3104
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(-0.001)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3110
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2845",
    transform: "translate(0.001)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3111
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2844",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3112
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2442",
    d: "M20.211,11.444l-1.1-.95v-.456l1.1-.95a.935.935,0,0,0,.3-.9,10.074,10.074,0,0,0-.727-2.166.933.933,0,0,0-.762-.537l-1.438-.131q-.146-.211-.3-.41l.31-1.355a.935.935,0,0,0-.287-.9,10.539,10.539,0,0,0-1.877-1.344.934.934,0,0,0-.924.007l-1.237.718c-.167-.057-.338-.111-.516-.16L12.183.567A.934.934,0,0,0,11.324,0H9.212a.933.933,0,0,0-.859.567L7.782,1.909c-.178.049-.349.1-.516.16L6.029,1.351A.938.938,0,0,0,5.1,1.343,10.575,10.575,0,0,0,3.228,2.687a.933.933,0,0,0-.287.9l.31,1.354c-.1.133-.206.271-.3.411L1.51,5.488a.933.933,0,0,0-.762.537A10.066,10.066,0,0,0,.021,8.191a.934.934,0,0,0,.3.9l1.1.95v.456l-1.1.95a.935.935,0,0,0-.3.9,10.074,10.074,0,0,0,.727,2.166.933.933,0,0,0,.762.537l1.438.131q.146.211.3.41l-.31,1.355a.933.933,0,0,0,.287.9A10.455,10.455,0,0,0,5.1,19.189a.931.931,0,0,0,.923-.007l1.238-.717c.167.057.338.111.516.16l.571,1.342a.934.934,0,0,0,.859.567h2.113a.933.933,0,0,0,.859-.567l.571-1.342c.178-.049.349-.1.516-.16l1.237.718a.936.936,0,0,0,1.012-.048l1.71-1.224a.934.934,0,0,0,.366-.968l-.31-1.354c.1-.133.206-.271.3-.411l1.438-.131a.933.933,0,0,0,.762-.537,10.072,10.072,0,0,0,.727-2.166A.935.935,0,0,0,20.211,11.444Zm-2.646.185.994.855q-.107.376-.256.753l-1.333.121a.935.935,0,0,0-.709.439,6.84,6.84,0,0,1-.688.931.933.933,0,0,0-.21.827l.274,1.2-.714.511-1.1-.638A.939.939,0,0,0,13,16.572a6.962,6.962,0,0,1-1.127.352.933.933,0,0,0-.651.544l-.511,1.2h-.88l-.511-1.2a.929.929,0,0,0-.651-.544,6.989,6.989,0,0,1-1.127-.352.932.932,0,0,0-.826.055l-1.146.664q-.349-.224-.68-.486l.286-1.25a.934.934,0,0,0-.209-.826,6.863,6.863,0,0,1-.689-.931.935.935,0,0,0-.709-.439l-1.333-.121q-.148-.377-.256-.753l.994-.855a.935.935,0,0,0,.324-.707V9.611A.935.935,0,0,0,2.971,8.9l-.994-.856q.107-.375.256-.752l1.332-.121a.935.935,0,0,0,.709-.439A6.839,6.839,0,0,1,4.963,5.8a.933.933,0,0,0,.21-.827l-.286-1.25q.33-.261.681-.487l1.145.664a.942.942,0,0,0,.826.055,6.962,6.962,0,0,1,1.127-.352.933.933,0,0,0,.651-.544l.511-1.2h.88l.511,1.2a.929.929,0,0,0,.651.544A6.977,6.977,0,0,1,13,3.961a.936.936,0,0,0,.826-.055l1.145-.664q.35.226.681.487l-.286,1.25a.934.934,0,0,0,.209.826,6.864,6.864,0,0,1,.689.931.935.935,0,0,0,.709.439L18.3,7.3q.148.377.256.753l-.994.855a.935.935,0,0,0-.324.707v1.311A.935.935,0,0,0,17.565,11.629Z",
    transform: "translate(-0.001)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3113
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2847",
    transform: "translate(5.601 5.6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3121
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2846",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3122
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2443",
    d: "M52.669,48a4.667,4.667,0,1,0,4.667,4.667A4.667,4.667,0,0,0,52.669,48Zm0,7.467a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,52.669,55.467Z",
    transform: "translate(-48.002 -48)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3123
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2849",
    transform: "translate(1.868 46.667)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3131
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3132
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2444",
    d: "M24.4,400H16.935a.933.933,0,0,0-.933.933h0V408.4a.933.933,0,0,0,.933.933H24.4a.933.933,0,0,0,.933-.933h0v-7.467A.933.933,0,0,0,24.4,400Zm-.934,7.467h-5.6v-5.6h5.6Z",
    transform: "translate(-16.002 -400)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3133
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2851",
    transform: "translate(15.868 43.867)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3141
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3142
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2445",
    d: "M144.4,376h-7.467a.933.933,0,0,0-.933.933h0V387.2a.933.933,0,0,0,.933.933H144.4a.933.933,0,0,0,.933-.933h0V376.933A.933.933,0,0,0,144.4,376Zm-.934,10.267h-5.6v-8.4h5.6Z",
    transform: "translate(-136.002 -376)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3143
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2853",
    transform: "translate(29.868 40.133)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3151
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2852",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3152
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2446",
    d: "M264.4,344h-7.467a.933.933,0,0,0-.933.933h0v14a.933.933,0,0,0,.933.933H264.4a.933.933,0,0,0,.933-.933h0v-14A.933.933,0,0,0,264.4,344Zm-.934,14h-5.6V345.867h5.6Z",
    transform: "translate(-256.002 -344)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3153
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2855",
    transform: "translate(43.868 31.733)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3161
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2854",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3162
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2447",
    d: "M384.4,272h-7.467a.933.933,0,0,0-.933.933h0v22.4a.933.933,0,0,0,.933.933H384.4a.933.933,0,0,0,.933-.933h0v-22.4A.933.933,0,0,0,384.4,272Zm-.934,22.4h-5.6V273.867h5.6Z",
    transform: "translate(-376.002 -272)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3163
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2857",
    transform: "translate(1.356 18.702)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3171
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3172
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2448",
    d: "M42.263,162.177l-.017-.005-6.533-1.867-.513,1.8,4.574,1.307L11.611,181.889l1.024,1.56,27.7-18.179L38.8,170.262l1.784.549,2.3-7.467A.934.934,0,0,0,42.263,162.177Z",
    transform: "translate(-11.611 -160.305)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3173
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2859",
    transform: "translate(36.401 3.733)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3181
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2858",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3182
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2449",
    d: "M326.654,37.255a.933.933,0,0,0-.511-.255l-4.022-.615-1.807-3.85a.933.933,0,0,0-1.69,0l-1.807,3.85L312.794,37a.933.933,0,0,0-.527,1.574l2.938,3.011-.695,4.263a.933.933,0,0,0,1.373.967l3.586-1.982,3.586,1.982a.933.933,0,0,0,1.373-.967l-.695-4.263,2.938-3.011A.933.933,0,0,0,326.654,37.255Zm-4.587,3.364a.932.932,0,0,0-.253.8l.462,2.831-2.356-1.3a.933.933,0,0,0-.9,0l-2.356,1.3.462-2.831a.932.932,0,0,0-.253-.8l-2-2.048,2.719-.416a.931.931,0,0,0,.7-.526l1.174-2.5,1.174,2.5a.932.932,0,0,0,.7.526l2.719.416Z",
    transform: "translate(-312.002 -31.998)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3183
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2861",
    transform: "translate(41.774 22.245)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3191
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3192
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2450",
    d: "M361.942,190.672a10.25,10.25,0,0,1-1.778.155h-.014a10.286,10.286,0,0,1-1.773-.153l-.321,1.839a18.6,18.6,0,0,0,2.109.18,12.1,12.1,0,0,0,2.1-.184Z",
    transform: "translate(-358.057 -190.672)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3193
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2863",
    transform: "translate(45.621 0.176)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3201
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2862",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3202
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2451",
    d: "M391.342,1.508l-.316,1.839a10.177,10.177,0,0,1,3.351,1.208l.929-1.619A12.016,12.016,0,0,0,391.342,1.508Z",
    transform: "translate(-391.026 -1.508)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3203
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2865",
    transform: "translate(37.772 0.187)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3211
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3212
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2452",
    d: "M327.708,1.6a12.054,12.054,0,0,0-3.955,1.453l.94,1.613a10.191,10.191,0,0,1,3.344-1.229Z",
    transform: "translate(-323.753 -1.602)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3213
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2867",
    transform: "translate(49.006 18.729)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3221
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2866",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3222
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2453",
    d: "M422.772,160.531a10.3,10.3,0,0,1-2.73,2.294l.936,1.615a12.15,12.15,0,0,0,3.223-2.708Z",
    transform: "translate(-420.042 -160.531)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3223
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2869",
    transform: "translate(53.519 12.099)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3231
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3232
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2454",
    d: "M460.795,103.7l-1.454.035a10.241,10.241,0,0,1-.616,3.512l1.755.638a12.138,12.138,0,0,0,.727-4.177Z",
    transform: "translate(-458.725 -103.703)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3233
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2871",
    transform: "translate(51.711 4.302)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3241
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2870",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3242
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2455",
    d: "M444.65,36.875l-1.425,1.2a10.223,10.223,0,0,1,1.794,3.078l1.752-.645A12.071,12.071,0,0,0,444.65,36.875Z",
    transform: "translate(-443.225 -36.875)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3243
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2873",
    transform: "translate(32.455 4.355)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3251
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2872",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3252
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2456",
    d: "M280.274,37.328a12.093,12.093,0,0,0-2.1,3.652l1.755.634a10.223,10.223,0,0,1,1.777-3.089Z",
    transform: "translate(-278.174 -37.328)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3253
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2875",
    transform: "translate(34.585 18.743)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3261
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2874",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3262
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2457",
    d: "M297.859,160.656l-1.427,1.2a12.154,12.154,0,0,0,3.228,2.7l.933-1.617A10.286,10.286,0,0,1,297.859,160.656Z",
    transform: "translate(-296.432 -160.656)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3263
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2877",
    transform: "translate(31.735 12.154)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3271
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2876",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3272
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2458",
    d: "M273.873,104.18l-1.867,0a12.084,12.084,0,0,0,.736,4.147l1.753-.642A10.227,10.227,0,0,1,273.873,104.18Z",
    transform: "translate(-272.006 -104.18)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3273
    },
    __self: undefined
  })))));
};
const Members = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3292
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 2434",
    d: "M56,21.656a4.49,4.49,0,0,0-3.218-4.326l-5.814-1.743V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,0,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371L3.218,17.331A4.488,4.488,0,0,0,0,21.656v8.151H4.516V40.646H15.355v8.129H9.032V56H23.484V48.775H17.161V40.646h2.71V41.3l1.169.39a7.079,7.079,0,0,0,.665,1.6l-.552,1.1,2.2,2.2,1.1-.552a7.117,7.117,0,0,0,1.6.664l.39,1.169h3.109l.389-1.17a7.126,7.126,0,0,0,1.6-.664l1.1.552,2.2-2.2-.552-1.1a7.187,7.187,0,0,0,.665-1.6l1.17-.389v-.651h2.71v8.129H32.516V56H46.968V48.775H40.645V40.646H51.484V29.807H56ZM21.677,54.194H10.839V50.581H21.677Zm23.484,0H34.323V50.581H45.161ZM43.355,1.807A4.525,4.525,0,0,1,47.78,5.42H45.374a7.688,7.688,0,0,1-3.422-.808l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639H38.93a4.525,4.525,0,0,1,4.425-3.613ZM38.839,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2L41.1,12.94a4.533,4.533,0,0,1-2.259-3.908ZM28,1.807A4.525,4.525,0,0,1,32.425,5.42H30.019A7.688,7.688,0,0,1,26.6,4.611l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639h-.438A4.525,4.525,0,0,1,28,1.807ZM23.484,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574L28,16.979l-1.806-1.2V13.2l-.451-.261a4.533,4.533,0,0,1-2.259-3.908Zm1.659,8.213L28,19.151l2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6V28H17.161V21.656a2.693,2.693,0,0,1,1.931-2.6ZM12.645,1.807A4.525,4.525,0,0,1,17.07,5.42h-.438a2.2,2.2,0,0,1-1.542-.639l-.461-.46-.583.291a7.679,7.679,0,0,1-3.421.808H8.22a4.525,4.525,0,0,1,4.425-3.613ZM8.129,9.033V7.226h2.5a9.5,9.5,0,0,0,3.682-.747,3.957,3.957,0,0,0,2.324.747h.529V9.033A4.533,4.533,0,0,1,14.9,12.94l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2l-.451-.261A4.533,4.533,0,0,1,8.129,9.033ZM1.806,21.656a2.693,2.693,0,0,1,1.931-2.6l6.05-1.816,2.857,1.906L15.5,17.246l1.975.593a4.474,4.474,0,0,0-2.123,3.818V28H1.806ZM34.323,39.994l-.907.3-.1.514a5.365,5.365,0,0,1-.8,1.932l-.291.436.428.856-.357.358-.855-.429L31,44.253a5.359,5.359,0,0,1-1.932.8l-.514.1-.3.909h-.5l-.3-.908-.514-.1a5.349,5.349,0,0,1-1.932-.8l-.437-.291-.855.429-.357-.358.428-.856-.291-.436a5.343,5.343,0,0,1-.8-1.932l-.1-.514-.907-.3v-.5l.907-.3.1-.514a5.352,5.352,0,0,1,.8-1.932l.291-.436-.428-.857.357-.357.855.429L25,35.231a5.359,5.359,0,0,1,1.932-.8l.514-.1.3-.908h.5l.3.908.514.1a5.349,5.349,0,0,1,1.932.8l.437.291.855-.429.357.357-.428.857.291.436a5.33,5.33,0,0,1,.8,1.932l.1.514.907.3Zm15.355-1.155H36.129v-.651L34.96,37.8a7.063,7.063,0,0,0-.665-1.6l.552-1.1-2.2-2.2-1.1.552a7.117,7.117,0,0,0-1.6-.664l-.39-1.169H26.445l-.389,1.17a7.125,7.125,0,0,0-1.6.664l-1.1-.552-2.2,2.2.552,1.1a7.169,7.169,0,0,0-.665,1.6l-1.17.389v.651H6.323V29.807H49.677ZM54.194,28H40.645V21.656a4.474,4.474,0,0,0-2.123-3.818l1.975-.593,2.857,1.905,2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6Zm0,0",
    transform: "translate(0 0)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3298
    },
    __self: undefined
  }));
};
const MenuIcon = ({
  color = 'currentColor',
  width = '26px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 25.5 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3314
    },
    __self: undefined
  }, __jsx("g", {
    transform: "translate(-2 -6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3320
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 216",
    d: "M26.589,6H2.911A.842.842,0,0,0,2,6.75a.842.842,0,0,0,.911.75H26.589a.842.842,0,0,0,.911-.75A.842.842,0,0,0,26.589,6Z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3321
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 217",
    d: "M2.75,16.5H12.5a.75.75,0,0,0,0-1.5H2.75a.75.75,0,0,0,0,1.5Z",
    transform: "translate(0 -0.75)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3326
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 218",
    d: "M23.562,24H2.938a.769.769,0,1,0,0,1.5H23.562a.769.769,0,1,0,0-1.5Z",
    transform: "translate(0 -1.5)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3332
    },
    __self: undefined
  })));
};
const ArrowLeftRound = ({
  color = 'currentColor',
  width = '18px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 14.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3349
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
    d: "M119.925,160.3a.98.98,0,0,1,.007,1.38l-4.554,4.567h13.754a.975.975,0,0,1,0,1.95H115.379l4.562,4.567a.987.987,0,0,1-.008,1.38.972.972,0,0,1-1.373-.008l-6.182-6.225a1.1,1.1,0,0,1-.2-.307.93.93,0,0,1-.075-.375.977.977,0,0,1,.278-.682l6.182-6.225A.956.956,0,0,1,119.925,160.3Z",
    transform: "translate(-112.1 -160.024)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3355
    },
    __self: undefined
  }));
};
const CoinIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3367
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2993",
    transform: "translate(-608 -807)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3373
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3646",
    d: "M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z",
    transform: "translate(608 807)",
    fill: "#ffe8b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3374
    },
    __self: undefined
  }), __jsx("g", {
    transform: "translate(620 819)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3380
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2982",
    transform: "translate(0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3381
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2981",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3382
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3639",
    d: "M20.485,3.515A12,12,0,0,0,3.515,20.485,12,12,0,0,0,20.485,3.515ZM12,22.594A10.594,10.594,0,1,1,22.594,12,10.606,10.606,0,0,1,12,22.594Z",
    transform: "translate(0 0)",
    fill: "#ffb300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3383
    },
    __self: undefined
  }))), __jsx("g", {
    "data-name": "Group 2984",
    transform: "translate(8.284 4.519)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3391
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3392
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3640",
    d: "M181.2,103.179H179.7a1.556,1.556,0,1,1,0-3.112h3.013a.7.7,0,1,0,0-1.406h-1.556V97.1a.7.7,0,0,0-1.406,0V98.66h-.05a2.962,2.962,0,1,0,0,5.925H181.2a1.556,1.556,0,0,1,0,3.113H178.19a.7.7,0,0,0,0,1.406h1.556v1.556a.7.7,0,0,0,1.406,0V109.1h.05a2.963,2.963,0,0,0,0-5.925Z",
    transform: "translate(-176.734 -96.401)",
    fill: "#ffb300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3393
    },
    __self: undefined
  }))))));
};
const CartIconBig = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3409
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2994",
    transform: "translate(-601 -757)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3415
    },
    __self: undefined
  }, __jsx("rect", {
    "data-name": "Rectangle 541",
    width: "48",
    height: "48",
    rx: "20",
    transform: "translate(601 757)",
    fill: "#facaca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3416
    },
    __self: undefined
  }), __jsx("g", {
    transform: "translate(610.988 768.246)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3424
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2985",
    transform: "translate(3.013 0.754)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3425
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3641",
    d: "M6.071,15.424H23.177a.726.726,0,0,0,.724-.674l.778-10.885a.726.726,0,0,0-.724-.778h-8.6V1.48a.726.726,0,1,0-1.452,0V3.087H5.832c-.051-.618-2.058-.416-.7-.077-.113-.517-.571-.277-.71,0L5.29,14.073a3.058,3.058,0,0,0,.78,6.016h.121a3.058,3.058,0,1,0,5.2,0h6.849a3.059,3.059,0,1,0,5.175-.042.726.726,0,0,0-.241-1.41H6.071a1.607,1.607,0,0,1,0-3.213ZM13.9,4.539V9.058L12.8,7.964a.726.726,0,0,0-1.027,1.027l2.333,2.333a.726.726,0,0,0,1.027,0L17.47,8.991a.726.726,0,0,0-1.027-1.027L15.35,9.058V4.539h7.825L22.5,13.972H6.739L5.953,4.539Zm6.946,15.55A1.607,1.607,0,1,1,19.237,21.7,1.608,1.608,0,0,1,20.844,20.089Zm-12.051,0A1.607,1.607,0,1,1,7.186,21.7,1.608,1.608,0,0,1,8.792,20.089Z",
    transform: "translate(-3.013 -0.754)",
    fill: "#ff6e6e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3426
    },
    __self: undefined
  })))));
};
const UserIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3441
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2995",
    transform: "translate(-612 -752)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3447
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 3647",
    d: "M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z",
    transform: "translate(612 752)",
    fill: "#d1f9f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3448
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 3642",
    d: "M-707.226-726.091a.506.506,0,0,1-.23.677.506.506,0,0,1-.677-.23,11.921,11.921,0,0,1-.919-2.574,12.016,12.016,0,0,1-.311-2.719,11.963,11.963,0,0,1,3.515-8.485,11.962,11.962,0,0,1,8.485-3.515,11.962,11.962,0,0,1,8.485,3.515,11.963,11.963,0,0,1,3.515,8.485,12.016,12.016,0,0,1-.311,2.719,11.929,11.929,0,0,1-.919,2.574.506.506,0,0,1-.677.23.506.506,0,0,1-.23-.677,10.888,10.888,0,0,0,.84-2.352,11.01,11.01,0,0,0,.283-2.493A10.952,10.952,0,0,0-689.6-738.7a10.952,10.952,0,0,0-7.768-3.218,10.952,10.952,0,0,0-7.768,3.218,10.952,10.952,0,0,0-3.218,7.768,11.017,11.017,0,0,0,.283,2.493,10.9,10.9,0,0,0,.84,2.352Zm19.154,2.746a12.05,12.05,0,0,1-4.152,3.254,11.947,11.947,0,0,1-5.139,1.155,11.947,11.947,0,0,1-5.139-1.155,12.051,12.051,0,0,1-4.16-3.264.5.5,0,0,1-.109-.386h0a3.522,3.522,0,0,1,1.1-2.245,6.632,6.632,0,0,1,2.253-1.223c.4-.146.832-.281,1.256-.412a11.4,11.4,0,0,0,1.621-.582l.064-.035a.85.85,0,0,0,.408-.456.62.62,0,0,0-.045-.475l-.01-.021-.009-.016-.014-.026c-.067-.114-.163-.254-.267-.406a6.317,6.317,0,0,1-.928-1.8,1.354,1.354,0,0,1-.656-.588,3.944,3.944,0,0,1-.424-1.009,3.77,3.77,0,0,1-.116-.57c0-.005,0-.01,0-.016a1.387,1.387,0,0,1,0-.268.947.947,0,0,1,.3-.627.989.989,0,0,1,.43-.23l-.015-.432a4.265,4.265,0,0,1,2.5-4.277,4.8,4.8,0,0,1,1.967-.414,4.8,4.8,0,0,1,1.967.415,4.264,4.264,0,0,1,2.5,4.277v0h0l-.015.43a.987.987,0,0,1,.431.231.947.947,0,0,1,.295.625,1.409,1.409,0,0,1,0,.285l0,.016a3.824,3.824,0,0,1-.114.558,3.921,3.921,0,0,1-.423,1.007,1.353,1.353,0,0,1-.656.587,6.321,6.321,0,0,1-.929,1.8c-.11.162-.212.312-.279.428l-.018.035a.626.626,0,0,0-.045.479.85.85,0,0,0,.409.457l.064.033a11.415,11.415,0,0,0,1.625.584c.423.131.857.265,1.252.41a6.631,6.631,0,0,1,2.253,1.223,3.521,3.521,0,0,1,1.1,2.245.5.5,0,0,1-.117.4Zm-4.583,2.339a11.025,11.025,0,0,0,3.664-2.814,2.462,2.462,0,0,0-.747-1.422,5.756,5.756,0,0,0-1.916-1.017c-.4-.146-.8-.271-1.2-.394a12.03,12.03,0,0,1-1.783-.647c-.028-.014-.065-.035-.111-.061a1.843,1.843,0,0,1-.868-1.023,1.62,1.62,0,0,1,.1-1.243c.009-.018.024-.045.046-.082.1-.176.206-.33.319-.495a5.142,5.142,0,0,0,.874-1.816h0l.005-.022a.505.505,0,0,1,.6-.357c.012-.008.026-.076.082-.164a2.907,2.907,0,0,0,.3-.737,2.755,2.755,0,0,0,.083-.4v-.013a.49.49,0,0,0,0-.062h-.021a.853.853,0,0,0-.164,0,.5.5,0,0,1-.075,0,.505.505,0,0,1-.487-.523l.032-.917h0a3.3,3.3,0,0,0-1.905-3.321,3.788,3.788,0,0,0-1.551-.327,3.79,3.79,0,0,0-1.551.327,3.3,3.3,0,0,0-1.907,3.323l.031.91a.532.532,0,0,1,0,.071.505.505,0,0,1-.55.456.864.864,0,0,0-.173,0h-.022a.5.5,0,0,0,0,.053v.009a2.721,2.721,0,0,0,.084.408,2.922,2.922,0,0,0,.3.74c.056.088.068.157.08.164h0a.506.506,0,0,1,.606.38,5.138,5.138,0,0,0,.873,1.813c.107.158.207.3.3.469l.017.027.03.053.017.031a1.619,1.619,0,0,1,.1,1.243,1.842,1.842,0,0,1-.863,1.022c-.036.021-.075.042-.116.062a11.985,11.985,0,0,1-1.779.646c-.4.123-.808.25-1.2.4a5.758,5.758,0,0,0-1.917,1.017,2.462,2.462,0,0,0-.747,1.422,11.027,11.027,0,0,0,3.664,2.814,10.94,10.94,0,0,0,4.708,1.056,10.94,10.94,0,0,0,4.708-1.056Z",
    transform: "translate(1333.363 1506.936)",
    fill: "#27c7b7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3454
    },
    __self: undefined
  })));
};
const DeliveryIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3467
    },
    __self: undefined
  }, __jsx("g", {
    "data-name": "Group 2996",
    transform: "translate(-1787 -804)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3473
    },
    __self: undefined
  }, __jsx("rect", {
    "data-name": "Rectangle 541",
    width: "48",
    height: "48",
    rx: "20",
    transform: "translate(1787 804)",
    fill: "#f8dac2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3474
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "delivery-truck (1)",
    d: "M19.621,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm.567-10.747a.475.475,0,0,0-.327-.127H17.354a.49.49,0,0,0-.489.489v4.007a.49.49,0,0,0,.489.489h3.978a.49.49,0,0,0,.489-.489v-2.683a.489.489,0,0,0-.161-.362Zm.655,3.88h-3v-3.035H19.67l1.173,1.056ZM7.687,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm-3.26-2.82H3.445v-1.3a.489.489,0,0,0-.977,0v1.789a.49.49,0,0,0,.489.489H4.428a.489.489,0,0,0,0-.977Zm2.478-2.663a.49.49,0,0,0-.489-.489H.489a.489.489,0,0,0,0,.977H6.417A.487.487,0,0,0,6.905,628.411Zm-5.425-1.764,5.928.034A.493.493,0,0,0,7.9,626.2a.484.484,0,0,0-.484-.494l-5.928-.034h0a.489.489,0,0,0,0,.977Zm1-2.219H8.406a.489.489,0,1,0,0-.977H2.478a.489.489,0,1,0,0,.977Zm21.341-.66h0l-3.5-2.9a.481.481,0,0,0-.313-.112H15.892V619a.49.49,0,0,0-.489-.489H2.957a.49.49,0,0,0-.489.489v3.577a.489.489,0,0,0,.977,0v-3.089H14.92v11.587H10.913a.489.489,0,0,0,0,.977H16.88a.489.489,0,0,0,0-.977H15.9v-9.339h3.939l3.186,2.639-.034,6.69H22.48a.489.489,0,0,0,0,.977h.992a.486.486,0,0,0,.489-.484L24,624.15A.516.516,0,0,0,23.819,623.768Z",
    transform: "translate(1799 201.49)",
    fill: "#ff811d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3482
    },
    __self: undefined
  })));
};
const IosArrowUp = ({
  color = 'currentColor',
  width = '7px',
  height = '10px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 7 10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3499
    },
    __self: undefined
  }, __jsx("path", {
    d: "M166.5,115.723a.454.454,0,0,1-.639,0l-2.115-2.108v8.034a.452.452,0,0,1-.9,0v-8.034l-2.115,2.112a.457.457,0,0,1-.639,0,.45.45,0,0,1,0-.636l2.883-2.862a.507.507,0,0,1,.142-.094.431.431,0,0,1,.174-.035.453.453,0,0,1,.316.129l2.883,2.862A.442.442,0,0,1,166.5,115.723Z",
    transform: "translate(-159.962 -112.1)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3505
    },
    __self: undefined
  }));
};
const IosArrowDown = ({
  color = 'currentColor',
  width = '7px',
  height = '10px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 7 10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3520
    },
    __self: undefined
  }, __jsx("path", {
    d: "M166.5,118.477a.454.454,0,0,0-.639,0l-2.115,2.108v-8.034a.452.452,0,0,0-.9,0v8.034l-2.115-2.112a.457.457,0,0,0-.639,0,.45.45,0,0,0,0,.636l2.883,2.862a.507.507,0,0,0,.142.094.431.431,0,0,0,.174.035.453.453,0,0,0,.316-.129l2.883-2.862A.442.442,0,0,0,166.5,118.477Z",
    transform: "translate(-159.962 -112.1)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3526
    },
    __self: undefined
  }));
};
const MenuDown = ({
  color = 'currentColor',
  width = '12px',
  height = '6px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3541
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_2897",
    "data-name": "Path 2897",
    d: "M0,63.75l6,6,6-6Z",
    transform: "translate(0 -63.75)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3547
    },
    __self: undefined
  }));
};
const HelpIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3564
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_111",
    "data-name": "Path 111",
    d: "M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0",
    transform: "translate(-262.442 -404.312)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3570
    },
    __self: undefined
  }));
};
const SAFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-sa",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3583
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3590
    },
    __self: undefined
  }, __jsx("clipPath", {
    id: "sa-a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3591
    },
    __self: undefined
  }, __jsx("path", {
    fillOpacity: ".7",
    d: "M-85.3 0h682.6v512H-85.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3592
    },
    __self: undefined
  }))), __jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#sa-a)",
    transform: "translate(80) scale(.9375)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3595
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#199d00",
    d: "M-128 0h768v512h-768z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3600
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3601
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3605
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3609
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3613
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3617
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3621
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3625
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#1ba400",
    d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3629
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3633
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3637
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3641
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3645
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#1b9d00",
    d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3649
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3653
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#259f00",
    d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3657
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#209000",
    d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3661
    },
    __self: undefined
  })));
};
const DEFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3672
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#ffce00",
    d: "M0 320h640v160H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3678
    },
    __self: undefined
  }), __jsx("path", {
    d: "M0 0h640v160H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3679
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#d00",
    d: "M0 160h640v160H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3680
    },
    __self: undefined
  }));
};
const ESFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-es",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3687
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#AA151B",
    d: "M0 0h640v480H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3694
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#F1BF00",
    d: "M0 120h640v240H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3695
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3696
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3700
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3707
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3711
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3717
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3721
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3727
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3731
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3735
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3741
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3745
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3751
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3757
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3761
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3767
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3773
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3777
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3783
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3787
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3793
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3797
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3803
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3807
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3813
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3817
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3824
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3828
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3834
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3838
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3844
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3848
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3854
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3855
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3861
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3865
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3871
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3875
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3881
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3882
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3888
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3892
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3899
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3903
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3909
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3913
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3919
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3923
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3929
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3933
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3939
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3940
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3946
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3950
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3956
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3960
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3966
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3967
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3973
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3974
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3980
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3981
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3987
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3988
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3994
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3998
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4004
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4005
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4011
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4012
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4018
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4019
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4025
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4026
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4032
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4036
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4042
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4046
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4052
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4056
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4062
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4066
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4072
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4076
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4082
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4086
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124 223h21.4v-5.5H124v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4092
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M124 223h21.4v-5.5H124v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4093
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4099
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4103
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4110
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4114
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4120
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4124
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4130
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4134
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4140
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4144
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4150
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4154
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4160
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4164
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4170
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4174
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4180
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4184
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4191
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4195
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M123.7 316.7h22V311h-22v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4201
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M123.7 316.7h22V311h-22v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4202
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4208
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4212
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M126.8 305.6h15.6V229h-15.6v76.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4218
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4219
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4225
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4229
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4236
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4240
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4246
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4250
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4256
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4260
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4267
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4271
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4275
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4281
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4285
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4291
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4295
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4301
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4305
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4311
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4315
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4321
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4325
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4331
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4338
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4344
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4350
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4354
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4360
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4364
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4370
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4377
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4383
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4389
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4393
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4399
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4403
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4409
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4413
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4419
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4423
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4429
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4433
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4439
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4440
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4446
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4450
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4456
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4460
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4466
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4467
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4473
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4477
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4484
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4488
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4494
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4498
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4504
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4508
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4514
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4518
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4524
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4525
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4531
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4532
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4538
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4539
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4545
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4546
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4552
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4556
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4562
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4563
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4569
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4570
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4576
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4580
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4586
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4587
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4593
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4594
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4600
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4601
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4607
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4608
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4614
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4618
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4624
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4628
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4634
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4638
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4642
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4648
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4652
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4658
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4662
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4668
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4672
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4678
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4682
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4688
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4692
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4698
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4699
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4705
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4709
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4716
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4720
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4726
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4730
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4736
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4740
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4746
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4750
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4756
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4760
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4766
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4770
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4776
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4780
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4786
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4790
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4797
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4801
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M266.9 316.7h22V311h-22v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4807
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M266.9 316.7h22V311h-22v5.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4808
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4814
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4818
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M270.1 305.6h15.6V229h-15.6v76.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4824
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4825
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4831
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4835
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4842
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4846
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4852
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4856
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4862
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4866
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4873
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4877
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4883
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4889
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4895
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4899
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4905
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4911
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4917
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M189.7 214.5v-4.2m-1.2 4.1v-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4923
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4929
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".7",
    d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4935
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".9",
    d: "M179.8 212.8v-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4941
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4942
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4948
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4954
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4960
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4967
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4973
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4979
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4985
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4991
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4997
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5003
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5009
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5015
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5021
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5025
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5031
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5035
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5041
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5045
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5051
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5055
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5061
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5065
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5071
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5075
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5081
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5085
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5091
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5095
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5101
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5105
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5111
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5115
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5121
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5125
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5131
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5137
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5143
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5149
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5155
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5161
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5167
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5173
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5179
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5185
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5191
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5197
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5203
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5207
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ccc",
    d: "M206.3 270h48.3v-53.5h-48.3V270z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5213
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 270h48.3v-53.5h-48.3V270z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5214
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5220
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5224
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5230
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c7b500",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5237
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5243
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M158.1 270h48.2v-53.5H158V270z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5249
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M158.1 270h48.2v-53.5H158V270z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5250
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5256
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5262
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5268
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5272
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5278
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5282
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5286
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5292
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5298
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5304
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5308
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5312
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ed72aa",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5318
    },
    __self: undefined
  }), __jsx("path", {
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5324
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5325
    },
    __self: undefined
  }), __jsx("path", {
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5331
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5332
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5338
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5344
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5348
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5354
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5358
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5364
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5368
    },
    __self: undefined
  }), __jsx("path", {
    d: "M228.2 230.5l.3-.5.3.5h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5374
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.2 230.5l.3-.5.3.5h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5375
    },
    __self: undefined
  }), __jsx("path", {
    d: "M229 230.5l.3-.5.4.5h-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5381
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229 230.5l.3-.5.4.5h-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5382
    },
    __self: undefined
  }), __jsx("path", {
    d: "M228.6 227.3l.8.3-.7.4-.1-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5388
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.6 227.3l.8.3-.7.4-.1-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5389
    },
    __self: undefined
  }), __jsx("path", {
    d: "M229.5 227.6l.7.2-.5.4-.2-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5395
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229.5 227.6l.7.2-.5.4-.2-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5396
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5402
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5408
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5412
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5418
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5422
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5428
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5432
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5438
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5442
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5448
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5452
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5458
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5462
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5468
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5472
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5478
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5482
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#db4446",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5488
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5492
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ffd691",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5498
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5504
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5510
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5516
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5522
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5526
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5532
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5536
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5542
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5546
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5552
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5556
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5562
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5566
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5572
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5576
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5582
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5586
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5592
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5596
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5602
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5606
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5612
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5616
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5622
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5626
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5632
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5636
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5642
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5646
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5652
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5656
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5662
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5668
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5672
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5678
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5682
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5688
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5692
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5698
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5702
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5708
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5712
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5718
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5722
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5728
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5732
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5738
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5742
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5748
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5752
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5758
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5762
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5768
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5772
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5778
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5782
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5788
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5792
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5798
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5802
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5808
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5812
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5818
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5822
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5828
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5832
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5838
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5842
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5848
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5852
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5858
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5862
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5868
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5872
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5878
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5884
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5888
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5894
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5898
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5904
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5908
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5914
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5918
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5924
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5928
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5934
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5938
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5944
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5948
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5954
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5960
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5966
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#0039f0",
    d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5972
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5976
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5980
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5986
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5990
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5996
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6000
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M199.2 269.9h4.1v-1h-4.1v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6007
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M199.2 269.9h4.1v-1h-4.1v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6008
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6014
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6018
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M209.4 269.9h4.1v-1h-4.1v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6025
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M209.4 269.9h4.1v-1h-4.1v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6026
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6032
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6036
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M204.3 278.6h4.1v-1h-4.1v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6043
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M204.3 278.6h4.1v-1h-4.1v1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6044
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6050
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6054
    },
    __self: undefined
  }), __jsx("path", {
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6060
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6061
    },
    __self: undefined
  }), __jsx("path", {
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6067
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6068
    },
    __self: undefined
  }), __jsx("path", {
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6074
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6075
    },
    __self: undefined
  }), __jsx("path", {
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6081
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6082
    },
    __self: undefined
  }), __jsx("path", {
    d: "M237.3 225.5v-.2h-.3l.1.2h.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6088
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.3 225.5v-.2h-.3l.1.2h.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6089
    },
    __self: undefined
  }), __jsx("path", {
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6095
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6096
    },
    __self: undefined
  }), __jsx("path", {
    d: "M238.8 227v-.3h-.3v.2h.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6102
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M238.8 227v-.3h-.3v.2h.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6103
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6109
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6110
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6116
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6117
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6123
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6124
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6130
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6134
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6140
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6144
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6150
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6151
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6157
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6158
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6164
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6165
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6171
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6172
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6178
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6179
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6185
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6189
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6195
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6196
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6202
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6203
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6209
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6210
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6216
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6220
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6226
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6230
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6236
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6237
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6243
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6244
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6250
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6256
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M129.2 216.6v-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6262
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6263
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6269
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M272.6 216.6v-.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6275
    },
    __self: undefined
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6276
    },
    __self: undefined
  }));
};
const ILFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6288
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6294
    },
    __self: undefined
  }, __jsx("clipPath", {
    id: "il-a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6295
    },
    __self: undefined
  }, __jsx("path", {
    fillOpacity: ".7",
    d: "M-87.6 0H595v512H-87.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6296
    },
    __self: undefined
  }))), __jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#il-a)",
    transform: "translate(82.1) scale(.94)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6299
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#fff",
    d: "M619.4 512H-112V0h731.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6304
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#00c",
    d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6305
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6309
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#00c",
    d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6310
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6311
    },
    __self: undefined
  })));
};
const CNFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6322
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6328
    },
    __self: undefined
  }, __jsx("path", {
    id: "a",
    fill: "#ffde00",
    d: "M-.6.8L0-1 .6.8-1-.3h2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6329
    },
    __self: undefined
  })), __jsx("path", {
    fill: "#de2910",
    d: "M0 0h640v480H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6331
    },
    __self: undefined
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(71.9991 0 0 72 120 120)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6332
    },
    __self: undefined
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6338
    },
    __self: undefined
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6344
    },
    __self: undefined
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6350
    },
    __self: undefined
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6356
    },
    __self: undefined
  }));
};
const USFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6368
    },
    __self: undefined
  }, __jsx("g", {
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6375
    },
    __self: undefined
  }, __jsx("g", {
    strokeWidth: "1pt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6376
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#bd3d44",
    d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
    transform: "scale(.9375)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6377
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
    transform: "scale(.9375)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6382
    },
    __self: undefined
  })), __jsx("path", {
    fill: "#192f5d",
    d: "M0 0h389.1v275.7H0z",
    transform: "scale(.9375)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6388
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#fff",
    d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
    transform: "scale(.9375)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6389
    },
    __self: undefined
  })));
};
const InkPen = ({
  width = '13px',
  height = '20px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12.768 20.005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6405
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6411
    },
    __self: undefined
  }, __jsx("clipPath", {
    id: "clip-path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6412
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_2913",
    "data-name": "Path 2913",
    d: "M10.761-507.144a1.069,1.069,0,0,0,.831-.6,13.713,13.713,0,0,1,1.545-3.142.7.7,0,0,0-.013-.832.7.7,0,0,0-.791-.25,10.984,10.984,0,0,0-5.81,4.315,12.482,12.482,0,0,0-1.877,4.63A3.873,3.873,0,0,0,5-500.563l.872,1.724a12.331,12.331,0,0,0-.137,1.327H4.3a1,1,0,0,0-1,1,1,1,0,0,0,.886.993,2.5,2.5,0,0,1-.858.266,1.557,1.557,0,0,0-1.323,1.513s0,.005,0,.008v.006c0,.005,0,.011,0,.016v.935H.891a.391.391,0,0,0-.391.391A.391.391,0,0,0,.891-492H12.1a.391.391,0,0,0,.391-.391.391.391,0,0,0-.391-.391H10.659v-.935c0-.005,0-.011,0-.016v-.006s0-.006,0-.009a1.557,1.557,0,0,0-1.323-1.513,2.5,2.5,0,0,1-.858-.266,1,1,0,0,0,.886-.993,1,1,0,0,0-1-1H6.512A10.775,10.775,0,0,1,6.62-498.6l2-1.412a2.721,2.721,0,0,0,1.011-1.37c.317-.97.813-2.545,1.378-4.539a.913.913,0,0,0-.352-.945,1.03,1.03,0,0,1-.164-.187v0a1.636,1.636,0,0,1,.267-.091ZM2.79-492.777v-.7H9.878v.7Zm6.864-1.483H3.014a.788.788,0,0,1,.439-.223,2.453,2.453,0,0,0,1.6-.755,1.206,1.206,0,0,0,.165-.276H7.452a1.209,1.209,0,0,0,.165.276,2.453,2.453,0,0,0,1.6.755A.788.788,0,0,1,9.653-494.26Zm-1.071-2.254a.218.218,0,0,1-.218.218H4.3a.218.218,0,0,1-.218-.218.218.218,0,0,1,.218-.218H8.365A.218.218,0,0,1,8.582-496.513Zm1.523-9.794a1.212,1.212,0,0,1,.153.17v0c-.563,1.985-1.056,3.551-1.371,4.516a1.935,1.935,0,0,1-.719.974l-1.36.96a22.335,22.335,0,0,1,1.081-3.756.391.391,0,0,0-.218-.508.391.391,0,0,0-.508.218A22.616,22.616,0,0,0,6.1-500.114l-.406-.8a3.09,3.09,0,0,1-.279-1.956,11.7,11.7,0,0,1,1.757-4.337,10.181,10.181,0,0,1,5.2-3.942,14.966,14.966,0,0,0-1.517,3.142,1.258,1.258,0,0,1-.31.114c-.282.08-.667.189-.788.573A.933.933,0,0,0,10.106-506.307Z",
    transform: "translate(-0.5 512)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6413
    },
    __self: undefined
  }))), __jsx("g", {
    id: "Group_3369",
    "data-name": "Group 3369",
    clipPath: "url(#clip-path)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6422
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_2912",
    "data-name": "Path 2912",
    d: "M-4.5-496.6H8.659V-517H-4.5Z",
    transform: "translate(4.305 516.804)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6423
    },
    __self: undefined
  })));
};
const AdobeIcon = ({
  width = '20px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20.309 18.116",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6441
    },
    __self: undefined
  }, __jsx("g", {
    id: "adobe-reader-symbol",
    transform: "translate(0 -2.031)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6447
    },
    __self: undefined
  }, __jsx("path", {
    id: "Path_3",
    "data-name": "Path 3",
    d: "M20.138,15.811c-.723-1.305-3.888-2.137-6.683-2.294q-.379-.406-.772-.854c-2.4-2.747-3.375-6.738-3.738-8.852-.043-.448-.091-.821-.131-1.1-.032-.221-.1-.681-.579-.681a.547.547,0,0,0-.406.183.736.736,0,0,0-.115.646c.034.277.085.649.158,1.073.2,2.147.3,6.234-1.351,9.481q-.258.508-.514.973c-3.092.9-5.587,2.5-5.953,3.833a1.314,1.314,0,0,0,.324,1.3,1.883,1.883,0,0,0,1.4.626c1.463,0,3.13-1.629,4.956-4.84a15.678,15.678,0,0,1,2.4-.442c.3-.031.8-.1,1.1-.141a15.048,15.048,0,0,1,2.744-.148c2.241,2.33,4.074,3.511,5.447,3.511a1.913,1.913,0,0,0,1.718-1.012A1.253,1.253,0,0,0,20.138,15.811ZM1.773,19.067a.822.822,0,0,1-.616-.293.239.239,0,0,1-.063-.267c.188-.685,1.771-1.859,4.084-2.711C3.872,17.858,2.621,19.067,1.773,19.067Zm8.289-5.409c-.287.044-.754.1-1.042.135a15.8,15.8,0,0,0-1.606.246l.068-.134a15.362,15.362,0,0,0,1.5-5.689,15.89,15.89,0,0,0,2.89,5.157c.035.04.071.08.105.121A14.952,14.952,0,0,0,10.062,13.658ZM19.2,16.544a.844.844,0,0,1-.8.465h0c-.858,0-2.178-.812-3.758-2.3,2.445.307,4.236,1.047,4.557,1.628A.177.177,0,0,1,19.2,16.544Z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6448
    },
    __self: undefined
  })));
};
const UserAvatar = ({
  width = '25px',
  height = '30px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    id: "user",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 25.057 30.034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6465
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M94.265,14.467a7,7,0,0,0,5.115-2.119A7,7,0,0,0,101.5,7.233,7,7,0,0,0,99.38,2.119a7.232,7.232,0,0,0-10.229,0,7,7,0,0,0-2.119,5.114,7,7,0,0,0,2.12,5.115A7,7,0,0,0,94.265,14.467Zm0,0",
    transform: "translate(-81.926)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6472
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M25,255.9a17.868,17.868,0,0,0-.243-1.9,14.951,14.951,0,0,0-.467-1.908,9.425,9.425,0,0,0-.784-1.779,6.715,6.715,0,0,0-1.183-1.541,5.215,5.215,0,0,0-1.7-1.068,5.872,5.872,0,0,0-2.169-.393,2.2,2.2,0,0,0-1.176.5c-.352.23-.765.5-1.225.79a7.018,7.018,0,0,1-1.585.7,6.154,6.154,0,0,1-3.877,0,7,7,0,0,1-1.584-.7c-.456-.291-.868-.557-1.226-.79a2.2,2.2,0,0,0-1.175-.5,5.864,5.864,0,0,0-2.169.393,5.211,5.211,0,0,0-1.7,1.068,6.716,6.716,0,0,0-1.182,1.541A9.443,9.443,0,0,0,.77,252.1,14.987,14.987,0,0,0,.3,254.006a17.8,17.8,0,0,0-.243,1.9c-.04.575-.06,1.171-.06,1.774a4.987,4.987,0,0,0,1.481,3.773A5.332,5.332,0,0,0,5.3,262.843H19.759a5.331,5.331,0,0,0,3.816-1.392,4.985,4.985,0,0,0,1.481-3.773C25.057,257.072,25.036,256.475,25,255.9Zm0,0",
    transform: "translate(0 -232.809)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6478
    },
    __self: undefined
  }));
};
const BookIcon = ({
  width = '30px',
  height = '25px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    id: "book",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.011 24.606",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6494
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M243.79,21.432V0l-.818.069a31.449,31.449,0,0,0-9.533,2.324L232,2.99V24.337l1.048-.436a32.716,32.716,0,0,1,9.861-2.4Zm0,0",
    transform: "translate(-216.459)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6501
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M276.924,47.3h-1.608V66.054a.536.536,0,0,1-.492.536l-1.372.113q-.594.049-1.185.122c-.128.015-.255.036-.382.054-.265.035-.53.071-.794.113-.154.025-.307.053-.46.08-.236.041-.473.082-.709.129-.161.032-.322.068-.486.1-.225.048-.449.1-.672.149-.167.04-.334.082-.5.124-.217.054-.433.111-.648.172-.168.046-.335.095-.5.144-.214.063-.426.128-.637.2l-.5.161q-.318.107-.633.221c-.161.058-.322.117-.486.178l-.22.086h12.283Zm0,0",
    transform: "translate(-246.913 -44.129)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6507
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M40.818.069,40,0V21.433l.951.081a32.5,32.5,0,0,1,9.85,2.412l.988.411V2.99l-1.438-.6A31.448,31.448,0,0,0,40.818.069Zm0,0",
    transform: "translate(-37.32)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6513
    },
    __self: undefined
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M0,47.3V68.733H12.292c-.066-.026-.132-.054-.2-.078-.153-.058-.308-.114-.462-.17-.218-.079-.435-.156-.654-.229q-.238-.08-.477-.156-.326-.107-.654-.2c-.161-.047-.322-.094-.482-.139-.22-.061-.441-.119-.663-.176-.161-.041-.322-.083-.486-.121-.225-.054-.45-.1-.676-.151-.161-.035-.322-.07-.482-.1-.234-.046-.468-.087-.7-.128L5.891,67c-.259-.041-.519-.076-.779-.111-.131-.018-.262-.038-.393-.053q-.59-.071-1.179-.122L2.1,66.59a.536.536,0,0,1-.49-.536V47.3Zm0,0",
    transform: "translate(0 -44.129)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6519
    },
    __self: undefined
  }));
};
const FurnitureIcon = ({
  width = '30px',
  height = '26px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.402 26.348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6535
    },
    __self: undefined
  }, __jsx("g", {
    id: "bed",
    transform: "translate(0 -32)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6541
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group_2",
    "data-name": "Group 2",
    transform: "translate(0 32)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6542
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group_1",
    "data-name": "Group 1",
    transform: "translate(0 0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6543
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 5",
    d: "M29.9,47.2h-.507v-1.52a2.533,2.533,0,0,0-1.52-2.319V35.547a.507.507,0,0,0-.3-.464,2.006,2.006,0,0,0,.3-1.056,2.027,2.027,0,1,0-4.054,0A2.006,2.006,0,0,0,24.1,35.04H6.305a2.006,2.006,0,0,0,.282-1.013,2.027,2.027,0,0,0-4.054,0,2.006,2.006,0,0,0,.3,1.056.507.507,0,0,0-.3.464v7.815a2.533,2.533,0,0,0-1.52,2.319V47.2H.507A.507.507,0,0,0,0,47.708V54.8a.507.507,0,0,0,.507.507h.507v2.533a.507.507,0,0,0,.507.507H3.547a.507.507,0,0,0,.507-.507V55.308H26.348v2.533a.507.507,0,0,0,.507.507h2.027a.507.507,0,0,0,.507-.507V55.308H29.9A.507.507,0,0,0,30.4,54.8V47.708A.507.507,0,0,0,29.9,47.2ZM25.842,33.013a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,25.842,33.013Zm-21.281,0a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,4.56,33.013Zm-1.013,3.04H26.855v7.094h-2.04a2.507,2.507,0,0,0,.52-1.52V40.614A2.537,2.537,0,0,0,22.8,38.08H18.748a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H13.668a2.507,2.507,0,0,0,.52-1.52V40.614a2.537,2.537,0,0,0-2.533-2.534H7.6a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H3.547Zm20.775,4.56v1.013a1.52,1.52,0,0,1-1.52,1.52H18.748a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52H22.8A1.52,1.52,0,0,1,24.322,40.614Zm-11.147,0v1.013a1.52,1.52,0,0,1-1.52,1.52H7.6a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52h4.054A1.52,1.52,0,0,1,13.174,40.614ZM2.027,45.681a1.52,1.52,0,0,1,1.52-1.52H26.855a1.52,1.52,0,0,1,1.52,1.52V47.2H2.027ZM3.04,57.335H2.027V55.308H3.04Zm25.335,0H27.362V55.308h1.013Zm1.013-3.04H1.013v-6.08H29.389Z",
    transform: "translate(0 -32)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6544
    },
    __self: undefined
  }))), __jsx("g", {
    id: "Group_4",
    "data-name": "Group 4",
    transform: "translate(2.027 52.268)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6552
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group_3",
    "data-name": "Group 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6553
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 6",
    d: "M34.533,352H32.507a.507.507,0,0,0,0,1.013h2.027a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-32 -352)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6554
    },
    __self: undefined
  }))), __jsx("g", {
    id: "Group_6",
    "data-name": "Group 6",
    transform: "translate(6.08 52.268)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6562
    },
    __self: undefined
  }, __jsx("g", {
    id: "Group_5",
    "data-name": "Group 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6563
    },
    __self: undefined
  }, __jsx("path", {
    "data-name": "Path 7",
    d: "M117.788,352H96.507a.507.507,0,0,0,0,1.013h21.281a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-96 -352)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6564
    },
    __self: undefined
  })))));
};

/***/ }),

/***/ "./components/Button/Button.style.tsx":
/*!********************************************!*\
  !*** ./components/Button/Button.style.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/customVariant */ "./components/helpers/customVariant.ts");




const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('button').withConfig({
  displayName: "Buttonstyle__ButtonStyle",
  componentId: "sc-900tw8-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;background-color:", ";height:", "px;width:", ";color:", ";border-radius:", "px;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";text-decoration:none;padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;box-sizing:border-box;span.btn-text{padding-left:", "px;padding-right:", "px;white-space:nowrap;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.disabled{color:", ";background-color:", ";border-color:", ";&:hover{color:", ";background-color:", ";border-color:", ";}}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", ""], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), props => props.fullwidth ? '100%' : 'auto', props => props.variant === 'textButton' || props.variant === 'outlined' || props.variant === 'outlinedDash' || props.variant === 'outlinedFab' || props.variant === 'extendedOutlinedFab' ? '#222222' : '#ffffff', props => props.radius ? props.radius : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.3', '6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.7', '30'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.7', '30'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.labelColor', '#767676'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.labelColor', '#767676'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], _helpers_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _helpers_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _helpers_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonSize"]);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.style */ "./components/Button/Button.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/Button/Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    type,
    size,
    title,
    intlButtonId,
    colors,
    variant,
    icon,
    disabled,
    iconPosition,
    iconStyle,
    onClick,
    loader,
    loaderColor,
    isLoading,
    className,
    fullwidth,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "size", "title", "intlButtonId", "colors", "variant", "icon", "disabled", "iconPosition", "iconStyle", "onClick", "loader", "loaderColor", "isLoading", "className", "fullwidth", "style"]);

  // Checking button loading state
  const buttonIcon = isLoading !== false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loader ? loader : 'loading....') : icon && __jsx("span", {
    className: "btn-icon",
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return __jsx(_Button_style__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    type: type,
    className: `reusecore__button ${disabled ? 'disabled' : ''} ${isLoading ? 'isLoading' : ''} ${className ? className : ''}`.trim(),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick,
    colors: colors,
    variant: variant,
    fullwidth: fullwidth,
    style: style,
    size: size
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), position === 'left' && buttonIcon, title && !isLoading && __jsx("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: intlButtonId ? intlButtonId : 'intlButtonId',
    defaultMessage: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/NavLink/NavLink.tsx":
/*!****************************************!*\
  !*** ./components/NavLink/NavLink.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/NavLink/NavLink.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "NavLink__Icon",
  componentId: "sc-17cwf3d-0"
})(["min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;"]);

const NavLink = ({
  href,
  label,
  intlId,
  router: {
    pathname
  },
  icon,
  className,
  onClick,
  iconClass
}) => {
  pathname = pathname === '/' ? '/grocery' : pathname;
  return __jsx("div", {
    onClick: onClick,
    className: className ? className : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("a", {
    className: pathname === href ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, icon ? __jsx(Icon, {
    className: iconClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, icon) : '', __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }) : label))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(NavLink));

/***/ }),

/***/ "./components/Popover/Popover.style.tsx":
/*!**********************************************!*\
  !*** ./components/Popover/Popover.style.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // import { themeGet } from 'styled-system';

const PopoverWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Popoverstyle__PopoverWrapper",
  componentId: "zkouxd-0"
})(["position:relative;.popover-handler{display:inline-block;cursor:pointer;}.popover-content{left:0px;top:calc(100% + 15px);display:block;min-width:200px;padding:15px 20px;position:absolute;border-radius:6px;background-color:#ffffff;box-shadow:0 3px 20px rgba(142,142,142,0.14);z-index:99;&:before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent #ffffff transparent;top:-8px;left:15px;box-shadow:-4px -4px 8px -3px rgba(142,142,142,0.14);pointer-events:none;}}&.right{.popover-content{left:auto;right:0px;&:before{left:auto;right:15px;}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (PopoverWrapper);

/***/ }),

/***/ "./components/Popover/Popover.tsx":
/*!****************************************!*\
  !*** ./components/Popover/Popover.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Popover_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popover.style */ "./components/Popover/Popover.style.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/Popover/Popover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Popover = ({
  className,
  handler,
  content,
  direction
}) => {
  // Popover State
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Add all classs to an array

  const addAllClasses = ['popover-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add direction class on popover content


  if (direction) {
    addAllClasses.push(direction);
  } // Toggle Popover content


  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  }; // Handle document click


  const handleDocumentClick = e => {
    e.stopPropagation();

    if (state) {
      handleToggle(e);
    }
  }; // Handle window event listener


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });
  return __jsx(_Popover_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "popover-handler",
    onClick: handleToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, handler), state && __jsx("div", {
    className: "popover-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, content && __jsx("div", {
    className: "inner-wrap",
    onClick: handleToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, content)));
};

/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./components/SearchBox/Input.tsx":
/*!****************************************!*\
  !*** ./components/SearchBox/Input.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBox_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.style */ "./components/SearchBox/SearchBox.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/SearchBox/Input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InputSearch = ({
  type,
  value,
  buttonText,
  buttonIcon,
  placeholder,
  onChange,
  style,
  onKeyPress,
  onBlur,
  onClick,
  onFocus,
  bordered,
  showSvg,
  inputClass
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_1__["SearchInputWrapper"], {
    style: style,
    bordered: bordered,
    showSvg: showSvg,
    className: `${inputClass} ${bordered === true ? 'bordered' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      onClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, showSvg && __jsx("span", {
    className: "searchIcon",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, buttonIcon), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "searchPlaceholder",
    defaultMessage: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, placeholder => __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_1__["SearchBox"], {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: onFocus,
    onKeyPress: onKeyPress,
    onBlur: onBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), showSvg !== true ? __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_1__["SearchButton"], {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, buttonIcon, buttonText !== '' || null ? __jsx("span", {
    className: "buttonText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "searchButtonText",
    defaultMessage: buttonText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })) : '') : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSearch);

/***/ }),

/***/ "./components/SearchBox/SearchBox.style.tsx":
/*!**************************************************!*\
  !*** ./components/SearchBox/SearchBox.style.tsx ***!
  \**************************************************/
/*! exports provided: CurrentType, SearchResultWrapper, ItemWrapper, SubmenuHeading, SearchBox, SearchInputWrapper, SearchButton, SearchBoxWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentType", function() { return CurrentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultWrapper", function() { return SearchResultWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuHeading", function() { return SubmenuHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputWrapper", function() { return SearchInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchButton", function() { return SearchButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxWrapper", function() { return SearchBoxWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "SearchBoxstyle__SearchWrapper",
  componentId: "sc-1nej5as-0"
})(["position:relative;width:100%;"]);
const CurrentType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "SearchBoxstyle__CurrentType",
  componentId: "sc-1nej5as-1"
})(["font-family:", ";font-size:", "px;color:", ";line-height:38px;font-weight:700;padding:0 15px;background-color:", ";border-radius:6px;margin-left:5px;white-space:nowrap;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#f7f7f7'));
const SearchResultWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('ul').withConfig({
  displayName: "SearchBoxstyle__SearchResultWrapper",
  componentId: "sc-1nej5as-2"
})(["box-sizing:border-box;position:absolute;background-color:#fff;z-index:10;width:100%;list-style-type:none;border-radius:0 0 3px 3px;padding:0;width:100%;margin:4px 0 0;padding-bottom:10px;box-shadow:0 3px 10px rgba(0,0,0,0.16);opacity:1;transition:opacity ease-in-out 500ms;"]);
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "SearchBoxstyle__ItemWrapper",
  componentId: "sc-1nej5as-3"
})(["padding:0.7rem 1.5rem;cursor:pointer;font-family:", ";font-size:", "px;font-weight:", ";color:", ";&:hover{background-color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightBg', '#f4f4f4'));
const SubmenuHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SearchBoxstyle__SubmenuHeading",
  componentId: "sc-1nej5as-4"
})(["display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem 0.5rem;h3{font-size:", "px;font-family:", ";font-weight:", ";margin:0;}button{background-color:transparent;border:0;outline:0;font-family:", ";font-size:", "px;font-weight:", ";color:", ";box-shadow:none;cursor:pointer;padding:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const SearchBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "SearchBoxstyle__SearchBox",
  componentId: "sc-1nej5as-5"
})(["flex-grow:1;font-size:", "px;color:", ";border:0;padding:0 20px;background-color:#ffffff;margin-right:-1px;height:48px;&:focus{outline:0;}&::-webkit-input-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}&:-moz-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}&::-moz-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}&:-ms-input-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'));
const SearchInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SearchBoxstyle__SearchInputWrapper",
  componentId: "sc-1nej5as-6"
})(["width:100%;form{display:flex;flex-direction:row;align-items:center;width:100%;height:100%;border-radius:6px;background-color:#ffffff;overflow:hidden;white-space:nowrap;}&.bordered{border:1px solid ", ";border-radius:6px;}.searchIcon{cursor:pointer;padding:0 15px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#E6E6E6'));
const SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SearchBoxstyle__SearchButton",
  componentId: "sc-1nej5as-7"
})(["background-color:", ";font-size:", "px;font-family:", ";font-weight:700;color:#ffffff;display:flex;height:48px;align-items:center;border:0;outline:0;padding-left:30px;padding-right:30px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;.buttonText{padding-left:10px;}span{display:flex;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif'));
const SearchBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SearchBoxstyle__SearchBoxWrapper",
  componentId: "sc-1nej5as-8"
})(["border:0;width:100%;opacity:1;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;height:100%;flex-grow:1;font-size:", "px;color:", ";border:none;background-color:#ffffff;border-radius:6px 0 0 6px;display:flex;align-items:center;&.hideType{", "{display:none;}}&.collapsed{width:200px;background-color:#f7f7f7;border-radius:5px;flex-grow:0;transition:all ease-in-out 500ms;position:absolute;top:0;right:0;", "{border:1px solid transparent;border-radius:5px;}form,input{background-color:#f7f7f7;padding-left:0 !important;width:100%;&::-webkit-input-placeholder{font-size:", "px;color:", ";}&:-moz-placeholder{font-size:", "px;color:", ";}&::-moz-placeholder{font-size:", "px;color:", ";}&:-ms-input-placeholder{font-size:", "px;color:", ";}}}&.expanded{width:600px;position:absolute;top:0;right:0;transition:all ease-in-out 500ms;", "{border:1px solid ", ";border-radius:5px;}form,input{width:100%;padding-left:0 !important;&::-webkit-input-placeholder{font-size:", "px;color:", ";}&:-moz-placeholder{font-size:", "px;color:", ";}&::-moz-placeholder{font-size:", "px;color:", ";}&:-ms-input-placeholder{font-size:", "px;color:", ";}}}&.minimal{form,input{width:100%;padding-left:0 !important;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'), CurrentType, SearchInputWrapper, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), SearchInputWrapper, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colorsdarkRegular', '#77798C'));
/* harmony default export */ __webpack_exports__["default"] = (SearchWrapper);

/***/ }),

/***/ "./components/SearchBox/SearchBox.tsx":
/*!********************************************!*\
  !*** ./components/SearchBox/SearchBox.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./components/SearchBox/Input.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResults */ "./components/SearchBox/SearchResults.tsx");
/* harmony import */ var _SearchBox_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBox.style */ "./components/SearchBox/SearchBox.style.tsx");
/* harmony import */ var _AllSvgIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AllSvgIcon */ "./components/AllSvgIcon.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/SearchBox/SearchBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Search = ({
  suggestions,
  buttonText,
  buttonIcon,
  inputStyle,
  style,
  bordered,
  hideType,
  showSvg,
  autoSuggestion,
  placeholder,
  className,
  handleSearch,
  onClick,
  value,
  expand,
  minimal,
  pathname
}) => {
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: toggleSuggestion,
    1: setToggleSuggestion
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: toggleSearch,
    1: setToggleSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let searchRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleSearchInput = event => {
    setSearchValue(event.target.value);
    setToggleSuggestion(true);
    handleSearch(event.target.value);
  };

  const ucwords = str => {
    const newString = str.replace(/\//g, '');
    const humanString = newString.replace(/-/g, ' ');
    return (humanString + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  };

  const setSuggestion = suggestion => {
    setSearchValue(suggestion);
    setToggleSuggestion(false);
  };

  const handleClickOutside = event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSuggestion(false);
      setToggleSearch(false);
    }
  };

  const onClearBtnClick = () => {
    setSearchValue('');
  };

  return __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className,
    ref: searchRef,
    style: style,
    autoSuggestion: autoSuggestion,
    hideType: hideType,
    expand: expand,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_3__["SearchBoxWrapper"], {
    className: `${hideType ? 'hideType' : ''} ${expand === true ? toggleSearch ? 'expanded' : 'collapsed' : ''} ${minimal === true ? 'minimal' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, pathname && pathname !== '/' ? __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_3__["CurrentType"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, ucwords(pathname)) : __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_3__["CurrentType"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Grocery"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
    type: "text",
    value: value,
    onChange: handleSearchInput,
    onFocus: () => setToggleSearch(true),
    onBlur: () => setToggleSearch(false),
    buttonIcon: buttonIcon,
    buttonText: buttonText,
    placeholder: placeholder,
    style: inputStyle,
    bordered: bordered,
    showSvg: showSvg,
    onClick: () => onClick(searchValue),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })), autoSuggestion && toggleSuggestion ? __jsx(_SearchResults__WEBPACK_IMPORTED_MODULE_2__["default"], {
    suggestions: suggestions,
    clearSearch: onClearBtnClick,
    setSuggestionValue: suggestion => setSuggestion(suggestion),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }) : null);
};

Search.defaultProps = {
  bordered: false,
  autoSuggestion: false,
  buttonText: 'Search',
  buttonIcon: __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_4__["SearchIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }),
  placeholder: 'Search your products from here',
  inputStyle: {
    width: '100%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/SearchBox/SearchResults.tsx":
/*!************************************************!*\
  !*** ./components/SearchBox/SearchResults.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBox_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.style */ "./components/SearchBox/SearchBox.style.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/SearchBox/SearchResults.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SearchResults = ({
  suggestions,
  itemStyle,
  wrapperStyle,
  setSuggestionValue,
  clearSearch
}) => {
  const setSuggestion = suggestion => {
    setSuggestionValue(suggestion);
  };

  return __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_1__["SearchResultWrapper"], _extends({}, wrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_1__["SubmenuHeading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Recent Search"), " ", __jsx("button", {
    onClick: clearSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Clear")), suggestions.map(suggestion => __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_1__["ItemWrapper"], _extends({}, itemStyle, {
    key: suggestion,
    onClick: () => setSuggestion(suggestion),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), suggestion)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./components/helpers/customVariant.ts":
/*!*********************************************!*\
  !*** ./components/helpers/customVariant.ts ***!
  \*********************************************/
/*! exports provided: buttonStyle, colorStyle, buttonSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonSize", function() { return buttonSize; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

const buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const buttonSize = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonSize',
  prop: 'size'
});


/***/ }),

/***/ "./constants/navigation.ts":
/*!*********************************!*\
  !*** ./constants/navigation.ts ***!
  \*********************************/
/*! exports provided: HOME_PAGE, GROCERY_PAGE, MAKEUP_PAGE, CLOTHING, BAGS_PAGE, BOOK_PAGE, FURNITURE_PAGE, DETAILS_PAGE, PROCEED_TO_CHECKOUT_PAGE, REQUEST_MEDICINE_PAGE, PROFILE_PAGE, YOUR_ORDER, ORDER_RECEIVED, OFFER_PAGE, HELP_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROCERY_PAGE", function() { return GROCERY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKEUP_PAGE", function() { return MAKEUP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOTHING", function() { return CLOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAGS_PAGE", function() { return BAGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK_PAGE", function() { return BOOK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FURNITURE_PAGE", function() { return FURNITURE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAILS_PAGE", function() { return DETAILS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCEED_TO_CHECKOUT_PAGE", function() { return PROCEED_TO_CHECKOUT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_MEDICINE_PAGE", function() { return REQUEST_MEDICINE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE", function() { return PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUR_ORDER", function() { return YOUR_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_RECEIVED", function() { return ORDER_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFER_PAGE", function() { return OFFER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_PAGE", function() { return HELP_PAGE; });
const HOME_PAGE = '/';
const GROCERY_PAGE = '/grocery';
const MAKEUP_PAGE = '/makeup';
const CLOTHING = '/clothing';
const BAGS_PAGE = '/bags';
const BOOK_PAGE = '/book';
const FURNITURE_PAGE = '/furniture';
const DETAILS_PAGE = '/detail';
const PROCEED_TO_CHECKOUT_PAGE = '/checkout';
const REQUEST_MEDICINE_PAGE = '/request-medicine';
const PROFILE_PAGE = '/profile';
const YOUR_ORDER = '/order';
const ORDER_RECEIVED = '/order-recived';
const OFFER_PAGE = '/offer';
const HELP_PAGE = '/help';

/***/ }),

/***/ "./containers/LayoutContainer/AppLayout.tsx":
/*!**************************************************!*\
  !*** ./containers/LayoutContainer/AppLayout.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/Header */ "./containers/LayoutContainer/Header/Header.tsx");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/app/app.provider */ "./contexts/app/app.provider.ts");
/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/navigation */ "./constants/navigation.ts");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/LayoutContainer/AppLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const MobileHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Header/MobileHeader */ "./containers/LayoutContainer/Header/MobileHeader.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Header/MobileHeader */ "./containers/LayoutContainer/Header/MobileHeader.tsx")],
    modules: ['./Header/MobileHeader']
  }
});
const LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "AppLayout__LayoutWrapper",
  componentId: "sc-19rvxvw-0"
})(["background-color:#f7f7f7;.reuseModalHolder{padding:0;overflow:auto;border-radius:3px 3px 0 0;border:0;}"]);

const Layout = ({
  className,
  children,
  deviceType: {
    mobile,
    tablet,
    desktop
  },
  token
}) => {
  const isSticky = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__["useStickyState"])('isSticky');
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isHomePage = pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["HOME_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["GROCERY_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["CLOTHING"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["MAKEUP_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["BOOK_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["FURNITURE_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["BAGS_PAGE"];
  return __jsx(LayoutWrapper, {
    className: `layoutWrapper ${className}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, (mobile || tablet) && __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: isSticky,
    innerZ: 1001,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(MobileHeader, {
    className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''}`,
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })), desktop && __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: isSticky,
    innerZ: 1001,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(MobileHeader, {
    className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''} desktop`,
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''}`,
    token: token,
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./containers/LayoutContainer/Header/Header.style.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/Header.style.tsx ***!
  \************************************************************/
/*! exports provided: SearchWrapper, HeaderLeftSide, HeaderRightSide, Logo, MainMenu, MobileHeaderWrapper, SelectedType, DropDownArrow, SelectedLang, MobileHeaderInnerWrapper, DrawerWrapper, LogoWrapper, HamburgerIcon, DrawerContentWrapper, DrawerClose, DrawerProfile, LogoutView, LoginView, UserAvatar, UserDetails, DrawerMenu, DrawerMenuItem, UesrOptionMenu, SearchModalWrapper, SearchModalClose, LanguageItem, LangSwithcer, Flag, TypeIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLeftSide", function() { return HeaderLeftSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRightSide", function() { return HeaderRightSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return MainMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderWrapper", function() { return MobileHeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedType", function() { return SelectedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownArrow", function() { return DropDownArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedLang", function() { return SelectedLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderInnerWrapper", function() { return MobileHeaderInnerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerWrapper", function() { return DrawerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerIcon", function() { return HamburgerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentWrapper", function() { return DrawerContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerClose", function() { return DrawerClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProfile", function() { return DrawerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutView", function() { return LogoutView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginView", function() { return LoginView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerMenu", function() { return DrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerMenuItem", function() { return DrawerMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UesrOptionMenu", function() { return UesrOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalWrapper", function() { return SearchModalWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalClose", function() { return SearchModalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageItem", function() { return LanguageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSwithcer", function() { return LangSwithcer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flag", function() { return Flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeIcon", function() { return TypeIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);

 // import { styled } from 'baseui';

const positionAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{position:fixed;opacity:1;}to{opacity:0;transition:all 0.3s ease;}"]);
const hideSearch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{display:none;}to{display:flex;}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__SearchWrapper",
  componentId: "sc-1212sid-0"
})(["padding:5px 10px;cursor:pointer;color:", ";svg{display:block;width:17px;height:auto;}@media only screen and (min-width:991px) and (max-width:1366px){opacity:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Headerstyle__HeaderWrapper",
  componentId: "sc-1212sid-1"
})(["padding:30px 60px;display:flex;align-items:center;justify-content:space-between;position:fixed;z-index:99999;top:0;left:0;width:100%;background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.06);transition:all 0.3s ease;&.home{position:absolute;background-color:transparent;box-shadow:none;}@media (max-width:1400px){padding:25px 40px;}@media (max-width:990px){display:none;}.headerSearch{margin:0 30px;@media only screen and (min-width:991px) and (max-width:1200px){margin:0 15px;input{width:80%;}.buttonText{display:none;}}}&.unSticky{animation:", " 0.3s ease;.headerSearch{animation:", " 0.3s ease;display:none;}}&.sticky{background-color:#ffffff;position:fixed;box-shadow:0 1px 2px rgba(0,0,0,0.06);padding-top:20px;padding-bottom:20px;@media (max-width:1400px){padding-top:20px;padding-bottom:20px;}.headerSearch{display:flex;form{background-color:", ";input{background-color:", ";}}@media only screen and (min-width:991px) and (max-width:1200px){.buttonText{display:none;}}}}.popover-wrapper{.popover-content{padding:20px 0;.menu-item{a{margin:0;padding:12px 30px;border-bottom:1px solid ", ";cursor:pointer;&:last-child{border-bottom:0;}&:hover{color:", ";}&.current-page{color:", ";}.menu-item-icon{margin-right:15px;}}}}}.headerSearch{input{@media (max-width:1400px){padding:0 15px;font-size:15px;}@media only screen and (min-width:991px) and (max-width:1200px){}}button{@media (max-width:1400px){padding:0 15px;font-size:15px;}}}"], positionAnim, hideSearch, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightMediumColor', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightMediumColor', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const HeaderLeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__HeaderLeftSide",
  componentId: "sc-1212sid-2"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;"]);
const HeaderRightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__HeaderRightSide",
  componentId: "sc-1212sid-3"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:15px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{padding:;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Headerstyle__Logo",
  componentId: "sc-1212sid-4"
})(["font-family:'Lato',sans-serif;color:", ";font-size:26px;font-weight:bold;cursor:pointer;margin-right:40px;a{font-family:'Lato',sans-serif;color:", ";font-size:26px;font-weight:bold;}span{color:#029e7f;}img{display:block;backface-visibility:hidden;max-width:150px;}@media only screen and (min-width:991px) and (max-width:1200px){margin-right:20px;}@media (max-width:990px){margin-right:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__MainMenu",
  componentId: "sc-1212sid-5"
})(["display:flex;align-items:center;.popover-wrapper{.popover-content{.menu-item{font-family:'Lato',sans-serif;a{font-size:15px;font-weight:700;color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:6px;transition:0.15s ease-in-out;display:flex;align-items:center;@media (max-width:1400px){margin-right:10px;font-size:15px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}&:hover{color:", ";}&.current-page{color:", ";background-color:#fff;}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const MobileHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__MobileHeaderWrapper",
  componentId: "sc-1212sid-6"
})(["@media (min-width:991px){.desktop{display:none;}}"]);
const SelectedType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Headerstyle__SelectedType",
  componentId: "sc-1212sid-7"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border-radius:", "px;outline:0;min-width:150px;span{display:flex;align-items:center;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.4', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.4', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radius.3', '6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const DropDownArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Headerstyle__DropDownArrow",
  componentId: "sc-1212sid-8"
})(["width:12px;margin-left:16px;"]);
const SelectedLang = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Headerstyle__SelectedLang",
  componentId: "sc-1212sid-9"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:10px;padding-right:10px;border-radius:", "px;outline:0;span{display:flex;align-items:center;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radius.3', '6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const MobileHeaderInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__MobileHeaderInnerWrapper",
  componentId: "sc-1212sid-10"
})(["display:flex;align-items:center;justify-content:space-between;padding:15px;position:fixed;width:100%;top:0;left:0;z-index:999;transition:0.25s ease-in-out;&.unSticky:not(.home){background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.06);}&.sticky{background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.06);@media only screen and (min-width:991px) and (max-width:1366px){.searchIconWrapper{opacity:1;}}}"]);
const DrawerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__DrawerWrapper",
  componentId: "sc-1212sid-11"
})([""]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__LogoWrapper",
  componentId: "sc-1212sid-12"
})(["margin-left:auto;margin-right:auto;img{display:block;}"]);
const HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__HamburgerIcon",
  componentId: "sc-1212sid-13"
})(["width:26px;cursor:pointer;display:block;position:relative;> span{display:block;background-color:", ";border-radius:6px;height:2px;margin-bottom:6px;transition:0.2s ease-in-out;&:nth-child(1){width:26px;}&:nth-child(2){width:12px;}&:nth-child(3){width:22px;}&:last-child{margin-bottom:0;}}&:hover{> span{&:nth-child(1){width:12px;}&:nth-child(2){width:22px;}&:nth-child(3){width:26px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const DrawerContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__DrawerContentWrapper",
  componentId: "sc-1212sid-14"
})(["padding-top:60px;"]);
const DrawerClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__DrawerClose",
  componentId: "sc-1212sid-15"
})(["display:block;position:absolute;left:35px;top:14px;color:", ";cursor:pointer;padding:10px;z-index:1;svg{display:block;width:12px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798C'));
const DrawerProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__DrawerProfile",
  componentId: "sc-1212sid-16"
})(["background-color:", ";padding:45px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#F7F7F7'));
const LogoutView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__LogoutView",
  componentId: "sc-1212sid-17"
})(["display:flex;align-items:center;justify-content:center;.sign_in{border:0;padding-left:0;padding-right:25px;}.sign_in,.sign_up{height:36px;padding-left:15px;padding-right:15px;}"]);
const LoginView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__LoginView",
  componentId: "sc-1212sid-18"
})(["display:flex;align-items:center;"]);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__UserAvatar",
  componentId: "sc-1212sid-19"
})(["width:50px;height:50px;flex-shrink:0;display:block;border-radius:50%;overflow:hidden;margin-right:15px;img{width:100%;height:auto;display:block;}"]);
const UserDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__UserDetails",
  componentId: "sc-1212sid-20"
})(["h3{font-size:14px;font-weight:700;color:", ";margin-bottom:10px;line-height:1.2;}span{display:block;font-size:12px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const DrawerMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__DrawerMenu",
  componentId: "sc-1212sid-21"
})(["padding:40px 0;"]);
const DrawerMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__DrawerMenuItem",
  componentId: "sc-1212sid-22"
})(["&:last-child{.drawer_menu_item{margin-bottom:0;}}.drawer_menu_item{a,.logoutBtn{display:block;padding:5px 45px;font-size:14px;font-weight:400;color:", ";margin-bottom:19px;position:relative;transition:0.15s ease-in-out;&:hover{color:", ";}&:before{content:'';display:block;position:absolute;top:0;left:0;width:5px;height:100%;background:transparent;}&.current-page{color:", ";font-weight:700;&:before{background-color:", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const UesrOptionMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__UesrOptionMenu",
  componentId: "sc-1212sid-23"
})(["padding:45px 0;border-top:1px solid ", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightDarkColor', '#E6E6E6'));
const SearchModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__SearchModalWrapper",
  componentId: "sc-1212sid-24"
})(["padding-top:25px;padding-bottom:25px;background-color:#ffffff;display:flex;width:100%;.header-modal-search{width:calc(100% - 60px);@media (max-width:420px){input{width:150px;}}button{background:transparent;color:", ";padding-left:15px;padding-right:15px;}input{color:", ";padding-left:5px;padding-right:5px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const SearchModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Headerstyle__SearchModalClose",
  componentId: "sc-1212sid-25"
})(["border:0;background:transparent;display:block;padding:0 15px;color:", ";display:flex;align-items:center;justify-content:center;cursor:pointer;svg{display:block;width:20px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const LanguageItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Headerstyle__LanguageItem",
  componentId: "sc-1212sid-26"
})(["width:100%;font-size:15px;font-weight:700;color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:6px;transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:15px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#f1f1f1'));
const LangSwithcer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__LangSwithcer",
  componentId: "sc-1212sid-27"
})(["margin-right:20px;.popover-wrapper.right{.popover-content{padding:15px 0;}}"]);
const Flag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__Flag",
  componentId: "sc-1212sid-28"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const TypeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyle__TypeIcon",
  componentId: "sc-1212sid-29"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
/* harmony default export */ __webpack_exports__["default"] = (HeaderWrapper);

/***/ }),

/***/ "./containers/LayoutContainer/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./containers/LayoutContainer/Header/Header.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/NavLink/NavLink */ "./components/NavLink/NavLink.tsx");
/* harmony import */ var components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Popover/Popover */ "./components/Popover/Popover.tsx");
/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/SearchBox/SearchBox */ "./components/SearchBox/SearchBox.tsx");
/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/search/search.context */ "./contexts/search/search.context.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../SignInOutForm/Form */ "./containers/SignInOutForm/Form.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var contexts_language_language_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! contexts/language/language.context */ "./contexts/language/language.context.js");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! image/logo.svg */ "./image/logo.svg");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(image_logo_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! image/user.jpg */ "./image/user.jpg");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! constants/navigation */ "./constants/navigation.ts");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/LayoutContainer/Header/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const MenuArray = [{
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["GROCERY_PAGE"],
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["FruitsVegetable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }),
  label: 'Grocery'
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["MAKEUP_PAGE"],
  label: 'Makeup',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["FacialCare"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["BAGS_PAGE"],
  label: 'Bags',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["Handbag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["CLOTHING"],
  label: 'Clothing',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["DressIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["FURNITURE_PAGE"],
  label: 'Furniture',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["FurnitureIcon"], {
    width: "15px",
    height: "13px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["BOOK_PAGE"],
  label: 'Book',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["BookIcon"], {
    width: "15px",
    height: "13px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })
}];
const DropDownMenuArray = [{
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["PROFILE_PAGE"],
  label: 'Profile',
  intlId: 'navlinkProfile'
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["PROCEED_TO_CHECKOUT_PAGE"],
  label: 'Checkout',
  intlId: 'navlinkCheckout'
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["YOUR_ORDER"],
  label: 'Order',
  intlId: 'sidebarYourOrder'
}, {
  link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["ORDER_RECEIVED"],
  label: 'Order invoice',
  intlId: 'navlinkOrderReceived'
}];
const LanguageArray = [{
  id: 'ar',
  label: 'Arabic',
  intlLangName: 'intlArabic',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["SAFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })
}, {
  id: 'zh',
  label: 'Chinese',
  intlLangName: 'intlChinese',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["CNFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })
}, {
  id: 'en',
  label: 'English',
  intlLangName: 'intlEnglish',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["USFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })
}, {
  id: 'de',
  label: 'German',
  intlLangName: 'intlGerman',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["DEFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })
}, {
  id: 'he',
  label: 'Hebrew',
  intlLangName: 'intlHebrew',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["ILFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  })
}, {
  id: 'es',
  label: 'Spanish',
  intlLangName: 'intlSpanish',
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["ESFlag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })
}];

const Header = ({
  style,
  className,
  token,
  pathname
}) => {
  const {
    state: {
      lang
    },
    toggleLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_language_language_context__WEBPACK_IMPORTED_MODULE_12__["default"]);
  const activeMenuItem = MenuArray.find(item => item.link === pathname);
  const selectedLangindex = LanguageArray.findIndex(x => x.id === lang);
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_8__["AuthContext"]);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_7__["SearchContext"]);
  const {
    0: activeMenu,
    1: setActiveMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(activeMenuItem || {
    link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["GROCERY_PAGE"],
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["FruitsVegetable"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: undefined
    }),
    label: 'Grocery'
  });
  const {
    text
  } = state;

  const handleSearch = text => {
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread({}, state, {
        text
      })
    });
  };

  const {
    page
  } = state,
        urlState = _objectWithoutProperties(state, ["page"]);

  const handleClickSearchButton = () => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
      pathname: pathname === '/' ? '/grocery' : pathname,
      query: _objectSpread({}, urlState, {
        text
      })
    });
  };

  const handleLogout = () => {
    if (false) {}
  };

  const resetSearch = selectedMenu => {
    setActiveMenu(selectedMenu);
    dispatch({
      type: 'RESET'
    });
  };

  const NavItem = item => {
    return __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.link,
      onClick: () => resetSearch(item),
      className: "menu-item",
      href: item.link,
      label: item.label,
      icon: item.icon,
      iconClass: "menu-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    });
  };

  const handleToggleLanguage = e => {
    toggleLanguage(e.target.value);
  };

  const LanguageMenu = item => {
    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["LanguageItem"], {
      onClick: handleToggleLanguage,
      key: item.id,
      value: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: undefined
    }, item.icon), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
      id: item.intlLangName,
      defaultMessage: item.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: undefined
    }));
  };

  const signInOutForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_9__["default"],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  const isHomePage = pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["HOME_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["GROCERY_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["CLOTHING"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["MAKEUP_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["BOOK_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["FURNITURE_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_17__["BAGS_PAGE"];
  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: style,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["HeaderLeftSide"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["Logo"], {
    onClick: () => resetSearch({
      link: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["GROCERY_PAGE"],
      icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["FruitsVegetable"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: undefined
      }),
      label: 'Grocery'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["HOME_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("img", {
    src: image_logo_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "pickbazar-admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  })))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["MainMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }, __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "right",
    handler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["SelectedType"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: undefined
    }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["TypeIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: undefined
    }, activeMenu.icon), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: undefined
    }, activeMenu.label)), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["DropDownArrow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: undefined
    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["MenuDown"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: undefined
    }))),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, MenuArray.map(NavItem)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }))), isHomePage ? __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "headerSearch",
    handleSearch: value => handleSearch(value),
    onClick: handleClickSearchButton,
    placeholder: "Search anything...",
    hideType: true,
    minimal: true,
    showSvg: true,
    style: {
      width: '100%'
    },
    value: text || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }) : null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["HeaderRightSide"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "menu-item",
    href: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["OFFER_PAGE"],
    label: "Offer",
    intlId: "navlinkOffer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }), __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "menu-item",
    href: constants_navigation__WEBPACK_IMPORTED_MODULE_17__["HELP_PAGE"],
    label: "Need Help",
    intlId: "navlinkHelp",
    iconClass: "menu-icon",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_13__["HelpIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["LangSwithcer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: undefined
  }, __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "right",
    handler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["SelectedLang"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: undefined
    }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_14__["Flag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: undefined
    }, LanguageArray[selectedLangindex].icon), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: undefined
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
      id: LanguageArray[selectedLangindex].intlLangName,
      defaultMessage: LanguageArray[selectedLangindex].label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: undefined
    }))),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, LanguageArray.map(LanguageMenu)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  })), !isAuthenticated ? __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: signInOutForm,
    size: "small",
    title: "Join",
    style: {
      fontSize: 15,
      color: '#fff'
    },
    intlButtonId: "joinButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }) : __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    direction: "right",
    className: "user-pages-dropdown",
    handler: __jsx("img", {
      src: image_user_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
      alt: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: undefined
    }),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, DropDownMenuArray.map((item, idx) => __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: idx,
      className: "menu-item",
      href: item.link,
      label: item.label,
      intlId: item.intlId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: undefined
    })), __jsx("div", {
      className: "menu-item",
      onClick: handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: undefined
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
      id: "navlinkLogout",
      defaultMessage: "Logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: undefined
    }))))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/SignInOutForm/ForgotPass.tsx":
/*!*************************************************!*\
  !*** ./containers/SignInOutForm/ForgotPass.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInOutForm.style */ "./containers/SignInOutForm/SignInOutForm.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/SignInOutForm/ForgotPass.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ForgotPassModal() {
  const {
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      paddingBottom: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "forgotPassText",
    defaultMessage: "Forgot Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["SubHeading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "sendResetPassText",
    defaultMessage: "We'll send you a link to reset your password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "emailAddressPlaceholder",
    defaultMessage: "Email Address or Contact No.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, placeholder => __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    fullwidth: true,
    title: 'Reset Password',
    intlButtonId: "resetPasswordBtn",
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Offer"], {
    style: {
      padding: '20px 0 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), ' ', __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["LinkButton"], {
    onClick: toggleSignInForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./containers/SignInOutForm/Form.tsx":
/*!*******************************************!*\
  !*** ./containers/SignInOutForm/Form.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthenticationForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn */ "./containers/SignInOutForm/SignIn.tsx");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp */ "./containers/SignInOutForm/SignUp.tsx");
/* harmony import */ var _ForgotPass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForgotPass */ "./containers/SignInOutForm/ForgotPass.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/SignInOutForm/Form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function AuthenticationForm() {
  const {
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  let RenderForm;

  if (authState.currentForm === "signIn") {
    RenderForm = _SignIn__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  if (authState.currentForm === "signUp") {
    RenderForm = _SignUp__WEBPACK_IMPORTED_MODULE_2__["default"];
  }

  if (authState.currentForm === "forgotPass") {
    RenderForm = _ForgotPass__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  return __jsx(RenderForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
}

/***/ }),

/***/ "./containers/SignInOutForm/SignIn.tsx":
/*!*********************************************!*\
  !*** ./containers/SignInOutForm/SignIn.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInOutForm.style */ "./containers/SignInOutForm/SignInOutForm.style.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/SignInOutForm/SignIn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SignInModal() {
  const {
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP'
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS'
    });
  };

  const loginCallback = () => {
    if (false) {}
  };

  return __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "welcomeBack",
    defaultMessage: "Welcome Back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["SubHeading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "loginText",
    defaultMessage: "Login with your email & password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("form", {
    onSubmit: loginCallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "emailAddressPlaceholder",
    defaultMessage: "Email Address.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, placeholder => __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "email",
    placeholder: placeholder,
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "passwordPlaceholder",
    defaultMessage: "Password (min 6 characters)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, placeholder => __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    placeholder: placeholder,
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    fullwidth: true,
    title: 'Continue',
    intlButtonId: "continueBtn",
    type: "submit",
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "orText",
    defaultMessage: "or",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    fullwidth: true,
    title: 'Continue with Facebook',
    className: "facebook",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_2__["Facebook"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }),
    iconPosition: "left",
    iconStyle: {
      color: '#ffffff',
      marginRight: 5
    },
    intlButtonId: "continueFacebookBtn",
    onClick: loginCallback,
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    fullwidth: true,
    title: 'Continue with Google',
    className: "google",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_2__["Google"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }),
    iconPosition: "left",
    iconStyle: {
      color: '#ffffff',
      marginRight: 5
    },
    intlButtonId: "continueGoogleBtn",
    onClick: loginCallback,
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Offer"], {
    style: {
      padding: '20px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "dontHaveAccount",
    defaultMessage: "Don't have any account?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), ' ', __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["LinkButton"], {
    onClick: toggleSignUpForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })))), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["OfferSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["Offer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "forgotPasswordText",
    defaultMessage: "Forgot your password?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), ' ', __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_1__["LinkButton"], {
    onClick: toggleForgotPassForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "resetText",
    defaultMessage: "Reset It",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./containers/SignInOutForm/SignInOutForm.style.tsx":
/*!**********************************************************!*\
  !*** ./containers/SignInOutForm/SignInOutForm.style.tsx ***!
  \**********************************************************/
/*! exports provided: Button, Wrapper, Container, LogoWrapper, Heading, SubHeading, OfferSection, Offer, HelperText, Input, Divider, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeading", function() { return SubHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferSection", function() { return OfferSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offer", function() { return Offer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperText", function() { return HelperText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");



const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "SignInOutFormstyle__Button",
  componentId: "w9z0ip-0"
})(["&.google{background-color:#4285f4;}&.facebook{background-color:#4267b2;margin-bottom:10px;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SignInOutFormstyle__Wrapper",
  componentId: "w9z0ip-1"
})(["text-align:center;background-color:#fff;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SignInOutFormstyle__Container",
  componentId: "w9z0ip-2"
})(["padding:40px 60px 0;@media (max-width:768px){padding:40px 30px 0;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SignInOutFormstyle__LogoWrapper",
  componentId: "w9z0ip-3"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "SignInOutFormstyle__Heading",
  componentId: "w9z0ip-4"
})(["color:", ";margin-bottom:10px;font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'));
const SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "SignInOutFormstyle__SubHeading",
  componentId: "w9z0ip-5"
})(["margin-bottom:30px;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'));
const OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SignInOutFormstyle__OfferSection",
  componentId: "w9z0ip-6"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const Offer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "SignInOutFormstyle__Offer",
  componentId: "w9z0ip-7"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";margin:0;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'));
const HelperText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "SignInOutFormstyle__HelperText",
  componentId: "w9z0ip-8"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin:0;text-align:center;width:100%;a{font-weight:700;color:#4285f4;text-decoration:underline;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'));
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "SignInOutFormstyle__Input",
  componentId: "w9z0ip-9"
})(["width:100%;height:48px;border-radius:6px;background-color:", ";border:1px solid ", ";font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:19px;padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;margin-bottom:10px;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";font-size:14px;}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&.disabled{.inner-wrap{cursor:not-allowed;opacity:0.6;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'));
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SignInOutFormstyle__Divider",
  componentId: "w9z0ip-10"
})(["padding:15px 0;width:100%;display:flex;justify-content:center;align-items:center;position:relative;span{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1;background-color:#fff;z-index:1;position:relative;padding:0 10px;}&::before{content:'';width:100%;height:1px;background-color:", ";position:absolute;top:50%;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#E6E6E6'));
const LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SignInOutFormstyle__LinkButton",
  componentId: "w9z0ip-11"
})(["background-color:transparent;border:0;outline:0;box-shadow:none;padding:0;font-size:14px;font-weight:700;color:", ";text-decoration:underline;cursor:pointer;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));

/***/ }),

/***/ "./containers/SignInOutForm/SignUp.tsx":
/*!*********************************************!*\
  !*** ./containers/SignInOutForm/SignUp.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignOutModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInOutForm.style */ "./containers/SignInOutForm/SignInOutForm.style.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/SignInOutForm/SignUp.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SignOutModal() {
  const {
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["SubHeading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "signUpText",
    defaultMessage: "Every fill is required in sign up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "emailAddressPlaceholder",
    defaultMessage: "Email Address or Contact No.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, placeholder => __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "passwordPlaceholder",
    defaultMessage: "Password (min 6 characters)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, placeholder => __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "email",
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["HelperText"], {
    style: {
      padding: '20px 0 30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "signUpText",
    defaultMessage: "By signing up, you agree to Pickbazar's",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "termsConditionText",
    defaultMessage: "Terms & Condtion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fullwidth: true,
    title: 'Continue',
    intlButtonId: "continueBtn",
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "orText",
    defaultMessage: "or",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fullwidth: true,
    title: 'Continue with Facebook',
    iconPosition: "left",
    className: "facebook",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["Facebook"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }),
    iconStyle: {
      color: '#ffffff',
      marginRight: 5
    },
    intlButtonId: "continueFacebookBtn",
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fullwidth: true,
    title: 'Continue with Google',
    className: "google",
    iconPosition: "left",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["Google"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }),
    iconStyle: {
      color: '#ffffff',
      marginRight: 5
    },
    intlButtonId: "continueGoogleBtn",
    style: {
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["Offer"], {
    style: {
      padding: '20px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "alreadyHaveAccount",
    defaultMessage: "Already have an account?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), ' ', __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_2__["LinkButton"], {
    onClick: toggleSignInForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./contexts/app/app.provider.ts":
/*!**************************************!*\
  !*** ./contexts/app/app.provider.ts ***!
  \**************************************/
/*! exports provided: useStickyState, useStickyDispatch, StickyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyState", function() { return useStickyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyDispatch", function() { return useStickyDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyProvider", function() { return StickyProvider; });
/* harmony import */ var _create_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context */ "./contexts/create-context.tsx");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ "./contexts/app/app.reducer.ts");


const [state, useDispatch, provider] = Object(_create_context__WEBPACK_IMPORTED_MODULE_0__["useCreateContext"])(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"], _app_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]);
const useStickyState = state;
const useStickyDispatch = useDispatch;
const StickyProvider = provider;

/***/ }),

/***/ "./contexts/app/app.reducer.ts":
/*!*************************************!*\
  !*** ./contexts/app/app.reducer.ts ***!
  \*************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isSticky: false,
  isSidebarSticky: true
};
function reducer(state, {
  type
}) {
  switch (type) {
    case 'SET_STICKY':
      return _objectSpread({}, state, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread({}, state, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread({}, state, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread({}, state, {
        isSidebarSticky: false
      });

    default:
      {
        throw new Error(`Unsupported action type: ${type}`);
      }
  }
}

/***/ }),

/***/ "./contexts/auth/auth.context.tsx":
/*!****************************************!*\
  !*** ./contexts/auth/auth.context.tsx ***!
  \****************************************/
/*! exports provided: AuthContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./contexts/auth/auth.provider.tsx":
/*!*****************************************!*\
  !*** ./contexts/auth/auth.provider.tsx ***!
  \*****************************************/
/*! exports provided: AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.context */ "./contexts/auth/auth.context.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/contexts/auth/auth.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isBrowser = false;
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn'
};

function reducer(state, action) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return _objectSpread({}, state, {
        currentForm: 'signIn'
      });

    case 'SIGNIN_SUCCESS':
      return _objectSpread({}, state, {
        isAuthenticated: true
      });

    case 'SIGN_OUT':
      return _objectSpread({}, state, {
        isAuthenticated: false
      });

    case 'SIGNUP':
      return _objectSpread({}, state, {
        currentForm: 'signUp'
      });

    case 'FORGOTPASS':
      return _objectSpread({}, state, {
        currentForm: 'forgotPass'
      });

    default:
      return state;
  }
}

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, INITIAL_STATE);
  return __jsx(_auth_context__WEBPACK_IMPORTED_MODULE_1__["AuthContext"].Provider, {
    value: {
      authState,
      authDispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, children);
};

/***/ }),

/***/ "./contexts/cart/cart.context.tsx":
/*!****************************************!*\
  !*** ./contexts/cart/cart.context.tsx ***!
  \****************************************/
/*! exports provided: CartContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./contexts/cart/cart.provider.tsx":
/*!*****************************************!*\
  !*** ./contexts/cart/cart.provider.tsx ***!
  \*****************************************/
/*! exports provided: CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! currency.js */ "currency.js");
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helper_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helper/localStorage */ "./helper/localStorage.ts");
/* harmony import */ var helper_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helper/utility */ "./helper/utility.ts");
/* harmony import */ var _cart_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.context */ "./contexts/cart/cart.context.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/contexts/cart/cart.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const initialState = {
  isOpen: false
};

function reducer(cartState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread({}, cartState, {
        isOpen: !cartState.isOpen
      });

    default:
      return cartState;
  }
}

const getCartProducts = () => {
  const products = Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["getLocalState"])('cart');
  return products ? products : [];
};

const getTotalPrice = () => {
  const price = Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["getLocalState"])('totalPrice');
  return price ? price : 0;
};

const getCoupon = () => {
  const coupon = Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["getLocalState"])('coupon');
  if (coupon) return coupon;
  return {
    id: 0,
    code: 'DEFAULT_COUPON',
    discountInPercent: 0
  };
};

const getDiscount = () => {
  const discount = Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["getLocalState"])('discount');
  return discount ? discount : 0;
};

const CartProvider = props => {
  const {
    0: cartState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getCartProducts());
  const {
    0: totalPrice,
    1: setTotalPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getTotalPrice());
  const {
    0: subtotalPrice,
    1: setSubTotalPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getTotalPrice());
  const {
    0: coupon,
    1: setCoupon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getCoupon());
  const {
    0: discount,
    1: setDiscount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getDiscount());

  const setPrice = (coupon = getCoupon()) => {
    const price = calculateTotalPrice(products, coupon);
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('totalPrice', price);
    setTotalPrice(price);
  };

  const calculateTotalPrice = (products, coupon) => {
    let total = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(0);
    let finalTotal;
    products.forEach(product => {
      const quantity = product.quantity ? product.quantity : 1;
      const price = product.salePrice ? product.salePrice : product.price;
      const itemPrice = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(quantity).multiply(price);
      total = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(total).add(itemPrice);
    });
    finalTotal = Number(total.value);
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('subTotalPrice', finalTotal);
    setSubTotalPrice(finalTotal);

    if (coupon.discountInPercent) {
      const discount = finalTotal * Number(coupon.discountInPercent) / 100;
      Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('discount', discount);
      setDiscount(discount);
      finalTotal = finalTotal - discount;
    }

    return finalTotal;
  };

  const add = (event, item) => {
    // TODO: cookie storage
    if (products.length) {
      const index = products.findIndex(product => product.id === item.id);

      if (index !== -1) {
        // if product already available in the cart
        const product = products[index];
        const quantity = product.quantity ? product.quantity : 0;
        products[index] = _objectSpread({}, product, {}, item, {
          quantity: quantity + 1
        }); // just increase the quantity
      } else {
        // if this product is not available in the cart
        products.push(_objectSpread({}, item, {
          quantity: 1
        }));
      }
    } else {
      // if the cart is empty
      products.push(_objectSpread({}, item, {
        quantity: 1
      }));
    }

    Object(helper_utility__WEBPACK_IMPORTED_MODULE_3__["cartAnimation"])(event);
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('cart', products);
    setProducts([...products]); // have to use the shallow copy [...products]

    setPrice();
  };

  const addCoupon = coupon => {
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('coupon', coupon);
    setCoupon(coupon);
    setPrice(coupon);
  };

  const removeCoupon = () => {
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('coupon', {
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0
    });
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('discount', 0);
    setCoupon({
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0
    });
    setPrice({
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0
    });
  };

  const update = (itemId, quantity) => {
    const index = products.findIndex(product => product.id === itemId);

    if (quantity < 1 && index > -1) {
      // delete if quantity, 0
      products.splice(index, 1);
    } else {
      // update quanity
      const product = products[index];
      products[index] = _objectSpread({}, product, {
        quantity
      });
    }

    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('cart', products);
    setProducts([...products]);

    if (!products.length) {
      Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('coupon', {
        id: 0,
        code: 'DEFAULT_COUPON',
        discountInPercent: 0
      });
      Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('discount', 0);
      setDiscount(0);
      setCoupon({
        id: 0,
        code: 'DEFAULT_COUPON',
        discountInPercent: 0
      });
    }

    setPrice();
  };

  const clearCart = () => {
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('cart', []);
    setProducts([]);
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('discount', 0);
    setDiscount(0);
    setCoupon({
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0
    });
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('coupon', {
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0
    }); // setPrice();

    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('totalPrice', 0);
    setTotalPrice(0);
    Object(helper_localStorage__WEBPACK_IMPORTED_MODULE_2__["setLocalState"])('subTotalPrice', 0);
    setSubTotalPrice(0);
  };

  return __jsx(_cart_context__WEBPACK_IMPORTED_MODULE_4__["CartContext"].Provider, {
    value: {
      cartState,
      dispatch,
      products,
      add,
      update,
      totalPrice,
      addCoupon,
      coupon,
      discount,
      removeCoupon,
      subtotalPrice,
      clearCart
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, props.children);
};

/***/ }),

/***/ "./contexts/create-context.tsx":
/*!*************************************!*\
  !*** ./contexts/create-context.tsx ***!
  \*************************************/
/*! exports provided: useCreateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateContext", function() { return useCreateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/contexts/create-context.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;

  const stateCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  const dispatchCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dispatchCtx);
  }

  function Provider({
    children
  }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, defaultValue);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(stateCtx.Provider, {
      value: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
} // const [useTextState, useTextDispatch, TextProvider] = useCreateContext(initialState, reducer);
// export const TextContext = ctx;
// export function App() {
//   return (
//     <TextProvider>
//       <Component />
//     </TextProvider>
//   )
// }
// export function Component() {
//   const state = useTextState('state')
//   const dispatch = useTextDispatch()
// const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
//   return (
//     <div>
//       {state}
//       <button onClick={increment}>Toggle</button>
//     </div>
//   )
// }

/***/ }),

/***/ "./contexts/language/language.context.js":
/*!***********************************************!*\
  !*** ./contexts/language/language.context.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
/* harmony default export */ __webpack_exports__["default"] = (LanguageContext);

/***/ }),

/***/ "./contexts/language/language.provider.js":
/*!************************************************!*\
  !*** ./contexts/language/language.provider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.context */ "./contexts/language/language.context.js");
/* harmony import */ var _language_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.reducer */ "./contexts/language/language.reducer.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis-plugin-rtl */ "stylis-plugin-rtl");
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_global_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled/global.style */ "./styled/global.style.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/contexts/language/language.provider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const LanguageProvider = ({
  children,
  messages
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_language_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], _language_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]);

  const toggleLanguage = lang => {
    dispatch({
      type: 'CURRENT_LANGUAGE',
      payload: lang
    });
    localStorage.setItem('lang', lang);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const localLang = localStorage.getItem('lang');

    if (localLang) {
      toggleLanguage(localLang);
    } else {
      toggleLanguage(navigator.language.split('-')[0]);
    }
  }, []);
  let isRtl = state.lang === 'ar' || state.lang === 'he' ? true : false;
  return __jsx(_language_context__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      state,
      toggleLanguage,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
    locale: state.lang,
    messages: messages[state.lang],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(styled_global_style__WEBPACK_IMPORTED_MODULE_6__["InjectRTL"], {
    lang: state.lang,
    dir: state.lang === 'ar' || state.lang === 'he' ? 'rtl' : 'ltr',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, isRtl ? __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["StyleSheetManager"], {
    stylisPlugins: [stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_5___default.a],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, children) : children)));
};

/* harmony default export */ __webpack_exports__["default"] = (LanguageProvider);

/***/ }),

/***/ "./contexts/language/language.reducer.js":
/*!***********************************************!*\
  !*** ./contexts/language/language.reducer.js ***!
  \***********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return languageReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  lang: 'en'
};
function languageReducer(state, action) {
  switch (action.type) {
    case 'CURRENT_LANGUAGE':
      return _objectSpread({}, state, {
        lang: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./contexts/search/search.context.tsx":
/*!********************************************!*\
  !*** ./contexts/search/search.context.tsx ***!
  \********************************************/
/*! exports provided: SearchContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SearchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./contexts/search/search.provider.tsx":
/*!*********************************************!*\
  !*** ./contexts/search/search.provider.tsx ***!
  \*********************************************/
/*! exports provided: SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.context */ "./contexts/search/search.context.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/contexts/search/search.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return _objectSpread({}, state, {}, action.payload);

    case 'RESET':
      return {
        page: 1
      };

    default:
      return state;
  }
}

const SearchProvider = ({
  children,
  query
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, _objectSpread({}, query, {
    page: 1
  }));
  return __jsx(_search_context__WEBPACK_IMPORTED_MODULE_1__["SearchContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, children);
};

/***/ }),

/***/ "./data/translation/ar.json":
/*!**********************************!*\
  !*** ./data/translation/ar.json ***!
  \**********************************/
/*! exports provided: groceriesTitle, groceriesSubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, searchPlaceholder, searchButtonText, navlinkOffer, navlinkHelp, navlinkProfile, navlinkCheckout, navlinkOrderReceived, navlinkLogout, navlinkLogin, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addCardBtn, savedCardsId, paymentCardTitle, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, intlArabic, intlChinese, intlEnglish, intlGerman, intlHebrew, intlSpanish, navLinkHome, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"groceriesTitle\":\"تسليم البقالة في 90 دقيقة\",\"groceriesSubTitle\":\"احصل على الأطعمة الصحية والوجبات الخفيفة التي تقدمها على عتبة دارك طوال اليوم\",\"makeupTitle\":\"مكياج ذو العلامات التجارية والمستوردة\",\"makeupSubTitle\":\"أسهل وأرخص وسيلة للحصول على الماكياج الخاص بك المستوردة والمستوردة\",\"bagsTitle\":\"الحقائب ذات العلامات التجارية الحصرية\",\"bagsSubTitle\":\"احصل على حقائبك الحصرية والعلامة التجارية التي تم تسليمها إليك في أي وقت من الأوقات\",\"womenClothsTitle\":\"تسوق مصمم الفساتين الخاصة بك\",\"womenClothsSubTitle\":\"على استعداد لارتداء الفساتين المخصصة لك من الانترنت. عجلوا في حين يستمر المخزون.\",\"furnitureTitle\":\"الأثاث الحصري بأسعار رخيصة\",\"furnitureSubTitle\":\"اجعل منزلك منزلاً من خلال مجموعتنا الواسعة من الأثاث الجميل\",\"booksTitle\":\"متجر الكتب الخاصة بك\",\"booksSubTitle\":\"احصل على كتبك المفضلة من مجموعة واسعة من الكتب.\",\"searchPlaceholder\":\"ابحث عن منتجاتك من هنا\",\"searchButtonText\":\"بحث\",\"navlinkOffer\":\"عرض\",\"navlinkHelp\":\"تحتاج مساعدة\",\"navlinkProfile\":\"الملف الشخصي\",\"navlinkCheckout\":\"الدفع\",\"navlinkOrderReceived\":\"طلب الفاتورة\",\"navlinkLogout\":\"الخروج\",\"navlinkLogin\":\"تسجيل الدخول\",\"mobileSignInButtonText\":\"إنضم إلى\",\"navlinkAccountSettings\":\"إعدادات حسابك\",\"cartItems\":\"العناصر\",\"cartItem\":\"بند\",\"addCartButton\":\"عربة التسوق\",\"addToCartButton\":\"أضف إلى السلة\",\"backBtn\":\"عودة\",\"noProductFound\":\"لا توجد منتجات\",\"specialCode\":\"لديك رمز خاص؟\",\"couponApplied\":\"القسيمة المطبقة\",\"couponPlaceholder\":\"أدخل رمز القسيمة هنا\",\"sidebarYourOrder\":\"طلب\",\"profilePageTitle\":\"ملفك الشخصي\",\"profileNameField\":\"اسم\",\"profileEmailField\":\"البريد الإلكتروني\",\"profileSaveBtn\":\"حفظ\",\"contactNumberTItle\":\"رقم الاتصال\",\"addContactBtn\":\"إضافة جهة اتصال\",\"deliveryAddresTitle\":\"عنوان التسليم\",\"addAddressBtn\":\"اضف عنوان\",\"addCardBtn\":\"إضافة بطاقة\",\"savedCardsId\":\"البطاقات المحفوظة\",\"paymentCardTitle\":\"بطاقة المدفوعات\",\"siteFooter\":\"Pickbazar هو منتج من قبل\",\"subTotal\":\"المجموع الفرعي\",\"itemsText\":\"العناصر\",\"shippinFeeText\":\"رسوم الشحن\",\"voucherText\":\"إيصال\",\"voucherApply\":\"تطبيق\",\"couponError\":\"قسيمة غير صالحة\",\"totalText\":\"مجموع\",\"deliverySchedule\":\"حدد جدول التسليم الخاص بك\",\"checkoutDeliveryAddress\":\"حدد عنوان التسليم الخاص بك\",\"contactNumberText\":\"اختر رقم الاتصال الخاص بك\",\"selectPaymentText\":\"حدد خيار الدفع\",\"proceesCheckout\":\"باشرالخروج من الفندق\",\"backHomeBtn\":\"العودة إلى المنزل\",\"orderReceivedText\":\"طلب وارد\",\"orderReceivedSuccess\":\"شكرا لكم. تم استلام طلبك\",\"orderNumberText\":\"رقم الطلب\",\"orderDateText\":\"تاريخ\",\"paymenMethodText\":\"طريقة الدفع او السداد\",\"paymentMethodName\":\"الدفع عن الاستلام\",\"orderDetailsText\":\"تفاصيل الطلب\",\"totalItemText\":\"مجموع البند\",\"orderTimeText\":\"وقت الطلب\",\"deliveryTimeText\":\"موعد التسليم\",\"deliveryLocationText\":\"موقع التسليم\",\"totalAmountText\":\"المبلغ الإجمالي\",\"loadMoreBtn\":\"تحميل المزيد\",\"welcomeBack\":\"مرحبا بعودتك\",\"loginText\":\"تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور الخاصة بك\",\"emailAddressPlaceholder\":\"عنوان البريد الإلكتروني أو رقم الاتصال\",\"passwordPlaceholder\":\"كلمة المرور (بحد أدنى 6 أحرف)\",\"continueBtn\":\"استمر\",\"orText\":\"أو\",\"continueFacebookBtn\":\"تواصل مع Facebook\",\"continueGoogleBtn\":\"تواصل مع جوجل\",\"dontHaveAccount\":\"ليس لديك أي حساب؟\",\"signUpBtnText\":\"سجل\",\"forgotPasswordText\":\"نسيت رقمك السري؟\",\"resetText\":\"إعادة تعيينها\",\"signUpText\":\"بالتسجيل ، أنت توافق على Pickbazar\",\"termsConditionText\":\"الشروط والأحكام\",\"alreadyHaveAccount\":\"هل لديك حساب؟\",\"backToSign\":\"ارجع الى\",\"loginBtnText\":\"تسجيل الدخول\",\"forgotPassText\":\"هل نسيت كلمة المرور\",\"sendResetPassText\":\"سنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك\",\"resetPasswordBtn\":\"إعادة تعيين كلمات المرور\",\"intlCopyBtnId\":\"نسخ\",\"intlCopySuccessId\":\"نسخ\",\"locationModalheading\":\"حدد موقعك\",\"locationModalSubHeading\":\"يجب عليك تحديد موقعك لغرض تقديم الخدمة\",\"locationModalFooter\":\"توصيل مجاني للطلب الأول\",\"saleText\":\"تخفيض السعر\",\"offText\":\"إيقاف\",\"faqNo1Title\":\"كيف تتصل بخدمة العملاء؟\",\"faqNo1Desc\":\"يتوفر فريق تجربة العملاء لدينا 7 أيام في الأسبوع ، ونقدم طريقتين للاتصال. البريد الإلكتروني والدردشة. نحن نحاول الرد بسرعة ، لذلك لا تحتاج إلى الانتظار طويلًا للحصول على رد!\",\"faqNo2Title\":\"فشل تثبيت التطبيق ، وكيفية تحديث معلومات النظام؟\",\"faqNo2Desc\":\"يرجى قراءة الوثائق بعناية. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم\",\"faqNo3Title\":\"استجابة الموقع يستغرق بعض الوقت ، وكيفية تحسين؟\",\"faqNo3Desc\":\"في البداية ، يرجى التحقق من اتصالك بالإنترنت. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم.\",\"faqNo4Title\":\"كيف يمكنني إنشاء حساب؟\",\"faqNo4Desc\":\"إذا كنت تريد فتح حساب للاستخدام الشخصي ، يمكنك القيام بذلك عبر الهاتف أو عبر الإنترنت. يجب أن يستغرق فتح الحساب عبر الإنترنت بضع دقائق فقط.\",\"intlOrderDetailsDiscount\":\"خصم\",\"intlOrderDetailsDelivery\":\"رسوم التوصيل\",\"intlOrderPageTitle\":\"طلبي\",\"intlNoOrderFound\":\"لم يتم العثور على أي طلب\",\"intlOrderPageDetails\":\"تفاصيل الطلب\",\"intlTableColTitle2\":\"كمية\",\"intlTableColTitle3\":\"السعر\",\"intlOrderCardTitleText\":\"طلب\",\"intlOrderCardDateText\":\"تاريخ الطلب\",\"intlOrderCardTotalText\":\"السعر الكلي\",\"joinButton\":\"انضم\",\"intlArabic\":\"عربى\",\"intlChinese\":\"صينى\",\"intlEnglish\":\"الإنجليزية\",\"intlGerman\":\"ألمانية\",\"intlHebrew\":\"اللغة العبرية\",\"intlSpanish\":\"الأسبانية\",\"navLinkHome\":\"الصفحة الرئيسية\",\"intlTextBy\":\"بواسطة\",\"intlReletedItems\":\"الأصناف ذات الصلة\",\"readFreeSampleButton\":\"قراءة عينة مجانية\",\"bookSectionTitle\":\"عن الكتاب\",\"authorSectionTitle\":\"عن المؤلف\"}");

/***/ }),

/***/ "./data/translation/de.json":
/*!**********************************!*\
  !*** ./data/translation/de.json ***!
  \**********************************/
/*! exports provided: groceriesTitle, groceriesSubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, searchPlaceholder, searchButtonText, navlinkOffer, navlinkHelp, navlinkProfile, navlinkCheckout, navlinkOrderReceived, navlinkLogout, navlinkLogin, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, paymentCardTitle, addCardBtn, savedCardsId, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, intlArabic, intlChinese, intlEnglish, intlGerman, intlHebrew, intlSpanish, navLinkHome, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"groceriesTitle\":\"Lebensmittel in 90 Minuten geliefert\",\"groceriesSubTitle\":\"Holen Sie sich den ganzen Tag über gesunde Lebensmittel und Snacks vor Ihre Haustür\",\"makeupTitle\":\"Eingebrannte und importierte Make-ups\",\"makeupSubTitle\":\"Der einfachste und günstigste Weg, um Ihre Marken- und Import-Make-ups zu erhalten\",\"bagsTitle\":\"Exklusive Markentaschen\",\"bagsSubTitle\":\"Erhalten Sie Ihre exklusiven & markenbezogenen Taschen in kürzester Zeit zugestellt\",\"womenClothsTitle\":\"Kaufen Sie Ihre Designer-Kleider\",\"womenClothsSubTitle\":\"Konfektionskleider für Sie aus dem Internet zugeschnitten. Beeilen Sie sich, solange der Vorrat reicht.\",\"furnitureTitle\":\"Exklusive Möbel zum günstigen Preis\",\"furnitureSubTitle\":\"Machen Sie aus Ihrem Haus ein Zuhause mit unserer großen Auswahl an schönen Möbeln\",\"booksTitle\":\"Dein eigener Buchladen\",\"booksSubTitle\":\"Holen Sie sich Ihre Lieblingsbücher aus unserer großen Auswahl an Büchern.\",\"searchPlaceholder\":\"Suchen Sie hier nach Ihren Produkten\",\"searchButtonText\":\"Suche\",\"navlinkOffer\":\"Angebot\",\"navlinkHelp\":\"Brauchen Sie Hilfe\",\"navlinkProfile\":\"Profil\",\"navlinkCheckout\":\"Auschecken\",\"navlinkOrderReceived\":\"Rechnung bestellen\",\"navlinkLogout\":\"Ausloggen\",\"navlinkLogin\":\"Anmeldung\",\"mobileSignInButtonText\":\"Dazu kommen\",\"navlinkAccountSettings\":\"Ihre Kontoeinstellungen\",\"cartItems\":\"Artikel\",\"cartItem\":\"Artikel\",\"addCartButton\":\"Wagen\",\"addToCartButton\":\"In den Warenkorb legen\",\"backBtn\":\"Zurück\",\"noProductFound\":\"Keine Produkte gefunden\",\"specialCode\":\"Hast du einen speziellen Code?\",\"couponApplied\":\"Coupon angewendet\",\"couponPlaceholder\":\"Gutscheincode hier eingeben\",\"sidebarYourOrder\":\"Bestellung\",\"profilePageTitle\":\"Dein Profil\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"sparen\",\"contactNumberTItle\":\"Kontakt Nummer\",\"addContactBtn\":\"Kontakt hinzufügen\",\"deliveryAddresTitle\":\"Lieferadresse\",\"addAddressBtn\":\"Adresse hinzufügen\",\"paymentCardTitle\":\"Zahlungskarte\",\"addCardBtn\":\"Karte hinzufügen\",\"savedCardsId\":\"Gespeicherte Karten\",\"siteFooter\":\"Pickbazar ist ein Produkt von\",\"subTotal\":\"Zwischensumme\",\"itemsText\":\"Artikel\",\"shippinFeeText\":\"Versandkosten\",\"voucherText\":\"Gutschein\",\"voucherApply\":\"Sich bewerben\",\"couponError\":\"Ungültiger Gutschein\",\"totalText\":\"Gesamt\",\"deliverySchedule\":\"Wählen Sie Ihren Lieferplan\",\"checkoutDeliveryAddress\":\"Wählen Sie Ihre Lieferadresse\",\"contactNumberText\":\"Wählen Sie Ihre Kontaktnummer\",\"selectPaymentText\":\"Wählen Sie die Zahlungsoption\",\"proceesCheckout\":\"Zur Kasse\",\"backHomeBtn\":\"Zurück nach Hause\",\"orderReceivedText\":\"Bestellung erhalten\",\"orderReceivedSuccess\":\"Vielen Dank. Ihre Bestellung ist eingegangen\",\"orderNumberText\":\"Bestellnummer\",\"orderDateText\":\"Datum\",\"paymenMethodText\":\"Zahlungsmethode\",\"paymentMethodName\":\"Nachnahme\",\"orderDetailsText\":\"Bestelldetails\",\"totalItemText\":\"Gesamter Artikel\",\"orderTimeText\":\"Bestellzeitpunkt\",\"deliveryTimeText\":\"Lieferzeit\",\"deliveryLocationText\":\"Lieferort\",\"totalAmountText\":\"Gesamtmenge\",\"loadMoreBtn\":\"Mehr laden\",\"welcomeBack\":\"Willkommen zurück\",\"loginText\":\"Melden Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort an\",\"emailAddressPlaceholder\":\"E-Mail-Adresse oder Kontaktnummer\",\"passwordPlaceholder\":\"Passwort (mindestens 6 Zeichen)\",\"continueBtn\":\"Fortsetzen\",\"orText\":\"oder\",\"continueFacebookBtn\":\"Weiter mit Facebook\",\"continueGoogleBtn\":\"Fahren Sie mit Google fort\",\"dontHaveAccount\":\"Noch keinen Account?\",\"signUpBtnText\":\"Anmelden\",\"forgotPasswordText\":\"Haben Sie Ihr Passwort vergessen?\",\"resetText\":\"Setzen Sie es zurück\",\"signUpText\":\"Mit Ihrer Anmeldung stimmen Sie Pickbazar's zu\",\"termsConditionText\":\"Nutzungsbedingungen\",\"alreadyHaveAccount\":\"Hast du schon ein Konto?\",\"backToSign\":\"Zurück zu\",\"loginBtnText\":\"Anmeldung\",\"forgotPassText\":\"Passwort vergessen\",\"sendResetPassText\":\"Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts\",\"resetPasswordBtn\":\"Passwörter zurücksetzen\",\"intlCopyBtnId\":\"Kopieren\",\"intlCopySuccessId\":\"Kopiert\",\"locationModalheading\":\"Wähle deinen Standort\",\"locationModalSubHeading\":\"Sie müssen Ihren Standort für den Lieferservice auswählen\",\"locationModalFooter\":\"Kostenlose Lieferung für 1. Bestellung\",\"saleText\":\"Verkauf\",\"offText\":\"aus\",\"faqNo1Title\":\"Wie kann ich mit dem Kundenservice Kontakt aufnehmen?\",\"faqNo1Desc\":\"Unser Customer Experience Team ist 7 Tage die Woche für Sie da und wir bieten zwei Möglichkeiten, um mit Ihnen in Kontakt zu treten. E-Mail und Chat. Wir bemühen uns, schnell zu antworten, damit Sie nicht zu lange auf eine Antwort warten müssen !.\",\"faqNo2Title\":\"App-Installation fehlgeschlagen, wie werden Systeminformationen aktualisiert?\",\"faqNo2Desc\":\"Bitte lesen Sie die Dokumentation sorgfältig durch. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum\",\"faqNo3Title\":\"Website-Antwort braucht Zeit, wie kann man sie verbessern?\",\"faqNo3Desc\":\"Bitte überprüfen Sie zunächst Ihre Internetverbindung. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum.\",\"faqNo4Title\":\"Wie erstelle ich ein Konto?\",\"faqNo4Desc\":\"Wenn Sie ein Konto für den persönlichen Gebrauch eröffnen möchten, können Sie dies telefonisch oder online tun. Die Online-Kontoeröffnung sollte nur wenige Minuten dauern.\",\"intlOrderDetailsDiscount\":\"Rabatt\",\"intlOrderDetailsDelivery\":\"Zustellgebühr\",\"intlOrderPageTitle\":\"Meine Bestellung\",\"intlNoOrderFound\":\"Keine Bestellung gefunden\",\"intlOrderPageDetails\":\"Bestelldetails\",\"intlTableColTitle2\":\"Menge\",\"intlTableColTitle3\":\"Preis\",\"intlOrderCardTitleText\":\"Bestellung\",\"intlOrderCardDateText\":\"Bestelldatum\",\"intlOrderCardTotalText\":\"Gesamtpreis\",\"joinButton\":\"Beitreten\",\"intlArabic\":\"Arabisch\",\"intlChinese\":\"Chinesisch\",\"intlEnglish\":\"Englisch\",\"intlGerman\":\"Deutsche\",\"intlHebrew\":\"Hebräisch\",\"intlSpanish\":\"Spanisch\",\"navLinkHome\":\"Zuhause\",\"intlTextBy\":\"durch\",\"intlReletedItems\":\"ähnliche Artikel\",\"readFreeSampleButton\":\"Kostenlose Probe lesen\",\"bookSectionTitle\":\"Über das Buch\",\"authorSectionTitle\":\"Über den Autor\"}");

/***/ }),

/***/ "./data/translation/en.json":
/*!**********************************!*\
  !*** ./data/translation/en.json ***!
  \**********************************/
/*! exports provided: groceriesTitle, groceriesSubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, searchPlaceholder, searchButtonText, navlinkOffer, navlinkHelp, navlinkProfile, navlinkCheckout, navlinkOrderReceived, navlinkLogout, navlinkLogin, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, paymentCardTitle, addCardBtn, savedCardsId, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, intlArabic, intlChinese, intlEnglish, intlGerman, intlHebrew, intlSpanish, navLinkHome, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"groceriesTitle\":\"Groceries Delivered in 90 Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favourite books from our wide range of books.\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"navlinkOffer\":\"Offer\",\"navlinkHelp\":\"Need Help\",\"navlinkProfile\":\"Profile\",\"navlinkCheckout\":\"Checkout\",\"navlinkOrderReceived\":\"Order Invoice\",\"navlinkLogout\":\"Logout\",\"navlinkLogin\":\"Login\",\"mobileSignInButtonText\":\"Join In\",\"navlinkAccountSettings\":\"Your Account Settings\",\"cartItems\":\"items\",\"cartItem\":\"item\",\"addCartButton\":\"Cart\",\"addToCartButton\":\"Add to cart\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found\",\"specialCode\":\"Have a special code?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTItle\":\"Contact Number\",\"addContactBtn\":\"Add Contact\",\"deliveryAddresTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"siteFooter\":\"Pickbazar is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippinFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"deliverySchedule\":\"Select Your Delivery Schedule\",\"checkoutDeliveryAddress\":\"Select Your Delivery Address\",\"contactNumberText\":\"Select Your Contact Number\",\"selectPaymentText\":\"Select Payment Option\",\"proceesCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order Received\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymenMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"orderDetailsText\":\"Order Details\",\"totalItemText\":\"Total Item\",\"orderTimeText\":\"Order Time\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Total Amount\",\"loadMoreBtn\":\"Load More\",\"welcomeBack\":\"Welcome Back\",\"loginText\":\"Login with your email & password\",\"emailAddressPlaceholder\":\"demo@demo.com\",\"passwordPlaceholder\":\"demo\",\"continueBtn\":\"Continue\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have any account?\",\"signUpBtnText\":\"Sign Up\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"signUpText\":\"By signing up, you agree to Pickbazar's\",\"termsConditionText\":\"Terms & Condtion\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"locationModalheading\":\"Select Your Location\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website reponse taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Join\",\"intlArabic\":\"Arabic\",\"intlChinese\":\"Chinese\",\"intlEnglish\":\"English\",\"intlGerman\":\"German\",\"intlHebrew\":\"Hebrew\",\"intlSpanish\":\"Spanish\",\"navLinkHome\":\"Home\",\"intlTextBy\":\"by\",\"intlReletedItems\":\"Related Items\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\"}");

/***/ }),

/***/ "./data/translation/es.json":
/*!**********************************!*\
  !*** ./data/translation/es.json ***!
  \**********************************/
/*! exports provided: groceriesTitle, groceriesSubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, searchPlaceholder, searchButtonText, navlinkOffer, navlinkHelp, navlinkProfile, navlinkCheckout, navlinkOrderReceived, navlinkLogout, navlinkLogin, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, paymentCardTitle, addCardBtn, savedCardsId, siteFooter, itemsText, shippinFeeText, voucherText, voucherApply, couponError, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, totalText, subTotal, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, intlArabic, intlChinese, intlEnglish, intlGerman, intlHebrew, intlSpanish, navLinkHome, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"groceriesTitle\":\"Abarrotes entregados en 90 minutos\",\"groceriesSubTitle\":\"Obtenga sus alimentos y refrigerios saludables entregados en su puerta todo el día todos los días\",\"makeupTitle\":\"Maquillajes de marca e importados\",\"makeupSubTitle\":\"La forma más fácil y económica de obtener sus maquillajes de marca e importados\",\"bagsTitle\":\"Bolsos exclusivos de marca\",\"bagsSubTitle\":\"Obtenga sus bolsos exclusivos y de marca entregados en poco tiempo\",\"womenClothsTitle\":\"Compra tus vestidos de diseñador\",\"womenClothsSubTitle\":\"Listo para usar vestidos a medida para usted en línea. Date prisa mientras duren las existencias.\",\"furnitureTitle\":\"Muebles exclusivos a precio económico\",\"furnitureSubTitle\":\"Haga de su casa un hogar con nuestra amplia colección de hermosos muebles.\",\"booksTitle\":\"Tu propia tienda de libros\",\"booksSubTitle\":\"Obtenga sus libros favoritos de nuestra amplia gama de libros.\",\"searchPlaceholder\":\"Busque sus productos desde aquí\",\"searchButtonText\":\"Buscar\",\"navlinkOffer\":\"Oferta\",\"navlinkHelp\":\"Necesitas ayuda\",\"navlinkProfile\":\"Perfil\",\"navlinkCheckout\":\"Revisa\",\"navlinkOrderReceived\":\"Factura de pedido\",\"navlinkLogout\":\"Cerrar sesión\",\"navlinkLogin\":\"Iniciar sesión\",\"mobileSignInButtonText\":\"Participar\",\"navlinkAccountSettings\":\"La configuración de su cuenta\",\"cartItems\":\"artículos\",\"cartItem\":\"articulo\",\"addCartButton\":\"Carro\",\"addToCartButton\":\"Añadir al carrito\",\"backBtn\":\"atrás\",\"noProductFound\":\"No se encontraron productos.\",\"specialCode\":\"¿Tienes un código especial?\",\"couponApplied\":\"Cupón Aplicado\",\"couponPlaceholder\":\"Ingrese el código de cupón aquí\",\"sidebarYourOrder\":\"Orden\",\"profilePageTitle\":\"Tu perfil\",\"profileNameField\":\"Nombre\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Salvar\",\"contactNumberTItle\":\"Número de contacto\",\"addContactBtn\":\"Agregar contacto\",\"deliveryAddresTitle\":\"Dirección de entrega\",\"addAddressBtn\":\"Añadir dirección\",\"paymentCardTitle\":\"Tarjeta de pagos\",\"addCardBtn\":\"Agregar tarjeta\",\"savedCardsId\":\"Tarjetas guardadas\",\"siteFooter\":\"Pickbazar es un producto de\",\"itemsText\":\"artículos\",\"shippinFeeText\":\"Gastos de envío\",\"voucherText\":\"Vale\",\"voucherApply\":\"Aplicar\",\"couponError\":\"Cupón Inválido\",\"deliverySchedule\":\"Seleccione su horario de entrega\",\"checkoutDeliveryAddress\":\"Seleccione su dirección de entrega\",\"contactNumberText\":\"Seleccione su número de contacto\",\"selectPaymentText\":\"Seleccionar opción de pago\",\"proceesCheckout\":\"Pasar por la caja\",\"backHomeBtn\":\"De vuelta a casa\",\"orderReceivedText\":\"orden recibida\",\"orderReceivedSuccess\":\"Gracias. Tu orden ha sido recibida\",\"orderNumberText\":\"Número de orden\",\"orderDateText\":\"Fecha\",\"paymenMethodText\":\"Método de pago\",\"paymentMethodName\":\"Contra reembolso\",\"orderDetailsText\":\"Detalles del pedido\",\"totalItemText\":\"Artículo total\",\"orderTimeText\":\"Tiempo de la orden\",\"deliveryTimeText\":\"El tiempo de entrega\",\"deliveryLocationText\":\"Lugar de entrega\",\"totalAmountText\":\"Cantidad total\",\"loadMoreBtn\":\"Carga más\",\"welcomeBack\":\"Dar una buena acogida\",\"loginText\":\"Inicie sesión con su correo electrónico y contraseña\",\"emailAddressPlaceholder\":\"Dirección de correo electrónico o número de contacto\",\"passwordPlaceholder\":\"Contraseña (mínimo 6 caracteres)\",\"continueBtn\":\"Continuar\",\"orText\":\"o\",\"continueFacebookBtn\":\"Continuar con Facebook\",\"continueGoogleBtn\":\"Continuar con Google\",\"dontHaveAccount\":\"¿No tienes cuenta?\",\"signUpBtnText\":\"Regístrate\",\"forgotPasswordText\":\"¿Olvidaste tu contraseña?\",\"resetText\":\"Reinicialo\",\"signUpText\":\"Al registrarte, aceptas Pickbazar's\",\"termsConditionText\":\"Términos y condiciones\",\"alreadyHaveAccount\":\"¿Ya tienes una cuenta?\",\"backToSign\":\"De regreso\",\"loginBtnText\":\"Iniciar sesión\",\"forgotPassText\":\"Se te olvidó tu contraseña\",\"sendResetPassText\":\"Le enviaremos un enlace para restablecer su contraseña\",\"resetPasswordBtn\":\"Restablecer contraseñas\",\"intlCopyBtnId\":\"Copiar\",\"intlCopySuccessId\":\"Copiado\",\"locationModalheading\":\"Selecciona tu ubicación\",\"locationModalSubHeading\":\"Debe seleccionar su ubicación para el servicio de entrega\",\"locationModalFooter\":\"Entrega gratuita para el primer pedido\",\"saleText\":\"Rebaja\",\"offText\":\"Apagada\",\"faqNo1Title\":\"¿Cómo contactar con el Servicio al Cliente?\",\"faqNo1Desc\":\"Nuestro equipo de experiencia del cliente está disponible los 7 días de la semana y ofrecemos 2 formas de ponerse en contacto: correo electrónico y chat. Intentamos responder rápidamente, por lo que no debe esperar demasiado para recibir una respuesta.\",\"faqNo2Title\":\"La instalación de la aplicación falló, ¿cómo actualizar la información del sistema?\",\"faqNo2Desc\":\"Por favor lea la documentación cuidadosamente. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte\",\"faqNo3Title\":\"Respuesta del sitio web tomando tiempo, ¿cómo mejorar?\",\"faqNo3Desc\":\"Al principio, verifique su conexión a internet. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte.\",\"faqNo4Title\":\"¿Cómo creo una cuenta?\",\"faqNo4Desc\":\"Si desea abrir una cuenta para uso personal, puede hacerlo por teléfono o en línea. Abrir una cuenta en línea solo debería tomar unos minutos.\",\"totalText\":\"Total\",\"subTotal\":\"Subtotal\",\"intlOrderDetailsDiscount\":\"Descuento\",\"intlOrderDetailsDelivery\":\"Gastos de envío\",\"intlOrderPageTitle\":\"Mi pedido\",\"intlNoOrderFound\":\"No se ha encontrado ningún pedido.\",\"intlOrderPageDetails\":\"Detalles del pedido\",\"intlTableColTitle2\":\"Cantidad\",\"intlTableColTitle3\":\"Precio\",\"intlOrderCardTitleText\":\"Orden\",\"intlOrderCardDateText\":\"Fecha de orden\",\"intlOrderCardTotalText\":\"Precio total\",\"joinButton\":\"Unirse\",\"intlArabic\":\"Arábica\",\"intlChinese\":\"Chino\",\"intlEnglish\":\"Inglés\",\"intlGerman\":\"Alemán\",\"intlHebrew\":\"Hebreo\",\"intlSpanish\":\"Español\",\"navLinkHome\":\"Hogar\",\"intlTextBy\":\"por\",\"intlReletedItems\":\"Artículos relacionados\",\"readFreeSampleButton\":\"Leer muestra gratis\",\"bookSectionTitle\":\"Acerca del libro\",\"authorSectionTitle\":\"Sobre el autor\"}");

/***/ }),

/***/ "./data/translation/he.json":
/*!**********************************!*\
  !*** ./data/translation/he.json ***!
  \**********************************/
/*! exports provided: groceriesTitle, groceriesSubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, searchPlaceholder, searchButtonText, navlinkOffer, navlinkHelp, navlinkProfile, navlinkCheckout, navlinkOrderReceived, navlinkLogout, navlinkLogin, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addCardBtn, savedCardsId, paymentCardTitle, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, totalText, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, intlArabic, intlChinese, intlEnglish, intlGerman, intlHebrew, intlSpanish, navLinkHome, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"groceriesTitle\":\"מצרכים הובאו תוך 90 דקות\",\"groceriesSubTitle\":\"קבל את האוכל והחטיפים הבריאים שלך המובאים בפתח שלך כל היום בכל יום\",\"makeupTitle\":\"איפור ממותג ומיובא\",\"makeupSubTitle\":\"הדרך הקלה והזולה ביותר להשיג איפור ממותג ומיובא שלך\",\"bagsTitle\":\"תיקים ממותגים בלעדיים\",\"bagsSubTitle\":\"קבל את התיקים הבלעדיים והמותגיים שלך שנשלחו אליך תוך זמן קצר\",\"womenClothsTitle\":\"קנו את שמלות המעצבים שלך\",\"womenClothsSubTitle\":\"מוכנים ללבוש שמלות המותאמות עבורך מהאינטרנט. מהרו כשמלאי נמשך.\",\"furnitureTitle\":\"ריהוט בלעדי במחיר זול\",\"furnitureSubTitle\":\"הפוך את ביתך לבית עם אוסף הרהיטים היפה שלנו\",\"booksTitle\":\"חנות ספרים משלך\",\"booksSubTitle\":\"השג את הספרים המועדפים עליך ממגוון הספרים הרחב שלנו.\",\"searchPlaceholder\":\"חפש במוצרים שלך מכאן\",\"searchButtonText\":\"לחפש\",\"navlinkOffer\":\"הצעה\",\"navlinkHelp\":\"זקוק לעזרה\",\"navlinkProfile\":\"פרופיל\",\"navlinkCheckout\":\"לבדוק\",\"navlinkOrderReceived\":\"הזמנת חשבונית\",\"navlinkLogout\":\"להתנתק\",\"navlinkLogin\":\"התחברות\",\"mobileSignInButtonText\":\"להצטרף\",\"navlinkAccountSettings\":\"הגדרות החשבון שלך\",\"cartItems\":\"פריטים\",\"cartItem\":\"פריט\",\"addCartButton\":\"עגלה\",\"addToCartButton\":\"הוסף לעגלה\",\"backBtn\":\"חזור\",\"noProductFound\":\"לא נמצאו מוצרים\",\"specialCode\":\"יש לך קוד מיוחד?\",\"couponApplied\":\"קופון מיושם\",\"couponPlaceholder\":\"הזן כאן קוד שובר\",\"sidebarYourOrder\":\"להזמין\",\"profilePageTitle\":\"הפרופיל שלך\",\"profileNameField\":\"שם\",\"profileEmailField\":\"דוא\\\"ל\",\"profileSaveBtn\":\"לשמור\",\"contactNumberTItle\":\"מספר איש קשר\",\"addContactBtn\":\"הוסף איש קשר\",\"deliveryAddresTitle\":\"כתובת למשלוח\",\"addAddressBtn\":\"הוסף כתובת\",\"addCardBtn\":\"הוסף כרטיס\",\"savedCardsId\":\"כרטיסים שמורים\",\"paymentCardTitle\":\"כרטיס תשלומים\",\"siteFooter\":\"Pickbazar הוא מוצר מאת\",\"subTotal\":\"תת סה\\\"כ\",\"itemsText\":\"פריטים\",\"shippinFeeText\":\"דמי משלוח\",\"voucherText\":\"שובר\",\"voucherApply\":\"להגיש מועמדות\",\"couponError\":\"קופון לא חוקי\",\"deliverySchedule\":\"בחר את לוח המסירה שלך\",\"checkoutDeliveryAddress\":\"בחר את כתובת המסירה שלך\",\"contactNumberText\":\"בחר את מספר איש הקשר שלך\",\"selectPaymentText\":\"בחר באפשרות תשלום\",\"proceesCheckout\":\"התקדם לנקודת הביקורת\",\"backHomeBtn\":\"בחזרה לבית\",\"orderReceivedText\":\"ההזמנה התקבלה\",\"orderReceivedSuccess\":\"תודה. ההזמנה שלך התקבלה\",\"orderNumberText\":\"מספר הזמנה\",\"orderDateText\":\"תאריך\",\"paymenMethodText\":\"אמצעי תשלום\",\"paymentMethodName\":\"מזומן במשלוח\",\"orderDetailsText\":\"פרטי הזמנה\",\"totalItemText\":\"סה\\\"כ פריט\",\"orderTimeText\":\"הזמן הזמן\",\"deliveryTimeText\":\"זמן משלוח\",\"deliveryLocationText\":\"מיקום המשלוח\",\"totalAmountText\":\"הכמות הכוללת\",\"loadMoreBtn\":\"טען עוד\",\"welcomeBack\":\"ברוך שובך\",\"loginText\":\"התחבר באמצעות הדוא\\\"ל והסיסמה שלך\",\"emailAddressPlaceholder\":\"כתובת דוא\\\"ל או מספר איש קשר\",\"passwordPlaceholder\":\"סיסמא (מינימום 6 תווים)\",\"continueBtn\":\"המשך\",\"orText\":\"או\",\"continueFacebookBtn\":\"המשך עם פייסבוק\",\"continueGoogleBtn\":\"המשך עם גוגל\",\"dontHaveAccount\":\"אין לך חשבון?\",\"signUpBtnText\":\"הירשם\",\"forgotPasswordText\":\"שכחת ססמה?\",\"resetText\":\"אפס אותו\",\"signUpText\":\"על ידי ההרשמה, אתה מסכים לפיקבזר\",\"termsConditionText\":\"תנאים והגבלות\",\"alreadyHaveAccount\":\"כבר יש לך חשבון?\",\"backToSign\":\"בחזרה ל\",\"loginBtnText\":\"התחברות\",\"forgotPassText\":\"שכחת את הסיסמא\",\"sendResetPassText\":\"אנו נשלח לך קישור לאיפוס הסיסמה שלך\",\"resetPasswordBtn\":\"אפס סיסמאות\",\"intlCopyBtnId\":\"עותק\",\"intlCopySuccessId\":\"הועתק\",\"locationModalheading\":\"בחר את המיקום שלךSelecciona tu ubicación\",\"locationModalSubHeading\":\"עליכם לבחור את המיקום שלכם לצורך שירות משלוחים\",\"locationModalFooter\":\"משלוח חינם להזמנה ראשונה\",\"saleText\":\"מכירה\",\"offText\":\"כבוי\",\"faqNo1Title\":\"כיצד ליצור קשר עם שירות לקוחות?\",\"faqNo1Desc\":\"צוות חוויית הלקוחות שלנו זמין 7 ימים בשבוע ואנחנו מציעים 2 דרכים ליצור קשר. דואר אלקטרוני וצ'אט. אנו מנסים לענות במהירות, כך שאתה לא צריך לחכות יותר מדי לתגובה !.\",\"faqNo2Title\":\"התקנת האפליקציה נכשלה, כיצד לעדכן את פרטי המערכת?\",\"faqNo2Desc\":\"אנא קרא את התיעוד בעיון. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה\",\"faqNo3Title\":\"תגובת אתר לוקח זמן, כיצד לשפר?\",\"faqNo3Desc\":\"בהתחלה, אנא בדוק את חיבור האינטרנט שלך. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה.\",\"faqNo4Title\":\"כיצד אוכל ליצור חשבון?\",\"faqNo4Desc\":\"אם אתה רוצה לפתוח חשבון לשימוש אישי אתה יכול לעשות זאת בטלפון או באינטרנט. פתיחת חשבון באופן מקוון אמורה לארוך מספר דקות בלבד.\",\"totalText\":\"סך הכל\",\"intlOrderDetailsDiscount\":\"הנחה\",\"intlOrderDetailsDelivery\":\"דמי משלוח\",\"intlOrderPageTitle\":\"ההזמנה שלי\",\"intlNoOrderFound\":\"לא נמצאה הזמנה\",\"intlOrderPageDetails\":\"פרטי הזמנה\",\"intlTableColTitle2\":\"כמות\",\"intlTableColTitle3\":\"מחיר\",\"intlOrderCardTitleText\":\"להזמין\",\"intlOrderCardDateText\":\"תאריך הזמנה\",\"intlOrderCardTotalText\":\"מחיר סופי\",\"joinButton\":\"הצטרף\",\"intlArabic\":\"ערבית\",\"intlChinese\":\"סינית\",\"intlEnglish\":\"אנגלית\",\"intlGerman\":\"גרמנית\",\"intlHebrew\":\"עברית\",\"intlSpanish\":\"ספרדית\",\"navLinkHome\":\"בית\",\"intlTextBy\":\"על ידי\",\"intlReletedItems\":\"חפצים קשורים\",\"readFreeSampleButton\":\"קרא דוגמא בחינם\",\"bookSectionTitle\":\"לגבי הספר\",\"authorSectionTitle\":\"על הסופר\"}");

/***/ }),

/***/ "./data/translation/zh.json":
/*!**********************************!*\
  !*** ./data/translation/zh.json ***!
  \**********************************/
/*! exports provided: groceriesTitle, groceriesSubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, searchPlaceholder, searchButtonText, navlinkOffer, navlinkHelp, navlinkProfile, navlinkCheckout, navlinkOrderReceived, navlinkLogout, navlinkLogin, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, paymentCardTitle, addCardBtn, savedCardsId, siteFooter, subTotal, itemsText, shippinFeeText, voucherText, voucherApply, couponError, totalText, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, proceesCheckout, backHomeBtn, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, intlOrderCardDateText, intlOrderCardTotalText, joinButton, intlArabic, intlChinese, intlEnglish, intlGerman, intlHebrew, intlSpanish, navLinkHome, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"groceriesTitle\":\"90分钟内送达的杂货\",\"groceriesSubTitle\":\"每天一整天都在您家门口提供健康食品和小吃\",\"makeupTitle\":\"品牌和进口化妆品\",\"makeupSubTitle\":\"最简单，最便宜的获得品牌和进口化妆品的方法\",\"bagsTitle\":\"独家品牌包\",\"bagsSubTitle\":\"立即获得您专属的品牌包包\",\"womenClothsTitle\":\"选购设计师礼服\",\"womenClothsSubTitle\":\"从网上即可为您量身定制礼服。 存货充足时快点。\",\"furnitureTitle\":\"廉价的独家家具\",\"furnitureSubTitle\":\"我们种类繁多的精美家具让您的房子成为家\",\"booksTitle\":\"你自己的书店\",\"booksSubTitle\":\"从我们广泛的书籍中获取您喜欢的书籍。\",\"searchPlaceholder\":\"從這裡搜索您的產品\",\"searchButtonText\":\"搜索\",\"navlinkOffer\":\"提供\",\"navlinkHelp\":\"需要帮忙\",\"navlinkProfile\":\"輪廓\",\"navlinkCheckout\":\"查看\",\"navlinkOrderReceived\":\"订单发票\",\"navlinkLogout\":\"登出\",\"navlinkLogin\":\"登錄\",\"mobileSignInButtonText\":\"加入\",\"navlinkAccountSettings\":\"您的帳戶設置\",\"cartItems\":\"項目\",\"cartItem\":\"项目\",\"addCartButton\":\"大车\",\"addToCartButton\":\"添加到购物车\",\"backBtn\":\"背部\",\"noProductFound\":\"沒有找到產品\",\"specialCode\":\"有特殊代碼嗎？\",\"couponApplied\":\"優惠券已申請\",\"couponPlaceholder\":\"在此输入优惠券代码\",\"sidebarYourOrder\":\"订购\",\"profilePageTitle\":\"你的個人資料\",\"profileNameField\":\"名稱\",\"profileEmailField\":\"電子郵件\",\"profileSaveBtn\":\"保存\",\"contactNumberTItle\":\"聯繫電話\",\"addContactBtn\":\"增加聯繫人\",\"deliveryAddresTitle\":\"郵寄地址\",\"addAddressBtn\":\"添加地址\",\"paymentCardTitle\":\"付款卡\",\"addCardBtn\":\"新增卡\",\"savedCardsId\":\"保存的卡\",\"siteFooter\":\"Pickbazar是一個產品\",\"subTotal\":\"小計\",\"itemsText\":\"項目\",\"shippinFeeText\":\"運輸費用\",\"voucherText\":\"憑證\",\"voucherApply\":\"應用\",\"couponError\":\"優惠券無效\",\"totalText\":\"總\",\"deliverySchedule\":\"選擇您的交貨計劃\",\"checkoutDeliveryAddress\":\"選擇您的送貨地址\",\"contactNumberText\":\"選擇您的聯繫電話\",\"selectPaymentText\":\"選擇付款選項\",\"proceesCheckout\":\"進行結算\",\"backHomeBtn\":\"回到家\",\"orderReceivedText\":\"訂單已經收到\",\"orderReceivedSuccess\":\"謝謝。 您的訂單已收到\",\"orderNumberText\":\"訂單號\",\"orderDateText\":\"日期\",\"paymenMethodText\":\"付款方法\",\"paymentMethodName\":\"貨到付款\",\"orderDetailsText\":\"訂單詳細信息\",\"totalItemText\":\"總項目\",\"orderTimeText\":\"訂單時間\",\"deliveryTimeText\":\"交貨時間\",\"deliveryLocationText\":\"交貨地點\",\"totalAmountText\":\"總金額\",\"loadMoreBtn\":\"装载更多\",\"welcomeBack\":\"歡迎回來\",\"loginText\":\"使用您的電子郵件和密碼登錄\",\"emailAddressPlaceholder\":\"電郵地址或聯絡號碼\",\"passwordPlaceholder\":\"密碼（最少6個字符）\",\"continueBtn\":\"繼續\",\"orText\":\"要么\",\"continueFacebookBtn\":\"繼續使用Facebook\",\"continueGoogleBtn\":\"繼續使用Google\",\"dontHaveAccount\":\"沒有帳戶？\",\"signUpBtnText\":\"註冊\",\"forgotPasswordText\":\"忘記密碼了嗎？\",\"resetText\":\"重置它\",\"signUpText\":\"通過註冊，您同意Pickbazar的\",\"termsConditionText\":\"條款和條件\",\"alreadyHaveAccount\":\"已經有賬號？\",\"backToSign\":\"回到\",\"loginBtnText\":\"登錄\",\"forgotPassText\":\"忘記密碼\",\"sendResetPassText\":\"我們會向您發送重置密碼的鏈接\",\"resetPasswordBtn\":\"重置密碼\",\"intlCopyBtnId\":\"复制\",\"intlCopySuccessId\":\"复制的\",\"locationModalheading\":\"选择你的位置\",\"locationModalSubHeading\":\"您必须选择位置以进行送货服务\",\"locationModalFooter\":\"免费送货第一订单\",\"saleText\":\"特卖\",\"offText\":\"关\",\"faqNo1Title\":\"如何与客户服务联系？\",\"faqNo1Desc\":\"我们的客户体验团队每周工作7天，我们提供两种联系方式。电子邮件和聊天。 我们会尽快回复您，因此您无需等待太久就可以回复！\",\"faqNo2Title\":\"应用安装失败，如何更新系统信息？\",\"faqNo2Desc\":\"请仔细阅读文档。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单\",\"faqNo3Title\":\"网站响应耗时，如何改善？\",\"faqNo3Desc\":\"首先，请检查您的互联网连接。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单。\",\"faqNo4Title\":\"如何创建一个帐户？\",\"faqNo4Desc\":\"如果您想开设一个个人帐户，可以通过电话或在线进行。 在线开户仅需几分钟。\",\"intlOrderDetailsDiscount\":\"折扣\",\"intlOrderDetailsDelivery\":\"送货费\",\"intlOrderPageTitle\":\"我的订单\",\"intlNoOrderFound\":\"找不到订单\",\"intlOrderPageDetails\":\"订单详细信息\",\"intlTableColTitle2\":\"数量\",\"intlTableColTitle3\":\"价钱\",\"intlOrderCardTitleText\":\"订购\",\"intlOrderCardDateText\":\"订购日期\",\"intlOrderCardTotalText\":\"总价\",\"joinButton\":\"加入\",\"intlArabic\":\"阿拉伯\",\"intlChinese\":\"中文\",\"intlEnglish\":\"英语\",\"intlGerman\":\"德语\",\"intlHebrew\":\"希伯来语\",\"intlSpanish\":\"西班牙文\",\"navLinkHome\":\"家\",\"intlTextBy\":\"通过\",\"intlReletedItems\":\"相关项目\",\"readFreeSampleButton\":\"阅读免费样本\",\"bookSectionTitle\":\"关于这本书\",\"authorSectionTitle\":\"关于作者\"}");

/***/ }),

/***/ "./helper/localStorage.ts":
/*!********************************!*\
  !*** ./helper/localStorage.ts ***!
  \********************************/
/*! exports provided: getLocalState, setLocalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalState", function() { return getLocalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalState", function() { return setLocalState; });
// localStorage.js
const getLocalState = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const setLocalState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch {// ignore write errors
  }
};

/***/ }),

/***/ "./helper/useDeviceType.ts":
/*!*********************************!*\
  !*** ./helper/useDeviceType.ts ***!
  \*********************************/
/*! exports provided: useDeviceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeviceType", function() { return useDeviceType; });
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-detect */ "mobile-detect");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_0__);

function useDeviceType(userAgent) {
  const md = new mobile_detect__WEBPACK_IMPORTED_MODULE_0___default.a(userAgent);
  let mobile = false,
      tablet = false,
      desktop = false;

  if (md.tablet()) {
    tablet = true;
  } else if (md.mobile()) {
    mobile = true;
  } else {
    desktop = true;
  }

  return {
    mobile,
    tablet,
    desktop
  };
}

/***/ }),

/***/ "./helper/utility.ts":
/*!***************************!*\
  !*** ./helper/utility.ts ***!
  \***************************/
/*! exports provided: getCartProducts, getTotalPrice, getCoupon, getDiscount, getSubTotalPrice, findProductIndex, getProductQuantity, calculateItemPrice, calculateTotalPrice, modifyaddressData, modifyContactData, modifyCardData, cartAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartProducts", function() { return getCartProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPrice", function() { return getTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoupon", function() { return getCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiscount", function() { return getDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubTotalPrice", function() { return getSubTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findProductIndex", function() { return findProductIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductQuantity", function() { return getProductQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateItemPrice", function() { return calculateItemPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyaddressData", function() { return modifyaddressData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyContactData", function() { return modifyContactData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyCardData", function() { return modifyCardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartAnimation", function() { return cartAnimation; });
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! currency.js */ "currency.js");
/* harmony import */ var currency_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(currency_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./helper/localStorage.ts");


const getCartProducts = () => {
  const products = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getLocalState"])('cart');
  return products ? products : [];
};
const getTotalPrice = () => {
  const price = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getLocalState"])('totalPrice');
  return price ? price : 0;
};
const getCoupon = () => {
  const coupon = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getLocalState"])('coupon');
  if (coupon) return coupon;
  return {
    id: 0,
    code: 'DEFAULT_COUPON',
    discountInPercent: 0
  };
};
const getDiscount = () => {
  const discount = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getLocalState"])('discount');
  return discount ? discount : 0;
};
const getSubTotalPrice = () => {
  const price = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getLocalState"])('subTotalPrice');
  return price ? price : 0;
}; // export const getCartProducts = (context: any) => {
//   try {
//     const products = JSON.parse(getCookie('cart', context));
//     if (products && products.length) {
//       return products;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     return 0;
//   }
// };
// export const getTotalPrice = (context: any) => {
//   try {
//     const price = JSON.parse(getCookie('totalPrice', context));
//     return price;
//   } catch (error) {
//     return 0;
//   }
// };
// export const getSubTotalPrice = (context: any) => {
//   try {
//     const price = JSON.parse(getCookie('subTotalPrice', context));
//     return price;
//   } catch (error) {
//     return 0;
//   }
// };
// export const getDiscount = (context: any) => {
//   try {
//     const discount = getCookie('discount', context);
//     return discount || 0;
//   } catch (error) {
//     return 0;
//   }
// };
// export const getCoupon = (context: any) => {
//   try {
//     const coupon = JSON.parse(getCookie('coupon', context));
//     return coupon;
//   } catch (error) {
//     return {
//       id: 0,
//       code: 'DEFAULT_COUPON',
//       discountInPercent: 0,
//     };
//   }
// };

const findProductIndex = (cartProducts, dataId) => {
  let index = -1;

  if (cartProducts && cartProducts.length) {
    index = cartProducts.findIndex(product => product.id === dataId);
  }

  return index;
};
const getProductQuantity = (cartProducts, index) => {
  let quantity = 0;

  if (index !== -1) {
    quantity = cartProducts[index].quantity;
  }

  return quantity;
};
const calculateItemPrice = product => {
  const quantity = product.quantity ? product.quantity : 1;
  const price = product.salePrice ? product.salePrice : product.price;
  const itemPrice = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(quantity).multiply(price);
  const itemPriceValue = Number(itemPrice.value);
  return itemPriceValue;
};
const calculateTotalPrice = products => {
  let total = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(0);
  products.forEach(product => {
    const quantity = product.quantity ? product.quantity : 1;
    const price = product.salePrice ? product.salePrice : product.price;
    const itemPrice = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(quantity).multiply(price);
    total = currency_js__WEBPACK_IMPORTED_MODULE_0___default()(total).add(itemPrice);
  });
  const totalPrice = Number(total.value);
  return totalPrice;
};
const modifyaddressData = (data, disabled = false) => {
  let radioData = [];
  data.forEach(item => {
    radioData.push({
      id: item.id,
      title: item.name,
      value: `${item.name}-${item.id}`,
      label: item.info,
      disabled
    });
  });
  return radioData;
};
const modifyContactData = (data, disabled = false) => {
  let radioData = [];
  data.forEach(item => {
    radioData.push({
      id: item.id,
      title: item.type === 'primary' ? 'Primary' : 'Secondary',
      value: `${item.number}-${item.id}`,
      label: item.number,
      disabled
    });
  });
  return radioData;
};
const modifyCardData = (data, disabled = false, mobileWallet = true, cashOnDelivery = true) => {
  let cardData = [];
  data.forEach(item => {
    cardData.push({
      id: item.id,
      type: item.type,
      cardNumber: item.lastFourDigit,
      cardName: item.name,
      disabled
    });
  });
  const paymentOptionData = {
    showCard: true,
    mobileWallet: mobileWallet,
    cashOnDelivery: cashOnDelivery,
    addedCard: cardData
  };
  return paymentOptionData;
};
const cartAnimation = event => {
  const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;
  }; // start animation block


  let imgtodrag = getClosest(event.target, '.product-card'); // console.log(imgtodrag, 'Image To Drag');

  let viewcart = document.getElementsByClassName('product-cart')[0];
  let imgtodragImage = imgtodrag.querySelector('.product-image'); // console.log(imgtodragImage, 'imgtodragImage Drag');

  let disLeft = imgtodrag.getBoundingClientRect().left;
  let disTop = imgtodrag.getBoundingClientRect().top;
  let cartleft = viewcart.getBoundingClientRect().left;
  let carttop = viewcart.getBoundingClientRect().top;
  let image = imgtodragImage.cloneNode(true);
  image.style = 'z-index: 11111; width: 100px;opacity:1; position:fixed; top:' + disTop + 'px;left:' + disLeft + 'px;transition: left 1s, top 1s, width 1s, opacity 1s cubic-bezier(1, 1, 1, 1);border-radius: 50px; overflow: hidden; box-shadow: 0 21px 36px rgba(0,0,0,0.1)';
  var rechange = document.body.appendChild(image);
  setTimeout(function () {
    image.style.left = cartleft + 'px';
    image.style.top = carttop + 'px';
    image.style.width = '40px';
    image.style.opacity = '0';
  }, 200);
  setTimeout(function () {
    rechange.parentNode.removeChild(rechange);
  }, 1000); // End Animation Block
};

/***/ }),

/***/ "./image/logo.svg":
/*!************************!*\
  !*** ./image/logo.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuMTI0IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTA5LjEyNCAxOCI+CiAgPGcgaWQ9Ikdyb3VwXzI4MjkiIGRhdGEtbmFtZT0iR3JvdXAgMjgyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgyIC0zODguODQ4KSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjkwIiBkYXRhLW5hbWU9IlBhdGggMjY5MCIgZD0iTS0xODIsMzk3bDIuMDcyLjAyNmMxLjc0Mi4wMjEsMy40OTEtLjA1MSw1LjIyNC4wODVhNS4yLDUuMiwwLDAsMSw0LjgsNC4xNjEsNS4yMjIsNS4yMjIsMCwwLDEtNC40MjMsNi40ODQsMjEuNjYyLDIxLjY2MiwwLDAsMS0zLjQyMi4xMTdjLS4zOTMsMC0uNDg2LjEyNC0uNDgyLjUuMDE5LDEuNy4wMDgsMy40MDYuMDA4LDUuMTA5di41MzRILTE4MlptMy44MzIsNy42NjljLjQ3LDAsLjkuMDE3LDEuMzE4LDBhMTAuNDQ5LDEwLjQ0OSwwLDAsMCwxLjc4MS0uMTUzLDEuOTQ0LDEuOTQ0LDAsMCwwLDEuNTI3LTEuOTUsMS45NzQsMS45NzQsMCwwLDAtMS4yOTMtMi4wNCwxMC43NDgsMTAuNzQ4LDAsMCwwLTMuMzMyLS4yMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC03LjUpIiBmaWxsPSIjMGQxMTM2Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjkxIiBkYXRhLW5hbWU9IlBhdGggMjY5MSIgZD0iTTEwOTYuOTc0LDQ2NC4wMzhhNC4yNjksNC4yNjksMCwwLDAtMi4wMTMtLjAxOSwyLjUyMSwyLjUyMSwwLDAsMC0xLjksMi40MzFjLS4wNjksMS43NDEtLjA0NywzLjQ4NS0uMDYzLDUuMjI3LDAsLjIsMCwuNCwwLC42MjdoLTMuNTgxVjQ2MC40ODJoMy40NjZ2MS40MjVhMy4yNjYsMy4yNjYsMCwwLDEsMi4zNDktMS40NzcsMTAuOTQ2LDEwLjk0NiwwLDAsMSwxLjc0LjAxM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY5Ljg1IC02NS44MykiIGZpbGw9IiMwMDhkNzEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2OTIiIGRhdGEtbmFtZT0iUGF0aCAyNjkyIiBkPSJNNDI5LjE1MSwzOTcuMjdjLjIsMCwuMzU4LDAsLjUxNiwwLDIuMjM2LjAyLDQuNDc4LS4wNjQsNi43LjA4OWE0LjQxMiw0LjQxMiwwLDAsMSw0LjI4MywzLjU4NSwzLjg3NiwzLjg3NiwwLDAsMS0yLjE4Miw0LjQyNS40LjQsMCwwLDAtLjA4OS4wNiwxMS4wMjgsMTEuMDI4LDAsMCwxLDEuNTE1LjkyOSw0LjMzOSw0LjMzOSwwLDAsMSwuNzY0LDUuNDMxLDQuNzYxLDQuNzYxLDAsMCwxLTQuMTk1LDIuNDI1Yy0yLjM5My4wODQtNC43OTEuMDI3LTcuMTg3LjAzYS41NDYuNTQ2LDAsMCwxLS4xMy0uMDM4Wm0zLjY2MywxMy45Yy43MjcsMCwxLjQxNiwwLDIuMSwwYTcuMDgzLDcuMDgzLDAsMCwwLC44LS4wMzMsMS45MzIsMS45MzIsMCwwLDAsMS44MS0xLjgsMS44MTYsMS44MTYsMCwwLDAtMS40MDYtMmMtMS4wNzgtLjE2NC0yLjE4NC0uMTU1LTMuMzA1LS4yMjJabTAtNy4xYy43NTksMCwxLjQ4OC4wMTksMi4yMTYtLjAwOWEzLjExOSwzLjExOSwwLDAsMCwuOTMtLjE5MywxLjY1LDEuNjUsMCwwLDAsMS4wOTItMS42ODUsMS41NjcsMS41NjcsMCwwLDAtMS4yMS0xLjYzNGMtLjk4Ny0uMTYtMi0uMTU5LTMuMDI4LS4yMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYyLjMyOCAtNy43NDQpIiBmaWxsPSIjMDA4ZDcxIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjkzIiBkYXRhLW5hbWU9IlBhdGggMjY5MyIgZD0iTTI1Ny4xNDYsNDAyLjY1NmMuODQ4LS45MzUsMS43NjEtMS44MiwyLjUyNS0yLjgxOWEyLjU0OCwyLjU0OCwwLDAsMSwyLjUtMS4xMTRjMS4wMjUuMSwyLjA2Ni4wMjEsMy4yMDguMDIxbC00LjYzNCw0Ljk4Miw0LjczNCw2LjljLTEuMywwLTIuNTE5LS4wMy0zLjczNy4wMTRhMS4wNjksMS4wNjksMCwwLDEtMS4wOC0uNTc3Yy0uNzY0LTEuMjE0LTEuNTgzLTIuMzkzLTIuNDE2LTMuNjM5LS40LjQzNi0uNzgxLjgzNi0xLjEzOCwxLjI1OC0uMDcxLjA4NC0uMDU4LjI1Mi0uMDU5LjM4MiwwLC44MzcsMCwxLjY3MywwLDIuNTM2aC0zLjU2N1YzOTMuMzI4aDMuNTU0djkuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjg4IC00LjEyMikiIGZpbGw9IiMwZDExMzYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2OTQiIGRhdGEtbmFtZT0iUGF0aCAyNjk0IiBkPSJNNjEzLjU1OCw0NjguODA4aC0zLjE5NWwtLjEyNi0xLjE3NGExMi40MywxMi40MywwLDAsMS0xLjE4NS45NjhjLTEuNDEuOS00LjQ1OS44NzMtNS43NTctMS4yMzVhMy40NDUsMy40NDUsMCwwLDEsMi4zMjktNS4yMjhjMS4wNjktLjI1OCwyLjE3MS0uMzg0LDMuMjU3LS41Ny4wOTItLjAxNi4xODMtLjAzMy4yNzUtLjA0N2EuODA5LjgwOSwwLDAsMCwuNzcxLS41ODcsMS4wMTgsMS4wMTgsMCwwLDAtLjI5NS0xLjAyMywyLjA3MywyLjA3MywwLDAsMC0yLjA4NS0uNDI4LDEuODExLDEuODExLDAsMCwwLTEuMzM4LDEuMzQ1Yy0uMDE2LjA1LS4wMTMuMTA2LS4wMjYuMTU3YTEuMTQyLDEuMTQyLDAsMCwxLS4wNjMuMTQzYy0uNTEzLS4xLTEuMDMtLjItMS41NDctLjNzLTEuMDExLS4yMDktMS41NDYtLjMyMWEzLjY5LDMuNjksMCwwLDEsLjg1OS0yLjA3NSw0Ljc4OSw0Ljc4OSwwLDAsMSwyLjgyMy0xLjY3OCw3LjIzLDcuMjMsMCwwLDEsNC4xMjIuMjY0LDMuOSwzLjksMCwwLDEsMi42MjksMy43ODFjLjA1OSwxLjY0OC4wMSwzLjMuMDI0LDQuOTVDNjEzLjQ5NCw0NjYuNzU3LDYxMy41MzIsNDY3Ljc2Niw2MTMuNTU4LDQ2OC44MDhabS0zLjYxLTUuMTc2Yy0uNDIzLjA2My0uODIuMS0xLjIwNy4xODVhMTQuNjg4LDE0LjY4OCwwLDAsMC0xLjgzNy40NjhjLS40NDkuMTYxLS41NTcuNi0uNTQ4LDEuMDU5YTEuMTMxLDEuMTMxLDAsMCwwLC41ODUsMS4wMjEsMi4yMzUsMi4yMzUsMCwwLDAsMi42NTgtLjcxOUEzLjE3OCwzLjE3OCwwLDAsMCw2MDkuOTQ4LDQ2My42MzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzIyLjA2NSAtNjIuMzE2KSIgZmlsbD0iIzAwOGQ3MSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMjY5NSIgZGF0YS1uYW1lPSJQYXRoIDI2OTUiIGQ9Ik05MjcuMDE0LDQ2OC4zNzloLTMuMmMtLjA0MS0uNC0uMDgxLS43OTQtLjEyNS0xLjIyOGEuODYyLjg2MiwwLDAsMC0uMTU0LjEyOWMtMS4zNDUsMS45MzQtNC45MTgsMS44NjktNi40MTcuMTU4YTMuNDIzLDMuNDIzLDAsMCwxLDEuNDU3LTUuNTU0LDI5LjcyNCwyOS43MjQsMCwwLDEsMy4yMzYtLjY1NmMuMjc0LS4wNTMuNTUzLS4wODEuODI2LS4xMzhhLjg4OC44ODgsMCwwLDAsLjQ5LTEuNTYzLDIuMDI2LDIuMDI2LDAsMCwwLTIuMDMxLS40ODYsMS44LDEuOCwwLDAsMC0xLjQxMSwxLjMxNmMtLjAzNC4xLS4wNS4yLS4wODYuMzU5bC0zLjEyMy0uNjI5YTMuOTMxLDMuOTMxLDAsMCwxLDEuOTU0LTMuMDM1LDYuNTI3LDYuNTI3LDAsMCwxLDYuMzQzLS4yMjQsMy42NzUsMy42NzUsMCwwLDEsMi4xMzIsMy40MDljLjA2NCwxLjU4MS4wMjEsMy4xNjcuMDM3LDQuNzUxQzkyNi45NTgsNDY2LjEsOTI2Ljk5LDQ2Ny4yMTgsOTI3LjAxNCw0NjguMzc5Wm0tMy41NDUtNS4xODJjLS44LjEyNS0xLjUuMjEzLTIuMTg3LjM0OWEzLjU2MSwzLjU2MSwwLDAsMC0uOTY2LjM0LDEuMDQ3LDEuMDQ3LDAsMCwwLS41LDEuMDkyLDEuMTE0LDEuMTE0LDAsMCwwLC42MzUuOTksMi4xLDIuMSwwLDAsMCwyLjg1My0xLjNBMTAuNzgyLDEwLjc4MiwwLDAsMCw5MjMuNDY5LDQ2My4yWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMTAuNTA1IC02MS44OTIpIiBmaWxsPSIjMDA4ZDcxIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjk2IiBkYXRhLW5hbWU9IlBhdGggMjY5NiIgZD0iTTg1LjgyOCw0NjAuOWwtMy4wNTguOTE4YTcuMDIzLDcuMDIzLDAsMCwwLTEuMDA3LTEuMjI3LDIuNjUzLDIuNjUzLDAsMCwwLTQuMTQ3LDEuNTc4LDQuNjQ5LDQuNjQ5LDAsMCwwLS4wMDYsMS43NzMsMi41NjEsMi41NjEsMCwwLDAsMi4yMjIsMi4wNTIsMi41LDIuNSwwLDAsMCwyLjgzLTEuNDQ0Yy4wNTMtLjEuMjQzLS4yMjYuMzMtLjIuOTY5LjI3NiwxLjkzMS41NzksMi45NTYuODk0YTcuNzczLDcuNzczLDAsMCwxLS4yOC43OTIsNS41NzYsNS41NzYsMCwwLDEtNS4yNTMsMy4zMiw2LjI4Nyw2LjI4NywwLDEsMS0uMTYzLTEyLjU2OSw1Ljc1Myw1Ljc1MywwLDAsMSw0LjYzOCwyLjA4NUE0LjYyNSw0LjYyNSwwLDAsMSw4NS44MjgsNDYwLjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM1LjQ2MSAtNjIuNTA4KSIgZmlsbD0iIzBkMTEzNiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMjY5NyIgZGF0YS1uYW1lPSJQYXRoIDI2OTciIGQ9Ik03NjYuNjE5LDQ2MS4zNTRoOS42NzRjLjAwNi4xMjYuMDE4LjI1Mi4wMTguMzc5LDAsLjYzOS0uMDM4LDEuMjgxLjAxMywxLjkxNmExLjQyNCwxLjQyNCwwLDAsMS0uNDgzLDEuMTg1Yy0xLjU3MiwxLjYyNy0zLjEyMywzLjI3NC00LjY4MSw0LjkxNC0uMDg4LjA5My0uMTY5LjE5Mi0uMzA3LjM1MWg1LjUxOXYzLjFoLTkuOWMtLjAxLS4xNS0uMDI2LS4yOTEtLjAyNi0uNDMyLDAtLjczMi4wMjItMS40NjUtLjAxLTIuMmExLjI0MSwxLjI0MSwwLDAsMSwuNC0uOTgzYzEuNTI2LTEuNiwzLjAzNi0zLjIwOSw0LjU1MS00LjgxNy4wOC0uMDg1LjE1NS0uMTc1LjI3OS0uMzE3aC01LjA1M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NzIuNjcyIC02Ni43MTQpIiBmaWxsPSIjMDA4ZDcxIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjk4IiBkYXRhLW5hbWU9IlBhdGggMjY5OCIgZD0iTS0uNyw0NzMuMzNWNDYxLjUwOUgyLjg2N1Y0NzMuMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY2LjgxNSAtNjYuODU2KSIgZmlsbD0iIzBkMTEzNiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMjY5OSIgZGF0YS1uYW1lPSJQYXRoIDI2OTkiIGQ9Ik0tLjUxOSwzOTAuOTg2YTIuMSwyLjEsMCwwLDEtMi4xNDgsMi4xLDIuMTM5LDIuMTM5LDAsMCwxLTIuMDc4LTIuMTQsMi4xNDEsMi4xNDEsMCwwLDEsMi4xMjYtMi4wOTNBMi4wODIsMi4wODIsMCwwLDEtLjUxOSwzOTAuOTg2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2My4wOTUpIiBmaWxsPSIjMDA4ZDcxIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./image/user.jpg":
/*!************************!*\
  !*** ./image/user.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH3QAMAAQAAQAQAC5hY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIAIAAgAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwgCAQD/xAA7EAACAQMDAwEFBgQFBAMAAAABAgMABBEFBiESMUFRBxMiYXEUMoGRobEVI0LBFiQzctElQ2LwNFLh/8QAGgEAAgMBAQAAAAAAAAAAAAAABAUBAgMABv/EACcRAAICAQQCAgICAwAAAAAAAAECABEDBBIhMRNBIlEFgWGhFLHB/9oADAMBAAIRAxEAPwDoTe+l232yKeOLpkb77DzQ/TNDTUD1NIUReD0jk0ybt5KL6Amhuk3ItLGVyfp9aSk0TUaAWojRpttFa2kcEJIVBgZq4oOOBn8KRIdavFcssnGe1M8FpbapaxzX8Cz5GQr5Kj8O1EIa4mLD3CvI7gj6ikfee4dv6deHGo9OoqOkrbnLD/cew/Gkb237t0rblrJp+3pJdNuw6pc3NtKyqiH7yhM9LNjjkcZrGNK1SCeAyWc7LGxDySySFmP/AJHJOTkefWrXL48W4XNk1P2qM8ptYyJpIyQeuYE8DvgfT8Kzvcm5Nxa/Ok010IoAHYF0LdOeB0rkDtzmll9Y0qFjc+6EkgzIZJOXJIOOeO+aHXW4pH6Y5HMk7Dq9ygHn1P8ASB/apAJM3XHQj3oW6NT0yWKWHV7pBAp6VBUI/Ynr4+LPnzmtY2p7V9IljNvfExyLIFLDAznucDjOT2GPpXN32y+NsJGUOcg4Jwi/+RJ74r1ZajZ29xJLHcQvdAZX3ecn0BxnioIF0JJxXyZ2vp2pWl/aRXFtPHJHJ90qe9V9b0W11OLLKI5h9117iuYNg7+TQtVi1COYzxRhi8fUwVlYEHvxnz+FdDbD3ppu5IFi+1Wy3nQJRErYZ4z2bpPIxwCPH41mA3uYOhQ3AGoWl3ps3urxfhzhJB2NR9ZBHNaVeWdvdwGG4jV1b5Uhbl0WfR83EHVLa5yR5Wrbq7lRzIYpyD34q1HOp85oJb3UUg6kOT6eanWcg1PBlrIjvubBlbPhaBray3NmUibpPeiWr3iXNzcqh4Q4r5pbCK0aRzgDNCE9kTRR0DFcx3FvOYyc4NNGs68mlbFudR94Ekji6U9S54GBQO5lWW5dwByeKXfbEl5J7LrmWzjBeK4TL4OVUnBxz5JHrW/QEqFs1MG3bcW9ze3FxO8bXbXBZGY9fXkDAxnjHf8AEUQi2zfHb6sQ3U/Ljp78c0vbB0mXWN22kFyoMMEpkKAfD3zk+tdFmzhWNUKLgDtiuc18QYdiUVdTmHWtO1CzMmYmCEEAgHvS6j6rIfdW6mEE8DgM5HqfNdQ6npFlcI6NChRh90jile82pYnkQqoXkYWqrqXXgi4QdMj8k1MRsluZCTey3BJ7DqI/UVPcR3KRmCKRwreFiIY+mW7nHzrUm2vazpJmMDLf/oP61F/hXrUoY2Y9gwHNcNQd3Us2nTb3ELbEU8bGyYmVOD1N2B+vy5p425uX+HW97DHHi4I97FIn+pbMuSHjx905yCOxycg5qPUNrXenaVcy26qrpGSUxyy+fpQ/ZIje/SSOJTlsPER1A48AjnnPY+vetwS3JEBy41UUDOxtlawuvbU0zWgU/wA1bLIxUEL1YwcZ8ZBqDdOrWaWUlt8MrsCCPApdt72LTdCtNK04CG2t4ggA475J/UmiWzpdCnEz6jNC8+cBJCO1ZIpyttECasQ3GKscEaxAiMKfUV4YgVo9htrQ5G960omViSqCTCgeBxRu10bSrYD3Njbr8+kE1uNKx7MyOqX0IlX1t7qSWZcgSHJqlfymKyVA+Ax7Vat9QTUNIjkyC5FD9bjBgjOTk0GqkKQYYWBYESl1YAqDeZ977ONYt5JCg6VII/3Af3q3aWzNae86hlT2NCN+ySf4D1eGNcOYgwPphgT+mam7E4CiJmfsq06G11h/drnoBy57kmtNuS3V9BzSd7KLQyxXV8w+AN0KfXzTbeyJGMkgZ9aobq4wxC2qUpkcg1RmUnPGauPdRtwMfhVO8BkTpWcxKe5AyaxBMMCgwVppDpLJj4PfsoJ+XGfpRSGPBxgVHDBFFEkSAIgGFFTpbQcB2Ygf09ZxWmMtcq6gCe4bZLwTo6howhU/P1FZh7M9Bkst5fEC1sGcvzn4lbK/pWxWEA92wjAC9JUAeKUduRpDqV4yRBZA7B2PrnH7CmaA7LMS6h6bbL+5dU1l9QWG1QR2o++3k/Sq9tJKAXy5fHc0ThjaSctMy9HjmrgW1X7oX96FHx6mRx2bJmd3u6NyaffSCKC76Fb4SpNSR+1/c8Mo65b3qwBliafZktmGSiH8KHXdhYyKS1uhP0qd23mpPiDccQ7sS+lukZHY9KHCii+6r42jQjGVNLXstBe3uGP9MmP0opvZszQr6VpqB2Zhg9COm27eJ9HLTdOXGQKzjdJur671nS1kkWIRNEFBx47/AI5opZbigtrZI2uCCo7ZoRrdx9uea4s34uGVHYd88gn9RQufHsUOsafjcgbKyNRNcSrslG0/2e28q8Szl2BYec4/YVmm+9walJdzxxXtw7wnDi1h6gmTgDqJAznwK17bUCT7N06Jj1qkRXPqQSKH6npdqYDELePpHjp4qj8kH1CsJC2a5mCaDr+40uveLqt6IGkEfXNCrJk8gcHvW0bba9vNPSSdkZwOWXsTVH/C0EjALDGgBzgIMflTXpViLPTiDwerNYOCzWOBDVZdoXszPd/a/qOgIyxNArkfAXBP6CkSw3ruK+nydTtoyG6cMjIufrjFa7vfbx1N4plVCVww6lzyO340uaLs+CHVBdGHpkwR1KcjB7jB47E+PNGYkCmmg+TJuQFasdxk9l2s6vcSpb6nEjo4/lzRtkVY0zSxc6tqgEwRZLtkx1YIwxohtPQbTSLhY9OVo4S3UIy2Qh+Wewqhcq5v1eEqM6rLK+O2FORn8qMV2x4xfJuLW06ajMRdCif6jIuyIyg6bydeP/vXhtkyKPh1Cf8AOov45fxsql8g+a+3O5LxMe7YNTrwIfU8p5n+58k2Xe4IXUpKibaOqKMLfkj5rU9puS/dyGA7UcsNTmmtg7Ac1H+NjPoSTqMg9mKnsiYnT7knzMaKbwfqvEHyoF7IHZtOuOf+81GtzMv8STq7Ac0ky8gmOsYoiImpabqbyvNBIFU9gRRvY4uIrC6t78L1D4kYnuCRkfpTbBqm2GtVhkdA4GDVKWDQ58/Z7xRnwGqrY2ZdtzsOoGLLvqV9mSn+Ay24bPuLuWMN4Izn+9WL0gseeBQvaTxQJq1mgK+7vnxnzkDmvmtXgiQ5I+tAZm2LH+lIf9ya1uka9WCPDOe9FrshIVUjluTSSNTsLKFrp7xUfnBVh1Z9BVOD2h2NzbgO7l046mGMgeayxZLXmGeIlvjHu8dEtElYYU/CT6VSEKs4deCfI80I0zcdtrdk0VrcB4xwwxjOaKaZIcBGOfrTBnsgQEJW4n7hBboWNnPc9OTFGSAO5PYD8yKBC3eztxFIcyO3Uxz5PJq5uqZLTT7dXBPXOrMB5C8/viqmpXEl4Y5o1ClsEZ8UUmMkrcWZtSER67PH6nt/vDJz9atQw20idTuF+VfdM0b3wEt7eKFPgGjsNpt21h6ZLhD8ya7x5CeT/cXeTGBwIuypFGcwtkYq7YXVwIFVMdNGtJ0bQNQlmdLtAqjnDUyaJsrR5tPjl9+7dXOVbirpiyXdyrZMZ9TBNC3NZ7atZLayj1G6aRy7SmFFUfTLUL3B7QNTV3uI4b5yFyEaOE5+XDZpGt9caZWjkcCaLhucda+v1r9PqcMsXT7xli8HPMZ/4q3xjRcKiGod/T32nvcXKCKTqKmOKJpOg+M8dvX0ottb2g6DEizXUDI68P0sWTPyb/msl1KZrbUGweiOXhgrfr/ehD38jxNDIf5jz4YgYyBgVO1WHIkMig8zfLfdkKbglvYiYrO/T3sfWMZI4Jx8gK87q3DJqSx29j1EsuRjs2Tj60D3LodzP7ItOv7IM17Zq8/SBy0Tdx68AK2PrSV7PtzyQXsZmHWC+ASOc+MUl1eLdbJ6MZ6TIqOFP6jlc6RqKwL9ss53kz1K0RDDp9MeKCPpVrJOlxJqBheMkNE64x8ua2AajavYJIY+tWUHHkH1pavNxaM16IpR1sCMB4gcZ480NhKkdx1iy4yPksU9DnewuzJHde7HIBCMev8AL/3zWjbI1eS5SRp3JIYHJ4J54OKmsW02WETEA/Dwen4QPl6Ujb/3FZ7duRFZABrjJYqe+OOaLVLcBTcV6rJjo1xHfdG69HN8LS+u/dhYiFKoWAYnzjtxXm7vIb/SIxpmoW0kgHH80J++KwKXVpbzUWuJGyuQMfIURt77M0SZ+EvyPWnafGogbTLkBN9zXdunXYb2SHUzIIx9znqVvofNRbwTUHsWNr19RbwaAbT3i7SJEZOtDnKv2wOKcJmvL2H3ln0yQuMjjkfI1ouIM1k0DAM+A4VG0XBm1RrFlbyObh0V1HUM96ebTXNYg0GM2l/IjBeATSe1lqhjCkEDzgVKiakkSxhgAvirHxpwrAzP5PyVM59ur1op45g7Kx+FsH8q/fbSD3yG8Y5B80KZve28kTnDr2z3qBZyVU8jjqOfXsaHqN/IRCGoXJltjkHqjOB/t8UMd/8ANxv2zhsZ81OzEuy9ywIzVCVvgB7dLcmuEjI3udYaJIg25YRxkFVtYwPQ/CKwf2haFdbU3Ct/aL/064mMkbD/ALT+UPoOeK0b2U7gTU9pW0XWDNar7mRfIx2P4jFH9ZsrPUtOnsr2ESQTKVZfr5Fee87YcxDDj3HXgGXECp57EWNA3lp89lDazADqTLc4wMdvlVcX2nz6mZ/dxhQQqgDgfj9KQtx7G3BoM3v9Kf8AiNqT8Ij4dR6FfP4UHFxuhZ0sjpl975uET3DdXPbxWo0aObxNITXNiFZVIM2XU9xRWmjzx2YSEqhPxNxWR6rqp1DV7eeR+pyhYEk/Pn/30ph07aut/wALuNY3cpsNLtYnleDrHvZ+OFwM9OTgZ+fFZ5DKW1zrKhMu3wqOFGOw+VNNHgGIfZivV6g5SOKEJWkuF5bn0ohps+LiLBJw7nOfRaDW74x1YH41Y0+cxzEj+kSEc/ICi5krxh25dFbuSQnAhgY9/JraPZZroiSSCQCTKDhj5xmsD0eTCzM3aRgp+g5/4p92XfGO4tQrfFc3KqMH+ktj9ga17xlR/MqafubyNYtWTpa1U59CKH3UdlNIZA00WfC9qW7SzdL1lEsmM8DqqTVPtSTL7mcxgADAGcmvMLqswBY+oS2mxWB9zmaSVeqO4j6Rk4I9PlUKEe8kXOByR+IP9xX6Zslu3S+M+Ok+DVdH/nxnHPYj5g16KAs3PMuRvwpx4xyaqSgZlQ+eRU0ZLL3x3HAqKdf8xg55GP0qakE8QnsbcdztzVluYyWib4J488MPX61vml69Yajaxzwyr0svY8YrmQcsrj05oxpGs3+m/wDx5SYz3Unil+r0QzncODD9DrvCNj9f6nRU0gALIykeOa9WV6AxJRYwo5cmsQt996pEuB0kY7MOBVPVNz6xqi+6muWWJu6L8Kn8u9D6f8dkDAwzN+RwlaEZfbNvaPU4o9A0qTqtTKDPKO0hB7D5D18ms6tsjU1OeTKRX3Uhi4txnJByfzryg6btX7/zc5H1pwMYQUIkdy72ZaT4TnH9R5r1E5CzMOAFYftUZP8AqYGSGP7146v5cqjt1YJ/LP7VMkkQhaSlIkiBILn96dNm3Cya7pkecrGWmPnCrwv5kk0gwMHlUkkD5eBTxsND7+S9fhpCEj+SL/ya2xJuMkH6m4WjK123T9a8XvSZnDc4IxUOizB1E5YAMg81TvLlX1L4JA3ODg15TU4/GHU/f/Yxx/JlP8T/2Q=="

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtendedApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./theme/index.ts");
/* harmony import */ var contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/cart/cart.provider */ "./contexts/cart/cart.provider.tsx");
/* harmony import */ var contexts_auth_auth_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/auth/auth.provider */ "./contexts/auth/auth.provider.tsx");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/app/app.provider */ "./contexts/app/app.provider.ts");
/* harmony import */ var contexts_search_search_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/search/search.provider */ "./contexts/search/search.provider.tsx");
/* harmony import */ var contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/language/language.provider */ "./contexts/language/language.provider.js");
/* harmony import */ var containers_LayoutContainer_AppLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/LayoutContainer/AppLayout */ "./containers/LayoutContainer/AppLayout.tsx");
/* harmony import */ var helper_useDeviceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helper/useDeviceType */ "./helper/useDeviceType.ts");
/* harmony import */ var data_translation_en_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! data/translation/en.json */ "./data/translation/en.json");
var data_translation_en_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/translation/en.json */ "./data/translation/en.json", 1);
/* harmony import */ var data_translation_ar_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! data/translation/ar.json */ "./data/translation/ar.json");
var data_translation_ar_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/translation/ar.json */ "./data/translation/ar.json", 1);
/* harmony import */ var data_translation_es_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! data/translation/es.json */ "./data/translation/es.json");
var data_translation_es_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/translation/es.json */ "./data/translation/es.json", 1);
/* harmony import */ var data_translation_de_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! data/translation/de.json */ "./data/translation/de.json");
var data_translation_de_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/translation/de.json */ "./data/translation/de.json", 1);
/* harmony import */ var data_translation_zh_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! data/translation/zh.json */ "./data/translation/zh.json");
var data_translation_zh_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/translation/zh.json */ "./data/translation/zh.json", 1);
/* harmony import */ var data_translation_he_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! data/translation/he.json */ "./data/translation/he.json");
var data_translation_he_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/translation/he.json */ "./data/translation/he.json", 1);
/* harmony import */ var rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rc-table/assets/index.css */ "../node_modules/rc-table/assets/index.css");
/* harmony import */ var rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(rc_table_assets_index_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rc-collapse/assets/index.css */ "../node_modules/rc-collapse/assets/index.css");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "../node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @redq/reuse-modal/lib/index.css */ "../node_modules/@redq/reuse-modal/lib/index.css");
/* harmony import */ var _redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal_lib_index_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var styled_global_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! styled/global.style */ "./styled/global.style.tsx");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











 // Language translation files






 // External CSS import here





 // Language translation Config

const messages = {
  en: data_translation_en_json__WEBPACK_IMPORTED_MODULE_11__,
  ar: data_translation_ar_json__WEBPACK_IMPORTED_MODULE_12__,
  es: data_translation_es_json__WEBPACK_IMPORTED_MODULE_13__,
  de: data_translation_de_json__WEBPACK_IMPORTED_MODULE_14__,
  zh: data_translation_zh_json__WEBPACK_IMPORTED_MODULE_15__,
  he: data_translation_he_json__WEBPACK_IMPORTED_MODULE_16__
};
function ExtendedApp({
  Component,
  pageProps,
  query,
  userAgent
}) {
  const deviceType = Object(helper_useDeviceType__WEBPACK_IMPORTED_MODULE_10__["useDeviceType"])(userAgent);
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_3__["theme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    messages: messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_4__["CartProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(contexts_search_search_provider__WEBPACK_IMPORTED_MODULE_7__["SearchProvider"], {
    query: query,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__["StickyProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(contexts_auth_auth_provider__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(containers_LayoutContainer_AppLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deviceType: deviceType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(Component, _extends({}, pageProps, {
    deviceType: deviceType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx(styled_global_style__WEBPACK_IMPORTED_MODULE_21__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))))))));
}

ExtendedApp.getInitialProps = async appContext => {
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext);
  const {
    req,
    query
  } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return _objectSpread({}, appProps, {
    userAgent,
    query
  });
};

/***/ }),

/***/ "./styled/global.style.tsx":
/*!*********************************!*\
  !*** ./styled/global.style.tsx ***!
  \*********************************/
/*! exports provided: InjectRTL, GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectRTL", function() { return InjectRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const TIMEOUT = 400;
const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalstyle__InjectRTL",
  componentId: "sc-1nj0ybi-0"
})(["", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;
    `);
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif')};
  }

  h1,h2,h3,h4,h5,h6  {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif')};
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  .quick-view-overlay{
    background-color: rgba(0,0,0,.5)
  }

  .add-address-modal,
  .add-contact-modal{
    box-shadow: 0 10px 40px rgba(0,0,0,0.16);
    border-radius: 3px !important;
    .innerRndComponent{
      width: 100%;
      padding: 30px;
      height: auto;
      background-color: #f7f8f9;
      border: 0;
      box-sizing: border-box;
    }
  }

  .search-modal-mobile{
    transform: none!important;
    max-width: none!important;
    max-height: none!important;
    top: 0!important;
    left: 0!important;
    background: transparent;
    border-radius: 0!important;
  }


  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }

  .image-item{
    padding: 0 15px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    .image-item{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    .image-item{
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }

  .rc-table-fixed-header .rc-table-scroll .rc-table-header{
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;

    th {
      padding: 8px 20px;
      }
  }

  .drawer-content-wrapper{
    *:focus {
      outline: none;
    }
  }

  .rc-table-content{
    border: 0;
  }

`;

/***/ }),

/***/ "./theme/colors.ts":
/*!*************************!*\
  !*** ./theme/colors.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = {
  transparent: 'transparent',
  // 0
  white: '#ffffff',
  // 2
  darkBold: '#0D1136',
  // 3
  darkMedium: '#424561',
  // 3
  darkRegular: '#77798C',
  // 3
  darkLight: '#C2C3CC',
  // 3
  lightColor: '#F7F7F7',
  // 3
  lightMediumColor: '#F3F3F3',
  // 3
  lightDarkColor: '#E6E6E6',
  // 3
  labelColor: '#909090',
  // 4
  inactiveButton: '#b7dbdd',
  // 6
  borderColor: '#f1f1f1',
  // 7
  primary: '#009E7F',
  // 8
  primaryHover: '#019376',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#FBB979',
  // 12
  yellowHover: '#FFB369',
  // 13
  blue: '#2e70fa',
  // 13
  lightBg: '#f4f4f4',
  // 14
  switch: '#028489' // 15

};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./theme/colors.ts");

const theme = {
  breakpoints: ['32em', '48em', '64em'],
  space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  fontSizes: [10, 13, 15, 19, 21, 30, 45],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontFamily: ["'Lato', sans-serif", "'Poppins', sans-serif"],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 6, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 48, 50, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      textDecoration: 'none',
      height: 'auto',
      padding: 0,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].borderColor,
      borderRadius: '4px',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      transition: 'all 0.35s ease',
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary
      }
    },
    outlinedDash: {
      borderWidth: '1px',
      borderStyle: 'dashed',
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].borderColor,
      borderRadius: '4px',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      transition: 'all 0.35s ease',
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary
      }
    },
    outlinedFab: {
      borderWidth: '1px',
      borderStyle: 'solid',
      width: '50px',
      height: '50px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      'span.btn-icon': {
        paddingLeft: 0
      },
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    extendedOutlinedFab: {
      borderWidth: '1px',
      borderStyle: 'solid',
      minWidth: '50px',
      height: '50px',
      borderRadius: '50px',
      justifyContent: 'center',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      'span.btn-icon': {
        paddingLeft: 0
      },
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    fab: {
      border: '0',
      width: '50px',
      height: '50px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '50px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  },
  buttonSize: {
    small: {
      height: '38px',
      paddingLeft: '15px',
      paddingRight: '15px',
      fontSize: '14px',
      borderRadius: '6px'
    },
    medium: {
      height: '44px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontSize: '14px'
    }
  }
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "currency.js":
/*!******************************!*\
  !*** external "currency.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("currency.js");

/***/ }),

/***/ "mobile-detect":
/*!********************************!*\
  !*** external "mobile-detect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "stylis-plugin-rtl":
/*!************************************!*\
  !*** external "stylis-plugin-rtl" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map