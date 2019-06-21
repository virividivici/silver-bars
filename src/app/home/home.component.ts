import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  orderCount: number; 
  btnText: string = "Add Order ...";

  orderForm = new FormGroup({
    userId: new FormControl(),
    quantity: new FormControl(),
    unitPrice: new FormControl(),
    orderType: new FormControl()
  });

  
    orders=[];

    message: any;
    subscription: Subscription;

   

  constructor(private _data: DataService) {  }

  ngOnInit() {
    this._data.order.subscribe(res => this.orders = res);
    this.orderCount = this.orders.length;
    this._data.changeOrder(this.orders);
  }

  addItem() {
  	this.orders.push(this.orderForm.value);
  	this.orderCount = this.orders.length;
    this._data.changeOrder(this.orders);
    this.orderForm.reset();
  }

  removeItem(i) {
  	this.orders.splice(i, 1);
  	this.orderCount = this.orders.length;
    this._data.changeOrder(this.orders);
  }

  get userId(){
    return this.orderForm.get("userId");
  }

  get quantity(){
    return this.orderForm.get("quantity");
  }

  get unitPrice(){
    return this.orderForm.get("unitPrice");
  }

  get type(){
    return this.orderForm.get("type");
  }


}
