"use strict";

const landing = `<section class="text headline">
        <p>
          My name's Amy and I am a<span class="emphasize">full stack developer</span>and
          self-professed Francophile.
        </p>
        <p>
          <span class="emphasize">Accessibility</span>and<span class="emphasize">UX</span>matter a lot to me, and
          I'm all about the<span class="emphasize">details.</span>
        </p>
          <button class="link-button call-to-action" type="button">
              See my work
          </button>
       
      </section>`;

const about = `<section class="text">
        <p>
          I love web development because I get so much satisfaction from
          building something with my own two hands (well, a keyboard too...).
          Couple that with the fact that I get to do it using language, and I am
          one happy developer.
        </p>
        <p>
          I got my bachelor's in Linguistics, and I love nothing more than to
          dive into the mechanics of language, be it a human or computer
          language. Architecting UI's that are intuitive, organized, and
          accessible is a challenge that I relish!
        </p>
        <img
          class="headshot"
          src="Images/Compressed/Headshot.jpg"
          alt="headshot of Amy Pepper wearing glasses and a curly asymmetrical haircut"
        />
        <p>
          I also enjoy corralling ideas and information into a structure that
          both computers and humans can understand. I love bringing order to
          chaos: you can find me at home regularly reorganizing my stuff because
          of the joy and stress relief that it brings me.
        </p>
      </section>`;

const projectLanding = `<section class="text project-landing">
        <article class="project-landing">
          <img
            class="screenshot landing"
            src="Images/Compressed/Quiz-app-1.png"
            alt="screenshot of a quiz about the languages of the world"
          />
          <h2 class="project-heading">Languages of the World Quiz</h2>
          <p>
            An interactive multiple-choice quiz about human languages from
            around the world.
          </p>
          <button class="link-button js-project-details-link" type="button">Project Details</button>
        </article>
      </section>`;

const contact = `<section class="contact">
<h2 class="text contact">Contact Me</h2>

<a class="link email-link" href="mailto:amycarlsonpepper@gmail.com">amycarlsonpepper@gmail.com</a>

<div class="logo-container">
<a class="contact-page-logo" href="https://www.linkedin.com/in/amycarlsonpepper" target="_blank"
  ><img
    class="contact-logo"
    src="Images/Compressed/LI-In-Bug.png"
    alt="LinkedIn logo that links to Amy's LinkedIn profile"
/></a>
<a class="contact-page-logo" href="https://github.com/amypepper" target="_blank"
  ><img
    class="contact-logo"
    src="Images/Compressed/GitHub-Mark-64px.png"
    alt="GitHub logo that links to Amy's GitHub profile"
/></a>
</div>
</section>`;

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

function renderProjectLanding() {
  $(".js-main").html(projectLanding);
}
function renderContact() {
  $(".js-main").html(contact);
  $(".footer").addClass("hide-footer");
}
function renderQuizAppProject() {
  $(".js-main").html(quizApp);
}

function renderFullScreenshots() {
  $(".js-main").html(quizAppScreenshots);
}

// ******************************EVENT LISTENERS********************

function handleBannerClick() {
  $(".header").on("click", "h1", event => {
    event.preventDefault();

    $(".js-about-link").removeClass("menu-focus");
    $(".js-projects-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
    renderLanding();
  });
}
function accessibleBannerClick() {
  $(".header").on("keypress", "#home-page-link", event => {
    event.preventDefault();

    if (event.which == 13) {
      renderLanding();
    }
  });
}
function handleAboutClick() {
  $(".js-about-link").click(function(event) {
    event.preventDefault();
    $(".js-about-link").addClass("menu-focus");
    $(".js-projects-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
    renderAbout();
  });
}

function handleProjectsClick() {
  $(".js-projects-link").click(function(event) {
    event.preventDefault();
    $(".js-projects-link").addClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
    renderProjectLanding();
  });
}

function handleContactClick() {
  $(".js-contact-link").click(function(event) {
    event.preventDefault();
    $(".js-contact-link").addClass("menu-focus");
    $(".js-projects-link").removeClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    renderContact();
  });
}

function quizAppFullScreenshotsLink() {
  $(".js-main").on("click", ".image-link", function(event) {
    event.preventDefault();
    $(".js-projects-link").addClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
    renderFullScreenshots();
  });
}
function callToActionLink() {
  $(".js-main").on("click", ".call-to-action", event => {
    event.preventDefault();
    $(".js-projects-link").addClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
    $(".footer").removeClass("hide-footer");
    renderProjectLanding();
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

renderLanding();
handleBannerClick();
accessibleBannerClick();
handleAboutClick();
handleProjectsClick();
handleContactClick();
callToActionLink();
projectDetailsLink();
quizAppFullScreenshotsLink();
