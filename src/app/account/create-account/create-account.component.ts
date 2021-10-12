import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

account={
  name: '',
  email: '',
  password: ''
}

  constructor(private auth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const {email, password} = this.account;
    this.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/dashboard']);
    })
  }

}
