import { Component } from '@angular/core';
import { ServiceDTService } from '../service/service-dt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopnow',
  templateUrl: './shopnow.component.html',
  styleUrls: ['./shopnow.component.css']
})
export class ShopnowComponent {

  productsData:any=[]

  constructor( private ds:ServiceDTService){}

  ngOnInit() : void {
    this.ds.getAllProduct().subscribe((products:any)=>{
      this.productsData =products.message
      console.log(this.productsData);
      
    })
  }



}
