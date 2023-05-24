import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.scss']
})
export class MembershipCardComponent {

  @Input()
  period: number = 12;

  @Input()
  cost: number = 2.99;
}
