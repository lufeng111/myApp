import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input()
  productId: string;
  @Input()
  productMount: number;

  constructor() { }
  
  // 输入属性用于给有父子关系的组件进行传值，并且是单向的，对比区别路由参数的传值
  ngOnInit() {
    // 1秒后改变productId 的值
    setInterval(() => {
      this.productId = "ahhahhaha";
    }, 1000)
  }

}
