"use strict";

$(function () {
  //JS開頭
  var WINDOW = $(window).width(); //視窗寬度

  var WINDOWH = $(window).height(); //視窗高度
  //---------------------登入頁設定----------------------

  var imgdefereds = [];
  $('img').each(function () {
    var dfd = $.Deferred();
    $(this).bind('load', function () {
      dfd.resolve();
    }).bind('error', function () {
      alert("圖片載入錯誤，請重新整理");
    });
    if (this.complete) setTimeout(function () {
      dfd.resolve();
    }, 1000);
    imgdefereds.push(dfd);
  });
  $.when.apply(null, imgdefereds).done(function () {
    $("#status").delay(800).fadeOut(200); //delay --> 延遲幾秒才fadeOut

    $("#preloader").delay(800).fadeOut(200);
  }); //---------------------登入頁設定----------------------

  $('.js-toggle-menu').find('input').click(function () {
    $(this).parents('.js-toggle-menu').find('.form-check').removeClass('active');
    $(this).parent('.form-check').addClass('active');
  }); //---------------------側邊選單設定------------------------

  $('.js-info-opener').click(function () {
    $('.js-side-info').removeClass('open');
    var content = $(this).attr('data-target');
    $('.js-handler').addClass('open');
    $('.js-map-content').addClass('open');
    $(content).addClass('open');
  });
  $('.js-info-closer').click(function () {
    $('.js-handler').removeClass('open');
    $('.js-map-content').removeClass('open');
    $('.js-side-info').removeClass('open');
  });
  $('.js-side-menu-toggler').click(function () {
    $('.js-side-menu').toggleClass('close');
    $('.js-side-content').toggleClass('close');
  }); //---------------------頁籤設定------------------------

  $('.js-toggle-menu').find('.js-toggle-btn').click(function () {
    $(this).parents('.js-toggle-menu').find('.js-toggle-btn').removeClass('active');
    $(this).addClass('active');
  }); //---------------------線上報修搜尋設定------------------------

  var supportInfo = document.querySelector(".js-support-info");
  var supportNumber = document.querySelector(".js-support-number");
  supportInfo.addEventListener("click", function (e) {
    var str = e.target.value + ""; //supportNumber.setAttribute("placeholder", "請填入"+str);

    if (e.target.value == "設備 IP") {
      supportNumber.setAttribute("placeholder", "請填入設備 IP");
    } else if (e.target.value == "設備序號") {
      supportNumber.setAttribute("placeholder", "請填入設備序號");
    }
  }); //手風琴按鈕設定

  /*$('.js-accordion-btn').on('click', function (e) {
  		let body = $(this).attr('data-bs-target');
  	if ($(body).is(":visible")) {
  		let position=$(this).offset().top;
  		if(position > WINDOWH){
  			position = (position - WINDOWH)/2;
  		}
  		$("html,body").animate({ scrollTop: position }, 300);
  	}
  });*/
  //----------------gotop功能-----------------

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //若目前的位置距離網頁頂端>100px
      $('.gotop').fadeIn('fast');
    } else {
      $('.gotop').stop().fadeOut('fast');
    }

    var index = 0; //各單元區塊順序

    var st = $(window).scrollTop(); //現在捲軸位置

    var wh = $(window).height(); //視窗高度
  }); //RESIZE();

  /*$(window).resize(function () {
  	RESIZE();
  });*/

  function RESIZE() {
    WINDOWH = $(window).height();
    WINDOW = $(window).width();
  }
}); //JS尾端
//# sourceMappingURL=script.js.map
