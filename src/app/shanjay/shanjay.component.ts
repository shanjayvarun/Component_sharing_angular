import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shanjay',
  templateUrl: './shanjay.component.html',
  styleUrls: ['./shanjay.component.css'],
})
export class ShanjayComponent implements OnInit {
  name: any;
  sendToChild: any;
  currentItem: any;
  datafromchild: any;

  list: any;

  constructor(private api: ServiceService) {}

  ngOnInit(): void {
   // this.getList();
  }

  submitme() {
    this.sendToChild = this.name;
  }

  getResponse($event: any) {
    this.datafromchild = $event;
  }

  // getList() {
  //   this.api.getUser().subscribe((res) => {
  //     this.list = res.map((res: any) => res.name);
  //     //console.log('namelist', this.list);
  //   });
  // }
}
