const heading = document.querySelector("h1");
heading.textContent = "Hello world!";

heading.addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

const image = document.querySelector("img");

image.addEventListener("click", () => {
  const raccoonNumber = Math.round(Math.random() * (25 - 1) + 1);
  console.log(raccoonNumber);
  console.log(
    "../../resources/images/racoons/Raccoon" + String(raccoonNumber) + ".jpg",
  );
  image.setAttribute(
    "src",
    "../../resources/images/raccoons/Raccoon" + String(raccoonNumber) + ".jpg",
  );
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}.`;
  };
}

const book = new Book("Harry Potter", "J.K. Rowling", "13452", true);
console.log(book.info());
const other_book = new Book("Mistborn", "Brandon Sanderson", "32948", false);
console.log(other_book.info());
