export abstract class View<T> {

    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    abstract template(model: T): string;

    update(model: T): void {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}