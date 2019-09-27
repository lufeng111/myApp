import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 使用input输入框需要引入FormsModule模块
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ComponentsModule } from '../../components/components.module';



const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // 导入ComponentsModule
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
  ],
  // exports: [
  //   ComponentsModule
  // ]
})
export class HomePageModule {}
