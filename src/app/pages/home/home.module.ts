import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 使用input输入框需要引入FormsModule模块
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ComponentsModule } from '../../components/components.module';
import { ListComponent } from '../../components/list/list.component'
import { ProductComponent } from '../../components/product/product.component';



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
  // 在模块中使用某个组件时，模块需要导入，但是组件也需要声明
  declarations: [
    HomePage,
    // ListComponent,
    // ProductComponent,
  ],
  // exports: [
  //   ComponentsModule
  // ]
})
export class HomePageModule {}
