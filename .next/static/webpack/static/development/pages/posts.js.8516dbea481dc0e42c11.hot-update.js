webpackHotUpdate("static/development/pages/posts.js",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _comps_Mainlayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../comps/Mainlayout */ "./comps/Mainlayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





var Post =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Post, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Post, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                return _context.abrupt("return", query);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Post(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Post);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Post).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Post, [{
    key: "render",
    value: function render() {
      // console.log(this.props)
      return __jsx(_comps_Mainlayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("div", {
        className: "jsx-2647703310" + " " + "markdown"
      }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
        source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### Post: {{this.props.id}} \n\n<p>This is the blog post content. Hello: {this.props.id}</p>\n      "
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2647703310"
      }, ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3liL3Byb2plY3RzL3BlcnNvbmFsL25leHRqcy9wYWdlcy9wb3N0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3lCLEFBRytCLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixDQWQzQix3QkFlQSxNQVhhLFdBQ2IiLCJmaWxlIjoiL2hvbWUveWIvcHJvamVjdHMvcGVyc29uYWwvbmV4dGpzL3BhZ2VzL3Bvc3RzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wcy9NYWlubGF5b3V0JztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XG4gICAgcmV0dXJuIHF1ZXJ5XG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICA8TWFya2Rvd25cbiAgICAgICAgICBzb3VyY2U9e2BcblRoaXMgaXMgb3VyIGJsb2cgcG9zdC5cblllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxuQW5kIHdlIGNhbiBoYXZlIGEgdGl0bGUgYXMgd2VsbC5cblxuIyMjIFBvc3Q6IHt7dGhpcy5wcm9wcy5pZH19IFxuXG48cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC4gSGVsbG86IHt0aGlzLnByb3BzLmlkfTwvcD5cbiAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5tYXJrZG93biB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTsgIFxuICB9XG59XG5cbi8vIGNvbnN0IFBvc3QgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4vLyAgIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlci5xdWVyeVxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICA8aDE+UG9zdDoge3F1ZXJ5fTwvaDE+XG4vLyAgICAgICA8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC4gSGVsbG86IHtxdWVyeX08L3A+XG4vLyAgICAgPC9MYXlvdXQ+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3QiXX0= */\n/*@ sourceURL=/home/yb/projects/personal/nextjs/pages/posts/index.js */"));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // const Post = () => {
//   const router = useRouter()
//   const { query } = router.query
//   return (
//     <Layout>
//       <h1>Post: {query}</h1>
//       <p>This is the blog post content. Hello: {query}</p>
//     </Layout>
//   );
// }
// export default Post




/***/ })

})
//# sourceMappingURL=posts.js.8516dbea481dc0e42c11.hot-update.js.map