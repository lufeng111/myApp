import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';


// NgModule的API: import， exports....
@NgModule({
  // 声明这些组件，就可以在这个模块中使用它，在其他地方引入这个模块就可以直接使用这些模块
  declarations: [
    ListComponent,
    PriceComponent,
    ProductComponent,
  ],
  // 第一次编译组件，如果报错entryComponents，就添加注意在home组件使用商品组件，需要entryComponents 引入这个组件
  // entryComponents: [ProductComponent],
  // 导入的模块，导入的模块可以在这些模块中直接使用他
  imports: [
    CommonModule
  ],
  // 导出的模块，引用这个模块的组件，可以直接使用这个模块导出的组件和指令方法等
  exports: [
    ListComponent,
    PriceComponent,
    ProductComponent,
  ],

})
// 导出这个模块可以直接在其他地方导入这个模块，然后可以使用导出的组件等
export class ComponentsModule { }
