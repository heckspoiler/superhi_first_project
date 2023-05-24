let pageNumber = 0;
const outputTag = document.querySelector("h2");
const nextTag = document.querySelector("footer img.next");
const randomTag = document.querySelector("footer img.random");
const body = document.querySelector("body");

const next = function () {
  pageNumber = pageNumber + 1;
  updateSection();
};

const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

nextTag.addEventListener("click", next);
