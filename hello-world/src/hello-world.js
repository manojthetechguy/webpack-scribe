import Heading from "./components/heading/heading";
import HelloWorld from "./components/hello-world-button/hello-world-button";

const heading = new Heading();
const helloWorld = new HelloWorld();

heading.render("Hello World");
helloWorld.render();

console.log("NODE_ENV", process.env.NODE_ENV);
