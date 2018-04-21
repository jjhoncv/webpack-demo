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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function renderToDOM(element) {
	document.body.appendChild(element);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Teacher_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teachers_json__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teachers_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__teachers_json__);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            teachers: []
        };
    },
    mounted() {
        // console.log("data", data)
        this.teachers = __WEBPACK_IMPORTED_MODULE_1__teachers_json___default.a;
    },
    components: {
        Teacher: __WEBPACK_IMPORTED_MODULE_0__Teacher_vue__["a" /* default */]
    }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            teacher: null
        };
    },
    props: ['teacher']
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _message = __webpack_require__(9);

var _renderToDom = __webpack_require__(1);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _flujo = __webpack_require__(8);

var _flujo2 = _interopRequireDefault(_flujo);

var _vue = __webpack_require__(11);

var _vue2 = _interopRequireDefault(_vue);

var _Teachers = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import data from './teachers.json';

new _vue2.default({
	el: '#app',
	render: function render() {
		var h = arguments[0];

		return h(
			'div',
			{
				attrs: { id: 'teachers' }
			},
			[h(_Teachers.Teachers)]
		);
	}
});

// Vue.component('hello-world', {
// 	methods: {
// 		method() {
// 			console.log('clicked');
// 		}
// 	},
// 	render() {
// 		return (
// 			<div>
// 				<a href="/" onClick:prevent={this.method} />
// 			</div>
// 		);
// 	}
// });

// data.teachers.forEach((teacher) => {
// 	const element = document.createElement('li');
// 	element.textContent = teacher.name;
// 	renderToDom(element);
// });

// console.log(data);

// new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'hello world 4'
// 	},
// 	render(createElement) {
// 		return createElement('div', { attrs: { id: 'myId' } }, this.message);
// 	}
// });

// Vue.component('hello-world', {
// 	data: () => ({
// 		text: 'Hello World!'
// 	}),
// 	render() {
// 		return (
// 			<div>
// 				<input type="text" v-model={this.text} />
// 				{this.text}
// 			</div>
// 		);
// 	}
// });
var img = document.createElement('img');
img.setAttribute('src', _flujo2.default);
img.setAttribute('width', '450px');

document.body.append(img);

document.write(_message.firstMessage);
(0, _message.delayedMessage)();

console.log('hola mundo');

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUE2d0FBQUhPQ0FZQUFBQ2NtSVE4QUFBZ0FFbEVRVlI0WHV5ZENieFZVL3ZIbitiU2lCUU5OR21VQmhHU0lWSm1tU0pwTUdTS2hFd0pHVEtsVU9iSVRQUWEvbVNPTXN0UVNnT2FVMUdrYUpUMC8zelh0WTk5VCtmZWU4NjVaOWpubk4vemViM2RlOC9lZTYzMVhldnN2WC9yZWRhelNtemR1bldyeVVSQUJFUkFCRVJBQkVSQUJFUkFCRVJBQkVRZ1lBUktTTEFHckVkVUhSRVFBUkVRQVJFUUFSRVFBUkVRQVJFUUFVZEFnbFVEUVFSRVFBUkVRQVJFUUFSRVFBUkVRQVJFSUpBRUpGZ0QyUzJxbEFpSWdBaUlnQWlJZ0FpSWdBaUlnQWlJZ0FTcnhvQUlpSUFJaUlBSWlJQUlpSUFJaUlBSWlFQWdDVWl3QnJKYlZDa1JFQUVSRUFFUkVBRVJFQUVSRUFFUkVBRUpWbzBCRVJBQkVSQUJFUkNCdEJDWVAzKyszWHJycmZidXUrL2E4dVhMclV5Wk1yYm5ubnRhLy83OXJVZVBIcUU2VmE5ZTNTNjU1Qks3OXRwcmsxYlA3Nzc3emxxMmJHa2ZmZlNSSFhEQUFVa3JSeGNXQVJFUUFSR0lqWUFFYTJ5OGRMUUlpSUFJaUlBSWlFQUNDUHp5eXkvV3JsMDdxMXUzcmwxMjJXVldyMTQ5VzcxNnRUM3h4QlAyMUZOUDJkaXhZNjFQbno2dUpQNkdtR3pidG0wQ1NvNThpWERCT25QbVREdnFxS05zNGNLRlNTdFRGeFlCRVJBQkVTaWFnQVJyMFl4MGhBaUlnQWlJZ0FpSVFJSUozSGZmZlhiUlJSZlpyNy8rYWp2c3NFTytxNTkwMGtsV3RXcFZlL1RSUnhOY2FzR1hDeGVzVHo3NXBGMTMzWFVTckNuckFSVWtBaUlnQXBFSlNMQnFaSWlBQ0lpQUNJaUFDS1Njd01pUkk1MW5kZG15WmJienpqc1hXcjQvSlBpQkJ4Nnc2NisvM2w1NDRRVWJNR0NBelowNzF4bzFhbVFJekduVHB0a3R0OXhpUC8vOHN3dnJ4VE83MDA0NzJWZGZmV1Y3NzcyM2ZmbmxsODZyNnhubkhYLzg4VFo4K0hEekM5YjMzbnZQaGc0ZEdqcU91aEtTekhXdXZ2cHFtenAxcW0zY3VOR2FOMjl1dzRZTnM4TU9POHdkNjlYdHRkZGVzNHN2dnRqbXpKbGpPKzY0b3d0bFB2UE1NMFBYKythYmI5eDF2djc2YS92cnI3L2MrWlN4MjI2N2hZNTU3cm5uN000Nzc3UWZmL3pSeXBVclovdnZ2Nzg3cG1IRGh1NllKVXVXT0g2VEowKzJQLzc0dytyWHIrL3EySzlmdjVUM3BRb1VBUkVRZ1dRU2tHQk5KbDFkV3dSRVFBUkVRQVJFSUNLQjJiTm51ekRmUGZiWXcyNjY2U1luMmlwVXFCRHhXTDlnSFRObWpGMTQ0WVYyd2drbk9JR0k3YnZ2dnJaNTgyWTc4TUFEN2Y3Nzc3ZFZxMVpabXpadG5FaTg3YmJiWWhhc2hCNGpLRjkrK1dWRFhGYXFWTW1WVTZkT0hkdHZ2LzFjZmN1V0xXc1BQZlNROHdKLy8vMzNWcnQyYmZQcTFybHpaM3Z3d1FmZDN4QytpTm9GQ3hhNDN4R2F0TGxEaHc1MisrMjMyNlpObTBMQ0hkR01PRVZZdDIvZjNxNjU1aHJyMmJPbi9mbm5uM2JsbFZlNmRpSEtNWGdobWhHeGVLamZlZWNkNTdGKzQ0MDM3UERERDllb0V3RVJFSUdzSVNEQm1qVmRxWWFJZ0FpSWdBaUlRR1lSbURCaGdoT2ZpeFl0Y2dJUUwyalhybDJ0YjkrK1R0eDVGaTVZenpubkhPZWQ5TmEwWG5ycHBVNjRyVml4d25sVXNWTk9PY1Y1SHQ5NjY2MllCU3ZlMmF1dXVzcWVmLzc1VUVnd2doaVBhYTFhdFp6WEZFTklWcWxTeGNhTkcrZktRN0JTdDQ4Ly90Z0pVZ3lCdXV1dXV4cHRQZkxJSTUwUVJtaXpOclphdFdxaFkxakRpNWY0OU5OUGQvWEdzOXFxVlNzclhicTBPd2F2N2JISEhtdXMvYTFSbzRiVnJGblRDVlIvSXFvdnZ2akNyUVhtTTVrSWlJQUlaQXNCQ2RaczZVbTFRd1JFUUFSRVFBUXlrTUEvLy94am4zNzZxZk1RdnYvKysvYlpaNSs1Yk1Fa1hqcjU1Sk5kaXlJSjFyVnIxMXJGaWhYZDV6ZmNjSU9OSGozYXJZZjE3T3l6enpZU0ozRzlXRU9DSXdsV3JvdElKbndZTHljSm9yWnUzZW9FSkFMMHZQUE9Dd2xXQkdmbHlwVmRWYWduUHovOTlOTk9qSGJxMU1tSlVOcnJ0OTEzMzkyRkp4TUdqSTBmUDk0ZWZ2aGhGL0s4ZnYxNkZ6cjgrKysvRzU3cHBrMmJHdTBqYkpoeUVjSWRPM1owb2w4bUFpSWdBdGxHUUlJMTIzcFU3UkVCRVJBQkVSQ0JEQ2FBNTVGd1gwSm9FWU9Jc0VpQ0ZZK241MzFFc09MZC9PbW5uL0lKVmtKc1AvLzg4NFFJVmp5ZXJIOUZjT0xWeE5PSzJDWk1PRnl3K3V2bUNWWUVPT0c5WElNMXNJaHl2eUZJMmNvSFlZdkg5dFJUVDNYbGNBNEpxTmh1QnkrdUoxZ3BnL0JuamtkSUk0clBQLzk4dS9ubW0wTmNNbmdZcU9vaUlBSWlFQ0lnd2FyQklBSWlJQUlpSUFJaWtISUNoTlBpT1l3VXZvb0lPK09NTTl6YTBNYU5HeGRic0NMb0VJcmhTWmNJT3o3dHROTzJTYm9VeWNPS0VHVFAyTjkrKzgzS2x5L3ZlQzFldk5nbFNvcEZzQjU2NktIMjk5OS91L1d2NFlib3BFNnNUOFY3TzNIaXhOQWhoQXYzN3QwN0pGajk1eUxzK1h6dzRNRnV6UzRoMGpJUkVBRVJ5QllDRXF6WjBwTnFod2lJZ0FpSWdBaGtFQUVTTHVFNVJaU1ZMRmt5WDgwOTRVV0k3L2JiYjE5c3dZcDNGT0g3N3J2dmhqTDZzdDZWN01TSXUvQXN3WjVnSmVTVzliVVkzazVDZERuUE01SXBVVmM4blhnM3ZUV3NoWGxZV2NOSzltS3U2L2V5L3ZERER5N2JNU3dvSHc4dW1aQTk2OUtsaXdzam5qVnJsdnZzOWRkZmR4NVgvelVPT3VnZ2E5Q2dnZHZEVmlZQ0lpQUMyVUpBZ2pWYmVsTHRFQUVSRUFFUkVJRU1Ja0FTSVVKL3lleExvcUs2ZGV1R2tpU3hIaFVCeUw5WWNVT0N5Y1JMNk80UlJ4eGhqejMybUZ0WGV1NjU1enF4M0tkUG40aUNsUXkrN01QS0ZqY2tUWm8rZmJwTGVzVDVKSVlpZ3pBQ2tqV3kzYnAxc3p2dXVNTUpUTnBTbUdCRnFDTFdqem5tR0JzMGFKQmJoMHNJTU5tRUNmc2w0ekhiMVZBT0NhTVExWGhOeVFqOCtPT1BPMDhxNGhVQlRybHM3VVBJTUtIUGxBMHoyaVFUQVJFUWdXd2hJTUdhTFQycGRvaUFDSWlBQ0loQWhoRWdteTdaZlFuVlplOVV0blJoYjFNRUY0TFM4N3dXVjdDQzVjMDMzM1Q3bEM1ZHV0U0pZN3lqSkRoQ0lJNFlNU0xmUHF4NE9BbjNSUmpPbnovZlpReEdVRjV4eFJYT2U0a2dKZEVSb2NEVUgzSExGanBzcFZPVVlLVXVoQ2l6VFExaWwzVzRiSE9EQnhkQmpiRjlEZGREVUJNbURJc2hRNFk0b2Z6aGh4KzZPckFmcTdlWEs0S2NmVmpQT3Vzc0ozWmxJaUFDSXBCTkJDUllzNmszMVJZUkVBRVJFQUVSRUFFUkVBRVJFQUVSeUNJQ0VxeFoxSmxxaWdpSWdBaUlnQWlJZ0FpSWdBaUlnQWhrRXdFSjFtenFUYlZGQkVSQUJFUkFCRVJBQkVSQUJFUkFCTEtJZ0FSckZuV21taUlDSWlBQ0lpQUNJaUFDSWlBQ0lpQUMyVVJBZ2pXYmVsTnRFUUVSRUFFUkVBRVJFQUVSRUFFUkVJRXNJaURCbWtXZHFhYUlnQWlJZ0FpSWdBaUlnQWlJZ0FpSVFEWVJrR0ROcHQ1VVcwUkFCRVJBQkVSQUJFUkFCRVJBQkVRZ2l3aElzR1pSWjZvcElpQUNJaUFDSWlBQ3FTUEEvcWtISDN5d2pSNDlPdTVDanovK2VIdjExVmRENTFlb1VNSHExYXZuOWx3ZE9IQ2cyek5XSmdJaUlBSzVURUNDTlpkN1gyMFhBUkVRQVJFUWdRd21NSFBtVER2cXFLTnM0Y0tGYVdsRm9nVHJkOTk5WjJQR2pIRnRXTGR1blUyYk5zMzkvdnZ2djl0cnI3MW1IVHQyVEV2N1ZLZ0lpSUFJQklHQUJHc1Fla0YxRUFFUkVBRVJFQUVSaUpuQWswOCthZGRkZDEzR0MxWUVOeUxWYjJ2WHJyVWpqampDdnYvK2U1czNiNTVWcmx3NVpqNDZRUVJFUUFTeWdZQUVhemIwb3RvZ0FpSWdBaUlnQWdFbFVMVnFWYnZtbW10c3pwdzVObUhDQkVPSUhYNzQ0YzZEV0wxNmRWZnJGU3RXMk9XWFgyNFRKMDYwVmF0V3VURFkvdjM3MjhVWFgrdyt4NU9LTi9QLy91Ly83S3FycnJLS0ZTdmFrVWNlYVVPSERnMjFldVRJa1hiSkpaZllOOTk4WTFkZmZiVjkvZlhYOXRkZmY5bGhoeDFtZkxiYmJydTVZeDk0NEFHNy92cnJuZWVTNjFPdkhYZmMwYTY5OWxvNzg4d3pDNlQ0eVNlZjJJVVhYbWl6Wjg5MklidkRoZzF6MS9HSEJLOWN1ZEl1dSt3eW16UnBrdjM2NjYrMjU1NTcybTIzM2VhT0tjZ0lDWTRrV0RtZXNwbzNiMjZqUm8xeVBMREMydmZ1dSs4NnRwOTk5cG50dSsrK29TS25USmxpN2R1M3Q3ZmZmdHQ5TGhNQkVSQ0JUQ0lnd1pwSnZhVzZpb0FJaUlBSWlFQ0dFVUNVYnQyNjFVYU1HR0ZubkhHRy9mampqOWE1YzJjNzhNQUQ3ZW1ubjNhdE9mcm9vNTF3Zk95eHgyem5uWGUyanovKzJQcjE2MmZqeDQ4M0JCM25ORzdjMk5xMmJldUVXN3QyN2F4aHc0Wk9tTDc4OHN0T3hGV3FWTWtRakFqYkRoMDYyTzIzMzI2Yk5tMXlBbkxac21WRzJHMjVjdVdjVUVaNFVvY0hIM3pRYXRldTdZUXZBblRCZ2dYdTkzQmJzMmFOTldqUXdGcTNidTNFTDBJWTRUeDE2bFE3N2JUVDNCcldmLzc1eC9iWlp4L2oySWNlZXNoMjJXVVh1Ly8rKzExNVgzNzVwYXRYSkN0TXNISjhreVpOblBCOThjVVhiY21TSllXMnIzVHAwbGFyVmkzcjA2ZVBhNzluVjF4eGhUM3h4Qk9PUTZsU3BUSnNCS202SWlBQ3VVNUFnalhYUjREYUx3SWlJQUlpSUFKSkpJQmdSZWk5OTk1N29WSVFoemZkZEpQelF1SXRuVHQzcmhOUzlldlhEeDJ6MTE1N09hOGdvby9QZDk5OWR5YytodzhmSGpvRzBmajg4OCtIUW9JUnNIaFE4VmhXcTFiTkhZZkl3eU5LK1BEcHA1L3VCT1E1NTV6alJESEMxanRtMTExM2RSNWdQTGZoOXV5eno3cHo4ZlRpOGNTV0xsM3FQTUVYWEhDQkU2eDRMMG1VOU1FSEg0UThxb2hZam1jTjZpT1BQQktYWUVWWWI5eTQwVDc2NkNNbjBJdHFIL1dCOVE4Ly9CQXFEM0ZQdS9EVXlrUkFCRVFnMHdoSXNHWmFqNm0rSWlBQ0lpQUNJcEJCQkJDc2hOcmVjY2Nkb1ZxVEZSZlBJdXN6OFp6Ky9QUFBMblFXc1llWEZLRkhhUEFKSjV6Z0JLa25XUEc0bm5qaWlRVUsxazZkT2hsZXhuZmVlU2NmSWNRdTVkMTU1NTBod2ZySEgzK0Uxb1VTcHN3YVVUeStDTk53STF6NDdydnZkdUhNZmtPd0huZmNjVTZ3M25qampjNUx1MkhEQml0Um9rVG9NTVF4NjFQeHNrYXlvanlzaHh4eWlEc05OdEcwYi9Ma3lVNHc0MUZ1MGFLRjh3TGptZjcwMDA5dHYvMzJ5NkNSbzZxS2dBaUlRQjRCQ1ZhTkJCRVFBUkVRQVJFUWdhUVJRTEN5VnBUa1NKN2hBY1J6K01VWFgxaWJObTFjaU8vZmYvOXQ5OXh6anpWdDJ0U0pUb1FnSGxlL1lHV05KbXRTUFF2M3NISWRCRnFaTW1YeXRZY1EzaDQ5ZWpoQjZubFlOMi9lN01yQlBNSDYxRk5QV2MrZVBiZGhNV0RBQU1QTGlwajJXN05temV6UVF3OTFncFUxdUhmZGRaY0xPL1liN1NMTSthZWZmb3BMc0JLaVRKc0o2WTJtZllqOU9uWHEyUG5ubjI5RGhneXh3WU1IdTdvVDdpd1RBUkVRZ1V3a0lNR2FpYjJtT291QUNJaUFDSWhBaGhCQXNQYnQyOWQ1TnoxNzZhV1huS2VVc05WZmZ2bkZoY3grK09HSCtiWnZZYzBvYTBKakVheUlSd1FpYTBqRERROHE0aThld1VyU0tNUW9hMkw5eGpwVjJvRmdKY1FaRHl1Q09kd0lkOGJMRzhrSzg3QVN0Z3diei9NYlRmc29BNEZOQ0RGcmU1a0F3Rk5OM1dRaUlBSWlrSWtFSkZnenNkZFVaeEVRQVJFUUFSSElFQUlJVnNRbm1XbzlRd0RlZSsrOWJnMHJvZ3h2cTM5OUtGbHU5OTkvZnp2bGxGTnMzTGh4b1pEZ1NCN1c1NTU3emhZdFd1UXV6UnBQUEpIODd2ZXlJb3diTldwa0pVdVdqRXV3Y2swU0dmbnJPR1BHREpjTWlRUk8valdzWGlpdTExYnFVcU5HRGF0UW9VSk1ncFU5V0VsTWhmZVgwT215WmN0RzFUNEtJZnlYOWJsNHN2SE9VdGVDa2o1bHlEQlNOVVZBQkhLWWdBUnJEbmUrbWk0Q0lpQUNJaUFDeVNhQVlDMWZ2cnlkZmZiWjFxdFhMN2RWQyt0RVR6cnBKQ2NlQ2JNbDRWSHYzcjNkTmpHSUs0UW41K0Y5WlQwcTYwM3hVSVlMVmpMaEVtcU1NT01hV011V0xlMllZNDZ4UVlNR3VZUk9DRjZ5QU9OeFpLdVhlRHlzdi8zMm13dFBKaVRYeXo1TUhjbGVURHNRckZ1MmJMRzk5OTdiWlVSbXZTdmI2Q0M4RWJRSWRFS0dJeGtlVmtRdTljSUlYNTQrZmJvVDlJaFZramx4WFF6eFcxVDdPSTQ2a0docSsrMjNkK3VCdVo1TUJFUkFCREtWZ0FScnB2YWM2aTBDSWlBQ0lpQUNHVUFBNGNsV05IZ01uM25tR1plVUNFRTVkdXpZa05lUnNGOEVJQUlWVVhqZmZmZTVMTHpkdTNkM21YaGZlZVdWaUlKMThlTEYxcVZMRjVzL2Y3N2JaZ1poeXY2clYxNTVwUk9MckZIRnMwalNwQ09PT01MUmlrZXdjaDU3eEJKcWk3Y1dNWGpycmJlNkxXN3dzcExKR1BQMmszM2pqVGRzM2JwMVR1U1NkR25nd0lFRjloU0NsU1JVbmhFK3pOWTAxSmYxcDU0UTl6NHZxbjNlY2Q2YVd1b0pHNWtJaUlBSVpDb0JDZFpNN1RuVld3UkVRQVJFUUFReWdBQ0M5WkpMTG5HaVVTWUNJaUFDSWlBQ3NSS1FZSTJWbUk0WEFSRVFBUkVRQVJHSW1vQUVhOVNvZEtBSWlJQUlpRUFFQWhLc0doWWlJQUlpSUFJaUlBSkpJeURCbWpTMHVyQUlpSUFJNUFRQkNkYWM2R1kxVWdSRVFBUkVRQVJFUUFSRVFBUkVRQVF5ajRBRWErYjFtV29zQWlJZ0FpSWdBaUlnQWlJZ0FpSWdBamxCUUlJMUo3cFpqUlFCRVJBQkVSQUJFUkFCRVJBQkVSQ0J6Q01nd1pwNWZhWWFpNEFJaUlBSWlJQUlpSUFJaUlBSWlFQk9FSkJnellsdVZpTkZRQVJFUUFSRVFBUkVRQVJFUUFSRUlQTUlTTEJtWHArcHhpSWdBaUlnQWlJZ0FpSWdBaUlnQWlLUUV3UWtXSE9pbTlWSUVSQUJFUkFCRVJBQkVSQUJFUkFCRWNnOEFoS3NtZGRucXJFSWlJQUlpSUFJaUlBSWlJQUlpSUFJNUFRQkNkYWM2R1kxVWdSRVFBUkVRQVJFSUZZQ0pVcVVjS2RzM2JvMTFsTjF2QWlJZ0FpSVFJSUlTTEFtQ0tRdUl3SWlJQUlpSUFJaWtGMEVKRml6cXovVkdoRVFnY3drSU1HYW1mMm1Xb3VBQ0lpQUNJaUFDQ1NaZ0FScmtnSHI4aUlnQWlJUUJRRUoxaWdnNlJBUkVBRVJFQUVSRUlIY0l5REJtbnQ5cmhhTGdBZ0VqNEFFYS9ENlJEVVNBUkVRQVJFUUFSRUlBQUVKMWdCMGdxb2dBaUtROHdRa1dITitDQWlBQ0lpQUNJaUFDSWhBSkFJU3JCb1hJaUFDSXBCK0FoS3M2ZThEMVVBRVJFQUVSRUFFUkNDQUJDUllBOWdwcXBJSWlFRE9FWkJnemJrdVY0TkZRQVJFUUFSRVFBU2lJU0RCR2cwbEhTTUNJaUFDeVNVZ3dacGN2cnE2Q0lpQUNJaUFDSWhBaGhLUVlNM1FqbE8xUlVBRXNvcUFCR3RXZGFjYUl3SWlJQUlpSUFJaWtDZ0NFcXlKSXFucmlJQUlpRUQ4QkNSWTQyZW5NMFZBQkVSQUJFUkFCTEtZZ0FSckZuZXVtaVlDSXBBeEJDUllNNmFyVkZFUkVBRVJFQUVSRUlGVUVwQmdUU1Z0bFNVQ0lpQUNrUWxJc0dwa2lJQUlpSUFJaUlBSWlFQUVBaEtzR2hZaUlBSWlrSDRDRXF6cDd3UFZRQVJFUUFSRVFBUkVJSUFFSkZnRDJDbXFrZ2lJUU00UmtHRE51UzVYZzBWQUJFUkFCRVJBQktJaElNRWFEU1VkSXdJaUlBTEpKU0RCbWx5K3Vyb0lpSUFJaUlBSWlFQ0dFcEJnemRDT1U3VkZRQVN5aW9BRWExWjFweG9qQWlJZ0FpSWdBaUtRS0FJU3JJa2lxZXVJZ0FpSVFQd0VKRmpqWjZjelJVQUVSRUFFUkVBRXNwaUFCR3NXZDY2YUpnSWlrREVFSkZnenBxdFVVUkVRQVJFUUFSRVFnVlFTa0dCTkpXMlZKUUlpSUFLUkNVaXdhbVNJZ0FpSWdBaUlnQWlJUUFRQ0Vxd2FGaUlnQWlLUWZnSVNyT252QTlWQUJFUkFCRVJBQkVRZ2dBUWtXQVBZS2FxU0NJaEF6aEdRWU0yNUxsZURSVUFFUkVBRVJFQUVvaUVnd1JvTkpSMGpBaUlnQXNrbElNR2FYTDY2dWdpSWdBaUlnQWlJUUlZU2tHRE4wSTVUdFVWQUJMS0tnQVJyVm5XbkdpTUNJaUFDSWlBQ3dTTnd3dzAzQks5U1VkUm82TkNoN3FqcnI3OCtpcU9EZDBpbWNnOGVTZFZJQkVRZ25RUWtXTk5KWDJXTGdBaUlnQWlJUUE0UThEeVZPZERVUURWeDY5YXRnYXFQS2lNQ0lpQUM4UkNRWUkySG1zNFJBUkVRQVJFUUFSR0ltb0FuV0RQVlV4bDFRd055b09jWmxtQU5TSWVvR2lJZ0FzVWlJTUZhTEh3NldRUkVRQVJFUUFSRW9DZ0NXZ3RhRktIRWZpN2VpZVdwcTRtQUNLU1hnQVJyZXZtcmRCRVFBUkVRQVJISWVnSVNVS250WXZGT0xXK1ZKZ0lpa0Z3Q0Vxeko1YXVyaTRBSWlJQUlpRURPRTVDQVN1MFFFTy9VOGxacElpQUN5U1Vnd1pwY3ZycTZDSWlBQ0lpQUNPUThBUW1vMUE0QjhVNHRiNVVtQWlLUVhBSVNyTW5scTZ1TGdBaUlnQWlJUU00VGtJQks3UkFRNzlUeVZta2lJQUxKSlZDa1lIMzY2YWZ0akRQT2NMVjQ2NjIzckV1WExnWFc2SkpMTHJGNzdybkhmYjU1ODJZclhicDAwbXIvODg4LzI0TVBQbWpYWG50dFVzdEpXZ04wNGF3aDRQK08rQnRWc21SSnExNjl1blhvME1FdXZmUlNPK0NBQTdLbXpXcEljQWhFR245bHlwU3hIWGJZd2ZiY2MwODc2cWlqckUrZlBsYTFhdFhnVkZvMXlUa0NFbENwN1hMeFRpMXZsU1lDeFNId3p6Ly8yRXN2dldTUFAvNjR6Wnc1MDlBNFdLMWF0V3ovL2ZlM3l5Ky8zRnExYXBXdmlPZWZmOTY5WXg1MjJHSEZLVHBqem8xYXNKWXFWY3BPUHZsa2UrNjU1eUkyN3UrLy83YmF0V3ZiYjcvOVpsdTJiRW02WUtVZVBYcjBzQTBiTmxqNTh1VXpCcmdxbW4wRVBNR0FNUFdMVXNibTk5OS9iKysrKzY2eHRRQTNvbDY5ZW1VZkFMVW9yUVFpamIrLy92ckxsaTVkYWg5OTlKRXRYNzdjYXRhc2FSeVhyUTgyWHM0Lysrd3oyM2ZmZmZQMXhSNTc3R0ZNcEo1OTl0bUY5aEdDdms2ZE9uYnp6VGZiTDcvOFlwOTg4b21kY01JSjI1eFRyVm8xVzd0MnJmczd6emttcFR4aDhQREREOXVaWjU0WjgxZ1lOMjZjZGU3YzJVMHdaTE5KUUtXMmQ4VTd0YnhWbWdnVWgwRDM3dDN0aFJkZXNOMTIyODFPT3VrazIzbm5uVzNObWpYMjlkZGYyenZ2dk9OMHpwdHZ2bWtkTzNZTUZkT2tTUlByMXEyYjNYYmJiY1VwT21QT2pWcXc3cmZmZmpaMTZsVDM4c05ETzl4ZWYvMTFPK2FZWTZ4Tm16YnV1R1I3V1BGWWpSdzVVb0kxWTRaYTlsYlVFd3pzTDNqRERUZHMwMUJFUTZkT25heHk1Y3J1KzFPdVhMbnNoYUdXcFp4QVllTVBVY1ZFeWNVWFgrd21UU1pQbm14Nzc3MTN5dXVZN0FLTEsxaDVNV0JTdGxLbFN2Yk1NOCs0RndPNEZtWUkzTHZ2dnR1OVhCVEhkdDk5ZDFkZW8wYU5pbk9ad0o4ckFaWGFMaEx2MVBKV2FTSVFMNEVQUHZqQXZTTWVkTkJCOXQ1NzcyMFROZnJhYTYvWnNjY2VhNjFidDNiNkN1T1p0ZjMyMjlzVlYxd2h3ZXFCOTE2RzJJU2FGM0xDY004OTk5eHQrZ1h2NjVRcFU1enJHamQxdUdEbGI2TkdqYkxwMDZlN21XbG1FVTQ4OFVTNzZxcXIzRXVDWjh1V0xYUHczM2pqRGVQbjdiYmJ6bHEwYUdFREJ3NjA0NDgvM2gzRzhldldyUXVkdzRzR0hsNk1jdSs2Nnk3M3NqRjM3bHduRGxxMmJHa1hYbmloblhiYWFhRno1c3laWTgyYU5YTWh4UTBiTnJScnJybkdkdGxsRnplYklST0JXQWdVSlZpNVZ0ZXVYZTN0dDkrMkw3NzR3dmJaWngvM1BUci8vUFBkemVtVlYxNnhKNTk4MG5tQkdMc1lYcDRiYjd6Um1BaEM1QkxPaVFkMzhPREJXU2s0WXVHdFkvTVRpR2I4alI4LzNrWEk0SUhFRStrM1BtTXB4N1JwMDl4OXRFR0RCaTU2aFJBazdwK01VVHlBL2ZyMXM0Y2VlbWdiL09lY2M0Nk5HVFBHM24vL2ZUdmtrRVBTMGozUkNOYStmZnU2Qi95S0ZTdmNkNHJuQzk5RFhoSThEeXNlYUFRb3p4SENxWmxzS3NqQ0JTdlg3TisvdjN2R2NYN1BuajNkZHhndkxNeVpOT0FsQThhOGZBd2ZQdHhPUGZWVSs5Ly8vdWVZRHhzMnpKaGx6MWFUZ0VwdHo0cDNhbm1yTkJHSWw4Qjk5OTNubmgyalI0OTJXaVdTOFp6SDY0cXdIVEZpaEEwYU5DamZZVGZkZEpQVE05bHNVWHRZVWZnOGNBa3RDMy9oV2IxNnRRUEo1NHNYTHpaQ25QeUM5Zjc3NzNlZDBLNWRPL2NpVktGQ0JTZHV4NDRkNitCUG5EalJNZVpCampoZHNtU0pPNzVwMDZiMnh4OS91Qm52Yjc3NXhsMlhseTVlNHErNzdqbzMwNEFMblpjcVhnRHdJUEF2WXBkMXQ3dzgvZm5ubjA2OEloUnV2ZlZXSjVDeCtmUG5PNkhLOVhncElaU0xGeEJFaEV3RVlpRVFqV0E0L2ZUVDdkbG5uelZtMGc0KytHQjc3TEhIN0t5enpuTGZCNFFDL3pKN3huckRsU3RYT2xISzkrcTg4ODR6d2hyNVR2QTk0ak9FTHkvWk1oR0FRRFRqaitQMjJtc3ZkeC85NFljZkRLOGVkdWVkZDdvWldzWVRFM3JrSFVDZ2NxOGxYd0gzVXU2ckxQZGdqUTJpREFIbUdmZHNKdm9JVjFxMGFGRyt6MkxwSFNadG1CUmx6Qk01NDAxT1JudU5hQVFyRTYza1llRDdobkNsSE5ZTWNmLzNod1R6MEYrNGNHSE1IbGJFTHBPZ2lIK1dBL0E3ejZFTExyakFUZVF5SWNWelp1UEdqZTU3VGFneTMyM1dHLy80NDQveXNFYmIyUmwrbkRkWnp2ZUw4WmdzazJCTkZsbGRWd1FTUytELy91Ly83TGpqam5QL01ZRmNWUDRmbkhFOHU2Njg4a3EzZElYblRQUG16YTF4NDhhSnJWakFyaGFUWU1YN1NNZ2pOMXhpcHoxajFwMEg4SXdaTTl3YW9IREJ5c3o4VjE5OTVjTFJDSXYwakpsc1pwYzVqd2MzSXJaOSsvWjI5ZFZYdTlsbXoxaVBoUkRsb1k5UXhUeVBsWDhOSytLVkdXcGVSSGdaOEw5VUVkTE16RGN2WEt3VlFnRHN1dXV1N21VQkFaQXV6MERBeG9PcUV3ZUJvZ1FEa3pkTXZpeFlzTUI1ZFpqY2VlcXBwOXg2Vmw3MnYvMzJXOXRwcDUxQ0pmT0MrOGdqajdpSklTWjVQR1BNTXFIRGQrL0xMNytNbzZZNkpSc0pGRFgrdkRZVFJjS2tIZDU4SG5BLy9mU1Q4K3d4U2NMRHozdkI1WGd2Z1I2VGczdytZTUFBdS9mZWUyM1NwRW41Smt0WVc4T0xONkwzOXR0dmp4dHZ2WHIxbk9ERi9HRlAwVjR3R3NIS013clJ6VnBUalBzK3p5YktMYTVnaFdYZHVuV2QwQ1Y2Q0dOU2luRHNEei84MEUyTThxd2FNbVNJKzA0VEZZUWgrQ1ZZbyszbDdEaE9nalU3K2xHdEVJRkVFZUFkRWUyREU0N25IeE9iaHg1NnFKc0E5VCtYL2VWOS92bm5ocTVCdEdvTjY3OWt2SmNoUEt5SVNsNXdBTVNMajJjSVNVUWxvcFFRcDNEQkd0NnBtelp0Y3JQMlFHWlduV3NmZmZUUnJyUGF0bTNyeENoL0syeVdJWkpnSmNTWUZ5K0VRWGdpSmw1U0NHbjJ5dkplTVBBMDRIR1FpVUM4QkFvU0RIaFM4Snd3eWNPNHhJT0ZseFh6emlHYzBudUI1dTk4TDJyVXFPRW1VeVpNbUxCTmxYaXg1a1dieUFGL0tIMjhkZGQ1bVU4Z1dzSHFoUjBSaW5yWlpaZTVKUnBFeFRBbXd5ZnN2dnZ1T3hjR3pIRWNUNFFLNGNTRUxYR2VaMTQ0TUpPQkxMMkkxL3lDbFV5SWVFRmpNYnkrZUVvSm0vY2JNODVNZ0JJT2pHRGxPME43TUR6SmZKOTRGaFJYc0RMcFNnaXhKMWE1UG1KMHh4MTNkQk5TaEFJVHh2WHl5eSs3OG5yMzd1MEVQdldXWUkybHB6UC8yR3dWcktscVYrYVBBTFZBQkxZbFFEUXBrOHBNZERLNWlmSDhJTWtTK1lIUVZpeVI5RXlDTmNJbzhndFdSQ1V2TnJ5RUUvckx3eGJYTktLUDJmZUxMcm9vb21CbHZTbWY4MkkwYjk2OFVHZDR4ZkVROTBMQWNHL3pPdzkrM09PRVR4SmE1ZmZNY2w0a3djcHNCRGZOd295WE5qeFlubUNsVFloWW1RakVTNkNnYlczODF5TkNnT084Y2V5ZDQ0a0g3MWpXcnVLQkxjcEllMDRJaUV3RW9oV3NKQWdpRndELzRqRmwrUU5yT0FzelBJTkVybUFzb1dBU2huc25zNzVlT0RCcDl4Rmx4VEZDZ3BuWUlTU1krc1VhRW94M2s4bFBmNVplUkNJcC81bmdZZWxKTWdYcjc3Ly83aUozeUpKZlZMWmZub0hjRHhEL0NINEoxdjlHVGk2SW5sUzFNZFVod2FscVYzSHVNenBYQklKT0FMMUVQZ2d5MVRNSlN6UWRIbGlpOE5CUVhxYi9TSUtWeUR3bWxJbUc1Ym5Dc3NzNzdyakRPUU96WVRlVm1FS0NFWGVFay9EYXRiNEFBQ0FBU1VSQlZERTc3TzNKU29ndW5sSkNIWGs1Q1Bld0VvTEYrcWlQUC83WWhVWHhPZXRnQ1lraUxKSjFlWDdCeWtzUWYzLzAwVWVORGlGQkUydGVXZS9IZWlzUGVpVEJ5aHBVOWk0aWpLMGdZOFlkTDdFbldGbGJXRlEyeUtBUGNOVXZ2UVE4d2NBNFo0TEZNeVowbUNGanE1dncvYk84YzdqQitMZmM4Q2FBQ0F2eFJ6R0V0eEJ2VjZSczNla2xvZExUUVNCYXdjcUVJa2tkRUtEY2kwa0tSSDRBSmswSU5ZOWszTk85c0hUV2R0NXl5eTMyNmFlZnVsQWtMeHlZQjJKNEFvaFVjMkFaQ0VLWDVIN1Vsd2xWd3BvUnJhd2I1M2tUcldBbFVSSWU1VWdSRHY1MmhTZGQ0a1dDaEdvc1orRzVCeGZFUE04OFBMODgwL0RDOG93Ny9QRERYWEluNmxTMmJGa1gvcCtOMlp2OXZLSVJVTGtnZWdwcUl5K2EvTWQyVkdTTUppSXMwdFpLMFg2M291RWQ3YldpT1M0WCtpNGFEanBHQkJKSmdNbFFudkU4WTlFL3ZDUHlYQzdJdzhvU0hyeXl2RmNTOVlSRHpyKzBMSkYxUy9XMVloYXM2OWV2ZHg0Z29LRDJFWCs4WENNNnNYREJ5dm9kWHVUWks0aXdTTDhScW9YWTlRdFcvK2QwRkxQamVBRlkvOHE2S3dRelZwaUhsVmw2c3FvV1poS3NxUjVxMlZ0ZXRJTEJUNkFnd2VwNVdPTlp4NWU5aE5XeXdnaEVNLzRRVUx3RXMxeUNTVDBtRFQwUEs5NU5vbG1Lc2xtelpqbGg2NFVKNHgwa2ZBbHhTRkttZEJ0aW5BbFExcEh5UUtkTmVHMlpOTUtpRmF6TWFCOXh4QkZPU0xKdTNGdHZHdDYrY01IS3BDMWVVN3pOaUFXMmVIdmdnUWRjWFhqMk1ibnJaYmNuM0JweFFzSkFKZzdvQTRReTI3VmxxMFVqb0hKQjlFUnFJOHVvbUpSLzRva24zTVFGazBxOEh4R2E3ODhYRXN2WWlJWjNMTmNyNnRoYzZMdWlHT2h6RVVnV0FiTDJzNHNFU1psWS9saVFZQ1ZQRHhPbmlGWCtqYlRWWXJMcW1PenJ4aXhZcVJCaFY5eFEyVHZ1d0FNUHpDYzR3d1VyU1NkWVAwVG1STlpMK1kyMXI4d3NGeVJZdldONTJXSm1tcGN0Tm0zblJoeEpzSHBKbktnWG4vc044VXM0cHJjdVZvSTEyVU1yZDY0ZmpXQUlwMUdRWU9VNFFqOFk1NUgyUENaTHNEOUJVKzVRVmtzTEloRE4rRU00c1JTQ1VOUlhYMzNWWFFxQmg5YzFVdElHOGd5UWx5QjhLUWFSQW9ndVhrNlp1T1IzTDh1N2VrZ0VDaU1RallES0JkRVRxWTE4RnduN0kyVGZNL0lZRU9iTysxTThGZzN2ZUs1YjBEbVIyc1c3Rzl0dE1MSDE2NisvdWtremRtcndiekdZeURyb1dpS1FhUVNJSW1XaUUwM0NzOW1maGQvZkZoTGFrclFQVFVXVWEyRnJXTmxsaGR3b1JHdVFFeVZiTEM3QlNsdzFRcFgvbUhWblpwbDRhU3hjc0NJZWp6enlTSGNqSnVtRVo0UkNrbGtTYitoenp6M256bVBHbVZsbU9vTDFVcDZSaUlZWEk3STVFdUtGNGVGbHk0VlZxMWE1TFFvd0wwc3dZWm1FcTNsMVlrQXdZODVzSlFtV1NMd2h3Wm90UXpqOTdZaEdNSVRYc2pEQmlyQkFZTEFBbnhCTXp4Q3JUTndRM3FGMTErbnY5NkRVb0xEeHh3c2pXZHdKanlXY0NPK2hsL3FlaHhuSmpsaHp5WFkzZmk4cEw1bUV0cEtZeUovSWlJZ1lQRDljazIxaWVCR045NFU2S1B4VWo5UVFpRVpBRlNSWW1VRGhma2pvTjg5MmJ4MVhhbXFlMkZLaUVlVmVKQnZiWGZpWG1jUlNrMmg0eDNLOW9vNk4xQzZXdFJBaFIyUWMwWGhFRW5BdjRuNFR2a3ltcU92cmN4SElWZ0tlQXc1TnhITTNQS3FIdkFmY0I0aU9JaVNZSEQ4OHkvR2c0Z2pFSWVnWkNRRFJYQ3poOUxZRnpSWnVjUWxXR3M5TUdSQ1pvU2Voa21maGdwWFplSTRGSEd1Z2VFSGlnY09zUEM4L3JDRWxJUWFoVUNSdkloeUdOYXRrYmVRR3g0MmJ0VVM4T0EwZVBOaHRtNE41NjdFb2ovMEZtWEVnOUlwT1FzZ2lwZ2toSmtrSW9jdDRjbkdOc3k0RWsyRE5saUdjL25Za1dyQ3VXTEhDZlE4SXRVUU1FRkxQcEJBUGZyeXVmQjhJS1pTSkFBUzg4WWV3WkwwMHhpUWY0NGoxbTB6ME1jdktGbUxlNXg0NU10WGk4YWhmdjc1NzhER1p4emxNSW5KZlprbUcvK0hKdFRnV0x6LzNkRUxZcTFTcG9vNFFnU0lKUkNPZ0lva2VvcU5JOXNqTEdSTWs1TS9JWnNIS2Q1ZjNHVjVPZVZlSzE2TGhIZSsxSTUwWHFlK0ludU85akRWMW5uRXZ3bmxCS0x4TUJFVEEzTklUQk9uOCtmUGQ5bWc0NUZpMlE2VGQ5OTkvNys0RFJHRHd2ZkcyN09UNXpyYUlQSXRacG9OZUlvS0tkMGVlNlNRdXhNR0JBQ2I2TkJzc2JzSHF1YWZaeWdiQldKQmc1ZTlrcUFJeS95SkdlZGtHSWpQNlFFV004akJpblNxekEzekcybGRDU0Vnc3d4b09adk43OU9nUjJwT0lkVW9rRG1FN0JXNklKQUpoMW9Fd051SzhTU2JDVEFUdWRUcU44aEczbmttd1pzUHdEVVliRWkxWWFSVXZLMFFia0VBTWtZcVFZQktHU1J1K0t6SVI4QWdVbEtVYUljbTlrNVQ0aEJ4NWtTamg1RjU4OFVVM1E4dmFTKzZmVENveVlVZ21ZWDhhZmU4OGhESDMyMU5PT2NWdFlTWVRnV2dJUkNPZ0lva2VKdTZZY0dhUGRaYjBaTE5nWllLZDd4NHZzRXk4RjVXTG96RHUwZkNPcHQraVBhWW96ekgzRmhKcTRwd2cybzBYYzVrSWlFQWVBYllxSkFjRFVSVjhsNGdtSlk4QzN4TW1tc2s1RVo0OGlRZ0drdnZ4M2VKemNpS2dvYmdHaHFieWRGSTB1MDhFdlMrS0ZLeEJiNERxSndJaUlBSWlJQUlpRUd3QzBRaW9va1JQTmd0V1hsQUo1Y096d29RN2svdkZzV2g0RitmNjRlY1cxbmU5ZXZWeWtTQk1oaEh4UnBaN21RaUlnQWpFUWtDQ05SWmFPbFlFUkVBRVJFQUVSQ0JtQXRFSXFGd1ZySVQ3RVlMZnRHbFR0ejY4b01RcnNVQ1BobmNzMXl2cTJNTDZqaVV0UkFvUklreCtoa21USnJrc3BqSVJFQUVSaUphQUJHdTBwSFNjQ0lpQUNJaEFJQWtRS3NXK2MyeGRVNVR4d2t6NFZDcU50YjVzQk0rK21peG5ZUjB3SXNYTFdsL2N1ckNGajdkdkxJbTJNRS8wa0NlQzdWSmlOZmFpSlhGaDI3WnRZejAxNHZIUkNLaGNGYXpzTVQ5MjdGZ1g3dXdYcXl3RmlYZS83V2g0SjZSai83MUlVWDNubGRXbFN4ZVhWSlB3UjVrSWlJQUlSRXRBZ2pWYVVqcE9CRVJBQkVRZ2tBU2lGYXg0ZXRxM2IrL1dDS2JTQ1BFa1l6NWhrV1N0SitOM3N0WVVrY3dHa2NOV0tjVXg5dG1GRlJNQmliQm9CRlJSb2lkYlE0SkpsRUkra0hCamU0cDQrekVhM29ub1YrOGFrZnJ1MEVNUGRibERHRXVlc2FhZUxYdnV1KysrUkJhdmE0bUFDR1E1QVFuV0xPOWdOVThFUkVBRXNwMkFYN0NTV1pzRVUyUlJKQXpSeTdDTktDRGtrci9oNFVGQTFxbFR4MjJYd25ZYmVEeTV6cGd4WTV6Z1ExaXlXVHZabGZtZDdYd1FnM2hJK2F4Rml4WXU2L3p3NGNOZHdpb3k0dVBoSmRNajErcldyWnRMWmtYaUM3STA4amNTQUpKNHh1OWg1Zk5CZ3dhNXJNc0lNbDd1U1hpRmNSd0pBOG5jakpjVzd4dEpzbXJWcWxWZ2w0WUxWc290cUkwd0lza1AyNzNobVczZXZMazkrdWlqemlOTFZuMlMvcERza0VTR3FiQmNFS3lwNEppT01pTDFIZGxLR2UrTUp4TEFzVHNFNDV0a2duaGFaU0lnQWlJUUxRRUoxbWhKNlRnUkVBRVJFSUdrRUVBd0RoMDYxTzNMelY2YlpJK1B4ZnlDbFl6eWhGWk9temJOQ1ZldTk5SkxMeG43aDVPUkhvRkdsbmlNYlBlRTBySnRRT1hLbGQzV1BtVG9aazl2dHZaQnBMSm5KTUtORjIzQ052SE9zdFVQV2U3SjVFM21icnhaWkw5djA2YU55OXFJQnhWQnkzcEVoQ3RidWlGMDhiRDZRNElScVd4SGdBZVdyUXlvVit2V3JWMzJaYnhUdk9RaklzZVBIKy9LSlBRWDBjcyt1UVZadUdBdHJJMElXZmJqOVVLR3lkQ1BpQ2RKRHBrcFlaVW9EMnMwL1JsSjlMQzFBK01DSTJrUERLbGJ4WW9WQzh4OEhVMVpPaWF4QkNMMUhmdm44cjNtZThQMlJQUWZrek5ublhWV1lndlgxVVJBQkxLZWdBUnIxbmV4R2lnQ0lpQUN3U2JBaXl4N3ZHSUlOclpBaThYOGdoVXZKOTdDaHg5KzJGMkN2V1Q3OWV2bnJoOHVXTmtqZk1pUUlXN2ZTd3p2S0NJUmJ5bnJYTm5XWjlTb1VlNHp0bEJyMWFxVkU2eDRRdGtEaitQeGdtSWJObXh3SGxDMkZzREkrTXJlZW13R1g1QmdKUW5OZGRkZFo3Tm56dzQxbDdwUzd0MTMzKzA4d255T2x4TkRRT014TG14TmFyaGdMYXlOanp6eWlOdEhuZjM5cUNzaTBMT2dDRlk0REJ3NGNKdmhnT2pCR3k0VEFSRVFBUkhJZmdJU3JObmZ4MnFoQ0lpQUNBU2FnRit3SWdyeGpzWmk0WUtWWkRXRTZtSitrUm91V0hmY2NVZVhXS2g4K2ZLaDR2RG1zWmNkWWJsNE13bU54Zmc3SGx1L1lNVkRpbWNXdzB0TG1YaVM4SVlTWm90WUpTeXlJTUg2NElNUE9tOHUrNDU3aGlqRkM0dUhGOEhLTlk4KyttajNzZjg2QmZFSkY2eUZ0UkZ2S3FLUHJVYSsvUEpMNXlWR29QUDNkQWpXV1BwY3g0cUFDSWlBQ09RT0FRblczT2xydFZRRVJFQUVBa21Ba0dDRUlhSVFqMXB4UW9MeHNFWXJXQkhIckVNbGUyKzRFUTdMMmxYcWc4MmNPZFAyMkdPUGZJS1Z6ZDRwQytGYXZYcDFlL1hWVisySUk0NXd4eVArQ09zdFRMQnlQQ0hGaEZONlJnaHVsU3BWbk5jekVZSzFzRGI2MjR6UXZ1Q0NDNXgzbXBCa0NkWkFmbFZVS1JFUUFSSElTUUlTckRuWjdXcTBDSWlBQ0dRUGdXZzlySGd5V1FkS0FxT3laY3U2dGFEc0NVa1NtQW9WS3RnYmI3eGg3Nzc3cmx2M2l1Zng5dHR2ZDJ0WUNkRWxSSmdRV3IrSDFST3M4K2JOTTBKdkNkY2xWQmh2Szl2SnNKNldOYVNzZFdXYkdOYkwrdGV3Y2o1cldQR21kdTNhMVlVdHN3NFdJZHV4WThlRUNOYkMyaGllQ1pqd1k4UXpYbC8yQlVWOHMrWlFKZ0lpSUFJaUlBTHBKQ0RCbWs3Nktsc0VSRUFFUktEWUJLSVZyQWpFL2ZiYnp3bExST3BlZSszbFBKd0lSS3hHalJwdVRTZC9KMkVNZ3BQTXBvaFFoTnNwcDV6aUVpTVI4c3ZmUE1IS3VheXpKSVB2VGp2dDVFSjR5VVRjdjM5L1k5OVhQS1dJUDBReXlaOFF0OTQrcklob3JyMW16UnEzTnBaUVpHOGJrRVI0V0dsSFFXMmNOV3VXeTJ5TWlLYnMzWGZmM1NXS0lrU2JlbDkyMldVdUdSVHRrb21BQ0lpQUNJaEF1Z2hJc0thTHZNb1ZBUkVRQVJFSU5BRzJyMEdjWW9oY01nT1RrQW1QcTB3RVJFQUVSRUFFUkNBMUJDUllVOE5acFlpQUNJaUFDR1FRZ1U4KytjUk9QUEZFKytxcnIxd1NJdGE2RWpKTWNpS1pDSWlBQ0lpQUNJaEE2Z2hJc0thT3RVb1NBUkVRQVJISUlBS3NQV1V0Sy91c3NuM04vZmZmNy9aRmxZbUFDSWlBQ0lpQUNLU09nQVJyNmxpckpCRVFBUkVRQVJFUUFSRVFBUkVRQVJFUWdSZ0lTTERHQUV1SGlvQUlpSUFJaUlBSWlJQUlpSUFJaUlBSXBJNkFCR3ZxV0tza0VSQUJFY2dJQW1QSHZSV3FaOS91WFRPaXpxcWtDSWhBOEFqb1hoSzhQbEdOUkNBVENRUktzRDcrd3RzaGhuMU82WktKUEZWbkVZaUtnQjdpVVdIU1FXa2ljUEJKQTBNbFR4by9NazIxU0V5eDdIOWFwa3daYTl1MmJXSXVxS3VrbkVDdXZCczg5TkIvYU04OU4rV1lrMUpnTnQxTGtnSklGeFdCQkJESWhYZktRQWxXM2RnU01HcDFpWXdnb0xHZUVkMlVzNVhNcHZISm5xYnQyN2Uzczg4K08yZjdNOU1ibmszanNiQythTmZ1djArLytpclRleTJ2L3JuU2Q5blJXMnBGcGhMSWhlK1pCR3Vtams3Vk82TUo1TUxOSmFNN0tNY3JuMm5qRXkvcUpaZGNZci85OXB2cnVWdHV1Y1ZPUHZsa3UrT09PK3lHRzI2d3FsV3JXbzhlUGV5dXUrNnl1KysrMjBhT0hHbWJOMisyZmZiWnh4NSsrR0dyVWFOR2p2ZDRzSnVmYWVNeFhwb1NyUEdTMDNraWtOc0VjdUVlS2NHYTIyTmNyVThUZ1Z5NHVhUUpyWXBOQUlGVWo4OVhYbm5GaGc0ZGFxdFhyM1ppOHZqamo0KzZGYXRXcmJLbVRadmFmZmZkNTBUcS9QbnpiYSs5OXJLUFAvN1lXclJvWVFjY2NJRDE2ZFBIZVZqZmVlY2Q2OXUzcnlGd2E5V3FaZjM2OWJNLy92akRYbmpoaGFqTDA0R3BKNURxOFpqNkZ1YVZLTUdhTHZJcVZ3UXltMEF1M0NNbFdETjdqS3IyR1VvZ0YyNHVHZG8xcW5ZYXd2anExYXRuaXhZdGN1eGJ0MjV0VTZkT2pib2Zubjc2YVJzeVpJZ3RXTEFnZEU2dlhyMk1hN0tQcWwrd25udnV1VmE2ZEdrbmJyRU5Helk0VDJ1VktsV2lMazhIcHA1QXJ0d3ZKVmhUUDdaVW9naGtPb0cvL3Rwc2gvZTR3aldqVE9sUzl1N3p3ek85U1JIckw4R2FsZDJxUmdXZFFLNjhnQVc5SDFTL3lBUlNQVDc5Z3JWVnExWTJiZHEwcUx0bTFLaFJObWpRSU50NTU1MUQ1MnpjdU5GT1BQRkVKMHo5Z3BXL05Xdld6RzYrK2Vhb3I2OEQwMDhnMWVNeFhTMldZRTBYZVpVckFwbExZTzI2RFhaMDcydGNBeXB1Vjk0bVBIbHI1amFta0pwTHNHWmx0NnBSUVNlUUt5OWdRZThIMVM4WWdwV1FZTmFhRWhMTUd0TllRb0pmZnZsbHUvNzY2MjM2OU9rUkcrTVhyQmRjY0lIOS9mZmZidDBxdG5idFdsdTJiSmsxYnR4WVF5SEFCSExsZmluQkd1QkJxS3FKUUVBSlNMQ21vV055NWFHVUJyUXFNbUFFTk5ZRDFpR3FUajRDbVRRKzE2eFpZdzBiTmpSQ2c3dDI3V3JyMXExekNaak9QLzk4dDVWTnAwNmQ3SWdqam5CZTJJa1RKOXFwcDU1cW4zLyt1ZFd2WDk4R0RCaGd5NWN2dC9Iangyc0VCSmhBSm8zSDRtQ1VZQzBPUFowckFybEpRSUkxRGYyZUt3K2xOS0JWa1FFamtBdGpIUUZ4eGhsbk9QSnZ2ZldXZGVsUzhON0tDSXg3N3JuSEhjdWFRdFlaeXRKSElOUEdKd0owNE1DQnRuTGxTaXRSb29TZGROSkpMbE53eVpJbDdZRUhIckRMTHJ2TWpqcnFLSHZ4eFJkZG1QQ3dZY05zeTVZdExqblRtREZqYkpkZGRra2ZiSlZjSklGTUc0OUZOcWlBQXlSWTR5V244MFFnZHdsSXNLYWg3M1Bsb1pRR3RDb3lZQVJ5WWF4N2dyVlVxVkl1ZSt0enp6MFhzUmNJMGF4ZHU3YmJrZ1FSSWNHYS9zR2FDK016L1pSVmcyZ0o1TXA0bEdDTmRrVG9PQkVRQVkrQUJHc2F4a0t1UEpUU2dGWkZCb3hBTG94MVQ3RHV0OTkrTHVzcm9aZlZxbFhicGlkZWYvMTFPK2FZWTZ4Tm16YnVPQW5XOUEvV1hCaWY2YWVzR2tSTElGZkdvd1JydENOQ3g0bUFDRWl3cG5FTTVNcERLWTJJVlhSQUNPVENXUGNFSy90cmtoVG53UWNmTkxZVkNUZThyMU9tVExIOTk5L2Zubi8rK1cwRTZ6ZmZmT095dW43NDRZZHV6MHl5d1I1NTVKRjIzWFhYdWIwMFBlUHZ1KysrdTl2SGszMDM1ODZkNnhMcTdMREREc1k2eDZ1dXVzcEkwTU0xeUVSTHlDaGJvYkEvNTZ1dnZtckhIbnRzNkZxc2FTUkVtV3kxZUlBYk5HaGdQWHIwc01zdnY5ektsU3NYa0ZHVXZHcmt3dmhNSGoxZE9kRUVjbVU4U3JBbWV1VG9laUtRL1FUa1lVMURIK2ZLUXlrTmFGVmt3QWprd2xqM0JPdHJyNzFtRjE5OHNkV3NXZE0rKyt5emZEMUJWbGlFSnA4dlhyell4bzBibDArd2Z2VFJSOWE1YzJlclc3ZXU5ZXZYejEzajIyKy9kZUozeHgxM3RLKy8vdHAyMm1rbmQ4MWRkOTNWcWxldmJuLzk5WmQxN05qUjZ0U3A0NUx2Vkt4WTBWM2p2ZmZlc3hOT09NSDl6SjZmRHozMGtFdlNRNmp5bTIrKzZYN0c3cnp6VHJ2aWlpdnNvSU1Pc3ROT084MnRwK1ZjNnNZNjNEZmVlTU90azh4bXk0WHhtYzM5bDIxdHk1WHhLTUdhYlNOWDdSR0I1Qk9RWUUwKzQyMUt5SldIVWhyUXFzaUFFY2lGc2U0WHJBaEx0aTJaTTJlT05XblNKTlFiaU1ienpqdlBac3lZNGJ5b2ZzRzZkZXRXMjJPUFBXekRoZzMyMVZkZk9VK3BaMnlEMHExYk4rZnhSR0JpWklwZHNtU0pYWDMxMVlaWDE3TlBQLzNVT25UbzRKTHVFSDdzMmZ2dnYyK0hIbnFvKzlVVHJELzk5SlB6cG5Mc1N5KzlsRStZZW9taHVBYWZaN1Bsd3ZqTTV2N0x0cmJseW5pVVlNMjJrYXYyaUVEeUNheGEvWWVkY1BiMXJxRHRxMWF5bHgrOUtmbUZwcUVFN2NPYUJ1Z3FVZ1J5NFFYTUwxZ1JuZ2pCSzYrODBtNjk5YjlOclFrRHhpT0tJR1c3RWI5Z1JjVHV1ZWVlMXI5L2Z4czhlSEMrUVlPWWJkcTBxUXNCNWx5c1VhTkdObS9lUEZ1NmRHbStVT0hiYnJ2TmlWakNqYnQzNzU3dk9xeXZKY09zSjFoSGpScmx2TDNQUHZ1c0hYTElJZm1PL2U2Nzc1eDNsb3l6dzRjUHorcEJuQXZqTTZzN01Nc2FseXZqVVlJMXl3YXVtaU1DS1NEdzg0cFZkdW9GZVNLMVp2WHRiZHlEMTZXZzFOUVhJY0dhZXVZcVVRUXNGMTdBL0lMMTZLT1BkZ0x3eHg5L2RLRy9iRGZDR2xNRTU3MzMzbXNYWFhUUk5vSVY4WXFJTGN3SUIxNnhZa1ZJc1A3eXl5LzI1NTkvNWp2Rjg0d2liTm5HeEcrSXp4RWpSb1FFSzN0M0VtNWNtTEhtOW9VWFhzanFVWndMNHpPck96RExHcGNyNDFHQ05jc0dycG9qQWlrZ0lNR2FBc2poUmVUS1F5a05hRlZrd0Fqa3dsZ1BGNnhQUHZtazllN2RPN1FuSzBtVDhINlNHSW0xcCtFZVZ2YkhQT2VjYzZ4WHIxNXVMV2trUS9nZWZ2amhJY0c2Y2VOR0k2elhiK3dGUzExbXpacGx6Wm8xeS9jWlljaERoZ3dKQ2RhZVBYdmFNODg4NHp5b0xWcTBpRmdtZFczbmY3TU0yTmhLUkhWeVlYd21ncE91a1JvQ3VUSWVKVmhUTTU1VWlnaGtFd0VKMWpUMFpxNDhsTktBVmtVR2pFQXVqUFZ3d2JwKy9YcVhZSW4xbjRUY0VpTGN1blZybDdrWEN4ZXNub2NWRHltWmY0c3lRb0lqQ2RZenp6elR4bzRkYTJRYlp1c2N2NUZjaVRXd1hraXc1MkZsamV4eHh4MVhWSkZaKzNtMmprOXZUTkp4YjczMWxrdWlWWkI1bm5rKzExWkw2UjNxMlRvZXc2bEtzS1ozbktsMEVjaEVBaEtzYWVpMVhIa29wUUd0aWd3WWdjNm5YbTZiLzk3aWF2WE9zM2RZMmJKbEFsYkQ0bGNuWExCeVJjUWo0YlFJeEFNUFBOQ0oxZU9QUHo2aVlHWE5hTXVXTGExOSsvWnVuV200clZ5NU1wUWhtTThLRXF4NFVQR2src3Z5cmtVbVlMYkw4UVRyNk5HalhYZ3lhMjN4L3ZwdDA2Wk5icjF0NWNxVml3OG40RmZJMW51eE55WkxsU3BsaEhhVElUcVNzWlZSN2RxMTdiZmZmck10VzdaSXNLWjV2R2JyZUpSZ1RmUEFVdkVpa0FVRUpGalQwSW01OGxCS0Exb1ZHVEFDUi9XNjJ0YXQzK2hxOWZvVHc2eFN4UW9CcTJIeHF4TkpzTEpORFVLVi93alJKUnk0VEprOHNSN3VZZVZ2elpzM3Q5bXpaOXM3Nzd6akVoNTVoc2hrVGV6dHQ5L3VNZ1VYSmxnUm8remJTbGd4bmwzUHFNdkJCeDlzLy96elQwaXdrckNwWHIxNkxpTXhIbGxFaTJjMzNYU1REUnMyekcxeFE5YmhiTFpzdlJkN1k1SmtXMU9uVHJYbHk1ZGJ0V3JWdHVsS01rRWZjOHd4emlQUGNmS3dwbmUwWit0NGxHQk43N2hTNlNLUURRUWtXTlBRaTdueVVFb0RXaFVaTUFLNUtsZzlZVWsyWHp5WkpGenlMSkpnblR4NXNndmJ4Q09HTUsxZnY3N2hlU1V4RWtMaml5KytDSW5LZ2p5c2VNamF0bTFyMDZkUHQ3NTkrN285V2luZjI0Y1ZFZVBmaHhVUmZOVlZWN215eUJoY3FWSWwrK0NERDV3M3JsT25UdmIyMjIrNyttU3paZXU5MkJPc2JIdDAvZlhYdTNGMDdybm5idE9WZUYrblRKbGlaTEVtdTNTNFlHVXlBNjg5RXlkLy9QR0hDM1ZuVW9SMTJiVnExUXBkajcrVFdJeVE5ajU5K3JoRVkwelNNQ0d5WnMwYU44N3cvSE9OVnExYTJTMjMzR0lMRml5d3M4OCsyMTU5OVZVNzl0aGpROWNhUDM2ODNYUFBQVFp0MmpUREEweElmWThlUGR6M29seTVjdGs4SEhNaVNSMGRxSkRnckI3R2Fwd0lKSVdBQkd0U3NCWiswV3g5U1VvRFNoVVpjQUs1TEZpOVJFZmhXWHNqQ1ZhNkVYR0FkeE9QS0MvNU5XclVjQy95YkhWVHAwNmRVRThYSkZnNUFNL3B3SUVEbmFjV2orcmVlKy90dHRlWk9IR2lYWFBOTmR0NGNGOTg4VVVuRHI3OTlsc1hCb3pYRmNFeFlNQUEyMjY3N1FJK3VvcGZ2V3k5Ri91OS9reEcxS3haMHo3NzdMTjh3RmF2WHUwRUtKK1QwZHEvMVJJSE1nN3g5dGV0VzlmNjlldm5yc0U0UWZ6dXVPT094cDdEWksvR2R0MTFWNWRRakRIRVJBbmpsYld4RlN0V2ROZkFXMy9DQ1NlNG54Y3RXaFNhUkdGeXhEK0p3anByMWxzVHdrNmtRT25TcGQyNTFJMEpuVGZlZUNQZm5zSEZId0hCdWtLMmpzZHd5aEtzd1JwM3FvMElaQUlCdjJDdFcyc25lK3JlYXpLaDJqSFhVZHZheEl4TUo0aEE4UW5rZ21BdFBxWGtYK0hTU3k5MTNxOUlDWm1TWDNwd1M4aFdnZUFYckFqTEcyNjR3ZWJNbVdOTm1qUUpkUWFlOS9QT084L1lCNWpKRmI5Z1pmOWY5aFRlc0dHRDIvOFhUNmxuSk9ycTFxMmI4M2dpTUxHR0RSdmFraVZMM0Q3QWVIVTkrL1RUVDExWU9RbklDRC8yN1AzMzM3ZEREejNVL2VvSlZySmU0MDNsMkpkZWVpbWZNUFVTUTNFTlBzOVd5OWJ4S01HYXJTTlc3UktCMUJGWXZQUVg2elVnTCtkR3c5MXEyYU4zRFVwZDRTa3NTWUkxaGJCVmxBaDRCQ1JZVXpjVzhNcVM3QW12bDMrUFZiSVdJMVRXcmwxcjdOOWF0bXpaMUZVcTRDVmxxMER3QzFhRUowS1FCRnQ0MnowakRCaVBLSUkwM091UGlOMXp6ejJ0Zi8vK3pzUHZOOFJzMDZaTlhRZ3c1Mko0L1FrL3g4UHZEeFVtb1JjaWxuRGo3dDI3NTdzTzYydEpNdVlKMWxHalJqbHZMK3V2V2JmdE44TGo4YzZ5bnpCYk1XV3JaZXQ0bEdETjFoR3Jkb2xBNmdqTVhiRFV6aDZVZC8rWFlFMFI5MWdlU3BNbVRUTCtTN1l4QXkvTERnSkJHak1TcktrZFUzaSs4SUNSa2JocjE2NkdXR1dyR3dUSWlCRWpYTGl3N0Q4Q3NkeUxNNGxiZUNJd0JPQ1BQLzdvUW4vWjA1YzFwZ2hPMWxhenhycWdyWllLYXpNVEl5dFdyQWdKVmlaRC92enp6M3luZUo3UjhMQjREa0o4TWliRHQxb3FyRXpXM0pKOU8xc3RXOGVqQkd1MmpsaTFTd1JTUjBDQ05YV3NReVhGOGxCQ1NQcERySkpWWFdiTlpkbEJJRWhqUm9JMXRXT0svVm54b2hIZVNZaG1pUklsckVXTEZrNlU5T3paTTdXVnlZRFNZcmtYWjBCelFsVU1GNnhQUHZtazllN2RPN1FuSzBtVDhINlNHSW0xcCtHQ2RjeVlNWGJPT2VkWXIxNjkzRnJTU0lid1Bmend3ME9DTmRMZXdHZWNjWVpSRnpKbE4ydldMTjlsdkRYZW5tQmxmRDd6ekRQT2c4cVlqV1RVdFoxL0FXUW1kVW9VZGMzVzhTakJHa1huNnhBUkVJRkNDVWl3cG1HQXhQSlFTcmEzekJQREVxeHBHQWhKS3RJVHJDUXVZVHVUWkZrMFhua0oxbVRSMTNVVFFTQ1dlM0VpeWt2Vk5jSUZLNTUyRWl5eC9wT1FXMEtFVzdkdTdUTDNZZ1Y1V1BHUXN2YTVLQ3NvRVJnaDZuajRJNjJkSnJrU2EyRERQYXhFQ0J4MzNIRkZGWm1WbjJmcmVKUmd6Y3JocWthSlFFb0pTTENtRkhkZVlVRjZLT0dCd1NSWTB6QVFrbFNrSjFqWnppSWFVWm1rYXJqTFNyQW1rNjZ1WFZ3Q1Fib1hGN2N0L3ZNajdRMk1lQ1NjRm9ISS9zQ0lWVUxISXdsVzFveTJiTm5TMnJkdjc5YVpodHZLbFN0REdZTDVyQ0RCT21USUVKZlF5VitXZHkwbTFOZ3V4eE9zbzBlUGRwRUFyTFhGKyt1M1RaczJ1ZlcybFN0WFRpU213RjByVzhlakJHdmdocG9xSkFJWlIwQ0NOUTFkRnFTSGtnUnJHZ1pBa291VVlFMHlZRjArYXdnRTZWNmNTS2lSQkN2YjFDQlUrWThRWGNLQnk1UXBFMUd3OHNmbXpadmI3Tm16dDlrS0NaSEptbGoyOFNWVGNHR0NGVEhLdnEyRUZlUFo5WXk2RVAzQjFrdWVZQ1ZoRTlzcWtaRVlqMnp0MnJWRHg3UGQwN0Jodzl3V04yUWR6bGJMMXZFb3dacXRJMWJ0RW9IVUVaQmdUUjNyVUVsQmVpaEpzS1poQUNTNVNBbldKQVBXNVRPQ2dIZHZTMlJsTXlVU0paSmc5WVFsMlh6eFpKSnd5Yk5JZXdOUG5qelo3WDFhcWxRcEowenIxNjl2ZUY3SlFGMnRXalg3NG9zdlFxS3lJQS9ybGkxYnJHM2J0alo5K25UcjI3ZXYyNk9WOHRsU2g2UmcxTk8vRHlzaStLcXJybkpsa1RHNFVxVks5c0VISHhqN3RYYnExTW5lZnZ0dFY1OXN0U0M5R3lTVHNmWmhUU1pkWFZzRXNwT0FCR3VDK3pYVFhwSWtXQk04QUFKd3VWUUoyd3VEVndBQUlBQkpSRUZVMW1Ra2R3cENHSE1BdWxCVlNBQ0JUTHNYSjZESm9Vc1VKRmk5UkVmaFdYc2pDVll1aHFjVDd5WWVVYlpOcWxHamhoMTc3TEZ1cTVzNmRlcUV5aXRJc0hJQW5sT3lVNy96emp2T283cjMzbnU3eEdBVEowNjBhNjY1WmhzUDdvc3Z2bWozM0hPUGZmdnR0eTRNR0s5cm56NTliTUNBQWJiZGR0c2xFbE5LcjVYTDR6RWN0QVJyU29lZUNoT0JyQ0RnRjZ6TmR0L1ZIcmcxTzNjOVNOaytySm4yVUpKZ3pZcnZjYjVHU0xCbVg1K3FSYkVUeUtSNzhkcDFHMXdESzFXc0VIdERNL1NNU3krOTFDVjBpcFNRS1VPYlZHaTFNMms4SnB1L0JHdXlDZXY2SXBCOUJHYjlzTkF1dU9ZZTE3Qld6UnZhUFRmMno3NUdtcGtFYXdIZEtzR2FmZU5kZ2pYNytqVGJXOFJhU2J4MkgzLzhzWkhRaC9XVEJ4eHdnQXNkOVJzZU56TExzdjBKNnpBTHMwd1FDQWpWOFJNK3RQR3ZUN2Ficmp6VDJyUm9sRlZkalZlV1pFL3MyVW9vc1dka0xXN1NwSW10WGJ2VzJMKzFiTm15V2RYdVNJM0poUEhvcjNjeUoxRWtXTE4rdUt1QklwQndBbE5uenJXQjE5K1hPNEkxR1M5Ry9sN0p0SWVTQkd2Q3YxTnB2MkJCZ2pYUll6OVRRNEtUK1NLVzlzN1A4QXFjZDk1NVRxVDYxelY2VFdMOUl0dXNzQWF5VnExYXRuRGh3b3dWckg2aHVuWjlubmQxNU5BTHMwNncwcTV1M2JvWlc5V1FrWmgxcTRoVnRycVpNV09HalJneHdvVUw1NEpseXJ0QktpWlJKRmh6WWNTcmpTS1FXQUk1SjFnOWZJbDhNWkpnVGV5ZzFOV0tSNkFvRDJ1aXhuNm1DZFpVdklnVnIrZDBka0ZqODkxMzMzVkpmbnIzN20zSEhIT01yVjY5T2lNRmF5U2g2dlY2dGdyV2pSczN1aldyNDhhTnN5VkxsaGpDclVXTEZpN3hVOCtlUFhObTBBZGRzS1p5RWtXQ05XZUd2Um9xQWdramtBekIrdnp6ejd0SmNodzZ2LzMybTFXcFVzVWxDbVJMTmpMcUYyWGthT0M5aEp3TVZhdFdkZThteGJWdFFvSVQrV0lrd1ZyYzd0SDVpU1FRcjJDTlZSUmtpbUJONVl0WUl2c3hGNjlWMkdTS3g2TjE2OVlaSjFnTEU2clpMbGh6Y1J4SGFuTlFCV3M2SmxFa1dQV3RFQUVSaUpWQW9nWHJxRkdqWERaNnJFMmJObTVMTlpMOS9mcnJyMWFoUWdYNzlOTlBqZmNON0ttbm5ySmV2WHJaMUtsVFEzOTc2YVdYN0p4enpyRlZxMWE1WTFJdVdQMEFvMzB4a21DTmRkanArR1FTaUZld3hqcjJneTVZMC9FaWxzeCt6WVZyWjV0Z0xXd01idDJhMTZNbFN1VDltNjBlMWx3WXQ5RzBNV2lDTloyVEtCS3MwWXdZSFNNQ0l1QVJtRFp0bWwwLzlDWjcvNE9QYk8yYWxiWlR6VHAyMUJHSHVlenhucWlNbFZiTm1qVnR4WW9WYm9zM0luNHdscXl3MXpmbG5YLysrWGIvL2ZlN3Z4OTk5TkUyWWNLRWZJSjE1NTEzZGg1WmhDd2VXUWxXTTB2bTNuOWF3eHJyRUEvKzhia3VXTlA1SWhiODBSSHNHbWFMWUkxV3FDSmFQY0dLZnYxWHV3YTdrMVM3YlFqMFBybUw5ZTNldFZBeVFSR3MwWTdOWkU2aVNMRHFTeVFDSWhBdGdhS2NJM3pPbG9peEdzbitObS9lYklRRmQrL2VQWFQ2c21YTHJHVEprb1lnSlRGZzVjcVY4MTE2cjczMk1yYUdHenAwcUEwYU5NaDVZanQzN2l6QkNpVUoxbGlIWVc0Zm42dUNOUWd2WXJrOThvcmYrbXdRckQrdldHVURyaHR0di96Nit6WkF3a1dwQkd2eHgwd1FycEFKZ2pYYSsyTXF4dVRhaFNORDNWYXBYbTRrM1FyQ09GVWRSQ0JJQktLNWJ4WWxWcjMySUZnNU5oWnIzNzY5VFpreXhRbk4vdjM3VzVjdVhkdys0ZVhMbHc5ZGhwMEpycmppQ3VlRlJZdjE2TkhERUt4c3krYlplKys5SjhIcXdaQmdqV1VJNnRoY0U2eEJlaEhUNkl1T1FFRVBxbXdRckJCZ1RMNzQrbVFiUDJHeXJWdS9NVCtVcldaYlMrUjVVMU1oRHFMckVSMVZIQUxSdkhpbDA4TWF0RWtVQ2RiaWpEYWRLd0xaUWFDbyt5Wmh1YXd0eFJDVjdCSkF0bmxDZ1BtTTdQTjRPVDN6cnkrTmh0RFhYMzl0Ung1NXBBc0w5cXhjdVhKMnlDR0hPRUdLMTlTejBxVkwyNVl0Vy9LRkJFdXdScUFzd1JyTjBOTXhIb0ZjRXF4QmV4SFRLSXlPUUxZTFZvOUNVY0xWSGFjMXJORU5tZ3cvS3AyQ05XaVRLQktzR1Q2WVZYMFJTQUNCb2dScm56NTk3SWtubm5BbEZlUkI5WHRneWRiNytPT1B4MVF6UW40SkNYN3JyYmZzbzQ4K3lpZGVIMzc0WVpkVUNaTmdqUktyQkd1VW9IU1lJNUJMZ2pWb0wySWFndEVSeUJYQkdwVncvZmNnSlYyS2J1eGs2bEhwRnF4UmpjVi9FNEVsZXhKRmExZ3pkUlNyM2lLUU9nSjRVc25haXkxWXNNRHExYXUzVGVGK0x5ekg0MlV0am4zKytlY3VQQmp2YTUwNmRkeFdiQktzTVJDVllJMEJsZzdOT2NFYXBCY3hEYi9pRWNpV2tPQ0NLQlRtY1pWZ0xkN1lDZnJaUVJHc1VkMHZrenlKSXNFYTlOR3Erb2xBK2duNDc1bUY2YUJvai9PM0NDRTZlZkprVzdkdW5aMTc3cm41R3V1dFNlV1BKR1hDdXlvUGE1VGpRWUkxU2xBNnpCSElOUTlyZUxjWEdvYVo1QmN4RGNIaUVjaDJ3VnFZV0pCZ0xkN1lDZnJaUVJPczBRalhaSTFKQ2RhZ2oxYlZUd1RTVDhEdllTMW9mYXJmdzlxcVZTdTN0alVhODBRcDJZREhqUnRuSjUxMGtqdU5kYW9rV1JveFlrUStEMnVaTW1Yczc3Ly9kbUhEQnh4d1FFU0JxMjF0bENVNG1yR25ZM3dFY2wyd3B2TkZUQU94ZUFSeVJiQkdHcU0zWDNtV3RXblJxSGdBZFhaZ0NRUlZzS1pqRWtXQ05iRERWQlVUZ2NBUThLOWhKZG5TeXkrL3ZFM2Q0bDNEaWlQd3hCTlBERjF6bDExMnNlclZxOXZTcFV0dDFhcFZycHd4WThiWVdXZWQ1WDRtSEhuUm9rWFdzbVZMTy96d3cyMzQ4T0YyM0hISE9ZSDc2NisvMmhkZmZPRzhzR1FheGppdlc3ZHVjYkVzc1RYTVRabklGeU4vallMK1VBcW5wMzFZNHhwUGdUNUpnalYvOTBUeXVDYkxjeERvZ1JIZ3lzMlpNOGV1dmZaYSsvREREMjNseXBYV3ZIbHo2OWl4b3ozNDRJT3UxdSs4ODQ1THBzRCthRHdZZUVqc3UrKytWcnQyYmJkL0dnK3pndTV0aVd4MnNxSmRHS05ZcFlvVkVsbGRYU3RBQkRMbDNjQi92MHpXSklvRWE0QUdwcW9pQWdFbDRQZWVVa1dlOHlSZnd2TzZjT0ZDbDVESnY1Vk5yRm1DQ2ZjbHNkSlRUejFsOCtmUHQ5OS8vOTJxVmF0bTdkcTFzNHN1dXNobEVQWU1MK3lBQVFOczllclYxcUZEQjVzNGNXSW9URGdTdmp2dnZOTXV2L3p5dU1pR0JHc3lYb3drV09QcUU1MlVKQUlGQ2RaRWovMW85OGVLcFpueDdLVVY3ZlZUOFNJV2JWMTBYUElKWklwQVNENEpsUkFFQXBrMkhwTTVpU0xCR29RUnFUcUlRUEFKUlB1ZW1jeDN4MVJUMnNiRG1xd0taTnBEU1I3V1pJMkU5RjIzS0E5cm9tb1c3WTBrbHZKU2NkTko1b3RZTEczVnNja2xrR24zNHVUUzBOWFRUVURqOGI4ZWtHQk45MmpNemZMWkJtL2FySGsyN2J1NU5tM21YRHZ4cUFQdDVLTVB5azBZR2RUcW90NDFVL0hlbUVwY0Vxd0YwSlpnVGVVd1RFMVpFcXlwNGF4U2drMUFBaUhZL1pOcnRkTjRsR0ROdFRHZjd2Yk9YYkEwVDZET25HdjgvUFBLdkxXSm5vMjU4M0pyVkw5MnVxdXA4cU1nUUhqd2xkY01zVTgrL2NMV3JWbHBPOWZhMWJwMFBzUXV1ZVFTRnlLY1RTYkJLc0dhVGVPNTBMWklzT1pNVjZ1aGhSQ1FRTkR3Q0JJQmpVY0oxaUNOeDJ5c3k5U1pjMjNld21WT29PSkZYYnMrTHpkQUpLdTRYWG1iOE9TdDJZZ2hhOXYwNWdkVDdQYjdublB0NjNMdzNuWjEveDVaMmRaQUNkYmRtdTBiZ3J4bzl1ZEZBazlXb2c4S2xvZTFTUHdaZDRBRWE4WjFtU3FjSmdJSG56UXdWUEtrOFNQVFZBc1Ztd3NFb2hHc1FYbzNTR2FmS0NRNG1YUno2OW9zOFJsOCs2UDI3YXg1TVRXOFZmT0dkcytOL1dNNlJ3ZW5sNEFFYXhyNEIra2xTWUkxRFFNZ3lVV21TckJHMDR5amVsMXQ2OVp2ZEllKy9zUXdaVUdOQnBxT1NSbUJJTjJMVTlab0ZSUllBcmt5SGlWWUF6c0VNN0ppQ0puUlkxOE92V3Q0amRqS0QrNy96RXJ3WTRtOGY3SGVKM2V4dnQyN1ptUjdjN1hTRXF4cDZQa2dQWlFrV05Nd0FKSmNwQVJya2dIcjhsbERJRWozNHF5QnFvYkVUU0JYeHFNRWE5eERSQ2NXUUlBMXFnT3VINTFQdEc3ZFNoVGhmeWY0ZjkraFdoVnIxNnF4N2Rtc29lM1pyTDd0V3J1bTJBYWNnQVJyR2pvb1NBOGxDZFkwRElBa0Z4a2t3ZHJ0ckNIMis1cTFyc1V2alJscVBDUmtJaEFVQWtHNkZ3ZUZpZXFSUGdLNU1oNGxXTk0zeHJLNVpNS0RCMXczMnVZdFdoWnFKZzdXRXY5NldVUHUxUWdRcWxhdWFIczByVzk3Tm10Z0xaczFzQ1lONmxxcFVpV3pHVmZHdFUyQ05RMWRGcVNIa2dSckdnWkFrb3NNa21EdGZ0Nk45c3V2djdzV1AzLy9FTnU1eGc1SmJyMHVMd0xSRXdqU3ZUajZXdXZJYkNXUUsrTlJnalZiUjNENjI0Vm9IVFgyWlh0NzBwZi9WV1pyWG1TdzUyME45N3dXVk9zMkxScmxpZGptRFcyUEp2V3NRdmx5Nlc5Z0R0ZEFnalVOblIra2g1SUVheG9HUUpLTGxHQk5NbUJkUG1zSUJPbGVuRFZRMVpDNENlVEtlSlJnalh1STZNUW9DWXdkOTVZOThlTGJFWTgrdGtzSDI2OXRjNXN4Wjc1Tm56WGZ2cCszMkRiL3ZhWFFLNWNzV2NJYTdsYmJXamFyYjNzMmJXQ3RXalN5N2F0V2lySTJPaXdSQkNSWUUwRXh4bXNFNmFFa3dScGo1MlhBNFJLc0dkQkpxbUlnQ0FUcFhod0lJS3BFV2dua3luaVVZRTNyTU11WndqK2FNc051Ry8zc05zbVlicnJpVE91NFQ4c1FoNzgyLzIzZnoxMXMweEd3cytmYnpEa0xDOTBTeHp1eFZzMGRYZmh3eTZZTlhDanhyclZyNUF6YmREVFVMMWlQNmJ5ZlhYYnVLZW1vUnRMTFRObTJOdEcwSkVnUEpRbldhSG9zczQ2UllNMnMvZ3BhYlI5ODhFRTcvL3p6N2Jubm5yTlRUejAxYU5WTGFIMkNkQzlPYU1OMHNZd2trQ3ZqVVlJMUk0ZG5SbGFhWkV4c2UrTXRUYUlSUmUxWXdGYVNDeGIvYk5Obno3TVpjeFk0RWJ2eXQ5VkZ0cjlxbFlvaDhZcUliZHl3anBVcXFYV3dSWUtMNG9CcDA2YlpaVmNPdGlsZmZHbHIxNnkwMnJ2V3Q4NmREcklCQXdaWTY5YXRvN2hDNUVPZWYvNTVlK2loaDJ6MjdObjIyMisvV1pVcVZheHQyN1kyWk1nUU8vREFBd3U5N3JwMTY0ejM3YWVmZnRwV3IxNXR1KzIybS9YczJkTUdEUnBrNWNyRkh6NHV3Vm9BZGduV3VNZDVZRStVWUMyOGErYk1tV1BObWpXekxsMjYyRnR2dlJWWFAvNzg4OCtHc0x2MjJtdXRkT25TY1YwanFDZTk4Y1liZHUrOTk5clZWMTl0QngxMFVGQ3JtWkI2NVlwQVNBZ3NYU1RwQkhKbFBFcXdKbjBvcVFBZkFYOHlwcHJWdDdkeEQxNFhNeDhFTCtIRGhCSFBtRDNmRml6NXVjaHJsQ3RieHBvM3JoY0tJMlk5YlBseVpZczhUd2ZrSitDOTB4YkVoYyt2di83Nm1MR05HalhLTHI3NFluZGVtelp0YkljZGRyQnZ2LzNXZnYzMVY2dFFvWUo5K3VtbklUSDgxRk5QV2E5ZXZXenExS21odjUxODhzazJmdng0SzFPbWpOV3BVOGNXTGx4b1RIWU1IRGpRUm93WUVYTjl2Qk1rV0NWWTR4NDhtWGFpQkd2eUJTdmV4eDQ5ZXRpR0RSdXNmUG55bVRaRWNxSyszbVJjSWh2THcwZ21Bc2tpa09tQzlZY2ZmckJKa3lZVmllZVdXLzQ3WlBEZ3dnOC8rT0NEclhIanhrVmVNOTBIWkhyZnBadGZLc3EvZGZTenJwaXIrL2NvZG5GcjEyKzA2YlB3d0NKZ0Y5aWNlWXZ0N3lqV3dUYXF4enJZdkREaTFpMGFXclVxV2dkYldHY1VKVmE5Y3hHc0hCdUwxYXhaMDFhc1dPRW02Qys2NkNKMzZ2cjE2NjFEaHc2R1I1ZElzL3Z2djkvOS9laWpqN1lKRXlhRUJPdUNCUXVzUVlNRzdyTXBVNmJZM252dmJXUEdqTEZ6empuSHFsYXQ2anl1OFZyS0JHdW12U1RKd3hydmtBcnVlYWtTck5IZVNHSWhGYzlOSjVicmMyd2lQS3lYWG5xcGpSdzVVb0kxVnZncFBEN1Q3c1VwUktPaUFrb2cwMFVQZ3ZXRER6NncyclZyRjBwNDRNRC9QaDQ1c3VCRGx5NWRhb2NjY29nRWEwREhheVpXNitjVnE1SzJXOEczQ05qWjgyM0c5d3VjTjNiRHhrMUZJcXBiYTZjOEwyelRCdGFrWVIzYnZYNmRJcy9KbFFNUWpYZytNVVRnSlpkY1lzY2ZmN3p6Y1BMWks2KzhZa09IRGczaDhIcy9vMkZVdG14WjI3eDVzeEVXM0wxNzk5QXB5NVl0czVJbFM5ck9PKzlzYTlldXRjcVZLK2U3M0Y1NzdXVXZ2ZlNTRVkyMjNYYmJPYzhyTm1QR0ROdHp6ejNkendoVzZoeVBTYkFXUUUyQ05aN2hGT3h6SkZnTDc1OUlncFVYclNaTm1yZ1EzOE1QUDl5dXUrNDYrK2FiYit6dnYvKzJqaDA3R3FFanUrKyt1N3R3cFVxVmpMVUxucFVxVmNvZGgzSHp1K3V1dTl5YWhybHo1N3AxREMxYnRyUUxMN3pRVGp2dHRId1ZveDZYWDM2NWZmVFJSKzd2blRwMWNpS1l0Uk9jdjJiTkdyZWV3cXN2ZFd2WXNLRmRjODAxdHNzdXU5alhYMy90enVPbGJ0aXdZZlovLy9kLzlzc3Z2N2l3RnNxa0RkVGRiMy85OVpmZGR0dHQ5dXl6ejlxaVJZdmNpK1dSUng3cFppWTVEeXRvRGV2SEgzL3N5dm44ODgvZFRaeWJlZGV1WGQyNXRXclZDaFhEejlRVEx6UnJPU1pPbk9qYUF0L2h3NGM3dnFrd0NkWlVVRllaaVNRZ3dacWZwZ1JySWtlWHJwVktBa1RqekYrODNLMS9kU0tXZGJDcjFoUlpoZEtsUzlsdXRXdGF3M3ExREc5c2c5MXFXZU1HZGF4S3BlMktQRGZiRHVqVHA0ODk4Y1FUcmxrRk9UUDhqcFBldlh2YjQ0OC9IaldHOXUzYk8rOG93ckovLy81dW1SaWVVbi9VSE85TVYxeHhoZlBDMHFkRTFpRlljVnFFRzh1b2VMK3FXN2V1TFY2OE9PcDZoQjhvd1ZvQU9nbld1TWRVWUUrVVlDMjhheUlKVnRZZTFLOWYzd2cvKyttbm4rem1tMjkyNjF5NW1SRXFna0JFZ0RMcjl2cnJyenN4eUd6ZUN5Kzg0RVRwc2NjZTYyNW0vTXVzMnhsbm5PRThBMy8rK2FjVG4xOTg4WVhkZXV1dGR0VlZWN25Lc2JpL1JZc1c5dnZ2djl1NTU1NXJlK3l4aDMzMjJXZjIvdnZ2TzdHSGw4SUxONTQvZjc3N0crc2xFTGRubm5tbVd5OUJ1QXJYWjdhUk9pT0ttelp0NnE3NThNTVB1L1VVaUVYYWhGRy9JNDQ0d3Q1OTkxMDNtMGhpQWRyMDJHT1BXZlBtemUyVFR6NnhpaFVyUmhTc2hNSXdzOG1ObUpBWFJDbXppZmZkZDUvVnFGSERzZkFFYjcxNjlZeVpTOVoxbkhYV1dZNERNNVp3WExKa2ljMmFOU3NrL3IyZUl1SEI0TUdERFZHOGN1VktWNThERGpqQUpVT0laS3c5cGkyRTlQQlN5NlRCTmpkOWI5TzlCSDVURlJLY1FKaTYxRFlFVWlsWWsvR2RrNGMxcjBzbmpTL0ViYXh4bjdNRThPNjZMTVEvTExScE0rZmFvcDkraVpvRlcrZzByRmZiR3RXclpWVXJWN0x0S3BTekNoWEsyWGJseTd1ZnZmOHFWQ2h2RlN2ay9TM1RqWGNiMXBSaWhPRHliaEZ1Zmk4c3gvTXVFcTB4NmMrRVBXSEJudkUreHpzTGdyUno1ODZodjVPclpNdVdMZm5Xc1ByTGVmSEZGMTJTeW4vKytjZUpiTS9yR20xZC9NZUZCR3N5YnRMNUNzcXdseVFKMW5pR1U3RFBLVWl3Sm5yc1oxTklNSUlQTVlid1FZZ2hWajNqeHNPQys2Kysrc3JOckdGNEZ0OSsrKzE4SWNHSVY0UWdYbEpDVnp6RCs3cmZmdnZaOU9uVGJmbnk1VTdZNGFsRW9OMTU1NTNPeStvWnM0ZzMzbmlqKzlVVHJJaThYWGZkMVFsQXl1Um02aGxKQVM2NzdETHIxcTJibXdYMDdMdnZ2bk5lMWhOUFBORWxCY0M4K2pFTFNQbWVVUWZPSFQxNnRCTzk0UjVXUkJxQ21aczZZaCt4N05ramp6eGkvZnIxYzBJY1FZNDFhdFRJNXMyYjU4UW1uM21HTUViQTRtV2x6cEhzdlBQT2MrZTkrZWFiam5GQmhtaG5FZ0R4aTNobFpqVGM1R0VOOW4xS3RkdVdRQ29GcTFkNklyOXpFcXg1VkNWWTllMk9oc0NmYTlmL200VjRuczM4WVpITlhmQ1RiZGo0VnpTblp2d3h2VS91WW4yN0YveU1wNEgrWjNoaGs4WFJIaGNKR3RGaWhBVHpIb0ZEd0M5ZW1maG5naDRyVExDT0hUdldIWWVnOWE5N2piZVR0dkd3SnZJbTdhOVVwcjBrU2JER082U0NlMTVSSHRaRWpmMXNGS3o3N3J1djgzVDY3WTQ3N3JBcnI3elNyWmM0N3JqajNFZVJCQ3Zpa0hVTnpBU0dKMkxpeG9jWWZlMjExOXppZmU5OHNnM2pKZlRzanovK2NCN0xUWnMyaFFTcko2WUpTZWFGc0REamhrbFlNamQzd29sYnRXcmxoRFoyd2drbjJNc3Z2K3k4cWdoUXp3alh4WlBNMzBnaUVDNVltYkhFRzN2S0thZll1SEhqOGhXUHFDYWNobkJmaEQ2R1lNVXJUTmcwbWZZOG93eENjQkR6aVBwSUZzM1lKRVFIVHpJQ0dQSE9oSUlYTnBUSjkrTGczbEZVczFRUkNLcGdqZlk3SjhHYU4xSWtXRlAxamNtK2NsYjh1dHJtTDE1bTh4Y3RkeUhGL0x4NDZZb2lFenBsR29sb0JLdmZ3MXJRK2xTL2g1WDNIWDR2anJIa2lmQmd2SzlNenVNd3dBb1NyTHpiOGQ3Q094ZExvRzYvL2ZaOFFqdWV1c1FsV0tPOVNXZnlTNUlFYXp6REtkam5KRUt3UmpQMnMxR3dSaEpsZDk5OXQwdFRUc2pIU1NlZDVEby9rbURGSzRzSHNqQWpoUGFDQ3k1d1lieDRJUW5wRFRlOHVLeWY5VHlzbm1CRjZDSjR3NDB3Mm52dXVjYysvUEJERjA3cm40bjAzOERKdE1tNlZjUndZUll1V0wyTXlIaCtXVjhiYmdoVWJ1cmVkZm1kZHJHZTFtL2Vnd1V2THQ3Y1NCYU5ZQ1VrKzMvLys1OFRySVFJRVFKTldYNXh6TFV6YmZJdzJIY1YxUzRWQkdJVnJCOU5tV0VkOTJsWnJLb2w4anNud1pyWEZSS3N4UnFTT2prQ2dRVk92QzYzbjVhdnREL1hibkFKbmRadjJHanJOeks1dlNuMGI5N2ZOOW5HVGNIMjFFWWpXUDFyV0ZtU3hJUjd1TVc3aHBWM2xzbVRKN3VKZFpabCtlMjk5OTRMaFFQakFFQ3NSaEtzZUdWNUw4TlJFQjVaVjV4QkhKZGdqZmJGeUYreFRIdEprbUF0enJBSzVybUpFS3pSalAxc0ZLeW5uMzY2VzNQcXQyZ0ZLN054ZUV4aFY1QWhHdkZpRW43TXBFQzRxT084d3c0N3pLMDlEUmVza2VyR0RmT29vNDV5WGxwQ2k4bFFSMUlvakQxVUVkSGVqQ05sa3JrdWtrajIxemRjc0hxcDJra21GU25SQUtISGhDQjdOM1lFNjhhTkc5MjYybVFJVnRZSGs4Q0t0U2ZNYUJKaWpPZVh5WVpNdmhjSDgyNmlXcVdTUUt5Q2RjQjFvKzJYbGI5Ym4rNWRyZXZCZThkVjFXZ0VhN1RmT1FsV0NkYTRCcUZPRW9FSUJQemVVejVHdEJLcHhvUS9PVHFJclBKdlpSTkxsbUJQbEpLWGhQY0h6eG1CK0dTSkZQdW8rajJzTE1saWVSZGh3K1RYNFAyTTl6bmVjM2d2NHYwb1VSYVhZSTMySnAzSkwwa1NySWthWXNHNVRpSUVhelJqWDRJMS94cFd6OE1hVFRwelJDdUpsd2pIRGJkOTl0bkh2dnp5eTZnRUs1bUZTZERFalIxdnFtZmNUQkd1aUVsUHNKTDlqdkJnVDFnV05HTERCU3ZyT3hDSUJYbFlhUXRyY3lrVFM2Wmd4WXRMK1BHUFAvN28xdlRTSHRwRnNxdFhYMzFWZ2pVNHR5SFZKQTRDOFFoV3R0TEFkdDVwaDdpRWExR0NOWmJ2bkFTckJHc2N3ejZscDh4ZHNOVG1MbHBtMDc2YmE2MWFOTFFqRHRrbnBlV3JzTmdJUlB1ZUdldVdpRVNpc1l6TDg5cVNXTE42OWVvdWllT3FWYXRjSlptc0orOEdSalFYRVdxOFU3SFRBY3VTdlBXdExPUGlmY1J2dkRjaGJPT3htQVZyTERkcENkWjR1a1RuSkl0QWNRVnJ0R00vMmh0SkxPMk05YVlUeTdXOVl5TmxDZmJDYm92allXV0dqbERWU0FtRENGdGxMeS9DU2pDMm15R1VseHZqOXR0dkgyb0dtMVp6MDBUOFJlTmg1U2JLdWxmdkJ1dGQ2SjEzM25HSmlQd2h3WGdnQ1dzbTNOamIyNHpqU1RwQUtuaG1DN2tSaHd0V2trVnhIVExnRVI3c044SnBXTVBLVGR6THpwZE13Y282WW9RcFNRNDhZMjB2S2VUeGJ2dFpabHEwU3p4aldlZGtGNEhpQ0ZhUFJLekN0U2pCR3N0M1RvSTFyeGNVRWh5TTcrWGFkUnRzN3NKbExpTXYveUZXMTY3UG0xakZSZzY5ME5xMGFCU015cW9XQlJJbzZsMHozdmRHSnU5WmcwcFNUZkp1OEo1V3JWbzFhOWV1bmR2VmdDZ3V6L0RDRGhnd3dFV3BkZWpRd1k0NTVoaTNWS3dnWXpjR291WGlzWmdGYXl3M2FYK0ZNdTBsU1I3V2VJWlRzTThwcm1DTmR1d1hkUk9KaDFLOE41NVl5a3FFWUNVTWwrMXIvSUxUeThMTE5qSUlSbS9HalJBVHRtQWhiSllYT2p5ZkpIRWltVk40SmwyMjAvSFdpVVlqV0VsaWhKZngxMTkvRFlrMTZvUlluVGx6cHNzdTdLMnJmZWFaWjZ4bno1N3VQMjdRbmxFSFhscTlrTjlJV1lMeGFySTF6ZmZmZisvMmJ2V010Yk1rVWJycHBwdmNIclpZTWdVcm5sNjgvLzRIQ2VYZWNzc3Q3c0hqelhoU2oyVGZpeEVYcFVxV3RCSWxTN2p0amtyOSt5L2w4dmVTLy81ZXNrVGU1KzYvVWlYTS83czczMzN1blpOM3Zjam41LzM5di9JaWxmRnZXVnl6VkY2WjFDdXZESDcrdHg3L2xobXFsMWZYZjh2KzcvaTg4LzZyMDc5bCt0dmtPOWNySTQrQnI5Mmg0NzIvL2ZmWnR2VXJZU1Y4UEYwZHVWNnBrckY4elRQeTJFUUlWcS9oMFFyWG9nUnJMTjg1Q2RZOCtoS3M2Zm42K2IybmN4Y3VOZjRyek5SUDZlbW5lRW9sVXF6L0pZTnMyclJ2YmQyYWxWWjN0d2JXNmVDTzd2MkRFT0Zzc3BnRmF5dzNhUW5XYkJvcW1kK1c0Z3JXYU1kK0xndFdadDlJSElUWGtTUkpiRmlOWjVRRitBalpBdzg4MEFrcjFuSSsrK3l6THZNd3ZCRGtHT3N2MkhzVjQ0YUx5SnMwYVpMYnFvWHdFaElvUlNOWUVabXNYU1ZiTHFFckNGZEVKRWtFOEVSeXZWR2pSam5CakhnbGhKaHJzeGFFY0JWZU1QR3VraUdZTU9TQzltRkZnTk0yMXNHU3RwMjI0cWxGM09MaEpBTXc1eVpUc01KajU1MTNkaG1ZL1dLVWRTV0VWN05tRjRhZXBVS3dadjdkSW5OYlVMWnNtUWlpT0lKSUx2V3YwTThuMnZORWZFakFGeUM2bzUxSThFUjFjU1lKdU1id2gxNndFdjkyeWVDTGUvNDM2YkhONUVkZTNSOTQ4djlzM3FKbDdveXRXNW1sY2YvTFp3alhLL3VmVnFBbnFUREJHdXQzVG9KVmdqWFZkeFM4cUlOdmY5VG1MVnlXejN0YVZEMWFOVzlvOTl6WXY2akQ5SG1BQ0l3ZDk1WTk4ZUxicmtiUkpHMEtVTlZqcWtwTWdqWFdtN1FFYTB4OW9ZT1RUS0E0Z2pXV3NaL0xnaFhCZWZMSko3dTlWUkZ2N0llNjIyNjd1VVJLaUVpOG1Xd2Z3MHNvaVpBUXBZaGJ2M0VPU1lNUWZvUUxFNDdMbnFoa3hrTWdjaTI4dElXRkt5UFdXRnY2NUpOUHV2M0RDT3U5K09LTGpYMUtDVTN1MjdldkVXYU1hRVp3OGpOZVhNSmJ1QzdoTDRReTh6Y3ZuRGJjdytyVm1mcHlIT0tiVUdBU0VyRC9LeDVPZnlodXNqeXM3Q2VMQ1BkN2g3MjZJYmpaVG9qUVlHK2ZXQW5XSk45b2RQbTBFMENrZWx1L083MjYxWXgvSXduWDFpMGFXZTlUdW13alhBc1RyTEYrNXlSWUpWalQ4YVY0ODRNcGR2dDkrWmVyZVBYd0puTHl2aGovZlYreVdmQ2tvdzlTVWFZRWE0UU42bU85U1V1d3BtS29xb3hvQ1JSSHNNWXk5ak5Wc0ViTE1WM0hzZWNwVzk1RVNzaVVyanFscXR6Q1hwNlpJRUQwa3lnaDNNalNSMXA1d3F5WkJNaDdNUW4zTlJXL0ZlR2JsMi9aOG8vOXMzV3IvZlBQUCs2L0xmOXN0YTN1NTYyMjVkKy9jUTUvOTQ3aHM3eWY4LzdsT0k3eHpuZWZoYTY1MWY2SlZFYm8rTHpyVUdhK010em5rY3YweXZQcTU0N3p5cU1zOTN1ayt2bmFGR3JmdjJYNDZ1dXU3MnVicTU5amtNY28xTDR0WWR6K0xiTXdic1h2d2V5NndqYUM5ZC9tZWVKMUczZHJCTTlFSXI5ekVxd1NyT242aGhFT1BPRDYwYlp1L2NaUUZmNE5Pdmp2ZDk4RXozN3RXbGpuam50WjI1YTdXN1VxZVpuMVpjRW1JTUVhUWJERyttSWt3UnJzUVo1cnRTdU9ZSTFsN0V1d3hqK3lDS0dGMzNISEhaZHZEekRXYVJCaXpENnZFeVpNaUwrQUREMnpvSmRuUExxRU5PTkI5VUtQL1Uwa3pKbVFZTmF5ZU1tZlVpRllNeFJ6VmxSNzAxK2I4NGw4UkhKRUVSNFN5ditKK0hnbUNSRGEvd252L0pNT29RbUlmSk1Ybm5DdVBjdW5BQUFnQUVsRVFWVDMxY3MvRWVGTlRQdzdTVUNkWG4vM000SjduVE9vODRIdHdvVCt0bVhPbWJmRUNJbkUvblVnNVUzV1JPaGhRaURaL2lZOHlVd2l2M01TckJLczZieTVJRnB2SGYxc0tFemVmUzg4a1JxdVhuMFZyVnRySjJ2VnZKRzEyYU9SdFczWjJMYXZLZ0diem40c3FHd0oxakRCR3MrTGtRUnJFSWQyN3RZcFhzRWE2OWlYWUkxL2pKSFpsMUJoRWhteEpwU2ZDZEZsdlNuN3BDTEFTS2lVYTFiUXl6UFppUWxyZnUyMTF5SWlJYkVWNjF0Wnd6dHIxaXkzLzZ3RWE2Nk5uc3h2YjZ4Smw0N3FkZlYvSHFVQ1hzZzc3TDJIblhUMFFUR3ZZWTNuT3lmQktzR2E3bThoRXpqc1QreXQ3UTVONXZqRDUzMC9SNnB2N1YycVcrdm1qZHkyTiszMmJHdzdWS3VTN21hcGZETjc2T25YN0xsWDNuY3N6am45S0R1OVczeFplSU1PTStvMXJQSGNwQ1ZZZzk3OXVWVy9lQVZyckdPZmRaQkRodzVOS054VVpBbE9hSVdMY1RHOGhmQWovZmt2di96aVBJZjc3NysveXhLY2EyS1ZUTWFzaFVXb3IxeTUwcG8zYis2Mi9ybjMzbnRkR0RCYkFDRkE0VEo4K0hDM1Z0ZXoxMTkvM2U2KysyNjN0cFkxdXF3bFptOVd3dHNUYmVFaHdZbSt2cTZYMndSaUZheis0OFBKZFRsNGIrdDdTbGZidWNZT0VhRW00enZIczRmdnFqK1RlS1RDL2J0QmpCeFpjSit6SnlJSjVmemY5NkNPa0ZqN0xxanR5Slo2NFdsOWU5S1hFWnR6NEw2dGJQc3FsV3pxekxtMmVPa3ZSVFo1bHhvN1d1czlHbG5yNWcxdHJ6MGJXL1VkcWhaNWpnNUlQSUZSWTErMi8wMzQwRjM0d2o3SDI4bEhINVQ0UWdKd3haQmdUY1pObWdRclpjdVdkYzNNdEZsOWJXc1RnTkdaNENvVUpGZ1RQZllSV0hpekVtbTVKRmdUeVUzWDJwWkFwdDJMMVljaUVLdm9pU1JZaXhLcXlhUXNEMnNlWFcyWGtzeFJGdjIxL1NHay9yUDgrNit1K1hPZFRaM3hvMDJiTmMvdDFicHd5YzlGRmtEbWJaS1k0WUVseEw2Z1NhRWlMNlFEWWlLUWM0STFKanB4SEp4cEwwa1NySEYwY3NCUEtjckRtcWpxS3lRNFVTUjFuV1FReUxSN2NUSVk2SnFaUmFBNGdqV2RRdFdqTE1FcXdScTBiMXlrRE1LRlRTajhzWGE5VGYzdVIvdDI1anpuZ1Yyd2VIbVJUYXBSdlpvVHNONS90V3J1V09RNU9pQjJBaEtzc1RNcjlJeE1lMG1TWUUzd0FBakE1U1JZQTlBSnFrTGFDV1RhdmRnRHhoNjViTi9qdDlLbFMxdTlldlhzbUdPT2NYdjVWcTBhZlVnYSt3V3pyUkpiSUFYRkprNmNhQ2VjY0lMYkovaTk5OTRMWFAxaTRjVGFjNUo5M1gvLy9YYktLYWZFY3VvMng4WWpXSU1nVkNWWXpXTHR1MklORkowY0V3Ri9CdUZZOTEvOWMrMTY1M2wxSHRqdjV1WmJHMXRRSlhiYW9hb0xJWGFKbkZvME10YkV5b3BQUUlLMStBenpYU0hUWHBJa1dCTThBQUp3T1FuV0FIU0NxcEIyQXBsMkwvWUwxdSsrKzg3R2pCa1RZcmhwMHliNyt1dXY3ZmJiYjdkOTl0bkg3ZE1iYmZ1Q0psaFpyMDJTc2R0dXU4M3RFenh6NWt6NzVKTlByRisvZmxHUG1mdnV1OCsrL1BKTGUvenh4Nk0rSjVrSGtneXNSNDhlYmsvbDNYZmZQZTZpWWhVOUpKaXBWTEZDM09VbCtrUThySk1tVFNyeXNyZmM4dDhoZ3djWGZ2akJCeCtzTmF4RkV0VUJSUkh3TWdnZnNFOUw2OXU5YTFHSEYvajUydlViblhEOWR0WmM1NEdkdDNDWnkrWmRtTzI0ZlpWOEhsaXlFc3RpSnlEQkdqdXpRcytJOWlVaWxtS0wrakxFY3Ezd1l5VllpME12bU9kS3NBYXpYMVNyNEJHSVZTQ2tvZ1Y0V0JjdVhHaHNjUlJ1anozMm1KMTExbGt1c1UySERoMmlxazdRQkd2Ly92MXQ4dVRKTm4zNjlLaEZkM2hEenp6elRMZWxUVkFFSy9Vak9WQ05HaldNWkhUeFdoREhZN3h0S2V5OGR1MysrL1NycjVKUlF1cXZtU3Q5bDNxeWlTdVJDUjcrUytTYVUvWjkvWFpXWHZqd3R6UG4ydHlGUzkxZTFvVVpXWWRidDJnWVdnTzdhKzJhaVd0a0ZsNkpaK0U5OTl4ajc3NC8yWll1WG1DVnF1NWs3ZHJ0WlNPSDMrcWlXN0xOdHNrU25NNEdCdW5HSnNHYXpwR1FuTEpUSlZpanFYMzM4MjYwWDM3OTNSMzYvUDFERXZxZ2lLWjhIU01DaFJFSTByM1lxMmRoZ3BVa1p5MWF0REF5ZXBNOUdjT3JkL1hWVnpzUDdGOS8vV1dISFhhWWpSdzUwbVZMeGhDc0F3Y090STgrK3NndXZQQkM1OUdzVmF1VzNYampqZGF6WjA5M0ROc0NrYkdhcllQSXpMcmpqanU2UFlMdnVPT08wTDYzUzVZc3Njc3V1OHlKVGJabHFsKy92Z3ZsOVh0R24zLytlYnZycnJ0czl1elpWcWxTSlR2dHROTnMyTEJoVnFGQ25oZVFETkIxNjlhMWh4OSsySHIxNmhXcW56OWt1V2JObWpaNDhHQzM1eTdYWTV1bkF3ODgwQjU1NUJHM2RSRWVOK3JnR2Z2dTh0SlNGQWRDb3VGQUd6ZHYzbXdublhTU2F5Tzg4Zm9pTnRtSHVtVEprdGFrU1JNYk1XS0VLLy9vbzQ5MnZPKzg4MDc3OGNjZnJWeTVjaTZiTjR3Yk5td1lxc2ZiYjc5dFJ4NTVwT0ZsOVA4OWxtOWdFTWRqTFBXUDlsZ0oxbWhKNmJoTUk3Qit3eVlYUWp4OTlueTNGdmI3ZVV1S2JFSzFLcFdjZ0czUnBMNDEzSzJXTlc1WTF5cHRWNzdJODNMaGdLSnlwZkE1eTJUaU5lN3hEejMwa0h0bS9mYmJiMWFsU2hWcjI3YXQyNjJCNTA1aHRucjFhcnZwcHB2czVaZGZkczlObnF1bm4zNjZYWGZkZGFGRXZQSFVTNEsxQUdvU3JQRU1wMkNmSThFYTdQN3gxMjdLbENudVpzbDJMdXpKaXUyeXl5N3VSbm51dWVkRzNON203TFBQdGtjZmZkUSsrT0FEOS9JZWJvZ1MxdE94cCtrRER6d1ErcGdYY29UR3hvMGJNd2RRa21zYVJJRlFtR0I5NVpWWHJGdTNiaTZFRnRHRWlOeGpqejJjdDVWd1lVS0hFWldNSmNLS0VWY0kxa3N2dmRROWhCRzJiRG5DMWtBdnZ2aWlmZnZ0dCs1OGZrY2tQdm5rays0NFBMeUU2eUxxMkRJSVF3Z3pkaEJxTyt5d2d3dEx2dWlpaSt5Tk45Nnd3dzgvM0syN3BlNVhYWFdWOHdJajdoQ3pqTkdubm5yS1hRT3hpRWhlc1dLRlZhK2V0NjRyM0FOY3AwNGQ5M2RlQk00NDR3ejcrZWVmWFJnMDEyWmNyMW16eGc0OTlGQVhlc3UreGR0dnY3MXJiMUVjRUp5MGtYQml2bC9VNllVWFhuRDFSRWhUSDE0MkVMNk5Hald5UVlNR3VjbUIrZlBudSsvaE5kZGM0K3FPZ0w3eXlpdHQxYXBWK2J6Z3NLY3U5QU5jNHJFZ2pzZDQybEhVT1JLc1JSSFM1OWxDWU1QR1RUWjkxdnc4RCt5c3VmYkR2SjlzeXovL0ZOazh0czVwV0srV05kcXRkdDYvOVdwWm5WMXFXTW1TSllvOE4xc09LRXFzZXUyTWQzY0puaDhYWDN5eHUweWJObTNjYzQxbkl2dTVNOG42NmFlZmhqeTRQQytZWlBVbVNJbDg1YmxIRG9ieTVjdTd5VlNlbXhqUFd5WnU0elVKMWdMSVNiREdPNlNDZTU0RWEzRDd4cXNaSGkyOFBkd3dTNVVxNVFSSHMyYk5uSGVIbVQ1Q1B2RUlYWERCQlc0dlVvN3hyRERCaWlCaGJXRHYzcjF0N05peCtVSXVFUUs4N1BQQ0xjc2pFRVNCNEFuV3IzeXhrbmhPK1IwUnVkMTIyNFhDYWVsdkppVjRVRmFyVnMyMUNSRkxnaWJFSndJTVFZaUFtakJoZ3ZNQVlreGNNSUdCdUwzbGxsdWNLRVMwdFd6Wk1qUTArT3pOTjk4TWJWMkY1NVByc0YrdVp5Uk5vaXcrMjIrLy9aeEE5cTloWk1zM1JDZmVVc1lmNDVuUC9kdGhSUktzZkJmWW45Z3pCUENNR1RPTUNSNXMzMzMzdGFaTm00WkNncVBoZ0tCbGYxOUVxbWVJY0JKQWVZSVZRY3JuOE9EbHhXT0ZxRzNWcXBXUi9BcGp6ZXF4eHg0YjhzeDYxME1JTStFVWIxaHdFTWRqTXU0VkVxekpvS3ByWmdLQmpaditzaGx6RnJoMXNIaGdaLzI0S0tacU4ybFkxMWdUVzdWeVJhdGFwYUpWcVpUM2I5WEtsZjc5ZDd2UXp6RmRPR0FIRXdhTWlQU01hQmplYlltbTRYbkhjaENpZ2p6emhHUXN6ZUM1eGVRcDcxamVKQ043dWZNK1J2bm5uMysrbXlURmlMVGhHZXFWUXc0RkpsSXJWNjdzbnNjOEI0bElZaktUaVVzbU5PTTFDZFlDeUVtd3hqdWtnbnVlQkd0dys4YXJHUy85Q0FWZWdnbEo0ZVhiYjd3Z0UvS0p0d2RQRHpkQ3p3b1NySVJlNGtIaVBJUUM0dGR2RFJvMGNJS1ZzQmRaSG9FZ0NvUklXWUtwSy8zWnRXdFhGMDZMbHhUcjFLbVRFMUY0Ty8yRzk1SHI0RlgwQkNzaWxZZXJaM3Z0dFpkN3lQN3ZmLzl6a3lPRXdMNzAwa3N1dEltUTJiVnIxN3F3WHNRYnhyZ2pOQmJQUGNLM1k4ZU9vYkFuMXBNaVZubUJ3QlBwR2RkQ3FMNysrdXQyMUZGSDJZa25udWpHSUxQU25rVVNyTjI3ZDg4M1EzMzU1WmM3RHk3ZkN5eGNzQmJGZ2U4UDlZUEhnQUVEUW1YamJXVk5yVit3TXNPT09QYmIrUEhqSGZlNWMrY2FMelJNSVB6KysrOXVjc24vM2FYZXk1Y3ZkeEVUOFZnUXgyTTg3U2pxSEFuV29nanA4MXdoc09tdnpTNThlTWFjK1M2QjAveEZ5MjM1aXV4L1J2Yyt1VXVoeWEvNjlPbGpUenp4aEJzR2lGV2lpOExONzRGbGtqN1duQVpseTVaMXp6cmV3YmgzZTBiRURzOWJ2S1k4Qi8zUFRZN2gyVWtZTU04S3hLbVhUNEpsTjB4YWN0ME5HelpzOHc0VzdaaVdZQzJBbEFScnRFTW9jNDZUWUExMlg3RU5CdUlSanhoaG0zaTZJaGxoS1hpRitKZDFjWnpqQ1lmd2tHQlBsQ0JTQ1BYMFBFSCs2L0ppalZqZ2hWcVdSeUNJQW9FK1JBZ3g2ZUFad29yUTJ6bHo1cmdIcEdmdDJyVnpNNzVseXBUSjE2VUlLckxXUHYzMDAwNndFdmFFcVBRYkQxYTh0Vys5OVphYlNlWll2TFU4ZkFtSElyUVZnZW9KVmg3c3pEWnpIT3RsZVloejNzMDMzK3hDaGZtZGNlZVBCcUE4UW1WWmY0cmc3ZHk1czFzamhFajJMSkpnNVdXRjYzcUdZT1dGQmNHSWhRdldvampBais4YjN4c1NObm5HaXdycmJQMkNsZGw3SWh3OHcxdktKQkNUVEhoZzJWS0lGeE8yc0FrWHJJVHhmL2JaWjI3R1BSNEw0bmlNcHgxRm5TUEJXaFFoZlo3TEJQRENMbGo4czgxZnZNem1MMTd1UkN3L3IvbGpYZFpnS1VxdzRrbEZFR0lGZVUvOVhsaU81N2hZaktVZVJPMXdUMmZpc2t1WExyYjMzbnU3RUYvUGVKWmVjY1VWemd0TEdERFBWUVFyWWI5KzR6Mk41VmhFNlBCc2lEZktobXRLc0JiUWl4S3NzUXp2ekRoV2dqWFkvZVNGalVTVExBQXZMQy9LZUs1WXlJK0ZlMWlaaFNSVUZPOGJML1hNN2tVeXRoSkJzQzVhRkZzSVVyQnBGcTkyUVJRSWtkYXdFbDdVdUhGanQzNFY4ZWNaYXpueGpySU9PdHdRa0hoaXZja01QSU5lOGlPT1phMHFreUE4V0JHdWpETVNUWGlHc0VNa2U0TFZmMzJTRkJGeWpFZWZFSFNTSnZHUXgzdEorRzY0RVhxRjBJN1d3eHFyWUMyS0EwbWthRHNoK0x5WWVJWUE1eVdqTU1GSzJEQXZLb1FPZTBiYi81KzlNNEc3WW5yaitLTm8zN1dvcEZKQ2krSmZRa1doVFF0UmtxS1VoRkJwb3dVVjdZdW9pRUpGcEd3dGFLRUZoZEpDSlZxMEtLbTByNmorbjk5NXpkdTg5NzNMM0h0bjdzemM4enVmancvZU8zT1c3M251M1BPYjV6blB3UnQ5ZWxoaisvNVJzTWJHalhmcFRXRC93Y095ZmVkZU9YRG9pQncrY2t3T0h6MnVSQ3orKzlEUmxIOGZQbkpjRGgwNXBySWhlN2xFRXF6bUUxZkNuWlJpOWJwZ0xQRGlGZEZDQ0FzMkNpSnhrUEVkZ2hRdldJMkNsN0hZeWhWTVBPT0ZLZXJDN3loK1Q3QmVNLy9XUmpzUEZLd2hpRkd3Um10SzNyK2VndFhiYzRSRk8wSXZyUnhOZ29jZ0hvWVFvOWhQaUdJV3JIaXJCKy9QVFRmZHBQWlhtTjhNQmxKQVBSQ3NSbGlsdHlrbHBuZCtFYXlnZ1pCVWhPTWlReTdDY1ZHd2R4TXZMUEFTd3V4bGhVY2VpWU1RMW1RSVZvUU5Hei9BQ0hPQ1p4L2g1aENkaHBqREhsTVU3SE5HRm1CNFN5Rk9ZVGNJNjhXYlkzTTdzRHVJWHV5WHhoNVdoUC9DdzI4VXZKMDJJZ3J3TjlTUC9pTlRzVkZpOWJBaWs2OFJNbWFGd3lXWFhLSVNRRUZzR2dVOEVKNGNUckJXcjE1ZFpYODA3MzNGbTNqd3hGNWM3TGMxQ3J6V0NDTXpYeHVOSlh2UkhxUHBQenp5VnZiSVd6MkhGUzlkNEFIM1EvSDczUG1Cc1IxOXhIbXNtN2J0VW50SUs1WXJKZlZyWFd0SHRhekRaZ0ptRCt0dnYvMm10cThFRnJPSEZkdXJnaDBGRjZsYitDMUVwQTBpalJBNVl4YXYrTTF0Mzc2OXFpS2NZRVZ5UXF6bjhGdHB2Q1RHaStkWUN3VnJDSElVckxHYWxIZnY4NUpndmUrSmdiSmoxMTRGYS9Mb3A0VG5qWWxnQVl3c3J3ZzlOSTRlQ1dWTkVLUUZDaFJRaVFhTWNCZERzQ0pNQlJsY0lRcmdOWUwzS0Z4QlZsa0lEN05ZOEs0Vko2Wm5YbHhraHNvU2pKQmVoRERoQnhhaFV2Q2tRNmdpVVZLalJvMlUrTXllUGJ2eW1PSU5MMzU4RVRwclpBbUdvSVRISGttQkVPNkxNMTBSa281UWNZUTQ0UWNaZ2dQMUl3RUZiQlAvYjRTdFE4REN3d3N2S2tLb3Z2MzJXL1ZqanZyaEVjVkxHQndMZ3pidXZQTk90ZGR6MEtCQmFqOG5CRFRFQjdJRUl3a1RGZ1h3ZXFMRUlsanIxNit2OXRwQ2ZPS1lIUFE1RWdja2tZSkhGZnVjRVBhRmV5RXM0U1VOSjFoeEgxaGhRUU14Q284eVFxQlJEK3JBWWdXQ0g5OURlSkh4dWE1WmdySEFnN2lQVkxwME9YZkZxRkdocjhaZU12T3hTWkhxZGZOekx6NUwzT1RoaGJiaFpkeTBkWmM2WmdiL1FLd2VQWDdPOHppcVgwZTV1bHhwTDNTVmZRZ2dZTjdER2lvTHNEbmZReXg3V0lOQngrOGExbE53RnVBRkxKSVlSaEtzUmozNHZVVElNQndIeUM2UDM5cFlDZ1VyQldzc2R1UExlN3drV050MUhTYWJ0NlVjMXpKaFdEY3BYVElsV1l6T0JWNFlpQWs4MENBQ3doVXM3QkZPQ1VGaFpJMDFCQ3Z1dzJJWnlWOFFyb2o5aC9EQWhTcndMa0d3UnJ2UHc2OXpaUTRWc21zTTRVS1Q3R29qM0xFMjJHOERFWW9mY09Qc09meXdJak1oOWs1Q2RHTGZNOEo3SWVwUWNBd045b1BPbkRsVC9SRERLNGdmWW9oSmVFeFJJSUFSeW91WEdYaVRqZXNoanVGQmhaakRua3pZb25IZUsvYWx3blp4RHdTZCtRY2JnZzE3YlNGcThaSUUvMjhrSmtKZGFIdkNoQWxLdUtMRUlsZ1JiWUQ3SVJ5eEh4WWV6MGdjamgwN3BzUVBramRCWUNLRE1xSU9VSStSa0FwN1ZBUDNzQ0ljRytIUitJNUJkR09mS2tLbkVmVUFNUTd2TXJ5QThMamliNGhnMFBVY1ZncldsRy9Db2hsaFZMaGREd3JXazQ2QTJYdTZhZXRPd1QvaEN1Zkp1MFprOXA0aS93QzJuU0Q1RWw3ZTR6TzhsRFVuWW9vMlN6Q0VLS0o5OEx1QVo3cTVJT3JHaUVaQzdnYjhyZ1o2V0pFaEg4ZmVZSDBHa1dvVS9MYmdkd20vVWZnOWlLVWtUTEQ2YlpGRUQyc3M1dVR0ZXhJbFdLMmVrUlVOclZqUDA0cW1EYmV2UlFndnZHQllBQ083YWJoaXBFNkhCdzJDQThVUXJCQWxPS3NTQzJwNGpIQjBDQjZTMkhNWHJPRE1NQWhXUEdoMUtINTdGdXN3Snhnajl2Z2dmQXFMRGlmbUtCUkhMRHh3MERzaUZveUM3dytTYVVCSXgxdXdqeFplNDFqRGdkRitvcngwOENvakZCenpnTEhqdUI5RWZtQXZOUDVCaUJ5T0g4TDhJRWtXQ3ZqQnE0OVFiSGpTa2Nnck1Oa1hCV3VLRlZFSXhmdHRzbjQvdktpOWgweFVHWGJOM3ROSU5WUXNXMHBHOXorM256M1M5Znc4OFFTc3JqRmpXVGNhb2hUYlpyQWV3OHQvRk94VFJmUWFzdWFiUGF4NDFpRmZCSndOZUZZYStROFFWWU9YcFhpQml6V2RzZjdDeTE4OFYyTXBGS3docUZHd3htSk8zcjZIZ3RYYjg0TUZNc0lxNFprYVBueDQyTTRhU1plUXFBa2hueWpCanJYQnd4R2VON3dGaENCRmdwN0FnblBFSUZqeHdOV2hPQ0dHRXVGaFRmYTVRWlpxSkFERHdlbzRpRDFScFgvLy91cFlHNFQzSW1JQlhtT0VOQ1AwREgrUHAyRC9PSTVGd01JRmdpN1draWpCYXZRUEVSa1FxTUc4QWZqK1lEOFc5aUFiNVpkZmZsSEpTSkNNQzk3b0tWT21wQmtxQldzS0RncldXTDhCc2QzMzJjTHZaY2pZZDRQZWZQWXMwcTZLQ1A2Ti84Ui9pMGlrcEQreDlZUjMyVTBna21pTlJheWlqL2d0Uno0UkhFK0RndkRkL1BuenE2MG14aG1xaUFReWtnZ2k4c2pZZ29PWC8vRHc0bmNNa1hJUXMzZ1JpdDgyMUl1WGx6aEhQTlkxQ0FWckNDdWlZTFg3NitWK2ZSU3M3czlCdUI3QW80RUVNSGpJNGJ6SFVQdFk4ZERFR3pwNGhaQjB3TmdQRWVvY1ZvVEhZTzhna3UxZ0gwYStmUG5TZEFQMVlCOWs0Tis5UU1zSmowK3NQeGJoZUZDdzJtTXQrREhIRzIyRU9NY2o4S0xwRGQ2T0k5TTJqZ3RDY2d5OFBVZElOUDRXTGxsWnBEWWc2SERBUGZhUUkzb2ludUoxd1lxeDRhVVhuaUY0Zm1IdnNQa0lMUXBXQ3RaNDdEK2VleEVPM09uWk1YTHMrTW5VYWd5dGF2d0I0dFVRck5kWExpZTFhL3hQcnFsd21lVEpsU09lcG5tdnd3UVFqWU44SFhQbkw1VGR1N1pMOXR3RnBFYjE2MlhROC8xVWlIQ3NCVkVqZUdiaHhSdUVKN1pYSWZ3WVcwV1Fod0FaaEkwQ0x5d2NEVmhINGVnM2VGTVIxZmJVVTA4cGNZcGtjMWpYTlc3Y1dHM0pRVDJ4bGxUQjZzVEN5TndwdnkyUzNCU3NPTS9QMk1lRWhCYlloeFNxSUg1OTlPalI2bU1qcGp4V1kwajIrMElKVnJ0dFA5S2JyMWc0eC9xMkxKYTIzTHdIbmxWNFRDKzc3RElWUWhqNDBOMjhlWE9xeHdaN0RmRlFORW9vd1lyUDRVVUNRNlJseDU2NllPZXh1am51U0czYjZmSHgyN000RWh0K252d0VZaEdzdS9mc1YyQXVLcGoyQlpVVld0RiszNHc2SVZpeHVEUDIvaHAvcDJCTklVRVBxeFhycy84YWlOWkJZNmFtNXMxQUM2a2lOVkM5bXBvdlZxU0FWQ3hiV3E0dVgxcXVxVkJHOHVhbWdMVi9kdUt2RWFIZjN5eGZxeW9hMEtPdDFMaTJRdnlWZXJDR2RCN1dhQi9Va1VKaGpESDdiWkhrQmNHS294T3dKd1ladG9JVnZCbEhhTkpmZi8ybDRzc3BXTU4vd3lKNVdPMnlmUXJXMko5MDhOUWhjY3ZBZ1FOVjJBZ3l1Q0xMS2Y0Ynp4cUU3Y0x1a2VRR0NYRE16NVZ3Z2hYMTRydUVSRFJJTUdNK254TnYvRkFudkNKZUxkSGFKc1lSeXVQanQyZXhWK2VFL1VvY2dWZ0U2NnAxbTZUTHMyT2xYczFycGMzZGRhTVNyckY4MzVDc0JKNEU3SnVIaDl4Y0tGZ3BXQlAzYlFuZUV2YTBkbnBtVEZyUnFwVHJPZStxMmRNYXJKYWloZk5McGJLbDFiRTNsYThxSS9ueXBPempabkdYQUFWcmtFeE93Zlp1aEZzWW1hZlFiNHNrTHdoV0xOYVI0UXZ4MzhIYzZEai9EMGxuRUhhRjZ5aFlFeXRZUTlrK0JXdjhEMitFdW1Eei9zS0ZDd1ZIT0VCdzR1VU1Ndm9pT1Uyd2NKZHdnaFU5UXRZN1pHZkZIajFraUVWMEFrcXlDbGFNTFpqSHgyL1A0dml0aVRYNG5VQXNnblg2N01VeTlxMlBVNGNlalhDTlJyRGkyWVJzMG5ndTRWbUYzK1Z5NWNwUnNQNUhJSmE1ODd1OWVybi84TFRPWGJROGFCZHZ2SzZpNU0yVlEvQ3laL3ZPUHlNT28zREJDNlZTK2RKU3FXd3ArZDlWWlNSL3Z0d1I3K0VGOWhPZ1lJMUNzSVphR0ZHd3htYVlSa2d3Tmk4ampQSFZWMTlObDE0YU5jTmpoRGU1V0lRamUyR2dZRjI1Y3FYeVF1R0lBWVFvNGF3OHhKNWpiNUw1VERqOEhTR1lXTVFqMGNhbVRadlVEeThXdS9EU0lPd1NHN0JSQnc0aFJzSWI3QjJFUU1CUkNJaE5OOHFNR1ROVWlESUVCN3hXbDE1NnFVcHQzYTFiTjhtY09YTnNRR3k2eTI0UHE5R3RRRkZBd1dyVGhMR2FWQUxSTEtDTm0wSjVmQ2hZYVZoK0l4Q0w2SGx6MnVjeWFmcmNORVBOa1Myck5HMTRrelJ0Y0tQa3lKNDFKSVpJM3pkemx1QVRKMDZvczJieFFxMVhyMTRxWVZhT0hHbERKK2xoVFVITmtHQnZmUE9DZlRmUU0vUDVxNGVPSEpOVlAyMlUxZXMzcTdOYXQrN1lIYkh6RnhYSUo1WEtwWGhnY1k1ckxPSDRFUnZoQmVrSVVMQkdJVmpEaGNJWVpQMjJTUEtDaDNYV3JGa3FSVDdPTThKWmd1YUNEYzRRbXZnY0c1eXg4ZGtzV0JFNmlmT1NjSGc4UWlCUkI5NENRL3ppaUFGa2JUU09NVUFZRTdLQTRVZTNSbzBhS3VrR3ZFL1pzMmRYZFNETk5aTFc0TCtSRFF6aGxEaEhDYUhLNWl5S3lDaUp0TmM0b3hEbjcyR2ZJTzVGMzdBUEZ4a1VuYkFEcTg4dkp3UnJNTnVuWUxVNkk3ek9Lb0ZJQzJoejF0SklIaDhudm9PQlNaZXdJSnJ5d1R4QmFuejhrekhEZWFiL1R2KzNEQm5QazR6cXVwVFBVdjVKK1Z2cWYyZk1tS1llNC9PTUdjUGZFMWhQU244eXlMbjd6TzM4MTI3RzRIMEoyai9WUHVvSTNqL1ZYbW9mMDQ3SitNdzhUblAvck5wSHNsOW5sMkExT0VVU3J0RjgzMUFuRXNFaHdRZ3lCV1ArOEZ1SHJReEdvV0NsWVBYYWR6UllCdUZ3THhRT0h6MHVxOVp1bERYck5pc1A3Ry9iLzRnNHBJTDU4eWdCYS94VHBOQ0ZFZS9oQmRFVG9HQzFJRmdqTFl6TTJCT3hTSXArbWtQZjRSWEJDbUVKQVlRRDU4MVpJeUVhOGFPS2JLcndvcG9GSythbGZQbnlnamUvSzFhc1NKUDlGQmxUbXpScG9qeWV4cEVGT013ZHdndjdBdUhWTlFvTy8wWFdyd1lOR3Fnd0o2TjgrZVdYS2owMWlpRllrUkVTM2xSYysrR0hINllScGtaaUtOU0J6OTBxZGdyV2NMWlB3ZXJXRENkdnU1RVcwTkY0ZkJMeExBNzFCajk1WjhpWmtXR3VnZ3J1TklJNjVXVkFpdWc5VDVEN0FQODIvODE0Q1hDKzZRVkFCbE1keHIzbjdrbXBLNXlnTnJjVlNuQWJMeHVzOWcvQ1BuMWZ6cFAyM1Vlb3ZYYklEek4xVEcvQkM0NXpMMFBTM21POElKbnl3UUwxMGdSRkhlRmhPcm9qa25DTjlIMExQTmJHcUEvUlRIaGhlODAxMTZpWHdoU3NpVHREMTVsdllITFhhczRnSE8zNXEwZU9IbGVlVitXQlhic3B6ZDdZVU5RSzVNdXRRb2hWSXFkeXBRVjdZbG5pSjBEQkdrS3dSck13U2diQkN2SGhWTUYrUFB5NEJSWWpKQmdlVmdoUENNR2VQWHNLc3FJYUJXSEE4SWhDa09MSUFMTmdoWWpGT1VpUFBmYVlPZ1RkWENDMHJyamlDaFVDakh0UmNOd0hzcS9pbkNWenFQRGd3WU9WaUVXNE1jN1NNeGZzcjhVUklZWmd4ZEVGOFBaT25UcFZaV0kxbDdWcjF5cnZySlh6TmMyQzJXN3UyQSs1ZVBGaUZXWWRiRjRqTFZLczJqNEZxOTB6eC9vaTJXYmdBanFjeDRlQ2xmYWtBd0Z6QWhuanY1VnVOU1daQ1NWY28vMitHZlhnZUN5RUErTmxNWkloR2tkbDBjT2FRb2dod2Q3NzVoa1poS3RmVzBFZWFGNHY1ZzRlUFg1U0NkYzE2emNwRCt6bXJTbTVKOEtWQy9QbVN1T0JSVlppbHVnSlVMQmE4TEFDYTZSUUdBTjlJaFpKMFU5ejZEdWM2RzlnYXhBMkVFK0J4U3hZR3pac3FBVGd4bzBiVmVndjNoNWpqeWtFNTBzdnZhVE9SQW9VckJDdmtjNjlRemp3bmoxN1VnVXJ6dC9EZVVubVluaEdJV3h4b0x5NVFIeU9IRGt5VmJBKzhzZ2pLdHc0WE1HZVd4eFZFcTRrZ251c2d0V3FLS0JndGZPYnlMcEFJTllGZERDUGp4UGZzV0FMazlObnpzaVpNMmZWR2JmNDUvU1pzeXFiZWVEZlVqOC9mZTQ2NDIvcXZ0TXA5NTZyNTF5OStDeWw3aUJ0bmZtdnJTRDE0bnA3K25kVzFXUDB3eGpudWY2bmpObmNmNHcvOEI3amI0RmpwUFhIVGlDWVlGVzFHV3ZvODlMWFhTaC9YcGs0b3J0MDY5cEZiWDB4YjNreHIyVkNlVmd4MTFtelpsWGJjL0I3YXV4bHBXQk5vVWZCR3JzOU8za25NZ2pqSHp2M25PTGMxelhyVThLSDE2emJKSnUyN2xUUC9uQUZXWWNybFN1VnVnZjJrcUtGbkJ4MjB0UnRGcXhEZWo4a1ZhKytNbW5HWmg1STNNZmFHSldGQ29VeFArVHRKaGpwN1UwODdSbUxPcmM5ckJDc2t5ZFBsdGF0VzR0eEppdVNKc0g3aWNSSTJIc2FLRmduVEpnZzdkdTNWOGtmc0pjMFdJSHdyVk9uanZvSUh0YVRKMDhLd25yTkJXZkJRanl2WDc5ZXJyd3k3UmNBWWNnNGZzVDRRVy9WcXBVNmVCN25hQVptU0RUcVJGOXg4SEM0NG1VUHE5VXdNQXJXZUw1NXZEY1lnVmdGYXpDUFQ2SUVLMmN5ZmdMcEJQOS80dC84RXNBUTlZRi9TL24vOUlJNWpmZ1ArcElndE1oTzIxYUs4RTV0Si9VbHdCazVvK29OL0R6bEJZTDVubk12Sk5MV2svWWx4bG5adUhXblVwclFtSWtxSzVZQUFDQUFTVVJCVkVVdktoQkI4S2YwLzk5L3o4alovOVNwRXEvL2FWV2xVd1BFYXZac1dhUnBnNXVrV2NPYlZES21XTDl2Mk1lSzMxWDh6aTFmZmk0VEt3VXJCV3Y4VHdOLzEzRDh4Q2tWUXZ6anoxdlVYdGhmTnUrSU9LQTh1WElvQVZ2dThwSlNxbmdSS1ZPcW1PVElsaVhpZmJwY2dPU21TSEw2NmVjTFpNL3UzeVZIN2dKeWM2MGEwdS9admtGUFV2QTdGOXNFYTZoUUdMOExWaWRGY1NqakNmU3dIajkrWENWWXd2NVBoTndpUkJqSGVpQnpMMG9vRHlzOHBNajhHNm1FRXF4dDI3YVZOOTk4VTVCdEdFZm5tQXVTSzJFUHJDRllEUThyOXNqZWZ2dnRrWnAwNVhNNzk3Q2FCeEJvKy9CODJ5MjhRM21GWFFISlJoTk9JTllGZERDUER3VnJ3cWVQRGNaSklPNmtTeUc4cXZDb3RtbGVUK3JYdWpaTkQ2UDl2dUY3Tm5mdVhNSHZJQ0tYNXMyYnB4SVlHb1dDbFlJMXpxOUEwdDErNHVRcCtYSDlsaFFQN1BwTjh1dm0zOVdMcUVnRlIrZVVLbEZFU2hjdm12THZFa1hrNHNJRjFaNTduVW9reDBpb0NFNnJqTEFWRUZFbVAvLzhzOXJla0N0WExyVTNINDZxRzIrODBXbzFxZzQ4VDFHUXFEVlM5R2U0aW0wVHJLRkNZWXpHL2JaSThrclNKWGhZVVNBZUVVNExnUWhqZ1ZpOTQ0NDcxR2VCZ2hWN1JwR2hzR3JWcW1xZmFXRFp1M2R2YW9aZ2ZCWktzTUl3NFVrMXQyWFVoYjIzOEtvYmduWE1tREVxUEJsN2JlSDlOWmRUcDA2cC9iWTVjK2EwYk9ST1hPaVVZQTIwZlhpWktWaWRtRUY5NjR4MkFXMlFDdWJ4OGR1eldOOVo1OGdOQW5FTDFnQ1VvWVFxa2h2MjZkTkgvYmJoZDdKczJiSktlR0s3QzM3anNPQkNNa0p6UGdOVWpTUGNzTTBHdjR2NERReU1TS0pnVFprQWhnVHpPeDJLd01sVGY4dFBHMzVUKzJEaGdWMi9jVnRVc0M0dlZVeXdKelozenV5U08xZDJ5WlVqNWQrNWMrYjQ3OS9aVXY4N3FvbzllSEVrc1dwME9WWkhoNUdUQnZYQVdZVzkrRGhsWk4rK2ZXckxBNTZCY0pxaFRKa3lSVVZ6cmxxMUtwMVhGNmVabENsVFJqMUxVVHdqV0VPRndoamcvTFpJOHBwZ3hURTFFS3I0QnlHNkNBZSs0SUlMRk41QXdZcS80WWNXYjBid3BoY0pqNHlDSDJMc2lSMHlaSWpLRkl3U1NyQkNqT0xjVm9RVnc3TnJGUFFGQ2FQZ1dUUUVLeEkybFNoUlFoazJQTElJbnpYS2dBRURaT0RBZ2VxSUcyUWRkcXM0SlZnRGJkL3F3eVFhRHJFK2VLSnB3MC9YN3Q2OVc0V2d0MnpaVWtVZkpIdUpWckNHOC9qNDdWbWM3SFBMOFVVbVlKZGdEU1ZVSS9jZ3Zpc29XRlA0VWJER1owYzYzWDNxNzM5VStQQlBHN2FvQkU1YnR2MGhmK3o1SytrUnRHNVdOMnp5SzRRQm15TWVFZEdJTlNjRTVOYXRXK1d0dDk1SzR6QUpKaVFqUWNReG1JZ1VNZkxrNEhwRWVtTDlqdllSU1RKdTNEaFZEWnhxYytiTUNTcFlqVHc0V2JKa1Vkc09YUmVza1VKaEREQitXeVI1VGJBYXdoTFpmT0hKaENFWkpaaGdSVFpjbkgyS0l3NGdURXVXTENud3ZPSk5jWjQ4ZWVTNzc3NUxGWldoQkN2bUZpRUFQLzc0b3p6d3dBUHFUVFBhTjg1aFJlaXlPU2tGUlBCVFR6Mmwya0xHWUNTY1FHWmVHT25OTjkrc1FxYlFIN2VLM1lJMWxPMVRzRG8vd3c4KytLQk1uRGhSMnJWcko5aXpuYXpGQ1krUDM1N0Z5VHEzSEpkMUF2RUtWcmVFcWpGQ0NsWUtWdXZXeml0REVZQVg5cmZ0dTJYTDlsMnlaZnNmU3NUaXZ3OGRQcFkwMENJSjFqWnQyc2lrU1pQVWVDRldzUTB2c0pqWG9NaC9BeEViVGNtVUtaTktIQmQ0UWdnY1pjaC9BeWZCMGFOSDAwVk5Jam1yY2ZvSUhHWTRyUVRIY1NMNlpOR2lSZllKVmljV1JtWkFmbHNrZVZHd0dvbU9BclAyQmhPc1lBOVBKN3liOElnZU9uUklDaFlzS0kwYk4xWkgzVng4OGNXcDB4TktzT0lDZUU2N2RPbWlQTFh3cUZhcFVrVWRyL1BGRjE5SXIxNjkwbmx3cDArZnJqYUJJM3dBWWNEd3V1SUwxcWxUSjhtV0xWczAzeG5icncwbFdPMjJmUXBXMjZjdVhZWFlXNDJYSW5oeGc1Y3BMTllKK08xWmJIMWt2REpaQ2NRcVdKSGtwV25EbTZUR3RSVmNSVVBCU3NIcXFnRW1lZVA3RHg2VzdUdjN5b0ZEUitUd2tXTnkrT2h4SldMeDM0ZU9wdno3OEpIamN1aklNWlVOMmNzbGttQ0ZKeFhyYTVSUTNsT3pGeGJYNDdwb0NyWVRmdi85OTVJN2QyNTFQQ2FjWDFqN3cxTnFGS3p2a2NzR2F6RGsrcm4zM252VmFTSlBQdm1rdWdUM0lQb1F6ak5zTDhTL2JmZXdSak9vYUs3MTJ5TEpUY0VhRFZlM3JvVlJJcUZUc0lSTWJ2VXBVcnVSUEt5UjdyZjZPUVdyVlZLOHpnMENmbnNXdThHSWJYcUxRQ3lDRlF0VFpQejFRc0ZDTGZEWXVHRDlldUdGYzM4Tk9FSTl6ZVhJQnhIcUJBQXZqTmZjaDFqbXptdGpZSDlJd0NzRXpML2Y0WkxDV3IwdTJMaCsrT0VIdFIzUU9Qb1MxMlRPbkZsdEo4VGEzN3pOOFB6enoxZFoyYzNpZWViTW1jcjdpMGk0MTE5L1hXMGhwR0NOY0NoeFBBWkd3U3JLSzR0a1QzRG5tODlZUlN3NzNQd0lDY0Q1clFnZjhFT2hZUFhETExHUFRoT2dZSFdhTU91M200QXVvc2Q4NnR1S0ZYWlRkS2MrWGViT0hicHNWVGNDMFhwWUsxYXNxUGFkUmx1d3ZrZElNSTdUUkpTbVdid2lZZ1JIWjZJRUNsWWtXY1hSbHJnZlljRjU4K2FsWUFVb0o0K2NvV0JOTWU4bVRacW9HSGxrSks1WHI1N2FlSTF3eko5KytrbEdqaHlwd29YOVVpaFkvVEpUN0tlVEJDaFluYVRMdXAwZ29Jdm9vV0Ixd25wWUp3a2tEd0h6SGxhc3k0M2pMYzBqeE44LytlUVQ5YWRZOXJBR280VVRSeEFlRE84cnRoVHUySkZ5am02Z1lNVXBJVTgvL1hTYThOK2s4N0JteVpaTENoVXZxd0NjUEg1WS90eTJQcUtGVWJCR1JCVDNCY2pzaFQycjA2Wk5Vd2FLeFM3ZW5pRHhVNnRXcmVLdVA1RVZVTEFta2piYjhqTUJYUVNDbitkSXA3N3JZbzhVckRwWk5jZEtBdEVUQ013U0RIR0tVeVRnZWNWbk9GTFJuSWdwMml6QldPY2pmUGZZc1dQU29VT0hOQjNFU1I5R09EQ1NNa0dzQmdwV1E1eUdHbG1zSGwvVWwrNGMxdWp4MlhQSFY5Ly9KSDJIdnFFcXExYWx2THpRczUwOUZjZFlDejJzTVlMejhHMkpFcXhXRUxUck9rdzJiOXVsTHAwd3JKdVVMbm51R0NBcjkvTWFFbkNTZ0M0Q3dVbUdyTnMrQXJyWUl3V3JmVGJEbWtnZ1dRbFl6Wk1TeTNHSWhpaEZObUE0cXBvMmJhb3dZcDhxa2l3aHN0THNZY1h4bWppSEdtSEQxYXRYVjk1VlJHQ2F5N0pseTJULy92M3FPQjVjWXo3bEpKbzU4b3hnZlhQYTV6SnArbHpWOTBoWnNxSVpZS3pYVXJER1NzNjc5MUd3ZW5kdTJETnZFZEJGSUhpTE9uc1Rpb0F1OWtqQnl1OEFDWkNBRlFLUlJHc3NZaFh0SW5MMXJydnVTZzAxTGx5NHNPVFBuMStkR0FMUmlZS2pCSEdrSUFwT0F0bTJiWnRVcUZCQjZ0U3BJOE9IRDAvWGZkK0ZCRWVhQUFyV1NJVDRlYndFS0ZqakpjajdkU0dnaTBEUVpUNzlQazVkN0pHQzFlK1d5djZUUU9JSUlBVDR4UmRmbEZtZnpwUDllLytRN0xrTFNOMWJhMHJmUHIxVWlIQ3NCZUcrU0t3MFpjb1UyYkpsaXh3NGNFRHk1TWtqbFN0WFZ0c0JrVUhZS1BEQzR0aktnd2NQU3JWcTFkU1JsNEdGZ2pYV21iQjRIejJzRmtINTZESUtWaDlORnJ2cUtnRmRCSUtya05tNFpRSzYyQ01GcTJXVDRJVWtRQUwvRWRCbGl4bERna09ZUEFWcjhqMExLRmlUYjA0NUltY0k2Q0lRbktISFd1MG1vSXM5VXJEYWJUbXNqd1NTbndBRmE0TG5tQ0hCQ1FhdVlYTVVyQnBPT29jY0V3RmRCRUpNY0hoVHdnbm9ZbzhVckFrM0xUWklBcjRuUU1HYTRDbWtZRTB3Y0EyYm8yRFZjTkk1NUpnSTZDSVFZb0xEbXhKT1FCZDdwR0JOdUdteFFSTHdQUUVLMWdSUElRVnJnb0ZyMkJ3RnE0YVR6aUhIUkVBWGdSQVRITjZVY0FLNjJDTUZhOEpOaXcyU2dPOEozUGZFUU5teGE2OGF4K1RSVDhrbFJRdjVma3pCQnVDWlBheWRuaGtqYTladlZuMGMwS090MUxpMmdxdkF1WWZWVmZ5T05FN0I2Z2hXVnVvakFzWnp6YzR1SXcwK0N3azRTY0RQZ2pYUzhST3hjSXYxeUlwWTJvcjNIai9QWGJ4ajUvMGtrQWdDelIvdUwzL3VPNkNhZW05Y1g3bW9ZTDVFTkp2d05oSWlXUDI0U0tKZ1RiZ3RPdDVnSWdTcjdvc1R4eWVSRGNSRndJL1A0cmdHekp1VGdvQ2ZSWS91dndsK25ydWsrUEp3RUVsUGdJTFZ4aW4yNHlLSmd0VkdBL0JJVlJTc0hwa0lkc00xQW41OEZyc0dpdzE3aG9DZlJROEZhNWRVTzFvMFk1Um5iSW9kSVlGa0lVREJhdU5NK25HUmxDeUNGZUY2UFhyMGtOZGZmMTFPbkRnaDc3Ly92dHgrKyswMnpxNS9xcUpnOWM5Y3NhY3BCSDcrK1dmcDNidTNmUDMxMTdKMzcxNHBXN2FzVks5ZVhjYVBINjgrYjl1MnJmcnM3Ny8vRmh6Mm5UMTdkcm56emp1bFQ1OCtraU5Iam5RWS9mZ3NwaTJRQUFWcldodGdTREMvRXlSQUFnWUI3UVNyM1FzanN5bjVjWkVVajJDRlNQemdndy9rN2JmZmx1Ky8vMTcrK3VzdnlaMDd0MXh5eVNYU3BFa1RlZkRCQjZWUW9jUnNpcDQzYjU3VXJWdFh5cGN2cnhhMzlldlhseXV1dUVMTGIzb293V3FuN2V2K05sMUx3MHJBb0I5KytHRWxVai83N0RPcFY2OWVhb3NYWG5paHpKa3pSNjY3N2pyMXQ4V0xGNnZQcTFhdEtnc1hMcFRBWjY4Zm44VUp3TXNtUEU2QWdwV0MxZU1teXU2UlFGQUNwdzhlVkgvUG1DZVBZNFMwRTZ3R1Nic1dScm9LMW9NSEQwcXpaczFrd1lJRmtpMWJOcm5sbGx1a2VQSGlTclJDdkc3ZXZGa0tGQ2lnQkcyTkdqVWNNMkNqNHVIRGgwdjM3dDJWWnhYOTBybEU4ckRhWWZzVXJEcGJtSE5qRDJXYk45eHdneXhkdWpSTncyM2F0SkZKa3lZcHoydTFhdFhTZkViQjZ0d2NzV2JuQ0ZDd1VyQTZaMTJzbVFTY0kzQmswU0xaM0tTSkZPcmNXUXAyNnVTSWNLVmdEWGlUSCszQ1NGZkIycUJCQS9uMDAwOVYyQzNDY0NGT2pYTG16Qmw1N2JYWDVMSEhIcE5jdVhMSmhnMGJwR0RCZ3M1OVUwVGsrZWVmbDc1OSs2Ynp6RGphcUVjcmoxV3dSbVA3Rkt3ZW5YeWZkeXVVWUQxMDZKQ0szakFYNHpzL2VmSmt1ZSsrKzN3bFdJOGVPNkg2bXlON1ZwL1BHTHR2SndFS1ZncFdPKzJKZFpGQW9naEFzUDVhcTVacURsNVdKNFFyQld1QVlJMTJZYVNqWVAzODg4OVZ5TzAxMTF3ajMzMzNuWngvL3ZsQnZ4TURCdzZVTDcvOFVnWU1HQ0RYWDM5OTZqVnZ2UEdHdlBycXE3SisvWG81ZmZxMFhIcnBwWExQUGZlb1BhaVpNMmRXMS8zNjY2OXkrZVdYcXoxcWRlclVrV2VlZVVaV3Jsd3AvLzc3ci9MWXZ2enl5M0xaWlplcGE3Tmt5U0tuVHAxSzA0ZDMzMzFYMVhuczJERVpQSGl3VEo4K1hiWnUzU3FaTW1WU1ljTVEwL2ZlZTIvcVBlalBJNDg4b2p6R0gzLzhzV0FSakpEbUVTTkdxT3RRMzRFREI2Um56NTdxOHlOSGpzaFZWMTBsTDczMGtxcXZWNjllcWczWUQvNCtac3dZeGNkYzBIOHNzcGNzV1NLSER4K1dpeTY2U0c2NzdUWTF0aUpGaXRqMlhJbFZzRVpqK3hTc3RrMFhLeklSQ0NWWWcwRkNSQVVpSytiUG55KzMzbnFyTHdRcmhPcU1PVXRreHV6Rk1xQm5XN202WEduT1B3bWtFcUJncFdEbDE0RUUvRWpBTEZpTi90c3RYTTJDOWNNSi9TUmZubHgrUkJXeHorbU90YkZyWWFTallEVUVITUo5a2Zna212TDAwMDhyQVFuUjJiUnBVeFZPL01VWFg4aDc3NzBuOE5yT25qMWJWUWR4V2JKa1NhbFpzNmI4L3Z2dlN1aGRlZVdWS3R6NDhjY2ZsOEtGQzh1bVRac2tRNFlNTW12V0xIWC8xS2xUbGZpNyt1cXJwVXFWS2tvUTFxcFZTNzc2Nml2bGdibnh4aHZsK1BIalNueCsrKzIzTW16WU1PbldyWnRxRHlLNlhidDJTcHl1WHIxYS9idFNwVXFxVDBib0lSYkY2SGVqUm8za3h4OS9GTmdRUE1jUXFPWEtsVk9oeU9nM2hDNkU5NDRkTytTQ0N5NVE5YU1QdFd2WGxtTEZpc2xERHoyazl2YXVXYk5HQ1hmc3ovdmhoeC9TZUttallScDRiYXlDTlJwUlFNRWF6d3p4M2xBRW9ua3VJN29EWW5YbnpwMlNOMjllVHd0V3MxQTllanpGdXpxcVgwY0tWbjRWMGhDZ1lLVmc1VmVDQlB4SUlKaGd0VnU0Tm1uWFZ3NGNPcXFxblQxcFlOSkdLTVVsV01NdGpIUVVyS1ZLbFpMZmZ2dE5zSThWSWI5V3k1WXRXNVJYRklJU2d0SHNtVzNac3FVU25QRGVJbmtTUkNyRVhjYU1HZVdubjM1U1l0VW85OTkvdjB5Wk1rVldyRmdoLy92Zi85U2ZnNFVFdi9YV1cvTEFBdy9JRTA4OElhTkhqMDY5LytUSmswcGc3dHExUy83NDR3L0preWVQcWcvMVFnaERTSnBEbkNGQUowNmNxRHl3NDhhTlM2Mm5lZlBtYXM4c2hEZThxMGJwM0xtemF1K2JiNzRSaE5raU9SVzhzTWhlakQ3bnkzZnVzR040YTVHZ0NzSVpBdHFPWXFkZ0RXWDdGS3gyekZUa09uYnYzaTN2dlBPTzRQdUJGekRKWHF3S1ZrUURnQWNTckkwZE96WWRGcS9zWVEwbVZJM09VckFtdXpWSFB6NEtWZ3JXNksyR2Q1Q0Erd1RDQ1ZhN2hHdUQrNStXWThkUFVyQ0dtdTVJQ3lNZEJTdU9rWURuRUNHeTBaUlJvMGJKazA4K3FVUWZ4Sis1d01zS0R5WkNkUkh1YXdoV1pBVmR0bXhabW11SERoMmFHcHBySEYwVFRMRGlzNWt6WjZyUVk3UGdSV1hZNzRwN1pzeVlJWGZkZFpmS2RBd3ZiUHYyN2RYK1czTXhCR3RnNkNIQ2xWOTQ0UVVsZGx1MWFwVjZ5eXV2dkNLUFB2cG9hdDBRM1BEQ1ltdzR1c05jSUdhUnpSaENIbUxXam1LWFlBMW4reFNzZHN4VTVEb00yNFAzZjhLRUNaRnY4UGtWVmdVcnZrdjRQaUl5d1l2SDJvUVRxaFNzUGpkU0I3dFB3YXFIWU4zMTNIUHlSNzkrRGxvU3F5WUI3eEtJTlZTWWdqVmdEMnZnRkVkYUdPa29XQTJ2S3ZaaFJsTTZkT2lneENEMmNBWm1EallFS3ZhcnpwMDdOMVd3M24zMzNUSnQyclEwemJ6NDRvdlNwVXNYNWRXRWR4TWxtR0RGSGxoNGRiRy9GYUhENW1JSVZPeXpSWml5OGYvWUU5ZTFhOWVnZ2pWUStCcWlEZnQwRVhwc0ZBZ0xDRjlqSHkzNmovMjA0UW84dW52MjdJa0daOGhyN1JLczRXeWZndFdXcVlwWXladHZ2cWtpQkxCWEd0RUN5VjZzQ0ZhRS8yTXYrYUpGaTlTMmdXREZMUTlyT0tGNjlteEtUODg3TCtYZjlMQW11elZIUHo0SzFyVE1rdlVjVmdyVzZMOGJ2Q1A1Q0dRcVhsd3VYN1JJTXBVb1lXbHdGS3hoQkt1VmhaR1pzbHVMSkVzekhlS2lXTTVoaFVmd2wxOStrYjE3OTByKy9Qa3ROdzh2Sk1JYjRSVUpURWlFNDNCUUY0Nm53REVWaG9CRktDVEVwTGxZRmF3WFgzeXhTbTRVVEZoai95M0VManllRUx1R1lFWEdZM2kxek1Yd2NtM2N1RkZLbHo2WEpNVVFiZGlmV3IxNjlkUmJBZ1dyOGY4SU9XN1Jva1ZRWGhEVUVPdDJGRHNFYXlUYnAyQzFZNlpZUnlDQlNJSVYrOVh4UWdsbnNocEoxN3dnV0swS1ZZaFdRN0JDdi82blhXa0lKT0I1QXEyYjFaVUhtcDg3R3ptd3c3ci9Ka1R6c29HQzFmUG16ZzQ2U0NCajd0eFNzSE5ubFVrNG1uTmJLVmhEQ0ZhckN5TWRCU3YyamNIemcwUkY0YncrQ0hjMXdtSEJ5VmlNQnZPd2J0KytYWjNqV3E5ZVBYVTBqUjJDRmNJYTU4RUc4N0FpQzNEcjFxMVZBaWg0YTV3VXJJYUhGWHRiRVJidGRJbFhzRnF4ZmQwWEowN1BvYTcxaHhPc2VNblV2MzkvSlZieE1pcGNTZVRMdzkxNzlrdW5aOGJJbi92U2I1RUlGS1VVckxwYXR2L0hUY0VhZmc2akVheit0d2FPZ0FUU0VyQzBoelZHb1dxMFJNRWFSTEJHc3pEU1ViRENvNGlNdXlWS2xGRFpjblBtekJuMHU0dGtLQWdyeFJFdkhUdDJWR0dOblRwMVVwbHhFUjVzTHNaUk9ZYW9zME93SW9QeFJ4OTlwTTZCUlhpd3VUejExRk15Wk1nUWRVUU45cm82S1ZqWHJsMHJGU3BVa0twVnE2cGtVNEVGbm1wemtxZDRINFR4Q0ZhcnRrL0JHdThzOGY1Z0JFSUpWbncvOFJ4QkZuRXJVUjJKRkt3WUJ6eXMwMmN2bGhsekZxY21oVWdkMzFtUnMrZWxlRk1wV0duM2ZpVkF3VXJCNmxmYlpiK2RKeEEyUzNDY1FwV0M5ZUdIWmZ6NDhjcWJCNitlVWFKZEdPa29XREZtN01tRTV4QWlER0creUJ4c0ZKeVZpc1JLU0xDRVkxL1dyVnVuanAyQUZ4Vm5ydUs0R0p6ZmlnekFSakhFcFJGZWE0ZGdSYjhRaGd5UmpEQmlveHc5ZWxUS2xpMnJ6a3hGcHVEczJiTTdLbGpSTHRyNytlZWZaZDY4ZWVwNEc2UEEyNHo5cnhEUHhoRTc4VDVhWWhXczBkZytCV3U4czhUN3JRcFc3QkZIdUR5eWNnZDdPWVpuVUdDa1I2SUZhK3F6SllKd1ZkZHhEeXVOUHdRQlAzdnBkUDlOOFBQYzhRdEpBdkVTQ0hvT3EwMUNsWUkxaUdDTlpXR2txMkRGZWFiWVh3b1BKWTZuUVJLbE1tWEtxS051NEVYY3RtMmJFcWZ3bkpyM21pR0pBc0w2Y0w0cUZxQllXT0lhMUlNOW5wTW1UVkpJN1JDc1o4NmNVWm1IRnk1Y3FCYTA4QW9qc3pIQ2dYRjBEZmFXSXJ3WnhVa1BLK3BmdkhpeE9xNEhJaDNDRk1saTRIbUZ0eG5INmtEQUZ5MWFOTjVuaHJvL0ZzRWFyZTNydmppeFphSllTU29CUkVFZzZ6WmU0Q0RpQUM5NDhFekI5OE00bmlvVXJtRDczTjBTckphRTYzOFhNZWtTdndDQkJQd3NlblQvVGZEejNQR2JTQUx4RWpBTDFsajNxRWJxZ3pra2VON1VvWklwMHdXUmJ2SGw1Nm5uc05xOU1OSlZzQnJqeG41SExDZ2hVckhRekpJbGkxcHNZbjlvbXpadEpHdldyT2tNQnFJVTRjSVFiTmpuaW5CZENFZUVEeHZaZk8wUXJHZ1laNThPR2pSSWtFUUlJaHI5dzltdDNidDNsL3IxNjZmMnpXbkJpb1pXcmx3cEF3WU1FSGlSNGQyRjk3bHg0OFlxOFZPa1BYblJmT3RDQ1ZZN2JWLzN4VWswODhGckUwL0FiY0ZxUmJoU3NDYmVMcnplb3A5RmorNi9DWDZlTzY5L0w5Zy83eE9BWU4xOHh4MHhKVk95T3JyYTkzU1RmLzQ5clM1Zk5NUDVmREJXKzJYM2RhbUMxZTZLZFJlc1R2SmszYkVSaU9SaGphM1d0SGZwdmppeGd5SHJjSTZBVndSck9PRkt3ZXJjL1B1MVpqK0xIdDEvRS93OGQzNzl2ckRmM2lGdyt1QkIxWmxvc3Y1RzIzdGR2bU1VckNFc0k1WmpiYUkxTWw2ZldBSVVySW5semRhOFI4QnJnaldZY0gyK1p6dTV1dHk1WTdLOFI1RTlTalFCUHkvSUtGaTdwSnBMTW50L0V2MmRZSHNrWUJEdzgvTXhtbG1rWUtWZ2pjWmVmSDB0QmF1dnA0K2R0NEdBVndXcldiaml2M05rVDc5bHdvYmhzd3FmRXZEemdveUNsWUxWcDE4N2R0c25CUHo4Zkl3R3NXY0VhN0hMSzB1R0RPZXJ2dS80WmJtY09aTVNqeDJxWUkrbms0VWVWaWZwdWxNM0JhczczTm1xL3dqbzhnUG92NW5SczhlNjJHUGx5dWZtZDhXSzVKaHJYZVl1T1dhTG8vQWpBVjIrWXdrUnJGWU13R3NIMzFLd1dwazFmMTJUQ01GcWxVaW5aOGJJbXZXYjFlWGNzMmVWR3E5TEZBRmRmZ0FUeFpQdHhFZEFGM3VrWUkzUFRuZzNDZWhJUUpmbkl3VnJDT3VtWUUyK3J6MEZhL0xOS1Vma0RBRmRmZ0Nkb2NkYTdTYWdpejFTc05wdE9heVBCSktmZ0M3UFJ3cFdDdGJrL3piL04wSUtWbTJtbWdPTms0QXVQNEJ4WXVMdENTS2dpejFTc0NiSW9OZ01DU1FSQVYyZWo1NFJyRTNhOVpVRGg0NHFFL3B3UWovSmx5ZVhxK1pFRDZ1citCMXBuSUxWRWF5c05Ba0o2UElEbUlSVGw1UkQwc1VlS1ZnVGI3NmxTNWVXelpzM3l3TVBQQ0J2dlBGRzBBNFk1OUYvOU5GSGNzY2RkOWpXeVZkZmZWVWVlZVFSR1RSb2tEejExRk14MWZ2ZWUrOUovdno1NWRaYmI0M3BmdDdrYndKLy8vMlAxTG0zaHhyRUJlZG5sUG52RGZmM2dNTDAzak9DdGZuRC9lWFBmUWRVVjk4YjExY3VLcGpQVmVnVXJLN2lkNlJ4Q2xaSHNMTFNKQ1NnaTBCSXdxbEx5aUhwWW84VXJJazNYME93b3VYRml4ZkxqVGZlbUs0VFhoYXNsMTkrdVRScDBrUUdEeDZjZUhoczBYVUNSNCtka0lhdGU2bCtaTStXUmVaTUh1UjZuNXpxQUFWckNMSVVyRTZabkh2MVVyQzZ4NTR0KzR1QUxnTEJYN09pYjI5MXNVY0sxc1RiT0FScjl1elpaZHUyYlZLa1NCRlpzMmFOWEhEQkJXazY0bFhCZXVqUUljbWJONi8wNk5HRGdqWHhwdU9KRmlsWVhaZ0dlbGlqaC83Nzc3OUxzV0xGZ3Q2WU8zZHVxVml4b3JSdDIxYnV2LzkrY2VMOHhlaDc3TzRkRkt6dThtZnIvaUdnaTBEd3o0em8zVk5kN0pHQ05mRjJEc0Y2MFVVWHlUMzMzQ09QUC82NHZQRENDOUtyVjRySHlpaWhCQ3RFTHRZVjgrYk5rNzE3OTBxdVhMbmtoaHR1a0Q1OStzaTExMTRiY1REQlFvSmZlKzAxNmRDaGd5eFlzRUMyYnQwcUw3MzBrdno2NjYrU05XdFd1ZnZ1dTJYbzBLR3FuZUhEaDB2Mzd0M1R0REZnd0FEVk5zcWZmLzRwL2Z2M2w5bXpaOHNmZi93aFdCTldxMVpOZXZmdUxWV3FWRWx6MzV3NWM2UmZ2MzZ5ZHUxYVZYZno1czJWQUM1VHBvd1VLRkJBVnE1Y3FhNDMrb3UrZmZ6eHh6SjU4bVI1OE1FSFpjU0lFZXB6aENlLy9QTEw4dU9QUDhycDA2ZWxlUEhpY3RkZGQ2bHc1eHc1Y3FTMkNkYlRwazFUZld6WnNxVjgvZlhYNnY4Yk4yNGNrUmt2U0V1QWd0VUZpNkJnalI2NklWZ2hXdSs5OTk3VUN2Nzk5MS9adm4yN2ZQYlpaM0wwNkZGcDE2NmRUSmd3SWZvR2t1d09DdFlrbTFBT3h6RUN1Z2dFeHdDeVlsc0o2R0tQRkt5Mm1vMmx5aUJZOCtYTEo5OSsrNjFVclZwVjFxMWJwNFRicFpkZUdsYXc3dGl4UXlwWHJpekhqeDlYKzFETGxTc25PM2Z1bEhIanhzbStmZnVVNEt4ZXZYcllQZ1FUckcrOTlaYmFUMXUzYmwwNWVmS2tFcGdYWG5paFRKMDZWUWxET0NBbVRab2ttelp0a2c4Ly9GQjY5dXdwZDk1NXA5eDMzMzFTdG14WkpUSWhuaUZLRHg0OEtBOC8vTENVTDE5ZTBGLzBEWi9OblR0WGJycnBKdFczSlV1V3lNMDMzNnlFS2NhQi9iRFRwMDlYd2hVaDBsZGNjWVZpZzRJOXZsaFBZcjI1ZXZWcTllOUtsU3BKZ3dZTlZOMGRPM1pVVFBCM0NPenZ2LzllM256elRWWC9GMTk4a2NvQ1k1Z3laWXE2N3NDQkExS2pSZzFwMUtpUjZpZExkQVFvV0tQalpjdlZGS3pSWXpRRUt4NDhpeFl0U2xjQjNsN2hMUi9FS3g0Y2dXL1ZvbS9SMzNkUXNQcDcvdGo3K0FrNEVXbHg5dXpaK0R2R0drZ2dEQUVLVnYrYWg5Zm5Eb0kxVDU0OHNtTEZDdVZKeEpvSkNZdysvL3p6c0lLMVRaczJTamhDTkdJUHFWRisvdmxucVZDaGdscHZMVnUyTEdyQmFuaHpTNVFvSWIvODhvdGt5cFJKMVlIbmJNbVNKV1gvL3YyQ1VHQTh5eUVrcjcvK2VpVmF6WHRZSDMzMFVYbjk5ZGRWK3hDUVJvRm9oYkRHdnRmbHk1ZXJQOWVwVTBmbXo1K3YvdCs0RnQ3UjJyVnJ5OEtGQzVXSU53UXJSQ2JFWnVIQ2hWWG9ORVN1VVI1NjZDSEZFQ0kzWjg2Y3FYOXYyclNwZlBEQkIvTFRUeitsQ2xLSVhvaGZ0QTNIU29ZTUdmeHI0QzczbklMVjVnbnc0eUxKRDN0WUl3bFdUQ01lWWs4Ly9iUU1HVEpFN1hOQVFmakxaWmRkSnFOR2pSSThkUEdtYnRldVhlb3Q0ei8vL0tQZTR1R2hpYjluenB4WlBYeng1cXhGaXhZMlcwWmlxMHVFWURYYXNITmt6ejc3ckFvN1lpR0JlQW40OFZrYzc1aDV2LzhKZUYzMDJFV1lIbGE3U0Zxdnh5eFljZGNUVHp5aHdsb1Jvb29RWEpUQWtHQ0lSK3dkelpJbGl3cTNEWHl1d21PSU1GZDRXdUVkRFZXQ2VWaU50aEJHaSt6QjVuTGJiYmNwZ1FmUEtVSjhnd2xXOUsxZ3dZSnl5U1dYQ0VKOUF3dldmUEN3SGpseVJJWHB3aE1LY1F5aGJTNjRwbDY5ZW1rRXE5RzM5dTNiQzBLWHc1VlRwMDRwa1kwMUtNS05aODJhSlEwYk5sUzNJSXg0NHNTSjhzNDc3NlNKRHJRK2E3elNJRURCYXJNdCtIR1JsQ3lDRlcvWjhPYkxMSHJ3SUVQWXg5OS8vNjFDTVM2KytHTHAzTG16Wk11V1RlMGgrUFRUVDFWNFNhMWF0ZFJERFErcDc3NzdMcTdVNnphYlZFelZVYkRHaEkwM0pSRUJQejZMa3dnL2h4SWpBUXJXR01FNUU0V3UrUUFBSUFCSlJFRlVlSnNUenhKME45RVJHNEdDOWZEaHczTGxsVmVxZm16WXNFR0Z4Z1lLVm9oVUpHZ0tESFUxY0J1Q2JPblNwY29ER290Z1JZZ3RRblROQlVmcWZQTEpKeXFzRjJ1NFlJSVZrWFZ3U2tRcUNIM0dHQ0M4SVNRaEtNMEZheitNM2V4aE5UaGcvMnpYcmwzVFhIL3MyREcxM3hhaHl6Z202TVNKRTJrK054OEpaUENCUi9aLy8vdGZwSzd5OHpBRUtGaHROZzhuSG14T1A5U1NSYkJDZU9JaFkzNWJXS3BVS2JXZkFaNVh2UGt5eXZ2dnY2ODIyOFB6Q2dGckZPeUp4VU1YRytueG9JWW4xbytGZ2pYMHJPR2hoNUlqZTFaZlRPM3UzYnZWMjFra2JMRHk0K3lMUVFYcEpONTZZdzhUM3RaamtZSTlTdGdYTlg3OGVIVzFrWndEKzZqd3BoelpMYkdmQ05FVXdiajQ4Vm5zMTdsanYrMGpRTUZxSDB1N2FuTGlXWUsrT2IyMkN4eC9vR0RGNThaYUNKRmxZOGFNU1NkWUVYMkdLRFhzdTV3NWMyWTZwRWplaFBzUWFodnVmTlJ3SGxZNEd5RHN6TVdLWURYNmhyMmxnUjVhYzEzWFhYZWQvUFhYWDRMeHc1T01OV0pnT2YvODgxV1lzQkVTYkFqV3dMNmRPWE5HN1luRjcxU3paczFVQXF0Q2hRcEp4b3daMVY1VmlPOWdnblhqeG8ycWZaYllDV2dwV08xZUdKbnhPL0ZnYy9xaDVtZkJpdjBIRUtUWTdJNnNjVWE0QjhKN1VZeHp4NUFnQUcvWWpJSnNidGlQOGR0dnY2bFFGM05CK0FlOHRPYXdqdGkvWXU3Y0dVcXcybW43ZmdzSnhzTnV4cHdsTW1QMlloblFzNjFjWGM0ZlB4N0dHMXBkRW9vaGNRWkVLc0xCRUtabEZDUmNRMlpHWkg5RXdVdWxtalZycWpBMDdCa0svQjc3OFZuc3p0T0NyWHFKQUFXcmwyWWpwUzlPUEV1OElsalJqL3IxNjZ2c3Z4QnJFRlo0T1dxSUxyd3d4VDdPVUI1V25NNkE5WmVSeUNuVTdEa2hXQTBQS3dUcnFsV3J3aG9POHBzZ2t5OGk2K0M1TlJlOEJNVnhQOEU4cklHQ0ZZbWJJRml4bHhkclNIT0JZd1Jod1JTc3pueUg5eDg4TEhjKytLeXFQRy91SFBMUnhBSE9OT1NCV3RPZHcyclh3c2c4TmljZWJCU3NJdUdPdFRINHd5T0REZS9JOUdZVUNGWTgxQkR5WVM0SWcwRUlUTGd5ZHV4WXdZWitQNVpJSGxZN2JOOHZndFVzVkk4ZVQvR3VqdXJYMFRlQ0ZZc0I3RFZDQ0JJeUtpWjdDV1diQ050SFlneHpNZDd1STJrSU1rMzY2Vm5zTjA5L3N0dWRWOFpId2VxVm1UalhEeWZXZGFqZDZiVmRJTWxnSGxaY3MyWExGcFVrQ0dzblJLd2doNGRaZE9HbElKd0FlUEVmeUFMZVN5UzZSSUlrSkhRS1Zad1FyR2dMeVpCd1FnUWk0Z0xiUjZTT2tTd0oyOElRbVlNOEpjajZheTc0WFlFZ3R5SllqY3pHbzBlUFZyL0w1b0pqZnBEOGlZTFZtZS93N2ozNzVaNUhVMFJxb2Z4NVpkcXJ6empUa0FkcXRTeFlvMTBZK1dtUkZHd2UvT1JoeFJzeWJLUTNDdnFPTEcxWFhYV1Yyb2VLc0F4endRTWE2ZEloZU0wRmUxbng1aERuZG9VcVNKbHVUdmZ1QVJ1MjNJVllCV3MwdHU5MXdScE1xQm9BL1NSWUxVOTZrbHdZU3JBR0c1NlJhQTFIRXlCRG94K2V4WDcxOUNlSmVYbCtHQlNzM3B1aVpCZXNJUDc4ODg5TDM3NTkxWXMvSkNFeWl5NGtIc0p4Z2VhLzRSNEl2MnV1dVVhSlBSeHRFNjdFSzFpUjJSZFpqU0VTSVJhTkFxZkNLNis4b3M2VHhibXlSb0ZZeGJvUVliN0dubFVJVXRTemZ2MzZWTWNHb3ZTd3RRUmp0aUpZRWZtRGhGQmR1blNSa1NOSHByWUhUeXpFUHBKRXZmdnV1eXBVR01XSWtHSkljUHpmYXdyV0lLRm4wUzZNL0xCSUNtY3FmaEtzb1k2MUNUVytVSUxWOExBYUdlamkveXA1cTRaWUJXczB0dTlWd1JwT3FGS3dlc3RPZy9VbUdzR0thN0ZRd0pFSWdmdURuRmhreHVNUjhidW4zL3VXa3h3OXBHRDEzanc2OFN6QktPTjVuc1JDS1pTSEZYWEJBMW14WXNYVXlET3pPTVhKQ2tnWUJFOG1CQ09PaXRtNmRhc2dDZzBKaDdDZkUrTFFTY0c2Wjg4ZUZab01qeW1TSU1HWmdLMWQrRHVPMVVISUx5S1FzRVpFZnlHUTRYVkY5bUFjVzRNeVk4WU10ZThVUitaQTZCcEpwbEFYdHBzZ3REalNIbFlrWEFKSEpLenEwNmVQMm9hR2NHcWN2WW9YcUFpbmhvQi84c2tubFJDbVlJM0ZVb1BmUThGcVViQ0dXeGhSc05wbmtLRnFzbktzVGJCN1F3bFc0N3lzd0gxeXFBT0hPOE5yaTAzNGZpMTJDdFpRdHU4MXdScE9xQnJIWjU1M1hzcU0wc1BxWGN1MklsaHhKTldYWDM2cHZLcFlHSmdUcWhramMyS1JHY3NDazU1Kzc5cWFGM3RHd2VxOVdYSGlXZUkxd1lyKzRJeDdSRm1oQkhwVGtTc0V1VDJ3L1FMZVN5U2toREI3NXBsblZLYmhTQ1ZlRHl2cVIyS2xvVU9IS25HTnJNTEk0SXVDYUxuKy9mdXJpRG1JVkJ4aGMrT05ONm9rZnZES21ndk9SRVVkeUY4Q0FkeXFWU3MxTHR3RGIrdzMzM3lqTGcrVmRBbWZZYjhza25YaTN3Z3poaUFlT0hDZ0ZDMWFWSkFzQ3Q1bXRJdHpXaWxZSTFtRzljOHBXQ01JVmlzTEl3cFc2d1lYNjVWMkMxWWpNeDZTdHVEdEdES09vaUE4QkFrSTFxNWRLNy8rK3F0NmlQbXgyQ0ZZSTltK1Z3U3JWYUVLMFdvSTFyTklwT0hIaVUyU1ByZHVWbGNlYUg0dW9aSjVXSkVFSzc2VENQUEhTeVdFc0dFZnEvSDk5ZEt6bUo3K0pESFdCQStEZ2pYQndDMDBseXlDMWNKUXRid0UzbEtjOVJvc0laT1dRRHc2YUFyV01JTFY2c0xJUzR1a1dPeE14NUJnZUVwd0hoZk9ZY1diT0J5SmcwVXd6dFhDcG5tSU1ieDE4MnVKVjdCYXNYMHZDRlk4d0RvOU0wYiszSGNnM1ZRRmlsSUtWdTlZY3p5Q0ZhUEE4VlBJRW95d0xueHY4V1lkKzlLOThDeTIrZ0lGZmFXbjN6czI2WldlVUxCNlpTYk85WU9DMVh0ekVrdVBrTUJ3MHFSSk1tTEVpRFJub2lLaFlhZE9uWlRudFh2MzdyRlV6WHNTUUlDQ05ZS0gxY3JDeUF1THBIaHNSVWZCQ2w0SUs4R0RDMmRjNGp5dkRCa3lxSDBZQ1BVd05zekh3OVhOZStNVnJGWkVnUmNFSy9vSmdUQjk5bUtaTVdleEhEdCtNaTMyc3lKbnowdnhwbEt3dW1tUmFkdU9WN0FhdFNIeUFudUljTFllWGphNStTeTJLbFJwaDk2eFEvYUVCTUk5aXd3NkZLekpZU2ZmZmZlZDJ1T2FOMjllRlZLTW93NFIxb3VqRFBIZmE5YXNDWnZwT0RrbytIY1VGS3dXOTdDR1d4aTV1VWl5dy9UOElGanRHS2RPZGRnaFdDT0pBcThJVnFPZmtZU3J1bzU3V0QzL05ZZ1VFaHc0QUJ4cWo4UWZnWm5BblZoa2h0ckRTaysvNTgyS0hTU0JvQVFvV1BVeURPeFJSVGJoSDM3NFFlVXJLVml3b01xTVBHREFBQ1ZhV2J4THdDeFlpeFVwSUZOZTZ1WGR6c2JaTTh2SDJvUnFKOVRDaUlJMXpwbmg3YllUc0ZPd29uUEJiTjlyZ3RXU2NQM3ZJb1ppMm01eXRsVVlUTERpL0Q5a1o4UlJVNEVGb2NDblRwMVNpVURjZkJaSGVtRkNUNzl0SnNLS1NNQTJBaFNzdHFGa1JTVGdLSUh0Ty8rVSt6c05WbTJVS2w1RUpvNUkzdkJ0UzRJMWxvV1JtNHNrTzZ5REhsWTdLSHFyamxnRWE3UzI3MVhCYWtXNFVyQjZ5MTdOdlFrbVdKRjFFUm05RWNKdkxrYmtDODdGbXpsenBxdUMxWXJkQ1RaV285RFQ3MTBEZExsbjNNUHE4Z1FFYWQ2SmFBMDBFMHZXY2UvUllZOUlJREVFTnYyMlV4N3NucElabW9KVlJLV2pqblpoUk1HYUdHTmxLOVlKeENKWW83Vjlyd3ZXY0FLQ2d0VzZMU1g2eW1DQ2RlblNwWUxENnlGS1M1VXFwYnEwYjk4K2FkdTJyU3hjdUZDZEE0Z3pCTDMwTEE3cmNmMnZvN1REUkZ1WDk5dWpZUFhlSEZHd2VtOU8yQ1A5Q0ZDd0J1eGhqV1ZoNUtWRlVpd21UQTlyTE5TOGZVOHNnalZhMi9lTFlBMG1YSi92MlU2dUxsZmEyNU9vV2U4MmJOaWdEbUpmc21TSkN1OHRXN2FzMUtoUlF4MEFqek1BTzNic0tPdldyWk16Wjg0SW5sbElpSWNNMzdqbmlpdXVTRWZMaVVWbUxCNlJjTUtWZ2xVekk3Y3dYQXBXQzVBU2ZJa1R6eElNSVpiblNZS0h6dVpJd0RNRXRCU3NkaStNS0ZnOVk4L3N5SDhFUWdsV08yM2ZiNExWTEZ6eDN6bXlaNlc5SkRFQkp4YVo4U3d3Z3dsWEN0WWtOc0FZaDBiQkdpTTRCMjl6NGxsQ3dlcmdoTEhxcENTZ3BXQjFjaWFkZUxERnMwaXlNbFo2V0sxUTh0YzFrVHlzZG96R3I0TFZqckd6RHU4VDhPcXoyQ3hjNmVuM3ZoMGx1b2NVcklrbUhyazlKNTRsRkt5UnVmTUtFakFUb0dDMTJSNmNlTEJSc05vOFNScFVSOEdxd1NSemlHRUplUDFaRE9HS1FrOC9EZGxNZ0lMVmUvYmd4TE9FZ3RWNzg4d2VlWnNBQmF2TjgrUEVnNDJDMWVaSjBxQTZDbFlOSnBsRDlMVmc1ZlNSUURBQ0ZLemVzd3NuMW5VVXJONmJaL2JJMndRb1dHMmVIeWNlYkJTc05rK1NCdFZSc0dvd3lSeWlMUVIwRVFpMndHSWxqaFBReFI0clZ6Nkhjc1VLeDdIRzFZQVQ2em9LMXJpbWhEZHJTTUFzV0srODdCSjVaVkNYcEtXUTdoeFd0MGJhNlpreHNtYjladFc4RjVKdWNBK3JXNWJnWEx1SkVLeFdlOTk3eUVUNVp2bGFkZm1BSG0ybHhyVVZyTjdLNjBqQWNRSzZDQVRIUWJJQld3am9ZbzhVck13U2JNc1hocFZvUTJEOXIxdmwwVjZqMVhncmxpMGxvL3MvbHJSanAyQU5NYlVVck1sbjh4U3N5VGVuSEpFekJIUVJDTTdRWTYxMkU5REZIaWxZS1ZqdC91Nnd2dVFtc0dyZEp1bnk3RmdLMWtST2MvY0JyOHJ5TmIrb0pvZjBma2lxWG4xbElwdFAxeFlGcTZ2NEhXbWNndFVSckt3MENRbm9JaENTY09xU2NraTYyS09mQkt0VlE5Tmw3cXp5NEhVa1lDY0JDbFk3YVZxc0s5b1F5VVdMRmduK2NhcjA2OWRQVmUzMFhsbW4rczk2MHhNd0JPdE5OOTBrTld2V2RBd1Iyb2xVb3JYM1NQWHhjeEt3a3dBWG1YYlNaRjN4RXRERkhpbFk0N1VVM2s4Q2VoR2dZSFZodnFOZHdEdHgzbVd3WVZPd3VtQU1EalhwSlp1SjF0NGRRc0pxU1NBb0FWMEVBcWZmSHdSMHNVY0tWbi9ZSTN0SkFsNGhRTUhxd2t4RXU0QjMyc05xSUxEaUxYTUJGNXVNZ1lDWGJDWmFlNDlodUx5RkJHSW1vSXRBaUJrUWIwd29BVjNza1lJMW9XYkZ4a2pBOXdRb1dGMllRaTdnWFlET0psMGpRSHQzRFQwYnRrQkFGNEZnQVFVdjhRQUJYZXlSZ3RVRHhzWXVrSUNQQ0ZDd3VqQlpYTUM3QUoxTnVrYUE5dTRhZWpac2dZQXVBc0VDQ2w3aUFRSzYyQ01GcXdlTWpWMGdBUjhSb0dCMVliSzRnSGNCT3B0MGpRRHQzVFgwYk5nQ0FWMEVnZ1VVdk1RREJIU3hSd3BXRHhnYnUwQUNQaUx3M2FxZnBlY0xyNmtlVjZsNHVRenIrN0NQZWg5ZFZ6MXpEaXNYOE5GTkhLLzJOd0hhdTcvbkw5bDdyNHRBU1BaNVRKYng2V0tQRkt6SllyRWNCd2traHNCWDMvOGtmWWUrb1JxclZxVzh2TkN6WFdJYWRxRVZDbFlYb0xOSkVxQmdwUTE0bVlBdUFzSExjOEMrblNPZ2l6MVNzTkxxU1lBRW9pRkF3Um9OTFp1dTdUZHlraXhjdWxyVjFyZnpmWEpMOVd0c3FwblZrSUQzQ0ZDd2VtOU8yQ1A5QkFMbjNCOEVLRmo5TVUvQmVxbkwzUGwzaHRoelB4T2dZSFZoOWdhTm1TcHpGeTFYTGZmczJFTHExN3JXaFY2d1NSSklEQUVLMXNSd1ppdXhFZUFpTXpadXZNc1pBcnJZSXoyc3p0Z1BheVdCWkNWQXdlckN6Rkt3dWdDZFRicEdnSUxWTmZSczJBSUJYUVNDQlJTOHhBTUVkTEZIQ2xZUEdCdTdRQUkrSWtEQjZzSmtVYkM2QUoxTnVrYUFndFUxOUd6WUFnRmRCSUlGRkx6RUF3UjBzVWNLVmc4WUc3dEFBajRpUU1IcXdtUlJzTG9BblUyNlJvQ0MxVFgwYk5nQ0FWMEVnZ1VVdk1RREJIU3hSd3BXRHhnYnUwQUNQaUpBd2VyQ1pGR3d1Z0NkVGJwR2dJTFZOZlJzMkFJQlhRU0NCUlM4eEFNRWRMRkhDbFlQR0J1N1FBSStJa0RCNnNKa1ViQzZBSjFOdWthQWd0VTE5R3pZQWdGZEJJSUZGTHpFQXdSMHNVY0tWZzhZRzd0QUFqNGk4TVhYSzJYQWkxTlVqMnZkVUVtZWZiSzFqM29mWFZjOWN3NHJCV3QwRTJlK2VzT0dEWExsbFZkS3UzYnRaTUtFQ2JGWHhEc1RSb0NDTldHbzJWQU1CSFFSQ0RHZzRTMHVFTkRGSGlsWVhUQXVOa2tDUGlidzJjTHZaY2pZZDlVSTZ0YXNJazgvZHErUFJ4Tys2eFNzRGsvdDIyKy9MZmZkZDEvUVZqSmx5aVJGaXhhVlcyNjVSWHIxNmlVbFM1YU1xVGNVckRGaGMvVW1DbFpYOGJQeENBUjBFUWcwQkg4UTBNVWVLVmo5WVkvc0pRbDRoUUFGcXdzemthd2VWa093VnF0V1RhcFhyNTZHN0lFREIyVDU4dVd5YXRVcXlaMDd0M3o5OWRkU3ZuejVxT2xUc0VhTnpQVWJLRmhkbndKMklBd0JYUVFDamNBZkJIU3hSd3BXZjlnamUwa0NYaUZBd2VyQ1RJd1kvNzdNbXI5TXRkemxvYVp5ZTUxcUx2VEMvaVlOd2Zyc3M4L0tjODg5RjdTQjRjT0hTL2Z1M2FWUm8wWXljK2JNcUR0QndSbzFNdGR2b0dCMWZRcllBUXBXMm9CUENGQ3crbVNpZ25SVGw3bno3d3l4NTM0bVFNSHF3dXk5L09aSDhzR2NKYXJsam0zdWtHWU5iM0toRi9ZM2FVV3cvdjMzMzVJelowN0prU09IL1BYWFgyazZNV1BHREJrOWVyU3NYcjFhL3YzM1g3bjAwa3ZsM252dmxXN2R1a25tekpuVnRhRUU2NTkvL2luOSsvZVgyYk5ueXg5Ly9LRzh1UEQwOXU3ZFc2cFVxWkttblowN2Q4ckFnUU9WWU1aOStmTGxrd29WS3Nnenp6d2pOV3JVU05lbmwxNTZTYlY3NU1nUktWeTRzRFJzMkZBZ3lpKzg4TUxVYS8vNTV4OFpNV0tFZ01HbVRadFVmMUZueDQ0ZHBVV0xGdmJEOWxHTi9VWk9rb1ZMVjZzZTkrMThuOXhTL1JvZjlaNWRUWFlDWEdRbSt3ejdhM3k2MkNNOXJQNnlTL2FXQk53bVFNSHF3Z3pvTEZoUG5UcWx4Q3FFMy9idDIxUHBEeHMyVEhyMDZDRTMzWFNURW5qbm4zKytMRml3UUtaTm15WjE2OWFWVHovOVZNNDc3N3lnZ25YdjNyMUtsQjQ4ZUZBZWZ2aGhGV3E4WThjT0dUZHVuT0N6dVhQbnFucFJJRG9yVmFva3YvLyt1eEtUVjF4eGhTQmMrYlhYWHBPdFc3ZktGMTk4SVRWcjFsVFhUcDQ4V1ZxM2JpM1hYMys5M0hQUFBaSTllM2I1OGNjZlpmejQ4WEw1NVplcjhPWU1HVExJMmJObnBYSGp4cXFQMk1OYnExWXQxUTdFNjNmZmZTZURCZzJTcDU1NnlnVkw4MGFUeVJvQzd3MjY3RVc4QkhRUkNQRnk0djJKSWFDTFBWS3dKc2FlMkFvSkpBc0JDbFlYWmxKbndRb3ZLTHlUYmR1MmxZa1RKeXI2RUkvd3BqWm8wRUErL1BCREpVeU4wcmx6WitWMWhlY1Vud2Z6c0Q3NjZLUHkrdXV2eTdKbHk2U3k2VmNRb3JWY3VYSktYR0wvTE1yU3BVdWxhOWV1MHFSSkV5V1FqYkoyN1ZybEViM3JycnNFbmw2VTIyNjdUZWJQbnkrSERoMlNiTm15cFY0TElmcldXMi9KSzYrOElwZGRkcG04Ly83NzByeDVjeGsxYXBTZ3YwYUJseGhpRnlJWFhsOTRjblVzRkt3NnpycC94cXlMUVBEUGpPamRVMTNza1lKVmJ6dm42RWtnV2dJVXJORVNzK0g2WkJlczhHWWFYa29ERjd5ZjhEWisrKzIzVXJwMGFWbTBhSkhLR296eThzc3Z5eE5QUENGVHAwNVYza2x6Z1pDc1hidTJFcG5ZL3hvb1dPSGRMRml3b0Z4eXlTVXlaODZjZExQVHBrMGI1V0dGeHhPZTNjQnkrdlJwUVRndjZzbVZLNWRVckZoUlZxeFlvUzY3L2ZiYlZkandWMTk5bFM2SmxMa2VpRndJN2Q5KyswMnlaTW1TcGdsNGJpSFFaODJhcFVLSmRTd1VyRHJPdW4vR3JJdEE4TStNNk4xVFhleVJnbFZ2Tytmb1NTQmFBbWJCMnFqMjlkSzF3OTNSVnVHYjZ6MXpyRTJ5QzlaUUZnRmgrZUNERHlyeGFmWTJQdkxJSS9McXE2K0dOYVJtelpvcFQyYWdZTVVlMUlzdXVpaWlFYTVidDA3S2xpMnJya09HWW5odGx5eFpva0tHSVZhTkFzR0tQYlFvOE5qZWV1dXRnbjIzZGVyVVVmK05mK0NKTlJlY0M0dCtoU3RqeDQ0VmVJSjFMQlNzT3M2NmY4YXNpMER3ejR6bzNWTmQ3SkdDVlc4NzUraEpJRm9Dbjh6N1JrYTlsaElCZVZlREcrWHhCNXBFVzRWdnJxZGdkWGlxUWlWZE9uSGloQktMU0xLMGZ2MTZ1ZmppaTlQMHBGV3JWdkxPTys4b0R5cENlSU9WL1BuenEzRGZRTUdLQkVjSXk4VytWT3dWRFZXdXUrNDZ5Wk1uajN6KytlY3F0TGhRb1VJcW1kTlZWMTJWNm5tRlp4amkweENzcU92WFgzK1ZrU05IeWllZmZDSzdkKzlXMVVPd0loR1Q0VVhHZVBBWndwWkRsVEpseXFpd1p4MExCYXVPcys2Zk1lc2lFUHd6STNyM1ZCZDdwR0RWMjg0NWVoS0lsc0QwMll0bDdGc2ZVN0JHQ3k2ZTY1UGR3eHJzV0JzSXZqdnV1RVA5ODlGSEg2WEJaM2hZUC83NFl4V0dHNjZFOHJCQ3NDSUpVcVJ5ODgwM3k4S0ZDNVVvaFRmVktCRFZDQm1HR0RVTFZ1TnplR0h4OXc4KytFQjVaK0YxWGJObWpVcmFaSGhZRWZhTTdNUXNhUWxRc05JaXZFeEFGNEhnNVRsZzM4NFIwTVVlS1ZocDlTUkFBdEVRb0dDTmhwWk4xK29vV0lFT1NZdysrK3d6SlZnaFhJMHlac3dZZWZ6eHg2Vm56NTR5ZVBEZ05KU1JWZGc0Q2djZkJFdTZWS0JBQVRsNjlLaEtiQVF2cXJrZzVCZWZHNlZFaVJKeStQQmgyYjkvZjVycjVzMmJwN0lSbTBPQ1EwMjNrV1JweUpBaEtuRlQwNlpObFpERjJPclZxNWZtTm1RZ3hqRSt5SHFzYTZGZzFYWG0vVEZ1WFFTQ1AyYUR2ZFRGSGlsWWFlc2tRQUxSRUtCZ2pZYVdUZGVPZjN1V3ZQdnhsNnEyOWkwYlNNc210OXBVczd2VlJEcUhkZVBHamNxRENRR0owR0FJT1JTY2l3b2hpWDJ0SzFldVRFM0doTThHREJpZ3prekZFVGM0VnpWVWxtQms3TzNWcTVlODhNSUxxUkFnVmhIeWkxQmlKRDFDcVZxMXFrcXF0Ry9mUHNtYk42LzZHOFFyeENyMnVTSjVFOW80ZHV5WVhIdnR0U3JMNzRRSkU5S0FSUlpoN0tsRnFIQ1hMbDFTc3dRalJCakM5NElMTGxEWEk2RlQvZnIxQlltakVGb2NMT21UdXpPV21OWXBXQlBEbWEzRVJrQVhnUkFiSGQ2VmFBSzYyQ01GYTZJdGkrMlJnTDhKVUxDNk1IOXZUdnRjSmsyZnExcHUzYXl1UE5BOHJWZk9oUzdaMG1Ra3dZcEdldmZ1clFRb1BLcllCMm9VZUN0eFZtbkpraVZWeG1DSU80VHV2dnZ1dTRJd1htVDZ6Wmd4WTFEQnVtZlBIblVPSzg1MWZlQ0JCOVNacTd0MjdWS0puT0IxUmZaZ1pCcEdHVEZpaE5xN2ltekU3ZHExVThJVkliNGRPblJRKzFTUnlSaFppeUUwMFNlY3VRclBNTzdIT2F5Yk4yOVdaN2FpTHovOTlKTksrSVJ3WVdRQXhqbXNOOTU0b3pxTDllVEpreXJyTVJJM1BmZmNjeXBUc0s2RmdsWFhtZmZIdUhVUkNQNllEZlpTRjN1a1lLV3Rrd0FKUkVPQWdqVWFXalpkcTdOZ1BYNzh1TnIzQ2E4cXhCeThtRWFaUG4yNkVvL1lHNG93WUhoZGNTeE5wMDZkVXM5QkRlWmh4ZjFJZW9RelhwSDRDQ0lWZ2hmaUVRTFozQWJPUnNWMWt5ZFBGZ2hkSkVPQ1FNYTVzQWpwaGVCRkh5RTJJVlJmZlBGRmdSRGZzbVdMNmxPeFlzVlVwbUNFQWhjdlhqeTE3L2dNWWhqSm81QUlLa09HRE1xN2kzTlo3N25uSHBzc3g1L1ZVTEQ2Yzk1MDZiVXVBa0dYK2ZUN09IV3hSd3BXdjFzcSswOENpU1ZBd1pwWTNxcTFaQldzTHFCa2t6NGdRTUhxZzBuU3VJdTZDQVNOcDloWFE5ZkZIaWxZZldXVzdDd0p1RTZBZ3RXRkthQmdkUUU2bTNTTkFBV3JhK2pac0FVQ3VnZ0VDeWg0aVFjSTZHS1BGS3dlTURaMmdRUjhSTUFzV0Z2Y2NiTjBhTlhJUjcyUHJxdWVPWWVWZ2pXNmllUFYvaVpBd2VyditVdjIzdXNpRUpKOUhwTmxmTHJZSXdWcnNsZ3N4MEVDaVNId3prY0w1UFYzNXFqR2tpbi9UekI2Rkt5SnNTbTJRZ0pwQ0ZDdzBpQzhURUFYZ2VEbE9XRGZ6aEhReFI0cFdHbjFKRUFDMFJEUXlkbEh3UnFOWmZCYUVyQ0pBQVdyVFNCWmpTTUVkQkVJanNCanBiWVQwTVVlS1ZodE54MVdTQUpKVFlDQzFZWHAxUW02QzNqWnBNY0lVTEI2YkVMWW5UUUVkQkVJbkhaL0VOREZIaWxZL1dHUDdDVUplSVdBVHRxSkhsYXZXQjM3b1JVQkNsYXRwdHQzZzlWRklQaHVZalR0c0M3MlNNR3FxWUZ6MkNRUUl3RUsxaGpCeFhPYmVlTndzbWU2aW9jVDcwME9BaFNzeVRHUHlUb0tYUVJDc3M1ZnNvMUxGM3VrWUUwMnkrVjRTTUJaQWhTc3p2SU5XcnRPWndtNWdKZE5lb3dBQmF2SEpvVGRTVU5BRjRIQWFmY0hBVjNza1lMVkgvYklYcEtBVndoUXNMb3dFeFNzTGtBWGtYdnV1VWVtVFpzbU8zYnNrSXN2dnRpZFRtallLZ1dyaHBQdW95SHJJaEI4TkNWYWQxVVhlNlJnMWRyTU9YZ1NpSm9BQld2VXlPSy9JWmtGNjVrelorVEREeitVdDk1NlM5YXRXeWU3ZCs5V3dJb1VLU0kzM0hDRGRPdldUU3BXckpnRzRudnZ2U2Y1OCtlWFcyKzlOWDY0WVdxZ1lIVVViOGpLS1ZqZDRjNVdyUkhRUlNCWW84R3IzQ2FnaXoxU3NMcHRhV3lmQlB4RllQemJzK1Rkajc5VW5XN2Zzb0cwYk9Lc1puQ1RqbWVTTGlXellHM2V2TG04Ly83N1VyeDRjV25hdEtsY2RORkZjdWpRSWZuaGh4OWszcng1a2lWTEZ2bnNzOCtrUm8wYXFiWncrZVdYUzVNbVRXVHc0TUdPMmdjRnE2TjRLVmpkd2N0VzR5U2dpMENJRXhOdlR4QUJYZXlSZ2pWQkJzVm1TQ0JKQ0x6ODVrZnl3WndsYWpRZDI5d2h6UnJlbENRalN6OE1DbGFIcDNiaHdvVnk4ODAzeTAwMzNTUUxGaXlRODg4L1AwMkxzMmJOa3NhTkcwdWxTcFZrMWFwVjZqT0kyYng1ODBxUEhqMG9XQjJlSDdlcXA0ZlZMZkpzMXdvQlhRU0NGUmE4eG4wQ3V0Z2pCYXY3dHNZZWtJQ2ZDRkN3dWpCYnllcGhIVHQyckR6MjJHTXlac3dZNmRpeFkxQ3liNy85dHZLNlF0aU9IRGxTdW5mdm51YTZBUU1HU0o4K2ZkVGZ2di8rZXhrMGFKQjg5ZFZYY3Zqd1lSVldETThzcmlsUm9rU2EreEI2alB2Z3ZUMTQ4S0NVTGwxYTJyWnRxL3BoQ09kZ0hsYUVNRGRyMWt3Kyt1Z2ptVHg1c3JScTFjb0ZpMGp1SmlsWWszdCsvVDQ2WFFTQzMrZEpsLzdyWW84VXJMcFlOTWRKQXZZUW9HQzFoMk5VdFNTcllKMDVjNmJjZnZ2dDZwOFpNMmFrODdBR1F0cTBhWlBhNzlxelowKzU4ODQ3NWI3NzdwT3laY3RLbVRKbFZBaHg5ZXJWSlYrK2ZQTHd3dzhya2J0bHl4YUJLTTZhTmF1c1g3OWVMcnp3UWxYbDNyMTc1ZXFycjVhalI0L0svZmZmcjhLUkZ5MWFKTE5uejVaMjdkckpoQWtUMUhYQkJPdVRUejRwbzBhTmt1SERoMHZYcmwyam1rZGViSTBBQmFzMVRyektIUUs2Q0FSMzZMTFZhQW5vWW84VXJORmFCcThuQWIwSlVMQzZNUC9KS2xqLytlY2ZxVnExcWdyM1JkZ3ZQSnkzM0hLTFhIbmxsWExlZWVjRkpmM3R0OS9LOWRkZnIwU3JlUS9ySzYrOG9vVG1pQkVqcEdiTm1xbjN3bnY3K09PUHk4c3Z2Nnk4dVNpUFB2cW80UHE1YytkS25UcDFVcTl0MkxDaHpKa3pSOWF1WFN2bHlwVkxKMWdOanpDOHZFT0hEblhCRXZSb2tvSlZqM24yNnloMUVRaCtuUi9kK3EyTFBWS3c2bWJaSEM4SnhFZUFnalUrZmpIZC9jbThiMlRVYXpQVXZZMXFYeTlkTzl3ZFV6MWV2QW1odTcxNjlaSTMzbmhEVHB3NG9ib0lUeWhDZVJzMWFxUkVZN1pzMlZLN0hrcXdCbzROWXZqMDZkT3lkT2xTSllMaERZVlg5T3paczFLZ1FBRlY1N1p0MjlJSVkzaGs4YmNLRlNxb0xNUm1EeXRFTlJJOXRXelpVbVUwRGlXb3ZjalliMzJpWVBYYmpPblZYMTBFZ2w2ejZ0L1I2bUtQRkt6K3RWSDJuQVRjSUVEQjZnTDF6eForTDBQR3ZxdGFybHV6aWp6OTJMMHU5TUxaSm84ZE95WmZmdm1sZlBQTk4yb1A2dkxseXdXaUUrSnk2dFNwcVVmWWhCT3NVNlpNVVY3V0gzLzhVZTFMTlpkT25UckppeSsrS0x0MjdaS2lSWXRLN2RxMVZSYmljTVVRckI5Ly9MRVNxdkFDSTNRNE1EbVVzMlQwcTUyQ1ZiODU5OU9JZFJFSWZwb1RuZnVxaXoxU3NPcHM1Unc3Q1VSUGdJSTFlbVp4MzZHRFlBMkVkT0RBQVVIQ0pZVGY0bWdiN0YrRjF6T1VZSVdYRmdtWEtsZXVyQklubFN4WlVqSm56cXpPZG4zd3dRZkZFS3liTjI5V0NaWVEvb3NIWGFzM0FBQWdBRWxFUVZRc3hGWUVhODZjT2VYSWtTT1NPM2R1V2IxNmRib0VUbkZQTUN0SVE0Q0NsUWJoWlFLNkNBUXZ6d0g3ZG82QUx2Wkl3VXFySndFU2lJWUFCV3MwdEd5NlZrZkJhcURyMXEyYjJwZUtwRXgzM1hWWFVNRjY4dVJKbFd3SmdoYkpsWExreUpGS0h2dFU2OVdybHlwWTRjbkY1MGpRQkUrdUZjRUtieXhFTUJJOVhYZmRkYkpreVJMSm1ER2pUYlBMYWdJSlVMRFNKcnhNUUJlQjRPVTVZTjhvV0pQQkJ2Z3NTWVpaNUJpOFNtREUrUGRsMXZ4bHFudGRIbW9xdDllcDV0V3V4dDB2ejV6RG1veUNGZnRMa1FUcDk5OS9sMDgrK1VReVpNZ1FkTUtlZi81NTZkdTNyOW8zMnJwMTY2Q0NkZXZXcmNxamlqMm15Q0pzTG9ibjFmQ3c0ck9DQlFzS2pxZjU0NDgvNUlJTExraTkvSmRmZnBINTgrZExyVnExZ2laZGV2cnBwMVdpSi9TbmYvLytjUnNZS3doT2dJS1ZsdUZsQWx4a2VubDI5T3ViTHZaSUQ2dCt0czBSazBBOEJIUmFTMUt3eG1NcEZ1NkY1eE1lMEI0OWVzakFnUVBUZVMwUnZvdU12emd6RlNIQk9INEdlMXV2dmZaYWVlS0pKMlQwNk5HcUZTUnJ5cDQ5dTlwanVuTGx5dFNXRWI2TDBOK2RPM2RLaHc0ZDVOVlhYMVdmdFcvZlh1MTFmZjMxMTFXNHNGRmF0R2doNzczM25qb2k1NXBycmttWEpSaDdhbSs0NFFhVjFYamh3b1VxTVJTTC9RUjBlc2pZVDQ4MU9rMUFGNEhnTkVmV2J3OEJYZXlSZ3RVZWUyRXRKS0FMQVozV2toU3NEbHYxamgwN2xDQkZkdDVpeFlwSmd3WU5wRkNoUXVwOFZIZzdrUlFKSW5Ia3lKSFN1WE5uMVpzOWUvWkk0Y0tGVlRJbVpQNjk5TkpMVmFnd01ncmpIRlVJVTlTSjBHQWNhZlBPTys5STQ4YU4xYm1zT0lvRy80MzlzVldxVkpGOSsvYXBNMXNoaEJjdlhxenV4N21za3laTlVtMEZPNGYxMTE5L1ZXSVdJY2hJN3BRblR4NkhLZWxYdlU0UEdmMW0xLzhqMWtVZytIK205QmlCTHZaSXdhcUhQWE9VSkdBWEFaM1draFNzZGxsTm1IcVF6R2pjdUhFeWMrWk0yYkJoZ3h3NmRFZ3laY3FrQkN6Mm1UN3l5Q01xa1pLNUlMa1N4T2ZmZi8rdFBzZHhOWHYzN2xXaUZpRzkrUHYvL3ZjLzZkZXZuNm9ENGJ2RGhnMVRlMWZoSFlWNHhmRTFmZnIwVWFJWUFoYnRZWjhxUW9lTi9hbkJCQ3Y2TVhIaVJPV1piZHEwcVV5ZlBqMEJsUFJxUXFlSGpGNHpteHlqMVVVZ0pNZHNKZjhvZExGSEN0Ymt0MldPa0FUc0pLRFRXcEtDMVU3TFlWMGtZSkdBVGh2bExTTGhaUjRpb0l0QThCQnlkaVVNQVYzc2tZS1ZYd01TSUlGb0NGQ3dSa1BMcG11VE1lbVNUV2hZVFJJUzBDa1ZlUkpPWDlJUFNSZUJrUFFUbVNRRDFNVWVLVmlUeEdBNURCSklFQUVLMWdTQk5qZnp4ZGNyWmNDTFU5U2ZhdDFRU1o1OXNyVUx2V0NUSkpBWUFoU3NpZUhNVm1Jam9JdEFpSTBPNzBvMEFWM3NrWUkxMFpiRjlrakEzd1FvV0YyWXY2KysvMG42RG4xRHRWeXRTbmw1b1djN0YzckJKa2tnTVFRb1dCUERtYTNFUmtBWGdSQWJIZDZWYUFLNjJDTUZhNkl0aSsyUmdMOEptQVZyMzg3M3lTM1ZyL0gzZ01MMDNqTjdXQ2xZazliR09MQWdCQ2hZYVJaZUpxQ0xRUER5SExCdjV3am9ZbzhVckxSNkVpQ0JhQWowR3psSkZpNWRyVzRaMEtPdDFMaTJRalMzKytwYUNsWmZUUmM3bXl3RUtGaVRaU2FUY3h5NkNJVGtuTDNrRzVVdTlrakJtbnkyeXhHUmdKTUVlZytaS044c1gwdkI2aVRrd0xycFlVMGtiYmJsTmdFS1ZyZG5nTzJISTZDTFFLQVYrSU9BTHZaSXdlb1BlMlF2U2NBckJDaFlYWmdKQ2xZWG9MTkoxd2hRc0xxR25nMWJJS0NMUUxDQWdwZDRnSUF1OWtqQjZnRmpZeGRJd0VjRUtGaGRtQ3dLVmhlZ3MwblhDRkN3dW9hZURWc2dvSXRBc0lDQ2wzaUFnQzcyU01IcUFXTmpGMGpBUndRb1dGMllMQXBXRjZDelNkY0lVTEM2aHA0Tld5Q2dpMEN3Z0lLWGVJQ0FMdlpJd2VvQlkyTVhTTUJIQkNoWVhaZ3NDbFlYb0xOSjF3aFFzTHFHbmcxYklLQ0xRTENBZ3BkNGdJQXU5a2pCNmdGall4ZEl3RWNFS0ZoZG1LenZWdjBzUFY5NFRiVmNwZUxsTXF6dnd5NzBnazJTUUdJSVVMQW1oak5iaVkyQUxnSWhOanE4SzlFRWRMRkhDdFpFV3hiYkl3Ri9FNkJnZFdIK1ZxM2JKRjJlSGF0YXJsaTJsSXp1LzVnTHZXQ1RKSkFZQWhTc2llSE1WbUlqb0l0QWlJME83MG8wQVYzc2tZSTEwWmJGOWtqQTN3VE1nblZJNzRlazZ0VlgrbnRBWVhydm1YTllLVmlUMXNZNHNDQUVLRmhwRmw0bW9JdEE4UEljc0cvbkNPaGlqeFNzdEhvU0lJRm9DSFFmOEtvc1gvT0x1bVZVdjQ1eWRiblMwZHp1cTJzcFdIMDFYZXhzc2hDZ1lFMldtVXpPY2VnaUVKSno5cEp2VkxyWUl3VnI4dGt1UjBRQ1RoTG85TXdZV2JOK013V3JrNUFENjZhSE5aRzAyWmJiQkNoWTNaNEJ0aCtPZ0M0Q2dWYmdEd0s2MkNNRnF6L3NrYjBrQWE4UW9HQjFZU1lvV0YyQXppWmRJMERCNmhwNk5teUJnQzRDd1FJS1h1SUJBcnJZSXdXckI0eU5YU0FCSHhHZ1lIVmhzaWhZWFlET0psMGpRTUhxR25vMmJJR0FMZ0xCQWdwZTRnRUN1dGdqQmFzSGpJMWRJQUVmRWFCZ2RXR3lLRmhkZ000bVhTTkF3ZW9hZWpac2dZQXVBc0VDQ2w3aUFRSzYyQ01GcXdlTWpWMGdBUjhSb0dCMVliSW9XRjJBemlaZEkwREI2aHA2Tm15QmdDNEN3UUlLWHVJQkFycllJd1dyQjR5TlhTQUJIeEdnWUhWaHNpaFlYWURPSmwwalFNSHFHbm8yYklHQUxnTEJBZ3BlNGdFQ3V0Z2pCYXNIakkxZElBRWZFYUJnZFdHeTF2KzZWUjd0TlZxMWZPVmxsOGdyZzdxNDBBczJTUUtKSVVEQm1oak9iQ1UyQXJvSWhOam84SzVFRTlERkhpbFlFMjFaYkk4RS9FM2drYWRIeWM4YnQ2dEJqQnZZU2NxV0tlSHZBWVhwdldmT1lkMzAyMDU1c1B0dzFkVlN4WXZJeEJIZGt4WTZCMFlDRkt5MEFTOFQwRVVnZUhrTzJMZHpCSFN4UndwV1dqMEprRUEwQk5wMUhTYWJ0KzFTdDB3WTFrMUtseXdhemUyK3VwYUMxVmZUeGM0bUN3RUsxbVNaeWVRY2h5NENJVGxuTC9sR3BZczlVckFtbisxeVJDVGdKQUVLVmlmcGhxaWJIbFlYb0xOSjF3aFFzTHFHbmcxYklLQ0xRTENBZ3BkNGdJQXU5a2pCNmdGall4ZEl3RWNFS0ZoZG1Dd0tWaGVnczBuWENGQ3d1b2FlRFZzZ29JdEFzSUNDbDNpQWdDNzJTTUhxQVdOakYwakFSd1FvV0YyWUxBcFdGNkN6U2RjSVVMQzZocDROV3lDZ2kwQ3dnSUtYZUlDQUx2Wkl3ZW9CWTJNWFNNQkhCQ2hZWFpnc0NsWVhvTE5KMXdoUXNMcUduZzFiSUtDTFFMQ0FncGQ0Z0lBdTlrakI2Z0ZqWXhkSXdFY0VLRmhkbUN3S1ZoZWdzMG5YQ0ZDd3VvYWVEVnNnb0l0QXNJQ0NsM2lBZ0M3MlNNSHFBV05qRjBqQVJ3UW9XRjJZTEFwV0Y2Q3pTZGNJVUxDNmhwNE5XeUNnaTBDd2dJS1hlSUNBTHZaSXdlb0JZMk1YU01CSEJDaFlYWmlzN1R2L2xQczdEVll0Rnl0U1FLYTgxTXVGWHJCSkVrZ01BUXJXeEhCbUs3RVIwRVVneEVhSGR5V2FnQzcyU01HYWFNdGlleVRnYndMM1BURlFkdXphcXdZeGVmUlRja25SUXY0ZVVKamVlK1ljMXQxNzlzczlqdzVRWFMyVVA2OU1lL1dacElYT2daRUFCU3R0d01zRWRCRUlYcDREOXUwY0FWM3NrWUtWVms4Q0pCQU5nZVlQOTVjLzl4MVF0N3czcnE5Y1ZEQmZOTGY3NmxvS1ZsOU5GenViTEFRb1dKTmxKcE56SExvSWhPU2N2ZVFibFM3MlNNR2FmTGJMRVpHQWt3UW9XSjJrRzZKdWVsaGRnTTRtWFNOQXdlb2FlalpzZ1lBdUFzRUNDbDdpQVFLNjJDTUZxd2VNalYwZ0FSOFJvR0IxWWJJb1dGMkF6aVpkSTBEQjZocDZObXlCZ0M0Q3dRSUtYdUlCQXJyWUl3V3JCNHlOWFNBQkh4R2dZSFZoc2loWVhZRE9KbDBqTVA3dFdmTHV4MStxOXR1M2JDQXRtOXpxV2wvWU1Ba0VFdEJGSUhEbS9VRkFGM3VrWVBXSFBiS1hKT0FWQWhTc0xzd0VCYXNMME5ta2F3VGVuUGE1VEpvK1Y3WGZ1bGxkZWFCNVBkZjZ3b1pKZ0lLVk51QmxBaFNzWHA2ZDhIM1RaZTc4TzBQc3VaOEpVTEM2TUhzVXJDNUFaNU91RWFCZ2RRMDlHN1pBZ0l0TUM1QjRTY0lJNkdLUDlMQW16S1RZRUFra0JRRUtWaGVta1lMVkJlaHMwalVDRkt5dW9XZkRGZ2pvSWhBc29PQWxIaUNnaXoxU3NIckEyTmdGRXZBUkFiTmcvWEJDUDhtWEo1ZVBlaDlkVjNtc1RYUzhlRFVKMkVLQWd0VVdqS3pFSVFLNkNBU0g4TEZhbXdub1lvOFVyRFliRHFzamdTUW4wS1JkWHpsdzZLZ2E1ZXhKQXlWSDlxeEpPMkxQQ05iOUJ3L0xuUTgrcTBEbnpaMURQcG80SUdtaGMyQWtRTUZLRy9BeUFWMEVncGZuZ0gwN1IwQVhlNlJncGRXVEFBbEVRNkRCL1UvTHNlTW5LVmlqZ1JidnRVZVBuWkNHclh1cGFySm55eUp6SmcrS3QwcmVUd0tlSlVEQjZ0bXBZY2RFUkJlQndNbjJCd0ZkN0pHQzFSLzJ5RjZTZ0ZjSVVMQzZNQk1VckM1QVo1T3VFYUJnZFEwOUc3WkFRQmVCWUFFRkwvRUFBVjNza1lMVkE4YkdMcENBandoUXNMb3dXUlNzTGtCbms2NFJvR0IxRFQwYnRrQkFGNEZnQVFVdjhRQUJYZXlSZ3RVRHhzWXVrSUNQQ0ZDd3VqQlpGS3d1UUdlVHJoR2dZSFVOUFJ1MlFFQVhnV0FCQlMveEFBRmQ3SkdDMVFQR3hpNlFnSThJVUxDNk1Ga1VyQzVBWjVPdUVhQmdkUTA5RzdaQVFCZUJZQUVGTC9FQUFWM3NrWUxWQThiR0xwQ0Fqd2hRc0xvd1dSU3NMa0JuazY0Um9HQjFEVDBidGtCQUY0RmdBUVV2OFFBQlhleVJndFVEeHNZdWtJQ1BDRkN3dWpCWkZLd3VRR2VUcmhHZ1lIVU5QUnUyUUVBWGdXQUJCUy94QUFGZDdKR0MxUVBHeGk2UWdJOEltQVhydktsREpWT21DM3pVKytpNjZwbHpXQ2xZbzVzNFh1MXZBaFNzL3A2L1pPKzlMZ0loMmVjeFdjYW5pejFTc0NhTHhYSWNKSkFZQXJYdjZTYi8vSHRhTmJab3hxakVOT3BTSzU0UnJILy8vWS9VdWJlSHduREIrUmxsL252RFhVTENaa25BZVFJVXJNNHpaZ3V4RTlCRklNUk9pSGNta29BdTlrakJta2lyWWxzazRIOEN1andiTVZPZUVhem9qRTdnL2Y4MTRRamlJVURCR2c4OTN1czBBVDZMblNiTStxTWhvSXM5VXJCR1l4VzhsZ1JJUUpkbkl3VXJiWjBFWENKQXdlb1NlRFpyaVFEczB5Z1BOSzluNlI1ZVJBSk9FZEJsVVViQjZwUUZzVjRTU0U0Q3Vqd2JQU2RZdVVoS3ppOFVSNVdld0twMW0yVDEyazNxZzBybFM4dlY1VW9URXdtUUFBbVFRQkFDYjcwL04vV3ZiZTZ1bTdTTXhvOC9ON1FPSFpKam1GelhKY2M4Y2hUZUpLRFQ5OHRUSWNIZU5BZjJpZ1JJZ0FSSWdBUklnQVJJZ0FSSWdBUkl3QTBDRkt4dVVHZWJKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNFUWxRc0VaRXhBdElnQVJJZ0FSSWdBUklnQVJJZ0FSSWdBVGNJRURCNmdaMXRra0NKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pCQ1JBQVZyUkVTOGdBUklnQVJJZ0FSSWdBUklnQVJJZ0FSSXdBMENGS3h1VUdlYkpFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0VRbFFzRVpFeEF0SWdBUklnQVJJZ0FSSWdBUklnQVJJZ0FUY0lFREI2Z1oxdGtrQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkJDUkFBVnJSRVM4Z0FSSWdBUklnQVJJZ0FSSWdBUklnQVJJd0EwQ0ZLeHVVR2ViSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDRVFsUXNFWkV4QXRJZ0FSSWdBUklnQVJJZ0FSSWdBUklnQVRjSUVEQjZnWjF0a2tDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKQkNSQUFWclJFUzhnQVJJZ0FSSWdBUklnQVJJZ0FSSWdBUkl3QTBDRkt4dVVHZWJKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNFUWxRc0VaRXhBdElnQVJJZ0FSSWdBUklnQVJJZ0FSSWdBVGNJRURCNmdaMXRra0NKRUFDSkVBQ0pFQUNVUkRvMDZlUERCOCtYRTZlUEpsNjE1SWxTNlJ2Mzc2eWV2VnFPWDM2dE5Tb1VVT0dEQmtpVjExMVZSUTErK1BTOHVYTFM4MmFOV1hNbURFeGQvaU9PKzZRVHo3NUpQWCtyRm16U29rU0phUmV2WHJTcFVzWEtWYXNXTXgxODBZU0lBSG5DRkN3T3NlV05aTUFDWkFBQ1pBQUNaQ0FMUVFDQmV1YU5Xdmt1dXV1a3laTm1zaUREejRveDQ4ZmwzNzkrc20yYmR0a3c0WU5raTlmUGx2YWphYVNzV1BIeXZMbHkrV3R0OTZLNWpaTDE5b2xXTmV1WFNzVEpreFFiUjQ3ZGt5SmZmei9nUU1IWk5hc1dVcjBzNUFBQ1hpTEFBV3J0K2FEdlNFQkVpQUJFaUFCRWlDQmRBUUNCU3YrLzRNUFBwQjE2OVpKaGd3WjFQWDRid2k3anovK1dHNi8vZmFFVTJ6YnRxMmNPWFBHMDRKMTY5YXRTcVNheTlHalI2VisvZnJ5eXkrL3lPYk5teVZuenB3Slo4Y0dTWUFFUWhPZ1lLVjFrQUFKa0FBSmtBQUprSURIQ1FRTENRN3NNZ1RYRlZkY0liTm56NVlHRFJxa0c5R3FWYXZrbW11dVVZTDJ4UmRmbEpVclY4b0ZGMXdnYmRxMGthRkRoNllLM3hVclZzalRUejh0dUI0aHlHWExscFdCQXdmS3JiZmVxdXFFSjdWLy8vN3krdXV2Uy92MjdlWCsrKzlYbnRYRml4ZW50b2w3SzFXcUpPKzk5NTZNR0RGQ2Z2NzVaOG1SSTRlMGFORkMxWVZ3M0ZEbG0yKytrWTRkTzZwN0VMS0w2NTk5OXRrMEljSG9PL3I0d3c4L3lOOS8vNjM2Tm1yVUtDbGV2SGpJZWhFU0hFeXc0Z2EwaFhHKy9QTEw4dGhqajZrNndyVXhmLzU4cVZPbmppeGJ0a3g1dW8zeS9mZmZTOVdxVldYdTNMbnFjeFlTSUlINENWQ3d4cytRTlpBQUNaQUFDWkFBQ1pDQW93UkNDVmJzWFVWbzY2Wk5tNlI3OSs3eTExOS9DVVJUcGt5WjB2VUg0YkFWS2xTUU1tWEt5SlFwVTZSeTVjb3laODRjdWZQT08rV1ZWMTVSb2NVUXFCZGZmTEZjZi8zMU1tREFBRlhQK1BIalplTEVpY29EV2JSb1VTVlVPM2Z1cks3cDJyV3JFc2tJUWI3bGxsdmtzc3N1VTZJdmI5NjhTamhESkQ3MTFGUFNybDA3MmJoeG96ejAwRU5LZUtMOVlPWFFvVU55NmFXWEtyRUxBUW94aXZzaGdDRjJzWWQxeDQ0ZHlwTmNyVm8xdFdmMzFLbFRxaCs3ZHUwU2pERno1c3hCNnc0bldISEQ1WmRmcnZiL1RwOCtQV0liNTU5L3ZoUXBVa1NKZmZUQktEMTY5SkJKa3lhcHZtVE1tTkZSbTJEbEpLQUxBUXBXWFdhYTR5UUJFaUFCRWlBQkV2QXRnVkNDZGRHaVJWS3JWaTAxTG5oVklaWXV2UERDb09NMEJDdUVLT296Q2p5QkVLcEk0dlRQUC8rb1BiQVFZMFk5UjQ0Y2tWeTVjc20wYWRQazdydnZWbnMrNFZuRm5zK0dEUnVtMWdOUEk4U3JzWWNWZ2hiaUVYMDB5anZ2dkNQMzNYZWZiTisrWFFuandESjE2bFJwMmJLbENtK0d4eE5sNTg2ZEtpSFNvNDgrcWdRclBLc1EyUENXNXNtVFIxMERFUXR2N09USms5WDl3VW9rd1ZxN2RtM0Y0YXV2dnJMVUJ2cXpZTUVDK2ZYWFgxT2JLMVdxbE54MjIyMUt0TE9RQUFuWVE0Q0MxUjZPcklVRVNJQUVTSUFFU0lBRUhDTVFTckRDSTRrRVRFaTJoREJmQ002RkN4Y0dGYTJHWUlWWEZhTEtLTWlRQ3pFS3J5QUt3bXlSa1JoN1BROGVQQ2huejU2VlAvLzhVNG5FaHg5K09GV3c3dHUzTDAwN1pzR0t2YXdRcTBnRTFhdFhyOVMySUQ0aFZFT0ZMV09jR0FmMmxab0xCQ3YyNVVLdzNuenp6UUlQNTd4NTg5SmNBKzh1Uk9td1ljTmlFcXlHOEFjL0syMGdCQnJlWW5BdFY2NmM4Z0lqNUhycDBxWEsrOHhDQWlSZ0R3RUtWbnM0c2hZU0lBRVNJQUVTSUFFU2NJeUFsVDJzaHc4ZmxwSWxTNnI5bjloakdsZ013UXFoZGVPTk42WitqTHBIamh5cE1nMGpiQmVod2hCcytEczhyUkNmRUptQmdoWGlHTUxSS0diQkNzR0o1RVg0UERBMEZpRzhDQ3RHQ0hKZzZkU3BrOERMdW5mdjNqUWZYWG5sbFNya0dJSVYvWU00eFA1YmMwSDQ4TDMzM2l0dnYvMTJUSUlWNGM3WUN3c3Z0WlUyREM2UFBQS0lPbDZvZCsvZXF1Ky8vZmFiWTNiQWlrbEFSd0lVckRyT09zZE1BaVJBQWlSQUFpVGdLd0tCZ2hWSmZaQzR5Q3c4TVNBSXJkS2xTNnRrUjZFRWE2QjM4NGtubmxBWmgrSDlmUDc1NTJYUW9FRnFMMnlXTEZsVUZRamZSVEtqYUFRcnhCenVod0RGL3RYQVVxaFFJYlhQTmJEQUc0c2tUUkMxNWxLNGNHRzU2NjY3bEdDRmNQMzMzMy9WM3RyQUFwRU00Um1zaEFzSi92cnJyOVdSTmhDN0NDbTIyZ2JHaHhCaUpHaENPRFQyQXlOSkZBc0prSUI5QkNoWTdXUEpta2lBQkVpQUJFaUFCRWpBRVFLQmdyVlJvMFlxMFJLOHBvWUhFM3RONFFtRmh6V1lhREk4ckVqT2hLekFScm5oaGh1VStQM2lpeStVVi9XMTExNlRQWHYycEg2T3V1QTlIRGR1bk1DYmFPeGhEZVpoUmVJaWVDaFJFQmFML2lDSmtWSGdCZjM5OTk5VllxVmdCZmNpa1pGNUQrdFBQLzJra2lGaFhNWWVWbHlITUdpemx4VjdTU0hXaldOK0F1c1BKVmh4Qml1RVA3ekNTQ3lGUkZQWUoydWxEWVQvSXZrVDlyTENPNHUrSWlFVUN3bVFnSDBFS0ZqdFk4bWFTSUFFU0lBRVNJQUVTTUFSQW9HQ0ZVZS9RR1JCaEhYbzBFR1FMUmllU1Fnb2lDWWsvd2tzaG1DRnFIenV1ZWZVOFNzNDR1YkpKNTlVV1h0YnRXcWxFaWsxYnR4WTNuampEYWxYcjU1ODlORkhhcThvam05cDBxU0pFcnJ2di8rK1Nyb1VLRmh4bGltOHRFaDhoRDJuQ0QxdTFxeVp2UERDQzhyemlKQmplRytSM0FuaU10aDVwL0RzSXF3Wm5tSWpBekRFSTBLVm16WnRxZ1FyaENxeUhVTzBRM3huejU1ZDdjSEZmbGw0TzgzSHpKZ1pnQlVZUUhDalFEei8rT09QOHRKTEx5bXhDcTkxbFNwVjFHZFcyOEQrWGlSN2dyY1lYbVhVeDBJQ0pHQXZBUXBXZTNteU5oSWdBUklnQVJJZ0FSS3duVUN3UGF6SXZnc3hoK1JJRUcxWFgzMjFDdW1GRUExV0RNRUt3UW52SVpJTHdiT0twRXZ3b0JvRlI3TzgrZWFiU3BBaU9STkNnWEhFREFSazI3WnRWVHZCQk90bm4zMm1NZ0FqMHk1Q2pPdldyU3Z2dnZ1dURCNDhXR1VlenAwN3Q4Q2JpLzlIK0d5b0FrOHZRbTBoYWlFR0lYTFJQcnlzOFBLaUlERlV6NTQ5bFpER1BsbDROY0VJb2psVWdXRDk1Sk5QVWorR1p4cDdkSEVQeG4vSkpaZWt1ZFZxRzkyNmRWTXZDOUJQSE1IRFFnSWtZQzhCQ2xaN2ViSTJFaUFCRWlBQkVpQUJFdkFrQVVPd3dndFp2WHAxVC9hUm5TSUJFaUNCUUFJVXJMUUpFaUFCRWlBQkVpQUJFdENBQUFXckJwUE1JWkpBRWhLZ1lFM0NTZVdRU0lBRVNJQUVTSUFFU0NDUUFBVXJiWUlFU01DUEJDaFkvVGhyN0RNSmtBQUprQUFKa0FBSmtBQUprQUFKYUVDQWdsV0RTZVlRU1lBRVNJQUVTSUFFU0lBRVNJQUVTTUNQQkNoWS9UaHI3RE1Ka0FBSmtBQUprQUFKa0FBSmtBQUphRUNBZ2xXRFNlWVFTWUFFU0lBRVNJQUVTSUFFU0lBRVNNQ1BCQ2hZL1RocjdETUprQUFKa0FBSmtBQUpPRXpBaVNSTlRaczJsWU1IRDhxQ0JRc2M3ajJySndFU1NCWUNGS3pKTXBNY0J3bVFBQW1RQUFtUUFBbllTT0RBZ1FNeWJkbzB1ZU9PTytTaWl5NnlwV1lLVmxzd3NoSVMwSW9BQmF0VzA4M0JrZ0FKa0FBSmtBQUprSUI3QkNoWTNXUFBsa25BcndRb1dQMDZjK3czQ1pBQUNaQUFDWkFBQ1RoSUlEQWt1SG56NW5MMjdGbXBYNysrREI0OFdIYnQyaVZseXBTUnNXUEh5blhYWFpmYWswbVRKc25Rb1VObHk1WXRVckprU2VuZXZiczg4TUFENm5PellGMnhZb1ZVcVZKRmxpOWZMcFVyVjA2OXYzVHAwc3FyKyt5enowcmh3b1dsVjY5ZTZoK2puRDU5V3YyOVhidDJNbWpRSU5tN2Q2OTA3ZHBWRmkxYUpQdjI3Wk9ycnJwSzlhOW16Wm9PMG1IVkpFQUNpU0pBd1pvbzBteUhCRWlBQkVpQUJFaUFCSHhFSUZDd3RtclZTcjc4OGt0cDNMaXhqQmd4UWpKa3lLQ0U1WTRkTzJUOSt2VnFaQjk4OElGQTJFSkkzbnp6emJKa3lSSWxKdDkvLzMwbFZxTVJyTU9IRDFkQzk5dHZ2NVdmZi80NWxkd1hYM3dodDk1NnEyellzRUV1dSt3eXVmYmFhK1hRb1VNeWZ2eDRKV1RIalJzbkV5Wk1VRUs0ZlBueVBpTE9ycElBQ1FRalFNRkt1eUFCRWlBQkVpQUJFaUFCRWtoSElKaGduVFZybHV6ZXZWdXlaczJxcnA4eVpZcmNmLy85Y3V6WU1jbVdMWnRVcTFaTmljWVpNMmFrMXRlelowOHBVcVNJZE9yVUtXckIrczAzMzBqMTZ0WFRlR0VmZWVRUldiTm1qU3hkdWxUbXpwMHI5ZXJWazRVTEY2WjZWTStjT1NObHk1YVZHalZxeU91dnY4NlpKUUVTOERrQkNsYWZUeUM3VHdJa1FBSWtRQUlrUUFKT0VBZ21XT0hwL09HSEgxS2JtejE3dGpScTFFaCsvLzEzS1ZxMHFHVEpra1g2OWVzbkVLbkJTclFlVnRRQjhWbTdkbTBaUFhxMFFJeEMvUGJ2MzE4ZWV1Z2g5ZStCQXdmS2lSTW41THp6emt0dHNuMzc5cko2OVdvbGRGbElnQVQ4VFlDQzFkL3p4OTZUQUFtUUFBbVFBQW1RZ0NNRWdnbldyVnUzeXRkZmY1MU9zQ0lzT0YrK2ZKSTllM1o1K2VXWDViSEhIck5Oc0NMOGVNaVFJV3JQTER5dTJFUDd4eDkvU083Y3VhVmJ0MjRxUERsejVzeHAydnYzMzM5VlptTUlhUllTSUFGL0U2Qmc5ZmY4c2Zja1FBSWtRQUlrUUFJazRBaUJhQVhyeFJkZnJBUnI3OTY5MHlSSk1uZk83R0dGcHhiSmxnS1RMc0ZUMjZKRkM4RWVWaFFrVXNMZjRNMmRPWE9tN04rL1g5NTU1eDMxMllBQkE1U0hkZFdxVmVrWVpNeVlVZTF4WlNFQkV2QTNBUXBXZjg4ZmUwOENKRUFDSkVBQ0pFQUNqaENJUmJCaXZ5bEVLL2FXR3FWejU4NHF1ekJDZXMyQ2RlUEdqU3JMOFB6NTgxVVNKWlE5ZS9Zb3oraVRUejZaS2xqeDkyYk5ta25PbkRubHM4OCtVL3RtamV1TlBhem9hN2x5NVZMYjNMWnRteFFzV0RCMXI2MGpnRmdwQ1pCQVFnaFFzQ1lFTXhzaEFSSWdBUklnQVJJZ0FYOFJpRVd3SWtzd1JPa3p6enlqOXJZdVc3Wk11blRwb2tRbXZLWm13WHJxMUNtQlZ4WWh2bSs4OFlZY1BYcFVPblRvSU1nQzNLWk5telNDRmNLMFljT0dLcUVUd3BLUm9SZ0ZSOXpnYUJ3STRoZGZmRkdLRnkrdTJ1ellzYVB5OGlKa21JVUVTTURmQkNoWS9UMS83RDBKa0FBSmtBQUprQUFKT0VJZ0ZzR0tqcno2NnF0cVh5bjJ0VUpBd3NPS3pMNG9ac0dLLzRmSEZKL3YzTGxUaWhVcnBzSjdodzBicHM1MUhUbHlaT3E0a0d3cFQ1NDg2bG9rV2pJWGVHVWhURC85OUZPVnJSaG52eUxwRW9ReUN3bVFnUDhKVUxENmZ3NDVBaElnQVJJZ0FSSWdBUkpJYWdJUXRyZmZmcnZ5cmlKTE1Bc0prSUErQkNoWTlabHJqcFFFU0lBRVNJQUVTSUFFZkVVQW50ZVZLMWVxSTJ4YXRteVpKa3pZVndOaFowbUFCR0ltUU1FYU16cmVTQUlrUUFJa1FBSWtRQUlrNENRQjdJUDk2cXV2cEhuejV2TFNTeStsTzc3R3liWlpOd21RZ0RjSVVMQjZZeDdZQ3hJZ0FSSWdBUklnQVJJZ0FSSWdBUklnZ1FBQ0ZLdzBDUklnQVJJZ0FSSWdBUklnQVJJZ0FSSWdBVThTb0dEMTVMU3dVeVJBQWlSQUFpUkFBaVJBQWlSQUFpUkFBaFNzdEFFU0lBRVNJQUVTSUFFU0lBRVNJQUVTSUFGUEVxQmc5ZVMwc0ZNa1FBSWtRQUlrUUFJa0VEdUJCUXNXU08zYXRXWFpzbVhxVEZPajdOKy9YMXEzYmkyelo4K1dWYXRXU2FWS2xhSnVwRStmUGlwYjc4bVRKOVBkKzhvcnI4aWpqejRxTFZxMGtLbFRwMFpkTjI0STFuZWN3WHJvMEtIL3QzZC9JVkUxWVJ6SEg1VEFsa2dvTXZzcmdSY1ZkR2VhMWtXQ1ZFYm9SYko2SVJJRmdhZ29VaGtFQnBFVmhabVVVSlNJVjZaMEVZYW9TS0FTVVFnUnBGbUpnaUlXUWhpQ0VVTDY4Z3lzckdmUDJoNDcyNnJ2ZHk3WDNUa3puK1BOajVsNVpxRS9qOGNqTzNmdU5NKzVjdVdLckZ1M3p0R3pqaHc1SWhzMmJKQ09qbzZGMzdXMXRjbjE2OWRsWUdEQTNQbDY4dVJKcWFxcWtzMmJOenZxbXk4amdJQzdBZ1JXZHozcERRRUVFRUFBQVFRUWlMaUFYZWg3Ky9hdGVMMWVpWTJObFE4ZlBqTEVwaWNBQUFWUVNVUkJWSVFsc0tha3BKZ2dPelEwSk4rK2ZaT05HemM2dGdnV1dETXlNcVM0dU5qME56TXpZNm9IMzdsenh3VGsrL2Z2TzNxT05iQjJkblpLWm1hbW5EMTcxbHlmby9lOVZsUlVTSEp5c2duM05BUVFpSndBZ1RWeTlqd1pBUVFRUUFBQkJCQUlpNEJkNk12T3poWU5sT25wNlpLV2xyWmtZUDMrL2J0TVRVMUpZbUppd1BpQ3JiQisrdlJKOXUzYko3Mjl2U2I4MWRiV3lybHo1NExPVDFjeUV4SVN6RXFuZndzV1dNK2NPU1AzN3QxYjlOMmNuQng1L2ZxMVRFeE1CRHhucVRsWUErdng0OGRsZW5yYXJFajdXbDFkblpTVWxKalByV01NeTB1alV3UVFzQlVnc1BLUGdRQUNDQ0NBQUFJSXJERUJ1OUEzUGo1dXR0RytlZk5HVWxOVGx3eXNEeDgrbEtkUG4wcDNkM2ZJZ1ZWWEpGdGJXMlZ3Y0ZBS0NncGtkSFJVZW5wNmdzckd4OGViWnh3OWVuVFpnVFUvUDEvZXZYc25IejkrREhqT1VuT3dCbFlOdkw5Ly81WmR1M1l0OVBQaXhRdkp5c3FTc2JHeFJaK3ZzWDhWcG9QQWloY2dzSzc0VjhRQUVVQUFBUVFRUUFBQlp3TEJ6ckJxTCtFSXJCcjJkdS9lYlZZa0wxKytMQzlmdmpSbmFJZUhoMlhQbmoyMmczY2FXUFhzYlhWMXRlbExWejI3dXJwRVYxMGZQSGhndTVMckpMRGFEYkN3c0ZEYTI5dk45bUFhQWdoRVRvREFHamw3bm93QUFnZ2dnQUFDQ0lSRjRGOEhWZzEycDA2ZE1xdVJPM2Jza1BuNWVSTlU5VXhvWldXbEs0SFZ2K2lTZGhnVkZTVVhMbHlRR3pkdVNIUjBkTUF6L2lhdzZybFZYVjNWd2xGNWVYbGhlVWQwaWdBQ29Ra1FXRU56NGxzSUlJQUFBZ2dnZ01DcUVWaE9ZRDF4NG9SbzhhRmdUYyswYXZWY3V6T3N1Ym01b2hXSU5iajYydFdyVjZXbHBjVVVZTkxtVzlrTjFuOXBhYWs1b3hyc0RLdFc3UzB2THpjL241MmRsUzlmdnNpdFc3ZGs2OWF0NWpkYUtUalVPZGhWQ2ZhTjYvbno1eWFrWHJwMFNhNWR1N1pxM2prRFJXQ3RDaEJZMStxYlpWNElJSUFBQWdnZzhMOFZXRTVnSFJrWk1WdHR0VDE3OXN4YytmTGt5Wk1Gd3dNSERwaVZUR3RnL2ZIamgyemJ0czMybWh2OThhdFhyK1R3NGNQeTgrZFBFeko5VGF2K2F1Qk1Ta295SDIzWnNzV3N6am9wdXZUNTgyZlp1M2V2TkRZMm1uT3pvYzRoV0dCdGFHaVE4K2ZQbSt0c05MRFNFRUFnOGdJRTFzaS9BMGFBQUFJSUlJQUFBZ2k0S3JDY3dPby9BQ2RGbC9UdTFZc1hMNXB6cTlhdHVScitEaDQ4S0k4ZVBRcVluOU16ckhaVmdyWFQ5ZXZYbSt0dTlJcWJVT2RnRjFpYm01dEZpempwM0plcWJ1enFpNkl6QkJENG93Q0I5WTlFZkFFQkJCQkFBQUVFRUZoZEF2OHlzT3BWT1hwZVZTditXdHZ0MjdmbDVzMmI4dlhyVjRtSmlWbjBaemNDYTM5L3YraktiMDFOalpTVmxTMDdzT3EyWmUzbjd0Mjc1bDVYR2dJSXJCd0JBdXZLZVJlTUJBRUVFRUFBQVFRUWNFWEFHbGpuNXViTS9hamE5QXFZb3FJaWVmejRzYmxuVllQa29VT0hRZzU3L2x1Q2ZYZXY2aGJpMDZkUEI0eGRLK3hxbU5YVlM2L1grMWVCVmJjUTYwcXFOcTFLckJXSU5SQnJnYWUrdmo3WnRHbFR5SE93cnJEcTJOKy9meS8xOWZVQmM5aS9mNy9FeGNXNThsN29CQUVFbkFzUVdKMmI4UXNFRUVBQUFRUVFRR0JGQzFnRDY2OWZ2OHpXV2J1V2tKRGc2T29XLzhDcVY5am90VEtUazVQaThYaHMrOWN0d1ZvWVNTdnZodEtDbldIMXJ4S3NXNCszYjk4dXg0NGRNMVdJOVVvZEo4MGFXTFdZbExVS3NhKy9wcVltS2dVN3dlVzdDTGdzUUdCMUdaVHVFRUFBQVFRUVFBQUJCQkJBQUFFRTNCRWdzTHJqU0M4SUlJQUFBZ2dnZ0FBQ0NDQ0FBQUl1Q3hCWVhRYWxPd1FRUUFBQkJCQkFBQUVFRUVBQUFYY0VDS3p1T05JTEFnZ2dnQUFDQ0NDQUFBSUlJSUNBeXdJRVZwZEI2UTRCQkJCQUFBRUVFRUFBQVFRUVFNQWRBUUtyTzQ3MGdnQUNDQ0NBQUFJSUlJQUFBZ2dnNExMQWZ3eGdZMkVyYlA2Y0FBQUFBRWxGVGtTdVFtQ0Mi"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _renderToDom = __webpack_require__(1);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _makeMessage = __webpack_require__(10);

var _makeMessage2 = _interopRequireDefault(_makeMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waitTime = new Promise(function (todoOk, todoMal) {
	setTimeout(function () {
		todoOk('Han pasado 3 segundos, omg');
	}, 3000);
});
module.exports = {
	firstMessage: 'hola mundo desde un modul2222o',
	delayedMessage: async function delayedMessage() {
		var message = await waitTime;
		(0, _renderToDom2.default)((0, _makeMessage2.default)(message));
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function makeMessage(msg) {
	var element = document.createElement('p');
	element.textContent = msg;
	return element;
}

exports.default = makeMessage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' ||
  // $flow-disable-line
  (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || typeof value === 'boolean';
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop(a, b, c) {}

/**
 * Always return false.
 */
var no = function no(a, b, c) {
  return false;
};

/**
 * Return same value
 */
var identity = function identity(_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = ['component', 'directive', 'filter'];

var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = {}.watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check
var formatComponentName = noop;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function repeat(str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode(text) {
  if (text === void 0) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned;
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (process.env.NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if (process.env.NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }
  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) {
    extend(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
  var inject = options.inject;
  if (!inject) {
    return;
  }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (process.env.NODE_ENV !== 'production' &&
  // skip validation for weex recycle-list child component props
  !(false && isObject(value) && '@binding' in value)) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}

/*  */

function handleError(err, vm, info) {
  if (vm) {
    var cur = vm;
    while (cur = cur.$parent) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) {
              return;
            }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function macroTimerFunc() {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
// PhantomJS
MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function macroTimerFunc() {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function macroTimerFunc() {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function microTimerFunc() {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) {
      setTimeout(noop);
    }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };
    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function forceRender() {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(process.env.NODE_ENV !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/*  */

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/*  */

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

/*  */

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, "event handler for \"" + event + "\"");
        }
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

function resolveScopedSlots(fns, // see flow/vnode
res) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  if (process.env.NODE_ENV !== 'production' && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }
      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
      /* istanbul ignore next */
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }
    return result;
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function loop(key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) {
        loop(key);
      }
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree;
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/*  */

function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    return resolveSlots(children, parent);
  };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }
    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },

  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }
    if (isDef(data)) {
      registerDeepBindings(data);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender(vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (process.env.NODE_ENV !== 'production') {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };
}

/*  */

var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted() {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },

  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
      // not included
      include && (!name || !matches(include, name)) ||
      // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive

  /*  */

};function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }
      res += key;
    }
  }
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
      var blocker = function blocker(e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs

  /*  */

};function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass

  /*  */

  /*  */

  // add a raw attr (use this in preTransforms)


  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */

  /*  */

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
};var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler(handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler() {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
}

function add$1(event, handler, once$$1, capture, passive) {
  handler = withMacroTask(handler);
  if (once$$1) {
    handler = createOnceHandler(handler, event, capture);
  }
  target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners

  /*  */

};function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}
  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false;
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps

  /*  */

};var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
};function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition(def) {
  if (!def) {
    return;
  }
  /* istanbul ignore else */
  if ((typeof def === 'undefined' ? 'undefined' : _typeof(def)) === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res;
  } else if (typeof def === 'string') {
    return autoCssTransition(def);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

};var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag || isAsyncPlaceholder(c);
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
    // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave;
        var performLeave = function performLeave() {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

};var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup

  /*  */

  // install platform specific utils
};Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && isChrome) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}

/*  */

exports.default = Vue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(0), __webpack_require__(12).setImmediate))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(13);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teachers_vue__ = __webpack_require__(3);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_847755a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teachers_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(5);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teachers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_847755a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teachers_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_847755a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teachers_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue/src/js/components-vue/Teachers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-847755a6", Component.options)
  } else {
    hotAPI.reload("data-v-847755a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teacher_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_715ba2b6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teacher_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(5);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Teacher_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_715ba2b6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teacher_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_715ba2b6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Teacher_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue/src/js/components-vue/Teacher.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-715ba2b6", Component.options)
  } else {
    hotAPI.reload("data-v-715ba2b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("li", { staticClass: "teacher" }, [
      _vm._v("\n        " + _vm._s(_vm.teacher.name) + "\n        "),
      _c("a", { attrs: { href: _vm.teacher.twitter } }, [_vm._v("twitter")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-715ba2b6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"teachers":[{"id":0,"name":"Jhonnatan","twitter":"@jjhoncv"},{"id":1,"name":"Cesar Casa","twitter":"@ccesar"},{"id":2,"name":"Luis Cornejo","twitter":"@luiss"},{"id":3,"name":"Carlos Seeva","twitter":"@carloss"},{"id":4,"name":"Javier Esteban","twitter":"@javier"}]}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      { staticClass: "teachers" },
      _vm._l(_vm.teachers, function(teacher) {
        return _c("Teacher", { key: teacher.id })
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-847755a6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })
/******/ ]);