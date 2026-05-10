const sidebarElms = document.querySelector(".bullet-list");
const mainContentList = document.querySelectorAll(".info-container");
let activeElm = document.querySelector(".active");

/**
 * @param {HTMLElement} element
 */
function toggleHidden(element) {
  activeElm.classList.toggle("active");
  element.classList.toggle("active");

  // update active element
  activeElm = element;
}

for (let i = 0; i < sidebarElms.childElementCount; i++) {
  const content = mainContentList[i];

  sidebarElms.children[i].addEventListener("click", (e) => {
    const doesNamesMatch =
      e.currentTarget.textContent === content.children.item(0).textContent;
    // prevents toggle if already active
    if (content.classList.contains("active") && doesNamesMatch) {
      return;
    }

    toggleHidden(mainContentList[i]);
  });
}
