import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

  @Input()
  total: number = 12;

  @Input()
  active: number = 10;
  
  @Input()
  inactive: number = 2;
}
