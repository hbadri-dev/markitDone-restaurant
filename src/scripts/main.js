/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    var t = document.querySelectorAll(".js-hamburger");
    if (t) {
      var o = function () {
        document.getElementsByTagName("html")[0].classList.toggle("is-fixed"), document.querySelector(".js-nav").classList.toggle("is-open")
      };
      t.forEach((function (e) {
        e.addEventListener("click", o, !1)
      }))
    }
  });
})();