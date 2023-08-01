import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {


  constructor(private route:Router) {}

  ngOnInit ():void{ }

  buyNow(){
    this.route.navigateByUrl('shopnow')
  }

}
