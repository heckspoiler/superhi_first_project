let pageNumber = 0;
const outputTag = document.querySelector("h2");
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const body = document.querySelector("body");

// next funtion to increase the pageNumber

const next = function () {
  pageNumber = pageNumber + 1;
  if (pageNumber > 10) {
    pageNumber = 0;
  }
  updateSection();
};

// previous function to decrease the pageNumber

const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 1) {
    pageNumber = 50;
  }

  updateSection();
};

// random function to pick a random slide

// updating the section content and style

const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

// event listeners

nextTag.addEventListener("click", next);
previousTag.addEventListener("click", previous);
