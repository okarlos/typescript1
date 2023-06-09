export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        throw Error('Classe filha precisa implementar o método template');
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}
