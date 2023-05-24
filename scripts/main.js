let pageNumber = 0;

// content for the pages

const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    copy: "enraged by little things",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "willing to cut his hair for a job",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: `call my mom i mean agent and <a href="#" class="anchor">download my resume</a>`,
    background: "#faffb8",
    circle: "#b472e6",
  },
];

// pick the relevant tags

const outputTag = document.querySelector("h2");
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const body = document.querySelector("body");
const circle = document.querySelector("section div.circle");

// next function to increase the pageNumber

const next = function () {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
  updateSection();
};

// previous function to decrease the pageNumber

const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// random function to pick a random slide

const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

// updating the section content and style

const updateSection = function () {
  const currentPage = pages[pageNumber];
  outputTag.innerHTML = currentPage.copy;
  body.style.backgroundColor = currentPage.background;
  circle.style.backgroundColor = currentPage.circle;
  body.style.transition = "all 0.5s ease-in-out";
  circle.style.transition = "all 0.5s ease-in-out";
};

// event listeners

nextTag.addEventListener("click", next);
previousTag.addEventListener("click", previous);
randomTag.addEventListener("click", random);

// when a user presses a key check for arrow left or right and do next or prev correctly

document.addEventListener("keyup", function (event) {
  console.log(event);
  if (event.key == "ArrowRight") {
    next();
  }
  if (event.key == "ArrowLeft") {
    previous();
  }
});
