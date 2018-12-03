"use strict";

var categoryPage = gifItemsData;
var currentCategory = null;
var gifItems = new GetGifItems(categoryPage);
var page = new Pages(categoryPage, 9);
var contentStatus = document.getElementById("content-status");
var pagination = document.getElementsByClassName("pagination")[0];
var showAllGIf = document.getElementById("link-all");
var slider = document.getElementById("slider");
var gifPageWrap = document.getElementById("gifPage");
var mainContentGif = document.getElementById("main-content-gif");
var showTopGIf = document.getElementById("link-top");
var showNewGIf = document.getElementById("link-new");
var searchForm = document.getElementById("searchForm");