import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   accnoCredit:any
   passCredit:any
   amountCredit:any

   accnoDebit:any
   passDebit:any
   amountDabit:any

  constructor( private data:DataService,private route:Router){

  }
  credit(){
   let accnoCredit = this.accnoCredit
   let passCredit = this.passCredit
   let amountCredit = this.amountCredit
   let result = this.data.Credit(accnoCredit,passCredit,amountCredit)
   if(result){
    alert(`your account as credited with an amount of ${amountCredit},your account balance is ${result}`)
   }
   else{
    alert('incorrect password or Account number')
   }

  }
  debit(){
    let accnoDebit  = this.accnoDebit
    let passDebit = this.passDebit
    let amountDabit = this.amountDabit
    let result = this.data.Debit(accnoDebit,passDebit,amountDabit)
    if(result){
      alert(`your account as debit with an amount of ${amountDabit},your account balance is ${result}`)
     }
     else{
      alert('incorrect password or Account number')
     }



  }


}
