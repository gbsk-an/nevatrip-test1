document.addEventListener("DOMContentLoaded", showMoreInfo());
document.getElementById('showMore').addEventListener("click", showMoreInfo);

function showMoreInfo() {
let item = document.getElementById('moreItems');
let button = document.getElementById('showMore');
  if (item.style.display == "none"){
      item.style.cssText= `
      display: flex;
      gap: 4em;
      margin-top: 1em;
      `;
      button.style.display = "none";
  } else {
    item.style.display = "none"}
};

export default showMoreInfo;
