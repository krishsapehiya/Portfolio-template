import { aboutMe, aboutMeDark} from "../Data/data.js";
export function aboutMySelf(isDark = false) {
  const main = document.querySelector('.main');
  const data = {
    ...aboutMe,
    languages:{
      ...aboutMe.languages,
      icon:isDark?aboutMeDark.languages.icon:aboutMe.languages.logo
    },
    education:{
      ...aboutMe.education,
      icon:isDark?aboutMeDark.education.icon:aboutMe.education.logo
    },projects:{
      ...aboutMe.projects,
      icon:isDark?aboutMeDark.projects.logo:aboutMe.projects.logo
    }
  };
  const aboutMeSection = document.createElement('section');
  aboutMeSection.id='about';
  aboutMeSection.className='about';

  aboutMeSection.innerHTML = `
    <p class="data-introduction">${data.introduction}</p>
    <h3 class="data-fromwhere">${data.aboutMe}</h3>
    <div class="image-text">
      <div class="image-section">
        <img 
          src="${aboutMe.image.imageSrc}"
          alt="${aboutMe.image.alt}"
          class="about-user-image"
          width="34"
          height="34"
        />
        <img src="../Icons/circular-text.png" alt="Circular Text" class="circular-icon">
        <img src="../Icons/dev-icon.png" alt="Dev Icon" class="web-dev">
      </div>
      <div class="text-section">
        <p class="data-description">${data.description}</p>
        <div class="about-cards">
          ${createCard(data.languages)}
          ${createCard(data.education)}
          ${createCard(data.projects)}
        </div>
        <p class="tools-p">Tools i use</p>
        <div class="tools-image">
          <span class="tools-icon"><img src="../Icons/vscode.png" alt="vs-code"  height="34" weight="34"></span>
          <span class="tools-icon"><img src="../Icons/mongodb.png" alt="mongoDB" height="34" weight="34"></span>
          <span class="tools-icon"><img src="../Icons/figma.png" alt="Figma" height="34" weight="34"></span>
          <span class="tools-icon"><img src="../Icons/firebase.png" alt="Firebase" height="34" weight="34"></span>
          <span class="tools-icon"><img src="../Icons/git.png" alt="Git" height="34" weight="34"></span>
        </div>
      </div>
    </div>
  `;
  main.appendChild(aboutMeSection);

  function createCard(item) {
    return `
    <div class="data-card">
      <div><img src="${item.icon}" alt="icon-${item.name}"></div>
      <div>${item.name}</div>
      ${item.tools ? `<div>${item.tools}</div>` : ``}  
    </div>`;
  }

}
export const isDark = document.documentElement.classList.contains('dark');