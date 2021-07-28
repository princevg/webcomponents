export class UserCard extends HTMLElement{
    console.log("Test")
    connectedCallback() {
        console.log("Test Inside")
        this.innerHTML = `<button>Click on me!</button>`;
    }
  }
  window.customElements.define('user-card', UserCard);
