//This is an import. It allows you to bring in code from somewhere else and use it in your code.
//In this case, we're importing React and a piece of code called useState from the core React library.
import React, { useState } from "react";
//Here we import our Cascading Style Sheet (CSS) so that we can style our app
//It allows us to set things like colors, font choices, and even the spacing and size of certain elements.
import "./App.css";

//A function is a block of JavaScript code that does a specfic thing.
//Our App function returns the HTML that will make up the front page of our app.
function App() {
  //Here's that useState again.
  //'State' is a fancy variable that lets you control the, well, state of your app.
  //When the State variable changes, React will re-render the page.
  //For example, you could have a `LoggedIn` State. And when that `LoggedIn` state changes...
  //React will re-render your app to show different things whether you're logged in or not.
  //So here we create an array - a box that can take in variables and functions - and we give it two things:
  //isLoggedIn (our State variable)
  //getLoginStatus (the function we use to update State)
  //We then set isLoggedIn equal to the value of the useState function, which is false.
  const [isLoggedIn, setLoginStatus] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* This is a ternary operator. */}
        {/* 
          Ternary operators are how React lets you build true/false statements based on State.
          In this case, our ternary operator says "If isLoggedIn is true, return a paragraph element saying 'You're logged in'. If it's false, return a paragraph element that says 'You're logged out.'"
        */}
        {isLoggedIn ? <p>You're logged in.</p> : <p>You're logged out.</p>}
        {/* 
          Here we have two button elements, which we're going to use to update our State.
          We're using React's onClick function, which is telling your page
          "When a user clicks me, do a specific thing."
          In this case, we want to update our State when the user clicks.
          So in each button we call setLoginStatus with the value we want to set our State to.
        */}
        <section>
          <button onClick={() => setLoginStatus(true)}>Log in</button>
          <button onClick={() => setLoginStatus(false)}>Log out</button>
        </section>
      </header>
    </div>
  );
}

export default App;
