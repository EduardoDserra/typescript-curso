export class NegocicacaoView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
         <table class="table-hover table-boardered"> 
            <thead>
                <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                </tr>
            </thead>
         </table>
           
       `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
