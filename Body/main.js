import { mainData } from "../Data/data.js";
export function mains() {
  const main = document.querySelector('.main');
  const homeSection = document.createElement('section');
  homeSection.id='home'
  homeSection.className='home';

  homeSection.innerHTML = `
    <img 
      src="${mainData.img.imgSrc}"
      alt="${mainData.img.alt}"
      class="profile-image"
    />
    
    <p class="name">${mainData.name}<img class="hand-hi" src="../Icons/hand-icon.png"></p>
    <h3 class="fromwhere">${mainData.fromWhere}</h3>
    <p class="description">${mainData.description}</p>
    <div class="buttons">
      <a class="contact-me" href="">Contact Me</a>
      <button class="my-resume">My Resume <svg class="download-icon"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718L12 15.577ZM6.615 19q-.69 0-1.152-.462Q5 18.075 5 17.385v-2.423h1v2.423q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-2.423h1v2.423q0 .69-.462 1.152q-.463.463-1.153.463H6.615Z" fill="currentColor"/></svg></button>
    </div>
  `;
  main.appendChild(homeSection);

  document.querySelector('.my-resume').addEventListener('click', () => {
    window.open('/resume.pdf', '_blank');
  });
  const root = document.documentElement;
  const button = document.querySelector('.my-resume');
  function downloadIconTheme() {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    if(isDark){
      button.innerHTML = `<img class="download-icon dark" src="../Icons/download-icon-dark.png">`;
    }else {
      button.innerHTML = `<img class="download-icon" src="../Icons/download-icon.png">`;
    }
  }
}

