import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit{

  search = faSearch;

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const myChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['Mon', 'Tuesday', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [10, 5, 8, 8, 9, 2, 2],
          borderColor: '#7F448E',
          borderWidth: 3
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#1D1D1D'
            },
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              color: function(context) {
                const x = context.tick.value;
                if (x % 2) {
                  return '#FFFFFF'
                } else {
                  return 'rgba(0, 0, 0, 0.2)'
                }
              }
            },
            border: {
              display: false
            },
            beginAtZero: false,
            max: 12,
            ticks: {
              color: '#1D1D1D',
              callback: function(value: any) {
                if (value % 2 === 0) {
                  return value + ' hours'; 
                } else {
                  return '';
                }
              }
            }
          }
        }
      }
    });
  }
}
