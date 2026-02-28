import { myServices } from "../Data/data.js";

export function aboutMyServices() {
  const main = document.querySelector('.main');
  if(!main) return;
  const serviceSection = document.createElement('section')
  serviceSection.id = 'services';
  serviceSection.className = 'services';

  serviceSection.innerHTML = `
    <div class="service-section-div">
      <div class="service-descriptive-section">  
        <p class="az-12">${myServices.first}</p>
        <p class="sec-12">${myServices.second}</p>
        <p class="service-p">${myServices.description}</p>
      </div>
      <div class="data-cards">
        ${Object.values(myServices.services).map(createCard).join('')}
      </div>
    </div>
  `;
  main.appendChild(serviceSection);
  function createCard(item) {
    return `
    <div class="card-data">
      <div><img src="${item.logo}" alt="icon-${item.alt}" class="card-image"></div>
      <p>${item.alt}</p>
      <p>${item.description}</p>
      <a class="ax-${item.alt}" href="#">Read more <img src="../Icons/right-arrow.png" alt="Right Arrow" class="right-arrows"></a>
    </div>
    `;
  }
}