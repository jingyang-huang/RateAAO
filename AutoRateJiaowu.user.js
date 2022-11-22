// JavaScript source code
// ==UserScript==
// @name         AutoRateJiaowu
// @namespace    https://github.com/HuangJY503/RateAAO
// @version      0.3-2022.11.22
// @description  NEU教学质量常态监测应用系统-学生评教自动评价
// @author       PepperFishhhh
// @match        *://219.216.96.4/*
// @match        *://219.216.96.4/*
// @match        *://210.30.204.138/*
// ==/UserScript==

(() => {
    "use strict";
    (f => {
        if (document.addEventListener) window.addEventListener("load", f, false);
        else if (window.attachEvent) window.attachEvent("onload", f);
    })(() => {
        var box = document.getElementById('page-wrapper');
        if (box) {
            box.addEventListener('dblclick', function(){
                //层层深入，和xml很像
                var formElement = document.getElementById('tab-TTNH3mqhZiaDBP26iGAnWG').firstElementChild;
                var array = formElement.getElementsByTagName("tr");
                //var test = formElement.childNodes;
                for (var i = 2; i<2+10; i++) {
                    array[i].childNodes[3].firstElementChild.checked=true;
                    //var test = array[i];
                    //var e = test.childNodes[3].firstElementChild;
                    //e.checked=true;
                }
                //点击提交
                var submit = document.getElementById('btn-saveResult').click();

                //var test1 = array[2].childNodes[3].firstElementChild;
                //var test2 = array[3].childNodes[3].firstElementChild;

                //var e = formElement.childNodes.getElementById('evlTable'); radio-3RSu9V44cgNAJsgNLFxWFgSPArvJbozwQQ7vMZVZm6dP
                //[].forEach.call(document.getElementById('tab-TTNH3mqhZiaDBP26iGAnWG'),e => e);
                //[].forEach.call(document.getElementsByClassName('col-lg-12'), e => {e.children[0].children[0].checked=true});
                //[].forEach.call(document.getElementsByClassName('answer answer-textarea'), e => {e.value='老师很不错，讲授也很清晰'});
                //document.getElementsByClassName('j-submitbtn')[0].click();
            });
        }
    });
})();
