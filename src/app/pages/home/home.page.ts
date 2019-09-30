import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  name: string;
  ID: number;
  Mount: number;

  constructor(
    public router: Router,
    public nav: NavController
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.nav.pop();  // 返回到上一个页面
    // this.nav.back();
    // this.nav.navigateBack('/');  // 可以指定返回的页面路径
    console.log("1111");
  }


}
