import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights-card',
  templateUrl: './highlights-card.component.html',
  styleUrls: ['./highlights-card.component.scss']
})
export class HighlightsCardComponent {
  @Input()
  employeeData: any[] = [
    {name: 'John Doe', hours: 5, img: '/assets/photos/pic4.png'},
    {name: 'Jane Doe', hours: 2, img: '/assets/photos/pic2.png'},
    {name: 'Person 1', hours: 3, img: '/assets/photos/pic1.png'},
    {name: 'Person 2', hours: 3, img: '/assets/photos/pic3.png'},
    {name: 'Person 3', hours: 4, img: '/assets/photos/pic1.png'},
    {name: 'Person 4', hours: 4, img: '/assets/photos/pic3.png'},
    {name: 'Person 5', hours: 3, img: '/assets/photos/pic1.png'},
    {name: 'Person 6', hours: 4, img: '/assets/photos/pic3.png'},
    {name: 'Person 7', hours: 0, img: '/assets/photos/pic1.png'},
    {name: 'Person 8', hours: 0, img: '/assets/photos/pic3.png'}
  ]

  get most() {
    return this.employeeData.reduce((prev, curr) => {
      return prev.hours > curr.hours ? prev : curr;
    });
  }

  get least() {
    return this.employeeData.reduce((prev, curr) => {
      if (curr.hours > 0 && curr.hours < prev.hours) {
        return curr;
      }
      return prev;
    }, { hours: Infinity });
  }

  get presentLength() {
    return this.employeeData.filter( x => x.hours > 0).length
  }
}
