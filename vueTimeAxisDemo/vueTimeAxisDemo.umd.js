(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueTimeAxisDemo"] = factory();
	else
		root["vueTimeAxisDemo"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/vueTimeAxisDemo.vue?vue&type=template&id=e5ba9fbe
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-time-axis",
    style: {
      width: _vm.option.width + 'px'
    },
    attrs: {
      "id": 'vueTimeAxis' + _vm.key
    }
  }, _vm._l(_vm.option.data, function (item) {
    return _c('span', {
      key: item.id,
      staticClass: "vue-time-axis-inline",
      style: _vm.itemStyle(item),
      on: {
        "mousedown": function ($event) {
          return _vm.mouseDown($event, item);
        }
      }
    }, [_vm._v(_vm._s(item.text))]);
  }), 0);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/vueTimeAxisDemo.vue?vue&type=script&lang=js
/* harmony default export */ var vueTimeAxisDemovue_type_script_lang_js = ({
  props: ["option"],
  name: "vueTimeAxis",
  data() {
    return {
      x: null,
      id: null,
      currentItem: null,
      isMove: false,
      timeID: null,
      key: new Date().getTime()
    };
  },
  methods: {
    itemStyle(item) {
      const step = this.option.width / (this.option.max - this.option.min);
      return {
        width: (item.end - item.start) * step + "px",
        left: (item.start - this.option.min) * step + "px"
      };
    },
    mouseDown(e, item) {
      this.x = e.clientX;
      this.currentItem = item;
      this.id = item.id;
      this.isMove = true;
    }
  },
  mounted() {
    const el = document.querySelector("#vueTimeAxis" + this.key);
    el.onmousemove = e => {
      if (!this.isMove || this.timeID) return;
      // 减少触发次数
      this.timeID = setTimeout(() => {
        this.timeID = null;
      }, 16);
      const step = this.option.width / (this.option.max - this.option.min);
      let data = (e.clientX - this.x) / step;
      this.currentItem.start += data;
      this.currentItem.end += data;
      this.x = e.clientX;
    };
    el.onmouseup = () => {
      this.isMove = false;
    };
    el.onmouseleave = () => {
      this.isMove = false;
    };
  },
  created() {}
});
;// CONCATENATED MODULE: ./src/package/vueTimeAxisDemo.vue?vue&type=script&lang=js
 /* harmony default export */ var package_vueTimeAxisDemovue_type_script_lang_js = (vueTimeAxisDemovue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/vueTimeAxisDemo.vue?vue&type=style&index=0&id=e5ba9fbe&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/vueTimeAxisDemo.vue?vue&type=style&index=0&id=e5ba9fbe&prod&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/vueTimeAxisDemo.vue



;


/* normalize component */

var component = normalizeComponent(
  package_vueTimeAxisDemovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vueTimeAxisDemo = (component.exports);
;// CONCATENATED MODULE: ./src/package/index.js
// 导入组件

// 组件添加数组
const coms = [vueTimeAxisDemo];
// 循环批量注册
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
// 导出
/* harmony default export */ var src_package = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vueTimeAxisDemo.umd.js.map