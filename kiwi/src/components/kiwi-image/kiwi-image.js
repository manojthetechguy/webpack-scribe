import kiwiimage from "./kiwi.jpg";
import kiwiAltText from "./altText.txt";
import "./kiwi-image.scss";

class KiwiImage {
  render() {
    const img = document.createElement("img");
    img.src = kiwiimage;
    img.alt = kiwiAltText;
    img.classList.add("kiwi-image");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default KiwiImage;
