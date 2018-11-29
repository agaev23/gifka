class Pages {
  constructor(
    items,
    perPage = 9, 
  ) {
    this._items = items;
    this._perPage = perPage;
  }

  get itemsAmount( ) {
    return this._items.length;
  }

  get itemsPerPage( ) {
    return this._perPage;
  }

  action( id = 1 ) {
    const pages = Pages.generator(
      this.itemsAmount,
      this.itemsPerPage,
      id,
    );
    gifItems.action(id);
    let mainContent = document.getElementsByClassName("main-content")[0];
    //  to fix in IE
    // ________________________
    mainContent.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    mainContentGif.style.display = 'block';
    pages.forEach( _ => {
      const elem = document.querySelector( _.search );
      elem.innerHTML = ( _.text );
      elem.setAttribute( 'href', _.href );
      elem.setAttribute( 'class', _.className );
      elem.classList.contains('pagination-link-current')
      elem.onclick = function () {
        if ( !elem.classList.contains('pagination-link-current') && !elem.classList.contains('pagination-link-hidden'))
        page.action( _.id  );
        return false;
      }
    } );
    // setTimeout(function() {
    //   let gifLink = document.getElementsByClassName("gif-list-link");
    //   for (var i = 0; i < gifLink.length; i++) {
    //     gifLink[i].onmousep = alert("sdsad");
    //   }
    // }, 1000);
    
    
    
  }


  static generator(
    itemsAmount,
    itemsPerPage,
    pageId,
  ) {
    const pagesAmount = Math.ceil( itemsAmount / itemsPerPage );
    const pageIdFirst = 1;
    const page__first = ( id, first ) => [ 'pagination-link', 'pagination-link-first' ].concat( id > first ? '' : 'pagination-link-hidden' );
    const page__last = ( id, last ) => [ 'pagination-link', 'pagination-link-last' ].concat( id < last ? '' : 'pagination-link-hidden' );
    const pageValid = ( page ) => pageIdFirst <= page && page <= pagesAmount;
    const page__hidden = ( _ ) => pageValid( _ ) ? [ ] : [ 'pagination-link-hidden' ];
    const page__link = ( _ ) => [ 'pagination-link' ].concat( _ == pageId ? [ 'pagination-link-current' ] : [ ] );
    let current_shift = -2;
    switch (pageId) {
      case 1:
      current_shift = 0;
      break;
      case 2:
      current_shift = -1;
      break;
      case pagesAmount:
      current_shift = -4;
      break;
      case pagesAmount - 1:
      current_shift = -3;
      break;
    }
    const pages = [ ...Array( 5 ) ]
      .map( ( _, index ) => { 
        let id = index + current_shift + pageId;
        return {
        index: index,
        id: pageValid( id ) ? ( id  ) : undefined,
        className: [ ].concat( page__link( id ), page__hidden( id ) ).join( ' ' ),
        text: pageValid( id ) ? ( id ) : undefined,
        search: `.pagination-link[data-index='${index}']`,
      } } );
    const first_page = {
        id: pageIdFirst ,
        className: page__first( pageId, pageIdFirst ).join( ' ' ),
        text: '&lt;&lt;',
        search: `.pagination-link-first`,
      };
    const last_page = {
      id: pagesAmount,  
      className: page__last( pageId, pagesAmount ).join( ' ' ),
      text: '&gt;&gt;',
      search: `.pagination-link-last`,
    }
    return [].concat(first_page).concat(pages).concat(last_page);
  }
}
