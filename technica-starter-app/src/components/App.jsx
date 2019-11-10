// This is a good file to start learning & hacking!

// This is a comment for a .jsx file
// You can leave notes or explanations in comments and it won't do anything to your code.

// These are imports. They let you use code from other places.
import React from "react"; // This is an import for React. Learn more here https://reactjs.org/
import Panel from "./Panel"; // This is an import for a component we've created.
import ChartExample from "./ChartExample";

import visionistLogo from "../images/visionist-logo.png"; // This imports an image in our project
import testLogo from "../images/logo.png";

import "./App.css"; // This imports a stylesheet.

// This is a component
class App extends React.Component {
  // This is a function.
  // This function works inside the component to create the content you see in the app.
  // The content consists of HTML and other components.
  // You can learn more about HTML here https://www.w3schools.com/html/html_intro.asp
  render() {
    let x = 10;
    return (
      <>
        {/* This is a comment inside the HTML content */}
        <div className="App">
          <div className="header">
            {/* This displays the image we imported */}
            <img src={testLogo} />
          </div>

          <div className="content-area">
            <p>
              FinLit takes your responses to a series of games and analyzes your financial personality. 
            </p>

            {/* The href points at the URL clicking the link takes you to
            <a href="https://www.visionistinc.com/">
              This is a link to Visionist's website.
            </a> */}

            {/* This is the component we imported from another file to use */}
            <Panel> Balloon Game </Panel>
            <Panel> results of balloon game</Panel>

            <Panel> visualization </Panel>



            <ChartExample />
          </div>
        </div>
      </>
    );
  }
}

export default App;
