import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// 使用LoginPage 组件，需要引入当前组件
// import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  // 初始化编译成功，显示登陆页面
  // router编译是从上到下编译的
  // { path: '', component: LoginPage },
  // 使用这种写法可以直接链接到
  // {path: '', loadChildren: () => import('./pages/login/Login.module').then(m => m.LoginPageModule)},
  {
    path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    
    // loadChildren: './pages/tabs/tabs.module#TabsPageModule'
  },
  
 
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'detail', loadChildren: './pages/detail/detail.module#DetailPageModule' },
];
@NgModule({
  imports: [
    // forRoot() 中的routes 就是上面声明的routers的变量
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
