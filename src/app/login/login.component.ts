import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }
email: string = '';
password: string = '';


  ngOnInit(): void {
  }

  login(){
debugger;
this.auth.signInWithEmailAndPassword(this.email, this.password)
  .catch(error=>console.log(error))
  .then(res => console.log(res));
  }
}
