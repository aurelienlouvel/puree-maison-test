import ImagesAnimation from "./images.js";
import {
  SplitIntoWords,
  SplitIntoLines,
  RevealText,
  MoveText,
} from "./text.js";

export default function RevealHeader() {
  let h1s = document.querySelectorAll("h1");
  let h4 = document.querySelector("h4");
  let h3 = document.querySelector("h3");
  SplitIntoWords(h4);
  SplitIntoLines(h4);

  document.querySelector("main").style.transform = "translateY(-100%)";
  window.setTimeout(() => {
    h1s.forEach((h1, i) => {
      window.setTimeout(() => {
        MoveText(h1);
      }, 100 * i);
    });
  }, 200);
  window.setTimeout(() => {
    RevealText(h4);
  }, 1000);
  window.setTimeout(() => {
    ImagesAnimation();
  }, 1200);
  window.setTimeout(() => {
    RevealText(h3);
  }, 2200);
}
