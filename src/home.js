import Img from "./restaurantBackground.jpg";

export default function home() {
  const content = document.querySelector("#content");
  const homeCard = document.createElement("div");
  homeCard.classList.add("homeCard");
  const line1 = document.createElement("p");
  const line2 = document.createElement("p");
  const line3 = document.createElement("p");

  line1.textContent =
    "Experience the best flavors in town at Delicious Delights.";
  line2.textContent =
    "From mouthwatering dishes to cozy ambiance, we've got everything you need for a memorable dining experience.";
  line3.textContent = "Join us today and taste the difference!";

  homeCard.appendChild(line1);
  homeCard.appendChild(line2);
  homeCard.appendChild(line3);
  content.appendChild(homeCard);
}
