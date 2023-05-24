import { Component, Input } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-absent-item',
  templateUrl: './absent-item.component.html',
  styleUrls: ['./absent-item.component.scss']
})
export class AbsentItemComponent {
  right = faChevronRight;

  @Input()
  details: any = { name: 'John Doe', type: '🤒 Sick', img: 'assets/photos/pic4.png' };
}
