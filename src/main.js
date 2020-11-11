/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  //Arrays for excuse
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke", "hit", "walked"];
  let what = ["my homework", "the keys", "the car", "chair", "book"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch"
  ];

  //random number generator
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //define the output on html
  //   let excuse = document.getElementById("excuse");
  //   function myFunction() {
  //     document.querySelector("#demo").innerHTML = "YOU CLICKED ME!";
  //   }

  //print sentence on html
  //excuse.innerHTML = // this will push the sentnce to HTML
  document.querySelector("#excuse").innerHTML =
    who[getRndInteger(0, who.length - 1)] +
    " " +
    action[getRndInteger(0, action.length - 1)] +
    " " +
    what[getRndInteger(0, what.length - 1)] +
    " " +
    when[getRndInteger(0, when.length - 1)];
};
