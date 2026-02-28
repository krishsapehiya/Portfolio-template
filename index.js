import { aboutMySelf ,isDark} from "./Body/aboutMe.js";
import { contact } from "./Body/contact.js";
import { footers } from "./Body/footer.js";
import {mains} from "./Body/main.js";
import { myWork } from "./Body/myWork.js";
import { aboutMyServices } from "./Body/services.js";
import { nav } from "./Navigation/nav.js";

document.addEventListener("DOMContentLoaded",()=>{
  nav();
  mains();
  aboutMySelf(isDark);
  aboutMyServices();
  myWork();
  contact();
  footers();
});

