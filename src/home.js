import Img from "./restaurantBackground.jpg";

export default function home() {
  const content = document.querySelector("#content");
  const title = document.createElement("h1");
  // const backgroundImg = new Image();
  const line1 = document.createElement("p");
  const line2 = document.createElement("p");
  const line3 = document.createElement("p");

  title.textContent = "Delicious Delights";
  line1.textContent =
    "Experience the best flavors in town at Delicious Delights.";
  line2.textContent =
    "From mouthwatering dishes to cozy ambiance, we've got everything you need for a memorable dining experience.";
  line3.textContent = "Join us today and taste the difference!";
  // backgroundImg.src = Img;

  content.appendChild(title);
  content.appendChild(line1);
  content.appendChild(line2);
  content.appendChild(line3);
  // content.appendChild(backgroundImg);
}
