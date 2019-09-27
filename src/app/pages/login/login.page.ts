import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public nav: NavController
  ) { }

  ngOnInit() {
  }

  login(){
    // 以下三种方式都能导航到home页面
    this.router.navigateByUrl('/tabs');
    // this.router.navigate(['/tabs']);
    // this.nav.navigateForward('/tabs');
    console.log("hahahaha")
  }



}
