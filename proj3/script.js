const courses = [
  {
    name: "Complete React JS ",
    price: 2.3,
  },
  {
    name: "Complete Angular JS ",
    price: 2.1,
  },
  {
    name: "Complete Vue JS ",
    price: 1.9,
  },
  {
    name: "Complete MERN ",
    price: 2.5,
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((s) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(s.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$ " + s.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

generateList();

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});
