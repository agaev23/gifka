"use strict";

var navItems = document.getElementsByClassName("aside-nav-link");

var _loop = function _loop() {
  var categoryItem = navItems[i].dataset.category;
  navItems[i].onclick = function () {
    contentStatus.innerHTML = categoryItem;
    currentCategory = categoryItem;
    categoryPage = gifItemsData.filter(function (item) {
      if (currentCategory == item.category || currentCategory == null) return true;
    });
    gifItems = new GetGifItems(categoryPage);
    page = new Pages(categoryPage, 9);
    page.action(1);

    slider.style.display = "none";
    gifPageWrap.style.display = "none";
    contactsWrap.style.display = "none";
    return false;
  };
};

for (var i = 0; i <= navItems.length - 1; i++) {
  _loop();
}