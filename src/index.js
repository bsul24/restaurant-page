import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./style.css";

home();

// Functions
function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

// Event Listeners
const navBtns = document.querySelectorAll(".navBtn");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", clearContent);
});

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
contactBtn.addEventListener("click", contact);
