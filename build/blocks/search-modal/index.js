/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/search-modal/block.json":
/*!********************************************!*\
  !*** ./src/blocks/search-modal/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"tsc/search-modal","title":"Search Modal","category":"widgets","description":"Adds a search modal.","keywords":["search modal"],"version":"1","textdomain":"tsc","editorScript":"file:./index.js","viewScript":"file:./view.js","script":"","style":"file:./index.css","attributes":{"textColor":{"type":"string","default":"#222"},"modalBgColor":{"type":"string","default":"#111"},"buttonBgColor":{"type":"string","default":"#2563eb"},"buttonTextColor":{"type":"string","default":"#ffffff"},"triggerLabel":{"type":"string","default":""},"triggerMediaId":{"type":"number","default":0},"triggerMediaUrl":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/blocks/search-modal/main.css":
/*!******************************************!*\
  !*** ./src/blocks/search-modal/main.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/blocks/search-modal/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-modal/block.json");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ "./src/blocks/search-modal/main.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      bgColor,
      textColor,
      modalBgColor,
      buttonBgColor,
      buttonTextColor,
      triggerLabel,
      triggerMediaId,
      triggerMediaUrl
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'wp-block-tsc-search-modal',
      style: {
        backgroundColor: bgColor,
        color: textColor,
        '--tsc-search-modal-bg': modalBgColor,
        '--tsc-search-button-bg': buttonBgColor,
        '--tsc-search-button-text': buttonTextColor,
        '--tsc-search-text': textColor,
        '--tsc-search-placeholder': textColor
      }
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Colors', 'tsc'),
          colorSettings: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Modal Background', 'tsc'),
            value: modalBgColor,
            onChange: newValue => setAttributes({
              modalBgColor: newValue
            })
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Placeholder Text', 'tsc'),
            value: textColor,
            onChange: newValue => setAttributes({
              textColor: newValue
            })
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Background', 'tsc'),
            value: buttonBgColor,
            onChange: newValue => setAttributes({
              buttonBgColor: newValue
            })
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'tsc'),
            value: buttonTextColor,
            onChange: newValue => setAttributes({
              buttonTextColor: newValue
            })
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            style: {
              margin: '1rem'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => {
                // Only accept SVG or image; prefer SVG
                const url = media?.url || '';
                setAttributes({
                  triggerMediaId: media?.id || 0,
                  triggerMediaUrl: url
                });
              },
              allowedTypes: ['image'],
              value: triggerMediaId || 0,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  variant: "secondary",
                  onClick: open,
                  children: triggerMediaUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Trigger Icon', 'tsc') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Trigger Icon (SVG)', 'tsc')
                }), triggerMediaUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  variant: "link",
                  onClick: () => setAttributes({
                    triggerMediaId: 0,
                    triggerMediaUrl: ''
                  }),
                  style: {
                    marginLeft: '0.5rem'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove', 'tsc')
                }), triggerMediaUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  style: {
                    marginTop: '0.5rem'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                    src: triggerMediaUrl,
                    alt: "",
                    style: {
                      width: 48,
                      height: 48,
                      objectFit: 'contain'
                    }
                  })
                })]
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            margin: '1rem'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
            className: "components-base-control__label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Trigger Text', 'tsc')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            type: "text",
            className: "components-text-control__input",
            value: triggerLabel || '',
            onChange: e => setAttributes({
              triggerLabel: e.target.value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search', 'tsc')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "components-base-control__help",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shown to the right of the icon. Uses the Button Background color.', 'tsc')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        ...blockProps,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "button",
          className: "search-icon-button",
          "aria-label": triggerLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search', 'tsc'),
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            pointerEvents: 'none',
            background: 'transparent',
            border: 'none',
            padding: 0,
            color: 'inherit'
          },
          disabled: true,
          children: [triggerMediaUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: triggerMediaUrl,
            alt: "",
            style: {
              width: 32,
              height: 32,
              objectFit: 'contain'
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
            className: "icon-search",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            role: "img",
            "aria-hidden": "true",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
              x1: "16.5",
              y1: "16.5",
              x2: "21",
              y2: "21"
            })]
          }), !!(triggerLabel && triggerLabel.trim()) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "search-trigger-label",
            style: {
              color: 'var(--tsc-search-button-bg)',
              fontSize: '0.9rem',
              fontWeight: 500
            },
            children: triggerLabel
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          style: {
            marginTop: '0.5rem',
            opacity: 0.6,
            fontSize: '0.75rem'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Static preview (frontend adds toggle & close button).', 'tsc')
        })]
      })]
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map