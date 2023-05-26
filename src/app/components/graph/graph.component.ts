import { Component, OnInit, Input } from '@angular/core';

import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  search = faSearch;
  down = faChevronDown;

  chartInstance!: Chart;

  ngOnInit(): void {
    this.renderChart();
  }

  @Input()
  theData = [
    {
      name: 'John Doe',
      hours: [0, 1, 2, 3, 2, 5, 4, 7, 6, 8, 9, 7, 9, 6, 8, 10, 9, 8, 5, 6, 7, 9, 10, 8, 5, 3, 2, 1, 0, 2]
    },
    {
      name: 'Jane Doe',
      hours: [3, 4, 5, 7, 6, 9, 8, 11, 10, 9, 12, 10, 12, 9, 11, 1, 10, 11, 8, 9, 10, 12, 1, 8, 5, 4, 3, 2, 1, 3]
    },
    {
      name: 'James White',
      hours: [9, 10, 11, 1, 0, 3, 2, 5, 4, 7, 6, 8, 10, 11, 9, 8, 5, 6, 7, 9, 11, 10, 8, 5, 4, 3, 2, 1, 0, 2]
    },
    {
      name: 'Steward Little',
      hours: [6, 7, 8, 10, 9, 12, 11, 2, 1, 0, 3, 1, 3, 0, 2, 4, 3, 2, 11, 0, 1, 3, 5, 2, 11, 9, 8, 7, 6, 8]
    },
  ]


  renderChart() {
    this.chartInstance = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: this.label,
        datasets: [{
          data: this.splicedData,
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
              color: function (context) {
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
              callback: function (value: any) {
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

  selectedPeriod = '7 Days';

  changePeriod(period: string) {
    this.selectedPeriod = period;
    this.chartInstance.destroy();
    this.renderChart();
  }

  get splicedData() {
    if (this.selectedPeriod === '7 Days') {
      return this.theData[2].hours.slice(-7);
    } else if (this.selectedPeriod === '15 Days') {
      return this.theData[2].hours.slice(-15);
    } else {
      return this.theData[2].hours;
    }
  }
  

  get label() {
    if (this.selectedPeriod === '7 Days') {
      return this.getDates(7);
    } else if (this.selectedPeriod === '15 Days') {
      return this.getDates(15);
    } else {
      return this.getDates(30);
    }
  }

  getDates(loops: number) {
    const dates: string[] = [];
    for (let i = 0; i < loops; i++) {
      const today = new Date(new Date().setHours(0, 0, 0, 0));
      const requiredDay = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      const dateString = `${requiredDay.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(requiredDay)}`
      dates.unshift(dateString);
    }
    return dates;
  }
}
