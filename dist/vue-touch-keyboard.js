/**
 * vue-touch-keyboard v0.3.1
 * https://github.com/icebob/vue-touch-keyboard
 * Released under the MIT License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueTouchKeyboard"] = factory();
	else
		root["VueTouchKeyboard"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let component = __webpack_require__(1);

	module.exports = {
		component,
		layouts: __webpack_require__(72),

		install(Vue) {
			Vue.component("VueTouchKeyboard", component);
		}
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(4),
	  /* template */
	  __webpack_require__(83),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "C:\\Users\\isaac.BIGTYRE\\source\\repos\\vue-app\\app\\node_modules\\vue-touch-keyboard\\src\\keyboard.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] keyboard.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7962c167", Component.options)
	  } else {
	    hotAPI.reload("data-v-7962c167", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _layouts = __webpack_require__(72);

	var _layouts2 = _interopRequireDefault(_layouts);

	var _isString = __webpack_require__(73);

	var _isString2 = _interopRequireDefault(_isString);

	var _isObject = __webpack_require__(82);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		props: {
			input: [HTMLInputElement, HTMLTextAreaElement],
			layout: [String, Object],
			defaultKeySet: {
				type: String,
				default: "default"
			},

			accept: Function,
			cancel: Function,
			change: Function,
			next: Function,

			onKeyPress: Function,

			options: {
				type: Object,
				default: function _default() {
					return {};
				}
			}
		},

		data: function data() {
			return {
				currentKeySet: this.defaultKeySet,

				inputScrollLeft: 0,
				keyboard_touched: false,

				repeat_timers: {}
			};
		},


		computed: {
			keySet: function keySet() {
				var layout = this.getLayout();
				if (!layout) return;

				var keySet = layout[this.currentKeySet];
				if (!keySet) return;

				var res = [];

				var meta = layout["_meta"] || {};

				keySet.forEach(function (line) {
					var row = [];
					line.split(" ").forEach(function (item) {
						if ((0, _isObject2.default)(item)) {
							row.push(item);
						} else if ((0, _isString2.default)(item)) {
							if (item.length > 2 && item[0] == "{" && item[item.length - 1] == "}") {
								var name = item.substring(1, item.length - 1);
								if (meta[name]) row.push(meta[name]);else console.warn("Missing named key from meta: " + name);
							} else {
								if (item == "") {
									row.push({
										placeholder: true
									});
								} else {
									row.push({
										key: item,
										text: item
									});
								}
							}
						}
					});
					res.push(row);
				});

				return res;
			}
		},

		watch: {
			layout: function layout() {
				this.currentKeySet = "default";
			}
		},

		methods: {
			getLayout: function getLayout() {
				if ((0, _isString2.default)(this.layout)) return _layouts2.default[this.layout];

				return this.layout;
			},
			changeKeySet: function changeKeySet(name) {
				var layout = this.getLayout();
				if (layout[name] != null) this.currentKeySet = name;
			},
			toggleKeySet: function toggleKeySet(name) {
				this.currentKeySet = this.currentKeySet == name ? "default" : name;
			},
			getCaptionOfKey: function getCaptionOfKey(key) {
				return key.text || key.key || "";
			},
			getClassesOfKey: function getClassesOfKey(key) {
				if (key.placeholder) return "placeholder";else {
					var classes = "key " + (key.func || "") + " " + (key.classes || "");
					if (key.keySet && this.currentKeySet == key.keySet) classes += " activated";

					return classes;
				}
			},
			getKeyStyle: function getKeyStyle(key) {
				if (key.width) return {
					flex: key.width
				};
			},
			supportsSelection: function supportsSelection() {
				return (/text|password|search|tel|url/.test(this.input.type)
				);
			},
			getCaret: function getCaret() {
				if (this.supportsSelection()) {
					var pos = {
						start: this.input.selectionStart || 0,
						end: this.input.selectionEnd || 0
					};

					if (pos.end < pos.start) pos.end = pos.start;

					return pos;
				} else {
					var val = this.input.value;
					return {
						start: val.length,
						end: val.length
					};
				}
			},
			backspace: function backspace(caret, text) {
				text = text.substring(0, caret.start - 1) + text.substring(caret.start);
				caret.start -= 1;
				caret.end = caret.start;
				return text;
			},
			insertChar: function insertChar(caret, text, ch) {
				text = text.substr(0, caret.start) + ch.toString() + text.substr(caret.start);
				caret.start += ch.length;
				caret.end = caret.start;
				return text;
			},
			mousedown: function mousedown(e) {
				if (!this.input) return;
				if (this.options.preventClickEvent) e.preventDefault();

				this.inputScrollLeft = this.input.scrollLeft;
			},
			startKeyRepeat: function startKeyRepeat(e, key) {
				var _this = this;

				if (this == null) {
					Console.error('Console error: this was null');
				}

				if (this.repeat_timers[key] != null) {
					this.repeat_timers[key].elapsed = true;

					var interval = setInterval(function () {
						_this.clickKey(e, key);
					}, 100);

					this.repeat_timers[key].interval = interval;

					this.clickKey(e, key);
				}
			},
			touchKeyStart: function touchKeyStart(e, key) {
				var _this2 = this;

				e.target.classList.add("touched");
				this.keyboard_touched = true;

				this.repeat_timers[key] = {
					timeout: setTimeout(function () {
						return _this2.startKeyRepeat(e, key);
					}, 1000),
					elapsed: false,
					interval: null
				};

				e.preventDefault();
				return false;
			},
			touchKeyEnd: function touchKeyEnd(e, key) {
				e.target.classList.remove("touched");

				if (this.repeat_timers[key] != null) {

					if (this.repeat_timers[key].elapsed) {
						var interval = this.repeat_timers[key].interval;
						clearInterval(interval);
					} else {
						clearTimeout(this.repeat_timers[key].timeout);
						this.clickKey(e, key);
					}

					this.repeat_timers[key] = null;
				} else {
					this.clickKey(e, key);
				}

				e.preventDefault();
				return false;
			},
			clickKey: function clickKey(e, key) {
				if (!this.input) return;
				if (this.options.preventClickEvent) e.preventDefault();

				var caret = this.getCaret();
				var text = this.input.value;

				var addChar = null;
				if ((typeof key === "undefined" ? "undefined" : (0, _typeof3.default)(key)) == "object") {
					if (key.keySet) {
						this.toggleKeySet(key.keySet);
					} else if (key.func) {
						switch (key.func) {

							case "backspace":
								{
									text = this.backspace(caret, text);
									break;
								}

							case "accept":
								{
									if (this.accept) this.accept(text);
									return;
								}

							case "cancel":
								{
									if (this.cancel) this.cancel();
									return;
								}

							case "next":
								{
									if (this.next) this.next();
									return;
								}

						}
					} else {
						addChar = key.key;
					}
				} else {
					addChar = key;
				}

				if (addChar) {
					if (this.input.maxLength <= 0 || text.length < this.input.maxLength) {
						if (this.options.useKbEvents) {
							var _e = document.createEvent("Event");
							_e.initEvent("keydown", true, true);
							_e.which = _e.keyCode = addChar.charCodeAt();
							if (this.input.dispatchEvent(_e)) {
								text = this.insertChar(caret, text, addChar);
							}
						} else {
							text = this.insertChar(caret, text, addChar);
						}
					}

					if (this.currentKeySet == "shifted") this.changeKeySet("default");
				}

				this.input.value = text;
				this.setFocusToInput(caret);

				if (this.change) this.change(text, addChar);

				if (this.input.maxLength > 0 && text.length >= this.input.maxLength) {
					if (this.next) this.next();
				}

				if (this.onKeyPress) this.onKeyPress(e, key);

				this.input.dispatchEvent(new Event("input", { bubbles: true }));
			},
			setFocusToInput: function setFocusToInput(caret) {
				this.input.focus();
				if (caret && this.supportsSelection()) {
					this.input.selectionStart = caret.start;
					this.input.selectionEnd = caret.end;
				}
			}
		},

		mounted: function mounted() {
			if (this.input) {
				this.setFocusToInput();
			}
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(6);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(57);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(52);
	module.exports = __webpack_require__(56).f('iterator');


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(9)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(12)(String, 'String', function (iterated) {
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10);
	var defined = __webpack_require__(11);
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


/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(13);
	var $export = __webpack_require__(14);
	var redefine = __webpack_require__(29);
	var hide = __webpack_require__(19);
	var has = __webpack_require__(30);
	var Iterators = __webpack_require__(31);
	var $iterCreate = __webpack_require__(32);
	var setToStringTag = __webpack_require__(48);
	var getPrototypeOf = __webpack_require__(50);
	var ITERATOR = __webpack_require__(49)('iterator');
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
	  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
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
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = true;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15);
	var core = __webpack_require__(16);
	var ctx = __webpack_require__(17);
	var hide = __webpack_require__(19);
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
	    if (own && key in exports) continue;
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


/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
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


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(20);
	var createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(21);
	var IE8_DOM_DEFINE = __webpack_require__(23);
	var toPrimitive = __webpack_require__(27);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function () {
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	var document = __webpack_require__(15).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
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


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ },
/* 30 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(33);
	var descriptor = __webpack_require__(28);
	var setToStringTag = __webpack_require__(48);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(49)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(21);
	var dPs = __webpack_require__(34);
	var enumBugKeys = __webpack_require__(46);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
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


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(20);
	var anObject = __webpack_require__(21);
	var getKeys = __webpack_require__(35);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(36);
	var enumBugKeys = __webpack_require__(46);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var has = __webpack_require__(30);
	var toIObject = __webpack_require__(37);
	var arrayIndexOf = __webpack_require__(40)(false);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');

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


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38);
	var defined = __webpack_require__(11);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37);
	var toLength = __webpack_require__(41);
	var toAbsoluteIndex = __webpack_require__(42);
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


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(10);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(44)('keys');
	var uid = __webpack_require__(45);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(15).document;
	module.exports = document && document.documentElement;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f;
	var has = __webpack_require__(30);
	var TAG = __webpack_require__(49)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var store = __webpack_require__(44)('wks');
	var uid = __webpack_require__(45);
	var Symbol = __webpack_require__(15).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(30);
	var toObject = __webpack_require__(51);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	var global = __webpack_require__(15);
	var hide = __webpack_require__(19);
	var Iterators = __webpack_require__(31);
	var TO_STRING_TAG = __webpack_require__(49)('toStringTag');

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


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(54);
	var step = __webpack_require__(55);
	var Iterators = __webpack_require__(31);
	var toIObject = __webpack_require__(37);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(12)(Array, 'Array', function (iterated, kind) {
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


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(49);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	module.exports = __webpack_require__(16).Symbol;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(15);
	var has = __webpack_require__(30);
	var DESCRIPTORS = __webpack_require__(24);
	var $export = __webpack_require__(14);
	var redefine = __webpack_require__(29);
	var META = __webpack_require__(60).KEY;
	var $fails = __webpack_require__(25);
	var shared = __webpack_require__(44);
	var setToStringTag = __webpack_require__(48);
	var uid = __webpack_require__(45);
	var wks = __webpack_require__(49);
	var wksExt = __webpack_require__(56);
	var wksDefine = __webpack_require__(61);
	var enumKeys = __webpack_require__(62);
	var isArray = __webpack_require__(65);
	var anObject = __webpack_require__(21);
	var isObject = __webpack_require__(22);
	var toIObject = __webpack_require__(37);
	var toPrimitive = __webpack_require__(27);
	var createDesc = __webpack_require__(28);
	var _create = __webpack_require__(33);
	var gOPNExt = __webpack_require__(66);
	var $GOPD = __webpack_require__(68);
	var $DP = __webpack_require__(20);
	var $keys = __webpack_require__(35);
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
	var USE_NATIVE = typeof $Symbol == 'function';
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
	  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(64).f = $propertyIsEnumerable;
	  __webpack_require__(63).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(13)) {
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var META = __webpack_require__(45)('meta');
	var isObject = __webpack_require__(22);
	var has = __webpack_require__(30);
	var setDesc = __webpack_require__(20).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(25)(function () {
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


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15);
	var core = __webpack_require__(16);
	var LIBRARY = __webpack_require__(13);
	var wksExt = __webpack_require__(56);
	var defineProperty = __webpack_require__(20).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35);
	var gOPS = __webpack_require__(63);
	var pIE = __webpack_require__(64);
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


/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(39);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(37);
	var gOPN = __webpack_require__(67).f;
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


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(36);
	var hiddenKeys = __webpack_require__(46).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(64);
	var createDesc = __webpack_require__(28);
	var toIObject = __webpack_require__(37);
	var toPrimitive = __webpack_require__(27);
	var has = __webpack_require__(30);
	var IE8_DOM_DEFINE = __webpack_require__(23);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ },
/* 69 */
/***/ function(module, exports) {

	

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61)('asyncIterator');


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61)('observable');


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {

		"normal": {

			_meta: {
				"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
				"shiftl": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
				"shiftr": { keySet: "shifted", text: "Shift", width: 100, classes: "control"},
				"caps": { keySet: "capsed", text: "Caps lock", width: 80, classes: "control"},
				"space": { key: " ", text: "Space", width: 180},
				"enter": { key: "\r\n", text: "Enter", width: 80, classes: "control"},
				"backspace": { func: "backspace", classes: "control backspace", width: 65},
				"accept": { func: "accept", text: "Close", classes: "control featured"},
				"next": { func: "next", text: "Next", classes: "control featured"}
			},

			default: [
				"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
				"{tab} q w e r t y u i o p [ ] \\",
				"{caps} a s d f g h j k l ; ' {enter}",
				"{shiftl} z x c v b n m , . / {shiftr}",
				"{next} {space} {accept}"
			],
			shifted: [
				"~ ! @ # $ % ^ & * ( ) _ + {backspace}",
				"{tab} Q W E R T Y U I O P { } |",
				"{caps} A S D F G H J K L : \" {enter}",
				"{shiftl} Z X C V B N M < > ? {shiftr}",
				"{next} {space} {accept}"
			],
			
			capsed: [
				"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
				"{tab} Q W E R T Y U I O P [ ] \\",
				"{caps} A S D F G H J K L ; ' {enter}",
				"{shiftl} Z X C V B N M , . / {shiftr}", 
				"{next} {space} {accept}"
			]		
		},

		"compact": {

			_meta: {
				"default": { keySet: "default", text: "abc", classes: "control"},
				"alpha": { keySet: "default", text: "Abc", classes: "control"},
				"shift": { keySet: "shifted", text: "ABC", classes: "control"},
				"numbers": { keySet: "numbers", text: "123", classes: "control"},
				"space": { key: " ", text: "Space", width: 200},
				"backspace": { func: "backspace", classes: "control"},
				"accept": { func: "accept", text: "Close", classes: "control featured"},
				"next": { func: "next", text: "Next", classes: "featured"},
				"zero": { key: "0", width: 130}
			},

			default: [
				"q w e r t y u i o p",
				" a s d f g h j k l ",
				"{shift} z x c v b n m {backspace}",
				"{numbers} , {space} . {next} {accept}"
			],

			shifted: [
				"Q W E R T Y U I O P",
				" A S D F G H J K L ",
				"{default} Z X C V B N M {backspace}",
				"{numbers} _ {space} . {next} {accept}"
			],

			numbers: [
				"1 2 3",
				"4 5 6",
				"7 8 9",
				"  {alpha} . {zero} {backspace} {next} {accept}"
			]
		},

		"numeric": {

			_meta: {
				"backspace": { func: "backspace", classes: "control"},
				"accept": { func: "accept", text: "Close", classes: "control featured"},
				"next": { func: "next", text: "Next", classes: "control featured"},
				"zero": { key: "0", width: 130}
			},

			default: [
				"1 2 3",
				"4 5 6",
				"7 8 9",
				"_ - . {zero} {backspace} {next} {accept}"
			]
		}

	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(74),
	    isArray = __webpack_require__(80),
	    isObjectLike = __webpack_require__(81);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(75),
	    getRawTag = __webpack_require__(78),
	    objectToString = __webpack_require__(79);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(76);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(77);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(75);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vue-touch-keyboard"
	  }, [_c('div', {
	    class: {
	      keyboard: true, touch_keyboard: _vm.keyboard_touched
	    }
	  }, _vm._l((_vm.keySet), function(line, index) {
	    return _c('div', {
	      key: index,
	      staticClass: "line"
	    }, _vm._l((line), function(key, index) {
	      return _c('span', {
	        key: index,
	        class: _vm.getClassesOfKey(key),
	        style: (_vm.getKeyStyle(key)),
	        domProps: {
	          "textContent": _vm._s(_vm.getCaptionOfKey(key))
	        },
	        on: {
	          "click": function (e) { return _vm.clickKey(e, key); },
	          "touchstart": function (e) { return _vm.touchKeyStart(e, key); },
	          "touchend": function (e) { return _vm.touchKeyEnd(e, key); },
	          "mousedown": _vm.mousedown
	        }
	      })
	    }))
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7962c167", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;