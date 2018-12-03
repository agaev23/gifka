"use strict";

showAllGIf.onclick = function () {
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
  contentStatus.innerHTML = "Лучшее из мира гифок:";
  categoryPage = gifItemsData.slice();
  gifItems = new GetGifItems(categoryPage);
  page = new Pages(categoryPage, 9);
  page.action(1);;
  return false;
};

showTopGIf.onclick = function () {
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
  contentStatus.innerHTML = "Топовые гифки:";
  categoryPage = gifItemsData.slice();
  categoryPage.sort(function (a, b) {
    return b.likes - a.likes;
  });
  gifItems = new GetGifItems(categoryPage);
  page = new Pages(categoryPage, 9);
  page.action(1);;
  return false;
};

showNewGIf.onclick = function () {
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
  contentStatus.innerHTML = "Новинки:";
  categoryPage = gifItemsData.slice();
  categoryPage.sort(function (a, b) {
    return b.id - a.id;
  });
  gifItems = new GetGifItems(categoryPage);
  page = new Pages(categoryPage, 9);
  page.action(1);;
  return false;
};