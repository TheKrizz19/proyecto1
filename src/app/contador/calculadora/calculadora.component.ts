import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
num: string='0';
n1=0;
op='no'

  numero(xx:string){

if(this.num=="0"){

  this.num=xx;
}
else{

  this.num+=xx;
}


  }
  operacion (s:string){
    this.igual()
    this.n1=Number(this.num)
    this.op=s
    this.num="0"


   }
   borrado(){
    this.n1=0
    this.op="no"
    this.num='0'


   }
   igual(){
    if(this.op!="no"){
let s1 =this.n1+this.op+this.num;
let sol=eval (s1)
this.num=String(sol)
this.op="no"




    }


   }




  constructor() { }

  ngOnInit(): void {
  }



   
}


