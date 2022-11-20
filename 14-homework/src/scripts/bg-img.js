import Image from "../assets/star-wars-bg.jpg";

function backgroundImage() {
  let body = document.querySelector("body");
  body.style.backgroundImage = `url(${Image})`;
  body.style.backgroundSize = "cover";
  body.style.backgroundAttachment = "fixed";
}

export default backgroundImage;
