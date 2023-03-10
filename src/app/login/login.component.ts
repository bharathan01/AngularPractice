import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any

  constructor(private router:Router, private uDatas:DataService ,private fb:FormBuilder){
    this.loginForm = this.fb.group({
      accno:['',[Validators.required,Validators.pattern('[0-9]+')]],
      pass:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

    })
  }
  

// event Binding Using Event Methode
//----------------------------------
  // data = ""
  // password =""

  
  // accnumber(event:any){
  //   this.data = event.target.value
  // }
  // passwords(pass:any){
  //   this.password = pass.target.value
    
  // }
  // login(){
  //   var accnum = this.data
  //   var pass = this.password
  //   var userDetails = this.userDetails

  //   if(accnum in userDetails){
  //     if(pass == userDetails[accnum]["password"]){
  //       alert("log in succesful")

  //     }
  //     else{
  //       alert("password is incurrect")
  //     }

  //   }
  //   else{
  //     alert("invalid user")
  //   }
    
  // }
  //-------------------------------------------
  // <!-- event binding Using template rendering variable methode -->
  // login(accno:any , passwrd:any){
  //   var accnum = accno.value
  //   var pass = passwrd.value
  //   var userDetails = this.userDetails

  //   if(accnum in userDetails){
  //     if(pass == userDetails[accnum]["password"]){
  //       alert("log in succesful")

  //     }
  //     else{
  //       alert("password is incurrect")
  //     }

  //   }
  //   else{
  //     alert("invalid user")
  //   }
    
  // }
  // ------------------------------------------------------------------------
  // <!-- #two way binding  -->
  // <!-- 1.methode ngmodel -->
  // <!-- ----------------------------------------------------------------------------------------- -->
  
  login(){

    var accnum = this.loginForm.value.accno
    var pass = this.loginForm.value.pass
    if(this.loginForm.valid){
      let result = this.uDatas.login(accnum,pass)
    if(result){
      alert('log in successful')
      this.router.navigateByUrl('home')
    }
    else{
      alert('Incorrect account number or password')
    }
    
  }
  else{
    alert('Please check the form inputs')

  }

  }

    
  // -----------------------------------------------------------------
}
