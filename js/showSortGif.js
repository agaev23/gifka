showAllGIf.onclick = (() => {
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
  contentStatus.innerHTML = "Лучшее из мира гифок:";
  categoryPage = gifItemsData.slice();
  gifItems = new GetGifItems(categoryPage);
  page = new Pages( categoryPage, 9 );
  page.action(1);;
  return false;
});

showTopGIf.onclick = (() => {
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
  contentStatus.innerHTML = "Топовые гифки:";
  categoryPage = gifItemsData.slice();
  categoryPage.sort((a, b) => {
    return b.likes - a.likes;
  });
  gifItems = new GetGifItems(categoryPage);
  page = new Pages( categoryPage, 9 );
  page.action(1);;
  return false;
});


showNewGIf.onclick = (() => {
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
  contentStatus.innerHTML = "Новинки:";
  categoryPage = gifItemsData.slice();
  categoryPage.sort((a, b) => {
    return b.id - a.id;
  });
  gifItems = new GetGifItems(categoryPage);
  page = new Pages( categoryPage, 9 );
  page.action(1);;
  return false;
});