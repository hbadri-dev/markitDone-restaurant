/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    let hamburger = document.querySelectorAll(".js-hamburger");
    if (hamburger) {
      let openNav = () => {
        document.getElementsByTagName("html")[0].classList.toggle("is-fixed"), document.querySelector(".js-nav").classList.toggle("is-open")
      };
      hamburger.forEach(((e) => {
        e.addEventListener("click", openNav, !1)
      }))
    }
  });

  let tab = document.querySelectorAll(".js-tab .c-tab__nav li");
  if (tab) {
    let tabPane = document.querySelectorAll(".js-tab .c-tab__pane");

    let openTab = (id) => {
      tab.forEach((e, index) => {
        if(id == index){
          e.classList.add("is-active");
          tabPane[index].classList.add("is-active");
        }else{
          e.classList.remove("is-active");
          tabPane[index].classList.remove("is-active");
        }
      })
    }

    tab.forEach(((e, index) => {
      e.addEventListener("click", () => { openTab(index) })
    }))
  }
})();