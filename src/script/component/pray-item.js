class PrayItem extends HTMLElement {
    set pray(pray) {
      this._pray = pray;
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <div class="pray-info">
          <h2>${this._pray.doa}</h2>
          <p>${this._pray.ayat}</p>
        </div>
      `;
    }
  }
   
  customElements.define('pray-item', PrayItem);