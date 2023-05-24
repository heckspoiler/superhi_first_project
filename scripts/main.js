const tag = document.querySelector("h2");
const nextTag = document.querySelector("footer img.next");
const body = document.querySelector("body");

tag.innerHTML = "this is a test";

tag.style.color = "red";

const updateTag = function () {
  tag.innerHTML = "fucking your face";
  tag.style.color = "blue";
  body.style.backgroundColor = "violet";
};

nextTag.addEventListener("click", updateTag);
