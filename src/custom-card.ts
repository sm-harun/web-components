class Card extends HTMLElement {
	
	constructor() {
		super();

		let shadowRoot = this.attachShadow( { mode: "closed" } );
		
		let template = document.querySelector<HTMLTemplateElement>("#card-component");
		let items = template?.content.cloneNode(true);

		shadowRoot.append(items);
	}
}

customElements.define("custom-card", Card);
