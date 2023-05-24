import { Component, EventEmitter, Output, Input } from '@angular/core';

import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logout = faArrowRightFromBracket;
  burgerMenu = faBars;

  @Input()
  user: string = 'Muhammad Hamza';

  @Output()
  drawerToggle: EventEmitter<any> = new EventEmitter<any>;

  toggleDrawer() {
    this.drawerToggle.emit();
  }
}
