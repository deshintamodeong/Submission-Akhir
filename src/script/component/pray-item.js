class PrayItem extends HTMLElement {
    set pray(pray) {
      this._pray = pray;
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <div class="pray-info">
          <h2>${this._pray.name}</h2>
          <p>${this._pray.description}</p>
        </div>
      `;
    }
  }
   
  customElements.define('pray-item', PrayItem);