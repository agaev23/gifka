searchForm.searchSubmit.onclick = (() => {
  contentStatus.innerHTML = "Результаты поиска по запросу '" + searchForm.searchText.value + "' :";
  categoryPage = gifItemsData.filter((item) =>{
    if (item.title.toLowerCase().search(searchForm.searchText.value.toLowerCase()) >= 0) {
      return true;
      alert(item.name);
    }
  });
  console.log(categoryPage.length);
  gifItems = new GetGifItems(categoryPage);
  page = new Pages( categoryPage, 9 );
  page.action(1);
  slider.style.display = "none";
    gifPageWrap.style.display = "none";
  return false;
});
