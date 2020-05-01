import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.userService.login(this.username, this.password);
    resp.subscribe(data => {
          this.router.navigate([''])
          this.invalidLogin = false
        },
        error => {
         alert("Failed authentication !")
          this.invalidLogin = true
        }
    );

  }

}

