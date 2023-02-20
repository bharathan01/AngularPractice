import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName:any
  userAcc:any
  userDetails:any

  constructor() { 
    this.getData()
  }
  // userDetails: any = {
  //   1000: { accno: 1000, uname: "arun", password: "1234", balance: 0 ,transations:[]},
  //   1001: { accno: 1001, uname: "anu", password: "1234", balance: 0  ,transations:[]},
  //   1002: { accno: 1002, uname: "raju", password: "1234", balance: 0 ,transations:[] },
  //   1003: { accno: 1003, uname: "ram", password: "1234", balance: 0  ,transations:[]}
  // }
  saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.userName){
      //the type of the data is string then no need to covert to json
      localStorage.setItem("userName",this.userName)
    }
    if(this.userAcc){
      localStorage.setItem("userAcc",JSON.stringify(this.userAcc))
    }
  }

  getData(){
    if(localStorage.getItem("database")){
      //in ts we need to pass an empty (if the data is not in localstorage then return empty string)
      this.userDetails = JSON.parse(localStorage.getItem("database")  || "")
    }
    if(localStorage.getItem("userName")){
      this.userName = localStorage.getItem("userName")
    }
    if(localStorage.getItem("userAcc")){
      this.userAcc = JSON.parse(localStorage.getItem("userAcc")  || "")
    }
  }



  register(accname: any, accno: any, pass: any) {
    let userDetails = this.userDetails
    if (accno in userDetails) {
      return false
    }
    else {
      userDetails[accno] = { accno, uname: accname, password: pass, balance: 0,transations:[] }
      this.saveData()
      

      return true
    }

  }

  login(accno: any, pass: any) {
    let userDetails = this.userDetails
    if (accno in userDetails) {
      if (pass == userDetails[accno]["password"]) {
        this.userName = userDetails[accno]["uname"]
        this.userAcc = accno
        //calling the saveData function to store the current user to local storage
        this.saveData()
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
        //transation details
        userDetails[accnoCredit]["transations"].push({type:"CREDIT",amount:creditAmt})
        this.saveData()
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
          userDetails[accnoDebit]["transations"].push({type:"DEBIT",amount:debitAmt})
          this.saveData()
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
  getTranstion(accountNo:any){
    return this.userDetails[accountNo]["transations"]
  }




}



