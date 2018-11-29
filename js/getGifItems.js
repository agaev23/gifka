class GetGifItems {
  constructor(
    itemsData,
  ) {
    this.items = itemsData;
  }
  get itemsAmount( ) {
    return this.items.length;
  }

  action(pageNumber) {
    let firstPost = (pageNumber - 1) * 9;
    const wrap = document.getElementById("main-content-wrap");
    wrap.innerHTML = "";
    let gifList = document.createElement("ul");
    gifList.setAttribute("class", "gif-list");
    wrap.appendChild(gifList);

    let currentItems = this.items;
    currentItems = currentItems.slice(firstPost, firstPost + 9);
    if (currentItems.length < 9 && pageNumber == 1){
      pagination.style.display = 'none'
    } else pagination.style.display = 'block'
    var i = 0;
    var picLinkArr = [];
    currentItems.forEach( item => {
      let itemGif = document.createElement("li");
      itemGif.setAttribute("class", "gif-list-item");
      gifList.appendChild(itemGif);

      let picWrap = document.createElement("div");
      picWrap.setAttribute("class", "gif-picture");
      itemGif.appendChild(picWrap);

      var picLink = document.createElement("a");
      picLink.setAttribute("class", "gif-list-link");
      picLink.setAttribute("href", "#");
      picLink.setAttribute("data-gifId", item.id);
      picWrap.appendChild(picLink);

      picLink.addEventListener("click", function(event){
        viewGifPage(item.id)
        event.preventDefault();
      })

      let picImg = document.createElement("img");
      picImg.setAttribute("src", item.gifSrc);
      picImg.setAttribute("alt", item.imageAlt);
      picLink.appendChild(picImg);

      let descWrap = document.createElement("div");
      descWrap.setAttribute("class", "gif-description");
      itemGif.appendChild(descWrap);

      let descLink = document.createElement("a");
      descLink.setAttribute("class", "gif-title");
      descLink.setAttribute("href", "#");
      descLink.innerHTML = item.title;
      descLink.addEventListener("click", function(event){
        viewGifPage(item.id)
        event.preventDefault();
      })
      descWrap.appendChild(descLink);

      let descData = document.createElement("div");
      descData.setAttribute("class", "gif-data");
      descWrap.appendChild(descData);

      let descUsername = document.createElement("div");
      descUsername.setAttribute("class", "gif-username");
      descUsername.innerHTML = users[item.userId - 1].name;
      descData.appendChild(descUsername);

      let descLikes = document.createElement("div");
      descLikes.setAttribute("class", "gif-likes");
      descLikes.innerHTML = item.likes;
      descData.appendChild(descLikes);

      i++;
    });
  }
}