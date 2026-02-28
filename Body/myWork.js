import { myWorkData } from "../Data/data.js";
let a = 0;
export function myWork() {
  const main = document.querySelector('.main');
  if(!main) return;
  const workSection = document.createElement('section');
  workSection.id = 'work';
  workSection.className = 'work';
  workSection.innerHTML = `
    <div class="work-div">
      <p class="bx-1">${myWorkData.workName}</p>
      <p class="bx-2">${myWorkData.latestWork}</p>
      <p class="bx-3">${myWorkData.description}</p>
      <div class="work-card">
        ${makeWorkCard(myWorkData.work1)}
        ${makeWorkCard(myWorkData.work2)}
        ${makeWorkCard(myWorkData.work3)}
        ${makeWorkCard(myWorkData.work4)}
      </div>
      <a href="#" class="show-more-work" target="_blank">Show more<img src="../Icons/right-arrow.png" alt="Right Arrow" class="right-arrow"></a>
    </div>
  `;
  main.appendChild(workSection);
  function makeWorkCard(item) {
    return `
    <div>
      <img src="${item.img}" class="ax-${a++}" alt="${item.text1.toLowerCase()}">
      <div class="ax-00"${item.text1.toLowerCase()}">
        <p class="bx-00">${item.text1}</p>
        <p class="cx-00">${item.text2}</p>
        <img src="../Icons/send-icon.png"/ alt="send-icon" class="send-icon transition">
      </div>
    </div>
    `
    ;
  }
}
