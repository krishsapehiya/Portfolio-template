export function footers() {
  const footer = document.querySelector('footer');
  footer.id = 'footer';
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="mt-20">
      <div class="text-center">
        <a href="#!"><img src="../Icons/banner.png" alt="" class="light-banner w-36 mx-auto mb-2 dark:hidden">
          <img src="../Icons/banner-dark.png" alt="" class="dark-banner w-36 mx-auto mb-2 hidden dark:block">
        </a>
        <div class="w-max flex items-center gap-2 mx-auto">
          <img src="../Icons/mail_icon.png" alt="" class="w-5 dark:hidden">
            <img src="../Icons/mail_icon_dark.png" alt="" class="w-5 hidden dark:block">
              <a href="mailto:contact@prebuiltui.com">contact@prebuiltui.com</a>
        </div>
        <hr>
      </div>
      <div class="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p class="credits">© 2026 <a href="https://prebuiltui.com" target="_blank">PrebuiltUI</a> • Distributed by 
          <a href="https://themewagon.com" target="_blank">ThemeWagon</a> • All rights reserved.
        </p>
        <ul class="socials flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a href="#!">GitHub</a></li>
          <li><a href="#!">LinkedIn</a></li>
          <li><a href="#!">Twitter</a></li></ul>
      </div>
    </div>
  `;
  const hidden = document.querySelector(".hidden");
  document.addEventListener('load',(e)=>{
      e.preventDefault();
      hidden.classList.remove(hidden)
  })
}