function getCommets(wrap, postId) {
    var commentsWrap = document.createElement("div");
    commentsWrap.setAttribute("class", "comments-wrap");
    wrap.appendChild(commentsWrap);

    var postComments = comments.filter(function(comment) {
      return comment.postId === postId;
    });

    for (let j = 0; j < postComments.length; j++) {
      var commentWrap = document.createElement("div");
      commentWrap.setAttribute("class", "comment-wrap")
      commentsWrap.appendChild(commentWrap);

      var commentName = document.createElement("h4");
      commentName.setAttribute("class", "comment-name");
      commentName.innerHTML = postComments[j].name;
      commentWrap.appendChild(commentName);

      var commentEmail = document.createElement("h5");
      commentEmail.setAttribute("class", "comment-email");
      commentEmail.innerHTML = postComments[j].email;
      commentWrap.appendChild(commentEmail);

      var commentBody = document.createElement("div");
      commentBody.setAttribute("class", "comment-body");
      commentBody.innerHTML = postComments[j].body;
      commentWrap.appendChild(commentBody);

    }
  }