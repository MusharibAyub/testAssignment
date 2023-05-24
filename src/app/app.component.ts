import { Component } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drawerOpen = false;
  
  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
