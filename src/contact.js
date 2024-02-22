export default function contact() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const subHeader = document.createElement("h2");
  subHeader.textContent =
    "Feel free to reach out to us for any inquiries, feedback, or to make a reservation";

  // Create section to hold remaining content for page
  const contactCard = document.createElement("div");
  contactCard.classList.add("contactCard");

  // Create subsections within contactCard for address, phone, email, and socials

  // Address section
  const address = document.createElement("div");
  address.classList.add("address");
  const addressHeader = document.createElement("h3");
  addressHeader.textContent = "Address:";
  address.appendChild(addressHeader);
  const addressLines = [
    "Delicious Delights Restaurant",
    "123 Main Street,",
    "City, State 12345",
    "United States",
  ];
  addressLines.forEach((line) => {
    const addLine = document.createElement("p");
    addLine.textContent = line;
    address.appendChild(addLine);
  });

  // Phone section
  const phone = document.createElement("div");
  phone.classList.add("phone");
  const phoneHeader = document.createElement("h3");
  phoneHeader.textContent = "Phone:";
  phone.appendChild(phoneHeader);
  const phoneLine = document.createElement("p");
  phoneLine.textContent = "(123) 456-7890";
  phone.appendChild(phoneLine);

  // Email Section
  const email = document.createElement("div");
  email.classList.add("email");
  const emailHeader = document.createElement("h3");
  emailHeader.textContent = "Email:";
  email.appendChild(emailHeader);
  const emailLine = document.createElement("p");
  emailLine.textContent = "info@deliciousdelights.com";
  email.appendChild(emailLine);

  // Socials Section
  const socials = document.createElement("div");
  socials.classList.add("socials");
  const socialsHeader = document.createElement("h3");
  socialsHeader.textContent = "Social Media:";
  socials.appendChild(socialsHeader);
  const socialsLines = [
    "Facebook: DeliciousDelightsRestaurant",
    "Instagram: @DeliciousDelights",
    "Twitter: @DelightsRestaurant",
  ];
  socialsLines.forEach((line) => {
    const socLine = document.createElement("p");
    socLine.textContent = line;
    socials.appendChild(socLine);
  });

  // Add all contact sections to contact card
  contactCard.appendChild(address);
  contactCard.appendChild(phone);
  contactCard.appendChild(email);
  contactCard.appendChild(socials);

  // Add all content to content section
  content.appendChild(title);
  content.appendChild(subHeader);
  content.appendChild(contactCard);
}
