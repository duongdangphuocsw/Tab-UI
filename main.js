const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let listsItem = document.querySelectorAll("ul li");
var listContents = $$(".item-content");
// handle menu
let iconMenuElement = $(".iconMenu-container i");
let menuElement = $(".list-item");
console.log(iconMenuElement);
console.log(menuElement);
iconMenuElement.onclick = function () {
  if (menuElement.style.display == "none") {
    menuElement.style.display = "block";
  } else {
    menuElement.style.display = "none";
  }
  console.log(menuElement);
};
// handle list-item
// handle tab line
let lineElement = $(".line");
console.log(lineElement);
listsItem.forEach((item, index) => {
  item.onclick = function () {
    $(".active-item").classList.remove("active-item");
    $(".active-itemContent").classList.remove("active-itemContent");
    listsItem[index].classList.add("active-item");
    listContents[index].classList.add("active-itemContent");
    lineElement.style.left = this.offsetLeft + "px";
    lineElement.style.width = this.offsetWidth + "px";
  };
});
