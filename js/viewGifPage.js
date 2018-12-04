function viewGifPage(id){
      slider.style.display = "none";
      mainContentGif.style.display = "none";
      gifPageWrap.style.display = "block";
      contactsWrap.style.display = "none";
      gifPageWrap.innerHTML = "";

      var gifPageContent = document.createElement("div");
      gifPageContent.setAttribute("class", "gif-page-content");
      gifPageWrap.appendChild(gifPageContent);   

      let btnBack = document.createElement("a");
      btnBack.setAttribute("class", "btn-back");
      btnBack.setAttribute("href", "#");
      btnBack.innerHTML = "Назад";
      gifPageContent.appendChild(btnBack); 

      btnBack.onclick = () => {
      slider.style.display = "none";
      mainContentGif.style.display = "block";
      gifPageWrap.style.display = "none";
      }  

      let picImg = document.createElement("img");
      picImg.setAttribute("src", gifItemsData[id].gifSrc);
      picImg.setAttribute("class", "gif-img");
      picImg.setAttribute("alt", gifItemsData[id].imageAlt);
      
      let descLink = document.createElement("div");
      descLink.setAttribute("class", "gif-title");
      descLink.innerHTML = gifItemsData[id].title;
      gifPageContent.appendChild(descLink);
      let picDownload = document.createElement("a");
      picDownload.setAttribute("download", "    ");
      picDownload.setAttribute("class", "download");
      picDownload.setAttribute("href", gifItemsData[id].gifSrc);
      picDownload.setAttribute("target", "_blank");
      gifPageContent.appendChild(picDownload);
      picDownload.appendChild(picImg);

      let descData = document.createElement("div");
      descData.setAttribute("class", "gif-data");
      gifPageContent.appendChild(descData);

      let descUsername = document.createElement("div");
      descUsername.setAttribute("class", "gif-username");
      descUsername.innerHTML = users[gifItemsData[id].userId - 1].name;
      descData.appendChild(descUsername);

      let descLikes = document.createElement("div");
      descLikes.setAttribute("class", "gif-likes");
      descLikes.innerHTML = gifItemsData[id].likes;
      descData.appendChild(descLikes);

      let descDescription = document.createElement("div");
      descDescription.setAttribute("class", "gif-desc");
      descDescription.innerHTML = gifItemsData[id].description;
      gifPageContent.appendChild(descDescription);

      let commentsWrap = document.createElement("div");
      commentsWrap.setAttribute("class", "gif-comments");
      gifPageContent.appendChild(commentsWrap);      

      getCommets(commentsWrap, id );

      if (!(Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject)) {
         gifPageContent.scrollTo({
              top: 0,
              behavior: "smooth"
        });  
      }
      return false;
}