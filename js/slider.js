var toSlider = document.getElementById("main-logo");

toSlider.onclick = (() =>{
  slider.style.display = "block";
  gifPageWrap.style.display = "none";
  mainContentGif.style.display = "none";
  contactsWrap.style.display = "none";
  return false;
});

(function () {
  let sliderWrap = document.getElementById("slider-image");
  sliderWrap.innerHTML = "";
  let i = 4;
  let topGifs = gifItemsData.slice();
  topGifs.sort((a, b) => {
    return b.likes - a.likes; 
  });
  topGifs.length = 4;
  for (;i--;) {
    let article = document.createElement("article");
    sliderWrap.appendChild(article);
    let slideAbout = document.createElement("div");
    slideAbout.setAttribute("class", "slide-about")
    article.appendChild(slideAbout);

    let sliderTitle = document.createElement("div");
    sliderTitle.setAttribute("class", "slider-title");
    sliderTitle.innerHTML = topGifs[i].title;
    slideAbout.appendChild(sliderTitle);

    let sliderDesc = document.createElement("div");
    sliderDesc.setAttribute("class", "slider-desc");
    sliderDesc.innerHTML = topGifs[i].description;
    slideAbout.appendChild(sliderDesc);

    let showAll = document.createElement("a");
    showAll.setAttribute("class", "slider-all");
    showAll.setAttribute("href", "#");
    showAll.innerHTML = "Посмотреть все";
    showAll.onclick = (() => {
      slider.style.display = "none";
      gifPageWrap.style.display = "none";
      contentStatus.innerHTML = "Лучшее из мира гифок:";
      categoryPage = gifItemsData.slice();
      gifItems = new GetGifItems(categoryPage);
      page = new Pages( categoryPage, 9 );
      page.action(1);;
      return false;
    })
    slideAbout.appendChild(showAll);

    let img = document.createElement("img");
    img.setAttribute("alt", topGifs[i].imageAlt);
    img.setAttribute("src", topGifs[i].gifSrc);
    article.appendChild(img);
  }
})();