import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-absent-list-card',
  templateUrl: './absent-list-card.component.html',
  styleUrls: ['./absent-list-card.component.scss']
})
export class AbsentListCardComponent {
  @Input()
  details: any[] = [
    { name: 'John Doe', type: '🤒 Sick', img: 'assets/photos/pic4.png' },
    { name: 'Jane Doe', type: '🤒 Sick', img: 'assets/photos/pic3.png' },
    { name: 'Random', type: '🤒 Sick', img: 'assets/photos/pic1.png' },
  ];
}
