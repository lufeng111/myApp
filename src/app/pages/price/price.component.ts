import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {

  id: string = 'product1';
  price: number;
  @Output()
  lastPrice: EventEmitter<PriceRandom> = new EventEmitter();
  //EventEmitter后面的<PriceRandom>这个范型代表的是发射出去值的类型，这里是PriceRandom
  
  constructor() {
    setInterval(() => {
      let priceRandom: PriceRandom = new PriceRandom(this.id, 100 * Math.random());
      this.price = priceRandom.lastPrice;
      this.lastPrice.emit(priceRandom);
    }, 2000);
   }

  ngOnInit() {}

}

// 
export class PriceRandom {
  constructor(
    public id: string,
    public lastPrice: number,
  ){

  }
}
