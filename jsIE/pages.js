"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pages = function () {
  function Pages(items) {
    var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;

    _classCallCheck(this, Pages);

    this._items = items;
    this._perPage = perPage;
  }

  _createClass(Pages, [{
    key: "action",
    value: function action() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var pages = Pages.generator(this.itemsAmount, this.itemsPerPage, id);
      gifItems.action(id);
      var mainContent = document.getElementsByClassName("main-content")[0];

      if (!(Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject)) {
        mainContent.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      mainContentGif.style.display = 'block';
      pages.forEach(function (_) {
        var elem = document.querySelector(_.search);
        elem.innerHTML = _.text;
        elem.setAttribute('href', _.href);
        elem.setAttribute('class', _.className);
        elem.classList.contains('pagination-link-current');
        elem.onclick = function () {
          if (!elem.classList.contains('pagination-link-current') && !elem.classList.contains('pagination-link-hidden')) page.action(_.id);
          return false;
        };
      });
    }
  }, {
    key: "itemsAmount",
    get: function get() {
      return this._items.length;
    }
  }, {
    key: "itemsPerPage",
    get: function get() {
      return this._perPage;
    }
  }], [{
    key: "generator",
    value: function generator(itemsAmount, itemsPerPage, pageId) {
      var pagesAmount = Math.ceil(itemsAmount / itemsPerPage);
      var pageIdFirst = 1;
      var page__first = function page__first(id, first) {
        return ['pagination-link', 'pagination-link-first'].concat(id > first ? '' : 'pagination-link-hidden');
      };
      var page__last = function page__last(id, last) {
        return ['pagination-link', 'pagination-link-last'].concat(id < last ? '' : 'pagination-link-hidden');
      };
      var pageValid = function pageValid(page) {
        return pageIdFirst <= page && page <= pagesAmount;
      };
      var page__hidden = function page__hidden(_) {
        return pageValid(_) ? [] : ['pagination-link-hidden'];
      };
      var page__link = function page__link(_) {
        return ['pagination-link'].concat(_ == pageId ? ['pagination-link-current'] : []);
      };
      var current_shift = -2;
      switch (pageId) {
        case 1:
          current_shift = 0;
          break;
        case 2:
          current_shift = -1;
          break;
        case pagesAmount:
          current_shift = -4;
          break;
        case pagesAmount - 1:
          current_shift = -3;
          break;
      }
      var pages = [].concat(_toConsumableArray(Array(5))).map(function (_, index) {
        var id = index + current_shift + pageId;
        return {
          index: index,
          id: pageValid(id) ? id : undefined,
          className: [].concat(page__link(id), page__hidden(id)).join(' '),
          text: pageValid(id) ? id : undefined,
          search: ".pagination-link[data-index='" + index + "']"
        };
      });
      var first_page = {
        id: pageIdFirst,
        className: page__first(pageId, pageIdFirst).join(' '),
        text: '&lt;&lt;',
        search: ".pagination-link-first"
      };
      var last_page = {
        id: pagesAmount,
        className: page__last(pageId, pagesAmount).join(' '),
        text: '&gt;&gt;',
        search: ".pagination-link-last"
      };
      return [].concat(first_page).concat(pages).concat(last_page);
    }
  }]);

  return Pages;
}();