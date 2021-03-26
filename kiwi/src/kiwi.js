import Heading from "./components/heading/heading";
import KiwiImage from "./components/kiwi-image/kiwi-image";

const heading = new Heading();
const kiwiImage = new KiwiImage();

heading.render("Kiwi");
kiwiImage.render();

// import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
//   const HelloWorldButton = HelloWorldButtonModule.default;
//   const helloWorldButton = new HelloWorldButton();
//   helloWorldButton.render();
// });
