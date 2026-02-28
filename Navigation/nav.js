import { iconsDark } from "../Icons/icons-dark.js";
import { icons } from "../Icons/icons.js";
import { darkSvg, lightSvg } from "../Mode/mode.js";
export function nav(){  
  const nav = ['Home','About','Services','Work','Contact'];
  let navHTML = ``;
  const navBar = document.querySelector('.nav-bar');
  if (!navBar) {
    console.error('nav-bar not found');
  }
  nav.forEach((navItems,index) => {
    navHTML += `
      <li class="nav-list">
        <a href="#${navItems.toLowerCase().replace(' ','-')}" class="nav-link">
          <span class='icons' data-index="${index}">${icons[index%icons.length]}</span>
          <span>${navItems}</span>
        </a>  
      </li>
    `;
  });
  const navHTMLrender = `
  <img class="banner-img" src="Icons/banner.png" alt="Banner Logo">
    <div class="div-inner">
      <ul class="nav-lists">${navHTML}</ul>
    </div>
    <div class="nav-actions"></div>
  `;
  navBar.innerHTML = navHTMLrender;
  const navActions = document.querySelector(".nav-actions")
  const themeModeSwitcher = document.createElement('div');
  themeModeSwitcher.className = 'mode'
  themeModeSwitcher.innerHTML = `
    <button class="theme-toggle" aria-label="Toggle theme">
      ${lightSvg}
    </button>
  `;
  const contactMeBtn = document.createElement('button')
  contactMeBtn.className = 'contact-btn'
  contactMeBtn.innerText = `Contact Me`;
  themeModeSwitcher.appendChild(contactMeBtn);

  navActions.appendChild(themeModeSwitcher);
  const ImageBanner = document.querySelector('.banner-img')
  const updateImage = isDark => {
    ImageBanner.src=isDark
    ?'Icons/banner-dark.png'
    :'Icons/banner.png'
    ;
  }

  const iconsSelector = (isDark) => {
    const iconSpan = document.querySelectorAll('.icons');
    iconSpan.forEach(icon => {
      const index = Number(icon.dataset.index);
      icon.innerHTML = isDark 
      ? iconsDark[index % iconsDark.length]
      :icons[index%icons.length]; 
    });
  }
  const themeBtn = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  if(savedTheme === 'dark'){
    root.classList.add('dark');
    themeBtn.innerHTML = darkSvg;
    updateImage(true);
    iconsSelector(true);
  }else{
    themeBtn.innerHTML = lightSvg;
    updateImage(false);
    iconsSelector(false);
  }

  themeBtn.addEventListener('click',()=>{
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    themeBtn.innerHTML = isDark ? darkSvg : lightSvg;
    themeBtn.className = `theme-toggle ${isDark ? 'dark' : 'light'}`;
    updateImage(isDark);
    iconsSelector(isDark);
    localStorage.setItem('theme',isDark ? 'dark' : 'light');

  });

  const navList = document.querySelectorAll('.nav-list');


  window.addEventListener('scroll',()=>{
    const isScrolled = window.scrollY > 10;
    navList.forEach(element => {
      element.classList.toggle('scroll',isScrolled);
    });
  })

  document.addEventListener('click', e => {
    if (e.target.classList.contains('contact-btn')) {
      e.preventDefault();
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }else if (e.target.classList.contains('contact-me')) {
      e.preventDefault();
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}