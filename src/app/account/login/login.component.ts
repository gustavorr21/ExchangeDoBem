import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import {AngularFireAuth} from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login={
    email:'',
    password:'',
  }
  constructor(private accountService: AccountService,
              private router: Router,
              private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const {email, password} = this.login;
      debugger;
      this.auth.signInWithEmailAndPassword(email,password).then(() => {
        this.router.navigate(['/dashboard'])
      })

    }catch(error){
      console.log(error);
    }
  }
}
