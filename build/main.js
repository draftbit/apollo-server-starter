require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GraphQLError__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__GraphQLError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__syntaxError__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__syntaxError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locatedError__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__locatedError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__printError__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__printError__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatError__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__formatError__["a"]; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["N"] = isType;
/* harmony export (immutable) */ __webpack_exports__["u"] = assertType;
/* harmony export (immutable) */ __webpack_exports__["M"] = isScalarType;
/* harmony export (immutable) */ __webpack_exports__["t"] = assertScalarType;
/* harmony export (immutable) */ __webpack_exports__["K"] = isObjectType;
/* harmony export (immutable) */ __webpack_exports__["r"] = assertObjectType;
/* harmony export (immutable) */ __webpack_exports__["E"] = isInterfaceType;
/* harmony export (immutable) */ __webpack_exports__["l"] = assertInterfaceType;
/* harmony export (immutable) */ __webpack_exports__["O"] = isUnionType;
/* harmony export (immutable) */ __webpack_exports__["v"] = assertUnionType;
/* harmony export (immutable) */ __webpack_exports__["B"] = isEnumType;
/* harmony export (immutable) */ __webpack_exports__["i"] = assertEnumType;
/* harmony export (immutable) */ __webpack_exports__["C"] = isInputObjectType;
/* harmony export (immutable) */ __webpack_exports__["j"] = assertInputObjectType;
/* harmony export (immutable) */ __webpack_exports__["G"] = isListType;
/* harmony export (immutable) */ __webpack_exports__["n"] = assertListType;
/* harmony export (immutable) */ __webpack_exports__["I"] = isNonNullType;
/* harmony export (immutable) */ __webpack_exports__["p"] = assertNonNullType;
/* harmony export (immutable) */ __webpack_exports__["D"] = isInputType;
/* harmony export (immutable) */ __webpack_exports__["k"] = assertInputType;
/* harmony export (immutable) */ __webpack_exports__["L"] = isOutputType;
/* harmony export (immutable) */ __webpack_exports__["s"] = assertOutputType;
/* harmony export (immutable) */ __webpack_exports__["F"] = isLeafType;
/* harmony export (immutable) */ __webpack_exports__["m"] = assertLeafType;
/* harmony export (immutable) */ __webpack_exports__["A"] = isCompositeType;
/* harmony export (immutable) */ __webpack_exports__["h"] = assertCompositeType;
/* harmony export (immutable) */ __webpack_exports__["z"] = isAbstractType;
/* harmony export (immutable) */ __webpack_exports__["g"] = assertAbstractType;
/* harmony export (immutable) */ __webpack_exports__["P"] = isWrappingType;
/* harmony export (immutable) */ __webpack_exports__["w"] = assertWrappingType;
/* harmony export (immutable) */ __webpack_exports__["J"] = isNullableType;
/* harmony export (immutable) */ __webpack_exports__["q"] = assertNullableType;
/* harmony export (immutable) */ __webpack_exports__["y"] = getNullableType;
/* harmony export (immutable) */ __webpack_exports__["H"] = isNamedType;
/* harmony export (immutable) */ __webpack_exports__["o"] = assertNamedType;
/* harmony export (immutable) */ __webpack_exports__["x"] = getNamedType;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GraphQLScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphQLObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GraphQLInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GraphQLUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphQLEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GraphQLInputObjectType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_valueFromASTUntyped__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wrappers__ = __webpack_require__(6);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */










// Predicates & Assertions

/**
 * These are all of the possible kinds of types.
 */


function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}

function assertType(type) {
  !isType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL type.') : void 0;
  return type;
}

/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, GraphQLScalarType);
}

function assertScalarType(type) {
  !isScalarType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Scalar type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, GraphQLObjectType);
}

function assertObjectType(type) {
  !isObjectType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Object type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, GraphQLInterfaceType);
}

function assertInterfaceType(type) {
  !isInterfaceType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Interface type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, GraphQLUnionType);
}

function assertUnionType(type) {
  !isUnionType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Union type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, GraphQLEnumType);
}

function assertEnumType(type) {
  !isEnumType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Enum type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, GraphQLInputObjectType);
}

function assertInputObjectType(type) {
  !isInputObjectType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Input Object type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isListType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, __WEBPACK_IMPORTED_MODULE_5__wrappers__["a" /* GraphQLList */]);
}

function assertListType(type) {
  !isListType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL List type.') : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_instanceOf__["a" /* default */])(type, __WEBPACK_IMPORTED_MODULE_5__wrappers__["b" /* GraphQLNonNull */]);
}

function assertNonNullType(type) {
  !isNonNullType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL Non-Null type.') : void 0;
  return type;
}

/**
 * These types may be used as input types for arguments and directives.
 */


function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}

function assertInputType(type) {
  !isInputType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL input type.') : void 0;
  return type;
}

/**
 * These types may be used as output types as the result of fields.
 */


function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}

function assertOutputType(type) {
  !isOutputType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL output type.') : void 0;
  return type;
}

/**
 * These types may describe types which may be leaf values.
 */


function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}

function assertLeafType(type) {
  !isLeafType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL leaf type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */


function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}

function assertCompositeType(type) {
  !isCompositeType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL composite type.') : void 0;
  return type;
}

/**
 * These types may describe the parent context of a selection set.
 */


function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}

function assertAbstractType(type) {
  !isAbstractType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL abstract type.') : void 0;
  return type;
}

/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}

function assertWrappingType(type) {
  !isWrappingType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL wrapping type.') : void 0;
  return type;
}

/**
 * These types can all accept null as a value.
 */


function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}

function assertNullableType(type) {
  !isNullableType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL nullable type.') : void 0;
  return type;
}

/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}

/**
 * These named types do not include modifiers like List or NonNull.
 */


function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}

function assertNamedType(type) {
  !isNamedType(type) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(type) + ' to be a GraphQL named type.') : void 0;
  return type;
}

/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;
    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }
    return unwrappedType;
  }
}

/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */


function resolveThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}

/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */
var GraphQLScalarType = function () {
  function GraphQLScalarType(config) {
    _classCallCheck(this, GraphQLScalarType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._scalarConfig = config;
    !(typeof config.name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide name.') : void 0;
    !(typeof config.serialize === 'function') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;
    if (config.parseValue || config.parseLiteral) {
      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.') : void 0;
    }
  }

  // Serializes an internal value to include in a response.


  GraphQLScalarType.prototype.serialize = function serialize(value) {
    var serializer = this._scalarConfig.serialize;
    return serializer(value);
  };

  // Parses an externally provided value to use as an input.


  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
    var parser = this._scalarConfig.parseValue;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(value)) {
      return undefined;
    }
    return parser ? parser(value) : value;
  };

  // Parses an externally provided literal value to use as an input.


  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode, variables) {
    var parser = this._scalarConfig.parseLiteral;
    return parser ? parser(valueNode, variables) : Object(__WEBPACK_IMPORTED_MODULE_4__utilities_valueFromASTUntyped__["a" /* valueFromASTUntyped */])(valueNode, variables);
  };

  GraphQLScalarType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}();

// Also provide toJSON and inspect aliases for toString.
GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = function () {
  function GraphQLObjectType(config) {
    _classCallCheck(this, GraphQLObjectType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.isTypeOf = config.isTypeOf;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide name.') : void 0;
    if (config.isTypeOf) {
      !(typeof config.isTypeOf === 'function') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, this.name + ' must provide "isTypeOf" as a function.') : void 0;
    }
  }

  GraphQLObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
  };

  GraphQLObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}();

// Also provide toJSON and inspect aliases for toString.
GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

function defineInterfaces(type, interfacesThunk) {
  var interfaces = resolveThunk(interfacesThunk) || [];
  !Array.isArray(interfaces) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.') : void 0;
  return interfaces;
}

function defineFieldMap(type, fieldsThunk) {
  var fieldMap = resolveThunk(fieldsThunk) || {};
  !isPlainObj(fieldMap) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

  var resultFieldMap = Object.create(null);
  Object.keys(fieldMap).forEach(function (fieldName) {
    var fieldConfig = fieldMap[fieldName];
    !isPlainObj(fieldConfig) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + '.' + fieldName + ' field config must be an object') : void 0;
    !!fieldConfig.hasOwnProperty('isDeprecated') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    var field = _extends({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName
    });
    !isValidResolver(field.resolve) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.')) : void 0;
    var argsConfig = fieldConfig.args;
    if (!argsConfig) {
      field.args = [];
    } else {
      !isPlainObj(argsConfig) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.') : void 0;
      field.args = Object.keys(argsConfig).map(function (argName) {
        var arg = argsConfig[argName];
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          astNode: arg.astNode
        };
      });
    }
    resultFieldMap[fieldName] = field;
  });
  return resultFieldMap;
}

function isPlainObj(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
}

// If a resolver is defined, it must be a function.
function isValidResolver(resolver) {
  return resolver == null || typeof resolver === 'function';
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = function () {
  function GraphQLInterfaceType(config) {
    _classCallCheck(this, GraphQLInterfaceType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.resolveType = config.resolveType;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide name.') : void 0;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
  }

  GraphQLInterfaceType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  GraphQLInterfaceType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}();

// Also provide toJSON and inspect aliases for toString.
GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = function () {
  function GraphQLUnionType(config) {
    _classCallCheck(this, GraphQLUnionType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.resolveType = config.resolveType;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide name.') : void 0;
    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, this.name + ' must provide "resolveType" as a function.') : void 0;
    }
  }

  GraphQLUnionType.prototype.getTypes = function getTypes() {
    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
  };

  GraphQLUnionType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}();

// Also provide toJSON and inspect aliases for toString.
GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

function defineTypes(unionType, typesThunk) {
  var types = resolveThunk(typesThunk) || [];
  !Array.isArray(types) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.')) : void 0;
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType /* <T> */ = function () {
  function GraphQLEnumType(config /* <T> */) {
    _classCallCheck(this, GraphQLEnumType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._enumConfig = config;
    !(typeof config.name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide name.') : void 0;
  }

  GraphQLEnumType.prototype.getValues = function getValues() {
    return this._values || (this._values = defineEnumValues(this, this._enumConfig.values));
  };

  GraphQLEnumType.prototype.getValue = function getValue(name) {
    return this._getNameLookup()[name];
  };

  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
    var enumValue = this._getValueLookup().get(value);
    if (enumValue) {
      return enumValue.name;
    }
  };

  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
    if (typeof value === 'string') {
      var enumValue = this._getNameLookup()[value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode, _variables) /* T */{
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].ENUM) {
      var enumValue = this._getNameLookup()[valueNode.value];
      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
    if (!this._valueLookup) {
      var lookup = new Map();
      this.getValues().forEach(function (value) {
        lookup.set(value.value, value);
      });
      this._valueLookup = lookup;
    }
    return this._valueLookup;
  };

  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
    if (!this._nameLookup) {
      var lookup = Object.create(null);
      this.getValues().forEach(function (value) {
        lookup[value.name] = value;
      });
      this._nameLookup = lookup;
    }
    return this._nameLookup;
  };

  GraphQLEnumType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}();

// Also provide toJSON and inspect aliases for toString.
GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

function defineEnumValues(type, valueMap /* <T> */
) {
  !isPlainObj(valueMap) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + ' values must be an object with value names as keys.') : void 0;
  return Object.keys(valueMap).map(function (valueName) {
    var value = valueMap[valueName];
    !isPlainObj(value) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.')) : void 0;
    !!value.hasOwnProperty('isDeprecated') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      astNode: value.astNode,
      value: value.hasOwnProperty('value') ? value.value : valueName
    };
  });
} /* <T> */


/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = function () {
  function GraphQLInputObjectType(config) {
    _classCallCheck(this, GraphQLInputObjectType);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Must provide name.') : void 0;
  }

  GraphQLInputObjectType.prototype.getFields = function getFields() {
    return this._fields || (this._fields = this._defineFieldMap());
  };

  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
    var _this = this;

    var fieldMap = resolveThunk(this._typeConfig.fields) || {};
    !isPlainObj(fieldMap) ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
    var resultFieldMap = Object.create(null);
    Object.keys(fieldMap).forEach(function (fieldName) {
      var field = _extends({}, fieldMap[fieldName], {
        name: fieldName
      });
      !!field.hasOwnProperty('resolve') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, _this.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.') : void 0;
      resultFieldMap[fieldName] = field;
    });
    return resultFieldMap;
  };

  GraphQLInputObjectType.prototype.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}();

// Also provide toJSON and inspect aliases for toString.
GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.toString;
GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kind; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',

  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  VARIABLE: 'Variable',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',

  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',

  // Values
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',

  // Directives
  DIRECTIVE: 'Directive',

  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',

  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',

  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',

  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',

  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition'
});

/**
 * The enum type representing the possible kind values of AST nodes.
 */

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isSchema;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphQLSchema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_find__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsutils_instanceOf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__ = __webpack_require__(14);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











/**
 * Test if the given value is a GraphQL schema.
 */

// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_instanceOf__["a" /* default */])(schema, GraphQLSchema);
}

/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */
var GraphQLSchema = function () {
  // Used as a cache for validateSchema().
  function GraphQLSchema(config) {
    var _this = this;

    _classCallCheck(this, GraphQLSchema);

    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    if (config && config.assumeValid) {
      this.__validationErrors = [];
    } else {
      // Otherwise check for common mistakes during construction to produce
      // clear and early error messages.
      !((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, 'Must provide configuration object.') : void 0;
      !(!config.types || Array.isArray(config.types)) ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, '"types" must be Array if provided but got: ' + String(config.types) + '.') : void 0;
      !(!config.directives || Array.isArray(config.directives)) ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, '"directives" must be Array if provided but got: ' + (String(config.directives) + '.')) : void 0;
      !(!config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames)) ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, '"allowedLegacyNames" must be Array if provided but got: ' + (String(config.allowedLegacyNames) + '.')) : void 0;
      this.__allowedLegacyNames = config.allowedLegacyNames;
    }

    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription;
    // Provide specified directives (e.g. @include and @skip) by default.
    this._directives = config.directives || __WEBPACK_IMPORTED_MODULE_1__directives__["h" /* specifiedDirectives */];
    this.astNode = config.astNode;

    // Build type map now to detect any errors within this schema.
    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), __WEBPACK_IMPORTED_MODULE_2__introspection__["j" /* __Schema */]];

    var types = config.types;
    if (types) {
      initialTypes = initialTypes.concat(types);
    }

    // Keep track of all types referenced within the schema.
    var typeMap = Object.create(null);

    // First by deeply visiting all initial types.
    typeMap = initialTypes.reduce(typeMapReducer, typeMap);

    // Then by deeply visiting all directive types.
    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap);

    // Storing the resulting map for reference by the schema.
    this._typeMap = typeMap;

    // Keep track of all implementations by interface name.
    this._implementations = Object.create(null);
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];
      if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(type)) {
        type.getInterfaces().forEach(function (iface) {
          var impls = _this._implementations[iface.name];
          if (impls) {
            impls.push(type);
          } else {
            _this._implementations[iface.name] = [type];
          }
        });
      }
    });
  }
  // Referenced by validateSchema().


  GraphQLSchema.prototype.getQueryType = function getQueryType() {
    return this._queryType;
  };

  GraphQLSchema.prototype.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  GraphQLSchema.prototype.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["O" /* isUnionType */])(abstractType)) {
      return abstractType.getTypes();
    }
    return this._implementations[abstractType.name];
  };

  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;
    if (!possibleTypeMap) {
      this._possibleTypeMap = possibleTypeMap = Object.create(null);
    }

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      !Array.isArray(possibleTypes) ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.') : void 0;
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        return map[type.name] = true, map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  GraphQLSchema.prototype.getDirectives = function getDirectives() {
    return this._directives;
  };

  GraphQLSchema.prototype.getDirective = function getDirective(name) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_find__["a" /* default */])(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  return GraphQLSchema;
}();

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["P" /* isWrappingType */])(type)) {
    return typeMapReducer(map, type.ofType);
  }
  if (map[type.name]) {
    !(map[type.name] === type) ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".')) : void 0;
    return map;
  }
  map[type.name] = type;

  var reducedMap = map;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["O" /* isUnionType */])(type)) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(type)) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(type) || Object(__WEBPACK_IMPORTED_MODULE_0__definition__["E" /* isInterfaceType */])(type)) {
    Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__["a" /* default */])(type.getFields()).forEach(function (field) {
      if (field.args) {
        var fieldArgTypes = field.args.map(function (arg) {
          return arg.type;
        });
        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      }
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["C" /* isInputObjectType */])(type)) {
    Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__["a" /* default */])(type.getFields()).forEach(function (field) {
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  return reducedMap;
}

function typeMapDirectiveReducer(map, directive) {
  // Directives are not validated until validateSchema() is called.
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__directives__["f" /* isDirective */])(directive)) {
    return map;
  }
  return directive.args.reduce(function (_map, arg) {
    return typeMapReducer(_map, arg.type);
  }, map);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = invariant;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInvalid;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GraphQLList;
/* harmony export (immutable) */ __webpack_exports__["b"] = GraphQLNonNull;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definition__ = __webpack_require__(1);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */

// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = Object(__WEBPACK_IMPORTED_MODULE_0__definition__["u" /* assertType */])(ofType);
  } else {
    return new GraphQLList(ofType);
  }
}

// Also provide toJSON and inspect aliases for toString.
var listProto = GraphQLList.prototype;
listProto.toString = listProto.toJSON = listProto.inspect = function toString() {
  return '[' + String(this.ofType) + ']';
};

/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = Object(__WEBPACK_IMPORTED_MODULE_0__definition__["q" /* assertNullableType */])(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
}

// Also provide toJSON and inspect aliases for toString.
var nonNullProto = GraphQLNonNull.prototype;
nonNullProto.toString = nonNullProto.toJSON = nonNullProto.inspect = function toString() {
  return String(this.ofType) + '!';
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = isDirective;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GraphQLDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphQLIncludeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GraphQLSkipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_DEPRECATION_REASON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GraphQLDeprecatedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return specifiedDirectives; });
/* harmony export (immutable) */ __webpack_exports__["g"] = isSpecifiedDirective;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scalars__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_instanceOf__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 /**
                                              * Copyright (c) 2015-present, Facebook, Inc.
                                              *
                                              * This source code is licensed under the MIT license found in the
                                              * LICENSE file in the root directory of this source tree.
                                              *
                                              * 
                                              */







/**
 * Test if the given value is a GraphQL directive.
 */

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_instanceOf__["a" /* default */])(directive, GraphQLDirective);
}

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
var GraphQLDirective = function GraphQLDirective(config) {
  _classCallCheck(this, GraphQLDirective);

  this.name = config.name;
  this.description = config.description;
  this.locations = config.locations;
  this.astNode = config.astNode;
  !config.name ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Directive must be named.') : void 0;
  !Array.isArray(config.locations) ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Must provide locations for directive.') : void 0;

  var args = config.args;
  if (!args) {
    this.args = [];
  } else {
    !!Array.isArray(args) ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, '@' + config.name + ' args must be an object with argument names as keys.') : void 0;
    this.args = Object.keys(args).map(function (argName) {
      var arg = args[argName];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
  }
};

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [__WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].FIELD, __WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_SPREAD, __WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(__WEBPACK_IMPORTED_MODULE_0__wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_1__scalars__["a" /* GraphQLBoolean */]),
      description: 'Included when true.'
    }
  }
});

/**
 * Used to conditionally skip (exclude) fields or fragments.
 */
var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [__WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].FIELD, __WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_SPREAD, __WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(__WEBPACK_IMPORTED_MODULE_0__wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_1__scalars__["a" /* GraphQLBoolean */]),
      description: 'Skipped when true.'
    }
  }
});

/**
 * Constant string used for default reason for a deprecation.
 */
var DEFAULT_DEPRECATION_REASON = 'No longer supported';

/**
 * Used to declare element of a GraphQL schema as deprecated.
 */
var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [__WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].FIELD_DEFINITION, __WEBPACK_IMPORTED_MODULE_4__language_directiveLocation__["a" /* DirectiveLocation */].ENUM_VALUE],
  args: {
    reason: {
      type: __WEBPACK_IMPORTED_MODULE_1__scalars__["e" /* GraphQLString */],
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});

/**
 * The full list of specified directives.
 */
var specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(function (specifiedDirective) {
    return specifiedDirective.name === directive.name;
  });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __DirectiveLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __InputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __EnumValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TypeMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TypeNameMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return introspectionTypes; });
/* harmony export (immutable) */ __webpack_exports__["n"] = isIntrospectionType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_objectValues__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_astFromValue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scalars__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__ = __webpack_require__(15);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











var __Schema = new __WEBPACK_IMPORTED_MODULE_4__definition__["d" /* GraphQLObjectType */]({
  name: '__Schema',
  isIntrospection: true,
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Type))),
        resolve: function resolve(schema) {
          return Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_objectValues__["a" /* default */])(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});

var __Directive = new __WEBPACK_IMPORTED_MODULE_4__definition__["d" /* GraphQLObjectType */]({
  name: '__Directive',
  isIntrospection: true,
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + "\n\nIn some cases, you need to provide options to alter GraphQL's " + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]) },
      description: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */] },
      locations: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__DirectiveLocation)))
      },
      args: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      },
      // NOTE: the following three fields are deprecated and are no longer part
      // of the GraphQL specification.
      onOperation: {
        deprecationReason: 'Use `locations`.',
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */]),
        resolve: function resolve(d) {
          return d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].QUERY) !== -1 || d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].MUTATION) !== -1 || d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].SUBSCRIPTION) !== -1;
        }
      },
      onFragment: {
        deprecationReason: 'Use `locations`.',
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */]),
        resolve: function resolve(d) {
          return d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].INLINE_FRAGMENT) !== -1 || d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_DEFINITION) !== -1;
        }
      },
      onField: {
        deprecationReason: 'Use `locations`.',
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */]),
        resolve: function resolve(d) {
          return d.locations.indexOf(__WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FIELD) !== -1;
        }
      }
    };
  }
});

var __DirectiveLocation = new __WEBPACK_IMPORTED_MODULE_4__definition__["a" /* GraphQLEnumType */]({
  name: '__DirectiveLocation',
  isIntrospection: true,
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    SCHEMA: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: __WEBPACK_IMPORTED_MODULE_7__language_directiveLocation__["a" /* DirectiveLocation */].INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});

var __Type = new __WEBPACK_IMPORTED_MODULE_4__definition__["d" /* GraphQLObjectType */]({
  name: '__Type',
  isIntrospection: true,
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__TypeKind),
        resolve: function resolve(type) {
          if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["M" /* isScalarType */])(type)) {
            return TypeKind.SCALAR;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["K" /* isObjectType */])(type)) {
            return TypeKind.OBJECT;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["E" /* isInterfaceType */])(type)) {
            return TypeKind.INTERFACE;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["O" /* isUnionType */])(type)) {
            return TypeKind.UNION;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["B" /* isEnumType */])(type)) {
            return TypeKind.ENUM;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["C" /* isInputObjectType */])(type)) {
            return TypeKind.INPUT_OBJECT;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["G" /* isListType */])(type)) {
            return TypeKind.LIST;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["I" /* isNonNullType */])(type)) {
            return TypeKind.NON_NULL;
          }
          throw new Error('Unknown kind of type: ' + type);
        }
      },
      name: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */] },
      description: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */] },
      fields: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Field)),
        args: {
          includeDeprecated: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */], defaultValue: false }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["K" /* isObjectType */])(type) || Object(__WEBPACK_IMPORTED_MODULE_4__definition__["E" /* isInterfaceType */])(type)) {
            var fields = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_objectValues__["a" /* default */])(type.getFields());
            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }
            return fields;
          }
          return null;
        }
      },
      interfaces: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Type)),
        resolve: function resolve(type) {
          if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["K" /* isObjectType */])(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["z" /* isAbstractType */])(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__EnumValue)),
        args: {
          includeDeprecated: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */], defaultValue: false }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["B" /* isEnumType */])(type)) {
            var values = type.getValues();
            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }
            return values;
          }
        }
      },
      inputFields: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__InputValue)),
        resolve: function resolve(type) {
          if (Object(__WEBPACK_IMPORTED_MODULE_4__definition__["C" /* isInputObjectType */])(type)) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_objectValues__["a" /* default */])(type.getFields());
          }
        }
      },
      ofType: { type: __Type }
    };
  }
});

var __Field = new __WEBPACK_IMPORTED_MODULE_4__definition__["d" /* GraphQLObjectType */]({
  name: '__Field',
  isIntrospection: true,
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]) },
      description: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */] },
      args: {
        type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["a" /* GraphQLList */])(Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Type) },
      isDeprecated: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */]) },
      deprecationReason: {
        type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]
      }
    };
  }
});

var __InputValue = new __WEBPACK_IMPORTED_MODULE_4__definition__["d" /* GraphQLObjectType */]({
  name: '__InputValue',
  isIntrospection: true,
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]) },
      description: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */] },
      type: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Type) },
      defaultValue: {
        type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */],
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_isInvalid__["a" /* default */])(inputVal.defaultValue) ? null : Object(__WEBPACK_IMPORTED_MODULE_3__language_printer__["a" /* print */])(Object(__WEBPACK_IMPORTED_MODULE_2__utilities_astFromValue__["a" /* astFromValue */])(inputVal.defaultValue, inputVal.type));
        }
      }
    };
  }
});

var __EnumValue = new __WEBPACK_IMPORTED_MODULE_4__definition__["d" /* GraphQLObjectType */]({
  name: '__EnumValue',
  isIntrospection: true,
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]) },
      description: { type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */] },
      isDeprecated: { type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["a" /* GraphQLBoolean */]) },
      deprecationReason: {
        type: __WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]
      }
    };
  }
});

var TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};

var __TypeKind = new __WEBPACK_IMPORTED_MODULE_4__definition__["a" /* GraphQLEnumType */]({
  name: '__TypeKind',
  isIntrospection: true,
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
    }
  }
});

/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = {
  name: '__schema',
  type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};

var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{ name: 'name', type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]) }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};

var TypeNameMetaFieldDef = {
  name: '__typename',
  type: Object(__WEBPACK_IMPORTED_MODULE_5__type_wrappers__["b" /* GraphQLNonNull */])(__WEBPACK_IMPORTED_MODULE_6__scalars__["e" /* GraphQLString */]),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};

var introspectionTypes = [__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind];

function isIntrospectionType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_4__definition__["H" /* isNamedType */])(type) && (
  // Would prefer to use introspectionTypes.some(), however %checks needs
  // a simple expression.
  type.name === __Schema.name || type.name === __Directive.name || type.name === __DirectiveLocation.name || type.name === __Type.name || type.name === __Field.name || type.name === __InputValue.name || type.name === __EnumValue.name || type.name === __TypeKind.name);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = typeFromAST;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_wrappers__ = __webpack_require__(6);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */
/* eslint-disable no-redeclare */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType = void 0;
  if (typeNode.kind === __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(__WEBPACK_IMPORTED_MODULE_1__type_wrappers__["a" /* GraphQLList */])(innerType);
  }
  if (typeNode.kind === __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(__WEBPACK_IMPORTED_MODULE_1__type_wrappers__["b" /* GraphQLNonNull */])(innerType);
  }
  if (typeNode.kind === __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  }
  /* istanbul ignore next */
  throw new Error('Unexpected type kind: ' + typeNode.kind + '.');
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphQLInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GraphQLFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GraphQLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphQLBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GraphQLID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return specifiedScalarTypes; });
/* harmony export (immutable) */ __webpack_exports__["f"] = isSpecifiedScalarType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_kinds__ = __webpack_require__(2);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




// As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.
var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function coerceInt(value) {
  if (value === '') {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
  }
  var num = Number(value);
  if (num !== num || num > MAX_INT || num < MIN_INT) {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
  }
  var int = Math.floor(num);
  if (int !== num) {
    throw new TypeError('Int cannot represent non-integer value: ' + String(value));
  }
  return int;
}

var GraphQLInt = new __WEBPACK_IMPORTED_MODULE_0__definition__["e" /* GraphQLScalarType */]({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: coerceInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].INT) {
      var num = parseInt(ast.value, 10);
      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }
    return undefined;
  }
});

function coerceFloat(value) {
  if (value === '') {
    throw new TypeError('Float cannot represent non numeric value: (empty string)');
  }
  var num = Number(value);
  if (num === num) {
    return num;
  }
  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
}

var GraphQLFloat = new __WEBPACK_IMPORTED_MODULE_0__definition__["e" /* GraphQLScalarType */]({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: coerceFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].FLOAT || ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].INT ? parseFloat(ast.value) : undefined;
  }
});

function coerceString(value) {
  if (Array.isArray(value)) {
    throw new TypeError('String cannot represent an array value: [' + String(value) + ']');
  }
  return String(value);
}

var GraphQLString = new __WEBPACK_IMPORTED_MODULE_0__definition__["e" /* GraphQLScalarType */]({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].STRING ? ast.value : undefined;
  }
});

var GraphQLBoolean = new __WEBPACK_IMPORTED_MODULE_0__definition__["e" /* GraphQLScalarType */]({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: Boolean,
  parseValue: Boolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].BOOLEAN ? ast.value : undefined;
  }
});

var GraphQLID = new __WEBPACK_IMPORTED_MODULE_0__definition__["e" /* GraphQLScalarType */]({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: String,
  parseValue: String,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].STRING || ast.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].INT ? ast.value : undefined;
  }
});

var specifiedScalarTypes = [GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID];

function isSpecifiedScalarType(type) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__definition__["H" /* isNamedType */])(type) && (
  // Would prefer to use specifiedScalarTypes.some(), however %checks needs
  // a simple expression.
  type.name === GraphQLString.name || type.name === GraphQLInt.name || type.name === GraphQLFloat.name || type.name === GraphQLBoolean.name || type.name === GraphQLID.name);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visitor__ = __webpack_require__(16);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__visitor__["c" /* visit */])(ast, { leave: printDocASTReducer });
}

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (
      // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      'fragment ' + name + wrap('(', join(variableDefinitions, ', '), ')') + ' ' + ('on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),

  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),

  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  }),

  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),

  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),

  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),

  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),

  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),

  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),

  ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
    var name = _ref31.name,
        directives = _ref31.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
    var name = _ref32.name,
        interfaces = _ref32.interfaces,
        directives = _ref32.directives,
        fields = _ref32.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },

  InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives,
        fields = _ref33.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeExtension: function UnionTypeExtension(_ref34) {
    var name = _ref34.name,
        directives = _ref34.directives,
        types = _ref34.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },

  EnumTypeExtension: function EnumTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        values = _ref35.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },

  InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        fields = _ref36.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  },

  DirectiveDefinition: addDescription(function (_ref37) {
    var name = _ref37.name,
        args = _ref37.arguments,
        locations = _ref37.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  })
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */
function printBlockString(value, isDescription) {
  var escaped = value.replace(/"""/g, '\\"""');
  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? '"""' + escaped.replace(/"$/, '"\n') + '"""' : '"""\n' + (isDescription ? escaped : indent(escaped)) + '\n"""';
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GraphQLError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__printError__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_location__ = __webpack_require__(30);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */


function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined;

  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }
      return list;
    }, []);
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  if (positions && source) {
    var providedSource = source;
    _locations = positions.map(function (pos) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__language_location__["a" /* getLocation */])(providedSource, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(__WEBPACK_IMPORTED_MODULE_1__language_location__["a" /* getLocation */])(node.loc.source, node.loc.start));
      }
      return list;
    }, []);
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      value: extensions || originalError && originalError.extensions
    }
  });

  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' },
  toString: {
    value: function toString() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__printError__["a" /* printError */])(this);
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyMap;


/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = item, map;
  }, Object.create(null));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/* harmony default export */ __webpack_exports__["a"] = (objectValues);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectiveLocation; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});

/**
 * The enum type representing the directive location values.
 */

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QueryDocumentKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BREAK; });
/* harmony export (immutable) */ __webpack_exports__["c"] = visit;
/* harmony export (immutable) */ __webpack_exports__["d"] = visitInParallel;
/* harmony export (immutable) */ __webpack_exports__["e"] = visitWithTypeInfo;
/* harmony export (immutable) */ __webpack_exports__["b"] = getVisitFn;


/**
 * A visitor is comprised of visit functions, which are called on each node
 * during the visitor's traversal.
 */


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name',
  // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],

  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],

  DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
};

/**
 * A KeyMap describes each the traversable properties of each kind of node.
 */


var BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterator
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a
 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterable
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
 */

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator

/**
 * A property name to be used as the name of an Iterable's method responsible
 * for producing an Iterator, referred to as `@@iterator`. Typically represents
 * the value `Symbol.iterator` but falls back to the string `"@@iterator"` when
 * `Symbol.iterator` is not defined.
 *
 * Use `$$iterator` for defining new Iterables instead of `Symbol.iterator`,
 * but do not use it for accessing existing Iterables, instead use
 * {@link getIterator} or {@link isIterable}.
 *
 * @example
 *
 * var $$iterator = require('iterall').$$iterator
 *
 * function Counter (to) {
 *   this.to = to
 * }
 *
 * Counter.prototype[$$iterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       if (this.num >= this.to) {
 *         return { value: undefined, done: true }
 *       }
 *       return { value: this.num++, done: false }
 *     }
 *   }
 * }
 *
 * var counter = new Counter(3)
 * for (var number of counter) {
 *   console.log(number) // 0 ... 1 ... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$iterator = SYMBOL_ITERATOR || '@@iterator'
exports.$$iterator = $$iterator

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}
exports.isIterable = isIterable

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
function isArrayLike(obj) {
  var length = obj != null && obj.length
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}
exports.isArrayLike = isArrayLike

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}
exports.isCollection = isCollection

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable)
  if (method) {
    return method.call(iterable)
  }
}
exports.getIterator = getIterator

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getIteratorMethod = getIteratorMethod

/**
 * Similar to {@link getIterator}, this method returns a new Iterator given an
 * Iterable. However it will also create an Iterator for a non-Iterable
 * Array-like collection, such as Array in a non-ES2015 environment.
 *
 * `createIterator` is complimentary to `forEach`, but allows a "pull"-based
 * iteration as opposed to `forEach`'s "push"-based iteration.
 *
 * `createIterator` produces an Iterator for Array-likes with the same behavior
 * as ArrayIteratorPrototype described in the ECMAScript specification, and
 * does *not* skip over "holes".
 *
 * @example
 *
 * var createIterator = require('iterall').createIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createIterator(myArraylike)
 * iterator.next() // { value: 'Alpha', done: false }
 * iterator.next() // { value: 'Bravo', done: false }
 * iterator.next() // { value: 'Charlie', done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   An Iterable or Array-like object to produce an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection)
    if (iterator) {
      return iterator
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection)
    }
  }
}
exports.createIterator = createIterator

// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
  this._o = obj
  this._i = 0
}

// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0
    return { value: void 0, done: true }
  }
  return { value: this._o[this._i++], done: false }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0
    var iterator = getIterator(collection)
    if (iterator) {
      var step
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection)
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection)
        }
      }
    }
  }
}
exports.forEach = forEach

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * an asynchronous iteration behavior, such as what values are looped over in
 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
 * loop or `iterall`'s {@link forAwaitEach} function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterable
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the
 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
 *
 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
 * also as a `next()` method, however instead of an IteratorResult,
 * calling this method returns a {@link Promise} for a IteratorResult.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterator
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use {@link getAsyncIterator} or {@link isAsyncIterable}.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(resolve => {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(() => {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       })
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator'
exports.$$asyncIterator = $$asyncIterator

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}
exports.isAsyncIterable = isAsyncIterable

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable)
  if (method) {
    return method.call(asyncIterable)
  }
}
exports.getAsyncIterator = getAsyncIterator

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator']
    if (typeof method === 'function') {
      return method
    }
  }
}
exports.getAsyncIteratorMethod = getAsyncIteratorMethod

/**
 * Similar to {@link getAsyncIterator}, this method returns a new AsyncIterator
 * given an AsyncIterable. However it will also create an AsyncIterator for a
 * non-async Iterable as well as non-Iterable Array-like collection, such as
 * Array in a pre-ES2015 environment.
 *
 * `createAsyncIterator` is complimentary to `forAwaitEach`, but allows a
 * buffering "pull"-based iteration as opposed to `forAwaitEach`'s
 * "push"-based iteration.
 *
 * `createAsyncIterator` produces an AsyncIterator for non-async Iterables as
 * described in the ECMAScript proposal [Async-from-Sync Iterator Objects](https://tc39.github.io/proposal-async-iteration/#sec-async-from-sync-iterator-objects).
 *
 * > Note: Creating `AsyncIterator`s requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var createAsyncIterator = require('iterall').createAsyncIterator
 *
 * var myArraylike = { length: 3, 0: 'Alpha', 1: 'Bravo', 2: 'Charlie' }
 * var iterator = createAsyncIterator(myArraylike)
 * iterator.next().then(console.log) // { value: 'Alpha', done: false }
 * iterator.next().then(console.log) // { value: 'Bravo', done: false }
 * iterator.next().then(console.log) // { value: 'Charlie', done: false }
 * iterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<T>|{ length: number }} source
 *   An AsyncIterable, Iterable, or Array-like object to produce an Iterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source)
    if (asyncIterator) {
      return asyncIterator
    }
    var iterator = createIterator(source)
    if (iterator) {
      return new AsyncFromSyncIterator(iterator)
    }
  }
}
exports.createAsyncIterator = createAsyncIterator

// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
  this._i = iterator
}

// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
  return this
}

// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function() {
  var step = this._i.next()
  return Promise.resolve(step.value).then(function(value) {
    return { value: value, done: step.done }
  })
}

/**
 * Given an object which either implements the AsyncIterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forAwaitEach` where you would expect to use a [for-await-of](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements) loop.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * > Note: Using `forAwaitEach` requires the existence of `Promise`.
 * > While `Promise` has been available in modern browsers for a number of
 * > years, legacy browsers (like IE 11) may require a polyfill.
 *
 * @example
 *
 * var forAwaitEach = require('iterall').forAwaitEach
 *
 * forAwaitEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES2017:
 * for await (let value of myAsyncIterable) {
 *   console.log(await doSomethingAsync(value))
 * }
 * console.log('done')
 *
 * // Any JavaScript environment:
 * forAwaitEach(myAsyncIterable, function (value) {
 *   return doSomethingAsync(value).then(console.log)
 * }).then(function () {
 *   console.log('done')
 * })
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>|Iterable<Promise<T> | T>|{ length: number }} source
 *   The AsyncIterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source)
  if (asyncIterator) {
    var i = 0
    return new Promise(function(resolve, reject) {
      function next() {
        asyncIterator
          .next()
          .then(function(step) {
            if (!step.done) {
              Promise.resolve(callback.call(thisArg, step.value, i++, source))
                .then(next)
                .catch(reject)
            } else {
              resolve()
            }
            // Explicitly return null, silencing bluebird-style warnings.
            return null
          })
          .catch(reject)
        // Explicitly return null, silencing bluebird-style warnings.
        return null
      }
      next()
    })
  }
}
exports.forAwaitEach = forAwaitEach


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony export (immutable) */ __webpack_exports__["c"] = parseValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseType;
/* unused harmony export parseConstValue */
/* unused harmony export parseTypeReference */
/* unused harmony export parseNamedType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lexer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directiveLocation__ = __webpack_require__(15);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */










/**
 * Configuration options to control parser behavior
 */


/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new __WEBPACK_IMPORTED_MODULE_0__source__["a" /* Source */](source) : source;
  if (!(sourceObj instanceof __WEBPACK_IMPORTED_MODULE_0__source__["a" /* Source */])) {
    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
  }
  var lexer = Object(__WEBPACK_IMPORTED_MODULE_2__lexer__["b" /* createLexer */])(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new __WEBPACK_IMPORTED_MODULE_0__source__["a" /* Source */](source) : source;
  var lexer = Object(__WEBPACK_IMPORTED_MODULE_2__lexer__["b" /* createLexer */])(sourceObj, options || {});
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new __WEBPACK_IMPORTED_MODULE_0__source__["a" /* Source */](source) : source;
  var lexer = Object(__WEBPACK_IMPORTED_MODULE_2__lexer__["b" /* createLexer */])(sourceObj, options || {});
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].EOF));

  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        // Note: The schema definition language is an experimental addition.
        return parseTypeSystemDefinition(lexer);
    }
  } else if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    // Note: The schema definition language is an experimental addition.
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}

/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */
function parseExecutableDefinition(lexer) {
  if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L)) {
    return {
      kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_L) ? many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_L, parseVariableDefinition, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].DOLLAR);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].SELECTION_SET,
    selections: many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L, parseSelection, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */
function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_L) ? many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_L, item, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_R) : [];
}

/**
 * Argument[Const] : Name : Value[?Const]
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].SPREAD);
  if (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME) && lexer.token.value !== 'on') {
    return {
      kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = void 0;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACKET_L:
      return parseList(lexer, isConst);
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L:
      return parseObject(lexer, isConst);
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].INT:
      lexer.advance();
      return {
        kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].FLOAT:
      lexer.advance();
      return {
        kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].STRING:
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BLOCK_STRING:
      return parseStringLiteral(lexer);
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].STRING,
    value: token.value,
    block: token.kind === __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].LIST,
    values: any(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACKET_L, item, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L);
  var fields = [];
  while (!skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */
function parseDirectives(lexer, isConst) {
  var directives = [];
  while (peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].AT)) {
    directives.push(parseDirective(lexer, isConst));
  }
  return directives;
}

/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */
function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].AT);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACKET_R);
    type = {
      kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BANG)) {
    return {
      kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtension
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtension(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].STRING) || peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BLOCK_STRING);
}

/**
 * Description : StringValue
 */
function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}

/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L, parseOperationTypeDefinition, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

/**
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON);
  var type = parseNamedType(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    // Optional leading ampersand
    skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].AMP);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].AMP) ||
    // Legacy support for the SDL?
    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME));
  }
  return types;
}

/**
 * FieldsDefinition : { FieldDefinition+ }
 */
function parseFieldsDefinition(lexer) {
  // Legacy support for the SDL?
  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L) && lexer.lookahead().kind === __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R) {
    lexer.advance();
    lexer.advance();
    return [];
  }
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L) ? many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L, parseFieldDefinition, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R) : [];
}

/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_L)) {
    return [];
  }
  return many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_L, parseInputValueDef, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PAREN_R);
}

/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = void 0;
  if (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer, true);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */
function parseUnionMemberTypes(lexer) {
  var types = [];
  if (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].EQUALS)) {
    // Optional leading pipe
    skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PIPE);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PIPE));
  }
  return types;
}

/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */
function parseEnumValuesDefinition(lexer) {
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L) ? many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L, parseEnumValueDefinition, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R) : [];
}

/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */
function parseInputFieldsDefinition(lexer) {
  return peek(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L) ? many(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_L, parseInputValueDef, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].BRACE_R) : [];
}

/**
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */
function parseTypeExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME) {
    switch (keywordToken.value) {
      case 'scalar':
        return parseScalarTypeExtension(lexer);
      case 'type':
        return parseObjectTypeExtension(lexer);
      case 'interface':
        return parseInterfaceTypeExtension(lexer);
      case 'union':
        return parseUnionTypeExtension(lexer);
      case 'enum':
        return parseEnumTypeExtension(lexer);
      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */
function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  if (directives.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */
function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */
function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */
function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */
function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */
function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expect(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: __WEBPACK_IMPORTED_MODULE_3__kinds__["a" /* Kind */].DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */
function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PIPE);
  var locations = [];
  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (skip(lexer, __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].PIPE));
  return locations;
}

/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */
function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  if (__WEBPACK_IMPORTED_MODULE_4__directiveLocation__["a" /* DirectiveLocation */].hasOwnProperty(name.value)) {
    return name;
  }
  throw unexpected(lexer, start);
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw Object(__WEBPACK_IMPORTED_MODULE_1__error__["e" /* syntaxError */])(lexer.source, token.start, 'Expected ' + kind + ', found ' + Object(__WEBPACK_IMPORTED_MODULE_2__lexer__["c" /* getTokenDesc */])(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === __WEBPACK_IMPORTED_MODULE_2__lexer__["a" /* TokenKind */].NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw Object(__WEBPACK_IMPORTED_MODULE_1__error__["e" /* syntaxError */])(lexer.source, token.start, 'Expected "' + value + '", found ' + Object(__WEBPACK_IMPORTED_MODULE_2__lexer__["c" /* getTokenDesc */])(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return Object(__WEBPACK_IMPORTED_MODULE_1__error__["e" /* syntaxError */])(lexer.source, token.start, 'Unexpected ' + Object(__WEBPACK_IMPORTED_MODULE_2__lexer__["c" /* getTokenDesc */])(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = suggestionList;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var oLength = options.length;
  var inputThreshold = input.length / 2;
  for (var i = 0; i < oLength; i++) {
    var distance = lexicalDistance(input, options[i]);
    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);
    if (distance <= threshold) {
      optionsByDistance[options[i]] = distance;
    }
  }
  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}

/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */
function lexicalDistance(aStr, bStr) {
  if (aStr === bStr) {
    return 0;
  }

  var i = void 0;
  var j = void 0;
  var d = [];
  var a = aStr.toLowerCase();
  var b = bStr.toLowerCase();
  var aLength = a.length;
  var bLength = b.length;

  // Any case change counts as a single edit
  if (a === b) {
    return 1;
  }

  for (i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (i = 1; i <= aLength; i++) {
    for (j = 1; j <= bLength; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;

      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = validateSchema;
/* harmony export (immutable) */ __webpack_exports__["a"] = assertValidSchema;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsutils_find__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_GraphQLError__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_assertValidName__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_typeComparators__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
















/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */
function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  !Object(__WEBPACK_IMPORTED_MODULE_3__schema__["b" /* isSchema */])(schema) ? Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_invariant__["a" /* default */])(0, 'Expected ' + String(schema) + ' to be a GraphQL schema.') : void 0;

  // If this Schema has already been validated, return the previous results.
  if (schema.__validationErrors) {
    return schema.__validationErrors;
  }

  // Validate the schema, producing a list of errors.
  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context);

  // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.
  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}

/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */
function assertValidSchema(schema) {
  var errors = validateSchema(schema);
  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext = function () {
  function SchemaValidationContext(schema) {
    _classCallCheck(this, SchemaValidationContext);

    this._errors = [];
    this.schema = schema;
  }

  SchemaValidationContext.prototype.reportError = function reportError(message, nodes) {
    var _nodes = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);
    this.addError(new __WEBPACK_IMPORTED_MODULE_7__error_GraphQLError__["a" /* GraphQLError */](message, _nodes));
  };

  SchemaValidationContext.prototype.addError = function addError(error) {
    this._errors.push(error);
  };

  SchemaValidationContext.prototype.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();
  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(queryType)) {
    context.reportError('Query root type must be Object type, it cannot be ' + String(queryType) + '.', getOperationTypeNode(schema, queryType, 'query'));
  }

  var mutationType = schema.getMutationType();
  if (mutationType && !Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + (String(mutationType) + '.'), getOperationTypeNode(schema, mutationType, 'mutation'));
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && !Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + (String(subscriptionType) + '.'), getOperationTypeNode(schema, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema, type, operation) {
  var astNode = schema.astNode;
  var operationTypeNode = astNode && astNode.operationTypes.find(function (operationType) {
    return operationType.operation === operation;
  });
  return operationTypeNode ? operationTypeNode.type : type && type.astNode;
}

function validateDirectives(context) {
  var directives = context.schema.getDirectives();
  directives.forEach(function (directive) {
    // Ensure all directives are in fact GraphQL directives.
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__directives__["f" /* isDirective */])(directive)) {
      context.reportError('Expected directive but got: ' + String(directive) + '.', directive && directive.astNode);
      return;
    }

    // Ensure they are named correctly.
    validateName(context, directive);

    // TODO: Ensure proper locations.

    // Ensure the arguments are valid.
    var argNames = Object.create(null);
    directive.args.forEach(function (arg) {
      var argName = arg.name;

      // Ensure they are named correctly.
      validateName(context, arg);

      // Ensure they are unique per directive.
      if (argNames[argName]) {
        context.reportError('Argument @' + directive.name + '(' + argName + ':) can only be defined once.', getAllDirectiveArgNodes(directive, argName));
        return; // continue loop
      }
      argNames[argName] = true;

      // Ensure the type is an input type.
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["D" /* isInputType */])(arg.type)) {
        context.reportError('The type of @' + directive.name + '(' + argName + ':) must be Input Type ' + ('but got: ' + String(arg.type) + '.'), getDirectiveArgTypeNode(directive, argName));
      }
    });
  });
}

function validateName(context, node) {
  // If a schema explicitly allows some legacy name which is no longer valid,
  // allow it to be assumed valid.
  if (context.schema.__allowedLegacyNames && context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
    return;
  }
  // Ensure names are valid, however introspection types opt out.
  var error = Object(__WEBPACK_IMPORTED_MODULE_8__utilities_assertValidName__["b" /* isValidNameError */])(node.name, node.astNode || undefined);
  if (error) {
    context.addError(error);
  }
}

function validateTypes(context) {
  var typeMap = context.schema.getTypeMap();
  Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__["a" /* default */])(typeMap).forEach(function (type) {
    // Ensure all provided types are in fact GraphQL type.
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["H" /* isNamedType */])(type)) {
      context.reportError('Expected GraphQL named type but got: ' + String(type) + '.', type && type.astNode);
      return;
    }

    // Ensure it is named correctly (excluding introspection types).
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__introspection__["n" /* isIntrospectionType */])(type)) {
      validateName(context, type);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(type)) {
      // Ensure fields are valid
      validateFields(context, type);

      // Ensure objects implement the interfaces they claim to.
      validateObjectInterfaces(context, type);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["E" /* isInterfaceType */])(type)) {
      // Ensure fields are valid.
      validateFields(context, type);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["O" /* isUnionType */])(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["B" /* isEnumType */])(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__definition__["C" /* isInputObjectType */])(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type);
    }
  });
}

function validateFields(context, type) {
  var fields = Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__["a" /* default */])(type.getFields());

  // Objects and Interfaces both must define one or more fields.
  if (fields.length === 0) {
    context.reportError('Type ' + type.name + ' must define one or more fields.', getAllObjectOrInterfaceNodes(type));
  }

  fields.forEach(function (field) {
    // Ensure they are named correctly.
    validateName(context, field);

    // Ensure they were defined at most once.
    var fieldNodes = getAllFieldNodes(type, field.name);
    if (fieldNodes.length > 1) {
      context.reportError('Field ' + type.name + '.' + field.name + ' can only be defined once.', fieldNodes);
      return; // continue loop
    }

    // Ensure the type is an output type
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["L" /* isOutputType */])(field.type)) {
      context.reportError('The type of ' + type.name + '.' + field.name + ' must be Output Type ' + ('but got: ' + String(field.type) + '.'), getFieldTypeNode(type, field.name));
    }

    // Ensure the arguments are valid
    var argNames = Object.create(null);
    field.args.forEach(function (arg) {
      var argName = arg.name;

      // Ensure they are named correctly.
      validateName(context, arg);

      // Ensure they are unique per field.
      if (argNames[argName]) {
        context.reportError('Field argument ' + type.name + '.' + field.name + '(' + argName + ':) can only ' + 'be defined once.', getAllFieldArgNodes(type, field.name, argName));
      }
      argNames[argName] = true;

      // Ensure the type is an input type
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["D" /* isInputType */])(arg.type)) {
        context.reportError('The type of ' + type.name + '.' + field.name + '(' + argName + ':) must be Input ' + ('Type but got: ' + String(arg.type) + '.'), getFieldArgTypeNode(type, field.name, argName));
      }
    });
  });
}

function validateObjectInterfaces(context, object) {
  var implementedTypeNames = Object.create(null);
  object.getInterfaces().forEach(function (iface) {
    if (implementedTypeNames[iface.name]) {
      context.reportError('Type ' + object.name + ' can only implement ' + iface.name + ' once.', getAllImplementsInterfaceNodes(object, iface));
      return; // continue loop
    }
    implementedTypeNames[iface.name] = true;
    validateObjectImplementsInterface(context, object, iface);
  });
}

function validateObjectImplementsInterface(context, object, iface) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["E" /* isInterfaceType */])(iface)) {
    context.reportError('Type ' + String(object) + ' must only implement Interface types, ' + ('it cannot implement ' + String(iface) + '.'), getImplementsInterfaceNode(object, iface));
    return;
  }

  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields();

  // Assert each interface field is implemented.
  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
    var objectField = objectFieldMap[fieldName];
    var ifaceField = ifaceFieldMap[fieldName];

    // Assert interface field exists on object.
    if (!objectField) {
      context.reportError('Interface field ' + iface.name + '.' + fieldName + ' expected but ' + (object.name + ' does not provide it.'), [getFieldNode(iface, fieldName), object.astNode]);
      // Continue loop over fields.
      return;
    }

    // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)
    if (!Object(__WEBPACK_IMPORTED_MODULE_9__utilities_typeComparators__["c" /* isTypeSubTypeOf */])(context.schema, objectField.type, ifaceField.type)) {
      context.reportError('Interface field ' + iface.name + '.' + fieldName + ' expects type ' + (String(ifaceField.type) + ' but ' + object.name + '.' + fieldName + ' ') + ('is type ' + String(objectField.type) + '.'), [getFieldTypeNode(iface, fieldName), getFieldTypeNode(object, fieldName)]);
    }

    // Assert each interface field arg is implemented.
    ifaceField.args.forEach(function (ifaceArg) {
      var argName = ifaceArg.name;
      var objectArg = Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_find__["a" /* default */])(objectField.args, function (arg) {
        return arg.name === argName;
      });

      // Assert interface field arg exists on object field.
      if (!objectArg) {
        context.reportError('Interface field argument ' + iface.name + '.' + fieldName + '(' + argName + ':) ' + ('expected but ' + object.name + '.' + fieldName + ' does not provide it.'), [getFieldArgNode(iface, fieldName, argName), getFieldNode(object, fieldName)]);
        // Continue loop over arguments.
        return;
      }

      // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?
      if (!Object(__WEBPACK_IMPORTED_MODULE_9__utilities_typeComparators__["b" /* isEqualType */])(ifaceArg.type, objectArg.type)) {
        context.reportError('Interface field argument ' + iface.name + '.' + fieldName + '(' + argName + ':) ' + ('expects type ' + String(ifaceArg.type) + ' but ') + (object.name + '.' + fieldName + '(' + argName + ':) is type ') + (String(objectArg.type) + '.'), [getFieldArgTypeNode(iface, fieldName, argName), getFieldArgTypeNode(object, fieldName, argName)]);
      }

      // TODO: validate default values?
    });

    // Assert additional arguments must not be required.
    objectField.args.forEach(function (objectArg) {
      var argName = objectArg.name;
      var ifaceArg = Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_find__["a" /* default */])(ifaceField.args, function (arg) {
        return arg.name === argName;
      });
      if (!ifaceArg && Object(__WEBPACK_IMPORTED_MODULE_0__definition__["I" /* isNonNullType */])(objectArg.type)) {
        context.reportError('Object field argument ' + object.name + '.' + fieldName + '(' + argName + ':) ' + ('is of required type ' + String(objectArg.type) + ' but is not also ') + ('provided by the Interface field ' + iface.name + '.' + fieldName + '.'), [getFieldArgTypeNode(object, fieldName, argName), getFieldNode(iface, fieldName)]);
      }
    });
  });
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError('Union type ' + union.name + ' must define one or more member types.', union.astNode);
  }

  var includedTypeNames = Object.create(null);
  memberTypes.forEach(function (memberType) {
    if (includedTypeNames[memberType.name]) {
      context.reportError('Union type ' + union.name + ' can only include type ' + (memberType.name + ' once.'), getUnionMemberTypeNodes(union, memberType.name));
      return; // continue loop
    }
    includedTypeNames[memberType.name] = true;
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["K" /* isObjectType */])(memberType)) {
      context.reportError('Union type ' + union.name + ' can only include Object types, ' + ('it cannot include ' + String(memberType) + '.'), getUnionMemberTypeNodes(union, String(memberType)));
    }
  });
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError('Enum type ' + enumType.name + ' must define one or more values.', enumType.astNode);
  }

  enumValues.forEach(function (enumValue) {
    var valueName = enumValue.name;

    // Ensure no duplicates.
    var allNodes = getEnumValueNodes(enumType, valueName);
    if (allNodes && allNodes.length > 1) {
      context.reportError('Enum type ' + enumType.name + ' can include value ' + valueName + ' only once.', allNodes);
    }

    // Ensure valid name.
    validateName(context, enumValue);
    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError('Enum type ' + enumType.name + ' cannot include value: ' + valueName + '.', enumValue.astNode);
    }
  });
}

function validateInputFields(context, inputObj) {
  var fields = Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_objectValues__["a" /* default */])(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError('Input Object type ' + inputObj.name + ' must define one or more fields.', inputObj.astNode);
  }

  // Ensure the arguments are valid
  fields.forEach(function (field) {
    // Ensure they are named correctly.
    validateName(context, field);

    // TODO: Ensure they are unique per field.

    // Ensure the type is an input type
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__definition__["D" /* isInputType */])(field.type)) {
      context.reportError('The type of ' + inputObj.name + '.' + field.name + ' must be Input Type ' + ('but got: ' + String(field.type) + '.'), field.astNode && field.astNode.type);
    }
  });
}

function getAllObjectNodes(type) {
  return type.astNode ? type.extensionASTNodes ? [type.astNode].concat(type.extensionASTNodes) : [type.astNode] : type.extensionASTNodes || [];
}

function getAllObjectOrInterfaceNodes(type) {
  return type.astNode ? type.extensionASTNodes ? [type.astNode].concat(type.extensionASTNodes) : [type.astNode] : type.extensionASTNodes || [];
}

function getImplementsInterfaceNode(type, iface) {
  return getAllImplementsInterfaceNodes(type, iface)[0];
}

function getAllImplementsInterfaceNodes(type, iface) {
  var implementsNodes = [];
  var astNodes = getAllObjectNodes(type);
  for (var i = 0; i < astNodes.length; i++) {
    var _astNode = astNodes[i];
    if (_astNode && _astNode.interfaces) {
      _astNode.interfaces.forEach(function (node) {
        if (node.name.value === iface.name) {
          implementsNodes.push(node);
        }
      });
    }
  }
  return implementsNodes;
}

function getFieldNode(type, fieldName) {
  return getAllFieldNodes(type, fieldName)[0];
}

function getAllFieldNodes(type, fieldName) {
  var fieldNodes = [];
  var astNodes = getAllObjectOrInterfaceNodes(type);
  for (var i = 0; i < astNodes.length; i++) {
    var _astNode2 = astNodes[i];
    if (_astNode2 && _astNode2.fields) {
      _astNode2.fields.forEach(function (node) {
        if (node.name.value === fieldName) {
          fieldNodes.push(node);
        }
      });
    }
  }
  return fieldNodes;
}

function getFieldTypeNode(type, fieldName) {
  var fieldNode = getFieldNode(type, fieldName);
  return fieldNode && fieldNode.type;
}

function getFieldArgNode(type, fieldName, argName) {
  return getAllFieldArgNodes(type, fieldName, argName)[0];
}

function getAllFieldArgNodes(type, fieldName, argName) {
  var argNodes = [];
  var fieldNode = getFieldNode(type, fieldName);
  if (fieldNode && fieldNode.arguments) {
    fieldNode.arguments.forEach(function (node) {
      if (node.name.value === argName) {
        argNodes.push(node);
      }
    });
  }
  return argNodes;
}

function getFieldArgTypeNode(type, fieldName, argName) {
  var fieldArgNode = getFieldArgNode(type, fieldName, argName);
  return fieldArgNode && fieldArgNode.type;
}

function getAllDirectiveArgNodes(directive, argName) {
  var argNodes = [];
  var directiveNode = directive.astNode;
  if (directiveNode && directiveNode.arguments) {
    directiveNode.arguments.forEach(function (node) {
      if (node.name.value === argName) {
        argNodes.push(node);
      }
    });
  }
  return argNodes;
}

function getDirectiveArgTypeNode(directive, argName) {
  var argNode = getAllDirectiveArgNodes(directive, argName)[0];
  return argNode && argNode.type;
}

function getUnionMemberTypeNodes(union, typeName) {
  return union.astNode && union.astNode.types && union.astNode.types.filter(function (type) {
    return type.name.value === typeName;
  });
}

function getEnumValueNodes(enumType, valueName) {
  return enumType.astNode && enumType.astNode.values && enumType.astNode.values.filter(function (value) {
    return value.name.value === valueName;
  });
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyValMap;


/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = valFn(item), map;
  }, Object.create(null));
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNullish;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isEqualType;
/* harmony export (immutable) */ __webpack_exports__["c"] = isTypeSubTypeOf;
/* harmony export (immutable) */ __webpack_exports__["a"] = doTypesOverlap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_definition__ = __webpack_require__(1);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  }

  // If either type is non-null, the other must also be non-null.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(typeA) && Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // If either type is a list, the other must also be a list.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(typeA) && Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  }

  // Otherwise the types are not equal.
  return false;
}

/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */
function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  }

  // If superType is non-null, maybeSubType must also be non-null.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(superType)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  }

  // If superType type is a list, maybeSubType type must also be a list.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(superType)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  }

  // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["z" /* isAbstractType */])(superType) && Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  }

  // Otherwise, the child type is not a valid subtype of the parent type.
  return false;
}

/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */
function doTypesOverlap(schema, typeA, typeB) {
  // So flow is aware this is constant
  var _typeB = typeB;

  // Equivalent types overlap
  if (typeA === _typeB) {
    return true;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["z" /* isAbstractType */])(typeA)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["z" /* isAbstractType */])(_typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(_typeB, type);
      });
    }
    // Determine if the latter type is a possible concrete type of the former.
    return schema.isPossibleType(typeA, _typeB);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["z" /* isAbstractType */])(_typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(_typeB, typeA);
  }

  // Otherwise the types do not overlap.
  return false;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_introspection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeFromAST__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsutils_find__ = __webpack_require__(17);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo = function () {
  function TypeInfo(schema,
  // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  getFieldDefFn,
  // Initial type may be provided in rare cases to facilitate traversals
  initialType) {
    _classCallCheck(this, TypeInfo);

    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;
    if (initialType) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["D" /* isInputType */])(initialType)) {
        this._inputTypeStack.push(initialType);
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["A" /* isCompositeType */])(initialType)) {
        this._parentTypeStack.push(initialType);
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["L" /* isOutputType */])(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  TypeInfo.prototype.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  TypeInfo.prototype.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  TypeInfo.prototype.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  TypeInfo.prototype.getDirective = function getDirective() {
    return this._directive;
  };

  TypeInfo.prototype.getArgument = function getArgument() {
    return this._argument;
  };

  TypeInfo.prototype.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  // Flow does not yet handle this case.


  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
    var schema = this._schema;
    // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.
    switch (node.kind) {
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].SELECTION_SET:
        var namedType = Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["x" /* getNamedType */])(this.getType());
        this._parentTypeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["A" /* isCompositeType */])(namedType) ? namedType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].FIELD:
        var parentType = this.getParentType();
        var fieldDef = void 0;
        var fieldType = void 0;
        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);
          if (fieldDef) {
            fieldType = fieldDef.type;
          }
        }
        this._fieldDefStack.push(fieldDef);
        this._typeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["L" /* isOutputType */])(fieldType) ? fieldType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].OPERATION_DEFINITION:
        var type = void 0;
        if (node.operation === 'query') {
          type = schema.getQueryType();
        } else if (node.operation === 'mutation') {
          type = schema.getMutationType();
        } else if (node.operation === 'subscription') {
          type = schema.getSubscriptionType();
        }
        this._typeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["K" /* isObjectType */])(type) ? type : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].INLINE_FRAGMENT:
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].FRAGMENT_DEFINITION:
        var typeConditionAST = node.typeCondition;
        var outputType = typeConditionAST ? Object(__WEBPACK_IMPORTED_MODULE_3__typeFromAST__["a" /* typeFromAST */])(schema, typeConditionAST) : Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["x" /* getNamedType */])(this.getType());
        this._typeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["L" /* isOutputType */])(outputType) ? outputType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].VARIABLE_DEFINITION:
        var inputType = Object(__WEBPACK_IMPORTED_MODULE_3__typeFromAST__["a" /* typeFromAST */])(schema, node.type);
        this._inputTypeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["D" /* isInputType */])(inputType) ? inputType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].ARGUMENT:
        var argDef = void 0;
        var argType = void 0;
        var fieldOrDirective = this.getDirective() || this.getFieldDef();
        if (fieldOrDirective) {
          argDef = Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_find__["a" /* default */])(fieldOrDirective.args, function (arg) {
            return arg.name === node.name.value;
          });
          if (argDef) {
            argType = argDef.type;
          }
        }
        this._argument = argDef;
        this._inputTypeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["D" /* isInputType */])(argType) ? argType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].LIST:
        var listType = Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["y" /* getNullableType */])(this.getInputType());
        var itemType = Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["G" /* isListType */])(listType) ? listType.ofType : listType;
        this._inputTypeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["D" /* isInputType */])(itemType) ? itemType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].OBJECT_FIELD:
        var objectType = Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["x" /* getNamedType */])(this.getInputType());
        var inputFieldType = void 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["C" /* isInputObjectType */])(objectType)) {
          var inputField = objectType.getFields()[node.name.value];
          if (inputField) {
            inputFieldType = inputField.type;
          }
        }
        this._inputTypeStack.push(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["D" /* isInputType */])(inputFieldType) ? inputFieldType : undefined);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].ENUM:
        var enumType = Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["x" /* getNamedType */])(this.getInputType());
        var enumValue = void 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["B" /* isEnumType */])(enumType)) {
          enumValue = enumType.getValue(node.value);
        }
        this._enumValue = enumValue;
        break;
    }
  };

  TypeInfo.prototype.leave = function leave(node) {
    switch (node.kind) {
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].FIELD:
        this._fieldDefStack.pop();
        this._typeStack.pop();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].DIRECTIVE:
        this._directive = null;
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].OPERATION_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].INLINE_FRAGMENT:
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].ARGUMENT:
        this._argument = null;
        this._inputTypeStack.pop();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].LIST:
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].OBJECT_FIELD:
        this._inputTypeStack.pop();
        break;
      case __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */
function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;
  if (name === __WEBPACK_IMPORTED_MODULE_2__type_introspection__["a" /* SchemaMetaFieldDef */].name && schema.getQueryType() === parentType) {
    return __WEBPACK_IMPORTED_MODULE_2__type_introspection__["a" /* SchemaMetaFieldDef */];
  }
  if (name === __WEBPACK_IMPORTED_MODULE_2__type_introspection__["c" /* TypeMetaFieldDef */].name && schema.getQueryType() === parentType) {
    return __WEBPACK_IMPORTED_MODULE_2__type_introspection__["c" /* TypeMetaFieldDef */];
  }
  if (name === __WEBPACK_IMPORTED_MODULE_2__type_introspection__["d" /* TypeNameMetaFieldDef */].name && Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["A" /* isCompositeType */])(parentType)) {
    return __WEBPACK_IMPORTED_MODULE_2__type_introspection__["d" /* TypeNameMetaFieldDef */];
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["K" /* isObjectType */])(parentType) || Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["E" /* isInterfaceType */])(parentType)) {
    return parentType.getFields()[name];
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = execute;
/* harmony export (immutable) */ __webpack_exports__["k"] = responsePathAsArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = addPath;
/* harmony export (immutable) */ __webpack_exports__["b"] = assertValidExecutionArguments;
/* harmony export (immutable) */ __webpack_exports__["c"] = buildExecutionContext;
/* harmony export (immutable) */ __webpack_exports__["i"] = getOperationRootType;
/* harmony export (immutable) */ __webpack_exports__["e"] = collectFields;
/* harmony export (immutable) */ __webpack_exports__["d"] = buildResolveInfo;
/* harmony export (immutable) */ __webpack_exports__["j"] = resolveFieldValueOrError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defaultFieldResolver; });
/* harmony export (immutable) */ __webpack_exports__["h"] = getFieldDef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iterall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsutils_isNullish__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsutils_memoize3__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jsutils_promiseForObject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jsutils_promiseReduce__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_typeFromAST__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__values__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__type_introspection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__type_validate__ = __webpack_require__(21);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






















/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */


/**
 * The result of GraphQL execution.
 *
 *   - `errors` is included when any errors occurred as a non-empty array.
 *   - `data` is the result of a successful execution of the query.
 */


/**
 * Implements the "Evaluating requests" section of the GraphQL specification.
 *
 * Returns either a synchronous ExecutionResult (if all encountered resolvers
 * are synchronous), or a Promise of an ExecutionResult that will eventually be
 * resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}

function executeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrect, throw an error.
  assertValidExecutionArguments(schema, document, variableValues);

  // If a valid context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.
  var context = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

  // Return early errors if execution context failed.
  if (Array.isArray(context)) {
    return { errors: context };
  }

  // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.
  var data = executeOperation(context, context.operation, rootValue);
  return buildResponse(context, data);
}

/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */
function buildResponse(context, data) {
  var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(data);
  if (promise) {
    return promise.then(function (resolved) {
      return buildResponse(context, resolved);
    });
  }
  return context.errors.length === 0 ? { data: data } : { errors: context.errors, data: data };
}

/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */
function responsePathAsArray(path) {
  var flattened = [];
  var curr = path;
  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }
  return flattened.reverse();
}

/**
 * Given a ResponsePath and a key, return a new ResponsePath containing the
 * new key.
 */
function addPath(prev, key) {
  return { prev: prev, key: key };
}

/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */
function assertValidExecutionArguments(schema, document, rawVariableValues) {
  !document ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Must provide document') : void 0;

  // If the schema used for execution is invalid, throw an error.
  Object(__WEBPACK_IMPORTED_MODULE_16__type_validate__["a" /* assertValidSchema */])(schema);

  // Variables, if provided, must be an object.
  !(!rawVariableValues || (typeof rawVariableValues === 'undefined' ? 'undefined' : _typeof(rawVariableValues)) === 'object') ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
}

/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */
function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver) {
  var errors = [];
  var operation = void 0;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);
  for (var i = 0; i < document.definitions.length; i++) {
    var definition = document.definitions[i];
    switch (definition.kind) {
      case __WEBPACK_IMPORTED_MODULE_10__language_kinds__["a" /* Kind */].OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_10__language_kinds__["a" /* Kind */].FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      errors.push(new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Unknown operation named "' + operationName + '".'));
    } else {
      errors.push(new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Must provide an operation.'));
    }
  } else if (hasMultipleAssumedOperations) {
    errors.push(new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Must provide operation name if query contains ' + 'multiple operations.'));
  }

  var variableValues = void 0;
  if (operation) {
    var coercedVariableValues = Object(__WEBPACK_IMPORTED_MODULE_11__values__["c" /* getVariableValues */])(schema, operation.variableDefinitions || [], rawVariableValues || {});

    if (coercedVariableValues.errors) {
      errors.push.apply(errors, coercedVariableValues.errors);
    } else {
      variableValues = coercedVariableValues.coerced;
    }
  }

  if (errors.length !== 0) {
    return errors;
  }

  !operation ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Has operation if no errors.') : void 0;
  !variableValues ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Has variables if no errors.') : void 0;

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: variableValues,
    fieldResolver: fieldResolver || defaultFieldResolver,
    errors: errors
  };
}

/**
 * Implements the "Evaluating operations" section of the spec.
 */
function executeOperation(exeContext, operation, rootValue) {
  var type = getOperationRootType(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));

  var path = undefined;

  // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.
  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
    var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(result);
    if (promise) {
      return promise.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}

/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  switch (operation.operation) {
    case 'query':
      var queryType = schema.getQueryType();
      if (!queryType) {
        throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Schema does not define the required query root type.', [operation]);
      }
      return queryType;
    case 'mutation':
      var mutationType = schema.getMutationType();
      if (!mutationType) {
        throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Schema is not configured for mutations.', [operation]);
      }
      return mutationType;
    case 'subscription':
      var subscriptionType = schema.getSubscriptionType();
      if (!subscriptionType) {
        throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Schema is not configured for subscriptions.', [operation]);
      }
      return subscriptionType;
    default:
      throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Can only execute queries, mutations and subscriptions.', [operation]);
  }
}

/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */
function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return Object(__WEBPACK_IMPORTED_MODULE_8__jsutils_promiseReduce__["a" /* default */])(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === undefined) {
      return results;
    }
    var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(result);
    if (promise) {
      return promise.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }
    results[responseName] = result;
    return results;
  }, Object.create(null));
}

/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */
function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var containsPromise = false;

  var finalResults = Object.keys(fields).reduce(function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === undefined) {
      return results;
    }
    results[responseName] = result;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(result)) {
      containsPromise = true;
    }
    return results;
  }, Object.create(null));

  // If there are no promises, we can just return the object
  if (!containsPromise) {
    return finalResults;
  }

  // Otherwise, results is a map from field name to the result
  // of resolving that field, which is possibly a promise. Return
  // a promise that will return this same map, but with any
  // promises replaced with the values they resolved to.
  return Object(__WEBPACK_IMPORTED_MODULE_7__jsutils_promiseForObject__["a" /* default */])(finalResults);
}

/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */
function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];
    switch (selection.kind) {
      case __WEBPACK_IMPORTED_MODULE_10__language_kinds__["a" /* Kind */].FIELD:
        if (!shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        var name = getFieldEntryKey(selection);
        if (!fields[name]) {
          fields[name] = [];
        }
        fields[name].push(selection);
        break;
      case __WEBPACK_IMPORTED_MODULE_10__language_kinds__["a" /* Kind */].INLINE_FRAGMENT:
        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;
      case __WEBPACK_IMPORTED_MODULE_10__language_kinds__["a" /* Kind */].FRAGMENT_SPREAD:
        var fragName = selection.name.value;
        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        visitedFragmentNames[fragName] = true;
        var fragment = exeContext.fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
    }
  }
  return fields;
}

/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precidence than @include.
 */
function shouldIncludeNode(exeContext, node) {
  var skip = Object(__WEBPACK_IMPORTED_MODULE_11__values__["b" /* getDirectiveValues */])(__WEBPACK_IMPORTED_MODULE_15__type_directives__["e" /* GraphQLSkipDirective */], node, exeContext.variableValues);
  if (skip && skip.if === true) {
    return false;
  }

  var include = Object(__WEBPACK_IMPORTED_MODULE_11__values__["b" /* getDirectiveValues */])(__WEBPACK_IMPORTED_MODULE_15__type_directives__["d" /* GraphQLIncludeDirective */], node, exeContext.variableValues);
  if (include && include.if === false) {
    return false;
  }
  return true;
}

/**
 * Determines if a fragment is applicable to the given type.
 */
function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  var conditionalType = Object(__WEBPACK_IMPORTED_MODULE_9__utilities_typeFromAST__["a" /* typeFromAST */])(exeContext.schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["z" /* isAbstractType */])(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }
  return false;
}

/**
 * Implements the logic to compute the key of a given field's entry
 */
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}

/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */
function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;

  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;

  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);

  // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).
  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);

  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldNodes[0].name.value,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}

// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.
function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = Object(__WEBPACK_IMPORTED_MODULE_11__values__["a" /* getArgumentValues */])(fieldDef, fieldNodes[0], exeContext.variableValues);

    // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.
    var context = exeContext.contextValue;

    var result = resolveFn(source, args, context, info);
    var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(result);
    return promise ? promise.then(undefined, asErrorInstance) : result;
  } catch (error) {
    return asErrorInstance(error);
  }
}

// Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.
function asErrorInstance(error) {
  return error instanceof Error ? error : new Error(error || undefined);
}

// This is a small wrapper around completeValue which detects and logs errors
// in the execution context.
function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["I" /* isNonNullType */])(returnType)) {
    return completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
  }

  // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.
  try {
    var completed = completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
    var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(completed);
    if (promise) {
      // If `completeValueWithLocatedError` returned a rejected promise, log
      // the rejection error and resolve to null.
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return promise.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return completed;
  } catch (error) {
    // If `completeValueWithLocatedError` returned abruptly (threw an error),
    // log the error and return null.
    exeContext.errors.push(error);
    return null;
  }
}

// This is a small wrapper around completeValue which annotates errors with
// location information.
function completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(completed);
    if (promise) {
      return promise.then(undefined, function (error) {
        return Promise.reject(Object(__WEBPACK_IMPORTED_MODULE_1__error__["c" /* locatedError */])(asErrorInstance(error), fieldNodes, responsePathAsArray(path)));
      });
    }
    return completed;
  } catch (error) {
    throw Object(__WEBPACK_IMPORTED_MODULE_1__error__["c" /* locatedError */])(asErrorInstance(error), fieldNodes, responsePathAsArray(path));
  }
}

/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */
function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is a Promise, apply-lift over completeValue.
  var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(result);
  if (promise) {
    return promise.then(function (resolved) {
      return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
    });
  }

  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  }

  // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["I" /* isNonNullType */])(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
    if (completed === null) {
      throw new Error('Cannot return null for non-nullable field ' + info.parentType.name + '.' + info.fieldName + '.');
    }
    return completed;
  }

  // If result value is null-ish (null, undefined, or NaN) then return null.
  if (Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_isNullish__["a" /* default */])(result)) {
    return null;
  }

  // If field type is List, complete each item in the list with the inner type
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["G" /* isListType */])(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["F" /* isLeafType */])(returnType)) {
    return completeLeafValue(returnType, result);
  }

  // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["z" /* isAbstractType */])(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // If field type is Object, execute and complete all sub-selections.
  if (Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["K" /* isObjectType */])(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  }

  // Not reachable. All possible output types have been considered.
  /* istanbul ignore next */
  throw new Error('Cannot complete value of unexpected type "' + String(returnType) + '".');
}

/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */
function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  !Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["isCollection"])(result) ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Expected Iterable, but did not find one for field ' + info.parentType.name + '.' + info.fieldName + '.') : void 0;

  // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.
  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["forEach"])(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = addPath(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(completedItem)) {
      containsPromise = true;
    }
    completedResults.push(completedItem);
  });

  return containsPromise ? Promise.all(completedResults) : completedResults;
}

/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */
function completeLeafValue(returnType, result) {
  !returnType.serialize ? Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_invariant__["a" /* default */])(0, 'Missing serialize method on type') : void 0;
  var serializedResult = returnType.serialize(result);
  if (Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_isInvalid__["a" /* default */])(serializedResult)) {
    throw new Error('Expected a value of type "' + String(returnType) + '" but ' + ('received: ' + String(result)));
  }
  return serializedResult;
}

/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var runtimeType = returnType.resolveType ? returnType.resolveType(result, exeContext.contextValue, info) : defaultResolveTypeFn(result, exeContext.contextValue, info, returnType);

  var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(runtimeType);
  if (promise) {
    return promise.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!Object(__WEBPACK_IMPORTED_MODULE_12__type_definition__["K" /* isObjectType */])(runtimeType)) {
    throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Abstract type ' + returnType.name + ' must resolve to an Object type at ' + ('runtime for field ' + info.parentType.name + '.' + info.fieldName + ' with ') + ('value "' + String(result) + '", received "' + String(runtimeType) + '". ') + ('Either the ' + returnType.name + ' type should provide a "resolveType" ') + 'function or each possible types should provide an ' + '"isTypeOf" function.', fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Runtime Object type "' + runtimeType.name + '" is not a possible type ' + ('for "' + returnType.name + '".'), fieldNodes);
  }

  return runtimeType;
}

/**
 * Complete an Object value by executing all sub-selections.
 */
function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(isTypeOf);
    if (promise) {
      return promise.then(function (isTypeOfResult) {
        if (!isTypeOfResult) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new __WEBPACK_IMPORTED_MODULE_1__error__["a" /* GraphQLError */]('Expected value of type "' + returnType.name + '" but got: ' + String(result) + '.', fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}

/**
 * A memoized collection of relevant subfields in the context of the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */
var collectSubfields = Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_memoize3__["a" /* default */])(_collectSubfields);
function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);
  for (var i = 0; i < fieldNodes.length; i++) {
    var selectionSet = fieldNodes[i].selectionSet;
    if (selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }
  return subFieldNodes;
}

/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */
function defaultResolveTypeFn(value, context, info, abstractType) {
  // First, look for `__typename`.
  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.__typename === 'string') {
    return value.__typename;
  }

  // Otherwise, test each possible type.
  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, context, info);

      var promise = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_getPromise__["a" /* default */])(isTypeOfResult);
      if (promise) {
        promisedIsTypeOfResults[i] = promise;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
        if (isTypeOfResults[_i]) {
          return possibleTypes[_i];
        }
      }
    });
  }
}

/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context.
 */
var defaultFieldResolver = function defaultFieldResolver(source, args, context, info) {
  // ensure source is a value for which property access is acceptable.
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || typeof source === 'function') {
    var property = source[info.fieldName];
    if (typeof property === 'function') {
      return source[info.fieldName](args, context, info);
    }
    return property;
  }
};

/**
 * This method looks up the field on the given type defintion.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */
function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === __WEBPACK_IMPORTED_MODULE_14__type_introspection__["a" /* SchemaMetaFieldDef */].name && schema.getQueryType() === parentType) {
    return __WEBPACK_IMPORTED_MODULE_14__type_introspection__["a" /* SchemaMetaFieldDef */];
  } else if (fieldName === __WEBPACK_IMPORTED_MODULE_14__type_introspection__["c" /* TypeMetaFieldDef */].name && schema.getQueryType() === parentType) {
    return __WEBPACK_IMPORTED_MODULE_14__type_introspection__["c" /* TypeMetaFieldDef */];
  } else if (fieldName === __WEBPACK_IMPORTED_MODULE_14__type_introspection__["d" /* TypeNameMetaFieldDef */].name) {
    return __WEBPACK_IMPORTED_MODULE_14__type_introspection__["d" /* TypeNameMetaFieldDef */];
  }
  return parentType.getFields()[fieldName];
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = valueFromAST;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_objectValues__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_definition__ = __webpack_require__(1);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */
function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["I" /* isNonNullType */])(type)) {
    if (valueNode.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].NULL) {
      return; // Invalid: intentionally return no value.
    }
    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].VARIABLE) {
    var variableName = valueNode.name.value;
    if (!variables || Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(variables[variableName])) {
      // No valid return value.
      return;
    }
    // Note: we're not doing any checking that this variable is correct. We're
    // assuming that this query has been validated and the variable usage here
    // is of the correct type.
    return variables[variableName];
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["G" /* isListType */])(type)) {
    var itemType = type.ofType;
    if (valueNode.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;
      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["I" /* isNonNullType */])(itemType)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
          if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(itemValue)) {
            return; // Invalid: intentionally return no value.
          }
          coercedValues.push(itemValue);
        }
      }
      return coercedValues;
    }
    var coercedValue = valueFromAST(valueNode, itemType, variables);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }
    return [coercedValue];
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["C" /* isInputObjectType */])(type)) {
    if (valueNode.kind !== __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].OBJECT) {
      return; // Invalid: intentionally return no value.
    }
    var coercedObj = Object.create(null);
    var fieldNodes = Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_keyMap__["a" /* default */])(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fields = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_objectValues__["a" /* default */])(type.getFields());
    for (var _i = 0; _i < fields.length; _i++) {
      var field = fields[_i];
      var fieldNode = fieldNodes[field.name];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(field.defaultValue)) {
          coercedObj[field.name] = field.defaultValue;
        } else if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["I" /* isNonNullType */])(field.type)) {
          return; // Invalid: intentionally return no value.
        }
        continue;
      }
      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }
      coercedObj[field.name] = fieldValue;
    }
    return coercedObj;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["B" /* isEnumType */])(type)) {
    if (valueNode.kind !== __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].ENUM) {
      return; // Invalid: intentionally return no value.
    }
    var enumValue = type.getValue(valueNode.value);
    if (!enumValue) {
      return; // Invalid: intentionally return no value.
    }
    return enumValue.value;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["M" /* isScalarType */])(type)) {
    // Scalars fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result = void 0;
    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(result)) {
      return; // Invalid: intentionally return no value.
    }
    return result;
  }

  /* istanbul ignore next */
  throw new Error('Unknown type: ' + type + '.');
}

// Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.
function isMissingVariable(valueNode, variables) {
  return valueNode.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].VARIABLE && (!variables || Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(variables[valueNode.name.value]));
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (process && "development" !== 'production' ? // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }
  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;
    if (valueClass && valueClass.name === className) {
      throw new Error('Cannot use ' + className + ' "' + value + '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.');
    }
  }
  return false;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
}); /**
    * Copyright (c) 2015-present, Facebook, Inc.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = astFromValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iterall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_isNullish__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_objectValues__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type_scalars__ = __webpack_require__(10);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */












/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
function astFromValue(value, type) {
  // Ensure flow knows that we treat function params as const.
  var _value = value;

  if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["I" /* isNonNullType */])(type)) {
    var astValue = astFromValue(_value, type.ofType);
    if (astValue && astValue.kind === __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].NULL) {
      return null;
    }
    return astValue;
  }

  // only explicit null, not undefined, NaN
  if (_value === null) {
    return { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].NULL };
  }

  // undefined, NaN
  if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(_value)) {
    return null;
  }

  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.
  if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["G" /* isListType */])(type)) {
    var itemType = type.ofType;
    if (Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["isCollection"])(_value)) {
      var valuesNodes = [];
      Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["forEach"])(_value, function (item) {
        var itemNode = astFromValue(item, itemType);
        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].LIST, values: valuesNodes };
    }
    return astFromValue(_value, itemType);
  }

  // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.
  if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["C" /* isInputObjectType */])(type)) {
    if (_value === null || (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) !== 'object') {
      return null;
    }
    var fields = Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_objectValues__["a" /* default */])(type.getFields());
    var fieldNodes = [];
    fields.forEach(function (field) {
      var fieldValue = astFromValue(_value[field.name], field.type);
      if (fieldValue) {
        fieldNodes.push({
          kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].OBJECT_FIELD,
          name: { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].NAME, value: field.name },
          value: fieldValue
        });
      }
    });
    return { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].OBJECT, fields: fieldNodes };
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["M" /* isScalarType */])(type) || Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["B" /* isEnumType */])(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(_value);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isNullish__["a" /* default */])(serialized)) {
      return null;
    }

    // Others serialize based on their corresponding JavaScript scalar types.
    if (typeof serialized === 'boolean') {
      return { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].BOOLEAN, value: serialized };
    }

    // JavaScript numbers can be Int or Float values.
    if (typeof serialized === 'number') {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].INT, value: stringNum } : { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].FLOAT, value: stringNum };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["B" /* isEnumType */])(type)) {
        return { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].ENUM, value: serialized };
      }

      // ID types can use Int literals.
      if (type === __WEBPACK_IMPORTED_MODULE_6__type_scalars__["c" /* GraphQLID */] && integerStringRegExp.test(serialized)) {
        return { kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].INT, value: serialized };
      }

      return {
        kind: __WEBPACK_IMPORTED_MODULE_4__language_kinds__["a" /* Kind */].STRING,
        value: serialized
      };
    }

    throw new TypeError('Cannot convert value to AST: ' + String(serialized));
  }

  /* istanbul ignore next */
  throw new Error('Unknown type: ' + type + '.');
}

/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */
var integerStringRegExp = /^-?(0|[1-9][0-9]*)$/;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createLexer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenKind; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getTokenDesc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blockStringValue__ = __webpack_require__(47);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;
  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }
  return token;
}

/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});

/**
 * The enum type representing the token kinds values.
 */


/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, pos);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, pos, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, pos, line, col, prev);
    // $
    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &
    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (
    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )
    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =
    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @
    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [
    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {
    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |
    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }
    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "
    case 34:
      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev);
      }
      return readString(source, pos, line, col, prev);
  }

  throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, pos, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';
          break;
        case 47:
          value += '/';
          break;
        case 92:
          value += '\\';
          break;
        case 98:
          value += '\b';
          break;
        case 102:
          value += '\f';
          break;
        case 110:
          value += '\n';
          break;
        case 114:
          value += '\r';
          break;
        case 116:
          value += '\t';
          break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Unterminated string.');
}

/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */
function readBlockString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, Object(__WEBPACK_IMPORTED_MODULE_1__blockStringValue__["a" /* default */])(rawValue));
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    // Escape Triple-Quote (\""")
    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(__WEBPACK_IMPORTED_MODULE_0__error__["e" /* syntaxError */])(source, position, 'Unterminated string.');
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;
  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }
  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = validate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_visitor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_validate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_TypeInfo__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__specifiedRules__ = __webpack_require__(48);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */













/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */
function validate(schema, ast, rules, typeInfo) {
  !ast ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'Must provide document') : void 0;
  // If the schema used for validation is invalid, throw an error.
  Object(__WEBPACK_IMPORTED_MODULE_5__type_validate__["a" /* assertValidSchema */])(schema);
  return visitUsingRules(schema, typeInfo || new __WEBPACK_IMPORTED_MODULE_6__utilities_TypeInfo__["a" /* TypeInfo */](schema), ast, rules || __WEBPACK_IMPORTED_MODULE_7__specifiedRules__["a" /* specifiedRules */]);
}

/**
 * This uses a specialized visitor which runs multiple visitors in parallel,
 * while maintaining the visitor skip and break API.
 *
 * @internal
 */
function visitUsingRules(schema, typeInfo, documentAST, rules) {
  var context = new ValidationContext(schema, documentAST, typeInfo);
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  // Visit the whole document with each instance of all provided rules.
  Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["c" /* visit */])(documentAST, Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["e" /* visitWithTypeInfo */])(typeInfo, Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["d" /* visitInParallel */])(visitors)));
  return context.getErrors();
}

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ValidationContext = function () {
  function ValidationContext(schema, ast, typeInfo) {
    _classCallCheck(this, ValidationContext);

    this._schema = schema;
    this._ast = ast;
    this._typeInfo = typeInfo;
    this._errors = [];
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._variableUsages = new Map();
    this._recursiveVariableUsages = new Map();
  }

  ValidationContext.prototype.reportError = function reportError(error) {
    this._errors.push(error);
  };

  ValidationContext.prototype.getErrors = function getErrors() {
    return this._errors;
  };

  ValidationContext.prototype.getSchema = function getSchema() {
    return this._schema;
  };

  ValidationContext.prototype.getDocument = function getDocument() {
    return this._ast;
  };

  ValidationContext.prototype.getFragment = function getFragment(name) {
    var fragments = this._fragments;
    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }
        return frags;
      }, Object.create(null));
    }
    return fragments[name];
  };

  ValidationContext.prototype.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);
    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];
      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();
        for (var i = 0; i < set.selections.length; i++) {
          var selection = set.selections[i];
          if (selection.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }
      this._fragmentSpreads.set(node, spreads);
    }
    return spreads;
  };

  ValidationContext.prototype.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);
    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];
      while (nodesToVisit.length !== 0) {
        var _node = nodesToVisit.pop();
        var spreads = this.getFragmentSpreads(_node);
        for (var i = 0; i < spreads.length; i++) {
          var fragName = spreads[i].name.value;
          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);
            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }
      this._recursivelyReferencedFragments.set(operation, fragments);
    }
    return fragments;
  };

  ValidationContext.prototype.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);
    if (!usages) {
      var newUsages = [];
      var typeInfo = new __WEBPACK_IMPORTED_MODULE_6__utilities_TypeInfo__["a" /* TypeInfo */](this._schema);
      Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["c" /* visit */])(node, Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["e" /* visitWithTypeInfo */])(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({ node: variable, type: typeInfo.getInputType() });
        }
      }));
      usages = newUsages;
      this._variableUsages.set(node, usages);
    }
    return usages;
  };

  ValidationContext.prototype.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);
    if (!usages) {
      usages = this.getVariableUsages(operation);
      var fragments = this.getRecursivelyReferencedFragments(operation);
      for (var i = 0; i < fragments.length; i++) {
        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
      }
      this._recursiveVariableUsages.set(operation, usages);
    }
    return usages;
  };

  ValidationContext.prototype.getType = function getType() {
    return this._typeInfo.getType();
  };

  ValidationContext.prototype.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  ValidationContext.prototype.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  ValidationContext.prototype.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  ValidationContext.prototype.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  ValidationContext.prototype.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  ValidationContext.prototype.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}();

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quotedOrList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orList__ = __webpack_require__(34);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Given [ A, B, C ] return '"A", "B", or "C"'.
 */
function quotedOrList(items) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__orList__["a" /* default */])(items.map(function (item) {
    return '"' + item + '"';
  }));
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = orList;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var MAX_LENGTH = 5;

/**
 * Given [ A, B, C ] return 'A, B, or C'.
 */
function orList(items) {
  var selected = items.slice(0, MAX_LENGTH);
  return selected.reduce(function (list, quoted, index) {
    return list + (selected.length > 2 ? ', ' : ' ') + (index === selected.length - 1 ? 'or ' : '') + quoted;
  });
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export badValueMessage */
/* unused harmony export requiredFieldMessage */
/* unused harmony export unknownFieldMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = ValuesOfCorrectType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsutils_orList__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsutils_suggestionList__ = __webpack_require__(20);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */










function badValueMessage(typeName, valueName, message) {
  return 'Expected type ' + typeName + ', found ' + valueName + (message ? '; ' + message : '.');
}

function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
  return 'Field ' + typeName + '.' + fieldName + ' of required type ' + (fieldTypeName + ' was not provided.');
}

function unknownFieldMessage(typeName, fieldName, message) {
  return 'Field "' + fieldName + '" is not defined by type ' + typeName + (message ? '; ' + message : '.');
}

/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */
function ValuesOfCorrectType(context) {
  return {
    NullValue: function NullValue(node) {
      var type = context.getInputType();
      if (Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["I" /* isNonNullType */])(type)) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](badValueMessage(String(type), Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node)), node));
      }
    },
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["y" /* getNullableType */])(context.getParentInputType());
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["G" /* isListType */])(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["x" /* getNamedType */])(context.getInputType());
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["C" /* isInputObjectType */])(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
      // Ensure every required field exists.
      var inputFields = type.getFields();
      var fieldNodeMap = Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_keyMap__["a" /* default */])(node.fields, function (field) {
        return field.name.value;
      });
      Object.keys(inputFields).forEach(function (fieldName) {
        var fieldType = inputFields[fieldName].type;
        var fieldNode = fieldNodeMap[fieldName];
        if (!fieldNode && Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["I" /* isNonNullType */])(fieldType)) {
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](requiredFieldMessage(type.name, fieldName, String(fieldType)), node));
        }
      });
    },
    ObjectField: function ObjectField(node) {
      var parentType = Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["x" /* getNamedType */])(context.getParentInputType());
      var fieldType = context.getInputType();
      if (!fieldType && Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["C" /* isInputObjectType */])(parentType)) {
        var suggestions = Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_suggestionList__["a" /* default */])(node.name.value, Object.keys(parentType.getFields()));
        var didYouMean = suggestions.length !== 0 ? 'Did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_orList__["a" /* default */])(suggestions) + '?' : undefined;
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unknownFieldMessage(parentType.name, node.name.value, didYouMean), node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["x" /* getNamedType */])(context.getInputType());
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["B" /* isEnumType */])(type)) {
        isValidScalar(context, node);
      } else if (!type.getValue(node.value)) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](badValueMessage(type.name, Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node), enumTypeSuggestion(type, node)), node));
      }
    },

    IntValue: function IntValue(node) {
      return isValidScalar(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidScalar(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidScalar(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidScalar(context, node);
    }
  };
}

/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */
function isValidScalar(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();
  if (!locationType) {
    return;
  }

  var type = Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["x" /* getNamedType */])(locationType);

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["M" /* isScalarType */])(type)) {
    context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](badValueMessage(String(locationType), Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node), enumTypeSuggestion(type, node)), node));
    return;
  }

  // Scalars determine if a literal value is valid via parseLiteral() which
  // may throw or return an invalid value to indicate failure.
  try {
    var parseResult = type.parseLiteral(node, undefined /* variables */);
    if (Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_isInvalid__["a" /* default */])(parseResult)) {
      context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](badValueMessage(String(locationType), Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node)), node));
    }
  } catch (error) {
    // Ensure a reference to the original error is maintained.
    context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](badValueMessage(String(locationType), Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node), error.message), node, undefined, undefined, undefined, error));
  }
}

function enumTypeSuggestion(type, node) {
  if (Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["B" /* isEnumType */])(type)) {
    var suggestions = Object(__WEBPACK_IMPORTED_MODULE_6__jsutils_suggestionList__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node), type.getValues().map(function (value) {
      return value.name;
    }));
    if (suggestions.length !== 0) {
      return 'Did you mean the enum value ' + Object(__WEBPACK_IMPORTED_MODULE_5__jsutils_orList__["a" /* default */])(suggestions) + '?';
    }
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getVariableValues;
/* harmony export (immutable) */ __webpack_exports__["a"] = getArgumentValues;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDirectiveValues;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_find__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_coerceValue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_typeFromAST__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_valueFromAST__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__type_definition__ = __webpack_require__(1);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */













/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs) {
  var errors = [];
  var coercedValues = {};
  for (var i = 0; i < varDefNodes.length; i++) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = Object(__WEBPACK_IMPORTED_MODULE_5__utilities_typeFromAST__["a" /* typeFromAST */])(schema, varDefNode.type);
    if (!Object(__WEBPACK_IMPORTED_MODULE_9__type_definition__["D" /* isInputType */])(varType)) {
      errors.push(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */]('Variable "$' + varName + '" expected value of type ' + ('"' + Object(__WEBPACK_IMPORTED_MODULE_8__language_printer__["a" /* print */])(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]));
    } else {
      var value = inputs[varName];
      if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(value)) {
        if (Object(__WEBPACK_IMPORTED_MODULE_9__type_definition__["I" /* isNonNullType */])(varType)) {
          errors.push(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */]('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]));
        } else if (varDefNode.defaultValue) {
          coercedValues[varName] = Object(__WEBPACK_IMPORTED_MODULE_6__utilities_valueFromAST__["a" /* valueFromAST */])(varDefNode.defaultValue, varType);
        }
      } else {
        var _coerced = Object(__WEBPACK_IMPORTED_MODULE_4__utilities_coerceValue__["a" /* coerceValue */])(value, varType, varDefNode);
        var coercionErrors = _coerced.errors;
        if (coercionErrors) {
          (function () {
            var messagePrelude = 'Variable "$' + varName + '" got invalid value ' + JSON.stringify(value) + '; ';
            coercionErrors.forEach(function (error) {
              error.message = messagePrelude + error.message;
            });
            errors.push.apply(errors, coercionErrors);
          })();
        } else {
          coercedValues[varName] = _coerced.value;
        }
      }
    }
  }
  return errors.length === 0 ? { errors: undefined, coerced: coercedValues } : { errors: errors, coerced: undefined };
}

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argDefs = def.args;
  var argNodes = node.arguments;
  if (!argDefs || !argNodes) {
    return coercedValues;
  }
  var argNodeMap = Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_keyMap__["a" /* default */])(argNodes, function (arg) {
    return arg.name.value;
  });
  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var defaultValue = argDef.defaultValue;
    if (!argumentNode) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (Object(__WEBPACK_IMPORTED_MODULE_9__type_definition__["I" /* isNonNullType */])(argType)) {
        throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */]('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
      }
    } else if (argumentNode.value.kind === __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].VARIABLE) {
      var variableName = argumentNode.value.name.value;
      if (variableValues && Object.prototype.hasOwnProperty.call(variableValues, variableName) && !Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(variableValues[variableName])) {
        // Note: this does not check that this variable value is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.
        coercedValues[name] = variableValues[variableName];
      } else if (!Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(defaultValue)) {
        coercedValues[name] = defaultValue;
      } else if (Object(__WEBPACK_IMPORTED_MODULE_9__type_definition__["I" /* isNonNullType */])(argType)) {
        throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */]('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
      }
    } else {
      var valueNode = argumentNode.value;
      var coercedValue = Object(__WEBPACK_IMPORTED_MODULE_6__utilities_valueFromAST__["a" /* valueFromAST */])(valueNode, argType, variableValues);
      if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isInvalid__["a" /* default */])(coercedValue)) {
        // Note: ValuesOfCorrectType validation should catch this before
        // execution. This is a runtime check to ensure execution does not
        // continue with an invalid argument value.
        throw new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */]('Argument "' + name + '" has invalid value ' + Object(__WEBPACK_IMPORTED_MODULE_8__language_printer__["a" /* print */])(valueNode) + '.', [argumentNode.value]);
      }
      coercedValues[name] = coercedValue;
    }
  }
  return coercedValues;
}

/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_find__["a" /* default */])(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = coerceValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iterall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_isNullish__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_orList__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsutils_suggestionList__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type_definition__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */











/**
 * Coerces a JavaScript value given a GraphQL Type.
 *
 * Returns either a value which is valid for the provided type or a list of
 * encountered coercion errors.
 *
 */
function coerceValue(value, type, blameNode, path) {
  // A value must be provided if the type is non-null.
  if (Object(__WEBPACK_IMPORTED_MODULE_6__type_definition__["I" /* isNonNullType */])(type)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isNullish__["a" /* default */])(value)) {
      return ofErrors([coercionError('Expected non-nullable type ' + String(type) + ' not to be null', blameNode, path)]);
    }
    return coerceValue(value, type.ofType, blameNode, path);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_isNullish__["a" /* default */])(value)) {
    // Explicitly return the value null.
    return ofValue(null);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_6__type_definition__["M" /* isScalarType */])(type)) {
    // Scalars determine if a value is valid via parseValue(), which can
    // throw to indicate failure. If it throws, maintain a reference to
    // the original error.
    try {
      var parseResult = type.parseValue(value);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(parseResult)) {
        return ofErrors([coercionError('Expected type ' + type.name, blameNode, path)]);
      }
      return ofValue(parseResult);
    } catch (error) {
      return ofErrors([coercionError('Expected type ' + type.name, blameNode, path, error.message, error)]);
    }
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_6__type_definition__["B" /* isEnumType */])(type)) {
    if (typeof value === 'string') {
      var enumValue = type.getValue(value);
      if (enumValue) {
        return ofValue(enumValue.value);
      }
    }
    var suggestions = Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_suggestionList__["a" /* default */])(String(value), type.getValues().map(function (enumValue) {
      return enumValue.name;
    }));
    var didYouMean = suggestions.length !== 0 ? 'did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_orList__["a" /* default */])(suggestions) + '?' : undefined;
    return ofErrors([coercionError('Expected type ' + type.name, blameNode, path, didYouMean)]);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_6__type_definition__["G" /* isListType */])(type)) {
    var itemType = type.ofType;
    if (Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["isCollection"])(value)) {
      var _errors = void 0;
      var coercedValue = [];
      Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["forEach"])(value, function (itemValue, index) {
        var coercedItem = coerceValue(itemValue, itemType, blameNode, atPath(path, index));
        if (coercedItem.errors) {
          _errors = add(_errors, coercedItem.errors);
        } else if (!_errors) {
          coercedValue.push(coercedItem.value);
        }
      });
      return _errors ? ofErrors(_errors) : ofValue(coercedValue);
    }
    // Lists accept a non-list value as a list of one.
    var coercedItem = coerceValue(value, itemType, blameNode);
    return coercedItem.errors ? coercedItem : ofValue([coercedItem.value]);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_6__type_definition__["C" /* isInputObjectType */])(type)) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      return ofErrors([coercionError('Expected type ' + type.name + ' to be an object', blameNode, path)]);
    }
    var _errors2 = void 0;
    var _coercedValue = {};
    var fields = type.getFields();

    // Ensure every defined field is valid.
    for (var fieldName in fields) {
      if (hasOwnProperty.call(fields, fieldName)) {
        var field = fields[fieldName];
        var fieldValue = value[fieldName];
        if (Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(fieldValue)) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(field.defaultValue)) {
            _coercedValue[fieldName] = field.defaultValue;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_6__type_definition__["I" /* isNonNullType */])(field.type)) {
            _errors2 = add(_errors2, coercionError('Field ' + printPath(atPath(path, fieldName)) + ' of required ' + ('type ' + String(field.type) + ' was not provided'), blameNode));
          }
        } else {
          var coercedField = coerceValue(fieldValue, field.type, blameNode, atPath(path, fieldName));
          if (coercedField.errors) {
            _errors2 = add(_errors2, coercedField.errors);
          } else if (!_errors2) {
            _coercedValue[fieldName] = coercedField.value;
          }
        }
      }
    }

    // Ensure every provided field is defined.
    for (var _fieldName in value) {
      if (hasOwnProperty.call(value, _fieldName)) {
        if (!fields[_fieldName]) {
          var _suggestions = Object(__WEBPACK_IMPORTED_MODULE_4__jsutils_suggestionList__["a" /* default */])(_fieldName, Object.keys(fields));
          var _didYouMean = _suggestions.length !== 0 ? 'did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_orList__["a" /* default */])(_suggestions) + '?' : undefined;
          _errors2 = add(_errors2, coercionError('Field "' + _fieldName + '" is not defined by type ' + type.name, blameNode, path, _didYouMean));
        }
      }
    }

    return _errors2 ? ofErrors(_errors2) : ofValue(_coercedValue);
  }

  /* istanbul ignore next */
  throw new Error('Unexpected type: ' + type + '.');
}

function ofValue(value) {
  return { errors: undefined, value: value };
}

function ofErrors(errors) {
  return { errors: errors, value: undefined };
}

function add(errors, moreErrors) {
  return (errors || []).concat(moreErrors);
}

function atPath(prev, key) {
  return { prev: prev, key: key };
}

function coercionError(message, blameNode, path, subMessage, originalError) {
  var pathStr = printPath(path);
  // Return a GraphQLError instance
  return new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* GraphQLError */](message + (pathStr ? ' at ' + pathStr : '') + (subMessage ? '; ' + subMessage : '.'), blameNode, undefined, undefined, undefined, originalError);
}

// Build a string describing the path into the value where the error was found
function printPath(path) {
  var pathStr = '';
  var currentPath = path;
  while (currentPath) {
    pathStr = (typeof currentPath.key === 'string' ? '.' + currentPath.key : '[' + String(currentPath.key) + ']') + pathStr;
    currentPath = currentPath.prev;
  }
  return pathStr ? 'value' + pathStr : '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _printError = __webpack_require__(80);

var _location = __webpack_require__(38);

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined;

  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }
      return list;
    }, []);
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  if (positions && source) {
    var providedSource = source;
    _locations = positions.map(function (pos) {
      return (0, _location.getLocation)(providedSource, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
      }
      return list;
    }, []);
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      value: extensions || originalError && originalError.extensions
    }
  });

  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' },
  toString: {
    value: function toString() {
      return (0, _printError.printError)(this);
    }
  }
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = valueFromASTUntyped;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_keyValMap__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_kinds__ = __webpack_require__(2);

/**
 *  Copyright (c) 2017, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */







/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].NULL:
      return null;
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INT:
      return parseInt(valueNode.value, 10);
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FLOAT:
      return parseFloat(valueNode.value);
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].STRING:
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].ENUM:
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].BOOLEAN:
      return valueNode.value;
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].OBJECT:
      return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_keyValMap__["a" /* default */])(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });
    case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].VARIABLE:
      var variableName = valueNode.name.value;
      return variables && !Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(variables[variableName]) ? variables[variableName] : undefined;
  }
  /* istanbul ignore next */
  throw new Error('Unexpected value kind: ' + valueNode.kind);
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = printError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__language_location__ = __webpack_require__(30);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];
  if (error.nodes) {
    error.nodes.forEach(function (node) {
      if (node.loc) {
        printedLocations.push(highlightSourceAtLocation(node.loc.source, Object(__WEBPACK_IMPORTED_MODULE_0__language_location__["a" /* getLocation */])(node.loc.source, node.loc.start)));
      }
    });
  } else if (error.source && error.locations) {
    var source = error.source;
    error.locations.forEach(function (location) {
      printedLocations.push(highlightSourceAtLocation(source, location));
    });
  }
  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var lineOffset = source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var contextLine = line + lineOffset;
  var contextColumn = location.column + columnOffset;
  var prevLineNum = (contextLine - 1).toString();
  var lineNum = contextLine.toString();
  var nextLineNum = (contextLine + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
  var outputLines = [source.name + ' (' + contextLine + ':' + contextColumn + ')', line >= 2 && lpad(padLen, prevLineNum) + ': ' + lines[line - 2], lpad(padLen, lineNum) + ': ' + lines[line - 1], whitespace(2 + padLen + contextColumn - 1) + '^', line < lines.length && lpad(padLen, nextLineNum) + ': ' + lines[line]];
  return outputLines.filter(Boolean).join('\n');
}

function getColumnOffset(source, location) {
  return location.line === 1 ? source.locationOffset.column - 1 : 0;
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assertValidName;
/* harmony export (immutable) */ __webpack_exports__["b"] = isValidNameError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_GraphQLError__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__ = __webpack_require__(4);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/**
 * Upholds the spec rules about naming.
 */
function assertValidName(name) {
  var error = isValidNameError(name);
  if (error) {
    throw error;
  }
  return name;
}

/**
 * Returns an Error if a name is invalid.
 */
function isValidNameError(name, node) {
  !(typeof name === 'string') ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_invariant__["a" /* default */])(0, 'Expected string') : void 0;
  if (name.length > 1 && name[0] === '_' && name[1] === '_' &&
  // Note: this special case is not part of the spec and exists only to
  // support legacy server configurations. Do not rely on this special case
  // as it may be removed at any time.
  name !== '__configs__') {
    return new __WEBPACK_IMPORTED_MODULE_0__error_GraphQLError__["a" /* GraphQLError */]('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection.', node);
  }
  if (!NAME_RX.test(name)) {
    return new __WEBPACK_IMPORTED_MODULE_0__error_GraphQLError__["a" /* GraphQLError */]('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.', node);
  }
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Source; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || { line: 1, column: 1 };
  !(this.locationOffset.line > 0) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = locatedError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GraphQLError__ = __webpack_require__(12);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new __WEBPACK_IMPORTED_MODULE_0__GraphQLError__["a" /* GraphQLError */](originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = blockStringValue;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g);

  // Remove common indentation from all lines but first.
  var commonIndent = null;
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);
    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;
      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  }

  // Remove leading and trailing blank lines.
  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }
  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  }

  // Return a string of the lines joined with U+000A.
  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;
  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }
  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return specifiedRules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rules_ExecutableDefinitions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules_UniqueOperationNames__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules_LoneAnonymousOperation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules_SingleFieldSubscriptions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rules_KnownTypeNames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rules_FragmentsOnCompositeTypes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rules_VariablesAreInputTypes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rules_ScalarLeafs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rules_FieldsOnCorrectType__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rules_UniqueFragmentNames__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rules_KnownFragmentNames__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rules_NoUnusedFragments__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rules_PossibleFragmentSpreads__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rules_NoFragmentCycles__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rules_UniqueVariableNames__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rules_NoUndefinedVariables__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rules_NoUnusedVariables__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rules_KnownDirectives__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rules_UniqueDirectivesPerLocation__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rules_KnownArgumentNames__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rules_UniqueArgumentNames__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__rules_ValuesOfCorrectType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__rules_ProvidedNonNullArguments__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__rules_VariablesDefaultValueAllowed__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__rules_VariablesInAllowedPosition__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__rules_OverlappingFieldsCanBeMerged__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__rules_UniqueInputFieldNames__ = __webpack_require__(73);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Spec Section: "Executable Definitions"


// Spec Section: "Operation Name Uniqueness"


// Spec Section: "Lone Anonymous Operation"


// Spec Section: "Subscriptions with Single Root Field"


// Spec Section: "Fragment Spread Type Existence"


// Spec Section: "Fragments on Composite Types"


// Spec Section: "Variables are Input Types"


// Spec Section: "Leaf Field Selections"


// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"


// Spec Section: "Fragment Name Uniqueness"


// Spec Section: "Fragment spread target defined"


// Spec Section: "Fragments must be used"


// Spec Section: "Fragment spread is possible"


// Spec Section: "Fragments must not form cycles"


// Spec Section: "Variable Uniqueness"


// Spec Section: "All Variable Used Defined"


// Spec Section: "All Variables Used"


// Spec Section: "Directives Are Defined"


// Spec Section: "Directives Are Unique Per Location"


// Spec Section: "Argument Names"


// Spec Section: "Argument Uniqueness"


// Spec Section: "Value Type Correctness"


// Spec Section: "Argument Optionality"


// Spec Section: "Variables Default Value Is Allowed"


// Spec Section: "All Variable Usages Are Allowed"


// Spec Section: "Field Selection Merging"


// Spec Section: "Input Object Field Uniqueness"


/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */
var specifiedRules = [__WEBPACK_IMPORTED_MODULE_0__rules_ExecutableDefinitions__["a" /* ExecutableDefinitions */], __WEBPACK_IMPORTED_MODULE_1__rules_UniqueOperationNames__["a" /* UniqueOperationNames */], __WEBPACK_IMPORTED_MODULE_2__rules_LoneAnonymousOperation__["a" /* LoneAnonymousOperation */], __WEBPACK_IMPORTED_MODULE_3__rules_SingleFieldSubscriptions__["a" /* SingleFieldSubscriptions */], __WEBPACK_IMPORTED_MODULE_4__rules_KnownTypeNames__["a" /* KnownTypeNames */], __WEBPACK_IMPORTED_MODULE_5__rules_FragmentsOnCompositeTypes__["a" /* FragmentsOnCompositeTypes */], __WEBPACK_IMPORTED_MODULE_6__rules_VariablesAreInputTypes__["a" /* VariablesAreInputTypes */], __WEBPACK_IMPORTED_MODULE_7__rules_ScalarLeafs__["a" /* ScalarLeafs */], __WEBPACK_IMPORTED_MODULE_8__rules_FieldsOnCorrectType__["a" /* FieldsOnCorrectType */], __WEBPACK_IMPORTED_MODULE_9__rules_UniqueFragmentNames__["a" /* UniqueFragmentNames */], __WEBPACK_IMPORTED_MODULE_10__rules_KnownFragmentNames__["a" /* KnownFragmentNames */], __WEBPACK_IMPORTED_MODULE_11__rules_NoUnusedFragments__["a" /* NoUnusedFragments */], __WEBPACK_IMPORTED_MODULE_12__rules_PossibleFragmentSpreads__["a" /* PossibleFragmentSpreads */], __WEBPACK_IMPORTED_MODULE_13__rules_NoFragmentCycles__["a" /* NoFragmentCycles */], __WEBPACK_IMPORTED_MODULE_14__rules_UniqueVariableNames__["a" /* UniqueVariableNames */], __WEBPACK_IMPORTED_MODULE_15__rules_NoUndefinedVariables__["a" /* NoUndefinedVariables */], __WEBPACK_IMPORTED_MODULE_16__rules_NoUnusedVariables__["a" /* NoUnusedVariables */], __WEBPACK_IMPORTED_MODULE_17__rules_KnownDirectives__["a" /* KnownDirectives */], __WEBPACK_IMPORTED_MODULE_18__rules_UniqueDirectivesPerLocation__["a" /* UniqueDirectivesPerLocation */], __WEBPACK_IMPORTED_MODULE_19__rules_KnownArgumentNames__["a" /* KnownArgumentNames */], __WEBPACK_IMPORTED_MODULE_20__rules_UniqueArgumentNames__["a" /* UniqueArgumentNames */], __WEBPACK_IMPORTED_MODULE_21__rules_ValuesOfCorrectType__["a" /* ValuesOfCorrectType */], __WEBPACK_IMPORTED_MODULE_22__rules_ProvidedNonNullArguments__["a" /* ProvidedNonNullArguments */], __WEBPACK_IMPORTED_MODULE_23__rules_VariablesDefaultValueAllowed__["a" /* VariablesDefaultValueAllowed */], __WEBPACK_IMPORTED_MODULE_24__rules_VariablesInAllowedPosition__["a" /* VariablesInAllowedPosition */], __WEBPACK_IMPORTED_MODULE_25__rules_OverlappingFieldsCanBeMerged__["a" /* OverlappingFieldsCanBeMerged */], __WEBPACK_IMPORTED_MODULE_26__rules_UniqueInputFieldNames__["a" /* UniqueInputFieldNames */]];

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export duplicateOperationNameMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = UniqueOperationNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function duplicateOperationNameMessage(operationName) {
  return 'There can be only one operation named "' + operationName + '".';
}

/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;
      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }
      return false;
    },

    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export anonOperationNotAloneMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = LoneAnonymousOperation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_kinds__ = __webpack_require__(2);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */




function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}

/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](anonOperationNotAloneMessage(), [node]));
      }
    }
  };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export singleFieldOnlyMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = SingleFieldSubscriptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function singleFieldOnlyMessage(name) {
  return (name ? 'Subscription "' + name + '" ' : 'Anonymous Subscription ') + 'must select only one top level field.';
}

/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unknownTypeMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = KnownTypeNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__ = __webpack_require__(33);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */





function unknownTypeMessage(typeName, suggestedTypes) {
  var message = 'Unknown type "' + typeName + '".';
  if (suggestedTypes.length) {
    message += ' Did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__["a" /* default */])(suggestedTypes) + '?';
  }
  return message;
}

/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
function KnownTypeNames(context) {
  return {
    // TODO: when validating IDL, re-enable these. Experimental version does not
    // add unreferenced types, resulting in false-positive errors. Squelched
    // errors for now.
    ObjectTypeDefinition: function ObjectTypeDefinition() {
      return false;
    },
    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
      return false;
    },
    UnionTypeDefinition: function UnionTypeDefinition() {
      return false;
    },
    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
      return false;
    },
    NamedType: function NamedType(node) {
      var schema = context.getSchema();
      var typeName = node.name.value;
      var type = schema.getType(typeName);
      if (!type) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unknownTypeMessage(typeName, Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__["a" /* default */])(typeName, Object.keys(schema.getTypeMap()))), [node]));
      }
    }
  };
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inlineFragmentOnNonCompositeErrorMessage */
/* unused harmony export fragmentOnNonCompositeErrorMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = FragmentsOnCompositeTypes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_typeFromAST__ = __webpack_require__(9);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */







function inlineFragmentOnNonCompositeErrorMessage(type) {
  return 'Fragment cannot condition on non composite type "' + String(type) + '".';
}

function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + String(type) + '".');
}

/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;
      if (typeCondition) {
        var type = Object(__WEBPACK_IMPORTED_MODULE_3__utilities_typeFromAST__["a" /* typeFromAST */])(context.getSchema(), typeCondition);
        if (type && !Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["A" /* isCompositeType */])(type)) {
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](inlineFragmentOnNonCompositeErrorMessage(Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(typeCondition)), [typeCondition]));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = Object(__WEBPACK_IMPORTED_MODULE_3__utilities_typeFromAST__["a" /* typeFromAST */])(context.getSchema(), node.typeCondition);
      if (type && !Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["A" /* isCompositeType */])(type)) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](fragmentOnNonCompositeErrorMessage(node.name.value, Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node.typeCondition)), [node.typeCondition]));
      }
    }
  };
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nonInputTypeOnVarMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = VariablesAreInputTypes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_typeFromAST__ = __webpack_require__(9);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */






function nonInputTypeOnVarMessage(variableName, typeName) {
  return 'Variable "$' + variableName + '" cannot be non-input type "' + typeName + '".';
}

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = Object(__WEBPACK_IMPORTED_MODULE_3__utilities_typeFromAST__["a" /* typeFromAST */])(context.getSchema(), node.type);

      // If the variable type is not an input type, return an error.
      if (type && !Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["D" /* isInputType */])(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](nonInputTypeOnVarMessage(variableName, Object(__WEBPACK_IMPORTED_MODULE_1__language_printer__["a" /* print */])(node.type)), [node.type]));
      }
    }
  };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noSubselectionAllowedMessage */
/* unused harmony export requiredSubselectionMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = ScalarLeafs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_definition__ = __webpack_require__(1);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */




function noSubselectionAllowedMessage(fieldName, type) {
  return 'Field "' + fieldName + '" must not have a selection since ' + ('type "' + String(type) + '" has no subfields.');
}

function requiredSubselectionMessage(fieldName, type) {
  return 'Field "' + fieldName + '" of type "' + String(type) + '" must have a ' + ('selection of subfields. Did you mean "' + fieldName + ' { ... }"?');
}

/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;
      if (type) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["F" /* isLeafType */])(Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["x" /* getNamedType */])(type))) {
          if (selectionSet) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](noSubselectionAllowedMessage(node.name.value, type), [selectionSet]));
          }
        } else if (!selectionSet) {
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](requiredSubselectionMessage(node.name.value, type), [node]));
        }
      }
    }
  };
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export undefinedFieldMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = FieldsOnCorrectType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_definition__ = __webpack_require__(1);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */






function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var message = 'Cannot query field "' + fieldName + '" on type "' + type + '".';
  if (suggestedTypeNames.length !== 0) {
    var suggestions = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__["a" /* default */])(suggestedTypeNames);
    message += ' Did you mean to use an inline fragment on ' + suggestions + '?';
  } else if (suggestedFieldNames.length !== 0) {
    message += ' Did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__["a" /* default */])(suggestedFieldNames) + '?';
  }
  return message;
}

/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */
function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();
      if (type) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value;
          // First determine if there are any suggested types to condition on.
          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName);
          // If there are no suggested types, then perhaps this was a typo?
          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName);

          // Report an error, including helpful suggestions.
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), [node]));
        }
      }
    }
  };
}

/**
 * Go through all of the implementations of type, as well as the interfaces
 * that they implement. If any of those types include the provided field,
 * suggest them, sorted by how often the type is referenced,  starting
 * with Interfaces.
 */
function getSuggestedTypeNames(schema, type, fieldName) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__type_definition__["z" /* isAbstractType */])(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);
    schema.getPossibleTypes(type).forEach(function (possibleType) {
      if (!possibleType.getFields()[fieldName]) {
        return;
      }
      // This object type defines this field.
      suggestedObjectTypes.push(possibleType.name);
      possibleType.getInterfaces().forEach(function (possibleInterface) {
        if (!possibleInterface.getFields()[fieldName]) {
          return;
        }
        // This interface type defines this field.
        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
      });
    });

    // Suggest interface types based on how common they are.
    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    });

    // Suggest both interface and object types.
    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  }

  // Otherwise, must be an Object type, which does not have possible fields.
  return [];
}

/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */
function getSuggestedFieldNames(schema, type, fieldName) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__type_definition__["K" /* isObjectType */])(type) || Object(__WEBPACK_IMPORTED_MODULE_3__type_definition__["E" /* isInterfaceType */])(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__["a" /* default */])(fieldName, possibleFieldNames);
  }
  // Otherwise, must be a Union type, which does not define fields.
  return [];
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export duplicateFragmentNameMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = UniqueFragmentNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function duplicateFragmentNameMessage(fragName) {
  return 'There can be only one fragment named "' + fragName + '".';
}

/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */
function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;
      if (knownFragmentNames[fragmentName]) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unknownFragmentMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = KnownFragmentNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function unknownFragmentMessage(fragName) {
  return 'Unknown fragment "' + fragName + '".';
}

/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */
function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);
      if (!fragment) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unknownFragmentMessage(fragmentName), [node.name]));
      }
    }
  };
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unusedFragMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = NoUnusedFragments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function unusedFragMessage(fragName) {
  return 'Fragment "' + fragName + '" is never used.';
}

/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */
function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];

  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },

    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);
        operationDefs.forEach(function (operation) {
          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
            fragmentNameUsed[fragment.name.value] = true;
          });
        });

        fragmentDefs.forEach(function (fragmentDef) {
          var fragName = fragmentDef.name.value;
          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unusedFragMessage(fragName), [fragmentDef]));
          }
        });
      }
    }
  };
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export typeIncompatibleSpreadMessage */
/* unused harmony export typeIncompatibleAnonSpreadMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = PossibleFragmentSpreads;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_typeComparators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_typeFromAST__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_definition__ = __webpack_require__(1);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */






function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
}

function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return 'Fragment cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
}

/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();
      if (Object(__WEBPACK_IMPORTED_MODULE_3__type_definition__["A" /* isCompositeType */])(fragType) && Object(__WEBPACK_IMPORTED_MODULE_3__type_definition__["A" /* isCompositeType */])(parentType) && !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_typeComparators__["a" /* doTypesOverlap */])(context.getSchema(), fragType, parentType)) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();
      if (fragType && parentType && !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_typeComparators__["a" /* doTypesOverlap */])(context.getSchema(), fragType, parentType)) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);
  if (frag) {
    var type = Object(__WEBPACK_IMPORTED_MODULE_2__utilities_typeFromAST__["a" /* typeFromAST */])(context.getSchema(), frag.typeCondition);
    if (Object(__WEBPACK_IMPORTED_MODULE_3__type_definition__["A" /* isCompositeType */])(type)) {
      return type;
    }
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cycleErrorMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = NoFragmentCycles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return 'Cannot spread fragment "' + fragName + '" within itself' + via + '.';
}

function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null);

  // Array of AST nodes used to produce meaningful errors
  var spreadPath = [];

  // Position in the spread path
  var spreadPathIndexByName = Object.create(null);

  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      if (!visitedFrags[node.name.value]) {
        detectCycleRecursive(node);
      }
      return false;
    }
  };

  // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.
  function detectCycleRecursive(fragment) {
    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;

    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var i = 0; i < spreadNodes.length; i++) {
      var spreadNode = spreadNodes[i];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];

      if (cycleIndex === undefined) {
        spreadPath.push(spreadNode);
        if (!visitedFrags[spreadName]) {
          var spreadFragment = context.getFragment(spreadName);
          if (spreadFragment) {
            detectCycleRecursive(spreadFragment);
          }
        }
        spreadPath.pop();
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](cycleErrorMessage(spreadName, cyclePath.map(function (s) {
          return s.name.value;
        })), cyclePath.concat(spreadNode)));
      }
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export duplicateVariableMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = UniqueVariableNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




function duplicateVariableMessage(variableName) {
  return 'There can be only one variable named "' + variableName + '".';
}

/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;
      if (knownVariableNames[variableName]) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export undefinedVarMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = NoUndefinedVariables;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function undefinedVarMessage(varName, opName) {
  return opName ? 'Variable "$' + varName + '" is not defined by operation "' + opName + '".' : 'Variable "$' + varName + '" is not defined.';
}

/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);

  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        usages.forEach(function (_ref) {
          var node = _ref.node;

          var varName = node.name.value;
          if (variableNameDefined[varName] !== true) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unusedVariableMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = NoUnusedVariables;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function unusedVariableMessage(varName, opName) {
  return opName ? 'Variable "$' + varName + '" is never used in operation "' + opName + '".' : 'Variable "$' + varName + '" is never used.';
}

/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */
function NoUnusedVariables(context) {
  var variableDefs = [];

  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;

        usages.forEach(function (_ref) {
          var node = _ref.node;

          variableNameUsed[node.name.value] = true;
        });

        variableDefs.forEach(function (variableDef) {
          var variableName = variableDef.variable.name.value;
          if (variableNameUsed[variableName] !== true) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unusedVariableMessage(variableName, opName), [variableDef]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unknownDirectiveMessage */
/* unused harmony export misplacedDirectiveMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = KnownDirectives;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_find__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__ = __webpack_require__(15);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */






function unknownDirectiveMessage(directiveName) {
  return 'Unknown directive "' + directiveName + '".';
}

function misplacedDirectiveMessage(directiveName, location) {
  return 'Directive "' + directiveName + '" may not be used on ' + location + '.';
}

/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
function KnownDirectives(context) {
  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var directiveDef = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_find__["a" /* default */])(context.getSchema().getDirectives(), function (def) {
        return def.name === node.name.value;
      });
      if (!directiveDef) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unknownDirectiveMessage(node.name.value), [node]));
        return;
      }
      var candidateLocation = getDirectiveLocationForASTPath(ancestors);
      if (candidateLocation && directiveDef.locations.indexOf(candidateLocation) === -1) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](misplacedDirectiveMessage(node.name.value, candidateLocation), [node]));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];
  if (!Array.isArray(appliedTo)) {
    switch (appliedTo.kind) {
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].OPERATION_DEFINITION:
        switch (appliedTo.operation) {
          case 'query':
            return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].QUERY;
          case 'mutation':
            return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].MUTATION;
          case 'subscription':
            return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].SUBSCRIPTION;
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FIELD:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].FIELD;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FRAGMENT_SPREAD:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_SPREAD;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INLINE_FRAGMENT:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].INLINE_FRAGMENT;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FRAGMENT_DEFINITION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_DEFINITION;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].SCHEMA_DEFINITION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].SCHEMA;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].SCALAR_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].SCALAR_TYPE_EXTENSION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].SCALAR;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].OBJECT_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].OBJECT_TYPE_EXTENSION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].OBJECT;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FIELD_DEFINITION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].FIELD_DEFINITION;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INTERFACE_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INTERFACE_TYPE_EXTENSION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].INTERFACE;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].UNION_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].UNION_TYPE_EXTENSION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].UNION;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].ENUM_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].ENUM_TYPE_EXTENSION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].ENUM;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].ENUM_VALUE_DEFINITION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].ENUM_VALUE;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_EXTENSION:
        return __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].INPUT_OBJECT;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INPUT_VALUE_DEFINITION:
        var parentNode = ancestors[ancestors.length - 3];
        return parentNode.kind === __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_DEFINITION ? __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].INPUT_FIELD_DEFINITION : __WEBPACK_IMPORTED_MODULE_3__language_directiveLocation__["a" /* DirectiveLocation */].ARGUMENT_DEFINITION;
    }
  }
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export duplicateDirectiveMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = UniqueDirectivesPerLocation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function duplicateDirectiveMessage(directiveName) {
  return 'The directive "' + directiveName + '" can only be used once at ' + 'this location.';
}

/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all directives at a given location
 * are uniquely named.
 */
function UniqueDirectivesPerLocation(context) {
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      // Flow can't refine that node.directives will only contain directives,
      var directives = node.directives;
      if (directives) {
        var knownDirectives = Object.create(null);
        directives.forEach(function (directive) {
          var directiveName = directive.name.value;
          if (knownDirectives[directiveName]) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
          } else {
            knownDirectives[directiveName] = directive;
          }
        });
      }
    }
  };
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unknownArgMessage */
/* unused harmony export unknownDirectiveArgMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = KnownArgumentNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_kinds__ = __webpack_require__(2);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */





function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  var message = 'Unknown argument "' + argName + '" on field "' + fieldName + '" of ' + ('type "' + typeName + '".');
  if (suggestedArgs.length) {
    message += ' Did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__["a" /* default */])(suggestedArgs) + '?';
  }
  return message;
}

function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  var message = 'Unknown argument "' + argName + '" on directive "@' + directiveName + '".';
  if (suggestedArgs.length) {
    message += ' Did you mean ' + Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_quotedOrList__["a" /* default */])(suggestedArgs) + '?';
  }
  return message;
}

/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */
function KnownArgumentNames(context) {
  return {
    Argument: function Argument(node, key, parent, path, ancestors) {
      var argDef = context.getArgument();
      if (!argDef) {
        var argumentOf = ancestors[ancestors.length - 1];
        if (argumentOf.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].FIELD) {
          var fieldDef = context.getFieldDef();
          var parentType = context.getParentType();
          if (fieldDef && parentType) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unknownArgMessage(node.name.value, fieldDef.name, parentType.name, Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__["a" /* default */])(node.name.value, fieldDef.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        } else if (argumentOf.kind === __WEBPACK_IMPORTED_MODULE_3__language_kinds__["a" /* Kind */].DIRECTIVE) {
          var directive = context.getDirective();
          if (directive) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](unknownDirectiveArgMessage(node.name.value, directive.name, Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_suggestionList__["a" /* default */])(node.name.value, directive.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        }
      }
    }
  };
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export duplicateArgMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = UniqueArgumentNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function duplicateArgMessage(argName) {
  return 'There can be only one argument named "' + argName + '".';
}

/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;
      if (knownArgNames[argName]) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export missingFieldArgMessage */
/* unused harmony export missingDirectiveArgMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = ProvidedNonNullArguments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_definition__ = __webpack_require__(1);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */





function missingFieldArgMessage(fieldName, argName, type) {
  return 'Field "' + fieldName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
}

function missingDirectiveArgMessage(directiveName, argName, type) {
  return 'Directive "@' + directiveName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
}

/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null) field arguments
 * have been provided.
 */
function ProvidedNonNullArguments(context) {
  return {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var fieldDef = context.getFieldDef();
        if (!fieldDef) {
          return false;
        }
        var argNodes = node.arguments || [];

        var argNodeMap = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__["a" /* default */])(argNodes, function (arg) {
          return arg.name.value;
        });
        fieldDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];
          if (!argNode && Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["I" /* isNonNullType */])(argDef.type)) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](missingFieldArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    },

    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var directiveDef = context.getDirective();
        if (!directiveDef) {
          return false;
        }
        var argNodes = node.arguments || [];

        var argNodeMap = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__["a" /* default */])(argNodes, function (arg) {
          return arg.name.value;
        });
        directiveDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];
          if (!argNode && Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["I" /* isNonNullType */])(argDef.type)) {
            context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](missingDirectiveArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    }
  };
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultForRequiredVarMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = VariablesDefaultValueAllowed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_definition__ = __webpack_require__(1);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */




function defaultForRequiredVarMessage(varName, type, guessType) {
  return 'Variable "$' + varName + '" of type "' + String(type) + '" is required and ' + 'will not use the default value. ' + ('Perhaps you meant to use type "' + String(guessType) + '".');
}

/**
 * Variable's default value is allowed
 *
 * A GraphQL document is only valid if all variable default values are allowed
 * due to a variable not being required.
 */
function VariablesDefaultValueAllowed(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var name = node.variable.name.value;
      var defaultValue = node.defaultValue;
      var type = context.getInputType();
      if (Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["I" /* isNonNullType */])(type) && defaultValue) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](defaultForRequiredVarMessage(name, type, type.ofType), [defaultValue]));
      }
      return false; // Do not traverse further.
    },

    SelectionSet: function SelectionSet() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export badVarPosMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = VariablesInAllowedPosition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_typeComparators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_typeFromAST__ = __webpack_require__(9);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */







function badVarPosMessage(varName, varType, expectedType) {
  return 'Variable "$' + varName + '" of type "' + String(varType) + '" used in ' + ('position expecting type "' + String(expectedType) + '".');
}

/**
 * Variables passed to field arguments conform to type
 */
function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);

  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        usages.forEach(function (_ref) {
          var node = _ref.node,
              type = _ref.type;

          var varName = node.name.value;
          var varDef = varDefMap[varName];
          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = Object(__WEBPACK_IMPORTED_MODULE_4__utilities_typeFromAST__["a" /* typeFromAST */])(schema, varDef.type);
            if (varType && !Object(__WEBPACK_IMPORTED_MODULE_3__utilities_typeComparators__["c" /* isTypeSubTypeOf */])(schema, effectiveType(varType, varDef), type)) {
              context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](badVarPosMessage(varName, varType, type), [varDef, node]));
            }
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}

// If a variable definition has a default value, it's effectively non-null.
function effectiveType(varType, varDef) {
  return !varDef.defaultValue || Object(__WEBPACK_IMPORTED_MODULE_1__type_definition__["I" /* isNonNullType */])(varType) ? varType : Object(__WEBPACK_IMPORTED_MODULE_2__type_wrappers__["b" /* GraphQLNonNull */])(varType);
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fieldsConflictMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = OverlappingFieldsCanBeMerged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_find__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_typeFromAST__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */










function fieldsConflictMessage(responseName, reason) {
  return 'Fields "' + responseName + '" conflict because ' + reasonMessage(reason) + '. Use different aliases on the fields to fetch both if this was ' + 'intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return 'subfields "' + responseName + '" conflict because ' + reasonMessage(subreason);
    }).join(' and ');
  }
  return reason;
}

/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */
function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet();

  // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.
  var cachedFieldsAndFragmentNames = new Map();

  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
      conflicts.forEach(function (_ref2) {
        var _ref2$ = _ref2[0],
            responseName = _ref2$[0],
            reason = _ref2$[1],
            fields1 = _ref2[1],
            fields2 = _ref2[2];
        return context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      });
    }
  };
}
// Field name and reason.

// Reason is a string, or a nested list of conflicts.

// Tuple defining a field node in a context.

// Map of array of those.


/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */

// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1];

  // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    var comparedFragments = Object.create(null);
    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]);
      // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).
      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }
  return conflicts;
}

// Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.
function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  // Memoize so a fragment is not compared for conflicts more than once.
  if (comparedFragments[fragmentName]) {
    return;
  }
  comparedFragments[fragmentName] = true;

  var fragment = context.getFragment(fragmentName);
  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1];

  // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  }

  // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.
  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2);

  // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.
  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
}

// Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.
function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  }

  // Memoize so two fragments are not compared for conflicts more than once.
  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }
  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);

  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);
  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1];

  // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);

  // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.
  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  }

  // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.
  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
}

// Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.
function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1];

  // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);

  // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.
  if (fragmentNames2.length !== 0) {
    var comparedFragments = Object.create(null);
    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  }

  // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.
  if (fragmentNames1.length !== 0) {
    var _comparedFragments = Object.create(null);
    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  }

  // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.
  for (var _i = 0; _i < fragmentNames1.length; _i++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i], fragmentNames2[_j]);
    }
  }
  return conflicts;
}

// Collect all Conflicts "within" one collection of fields.
function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  Object.keys(fieldMap).forEach(function (responseName) {
    var fields = fieldMap[responseName];
    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
}

// Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.
function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  Object.keys(fieldMap1).forEach(function (responseName) {
    var fields2 = fieldMap2[responseName];
    if (fields2) {
      var fields1 = fieldMap1[responseName];
      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
}

// Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.
function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2];

  // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["K" /* isObjectType */])(parentType1) && Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["K" /* isObjectType */])(parentType2);

  // The return type for each field.
  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;
    if (name1 !== name2) {
      return [[responseName, name1 + ' and ' + name2 + ' are different fields'], [node1], [node2]];
    }

    // Two field calls must have the same arguments.
    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, 'they return conflicting types ' + String(type1) + ' and ' + String(type2)], [node1], [node2]];
  }

  // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.
  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;
  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["x" /* getNamedType */])(type1), selectionSet1, Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["x" /* getNamedType */])(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }
  return arguments1.every(function (argument1) {
    var argument2 = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_find__["a" /* default */])(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });
    if (!argument2) {
      return false;
    }
    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || Object(__WEBPACK_IMPORTED_MODULE_3__language_printer__["a" /* print */])(value1) === Object(__WEBPACK_IMPORTED_MODULE_3__language_printer__["a" /* print */])(value2);
}

// Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.
function doTypesConflict(type1, type2) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["G" /* isListType */])(type1)) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["G" /* isListType */])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["G" /* isListType */])(type2)) {
    return true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["I" /* isNonNullType */])(type1)) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["I" /* isNonNullType */])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["I" /* isNonNullType */])(type2)) {
    return true;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["F" /* isLeafType */])(type1) || Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["F" /* isLeafType */])(type2)) {
    return type1 !== type2;
  }
  return false;
}

// Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.
function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);
  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);
    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }
  return cached;
}

// Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.
function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
  if (cached) {
    return cached;
  }

  var fragmentType = Object(__WEBPACK_IMPORTED_MODULE_5__utilities_typeFromAST__["a" /* typeFromAST */])(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];
    switch (selection.kind) {
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FIELD:
        var fieldName = selection.name.value;
        var fieldDef = void 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["K" /* isObjectType */])(parentType) || Object(__WEBPACK_IMPORTED_MODULE_4__type_definition__["E" /* isInterfaceType */])(parentType)) {
          fieldDef = parentType.getFields()[fieldName];
        }
        var responseName = selection.alias ? selection.alias.value : fieldName;
        if (!nodeAndDefs[responseName]) {
          nodeAndDefs[responseName] = [];
        }
        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
        break;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;
      case __WEBPACK_IMPORTED_MODULE_2__language_kinds__["a" /* Kind */].INLINE_FRAGMENT:
        var typeCondition = selection.typeCondition;
        var inlineFragmentType = typeCondition ? Object(__WEBPACK_IMPORTED_MODULE_5__utilities_typeFromAST__["a" /* typeFromAST */])(context.getSchema(), typeCondition) : parentType;
        _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
        break;
    }
  }
}

// Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.
function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref3) {
      var reason = _ref3[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref4) {
      var fields1 = _ref4[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref5) {
      var fields2 = _ref5[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}

/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */

var PairSet = function () {
  function PairSet() {
    _classCallCheck(this, PairSet);

    this._data = Object.create(null);
  }

  PairSet.prototype.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];
    if (result === undefined) {
      return false;
    }
    // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.
    if (areMutuallyExclusive === false) {
      return result === false;
    }
    return true;
  };

  PairSet.prototype.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);
    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];
  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }
  map[b] = areMutuallyExclusive;
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export duplicateInputFieldMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = UniqueInputFieldNames;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */

function duplicateInputFieldMessage(fieldName) {
  return 'There can be only one input field named "' + fieldName + '".';
}

/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */
function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);

  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;
      if (knownNames[fieldName]) {
        context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
      return false;
    }
  };
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPromise;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Only returns the value if it acts like a Promise, i.e. has a "then" function,
 * otherwise returns void.
 */
function getPromise(value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && typeof value.then === 'function') {
    return value;
  }
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getIntrospectionQuery;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return introspectionQuery; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function getIntrospectionQuery(options) {
  var descriptions = !(options && options.descriptions === false);
  return '\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ' + (descriptions ? 'description' : '') + '\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ' + (descriptions ? 'description' : '') + '\n      fields(includeDeprecated: true) {\n        name\n        ' + (descriptions ? 'description' : '') + '\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ' + (descriptions ? 'description' : '') + '\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ' + (descriptions ? 'description' : '') + '\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ';
}

var introspectionQuery = getIntrospectionQuery();

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = buildASTSchema;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ASTDefinitionBuilder; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getDescription;
/* harmony export (immutable) */ __webpack_exports__["c"] = buildSchema;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_keyValMap__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valueFromAST__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_blockStringValue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_lexer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__execution_values__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__type_wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__type_introspection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__type_scalars__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__type_schema__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
























function buildWrappedType(innerType, inputTypeNode) {
  if (inputTypeNode.kind === __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].LIST_TYPE) {
    return Object(__WEBPACK_IMPORTED_MODULE_9__type_wrappers__["a" /* GraphQLList */])(buildWrappedType(innerType, inputTypeNode.type));
  }
  if (inputTypeNode.kind === __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].NON_NULL_TYPE) {
    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
    return Object(__WEBPACK_IMPORTED_MODULE_9__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_8__type_definition__["q" /* assertNullableType */])(wrappedType));
  }
  return innerType;
}

function getNamedTypeNode(typeNode) {
  var namedType = typeNode;
  while (namedType.kind === __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].LIST_TYPE || namedType.kind === __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].NON_NULL_TYPE) {
    namedType = namedType.type;
  }
  return namedType;
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(ast, options) {
  if (!ast || ast.kind !== __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].DOCUMENT) {
    throw new Error('Must provide a document ast.');
  }

  var schemaDef = void 0;

  var typeDefs = [];
  var nodeMap = Object.create(null);
  var directiveDefs = [];
  for (var i = 0; i < ast.definitions.length; i++) {
    var d = ast.definitions[i];
    switch (d.kind) {
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].SCHEMA_DEFINITION:
        if (schemaDef) {
          throw new Error('Must provide only one schema definition.');
        }
        schemaDef = d;
        break;
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].SCALAR_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].OBJECT_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].INTERFACE_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].ENUM_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].UNION_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_DEFINITION:
        var _typeName = d.name.value;
        if (nodeMap[_typeName]) {
          throw new Error('Type "' + _typeName + '" was defined more than once.');
        }
        typeDefs.push(d);
        nodeMap[_typeName] = d;
        break;
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].DIRECTIVE_DEFINITION:
        directiveDefs.push(d);
        break;
    }
  }

  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
    query: nodeMap.Query ? 'Query' : null,
    mutation: nodeMap.Mutation ? 'Mutation' : null,
    subscription: nodeMap.Subscription ? 'Subscription' : null
  };

  var definitionBuilder = new ASTDefinitionBuilder(nodeMap, options, function (typeName) {
    throw new Error('Type "' + typeName + '" not found in document.');
  });

  var types = typeDefs.map(function (def) {
    return definitionBuilder.buildType(def.name.value);
  });

  var directives = directiveDefs.map(function (def) {
    return definitionBuilder.buildDirective(def);
  });

  // If specified directives were not explicitly declared, add them.
  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(__WEBPACK_IMPORTED_MODULE_10__type_directives__["e" /* GraphQLSkipDirective */]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(__WEBPACK_IMPORTED_MODULE_10__type_directives__["d" /* GraphQLIncludeDirective */]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(__WEBPACK_IMPORTED_MODULE_10__type_directives__["b" /* GraphQLDeprecatedDirective */]);
  }

  // Note: While this could make early assertions to get the correctly
  // typed values below, that would throw immediately while type system
  // validation with validateSchema() will produce more actionable results.
  return new __WEBPACK_IMPORTED_MODULE_13__type_schema__["a" /* GraphQLSchema */]({
    query: operationTypes.query ? definitionBuilder.buildType(operationTypes.query) : null,
    mutation: operationTypes.mutation ? definitionBuilder.buildType(operationTypes.mutation) : null,
    subscription: operationTypes.subscription ? definitionBuilder.buildType(operationTypes.subscription) : null,
    types: types,
    directives: directives,
    astNode: schemaDef,
    assumeValid: options && options.assumeValid
  });

  function getOperationTypes(schema) {
    var opTypes = {};
    schema.operationTypes.forEach(function (operationType) {
      var typeName = operationType.type.name.value;
      var operation = operationType.operation;
      if (opTypes[operation]) {
        throw new Error('Must provide only one ' + operation + ' type in schema.');
      }
      if (!nodeMap[typeName]) {
        throw new Error('Specified ' + operation + ' type "' + typeName + '" not found in document.');
      }
      opTypes[operation] = typeName;
    });
    return opTypes;
  }
}

var ASTDefinitionBuilder = function () {
  function ASTDefinitionBuilder(typeDefinitionsMap, options, resolveType) {
    _classCallCheck(this, ASTDefinitionBuilder);

    this._typeDefinitionsMap = typeDefinitionsMap;
    this._options = options;
    this._resolveType = resolveType;
    // Initialize to the GraphQL built in scalars and introspection types.
    this._cache = Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_keyMap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_12__type_scalars__["g" /* specifiedScalarTypes */].concat(__WEBPACK_IMPORTED_MODULE_11__type_introspection__["m" /* introspectionTypes */]), function (type) {
      return type.name;
    });
  }

  ASTDefinitionBuilder.prototype._buildType = function _buildType(typeName, typeNode) {
    if (!this._cache[typeName]) {
      var defNode = this._typeDefinitionsMap[typeName];
      if (defNode) {
        this._cache[typeName] = this._makeSchemaDef(defNode);
      } else {
        this._cache[typeName] = this._resolveType(typeName, typeNode);
      }
    }
    return this._cache[typeName];
  };

  ASTDefinitionBuilder.prototype.buildType = function buildType(ref) {
    if (typeof ref === 'string') {
      return this._buildType(ref);
    }
    return this._buildType(ref.name.value, ref);
  };

  ASTDefinitionBuilder.prototype._buildWrappedType = function _buildWrappedType(typeNode) {
    var typeDef = this.buildType(getNamedTypeNode(typeNode));
    return buildWrappedType(typeDef, typeNode);
  };

  ASTDefinitionBuilder.prototype.buildDirective = function buildDirective(directiveNode) {
    return new __WEBPACK_IMPORTED_MODULE_10__type_directives__["c" /* GraphQLDirective */]({
      name: directiveNode.name.value,
      description: getDescription(directiveNode, this._options),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && this._makeInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  };

  ASTDefinitionBuilder.prototype.buildField = function buildField(field) {
    return {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      type: this._buildWrappedType(field.type),
      description: getDescription(field, this._options),
      args: field.arguments && this._makeInputValues(field.arguments),
      deprecationReason: getDeprecationReason(field),
      astNode: field
    };
  };

  ASTDefinitionBuilder.prototype._makeSchemaDef = function _makeSchemaDef(def) {
    switch (def.kind) {
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].OBJECT_TYPE_DEFINITION:
        return this._makeTypeDef(def);
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].INTERFACE_TYPE_DEFINITION:
        return this._makeInterfaceDef(def);
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].ENUM_TYPE_DEFINITION:
        return this._makeEnumDef(def);
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].UNION_TYPE_DEFINITION:
        return this._makeUnionDef(def);
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].SCALAR_TYPE_DEFINITION:
        return this._makeScalarDef(def);
      case __WEBPACK_IMPORTED_MODULE_7__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_DEFINITION:
        return this._makeInputObjectDef(def);
      default:
        throw new Error('Type kind "' + def.kind + '" not supported.');
    }
  };

  ASTDefinitionBuilder.prototype._makeTypeDef = function _makeTypeDef(def) {
    var _this = this;

    var typeName = def.name.value;
    return new __WEBPACK_IMPORTED_MODULE_8__type_definition__["d" /* GraphQLObjectType */]({
      name: typeName,
      description: getDescription(def, this._options),
      fields: function fields() {
        return _this._makeFieldDefMap(def);
      },
      interfaces: function interfaces() {
        return _this._makeImplementedInterfaces(def);
      },
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeFieldDefMap = function _makeFieldDefMap(def) {
    var _this2 = this;

    return def.fields ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyValMap__["a" /* default */])(def.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return _this2.buildField(field);
    }) : {};
  };

  ASTDefinitionBuilder.prototype._makeImplementedInterfaces = function _makeImplementedInterfaces(def) {
    var _this3 = this;

    return def.interfaces &&
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    def.interfaces.map(function (iface) {
      return _this3.buildType(iface);
    });
  };

  ASTDefinitionBuilder.prototype._makeInputValues = function _makeInputValues(values) {
    var _this4 = this;

    return Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyValMap__["a" /* default */])(values, function (value) {
      return value.name.value;
    }, function (value) {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      var type = _this4._buildWrappedType(value.type);
      return {
        type: type,
        description: getDescription(value, _this4._options),
        defaultValue: Object(__WEBPACK_IMPORTED_MODULE_2__valueFromAST__["a" /* valueFromAST */])(value.defaultValue, type),
        astNode: value
      };
    });
  };

  ASTDefinitionBuilder.prototype._makeInterfaceDef = function _makeInterfaceDef(def) {
    var _this5 = this;

    return new __WEBPACK_IMPORTED_MODULE_8__type_definition__["c" /* GraphQLInterfaceType */]({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: function fields() {
        return _this5._makeFieldDefMap(def);
      },
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeEnumDef = function _makeEnumDef(def) {
    var _this6 = this;

    return new __WEBPACK_IMPORTED_MODULE_8__type_definition__["a" /* GraphQLEnumType */]({
      name: def.name.value,
      description: getDescription(def, this._options),
      values: def.values ? Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyValMap__["a" /* default */])(def.values, function (enumValue) {
        return enumValue.name.value;
      }, function (enumValue) {
        return {
          description: getDescription(enumValue, _this6._options),
          deprecationReason: getDeprecationReason(enumValue),
          astNode: enumValue
        };
      }) : {},
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeUnionDef = function _makeUnionDef(def) {
    var _this7 = this;

    return new __WEBPACK_IMPORTED_MODULE_8__type_definition__["f" /* GraphQLUnionType */]({
      name: def.name.value,
      description: getDescription(def, this._options),
      // Note: While this could make assertions to get the correctly typed
      // values below, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      types: def.types ? def.types.map(function (t) {
        return _this7.buildType(t);
      }) : [],
      astNode: def
    });
  };

  ASTDefinitionBuilder.prototype._makeScalarDef = function _makeScalarDef(def) {
    return new __WEBPACK_IMPORTED_MODULE_8__type_definition__["e" /* GraphQLScalarType */]({
      name: def.name.value,
      description: getDescription(def, this._options),
      astNode: def,
      serialize: function serialize(value) {
        return value;
      }
    });
  };

  ASTDefinitionBuilder.prototype._makeInputObjectDef = function _makeInputObjectDef(def) {
    var _this8 = this;

    return new __WEBPACK_IMPORTED_MODULE_8__type_definition__["b" /* GraphQLInputObjectType */]({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: function fields() {
        return def.fields ? _this8._makeInputValues(def.fields) : {};
      },
      astNode: def
    });
  };

  return ASTDefinitionBuilder;
}();

/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */
function getDeprecationReason(node) {
  var deprecated = Object(__WEBPACK_IMPORTED_MODULE_6__execution_values__["b" /* getDirectiveValues */])(__WEBPACK_IMPORTED_MODULE_10__type_directives__["b" /* GraphQLDeprecatedDirective */], node);
  return deprecated && deprecated.reason;
}

/**
 * Given an ast node, returns its string description.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }
  if (options && options.commentDescriptions) {
    var rawValue = getLeadingCommentBlock(node);
    if (rawValue !== undefined) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__language_blockStringValue__["a" /* default */])('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;
  if (!loc) {
    return;
  }
  var comments = [];
  var token = loc.startToken.prev;
  while (token && token.kind === __WEBPACK_IMPORTED_MODULE_4__language_lexer__["a" /* TokenKind */].COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }
  return comments.reverse().join('\n');
}

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
function buildSchema(source) {
  return buildASTSchema(Object(__WEBPACK_IMPORTED_MODULE_5__language_parser__["a" /* parse */])(source));
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = exports.Kind = Object.freeze({
  // Name
  NAME: 'Name',

  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  VARIABLE: 'Variable',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',

  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',

  // Values
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',

  // Directives
  DIRECTIVE: 'Directive',

  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',

  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',

  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',

  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',

  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition'
});

/**
 * The enum type representing the possible kind values of AST nodes.
 */

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = undefined;
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;

var _error = __webpack_require__(79);

var _blockStringValue = __webpack_require__(130);

var _blockStringValue2 = _interopRequireDefault(_blockStringValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;
  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }
  return token;
}

/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = exports.TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});

/**
 * The enum type representing the token kinds values.
 */


/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, pos);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    throw (0, _error.syntaxError)(source, pos, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, pos, line, col, prev);
    // $
    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &
    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (
    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )
    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =
    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @
    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [
    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {
    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |
    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }
    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "
    case 34:
      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev);
      }
      return readString(source, pos, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, pos, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';
          break;
        case 47:
          value += '/';
          break;
        case 92:
          value += '\\';
          break;
        case 98:
          value += '\b';
          break;
        case 102:
          value += '\f';
          break;
        case 110:
          value += '\n';
          break;
        case 114:
          value += '\r';
          break;
        case 116:
          value += '\t';
          break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}

/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */
function readBlockString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockStringValue2.default)(rawValue));
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    // Escape Triple-Quote (\""")
    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;
  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }
  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphQLError = __webpack_require__(39);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});

var _syntaxError = __webpack_require__(127);

Object.defineProperty(exports, 'syntaxError', {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});

var _locatedError = __webpack_require__(128);

Object.defineProperty(exports, 'locatedError', {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});

var _printError = __webpack_require__(80);

Object.defineProperty(exports, 'printError', {
  enumerable: true,
  get: function get() {
    return _printError.printError;
  }
});

var _formatError = __webpack_require__(129);

Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;

var _location = __webpack_require__(38);

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];
  if (error.nodes) {
    error.nodes.forEach(function (node) {
      if (node.loc) {
        printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, _location.getLocation)(node.loc.source, node.loc.start)));
      }
    });
  } else if (error.source && error.locations) {
    var source = error.source;
    error.locations.forEach(function (location) {
      printedLocations.push(highlightSourceAtLocation(source, location));
    });
  }
  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var lineOffset = source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var contextLine = line + lineOffset;
  var contextColumn = location.column + columnOffset;
  var prevLineNum = (contextLine - 1).toString();
  var lineNum = contextLine.toString();
  var nextLineNum = (contextLine + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
  var outputLines = [source.name + ' (' + contextLine + ':' + contextColumn + ')', line >= 2 && lpad(padLen, prevLineNum) + ': ' + lines[line - 2], lpad(padLen, lineNum) + ': ' + lines[line - 1], whitespace(2 + padLen + contextColumn - 1) + '^', line < lines.length && lpad(padLen, nextLineNum) + ': ' + lines[line]];
  return outputLines.filter(Boolean).join('\n');
}

function getColumnOffset(source, location) {
  return location.line === 1 ? source.locationOffset.column - 1 : 0;
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _invariant = __webpack_require__(81);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = exports.Source = function Source(body, name, locationOffset) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || { line: 1, column: 1 };
  !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = exports.DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});

/**
 * The enum type representing the directive location values.
 */

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;


/**
 * A visitor is comprised of visit functions, which are called on each node
 * during the visitor's traversal.
 */


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name',
  // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],

  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],

  DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
};

/**
 * A KeyMap describes each the traversable properties of each kind of node.
 */
var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

__webpack_require__(40).load();

const Fs = __webpack_require__(87);
const Path = __webpack_require__(88);
const Hapi = __webpack_require__(89);
const HapiPino = __webpack_require__(90);
const Knex = __webpack_require__(91);
const { graphqlHapi, graphiqlHapi } = __webpack_require__(94);
const { makeExecutableSchema } = __webpack_require__(95);

const routes = __webpack_require__(96);

const { NODE_ENV, PORT, DATABASE_URL } = process.env;

async function main() {
  const isDev = NODE_ENV === 'development';

  const server = Hapi.server({
    port: PORT
  });

  const plugins = [HapiPino, {
    plugin: Knex,
    options: {
      connection: DATABASE_URL
    }
  }, {
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: request => {
        // Set context here, such as extracting user information from the Authorization header

        return {
          schema: makeExecutableSchema({
            typeDefs: Fs.readFileSync(Path.join(__dirname, 'lib', 'schema.graphql'), 'utf8'),
            resolvers: __webpack_require__(97),
            inheritResolversFromInterfaces: true
          }),
          context: null
        };
      }
    }
  }];

  if (isDev) {
    plugins.push(__webpack_require__(137));
    plugins.push({
      plugin: graphiqlHapi,
      options: {
        path: '/graphiql',
        graphiqlOptions: {
          endpointURL: '/graphql'
        }
      }
    });
  }

  await server.register(plugins);

  if (isDev) {
    server.route([{
      method: 'GET',
      path: '/doc/{param*}',
      config: {
        auth: false,
        handler: {
          directory: {
            path: './doc',
            redirectToSlash: true,
            index: true
          }
        }
      }
    }]);
  }

  server.route(routes);

  await server.start();
  console.log(`server started at http://localhost:${server.info.port}`);
}

main();
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("hapi-pino");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

const Pg = __webpack_require__(92);
const Hoek = __webpack_require__(93);
const Knex = __webpack_require__(41);

Pg.defaults.ssl = "development" === 'production';

const DEFAULTS = {
  connection: undefined,
  attach: 'onPreHandler',
  detach: 'tail',
  searchPath: 'public',
  pool: {
    destroy: client => client.end(),
    max: 10,
    min: 2,
    idleTimeoutMillis: 30000,
    log: true
  },
  debug: false,
  acquireConnectionTimeout: 10000
};

async function register(server, options) {
  const config = Hoek.applyToDefaults(DEFAULTS, options);
  const {
    connection,
    pool,
    searchPath,
    acquireConnectionTimeout,
    debug
  } = config;

  const knex = Knex({
    client: 'pg',
    connection,
    pool,
    searchPath,
    acquireConnectionTimeout,
    debug
  });

  server.app.knex = knex;
}

module.exports = {
  name: 'database',
  register
};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("hoek");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-hapi");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = [{
  method: 'GET',
  path: '/',
  config: {
    auth: false
  },
  handler: (req, h) => `👋🏼`
}];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

const { GraphQLScalarType } = __webpack_require__(98);
const { Kind } = __webpack_require__(126);
const Guest = __webpack_require__(133);

module.exports = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  }),
  Mutation: {
    createGuest: Guest.createGuest
  },
  Query: {
    Guest: Guest.getGuestByEmail
  }
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return __WEBPACK_IMPORTED_MODULE_0__graphql__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return __WEBPACK_IMPORTED_MODULE_0__graphql__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_23"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_22"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["Z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["C"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["D"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["A"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["B"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["E"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_16"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_2"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_19"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_15"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_13"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_6"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_20"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_3"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_4"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_9"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_11"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_5"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_14"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_8"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_1"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_0"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_21"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_12"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_10"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_18"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_7"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_17"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["T"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["S"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["Q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["K"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["U"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["H"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["I"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["M"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["O"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["J"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["R"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["L"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["G"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["F"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["W"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["P"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["N"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["Y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["X"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["_24"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return __WEBPACK_IMPORTED_MODULE_1__type__["V"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return __WEBPACK_IMPORTED_MODULE_2__language__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__execution__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return __WEBPACK_IMPORTED_MODULE_3__execution__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscription__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return __WEBPACK_IMPORTED_MODULE_4__subscription__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return __WEBPACK_IMPORTED_MODULE_4__subscription__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["C"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["B"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedNonNullArgumentsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesDefaultValueAllowedRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return __WEBPACK_IMPORTED_MODULE_5__validation__["A"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return __WEBPACK_IMPORTED_MODULE_6__error__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionQuery", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["A"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["B"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["D"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["E"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["F"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "coerceValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isValidJSValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isValidLiteralValue", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["C"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return __WEBPACK_IMPORTED_MODULE_7__utilities__["o"]; });



// Create and operate on GraphQL type definitions and schema.
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 *     import { parse } from 'graphql';
 *     import { parse } from 'graphql/language';
 */

// The primary entry point into fulfilling a GraphQL request.


// Parse and operate on GraphQL language source files.


// Execute GraphQL queries.




// Validate GraphQL queries.


// Create, format, and print GraphQL errors.


// Utilities for operating on GraphQL type schema and parsed sources.


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graphql;
/* harmony export (immutable) */ __webpack_exports__["b"] = graphqlSync;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_validate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_validate__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__execution_execute__ = __webpack_require__(26);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 */

/* eslint-disable no-redeclare */

function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve(
    // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver));
  });
}

/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

/* eslint-disable no-redeclare */

function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver);

  // Assert that the execution was synchronous.
  if (result.then) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Validate Schema
  var schemaValidationErrors = Object(__WEBPACK_IMPORTED_MODULE_0__type_validate__["b" /* validateSchema */])(schema);
  if (schemaValidationErrors.length > 0) {
    return { errors: schemaValidationErrors };
  }

  // Parse
  var document = void 0;
  try {
    document = Object(__WEBPACK_IMPORTED_MODULE_1__language_parser__["a" /* parse */])(source);
  } catch (syntaxError) {
    return { errors: [syntaxError] };
  }

  // Validate
  var validationErrors = Object(__WEBPACK_IMPORTED_MODULE_2__validation_validate__["b" /* validate */])(schema, document);
  if (validationErrors.length > 0) {
    return { errors: validationErrors };
  }

  // Execute
  return Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["g" /* execute */])(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = syntaxError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GraphQLError__ = __webpack_require__(12);



/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function syntaxError(source, position, description) {
  return new __WEBPACK_IMPORTED_MODULE_0__GraphQLError__["a" /* GraphQLError */]('Syntax Error: ' + description, undefined, source, [position]);
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'Received null or undefined error.') : void 0;
  return _extends({}, error.extensions, {
    message: error.message || 'An unknown error occurred.',
    locations: error.locations,
    path: error.path
  });
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nonExecutableDefinitionMessage */
/* harmony export (immutable) */ __webpack_exports__["a"] = ExecutableDefinitions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_kinds__ = __webpack_require__(2);

 /**
                                             * Copyright (c) 2015-present, Facebook, Inc.
                                             *
                                             * This source code is licensed under the MIT license found in the
                                             * LICENSE file in the root directory of this source tree.
                                             *
                                             * 
                                             */




function nonExecutableDefinitionMessage(defName) {
  return 'The ' + defName + ' definition is not executable.';
}

/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */
function ExecutableDefinitions(context) {
  return {
    Document: function Document(node) {
      node.definitions.forEach(function (definition) {
        if (definition.kind !== __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].OPERATION_DEFINITION && definition.kind !== __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].FRAGMENT_DEFINITION) {
          context.reportError(new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* GraphQLError */](nonExecutableDefinitionMessage(definition.kind === __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].SCHEMA_DEFINITION ? 'schema' : definition.name.value), [definition]));
        }
      });
      return false;
    }
  };
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoize3;
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0 = void 0;
  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }
    var cache1 = cache0.get(a1);
    var cache2 = void 0;
    if (cache1) {
      cache2 = cache1.get(a2);
      if (cache2) {
        var cachedValue = cache2.get(a3);
        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }
    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }
    var newValue = fn.apply(this, arguments);
    cache2.set(a3, newValue);
    return newValue;
  }
  return memoized;
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = promiseForObject;


/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = promiseReduce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPromise__ = __webpack_require__(74);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    var promise = Object(__WEBPACK_IMPORTED_MODULE_0__getPromise__["a" /* default */])(previous);
    if (promise) {
      return promise.then(function (resolved) {
        return callback(resolved, value);
      });
    }
    // Previous is not Promise<U>, so it is U.
    return callback(previous, value);
  }, initialValue);
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_0__schema__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__schema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["N"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["M"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["K"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["E"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["O"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["B"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["C"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["G"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["I"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["D"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["L"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["F"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["A"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["P"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["J"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["H"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__definition__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wrappers__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__wrappers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__wrappers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scalars__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__scalars__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__introspection__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_5__introspection__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validate__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_6__validate__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_6__validate__["a"]; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */









// Common built-in scalar instances.






/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__location__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kinds__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__kinds__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lexer__ = __webpack_require__(31);
/* unused harmony reexport createLexer */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__lexer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__parser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__parser__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__parser__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__printer__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__printer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__source__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__visitor__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__visitor__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__visitor__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__visitor__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__visitor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__visitor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directiveLocation__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__directiveLocation__["a"]; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */














/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__execute__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__execute__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__values__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__values__["b"]; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscribe__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__subscribe__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__subscribe__["a"]; });
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = subscribe;
/* harmony export (immutable) */ __webpack_exports__["a"] = createSourceEventStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iterall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_GraphQLError__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_locatedError__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__execution_execute__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapAsyncIterator__ = __webpack_require__(111);
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (client error). The promise will be rejected if a
 * server error occurs.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */

/* eslint-disable no-redeclare */

function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.subscribeFieldResolver) : subscribeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
}

/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */
function reportGraphQLError(error) {
  if (error instanceof __WEBPACK_IMPORTED_MODULE_1__error_GraphQLError__["a" /* GraphQLError */]) {
    return { errors: [error] };
  }
  throw error;
}

function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);

  // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.
  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["g" /* execute */])(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  };

  // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.
  return sourcePromise.then(function (resultOrStream) {
    return (
      // Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["isAsyncIterable"])(resultOrStream) ? Object(__WEBPACK_IMPORTED_MODULE_5__mapAsyncIterator__["a" /* default */])(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  }, reportGraphQLError);
}

/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise<AsyncIterable>.
 *
 * If the client-provided invalid arguments, the source stream could not be
 * created, or the resolver did not return an AsyncIterable, this function will
 * will throw an error, which should be caught and handled by the caller.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["b" /* assertValidExecutionArguments */])(schema, document, variableValues);

  try {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["c" /* buildExecutionContext */])(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

    // Return early errors if execution context failed.
    if (Array.isArray(exeContext)) {
      return Promise.resolve({ errors: exeContext });
    }

    var type = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["i" /* getOperationRootType */])(schema, exeContext.operation);
    var fields = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["e" /* collectFields */])(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["h" /* getFieldDef */])(schema, type, fieldName);

    if (!fieldDef) {
      throw new __WEBPACK_IMPORTED_MODULE_1__error_GraphQLError__["a" /* GraphQLError */]('The subscription field "' + fieldName + '" is not defined.', fieldNodes);
    }

    // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.
    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;

    var path = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["a" /* addPath */])(undefined, responseName);

    var info = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["d" /* buildResolveInfo */])(exeContext, fieldDef, fieldNodes, type, path);

    // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.
    var result = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["j" /* resolveFieldValueOrError */])(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info);

    // Coerce to Promise for easier error handling and consistent return type.
    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        throw Object(__WEBPACK_IMPORTED_MODULE_2__error_locatedError__["a" /* locatedError */])(eventStream, fieldNodes, Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["k" /* responsePathAsArray */])(path));
      }

      // Assert field returned an event stream, otherwise yield an error.
      if (Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["isAsyncIterable"])(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }
      throw new Error('Subscription field must return Async Iterable. Received: ' + String(eventStream));
    });
  } catch (error) {
    return Promise.reject(error);
  }
}

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapAsyncIterator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_iterall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_iterall__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = Object(__WEBPACK_IMPORTED_MODULE_0_iterall__["getAsyncIterator"])(iterable);
  var $return = void 0;
  var abruptClose = void 0;
  if (typeof iterator.return === 'function') {
    $return = iterator.return;
    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };
      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject = void 0;
  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;
    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }

  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */
  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({ value: undefined, done: true });
    },
    throw: function _throw(error) {
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }
      return Promise.reject(error).catch(abruptClose);
    }
  }, __WEBPACK_IMPORTED_MODULE_0_iterall__["$$asyncIterator"], function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return { value: value, done: false };
}

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_0__validate__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0__validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specifiedRules__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_1__specifiedRules__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules_FieldsOnCorrectType__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__rules_FieldsOnCorrectType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules_FragmentsOnCompositeTypes__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__rules_FragmentsOnCompositeTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rules_KnownArgumentNames__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__rules_KnownArgumentNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rules_KnownDirectives__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__rules_KnownDirectives__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rules_KnownFragmentNames__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__rules_KnownFragmentNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rules_KnownTypeNames__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__rules_KnownTypeNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rules_LoneAnonymousOperation__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__rules_LoneAnonymousOperation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rules_NoFragmentCycles__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__rules_NoFragmentCycles__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rules_NoUndefinedVariables__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__rules_NoUndefinedVariables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rules_NoUnusedFragments__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__rules_NoUnusedFragments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rules_NoUnusedVariables__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__rules_NoUnusedVariables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rules_OverlappingFieldsCanBeMerged__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__rules_OverlappingFieldsCanBeMerged__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rules_PossibleFragmentSpreads__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_14__rules_PossibleFragmentSpreads__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rules_ProvidedNonNullArguments__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_15__rules_ProvidedNonNullArguments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rules_ScalarLeafs__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_16__rules_ScalarLeafs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rules_SingleFieldSubscriptions__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_17__rules_SingleFieldSubscriptions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rules_UniqueArgumentNames__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_18__rules_UniqueArgumentNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rules_UniqueDirectivesPerLocation__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_19__rules_UniqueDirectivesPerLocation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rules_UniqueFragmentNames__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_20__rules_UniqueFragmentNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__rules_UniqueInputFieldNames__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_21__rules_UniqueInputFieldNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__rules_UniqueOperationNames__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_22__rules_UniqueOperationNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__rules_UniqueVariableNames__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_23__rules_UniqueVariableNames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__rules_ValuesOfCorrectType__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_24__rules_ValuesOfCorrectType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__rules_VariablesAreInputTypes__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_25__rules_VariablesAreInputTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__rules_VariablesDefaultValueAllowed__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_26__rules_VariablesDefaultValueAllowed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__rules_VariablesInAllowedPosition__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_27__rules_VariablesInAllowedPosition__["a"]; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"


// Spec Section: "Fragments on Composite Types"


// Spec Section: "Argument Names"


// Spec Section: "Directives Are Defined"


// Spec Section: "Fragment spread target defined"


// Spec Section: "Fragment Spread Type Existence"


// Spec Section: "Lone Anonymous Operation"


// Spec Section: "Fragments must not form cycles"


// Spec Section: "All Variable Used Defined"


// Spec Section: "Fragments must be used"


// Spec Section: "All Variables Used"


// Spec Section: "Field Selection Merging"


// Spec Section: "Fragment spread is possible"


// Spec Section: "Argument Optionality"


// Spec Section: "Leaf Field Selections"


// Spec Section: "Subscriptions with Single Root Field"


// Spec Section: "Argument Uniqueness"


// Spec Section: "Directives Are Unique Per Location"


// Spec Section: "Fragment Name Uniqueness"


// Spec Section: "Input Object Field Uniqueness"


// Spec Section: "Operation Name Uniqueness"


// Spec Section: "Variable Uniqueness"


// Spec Section: "Values Type Correctness"


// Spec Section: "Variables are Input Types"


// Spec Section: "Variables Default Value Is Allowed"


// Spec Section: "All Variable Usages Are Allowed"


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__introspectionQuery__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__introspectionQuery__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0__introspectionQuery__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getOperationAST__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__getOperationAST__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introspectionFromSchema__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__introspectionFromSchema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buildClientSchema__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__buildClientSchema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buildASTSchema__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__buildASTSchema__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__buildASTSchema__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__buildASTSchema__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extendSchema__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__extendSchema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lexicographicSortSchema__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_6__lexicographicSortSchema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schemaPrinter__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_7__schemaPrinter__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_7__schemaPrinter__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_7__schemaPrinter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typeFromAST__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_8__typeFromAST__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__valueFromAST__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_9__valueFromAST__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__valueFromASTUntyped__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_10__valueFromASTUntyped__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__astFromValue__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__astFromValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TypeInfo__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_12__TypeInfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coerceValue__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_13__coerceValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isValidJSValue__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_14__isValidJSValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isValidLiteralValue__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_15__isValidLiteralValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__concatAST__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_16__concatAST__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__separateOperations__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_17__separateOperations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__typeComparators__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_18__typeComparators__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_18__typeComparators__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_18__typeComparators__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assertValidName__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_19__assertValidName__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__findBreakingChanges__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_20__findBreakingChanges__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_20__findBreakingChanges__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_20__findBreakingChanges__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_20__findBreakingChanges__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__findDeprecatedUsages__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_21__findDeprecatedUsages__["a"]; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// The GraphQL query recommended for a full schema introspection.



// Gets the target Operation from a Document


// Convert a GraphQLSchema to an IntrospectionQuery


// Build a GraphQLSchema from an introspection result.


// Build a GraphQLSchema from GraphQL Schema language.


// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.


// Sort a GraphQLSchema.


// Print a GraphQLSchema to GraphQL Schema language.


// Create a GraphQLType from a GraphQL language AST.


// Create a JavaScript value from a GraphQL language AST with a type.


// Create a JavaScript value from a GraphQL language AST without a type.


// Create a GraphQL language AST from a JavaScript value.


// A helper to use within recursive-descent visitors which need to be aware of
// the GraphQL type system.


// Coerces a JavaScript value to a GraphQL type, or produces errors.


// @deprecated use coerceValue


// Determine if AST values adhere to a GraphQL type.


// Concatenates multiple AST together.


// Separates an AST into an AST per Operation.


// Comparators for types


// Asserts that a string is a valid GraphQL name


// Compares two GraphQLSchemas and detects breaking changes.



// Report all deprecated usage within a GraphQL document.


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOperationAST;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__language_kinds__ = __webpack_require__(2);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;
  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];
    if (definition.kind === __WEBPACK_IMPORTED_MODULE_0__language_kinds__["a" /* Kind */].OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }
  return operation;
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = introspectionFromSchema;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__introspectionQuery__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__execution_execute__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_parser__ = __webpack_require__(19);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */
function introspectionFromSchema(schema, options) {
  var queryAST = Object(__WEBPACK_IMPORTED_MODULE_4__language_parser__["a" /* parse */])(Object(__WEBPACK_IMPORTED_MODULE_1__introspectionQuery__["a" /* getIntrospectionQuery */])(options));
  var result = Object(__WEBPACK_IMPORTED_MODULE_3__execution_execute__["g" /* execute */])(schema, queryAST);
  !(!result.then && !result.errors && result.data) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0) : void 0;
  return result.data;
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildClientSchema;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_keyValMap__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valueFromAST__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__type_wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__type_introspection__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__type_scalars__ = __webpack_require__(10);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




















/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  // Get the schema from the introspection result.
  var schemaIntrospection = introspection.__schema;

  // Converts the list of types into a keyMap based on the type names.
  var typeIntrospectionMap = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__["a" /* default */])(schemaIntrospection.types, function (type) {
    return type.name;
  });

  // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars. All functions below are inline
  // so that this type def cache is within the scope of the closure.
  var typeDefCache = Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_11__type_scalars__["g" /* specifiedScalarTypes */].concat(__WEBPACK_IMPORTED_MODULE_10__type_introspection__["m" /* introspectionTypes */]), function (type) {
    return type.name;
  });

  // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.
  function getType(typeRef) {
    if (typeRef.kind === __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].LIST) {
      var itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      return Object(__WEBPACK_IMPORTED_MODULE_8__type_wrappers__["a" /* GraphQLList */])(getType(itemRef));
    }
    if (typeRef.kind === __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].NON_NULL) {
      var nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }
      var nullableType = getType(nullableRef);
      return Object(__WEBPACK_IMPORTED_MODULE_8__type_wrappers__["b" /* GraphQLNonNull */])(Object(__WEBPACK_IMPORTED_MODULE_7__type_definition__["q" /* assertNullableType */])(nullableType));
    }
    if (!typeRef.name) {
      throw new Error('Unknown type reference: ' + JSON.stringify(typeRef));
    }
    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    if (typeDefCache[typeName]) {
      return typeDefCache[typeName];
    }
    var typeIntrospection = typeIntrospectionMap[typeName];
    if (!typeIntrospection) {
      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }
    var typeDef = buildType(typeIntrospection);
    typeDefCache[typeName] = typeDef;
    return typeDef;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    !Object(__WEBPACK_IMPORTED_MODULE_7__type_definition__["D" /* isInputType */])(type) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'Introspection must provide input type for arguments.') : void 0;
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    !Object(__WEBPACK_IMPORTED_MODULE_7__type_definition__["L" /* isOutputType */])(type) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'Introspection must provide output type for fields.') : void 0;
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    return Object(__WEBPACK_IMPORTED_MODULE_7__type_definition__["r" /* assertObjectType */])(type);
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    return Object(__WEBPACK_IMPORTED_MODULE_7__type_definition__["l" /* assertInterfaceType */])(type);
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function buildType(type) {
    if (type && type.name && type.kind) {
      switch (type.kind) {
        case __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].SCALAR:
          return buildScalarDef(type);
        case __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].OBJECT:
          return buildObjectDef(type);
        case __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].INTERFACE:
          return buildInterfaceDef(type);
        case __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].UNION:
          return buildUnionDef(type);
        case __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].ENUM:
          return buildEnumDef(type);
        case __WEBPACK_IMPORTED_MODULE_10__type_introspection__["b" /* TypeKind */].INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }
    throw new Error('Invalid or incomplete introspection result. Ensure that a full ' + 'introspection query is used in order to build a client schema:' + JSON.stringify(type));
  }

  function buildScalarDef(scalarIntrospection) {
    return new __WEBPACK_IMPORTED_MODULE_7__type_definition__["e" /* GraphQLScalarType */]({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(value) {
        return value;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    if (!objectIntrospection.interfaces) {
      throw new Error('Introspection result missing interfaces: ' + JSON.stringify(objectIntrospection));
    }
    return new __WEBPACK_IMPORTED_MODULE_7__type_definition__["d" /* GraphQLObjectType */]({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new __WEBPACK_IMPORTED_MODULE_7__type_definition__["c" /* GraphQLInterfaceType */]({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      throw new Error('Introspection result missing possibleTypes: ' + JSON.stringify(unionIntrospection));
    }
    return new __WEBPACK_IMPORTED_MODULE_7__type_definition__["f" /* GraphQLUnionType */]({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: unionIntrospection.possibleTypes.map(getObjectType)
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      throw new Error('Introspection result missing enumValues: ' + JSON.stringify(enumIntrospection));
    }
    return new __WEBPACK_IMPORTED_MODULE_7__type_definition__["a" /* GraphQLEnumType */]({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_keyValMap__["a" /* default */])(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      throw new Error('Introspection result missing inputFields: ' + JSON.stringify(inputObjectIntrospection));
    }
    return new __WEBPACK_IMPORTED_MODULE_7__type_definition__["b" /* GraphQLInputObjectType */]({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error('Introspection result missing fields: ' + JSON.stringify(typeIntrospection));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_keyValMap__["a" /* default */])(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      if (!fieldIntrospection.args) {
        throw new Error('Introspection result missing field args: ' + JSON.stringify(fieldIntrospection));
      }
      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_keyValMap__["a" /* default */])(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? Object(__WEBPACK_IMPORTED_MODULE_3__valueFromAST__["a" /* valueFromAST */])(Object(__WEBPACK_IMPORTED_MODULE_4__language_parser__["c" /* parseValue */])(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      name: inputValueIntrospection.name,
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    // Support deprecated `on****` fields for building `locations`, as this
    // is used by GraphiQL which may need to support outdated servers.
    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [__WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].FIELD], !directiveIntrospection.onOperation ? [] : [__WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].QUERY, __WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].MUTATION, __WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [__WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_DEFINITION, __WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].FRAGMENT_SPREAD, __WEBPACK_IMPORTED_MODULE_6__language_directiveLocation__["a" /* DirectiveLocation */].INLINE_FRAGMENT]);
    if (!directiveIntrospection.args) {
      throw new Error('Introspection result missing directive args: ' + JSON.stringify(directiveIntrospection));
    }
    return new __WEBPACK_IMPORTED_MODULE_9__type_directives__["c" /* GraphQLDirective */]({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: locations,
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var types = schemaIntrospection.types.map(function (typeIntrospection) {
    return getNamedType(typeIntrospection.name);
  });

  // Get the root Query, Mutation, and Subscription types.
  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;

  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

  // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.
  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

  // Then produce and return a Schema with these types.
  return new __WEBPACK_IMPORTED_MODULE_5__type_schema__["a" /* GraphQLSchema */]({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: directives,
    assumeValid: options && options.assumeValid
  });
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extendSchema;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buildASTSchema__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type_wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__language_kinds__ = __webpack_require__(2);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */














/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema, documentAST, options) {
  !Object(__WEBPACK_IMPORTED_MODULE_4__type_schema__["b" /* isSchema */])(schema) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'Must provide valid GraphQLSchema') : void 0;

  !(documentAST && documentAST.kind === __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].DOCUMENT) ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'Must provide valid Document AST') : void 0;

  // Collect the type definitions and extensions found in the document.
  var typeDefinitionMap = Object.create(null);
  var typeExtensionsMap = Object.create(null);

  // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".
  var directiveDefinitions = [];

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var def = documentAST.definitions[i];
    switch (def.kind) {
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].OBJECT_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].INTERFACE_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].ENUM_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].UNION_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].SCALAR_TYPE_DEFINITION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_DEFINITION:
        // Sanity check that none of the defined types conflict with the
        // schema's existing types.
        var typeName = def.name.value;
        if (schema.getType(typeName)) {
          throw new __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */]('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
        }
        typeDefinitionMap[typeName] = def;
        break;
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].OBJECT_TYPE_EXTENSION:
        // Sanity check that this type extension exists within the
        // schema's existing types.
        var extendedTypeName = def.name.value;
        var existingType = schema.getType(extendedTypeName);
        if (!existingType) {
          throw new __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */]('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def]);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["K" /* isObjectType */])(existingType)) {
          throw new __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */]('Cannot extend non-object type "' + extendedTypeName + '".', [def]);
        }
        var extensions = typeExtensionsMap[extendedTypeName];
        if (extensions) {
          extensions.push(def);
        } else {
          extensions = [def];
        }
        typeExtensionsMap[extendedTypeName] = extensions;
        break;
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].DIRECTIVE_DEFINITION:
        var directiveName = def.name.value;
        var existingDirective = schema.getDirective(directiveName);
        if (existingDirective) {
          throw new __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */]('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
        }
        directiveDefinitions.push(def);
        break;
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].SCALAR_TYPE_EXTENSION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].INTERFACE_TYPE_EXTENSION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].UNION_TYPE_EXTENSION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].ENUM_TYPE_EXTENSION:
      case __WEBPACK_IMPORTED_MODULE_8__language_kinds__["a" /* Kind */].INPUT_OBJECT_TYPE_EXTENSION:
        throw new Error('The ' + def.kind + ' kind is not yet supported by extendSchema().');
    }
  }

  // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.
  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
    return schema;
  }

  var definitionBuilder = new __WEBPACK_IMPORTED_MODULE_2__buildASTSchema__["a" /* ASTDefinitionBuilder */](typeDefinitionMap, options, function (typeName, node) {
    var existingType = schema.getType(typeName);
    if (existingType) {
      return extendType(existingType);
    }

    if (node) {
      throw new __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */]('Unknown type: "' + typeName + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [node]);
    }
    throw Object(__WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */])('Missing type from schema');
  });

  // Get the root Query, Mutation, and Subscription object types.
  // Note: While this could make early assertions to get the correctly
  // typed values below, that would throw immediately while type system
  // validation with validateSchema() will produce more actionable results.
  var existingQueryType = schema.getQueryType();
  var queryType = existingQueryType ? definitionBuilder.buildType(existingQueryType.name) : null;

  var existingMutationType = schema.getMutationType();
  var mutationType = existingMutationType ? definitionBuilder.buildType(existingMutationType.name) : null;

  var existingSubscriptionType = schema.getSubscriptionType();
  var subscriptionType = existingSubscriptionType ? definitionBuilder.buildType(existingSubscriptionType.name) : null;

  // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.
  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).map(function (typeName) {
    return definitionBuilder.buildType(typeName);
  });

  // Do the same with new types, appending to the list of defined types.
  Object.keys(typeDefinitionMap).forEach(function (typeName) {
    types.push(definitionBuilder.buildType(typeName));
  });

  // Then produce and return a Schema with these types.
  return new __WEBPACK_IMPORTED_MODULE_4__type_schema__["a" /* GraphQLSchema */]({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: getMergedDirectives(),
    astNode: schema.astNode,
    allowedLegacyNames: schema.__allowedLegacyNames && schema.__allowedLegacyNames.slice()
  });

  // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives();
    !existingDirectives ? Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_invariant__["a" /* default */])(0, 'schema must have default directives') : void 0;

    var newDirectives = directiveDefinitions.map(function (directiveNode) {
      return definitionBuilder.buildDirective(directiveNode);
    });
    return existingDirectives.concat(newDirectives);
  }

  function getTypeFromDef(typeDef) {
    var type = definitionBuilder.buildType(typeDef.name);
    return type;
  }

  // Given a type's introspection result, construct the correct
  // GraphQLType instance.
  function extendType(type) {
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["K" /* isObjectType */])(type)) {
      return extendObjectType(type);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["E" /* isInterfaceType */])(type)) {
      return extendInterfaceType(type);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["O" /* isUnionType */])(type)) {
      return extendUnionType(type);
    }
    return type;
  }

  function extendObjectType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["d" /* GraphQLObjectType */]({
      name: name,
      description: type.description,
      interfaces: function interfaces() {
        return extendImplementedInterfaces(type);
      },
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      isTypeOf: type.isTypeOf
    });
  }

  function extendInterfaceType(type) {
    return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["c" /* GraphQLInterfaceType */]({
      name: type.name,
      description: type.description,
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendUnionType(type) {
    return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["f" /* GraphQLUnionType */]({
      name: type.name,
      description: type.description,
      types: type.getTypes().map(getTypeFromDef),
      astNode: type.astNode,
      resolveType: type.resolveType
    });
  }

  function extendImplementedInterfaces(type) {
    var interfaces = type.getInterfaces().map(getTypeFromDef);

    // If there are any extensions to the interfaces, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.interfaces.forEach(function (namedType) {
          // Note: While this could make early assertions to get the correctly
          // typed values, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          interfaces.push(definitionBuilder.buildType(namedType));
        });
      });
    }

    return interfaces;
  }

  function extendFieldMap(type) {
    var newFieldMap = Object.create(null);
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        deprecationReason: field.deprecationReason,
        type: extendFieldType(field.type),
        args: Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_keyMap__["a" /* default */])(field.args, function (arg) {
          return arg.name;
        }),
        astNode: field.astNode,
        resolve: field.resolve
      };
    });

    // If there are any extensions to the fields, apply those here.
    var extensions = typeExtensionsMap[type.name];
    if (extensions) {
      extensions.forEach(function (extension) {
        extension.fields.forEach(function (field) {
          var fieldName = field.name.value;
          if (oldFieldMap[fieldName]) {
            throw new __WEBPACK_IMPORTED_MODULE_3__error_GraphQLError__["a" /* GraphQLError */]('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
          }
          newFieldMap[fieldName] = definitionBuilder.buildField(field);
        });
      });
    }

    return newFieldMap;
  }

  function extendFieldType(typeDef) {
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["G" /* isListType */])(typeDef)) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__type_wrappers__["a" /* GraphQLList */])(extendFieldType(typeDef.ofType));
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["I" /* isNonNullType */])(typeDef)) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__type_wrappers__["b" /* GraphQLNonNull */])(extendFieldType(typeDef.ofType));
    }
    return getTypeFromDef(typeDef);
  }
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lexicographicSortSchema;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_keyValMap__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_objectValues__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_wrappers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type_scalars__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__type_introspection__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

 /**
                                               * Copyright (c) 2015-present, Facebook, Inc.
                                               *
                                               * This source code is licensed under the MIT license found in the
                                               * LICENSE file in the root directory of this source tree.
                                               *
                                               * 
                                               */










/**
 * Sort GraphQLSchema.
 */
function lexicographicSortSchema(schema) {
  var cache = Object.create(null);

  var sortMaybeType = function sortMaybeType(maybeType) {
    return maybeType && sortNamedType(maybeType);
  };
  return new __WEBPACK_IMPORTED_MODULE_2__type_schema__["a" /* GraphQLSchema */]({
    types: sortByName(Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_objectValues__["a" /* default */])(schema.getTypeMap()).map(sortNamedType)),
    directives: sortByName(schema.getDirectives()).map(sortDirective),
    query: sortMaybeType(schema.getQueryType()),
    mutation: sortMaybeType(schema.getMutationType()),
    subscription: sortMaybeType(schema.getSubscriptionType()),
    astNode: schema.astNode
  });

  function sortDirective(directive) {
    return new __WEBPACK_IMPORTED_MODULE_3__type_directives__["c" /* GraphQLDirective */]({
      name: directive.name,
      description: directive.description,
      locations: sortBy(directive.locations, function (x) {
        return x;
      }),
      args: sortArgs(directive.args),
      astNode: directive.astNode
    });
  }

  function sortArgs(args) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_keyValMap__["a" /* default */])(sortByName(args), function (arg) {
      return arg.name;
    }, function (arg) {
      return _extends({}, arg, {
        type: sortType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return function () {
      return sortObjMap(fieldsMap, function (field) {
        return {
          type: sortType(field.type),
          args: sortArgs(field.args),
          resolve: field.resolve,
          subscribe: field.subscribe,
          deprecationReason: field.deprecationReason,
          description: field.description,
          astNode: field.astNode
        };
      });
    };
  }

  function sortInputFields(fieldsMap) {
    return function () {
      return sortObjMap(fieldsMap, function (field) {
        return {
          type: sortType(field.type),
          defaultValue: field.defaultValue,
          description: field.description,
          astNode: field.astNode
        };
      });
    };
  }

  function sortType(type) {
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["G" /* isListType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_4__type_wrappers__["a" /* GraphQLList */](sortType(type.ofType));
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["I" /* isNonNullType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_4__type_wrappers__["b" /* GraphQLNonNull */](sortType(type.ofType));
    }
    return sortNamedType(type);
  }

  function sortTypes(arr) {
    return function () {
      return sortByName(arr).map(sortNamedType);
    };
  }

  function sortNamedType(type) {
    if (Object(__WEBPACK_IMPORTED_MODULE_6__type_scalars__["f" /* isSpecifiedScalarType */])(type) || Object(__WEBPACK_IMPORTED_MODULE_7__type_introspection__["n" /* isIntrospectionType */])(type)) {
      return type;
    }

    var sortedType = cache[type.name];
    if (!sortedType) {
      sortedType = sortNamedTypeImpl(type);
      cache[type.name] = sortedType;
    }
    return sortedType;
  }

  function sortNamedTypeImpl(type) {
    if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["M" /* isScalarType */])(type)) {
      return type;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["K" /* isObjectType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["d" /* GraphQLObjectType */]({
        name: type.name,
        interfaces: sortTypes(type.getInterfaces()),
        fields: sortFields(type.getFields()),
        isTypeOf: type.isTypeOf,
        description: type.description,
        astNode: type.astNode,
        extensionASTNodes: type.extensionASTNodes
      });
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["E" /* isInterfaceType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["c" /* GraphQLInterfaceType */]({
        name: type.name,
        fields: sortFields(type.getFields()),
        resolveType: type.resolveType,
        description: type.description,
        astNode: type.astNode,
        extensionASTNodes: type.extensionASTNodes
      });
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["O" /* isUnionType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["f" /* GraphQLUnionType */]({
        name: type.name,
        types: sortTypes(type.getTypes()),
        resolveType: type.resolveType,
        description: type.description,
        astNode: type.astNode
      });
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["B" /* isEnumType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["a" /* GraphQLEnumType */]({
        name: type.name,
        values: Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_keyValMap__["a" /* default */])(sortByName(type.getValues()), function (val) {
          return val.name;
        }, function (val) {
          return {
            value: val.value,
            deprecationReason: val.deprecationReason,
            description: val.description,
            astNode: val.astNode
          };
        }),
        description: type.description,
        astNode: type.astNode
      });
    } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["C" /* isInputObjectType */])(type)) {
      return new __WEBPACK_IMPORTED_MODULE_5__type_definition__["b" /* GraphQLInputObjectType */]({
        name: type.name,
        fields: sortInputFields(type.getFields()),
        description: type.description,
        astNode: type.astNode
      });
    }
    throw new Error('Unknown type: "' + type + '"');
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var value = map[key];
      sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = printSchema;
/* harmony export (immutable) */ __webpack_exports__["a"] = printIntrospectionSchema;
/* harmony export (immutable) */ __webpack_exports__["c"] = printType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsutils_isNullish__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsutils_objectValues__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_astFromValue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_printer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type_scalars__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__type_introspection__ = __webpack_require__(8);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */













/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !Object(__WEBPACK_IMPORTED_MODULE_7__type_directives__["g" /* isSpecifiedDirective */])(n);
  }, isDefinedType, options);
}

function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, __WEBPACK_IMPORTED_MODULE_7__type_directives__["g" /* isSpecifiedDirective */], __WEBPACK_IMPORTED_MODULE_8__type_introspection__["n" /* isIntrospectionType */], options);
}

function isDefinedType(type) {
  return !Object(__WEBPACK_IMPORTED_MODULE_6__type_scalars__["f" /* isSpecifiedScalarType */])(type) && !Object(__WEBPACK_IMPORTED_MODULE_8__type_introspection__["n" /* isIntrospectionType */])(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var typeMap = schema.getTypeMap();
  var types = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_objectValues__["a" /* default */])(typeMap).sort(function (type1, type2) {
    return type1.name.localeCompare(type2.name);
  }).filter(typeFilter);

  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];

  var queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push('  query: ' + queryType.name);
  }

  var mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push('  mutation: ' + mutationType.name);
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push('  subscription: ' + subscriptionType.name);
  }

  return 'schema {\n' + operationTypes.join('\n') + '\n}';
}

/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */
function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();
  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["M" /* isScalarType */])(type)) {
    return printScalar(type, options);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["K" /* isObjectType */])(type)) {
    return printObject(type, options);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["E" /* isInterfaceType */])(type)) {
    return printInterface(type, options);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["O" /* isUnionType */])(type)) {
    return printUnion(type, options);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["B" /* isEnumType */])(type)) {
    return printEnum(type, options);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_5__type_definition__["C" /* isInputObjectType */])(type)) {
    return printInputObject(type, options);
  }
  /* istanbul ignore next */
  throw new Error('Unknown type: ' + type + '.');
}

function printScalar(type, options) {
  return printDescription(options, type) + ('scalar ' + type.name);
}

function printObject(type, options) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
  return printDescription(options, type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(options, type) + '\n' + '}';
}

function printInterface(type, options) {
  return printDescription(options, type) + ('interface ' + type.name + ' {\n') + printFields(options, type) + '\n' + '}';
}

function printUnion(type, options) {
  return printDescription(options, type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
}

function printEnum(type, options) {
  return printDescription(options, type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues(), options) + '\n' + '}';
}

function printEnumValues(values, options) {
  return values.map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  }).join('\n');
}

function printInputObject(type, options) {
  var fields = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_objectValues__["a" /* default */])(type.getFields());
  return printDescription(options, type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  }).join('\n') + '\n' + '}';
}

function printFields(options, type) {
  var fields = Object(__WEBPACK_IMPORTED_MODULE_2__jsutils_objectValues__["a" /* default */])(type.getFields());
  return fields.map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  }).join('\n');
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  }

  // If every arg does not have a description, print them on one line.
  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var argDecl = arg.name + ': ' + String(arg.type);
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__jsutils_isInvalid__["a" /* default */])(arg.defaultValue)) {
    argDecl += ' = ' + Object(__WEBPACK_IMPORTED_MODULE_4__language_printer__["a" /* print */])(Object(__WEBPACK_IMPORTED_MODULE_3__utilities_astFromValue__["a" /* astFromValue */])(arg.defaultValue, arg.type));
  }
  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }
  var reason = fieldOrEnumVal.deprecationReason;
  if (Object(__WEBPACK_IMPORTED_MODULE_0__jsutils_isNullish__["a" /* default */])(reason) || reason === '' || reason === __WEBPACK_IMPORTED_MODULE_7__type_directives__["a" /* DEFAULT_DEPRECATION_REASON */]) {
    return ' @deprecated';
  }
  return ' @deprecated(reason: ' + Object(__WEBPACK_IMPORTED_MODULE_4__language_printer__["a" /* print */])(Object(__WEBPACK_IMPORTED_MODULE_3__utilities_astFromValue__["a" /* astFromValue */])(reason, __WEBPACK_IMPORTED_MODULE_6__type_scalars__["e" /* GraphQLString */])) + ')';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!def.description) {
    return '';
  }

  var lines = descriptionLines(def.description, 120 - indentation.length);
  if (options && options.commentDescriptions) {
    return printDescriptionWithComments(lines, indentation, firstInBlock);
  }

  var description = indentation && !firstInBlock ? '\n' + indentation + '"""' : indentation + '"""';

  // In some circumstances, a single line can be used for the description.
  if (lines.length === 1 && lines[0].length < 70 && lines[0][lines[0].length - 1] !== '"') {
    return description + escapeQuote(lines[0]) + '"""\n';
  }

  // Format a multi-line block quote to account for leading space.
  var hasLeadingSpace = lines[0][0] === ' ' || lines[0][0] === '\t';
  if (!hasLeadingSpace) {
    description += '\n';
  }
  for (var i = 0; i < lines.length; i++) {
    if (i !== 0 || !hasLeadingSpace) {
      description += indentation;
    }
    description += escapeQuote(lines[i]) + '\n';
  }
  description += indentation + '"""\n';
  return description;
}

function escapeQuote(line) {
  return line.replace(/"""/g, '\\"""');
}

function printDescriptionWithComments(lines, indentation, firstInBlock) {
  var description = indentation && !firstInBlock ? '\n' : '';
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      description += indentation + '# ' + lines[i] + '\n';
    }
  }
  return description;
}

function descriptionLines(description, maxLen) {
  var lines = [];
  var rawLines = description.split('\n');
  for (var i = 0; i < rawLines.length; i++) {
    if (rawLines[i] === '') {
      lines.push(rawLines[i]);
    } else {
      // For > 120 character long lines, cut at space boundaries into sublines
      // of ~80 chars.
      var sublines = breakLine(rawLines[i], maxLen);
      for (var j = 0; j < sublines.length; j++) {
        lines.push(sublines[j]);
      }
    }
  }
  return lines;
}

function breakLine(line, maxLen) {
  if (line.length < maxLen + 5) {
    return [line];
  }
  var parts = line.split(new RegExp('((?: |^).{15,' + (maxLen - 40) + '}(?= |$))'));
  if (parts.length < 4) {
    return [line];
  }
  var sublines = [parts[0] + parts[1] + parts[2]];
  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }
  return sublines;
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValidJSValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coerceValue__ = __webpack_require__(37);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Deprecated. Use coerceValue() directly for richer information.
 */
function isValidJSValue(value, type) {
  var errors = Object(__WEBPACK_IMPORTED_MODULE_0__coerceValue__["a" /* coerceValue */])(value, type).errors;
  return errors ? errors.map(function (error) {
    return error.message;
  }) : [];
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValidLiteralValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TypeInfo__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_kinds__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_visitor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation_rules_ValuesOfCorrectType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation_validate__ = __webpack_require__(32);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */










/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 */
function isValidLiteralValue(type, valueNode) {
  var emptySchema = new __WEBPACK_IMPORTED_MODULE_3__type_schema__["a" /* GraphQLSchema */]({});
  var emptyDoc = { kind: __WEBPACK_IMPORTED_MODULE_1__language_kinds__["a" /* Kind */].DOCUMENT, definitions: [] };
  var typeInfo = new __WEBPACK_IMPORTED_MODULE_0__TypeInfo__["a" /* TypeInfo */](emptySchema, undefined, type);
  var context = new __WEBPACK_IMPORTED_MODULE_5__validation_validate__["a" /* ValidationContext */](emptySchema, emptyDoc, typeInfo);
  var visitor = Object(__WEBPACK_IMPORTED_MODULE_4__validation_rules_ValuesOfCorrectType__["a" /* ValuesOfCorrectType */])(context);
  Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["c" /* visit */])(valueNode, Object(__WEBPACK_IMPORTED_MODULE_2__language_visitor__["e" /* visitWithTypeInfo */])(typeInfo, visitor));
  return context.getErrors();
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concatAST;


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  var batchDefinitions = [];
  for (var i = 0; i < asts.length; i++) {
    var definitions = asts[i].definitions;
    for (var j = 0; j < definitions.length; j++) {
      batchDefinitions.push(definitions[j]);
    }
  }
  return {
    kind: 'Document',
    definitions: batchDefinitions
  };
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = separateOperations;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__language_visitor__ = __webpack_require__(16);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName = void 0;
  var idx = 0;

  // Populate metadata and build a dependency graph.
  Object(__WEBPACK_IMPORTED_MODULE_0__language_visitor__["c" /* visit */])(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  });

  // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.
  var separatedDocumentASTs = Object.create(null);
  operations.forEach(function (operation) {
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName);

    // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.
    var definitions = [operation];
    Object.keys(dependencies).forEach(function (name) {
      definitions.push(fragments[name]);
    });
    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });

    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  });

  return separatedDocumentASTs;
}

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];
  if (immediateDeps) {
    Object.keys(immediateDeps).forEach(function (toName) {
      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    });
  }
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakingChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DangerousChangeType; });
/* harmony export (immutable) */ __webpack_exports__["c"] = findBreakingChanges;
/* harmony export (immutable) */ __webpack_exports__["d"] = findDangerousChanges;
/* unused harmony export findRemovedTypes */
/* unused harmony export findTypesThatChangedKind */
/* unused harmony export findArgChanges */
/* unused harmony export findFieldsThatChangedTypeOnObjectOrInterfaceTypes */
/* unused harmony export findFieldsThatChangedTypeOnInputObjectTypes */
/* unused harmony export findTypesRemovedFromUnions */
/* unused harmony export findTypesAddedToUnions */
/* unused harmony export findValuesRemovedFromEnums */
/* unused harmony export findValuesAddedToEnums */
/* unused harmony export findInterfacesRemovedFromObjectTypes */
/* unused harmony export findInterfacesAddedToObjectTypes */
/* unused harmony export findRemovedDirectives */
/* unused harmony export findRemovedDirectiveArgs */
/* unused harmony export findAddedNonNullDirectiveArgs */
/* unused harmony export findRemovedLocationsForDirective */
/* unused harmony export findRemovedDirectiveLocations */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_directives__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsutils_keyMap__ = __webpack_require__(13);
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







var BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED',
  NON_NULL_DIRECTIVE_ARG_ADDED: 'NON_NULL_DIRECTIVE_ARG_ADDED'
};

var DangerousChangeType = {
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  NULLABLE_INPUT_FIELD_ADDED: 'NULLABLE_INPUT_FIELD_ADDED',
  NULLABLE_ARG_ADDED: 'NULLABLE_ARG_ADDED'
};

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).breakingChanges, findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema), findRemovedDirectives(oldSchema, newSchema), findRemovedDirectiveArgs(oldSchema, newSchema), findAddedNonNullDirectiveArgs(oldSchema, newSchema), findRemovedDirectiveLocations(oldSchema, newSchema));
}

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */
function findDangerousChanges(oldSchema, newSchema) {
  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findInterfacesAddedToObjectTypes(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).dangerousChanges);
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */
function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: typeName + ' was removed.'
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */
function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      return;
    }
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (oldType.constructor !== newType.constructor) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
      });
    }
  });
  return breakingChanges;
}

/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */
function findArgChanges(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  var dangerousChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(oldType) || Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["E" /* isInterfaceType */])(oldType)) || !(Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(newType) || Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["E" /* isInterfaceType */])(newType)) || newType.constructor !== oldType.constructor) {
      return;
    }

    var oldTypeFields = oldType.getFields();
    var newTypeFields = newType.getFields();

    Object.keys(oldTypeFields).forEach(function (fieldName) {
      if (!newTypeFields[fieldName]) {
        return;
      }

      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
        var newArgs = newTypeFields[fieldName].args;
        var newArgDef = newArgs.find(function (arg) {
          return arg.name === oldArgDef.name;
        });

        // Arg not present
        if (!newArgDef) {
          breakingChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' was removed')
          });
        } else {
          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);
          if (!isSafe) {
            breakingChanges.push({
              type: BreakingChangeType.ARG_CHANGED_KIND,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed type from ') + (oldArgDef.type.toString() + ' to ' + newArgDef.type.toString())
            });
          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
            dangerousChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed defaultValue')
            });
          }
        }
      });
      // Check if a non-null arg was added to the field
      newTypeFields[fieldName].args.forEach(function (newArgDef) {
        var oldArgs = oldTypeFields[fieldName].args;
        var oldArgDef = oldArgs.find(function (arg) {
          return arg.name === newArgDef.name;
        });
        if (!oldArgDef) {
          if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newArgDef.type)) {
            breakingChanges.push({
              type: BreakingChangeType.NON_NULL_ARG_ADDED,
              description: 'A non-null arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
            });
          } else {
            dangerousChanges.push({
              type: DangerousChangeType.NULLABLE_ARG_ADDED,
              description: 'A nullable arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
            });
          }
        }
      });
    });
  });

  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function typeKindName(type) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["M" /* isScalarType */])(type)) {
    return 'a Scalar type';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(type)) {
    return 'an Object type';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["E" /* isInterfaceType */])(type)) {
    return 'an Interface type';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["O" /* isUnionType */])(type)) {
    return 'a Union type';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["B" /* isEnumType */])(type)) {
    return 'an Enum type';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["C" /* isInputObjectType */])(type)) {
    return 'an Input type';
  }
  throw new TypeError('Unknown type ' + type.constructor.name);
}

function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!(Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(oldType) || Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["E" /* isInterfaceType */])(oldType)) || !(Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(newType) || Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["E" /* isInterfaceType */])(newType)) || newType.constructor !== oldType.constructor) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
  });
  return breakingChanges;
}

function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var breakingChanges = [];
  var dangerousChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["C" /* isInputObjectType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["C" /* isInputObjectType */])(newType)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: typeName + '.' + fieldName + ' was removed.'
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;

        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);
        if (!isSafe) {
          var oldFieldTypeString = Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
          });
        }
      }
    });
    // Check if a field was added to the input object type
    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
      if (!(fieldName in oldTypeFieldsDef)) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newTypeFieldsDef[fieldName].type)) {
          breakingChanges.push({
            type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
            description: 'A non-null field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
          });
        } else {
          dangerousChanges.push({
            type: DangerousChangeType.NULLABLE_INPUT_FIELD_ADDED,
            description: 'A nullable field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
          });
        }
      }
    });
  });
  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(oldType)) {
    return (
      // if they're both named types, see if their names are equivalent
      Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(newType) && oldType.name === newType.name ||
      // moving from nullable to non-null of the same underlying type is safe
      Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(oldType)) {
    return (
      // if they're both lists, make sure the underlying types are compatible
      Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
      // moving from nullable to non-null of the same underlying type is safe
      Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }
  return false;
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(oldType)) {
    // if they're both named types, see if their names are equivalent
    return Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["H" /* isNamedType */])(newType) && oldType.name === newType.name;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["G" /* isListType */])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(oldType)) {
    return (
      // if they're both non-null, make sure the underlying types are
      // compatible
      Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
      // moving from non-null to nullable of the same underlying type is safe
      !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  }
  return false;
}

/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */
function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesRemovedFromUnion = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["O" /* isUnionType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["O" /* isUnionType */])(newType)) {
      return;
    }
    var typeNamesInNewUnion = Object.create(null);
    newType.getTypes().forEach(function (type) {
      typeNamesInNewUnion[type.name] = true;
    });
    oldType.getTypes().forEach(function (type) {
      if (!typeNamesInNewUnion[type.name]) {
        typesRemovedFromUnion.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: type.name + ' was removed from union type ' + typeName + '.'
        });
      }
    });
  });
  return typesRemovedFromUnion;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */
function findTypesAddedToUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var typesAddedToUnion = [];
  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["O" /* isUnionType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["O" /* isUnionType */])(newType)) {
      return;
    }
    var typeNamesInOldUnion = Object.create(null);
    oldType.getTypes().forEach(function (type) {
      typeNamesInOldUnion[type.name] = true;
    });
    newType.getTypes().forEach(function (type) {
      if (!typeNamesInOldUnion[type.name]) {
        typesAddedToUnion.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: type.name + ' was added to union type ' + typeName + '.'
        });
      }
    });
  });
  return typesAddedToUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */
function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesRemovedFromEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["B" /* isEnumType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["B" /* isEnumType */])(newType)) {
      return;
    }
    var valuesInNewEnum = Object.create(null);
    newType.getValues().forEach(function (value) {
      valuesInNewEnum[value.name] = true;
    });
    oldType.getValues().forEach(function (value) {
      if (!valuesInNewEnum[value.name]) {
        valuesRemovedFromEnums.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: value.name + ' was removed from enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesRemovedFromEnums;
}

/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */
function findValuesAddedToEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();

  var valuesAddedToEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["B" /* isEnumType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["B" /* isEnumType */])(newType)) {
      return;
    }

    var valuesInOldEnum = Object.create(null);
    oldType.getValues().forEach(function (value) {
      valuesInOldEnum[value.name] = true;
    });
    newType.getValues().forEach(function (value) {
      if (!valuesInOldEnum[value.name]) {
        valuesAddedToEnums.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: value.name + ' was added to enum type ' + typeName + '.'
        });
      }
    });
  });
  return valuesAddedToEnums;
}

function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];

  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(newType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    oldInterfaces.forEach(function (oldInterface) {
      if (!newInterfaces.some(function (int) {
        return int.name === oldInterface.name;
      })) {
        breakingChanges.push({
          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
          description: typeName + ' no longer implements interface ' + (oldInterface.name + '.')
        });
      }
    });
  });
  return breakingChanges;
}

function findInterfacesAddedToObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var interfacesAddedToObjectTypes = [];

  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(oldType) || !Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["K" /* isObjectType */])(newType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    newInterfaces.forEach(function (newInterface) {
      if (!oldInterfaces.some(function (int) {
        return int.name === newInterface.name;
      })) {
        interfacesAddedToObjectTypes.push({
          type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
          description: newInterface.name + ' added to interfaces implemented ' + ('by ' + typeName + '.')
        });
      }
    });
  });
  return interfacesAddedToObjectTypes;
}

function findRemovedDirectives(oldSchema, newSchema) {
  var removedDirectives = [];

  var newSchemaDirectiveMap = getDirectiveMapForSchema(newSchema);
  oldSchema.getDirectives().forEach(function (directive) {
    if (!newSchemaDirectiveMap[directive.name]) {
      removedDirectives.push({
        type: BreakingChangeType.DIRECTIVE_REMOVED,
        description: directive.name + ' was removed'
      });
    }
  });

  return removedDirectives;
}

function findRemovedArgsForDirective(oldDirective, newDirective) {
  var removedArgs = [];
  var newArgMap = getArgumentMapForDirective(newDirective);

  oldDirective.args.forEach(function (arg) {
    if (!newArgMap[arg.name]) {
      removedArgs.push(arg);
    }
  });

  return removedArgs;
}

function findRemovedDirectiveArgs(oldSchema, newSchema) {
  var removedDirectiveArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
    if (!oldDirective) {
      return;
    }

    findRemovedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
      removedDirectiveArgs.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: arg.name + ' was removed from ' + newDirective.name
      });
    });
  });

  return removedDirectiveArgs;
}

function findAddedArgsForDirective(oldDirective, newDirective) {
  var addedArgs = [];
  var oldArgMap = getArgumentMapForDirective(oldDirective);

  newDirective.args.forEach(function (arg) {
    if (!oldArgMap[arg.name]) {
      addedArgs.push(arg);
    }
  });

  return addedArgs;
}

function findAddedNonNullDirectiveArgs(oldSchema, newSchema) {
  var addedNonNullableArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
    if (!oldDirective) {
      return;
    }

    findAddedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__type_definition__["I" /* isNonNullType */])(arg.type)) {
        return;
      }

      addedNonNullableArgs.push({
        type: BreakingChangeType.NON_NULL_DIRECTIVE_ARG_ADDED,
        description: 'A non-null arg ' + arg.name + ' on directive ' + (newDirective.name + ' was added')
      });
    });
  });

  return addedNonNullableArgs;
}

function findRemovedLocationsForDirective(oldDirective, newDirective) {
  var removedLocations = [];
  var newLocationSet = new Set(newDirective.locations);

  oldDirective.locations.forEach(function (oldLocation) {
    if (!newLocationSet.has(oldLocation)) {
      removedLocations.push(oldLocation);
    }
  });

  return removedLocations;
}

function findRemovedDirectiveLocations(oldSchema, newSchema) {
  var removedLocations = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
    if (!oldDirective) {
      return;
    }

    findRemovedLocationsForDirective(oldDirective, newDirective).forEach(function (location) {
      removedLocations.push({
        type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
        description: location + ' was removed from ' + newDirective.name
      });
    });
  });

  return removedLocations;
}

function getDirectiveMapForSchema(schema) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_keyMap__["a" /* default */])(schema.getDirectives(), function (dir) {
    return dir.name;
  });
}

function getArgumentMapForDirective(directive) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__jsutils_keyMap__["a" /* default */])(directive.args, function (arg) {
    return arg.name;
  });
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findDeprecatedUsages;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_GraphQLError__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_visitor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_definition__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_schema__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TypeInfo__ = __webpack_require__(25);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new __WEBPACK_IMPORTED_MODULE_4__TypeInfo__["a" /* TypeInfo */](schema);

  Object(__WEBPACK_IMPORTED_MODULE_1__language_visitor__["c" /* visit */])(ast, Object(__WEBPACK_IMPORTED_MODULE_1__language_visitor__["e" /* visitWithTypeInfo */])(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();
      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();
        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new __WEBPACK_IMPORTED_MODULE_0__error_GraphQLError__["a" /* GraphQLError */]('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();
      if (enumVal && enumVal.isDeprecated) {
        var type = Object(__WEBPACK_IMPORTED_MODULE_2__type_definition__["x" /* getNamedType */])(typeInfo.getInputType());
        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new __WEBPACK_IMPORTED_MODULE_0__error_GraphQLError__["a" /* GraphQLError */]('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
        }
      }
    }
  }));

  return errors;
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _location = __webpack_require__(38);

Object.defineProperty(exports, 'getLocation', {
  enumerable: true,
  get: function get() {
    return _location.getLocation;
  }
});

var _kinds = __webpack_require__(77);

Object.defineProperty(exports, 'Kind', {
  enumerable: true,
  get: function get() {
    return _kinds.Kind;
  }
});

var _lexer = __webpack_require__(78);

Object.defineProperty(exports, 'createLexer', {
  enumerable: true,
  get: function get() {
    return _lexer.createLexer;
  }
});
Object.defineProperty(exports, 'TokenKind', {
  enumerable: true,
  get: function get() {
    return _lexer.TokenKind;
  }
});

var _parser = __webpack_require__(131);

Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function get() {
    return _parser.parse;
  }
});
Object.defineProperty(exports, 'parseValue', {
  enumerable: true,
  get: function get() {
    return _parser.parseValue;
  }
});
Object.defineProperty(exports, 'parseType', {
  enumerable: true,
  get: function get() {
    return _parser.parseType;
  }
});

var _printer = __webpack_require__(132);

Object.defineProperty(exports, 'print', {
  enumerable: true,
  get: function get() {
    return _printer.print;
  }
});

var _source = __webpack_require__(82);

Object.defineProperty(exports, 'Source', {
  enumerable: true,
  get: function get() {
    return _source.Source;
  }
});

var _visitor = __webpack_require__(84);

Object.defineProperty(exports, 'visit', {
  enumerable: true,
  get: function get() {
    return _visitor.visit;
  }
});
Object.defineProperty(exports, 'visitInParallel', {
  enumerable: true,
  get: function get() {
    return _visitor.visitInParallel;
  }
});
Object.defineProperty(exports, 'visitWithTypeInfo', {
  enumerable: true,
  get: function get() {
    return _visitor.visitWithTypeInfo;
  }
});
Object.defineProperty(exports, 'getVisitFn', {
  enumerable: true,
  get: function get() {
    return _visitor.getVisitFn;
  }
});
Object.defineProperty(exports, 'BREAK', {
  enumerable: true,
  get: function get() {
    return _visitor.BREAK;
  }
});

var _directiveLocation = __webpack_require__(83);

Object.defineProperty(exports, 'DirectiveLocation', {
  enumerable: true,
  get: function get() {
    return _directiveLocation.DirectiveLocation;
  }
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _GraphQLError = __webpack_require__(39);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError('Syntax Error: ' + description, undefined, source, [position]);
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = __webpack_require__(39);

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

exports.formatError = formatError;

var _invariant = __webpack_require__(81);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
  return _extends({}, error.extensions, {
    message: error.message || 'An unknown error occurred.',
    locations: error.locations,
    path: error.path
  });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStringValue;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g);

  // Remove common indentation from all lines but first.
  var commonIndent = null;
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);
    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;
      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  }

  // Remove leading and trailing blank lines.
  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }
  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  }

  // Return a string of the lines joined with U+000A.
  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;
  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }
  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _source = __webpack_require__(82);

var _error = __webpack_require__(79);

var _lexer = __webpack_require__(78);

var _kinds = __webpack_require__(77);

var _directiveLocation = __webpack_require__(83);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


/**
 * Configuration options to control parser behavior
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  if (!(sourceObj instanceof _source.Source)) {
    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
  }
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer.TokenKind.EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer.TokenKind.EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.Kind.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, _lexer.TokenKind.EOF));

  return {
    kind: _kinds.Kind.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        // Note: The schema definition language is an experimental addition.
        return parseTypeSystemDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    // Note: The schema definition language is an experimental addition.
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}

/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */
function parseExecutableDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.Kind.OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: _kinds.Kind.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.Kind.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: _kinds.Kind.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */
function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, item, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * Argument[Const] : Name : Value[?Const]
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SPREAD);
  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds.Kind.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = void 0;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: _kinds.Kind.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: _kinds.Kind.FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  return {
    kind: _kinds.Kind.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);
    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);
    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.Kind.INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.Kind.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.STRING:
    case _lexer.TokenKind.BLOCK_STRING:
      return parseStringLiteral(lexer);
    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.Kind.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.Kind.NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: _kinds.Kind.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: _kinds.Kind.STRING,
    value: token.value,
    block: token.kind === _lexer.TokenKind.BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.Kind.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.BRACE_L);
  var fields = [];
  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: _kinds.Kind.OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */
function parseDirectives(lexer, isConst) {
  var directives = [];
  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer, isConst));
  }
  return directives;
}

/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */
function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.Kind.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.Kind.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.Kind.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtension
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtension(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, _lexer.TokenKind.STRING) || peek(lexer, _lexer.TokenKind.BLOCK_STRING);
}

/**
 * Description : StringValue
 */
function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}

/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.Kind.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

/**
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    // Optional leading ampersand
    skip(lexer, _lexer.TokenKind.AMP);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer.TokenKind.AMP) ||
    // Legacy support for the SDL?
    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, _lexer.TokenKind.NAME));
  }
  return types;
}

/**
 * FieldsDefinition : { FieldDefinition+ }
 */
function parseFieldsDefinition(lexer) {
  // Legacy support for the SDL?
  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, _lexer.TokenKind.BRACE_L) && lexer.lookahead().kind === _lexer.TokenKind.BRACE_R) {
    lexer.advance();
    lexer.advance();
    return [];
  }
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }
  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}

/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = void 0;
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  return {
    kind: _kinds.Kind.UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */
function parseUnionMemberTypes(lexer) {
  var types = [];
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    // Optional leading pipe
    skip(lexer, _lexer.TokenKind.PIPE);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer.TokenKind.PIPE));
  }
  return types;
}

/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */
function parseEnumValuesDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */
function parseInputFieldsDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */
function parseTypeExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'scalar':
        return parseScalarTypeExtension(lexer);
      case 'type':
        return parseObjectTypeExtension(lexer);
      case 'interface':
        return parseInterfaceTypeExtension(lexer);
      case 'union':
        return parseUnionTypeExtension(lexer);
      case 'enum':
        return parseEnumTypeExtension(lexer);
      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */
function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  if (directives.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */
function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */
function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */
function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */
function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */
function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.Kind.DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */
function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var locations = [];
  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return locations;
}

/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */
function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  if (_directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
    return name;
  }
  throw unexpected(lexer, start);
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(84);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (
      // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      'fragment ' + name + wrap('(', join(variableDefinitions, ', '), ')') + ' ' + ('on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),

  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),

  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  }),

  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),

  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),

  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),

  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),

  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),

  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),

  ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
    var name = _ref31.name,
        directives = _ref31.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
    var name = _ref32.name,
        interfaces = _ref32.interfaces,
        directives = _ref32.directives,
        fields = _ref32.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },

  InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives,
        fields = _ref33.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeExtension: function UnionTypeExtension(_ref34) {
    var name = _ref34.name,
        directives = _ref34.directives,
        types = _ref34.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },

  EnumTypeExtension: function EnumTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        values = _ref35.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },

  InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        fields = _ref36.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  },

  DirectiveDefinition: addDescription(function (_ref37) {
    var name = _ref37.name,
        args = _ref37.arguments,
        locations = _ref37.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  })
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */
function printBlockString(value, isDescription) {
  var escaped = value.replace(/"""/g, '\\"""');
  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? '"""' + escaped.replace(/"$/, '"\n') + '"""' : '"""\n' + (isDescription ? escaped : indent(escaped)) + '\n"""';
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

const Humps = __webpack_require__(134);
const Knex = __webpack_require__(135);

const createGuest = async (obj, args, context, info) => {
  const { input } = args;

  const [id] = await Knex('guests').insert(Humps.decamelizeKeys(input)).returning('id');

  return Object.assign({}, input, {
    id
  });
};

const getGuestByEmail = async (obj, args, context, info) => {
  const { email } = args;

  const guests = await Knex('guests').select().where({ email });

  if (!guests.length) return;

  const guest = Humps.camelizeKeys(guests[0]);

  const reservations = await Knex.raw(`
      SELECT r.*
      FROM reservations r
      INNER JOIN guest_reservations gr
      ON gr.reservation_id = r.id
      WHERE gr.guest_id = ?
    `, guest.id);

  guest.reservations = reservations.rows.map(r => Humps.camelizeKeys(r));

  return guest;
};

module.exports = {
  createGuest,
  getGuestByEmail
};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("humps");

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(136);
module.exports = __webpack_require__(41)(config);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40).load();

module.exports = {
  client: 'pg',
  connection: `${process.env.DATABASE_URL}`,
  ssl: true,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map