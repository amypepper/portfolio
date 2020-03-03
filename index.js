"use strict";

// ******************RENDER FUNCTIONS**********************

// function renderLanding() {
//   $(".js-main").html(landing);
// }

// function renderAbout() {
//   $(".js-main").html(about);
// }

// function () {
//   $(".js-main").html(projectLanding);
// }
// function renderContact() {
//   $(".js-main").html(contact);
//
// }
// function renderQuizAppProject() {
//   $(".js-main").html(quizApp);
// }

// function renderFullScreenshots() {
//   $(".js-main").html(quizAppScreenshots);
// }

// ******************************EVENT LISTENERS********************

// function handleBannerClick() {
//   $(".header").on("click", "h1", event => {
//     event.preventDefault();

//     $(".js-about-link").removeClass("menu-focus");
//     $(".js-projects-link").removeClass("menu-focus");
//     $(".js-contact-link").removeClass("menu-focus");
//     $(".footer").removeClass("hide-footer");
//   });
// }

// function handleAboutClick() {
//   $(".js-about-link").click(function(event) {
//     event.preventDefault();
//     $(".js-about-link").addClass("menu-focus");
//     $(".js-projects-link").removeClass("menu-focus");
//     $(".js-contact-link").removeClass("menu-focus");
//     $(".footer").removeClass("hide-footer");
//     renderAbout();
//   });
// }

// function handleProjectsClick() {
//   $(".js-projects-link").click(function(event) {
//     event.preventDefault();
//     $(".js-projects-link").addClass("menu-focus");
//     $(".js-about-link").removeClass("menu-focus");
//     $(".js-contact-link").removeClass("menu-focus");
//     $(".footer").removeClass("hide-footer");
//   });
// }

function handleContactClick() {
  $(".js-contact-link").click(function(event) {
    event.preventDefault();
    var element = document.getElementById("contact-me");

    element.scrollIntoView();

    // $(".footer").addClass("hide-footer");

    // $(".js-contact-link").addClass("menu-focus");
    // $(".js-projects-link").removeClass("menu-focus");
    // $(".js-about-link").removeClass("menu-focus");
    // renderContact();
  });
}

// function quizAppFullScreenshotsLink() {
//   $(".js-main").on("click", ".image-link", function(event) {
//     event.preventDefault();
//     $(".js-projects-link").addClass("menu-focus");
//     $(".js-about-link").removeClass("menu-focus");
//     $(".js-contact-link").removeClass("menu-focus");
//     $(".footer").removeClass("hide-footer");
//     renderFullScreenshots();
//   });
// }
// function callToActionLink() {
//   $(".js-main").on("click", ".js-call-to-action", event => {
//     event.preventDefault();
//     $(".js-projects-link").addClass("menu-focus");
//     $(".js-about-link").removeClass("menu-focus");
//     $(".js-contact-link").removeClass("menu-focus");
//     $(".footer").removeClass("hide-footer");
//   });
// }

// function projectDetailsLink() {
//   $(".js-main").on("click", ".js-project-details-link", function(event) {
//     event.preventDefault();
//     $(".js-projects-link").addClass("menu-focus");
//     $(".js-about-link").removeClass("menu-focus");
//     $(".js-contact-link").removeClass("menu-focus");
//     $(".footer").removeClass("hide-footer");
//     renderQuizAppProject();
//   });
// }

// callToActionLink();
// projectDetailsLink();
// quizAppFullScreenshotsLink();
handleContactClick();
