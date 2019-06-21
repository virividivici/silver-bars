import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

    allOrders=[];

    message: any;
    subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
  	this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  	this._data.order.subscribe(res => this.allOrders = res);
   // this._data.changeOrder(this.allOrders);
  }

 

}
