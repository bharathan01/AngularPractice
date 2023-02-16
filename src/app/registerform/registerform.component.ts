import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
  
  constructor (private udata:DataService ,private router:Router){
}
 uname:any
 pass:any
 accno:any
register(){
    let uname = this.uname
    let pass = this.pass
    let accno = this.accno

    var result = this.udata.register(uname,accno,pass)
    if(result){
      alert("register successful")
      this.router.navigateByUrl('')
    }
    else{
      alert("Account allredy present!")
    }

    
  }

}
