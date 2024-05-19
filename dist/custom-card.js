"use strict";
class Card extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: "closed" });
        let template = document.querySelector("#card-component");
        let items = template === null || template === void 0 ? void 0 : template.content.cloneNode(true);
        shadowRoot.append(items);
    }
}
customElements.define("custom-card", Card);
