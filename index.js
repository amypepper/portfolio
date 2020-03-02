"use strict";

const quizApp = `<section class="text quiz-app-text">
        <img
          class="screenshot hero"
          src="Images/Compressed/Quiz-app-1.png"
          alt="screenshot of a quiz about the languages of the world"
        />
        <p class="quiz-app-text"><em>Title:</em> Languages of the World Quiz</p>
        <p class="quiz-app-text">
          <em>Description:</em> This is a 6-question multiple-choice quiz about
          human languages from around the world. Users choose from 4 answer
          choices, move through the questions one at a time, and then receive
          immediate feedback about their answer. They're presented with a final
          score, a link to the Ethnologue website to learn more, and an
          opportunity to retake the quiz.
        </p>
        <p class="quiz-app-text">
          <em>Technologies:</em> HTML5, CSS3, Javascript, and jQuery.
        </p>

        
          <a class="link-button" href="https://amypepper.github.io/quiz-app/" target="_blank"
            >Live App</a>
       
          <a class="link-button" href="https://github.com/amypepper/quiz-app" target="_blank"
            >Repo</a>
      
        <p class="link image-link">See Full-Size Images</p>
        <div class="screenshot-thumbs-flex">
          <img
            class="screenshot-thumbs"
            src="Images/Compressed/Thumbs/Quiz-app-thumb-correct.png"
            alt="thumbnail of correct answer display"
          />
          <img
            class="screenshot-thumbs"
            src="Images/Compressed/Thumbs/Quiz-app-thumb-user-error.png"
            alt="thumbnail of user error notification"
          />
        </div>
        <div class="screenshot-thumbs-flex">
          <img
            class="screenshot-thumbs"
            src="Images/Compressed/Thumbs/Quiz-app-thumb-incorrect.png"
            alt="thumbnail of incorrect answer display"
          />
          <img
            class="screenshot-thumbs"
            src="Images/Compressed/Thumbs/Quiz-app-thumb-final.png"
            alt="thumbnail of final score display"
          />
        </div>
      </section>`;

const quizAppScreenshots = `<div
        class="screenshots-full-flex"
        role="figure"
      >
        <img
          class="screenshot full"
          src="Images/Compressed/Quiz-app-correct.png"
          alt="screenshot of correct answer display"
        />
        <img
          class="screenshot full"
          src="Images/Compressed/Quiz-app-user-error.png"
          alt="screenshot of user error notification"
        />
        <img
          class="screenshot full"
          src="Images/Compressed/Quiz-app-incorrect.png"
          alt="screenshot of incorrect answer display"
        />
        <img
          class="screenshot full"
          src="Images/Compressed/Quiz-app-final.png"
          alt="screenshot of final score display"
        />
      </div>`;

// ******************RENDER FUNCTIONS**********************

function renderLanding() {
  $(".js-main").html(landing);
}

function renderAbout() {
  $(".js-main").html(about);
}

// function () {
//   $(".js-main").html(projectLanding);
// }
// function renderContact() {
//   $(".js-main").html(contact);
//   $(".footer").addClass("hide-footer");
// }
// function renderQuizAppProject() {
//   $(".js-main").html(quizApp);
// }

function renderFullScreenshots() {
  $(".js-main").html(quizAppScreenshots);
}

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

// function handleContactClick() {
//   $(".js-contact-link").click(function(event) {
//     event.preventDefault();
//     $(".js-contact-link").addClass("menu-focus");
//     $(".js-projects-link").removeClass("menu-focus");
//     $(".js-about-link").removeClass("menu-focus");
//     renderContact();
//   });
// }

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
function callToActionLink() {
  $(".js-main").on("click", ".js-call-to-action", event => {
    event.preventDefault();
    $(".js-projects-link").addClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
  });
}

function projectDetailsLink() {
  $(".js-main").on("click", ".js-project-details-link", function(event) {
    event.preventDefault();
    $(".js-projects-link").addClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
    renderQuizAppProject();
  });
}

callToActionLink();
projectDetailsLink();
quizAppFullScreenshotsLink();
