import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";
export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(x => {
                    return `
                        <tr>
                            <td>${
                                new Intl.DateTimeFormat().format(x.data)
                            }</td>
                            <td>${x.quantidade}</td>
                            <td>${x.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }
}