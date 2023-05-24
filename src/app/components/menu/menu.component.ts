import { Component } from '@angular/core';

import { faHouse, faTableList, faGear, faChevronDown, faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  home = faHouse;
  time = faTableList;
  settings = faGear;
  clipboard = faClipboardList;
  down = faChevronDown;
}
