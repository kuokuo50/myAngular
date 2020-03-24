import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/product-item/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products.push(new Product('本日精選','heather-schwartz-493946-unsplash.jpg','焦糖馬卡龍',450));
    this.products.push(new Product('人氣推薦','jennifer-schmidt-462966-unsplash.jpg','巧克力熔岩',400));
    this.products.push(new Product('新品上市','le-buzz-576478-unsplash.jpg','杏仁餅乾',350));
    this.products.push(new Product('本日精選','heather-schwartz-493946-unsplash.jpg','焦糖馬卡龍',450));
    this.products.push(new Product('人氣推薦','jennifer-schmidt-462966-unsplash.jpg','巧克力熔岩',400));
    this.products.push(new Product('新品上市','le-buzz-576478-unsplash.jpg','杏仁餅乾',350));
    console.log(this.products);
  }

}
