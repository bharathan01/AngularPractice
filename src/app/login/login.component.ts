import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = ""
  password =""

  userDetails:any = {
    1000:{acno:1000,uname:"arun",password:"1234",balance:1000},
    1001:{acno:1001,uname:"anu",password:"1234",balance:1000},
    1002:{acno:1002,uname:"raju",password:"1234",balance:1000},
    1003:{acno:1003,uname:"ram",password:"1234",balance:1000}
  }

  accnumber(event:any){
    this.data = event.target.value
  }
  passwords(pass:any){
    this.password = pass.target.value
    
  }
  login(){
    var accnum = this.data
    var pass = this.password
    var userDetails = this.userDetails

    if(accnum in userDetails){
      if(pass == userDetails[accnum]["password"]){
        alert("log in succesful")

      }
      else{
        alert("password is incurrect")
      }

    }
    else{
      alert("invalid user")
    }
    
  }

}
