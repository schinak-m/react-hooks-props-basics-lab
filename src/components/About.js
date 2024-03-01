import React from "react";

function Bio(props){
  const isPassed = props.bio
  if(isPassed){
    return <p>{props.bio}</p>
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {Bio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
