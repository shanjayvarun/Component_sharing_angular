import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-varun',
  templateUrl: './varun.component.html',
  styleUrls: ['./varun.component.css'],
})
export class VarunComponent implements OnInit {
  @Input() Hello: any;
  @Input() public item = '';
  @Output() getResponse = new EventEmitter();
  name: any;
  list: any;

  constructor(private api : ServiceService ) {}

  ngOnInit(): void {}

  onClick() {
    this.getResponse.emit('Message From Varun');
  }
}
