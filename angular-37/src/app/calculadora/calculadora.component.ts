import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

private n2 :string = "";
private n1 :string = "";
private operador :string = "";
public display :string = "0";

hacer_operación() {
  switch (this.operador) {
    case "+":
      this.n2 = (parseFloat(this.n1) + parseFloat(this.n2)).toString();
      break;
    case "-":
      this.n2 = (parseFloat(this.n1) - parseFloat(this.n2)).toString();
      break;
    case "*":
      this.n2 = (parseFloat(this.n1) * parseFloat(this.n2)).toString();
      break;
    case "/":
      this.n2 = (parseFloat(this.n1) / parseFloat(this.n2)).toString();
      break;
    case "Raiz":
      this.n2 = Math.sqrt(parseFloat(this.n1)).toString();
      break;
    case "1/x":
      this.n2 = (1 / parseFloat(this.n1)).toString();
      break;
    case "+/-":
      this.n2 = (-parseFloat(this.n1)).toString();
      break;
    case "%":
      this.n2 = ( parseFloat(this.n2)/100 * parseFloat(this.n1)).toString();
      break;
    default:
      break;
  }
}

 click_calculadora(e : any) {
  console.log("operador-->" + this.operador);
  console.log("n2 -->" + this.n2);
  console.log("n1 -->" + this.n1);
  const elemento = e.target;
  if (elemento.tagName === "BUTTON") {
    const valor = elemento.textContent;
    if (valor === "C") {
      this.n2 = "";
      this.n1 = "";
      this.operador = "";
    } else if (valor === "CE") {
      this.n2 = "";
    } else if (valor === "=") {
      if (this.n1 !== "") {
        this.hacer_operación();
        this.operador = "";
        this.n1 = "";
      }
    } else {
      if (isNaN(valor)) {
        if (this.n1 !== "") {
          this.hacer_operación();
          this.n1 = this.n2;
          this.n2 = "";
          this.operador = valor;
        } else {
          this.operador = valor;
          this.n1 = this.n2;
          this.n2 = "";
        }
      } else {
        this.n2 += valor;
      }
    }
    if (this.n2) {
      this.display = this.n2;
    } else {
      this.display = "0";
    }
  }
}


}
