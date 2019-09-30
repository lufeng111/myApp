import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input()
  productName: string;
  @Input()
  productId: number;
  @Input()
  productMount: number;

  constructor() { }
  
  // 输入属性用于给有父子关系的组件进行传值，并且是单向的，对比区别路由参数的传值
  ngOnInit() {
    // 1秒后改变productId 的值,子组件的值改变不会影响父组件的值得变化
    setInterval(() => {
      this.productName = "我换名字啦";
    }, 5000)
  }

}
