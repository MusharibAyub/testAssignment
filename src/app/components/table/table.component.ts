import { Component, Input } from '@angular/core';

import { faSearch, faFilter, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  search = faSearch;
  filter = faFilter;
  close = faClose;

  isOddRow(index: number): boolean {
    return index % 2 === 0;
  }

  @Input()
  dataSource = [
    {
      clientName: 'Client A',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-04-25T00:00:00.000Z'),
      responseType: 'positive',
      processFlowRate: 8
    },
    {
      clientName: 'Client B',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-04-25T00:00:00.000Z'),
      responseType: 'negative',
      processFlowRate: 2
    },
    {
      clientName: 'Client C',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-03-25T00:00:00.000Z'),
      responseType: 'positive',
      processFlowRate: 5
    },
    {
      clientName: 'Client D',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-02-25T00:00:00.000Z'),
      responseType: 'negative',
      processFlowRate: 9
    },
    {
      clientName: 'Client E',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-05-25T00:00:00.000Z'),
      responseType: 'positive',
      processFlowRate: 3
    },
    {
      clientName: 'Client F',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-07-25T00:00:00.000Z'),
      responseType: 'negative',
      processFlowRate: 7
    },
    {
      clientName: 'Client G',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-08-25T00:00:00.000Z'),
      responseType: 'positive',
      processFlowRate: 1
    },
    {
      clientName: 'Client H',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-05-25T00:00:00.000Z'),
      responseType: 'negative',
      processFlowRate: 6
    },
    {
      clientName: 'Client I',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-08-25T00:00:00.000Z'),
      responseType: 'positive',
      processFlowRate: 4
    },
    {
      clientName: 'Client J',
      img: 'assets/photos/pic1.png',
      dateSubmitted: new Date('2023-05-25T00:00:00.000Z'),
      responseType: 'negative',
      processFlowRate: 10
    }
  ];

  @Input()
  displayedColumns: string[] = ['clientName', 'dateSubmitted', 'responseType', 'processFlowRate'];
}
