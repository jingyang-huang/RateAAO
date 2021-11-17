// JavaScript source code
// ==UserScript==
// @name         AutoRateJiaowu
// @namespace    https://github.com/HuangJY503/RateAAO
// @version      0.1
// @description  树维系统量化评教自动评价
// @author       PepperFishhhh
// @match        *://219.216.96.4/*
// @match        *://219.216.96.4/*
// ==/UserScript==

(() => {
    "use strict";
    (f => {
        if (document.addEventListener) window.addEventListener("load", f, false);
        else if (window.attachEvent) window.attachEvent("onload", f);
    })(() => {
        var box = document.getElementById('app-main');
        if (box) {
            box.addEventListener('dblclick', function(){
                //[].forEach.call(document.getElementsByClassName('option-list'),e => e);
                [].forEach.call(document.getElementsByClassName('option-list'), e => {e.children[0].children[0].checked=true});
                [].forEach.call(document.getElementsByClassName('answer answer-textarea'), e => {e.value='老师很不错，讲授也很清晰'});
                //document.getElementsByClassName('j-submitbtn')[0].click();
            });
        }
    });
})();
