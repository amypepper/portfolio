"use strict";

const landing = `<section id="landing" class="text headline">
        <p>
          My name's Amy and I am a<span>full stack developer</span>and
          self-professed Francophile.
        </p>
        <p>
          <span>Accessibility</span>and<span>UX</span>matter a lot to me, and
          I'm all about the<span>details.</span>
        </p>
        <p>
          <a href="#"
            ><button class="link-button call-to-action" type="button">
              See my work
            </button></a
          >
        </p>
      </section>`;

const about = `<section id="about" class="text">
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

const projectLanding = `<section id="projects" class="text">
        <article>
          <a href="#"
            ><img
              class="screenshot"
              src="Images/Compressed/Quiz-app-1.png"
              alt="screenshot of a quiz about the languages of the world"
          /></a>
          <h2>Languages of the World Quiz</h2>
          <p>
            An interactive multiple-choice quiz about human languages from
            around the world.
          </p>
          <p>
            <a href="#"
              ><button class="link-button" type="button">Project Details</button></a
            >
          </p>
        </article>
      </section>`;

const quizApp = `<section id="quiz-app-summary" class="text quiz-app-text">
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

        <p>
          <a href="https://amypepper.github.io/quiz-app/"
            ><button class="link-button" type="button">Live App</button></a
          >
        </p>
        <p>
          <a href="https://github.com/amypepper/quiz-app"
            ><button class="link-button" type="button">Repo</button></a
          >
        </p>
        <p class="image-link">
          <a class="plain-link" href="#">See Full-Size Images</a>
        </p>
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
        id="quiz-app-images-full"
        class="screenshots-full-flex"
        role="figure"
      >
        <img
          class="screenshot"
          src="Images/Compressed/Quiz-app-correct.png"
          alt="screenshot of correct answer display"
        />
        <img
          class="screenshot"
          src="Images/Compressed/Quiz-app-user-error.png"
          alt="screenshot of user error notification"
        />
        <img
          class="screenshot"
          src="Images/Compressed/Quiz-app-incorrect.png"
          alt="screenshot of incorrect answer display"
        />
        <img
          class="screenshot"
          src="Images/Compressed/Quiz-app-final.png"
          alt="screenshot of final score display"
        />
      </div>`;

function renderLanding() {
  $(".js-main").html(landing);
}

function handleAboutClick() {
  $(".js-about-link").click(function(event) {
    renderAbout();
    event.preventDefault();
    $(".js-about-link").addClass("menu-focus");
    $(".js-projects-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
  });
}
function renderAbout() {
  $(".js-main").html(about);
}

function handleProjectLandingClick() {
  $(".js-projects-link").click(function(event) {
    renderProjectLanding();
    event.preventDefault();
    $(".js-projects-link").addClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
    $(".js-contact-link").removeClass("menu-focus");
  });
}
function handleContactClick() {
  $(".js-contact-link").click(function(event) {
    event.preventDefault();
    $(".js-contact-link").addClass("menu-focus");
    $(".js-projects-link").removeClass("menu-focus");
    $(".js-about-link").removeClass("menu-focus");
  });
}
function renderProjectLanding() {
  $(".js-main").html(projectLanding);
}

function renderQuizAppProject() {
  $(".js-main").html(quizApp);
}

function renderFullScreenshots() {
  $(".js-main").html(quizAppScreenshots);
}

renderLanding();
handleAboutClick();
handleProjectLandingClick();
handleContactClick();
