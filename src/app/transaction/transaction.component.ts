import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
   transationData:any
   userAcc:any
   nameAcc:any
  constructor(private router:Router,private transaction:DataService){
   this.userAcc= this.transaction.userAcc
   this.nameAcc = this.transaction.userName


    this.transationData =this.transaction.getTranstion(this.userAcc)
    
  }

}
