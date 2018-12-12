(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/tutorial.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return i});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var i=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,l(n).call(this,e))).layout=null,t}var t,a,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"api"}},"API"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"const { consume, mutate, getState } = createStore(initialState)")),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u4f7f\u7528 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"createStore()")," \u521b\u5efa\u4e00\u4e2a store \u793a\u4f8b\uff0c\u4f7f\u7528 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"consume")," \u8bbf\u95ee state\uff0c\u4f7f\u7528 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mutate")," \u66f4\u65b0 state\u3002\u5efa\u8bae\u4f7f\u7528\u591a Store \b\u6765\u7ba1\u7406\u7684\u9879\u76ee\u3002"),o.a.createElement(r.MDXTag,{name:"p",components:n},"\b\b\u5b9e\u9645\u9879\u76ee\u4e2d store \u6587\u4ef6\u63a8\u8350\u8fd9\u6837\u7ec4\u7ec7:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { createStore } from 'stamen'\n\nconst { consume, mutate } = createStore({ count: 1 })\n\nconst actions = {\n  increment() {\n    mutate(state => state.count++)\n  },\n  decrement() {\n    mutate(state => state.count--)\n  },\n  asyncIncrement() {\n    setTimeout(() => {\n      mutate(state => {\n        state.count++\n      })\n    }, 1000)\n  },\n  async asyncDecrement() {\n    await new Promise((resolve, _) => {\n      setTimeout(() => {\n        resolve()\n      }, 1000)\n    })\n    mutate(state => state.count--)\n  },\n}\n\nexport { consume, mutate, actions }\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u5efa\u8bae ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"state")," \u548c ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"actions")," \u653e\u5728\u4e00\u4e2a\u6587\u4ef6\u5185, \u5c3d\u91cf\u8ba9\u6bcf\u4e2a store \b\u7b80\u5355\uff0c\u5982\u679c\u4ee5 store \u592a\u590d\u6742\b\u7684\u8bdd\uff0c\u5efa\u8bae\u62c6\u6210\u591a\u4e2a store\u3002"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"consume"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"consume()")),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528 state, state \u6539\u53d8\u540e\u7ec4\u4ef6\u56de\u81ea\u52a8 re-render\u3002"),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u9996\u5148\uff0c\u4f60\u9700\u8981\u65b0\u5efa\u4e00\u4e2a store\uff0c\u4f8b\u5982:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const { consume, mutate } = createStore({\n  count: 1,\n  info: {\n    name: 'Counter',\n  },\n})\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"\u7b80\u5355\u7528\u6cd5")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<span>{consume(state => state.count)}</span>\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"\u4f7f\u7528selector")),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u4f7f\u7528selector\u80fd\u83b7\u5f97\u7684\u66f4\u597d\u7684\u6027\u80fd\uff0c\u80fd\u51cf\u5c11\u7ec4\u4ef6\u91cd\u590d\u6e32\u67d3\uff0c\u63a8\u8350\u591a\u4f7f\u7528 selector."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<span>{consume(state => state.info.name, name => name)}</span>\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"mutate"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"mutate()")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Action \u662f\u4e00\u4e2a\u5185\u90e8\u8c03\u7528\u4e86 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mutate()")," \u7684\u666e\u901a\u51fd\u6570, \u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u8c03\u7528 action: stateless \u7ec4\u4ef6\u5185\u3001React \u751f\u547d\u5468\u671f\u51fd\u6570\u5185\u3001\u751a\u81f3\u5728\u7ec4\u4ef6\u5916\uff0c\u6240\u4ee5\u4f60\u5e76\u4e0d\u9700\u8981\u7c7b\u4f3c connect \u6216\u8005 inject \u8fd9\u6837\u7684 HOC\u3002"),o.a.createElement(r.MDXTag,{name:"p",components:n},"State \u662f immutable \u7684, \u4f46\u4f60\u80fd\u4f7f\u7528 mutable \u65b9\u5f0f ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mutate")," \u6765\u751f\u6210\u65b0\u7684\uff0c\u5728\u5904\u7406\u590d\u6742 store \u65f6\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u662f",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mweststrate/immer"}},"immer")," \u7684\u5f3a\u5927\u4e4b\u5904\uff0c\u591a\u4e8f immer\u3002"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"function increment() {\n  mutate(state => {\n    state.count++\n  })\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"getstate"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"getState()")),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u83b7\u53d6\u5f53\u524d\u7684 state"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const { getState } = createStore({ count: 1 })\nconst currentState = getState()\n")))}}])&&s(t.prototype,a),m&&s(t,m),n}();i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-tutorial.38374bb6b177a72c0ca8.js.map