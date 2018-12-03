"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetGifItems = function () {
  function GetGifItems(itemsData) {
    _classCallCheck(this, GetGifItems);

    this.items = itemsData;
  }

  _createClass(GetGifItems, [{
    key: "action",
    value: function action(pageNumber) {
      var firstPost = (pageNumber - 1) * 9;
      var wrap = document.getElementById("main-content-wrap");
      wrap.innerHTML = "";
      var gifList = document.createElement("ul");
      gifList.setAttribute("class", "gif-list");
      wrap.appendChild(gifList);

      var currentItems = this.items;
      currentItems = currentItems.slice(firstPost, firstPost + 9);
      if (currentItems.length < 9 && pageNumber == 1) {
        pagination.style.display = 'none';
      } else pagination.style.display = 'block';
      var i = 0;
      var picLinkArr = [];
      currentItems.forEach(function (item) {
        var itemGif = document.createElement("li");
        itemGif.setAttribute("class", "gif-list-item");
        gifList.appendChild(itemGif);

        var picWrap = document.createElement("div");
        picWrap.setAttribute("class", "gif-picture");
        itemGif.appendChild(picWrap);

        var picLink = document.createElement("a");
        picLink.setAttribute("class", "gif-list-link");
        picLink.setAttribute("href", "#");
        picLink.setAttribute("data-gifId", item.id);
        picWrap.appendChild(picLink);

        picLink.addEventListener("click", function (event) {
          viewGifPage(item.id);
          event.preventDefault();
        });

        var picImg = document.createElement("img");
        picImg.setAttribute("src", item.gifSrc);
        picImg.setAttribute("alt", item.imageAlt);
        picLink.appendChild(picImg);

        var descWrap = document.createElement("div");
        descWrap.setAttribute("class", "gif-description");
        itemGif.appendChild(descWrap);

        var descLink = document.createElement("a");
        descLink.setAttribute("class", "gif-title");
        descLink.setAttribute("href", "#");
        descLink.innerHTML = item.title;
        descLink.addEventListener("click", function (event) {
          viewGifPage(item.id);
          event.preventDefault();
        });
        descWrap.appendChild(descLink);

        var descData = document.createElement("div");
        descData.setAttribute("class", "gif-data");
        descWrap.appendChild(descData);

        var descUsername = document.createElement("div");
        descUsername.setAttribute("class", "gif-username");
        descUsername.innerHTML = users[item.userId - 1].name;
        descData.appendChild(descUsername);

        var descLikes = document.createElement("div");
        descLikes.setAttribute("class", "gif-likes");
        descLikes.innerHTML = item.likes;
        descData.appendChild(descLikes);

        i++;
      });
    }
  }, {
    key: "itemsAmount",
    get: function get() {
      return this.items.length;
    }
  }]);

  return GetGifItems;
}();