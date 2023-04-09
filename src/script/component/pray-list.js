import './pray-item.js';
 
class PrayList extends HTMLElement {
  set prayers(prayers) {
    this._prayers = prayers;
    this.render();
  }
 
  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.innerHTML = '';
    this._prayers.forEach(pray => {
      const prayItemElement = document.createElement('pray-item');
      prayItemElement.pray = pray;
      
      this.appendChild(prayItemElement);
    });
  }
}
 
customElements.define('pray-list', PrayList);