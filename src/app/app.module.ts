import { NgModule } from '@angular/core';
// BrowserModule 是因为它提供了启动和运行浏览器应用的那些基本的服务提供商
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 导入 ComponentsModule 模块，使用ComponentsModule模块导出的组件，管道，指令等
// import { ComponentsModule } from './components/components.module';
// import { LoginPage } from './pages/login/login.page'


@NgModule({
  // declarations 数组类型的选项, 用来声明属于这个模块的指令,管道等等，然后我们就可以在这个模块中使用它们了
  declarations: [
    AppComponent,
    // ComponentsModule,
  ],
  // entryComponents: 数组类型的选项,指定一系列的组件,这些组件将会在这个模块定义的时候进行编译,  Angular会为每一个组件创建一个ComponentFactory然后把它存储在ComponentFactoryResolver
  entryComponents: [],
  // imports 数组类型的选项,我们的模块需要依赖的一些其他的模块,这样做的目的使我们这个模块,可以直接使用别的模块提供的一些指令,组件等等.
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // ComponentsModule,
  ],
  // providers 这个选项是一个数组,需要我们列出我们这个模块的一些需要共用的服务，然后我们就可以在这个模块的各个组件中通过依赖注入使用了
    
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  // exports 数组类型的选项,我们这个模块需要导出的一些组件,指令,模块等, 如果别的模块导入了我们这个模块,那么别的模块就可以直接使用我们在这里导出的组件,指令模块等.
  exports: [],
  // bootstrap: 数组类型选项, 指定了这个模块启动的时候应该启动的组件.当然这些组件会被自动的加入到entryComponents中去
  bootstrap: [AppComponent]
})
export class AppModule {}
