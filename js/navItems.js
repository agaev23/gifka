var navItems = document.getElementsByClassName("aside-nav-link");
for (var i = 0; i <= navItems.length - 1; i++) {
  let categoryItem = navItems[i].dataset.category;
  navItems[i].onclick = (() => {
    contentStatus.innerHTML = categoryItem;
    currentCategory = categoryItem;
    categoryPage = gifItemsData.filter((item) =>{
      if (currentCategory == item.category || currentCategory == null) return true;
    });
    gifItems = new GetGifItems(categoryPage);
    page = new Pages( categoryPage, 9 );
    page.action(1);

    slider.style.display = "none";
    gifPageWrap.style.display = "none";
  contactsWrap.style.display = "none";
    return false;
  })
}