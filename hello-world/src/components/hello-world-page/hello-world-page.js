import Heading from "../heading/heading";
import HelloWorld from "../hello-world-button/hello-world-button";

class HelloWorldPage {
  render() {
    const heading = new Heading();
    const helloWorld = new HelloWorld();

    heading.render("Hello World");
    helloWorld.render();
  }
}

export default HelloWorldPage;
