const images = document.querySelectorAll(".images .mask");

function AnimateImage(image) {
  AppearImage(image);
  window.setTimeout(() => {
    DisappearImage(image);
  }, 6000);
}

function AppearImage(image) {
  image.style.zIndex = "1";
  image.classList.add("appear");
}

function DisappearImage(image) {
  image.style.zIndex = "0";
  image.classList.add("disappear");
  window.setTimeout(() => {
    image.style.zIndex = "-1";
    image.classList.remove("appear");
    image.classList.remove("disappear");
  }, 1000);
}

export default function ImagesAnimation() {
  let i = 0;
  AnimateImage(images[i % 3]);
  i++;

  window.setInterval(() => {
    AnimateImage(images[i % 3]);
    i++;
  }, 6000);
}
