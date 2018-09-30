(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/recommended.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components;s(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"recommended-way-to-organize-stores-files"}},"Recommended way to organize stores files"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},".\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 Counter.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 Posts.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 Profile.tsx\n\u251c\u2500\u2500 index.tsx\n\u2514\u2500\u2500 stores # multiple store and keep per store small\n    \u251c\u2500\u2500 counterStore.ts\n    \u251c\u2500\u2500 postStore.ts\n    \u2514\u2500\u2500 profileStore.ts\n")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"recommended-way-to-struct-your-store"}},"Recommended way to struct your store"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import { createStore } from 'stamen'\n\nconst { consume, mutate } = createStore({ count: 1 })\n\nconst actions = {\n  increment() {\n    mutate(state => state.count++)\n  },\n  decrement() {\n    mutate(state => state.count--)\n  },\n  asyncIncrement() {\n    setTimeout(() => {\n      mutate(state => {\n        state.count++\n      })\n    }, 1000)\n  },\n  async asyncDecrement() {\n    await new Promise((resolve, _) => {\n      setTimeout(() => {\n        resolve()\n      }, 1000)\n    })\n    mutate(state => state.count--)\n  },\n}\n\nexport { consume, mutate, actions }\n")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"use-in-component"}},"Use in Component"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import * as React from 'react'\nimport { consume, actions } from '@stores/counterStore'\n\nconst Counter = () => (\n  <div>\n    <div>{consume(state => state.count)}</div>\n    <button onClick={actions.decrement}>-</button>\n    <button onClick={actions.increment}>+</button>\n  </div>\n)\n\nexport default Counter\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"tips:")),a.a.createElement(r.MDXTag,{name:"p",components:n},"Config ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"path")," option in tsconfig.json, or ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"alias")," in webpack, so you can import store like this in any where:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import { consume, actions } from '@stores/counterStore'\n")),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'{\n  "compilerOptions": {\n    "paths": {\n      "@stores/*": ["src/stores/*"],\n    }\n  }\n}\n')))}}}]);