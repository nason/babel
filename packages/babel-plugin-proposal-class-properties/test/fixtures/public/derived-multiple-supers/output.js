var Foo =
/*#__PURE__*/
function (_Bar) {
  "use strict";

  function Foo() {
    var _this;

    babelHelpers.classCallCheck(this, Foo);

    if (condition) {
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).call(this));
      babelHelpers.defineProperty(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this))), "bar", "foo");
    } else {
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).call(this));
      babelHelpers.defineProperty(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this))), "bar", "foo");
    }

    return babelHelpers.possibleConstructorReturn(_this);
  }

  babelHelpers.inherits(Foo, _Bar);
  return Foo;
}(Bar);
