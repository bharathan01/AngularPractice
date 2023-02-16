import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetails: any = {
    1000: { accno: 1000, uname: "arun", password: "1234", balance: 0 },
    1001: { accno: 1001, uname: "anu", password: "1234", balance: 0 },
    1002: { accno: 1002, uname: "raju", password: "1234", balance: 0 },
    1003: { accno: 1003, uname: "ram", password: "1234", balance: 0 }
  }
  register(accname: any, accno: any, pass: any) {
    let userDetails = this.userDetails
    if (accno in userDetails) {
      return false
    }
    else {
      userDetails[accno] = { accno, uname: accname, password: pass, balance: 0 }
      console.log(userDetails);

      return true
    }

  }

  login(accno: any, pass: any) {
    let userDetails = this.userDetails
    if (accno in userDetails) {
      if (pass == userDetails[accno]["password"]) {
        return true

      }
      else {
        return false
      }

    }
    else {
      return false
    }

  }

  Credit(accnoCredit: any, passCredit: any, amountCredit: any) {
    let userDetails = this.userDetails
    //converting string to int
    let creditAmt = parseInt(amountCredit)
    if (accnoCredit in userDetails) {
      if (passCredit == userDetails[accnoCredit]["password"]) {
        userDetails[accnoCredit]["balance"] += creditAmt
        return userDetails[accnoCredit]["balance"]

      }
      else {
        return false
      }


    }
    else {
      return false
    }



  }

  Debit(accnoDebit:any,passDebit:any,amountDabit:any){
    let userDetails = this.userDetails
    //converting string to int
    let debitAmt = parseInt(amountDabit)
    if(accnoDebit in userDetails){
      if (passDebit == userDetails[accnoDebit]["password"]) {
        if(debitAmt <= userDetails[accnoDebit]["balance"]){
          userDetails[accnoDebit]["balance"] -= debitAmt
          return userDetails[accnoDebit]["balance"]
        }
        else{
          alert("insuffient balance")
          return false
        }
       

      }
      else {
        alert("incorect password")
        return false
      }
      

    }
    else{
      alert('Account number is incorrect')
      return false
    }


  }




}



