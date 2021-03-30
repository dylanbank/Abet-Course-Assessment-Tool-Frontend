webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/TAsurvey.js":
/*!**************************************************!*\
  !*** ./components/survey-components/TAsurvey.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/survey-components/TAsurvey.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar TAsurvey = function TAsurvey(_ref) {\n  _s();\n\n  var TAquestions = _ref.TAquestions,\n      handleChange = _ref.handleChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(TAquestions.map(function (question) {\n    return question.rating;\n  })),\n      viewState = _useState[0],\n      setViewState = _useState[1]; // const handleChange = (rating, idx) => {\n  //     var temp = TAquestions;\n  //     temp[idx].rating = rating;\n  //     setTAquestions(temp);\n  //     console.log(TAquestions[idx]);\n  // };\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('tas updated');\n  }, [TAquestions]);\n  var renderRadios = Array.from(Array(5), function (x, index) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Radio\"], {\n      value: index + 1,\n      children: index + 1\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 16\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      fontWeight: \"bold\",\n      children: \"TA evaluation. Have each rated 1-5, with 5 being very satisfied and 1 being very unsatisfied\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      m: \"2em\",\n      padding: \"2em\",\n      bg: \"#edf2f7\",\n      w: \"80%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n        padding: \"1em\",\n        w: \"90%\",\n        bg: \"white\",\n        borderRadius: \"8px\",\n        children: TAquestions.map(function (question, idx) {\n          console.log(question);\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n            mb: \"1em\",\n            children: [idx > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 47\n            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                mt: \"1em\",\n                children: question.question\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"RadioGroup\"], {\n                value: question.rating,\n                onChange: function onChange(e) {\n                  return handleChange(e, idx);\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                  spacing: 10,\n                  children: renderRadios\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 33\n            }, _this)]\n          }, idx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TAsurvey, \"yjkeU60qG79vc+srk9lnihBmORg=\");\n\n_c = TAsurvey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TAsurvey);\n\nvar _c;\n\n$RefreshReg$(_c, \"TAsurvey\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9UQXN1cnZleS5qcz85OTg5Il0sIm5hbWVzIjpbIlRBc3VydmV5IiwiVEFxdWVzdGlvbnMiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VTdGF0ZSIsIm1hcCIsInF1ZXN0aW9uIiwicmF0aW5nIiwidmlld1N0YXRlIiwic2V0Vmlld1N0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlbmRlclJhZGlvcyIsIkFycmF5IiwiZnJvbSIsIngiLCJpbmRleCIsImlkeCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWFBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQUNGLFdBQVcsQ0FBQ0csR0FBWixDQUFnQixVQUFDQyxRQUFELEVBQWM7QUFDckUsV0FBT0EsUUFBUSxDQUFDQyxNQUFoQjtBQUNILEdBRjBDLENBQUQsQ0FETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4QixpQkFLaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFFSCxHQUhRLEVBR04sQ0FBQ1YsV0FBRCxDQUhNLENBQVQ7QUFLQSxNQUFNVyxZQUFZLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUMsQ0FBRCxDQUFoQixFQUFxQixVQUFDRSxDQUFELEVBQUlDLEtBQUosRUFBYztBQUNwRCx3QkFBTyxxRUFBQyxzREFBRDtBQUFtQixXQUFLLEVBQUVBLEtBQUssR0FBRyxDQUFsQztBQUFBLGdCQUFzQ0EsS0FBSyxHQUFHO0FBQTlDLE9BQVlBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGb0IsQ0FBckI7QUFJQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVUsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0kscUVBQUMsdURBQUQ7QUFDSSxPQUFDLEVBQUMsS0FETjtBQUVJLGFBQU8sRUFBQyxLQUZaO0FBR0ksUUFBRSxFQUFDLFNBSFA7QUFJSSxPQUFDLEVBQUMsS0FKTjtBQUFBLDZCQU1JLHFFQUFDLHFEQUFEO0FBQU0sZUFBTyxFQUFDLEtBQWQ7QUFBb0IsU0FBQyxFQUFDLEtBQXRCO0FBQTRCLFVBQUUsRUFBQyxPQUEvQjtBQUF1QyxvQkFBWSxFQUFDLEtBQXBEO0FBQUEsa0JBQ0tmLFdBQVcsQ0FBQ0csR0FBWixDQUFnQixVQUFDQyxRQUFELEVBQVdZLEdBQVgsRUFBbUI7QUFDaENQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWU4sUUFBWjtBQUNBLDhCQUNJLHFFQUFDLHlEQUFEO0FBQVUsY0FBRSxFQUFDLEtBQWI7QUFBQSx1QkFDT1ksR0FBRyxHQUFHLENBQVAsZ0JBQVkscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBWixHQUEwQixJQURoQyxlQUVJLHFFQUFDLHVEQUFEO0FBQUEsc0NBQ0kscUVBQUMscURBQUQ7QUFBTSxrQkFBRSxFQUFDLEtBQVQ7QUFBQSwwQkFBZ0JaLFFBQVEsQ0FBQ0E7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLDJEQUFEO0FBQ0kscUJBQUssRUFBRUEsUUFBUSxDQUFDQyxNQURwQjtBQUVJLHdCQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSx5QkFDTmhCLFlBQVksQ0FBQ2dCLENBQUQsRUFBSUQsR0FBSixDQUROO0FBQUEsaUJBRmQ7QUFBQSx1Q0FNSSxxRUFBQyx1REFBRDtBQUFRLHlCQUFPLEVBQUUsRUFBakI7QUFBQSw0QkFDS0w7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQSxhQUF3QkssR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQWtCSCxTQXBCQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQXdDSCxDQTdERDs7R0FBTWpCLFE7O0tBQUFBLFE7QUErRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9UQXN1cnZleS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgVGV4dCxcbiAgICBWU3RhY2ssXG4gICAgSFN0YWNrLFxuICAgIFJhZGlvR3JvdXAsXG4gICAgUmFkaW8sXG4gICAgQ2VudGVyLFxuICAgIERpdmlkZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cblxuY29uc3QgVEFzdXJ2ZXkgPSAoeyBUQXF1ZXN0aW9ucywgaGFuZGxlQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCBbdmlld1N0YXRlLCBzZXRWaWV3U3RhdGVdID0gdXNlU3RhdGUoVEFxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gcXVlc3Rpb24ucmF0aW5nO1xuICAgIH0pKTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChyYXRpbmcsIGlkeCkgPT4ge1xuICAgIC8vICAgICB2YXIgdGVtcCA9IFRBcXVlc3Rpb25zO1xuICAgIC8vICAgICB0ZW1wW2lkeF0ucmF0aW5nID0gcmF0aW5nO1xuICAgIC8vICAgICBzZXRUQXF1ZXN0aW9ucyh0ZW1wKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coVEFxdWVzdGlvbnNbaWR4XSk7XG4gICAgLy8gfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXMgdXBkYXRlZCcpO1xuICAgICAgIFxuICAgIH0sIFtUQXF1ZXN0aW9uc10pO1xuXG4gICAgY29uc3QgcmVuZGVyUmFkaW9zID0gQXJyYXkuZnJvbShBcnJheSg1KSwgKHgsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8UmFkaW8ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4ICsgMX0+e2luZGV4ICsgMX08L1JhZGlvPlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgVEEgZXZhbHVhdGlvbi4gSGF2ZSBlYWNoIHJhdGVkIDEtNSwgd2l0aCA1IGJlaW5nIHZlcnkgc2F0aXNmaWVkIGFuZCAxXG4gICAgICAgICAgICAgICAgYmVpbmcgdmVyeSB1bnNhdGlzZmllZFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPENlbnRlclxuICAgICAgICAgICAgICAgIG09XCIyZW1cIlxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XCIyZW1cIlxuICAgICAgICAgICAgICAgIGJnPVwiI2VkZjJmN1wiXG4gICAgICAgICAgICAgICAgdz1cIjgwJVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpc3QgcGFkZGluZz1cIjFlbVwiIHc9XCI5MCVcIiBiZz1cIndoaXRlXCIgYm9yZGVyUmFkaXVzPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIHtUQXF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG1iPVwiMWVtXCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IChpZHggPiAwKSA/IDxEaXZpZGVyIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG10PVwiMWVtXCI+e3F1ZXN0aW9uLnF1ZXN0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlLCBpZHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIU3RhY2sgc3BhY2luZz17MTB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUmFkaW9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9DZW50ZXI+XG5cbiAgICAgICAgPC8+XG4gICAgKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBUQXN1cnZleTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/survey-components/TAsurvey.js\n");

/***/ })

})