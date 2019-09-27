import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

/**
 * loadChildren 懒加载，一级页面建议component , 二级页面建议使用loadChildren
 * tabs页面是底部导航页面（父页面：一般使用component）,点击导航组件上的导航栏（tab1,tab2....）显示对应导航的内容，
 * 但是导航组件tabs一直存在的(路径：tabs/tab1), 那么url就是用懒加载loadChild(), 
 */
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // children 组件下的path是没有先后顺序的
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
     
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
