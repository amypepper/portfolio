"use strict";

function handleContactClick() {
  $(".js-contact-link").click(function(event) {
    event.preventDefault();

    var element = document.getElementById("contact-me");

    element.scrollIntoView();
  });
}

handleContactClick();
