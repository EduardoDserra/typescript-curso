export class NegocicacaoView{
     
    private elemento : HTMLElement;

    constructor(seletor : string) {
        this.elemento = document.querySelector(seletor);
    }

    template() : string {
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
           
       ` ;
        
    }

    update() : void {
        this.elemento.innerHTML = this.template();
    }
}