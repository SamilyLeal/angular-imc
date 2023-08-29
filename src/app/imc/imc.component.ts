import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso:number = 0;
  altura:number = 0;
  resultado:number = 0;

  calcular(){
    if(this.peso > 0 && this.altura > 0){
      const alturaM = this.altura / 100;

      this.resultado = this.peso / (alturaM * alturaM);
    } else {
      this.resultado = 0;
    }
  }
}
