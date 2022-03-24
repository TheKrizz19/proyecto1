import { Component } from "@angular/core";

@Component({

    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    titulo: String = 'Contador Application';
    contador: number =0;
    base: number=7;
    agregar(incremento:number){
         this.contador+=incremento;
    }
    disminuir(){
        this.contador--
    }
}
//crear un componente calculadora, agregarlo al modulo de contador