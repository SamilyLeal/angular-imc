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
  classificacao:string = '';

  calcular(){
    if(this.peso > 0 && this.altura > 0){
      const alturaM = this.altura / 100;

      this.resultado = this.peso / (alturaM * alturaM);

      if(this.resultado < 18.5){
        this.classificacao = 'Magreza';
      } else if(this.resultado < 24.9){
        this.classificacao = 'Peso normal';
      } else if(this.resultado < 29.9){
        this.classificacao = 'Sobrepeso';
      } else if(this.resultado < 34.9){
        this.classificacao = 'Obesidade I';
      } else if(this.resultado < 40){
        this.classificacao = 'Obesidade II';
      } else {
        this.classificacao = 'Obesidade III';
      }
      
    } else {
      this.resultado = 0;
    }
  }
}
