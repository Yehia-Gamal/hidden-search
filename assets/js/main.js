let search = document.querySelector(".search");
let input = document.querySelector(".input");
let btnSearch = document.querySelector(".btn").addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
