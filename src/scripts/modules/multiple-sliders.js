'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var siemas = document.querySelectorAll('.siema');

var SiemaWithDots = function (_Siema) {
  _inherits(SiemaWithDots, _Siema);

  function SiemaWithDots() {
    _classCallCheck(this, SiemaWithDots);

    return _possibleConstructorReturn(this, (SiemaWithDots.__proto__ || Object.getPrototypeOf(SiemaWithDots)).apply(this, arguments));
  }

  _createClass(SiemaWithDots, [{
    key: 'addDots',
    value: function addDots() {
      this.selectorWidth = 30;
      var _this2 = this;

      this.dots = document.createElement('div');
      this.dots.classList.add('dots');

      var _loop = function _loop(i) {

        var dot = document.createElement('button');

        dot.classList.add('dots__item');

        dot.addEventListener('click', function () {
          _this2.goTo(i);
        });

        _this2.dots.appendChild(dot);
      };

      for (var i = 0; i < this.innerElements.length; i++) {
        _loop(i);
      }

      this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
    }
  }, {
    key: 'updateDots',
    value: function updateDots() {
      var _this2 = this;

      for (var i = 0; i < this.dots.querySelectorAll('button').length; i++) {

        var addOrRemove = this.currentSlide === i ? 'add' : 'remove';
        this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active');
      }
    }
  }]);

  return SiemaWithDots;
}(Siema);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {

  for (var _iterator = siemas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var siema = _step.value;

    var instance = new SiemaWithDots({
      selector: siema,

      onInit: function onInit() {
        this.addDots();
        this.updateDots();
      },

      onChange: function onChange() {
        this.updateDots();
      }
    });

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