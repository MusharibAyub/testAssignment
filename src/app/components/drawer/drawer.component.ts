import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('slide', [
      state('open', style({
        width: '220px',
        opacity: 1
      })),
      state('closed', style({
        width: '0',
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class DrawerComponent {
  @Input()
  open: boolean = false;
}
