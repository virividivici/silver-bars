import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private orders = new BehaviorSubject<any[]>([
  	{userId: '1', quantity: 3.5, unitPrice: 306, orderType: 'SELL'}, 
  	{userId: '2', quantity: 1.2, unitPrice: 310, orderType: 'SELL'}, 
  	{userId: '3', quantity: 1.5, unitPrice: 307, orderType: 'SELL'},
  	{userId: '4', quantity: 2.0, unitPrice: 306, orderType: 'SELL'}]);
  
  order = this.orders.asObservable();
  constructor() { }

  changeOrder(order) {
  	this.orders.next(order);
  }
}
