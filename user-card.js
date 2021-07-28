export class UserCard extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `<button>Click on me!</button>`;
    }
  }
  window.customElements.define('user-card', UserCard);
