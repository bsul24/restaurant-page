export default function menu() {
  const items = [
    {
      name: "Savory Shrimp Linguine",
      desc: "Succulent shrimp tossed with al dente linguine in a garlic and herb-infused butter sauce.",
      price: 16.99,
    },
    {
      name: "Crispy Chicken Caesar Salad",
      desc: "Crisp romaine lettuce, tender grilled chicken breast, crunchy croutons, and shaved Parmesan cheese, all tossed in creamy Caesar dressing.",
      price: 12.49,
    },
    {
      name: "Juicy Angus Burger",
      desc: "A juicy Angus beef patty grilled to perfection, topped with melted cheddar cheese, crispy bacon, lettuce, tomato, and tangy barbecue sauce on a toasted brioche bun.",
      price: 14.99,
    },
    {
      name: "Mouthwatering Margherita Pizza",
      desc: "Freshly made pizza dough topped with tangy marinara sauce, slices of ripe tomatoes, creamy mozzarella cheese, and fragrant basil leaves.",
      price: 11.99,
    },
    {
      name: "Hearty Beef Stew",
      desc: "Tender chunks of beef simmered with carrots, potatoes, onions, and celery in a rich, savory beef broth.",
      price: 15.99,
    },
    {
      name: "Grilled Vegetable Panini",
      desc: "Grilled zucchini, eggplant, bell peppers, and onions, layered with melted provolone cheese and pesto mayo on toasted ciabatta bread.",
      price: 10.99,
    },
    {
      name: "Creamy Mushroom Risotto",
      desc: "Arborio rice cooked to creamy perfection with sautéed mushrooms, garlic, onions, and a touch of Parmesan cheese.",
      price: 13.99,
    },
    {
      name: "Deluxe Seafood Platter",
      desc: "A delectable assortment of grilled salmon, jumbo shrimp, and seared scallops, served with lemon herb butter and your choice of two sides.",
      price: 29.99,
    },
    {
      name: "Tender BBQ Ribs",
      desc: "Slow-cooked pork ribs basted with tangy barbecue sauce, served with coleslaw and seasoned fries.",
      price: 25.99,
    },
    {
      name: "Decadent Chocolate Lava Cake",
      desc: "Rich and indulgent chocolate cake with a molten chocolate center, served warm with a scoop of vanilla ice cream and drizzled with raspberry sauce.",
      price: 8.99,
    },
  ];

  const content = document.querySelector("#content");
  const title = document.createElement("h2");

  title.textContent = "Menu";

  content.appendChild(title);

  items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("itemCard");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("itemDesc");
    itemDesc.textContent = item.desc;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.textContent = `$${item.price}`;

    itemCard.appendChild(itemName);
    itemCard.appendChild(itemDesc);
    itemCard.appendChild(itemPrice);
    content.appendChild(itemCard);
  });
}
