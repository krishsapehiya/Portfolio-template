export function contact() {
  const main = document.querySelector('.main');
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.className = 'contact';
  contactSection.innerHTML = `
    <p class="qx-1">Connect with me</p>
    <p class="qx-2">Get in touch</p>
    <p class="qx-3">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
    <div class="input-text-and-email">
      <input class="text-name" type="text" required maxlength="32" placeholder="Enter your text here."/>
      <input class="text-email" type="email" required maxlength="35" placeholder="Enter your email here."/>
    </div>
    <textarea class="text-area"  placeholder="Enter your message."></textarea>
    <button type="submit" required class="contact-submit" value="Submit Now"/>Submit now <img src="../Icons/right-arrow.png" alt="Right Arrow" class="right-arrow"></button>
  `;
  main.appendChild(contactSection);
}