import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, Observable } from 'rxjs';

import { faSearch, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  //faIconE 

  search = faSearch;
  down = faChevronDown;
  close = faClose;

  //Lifecycle Hooks

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.renderChart();
  }

  //Inputs

  @Input()
  theData = [
    {
      name: 'John Doe',
      img: 'assets/photos/pic1.png',
      hours: [0, 1, 2, 3, 2, 5, 4, 7, 6, 8, 9, 7, 9, 6, 8, 10, 9, 8, 5, 6, 7, 9, 10, 8, 5, 3, 2, 1, 0, 2]
    },
    {
      name: 'Jane Doe',
      img: 'assets/photos/pic4.png',
      hours: [3, 4, 5, 7, 6, 9, 8, 11, 10, 9, 12, 10, 12, 9, 11, 1, 10, 11, 8, 9, 10, 12, 1, 8, 5, 4, 3, 2, 1, 3]
    },
    {
      name: 'James White',
      img: 'assets/photos/pic2.png',
      hours: [9, 10, 11, 1, 0, 3, 2, 5, 4, 7, 6, 8, 10, 11, 9, 8, 5, 6, 7, 9, 11, 10, 8, 5, 4, 3, 2, 1, 0, 2]
    },
    {
      name: 'Steward Little',
      img: 'assets/photos/pic3.png',
      hours: [6, 7, 8, 10, 9, 12, 11, 2, 1, 0, 3, 1, 3, 0, 2, 4, 3, 2, 11, 0, 1, 3, 5, 2, 11, 9, 8, 7, 6, 8]
    },
  ]

  //Chart Properties

  chartInstance!: Chart;

  chartRerender() {
    this.chartInstance.destroy();
    this.renderChart();
  }

  renderChart() {
    this.chartInstance = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: this.label,
        datasets: this.selectedEmp
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
            beginAtZero: true,
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

  //Period Selection Code

  selectedPeriod = '7 Days';

  changePeriod(period: string) {
    this.selectedPeriod = period;
    this.refreshEmp();
    this.chartRerender();
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
  
  //Data splice Code

  // get splicedData() {
  //   if (this.selectedPeriod === '7 Days') {
  //     return this.theData[2].hours.slice(-7);
  //   } else if (this.selectedPeriod === '15 Days') {
  //     return this.theData[2].hours.slice(-15);
  //   } else {
  //     return this.theData[2].hours;
  //   }
  // }

  spliceData(input: any): number[] {
    if (this.selectedPeriod === '7 Days') {
      return input.slice(-7);
    } else if (this.selectedPeriod === '15 Days') {
      return input.slice(-15);
    } else {
      return input;
    }
  }

  //auto complete code and Manage shown employees

  colors: string[] = ['#7F448E', '#FC5290']

  searchControl = new FormControl('');

  filteredOptions = new Observable<any[]>;

  selectedEmp: any[] = []

  _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.theData.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSelection(data: any) {
    if(this.selectedEmp.length >= 2) {
      alert("Can't Select More Than Two")
    } else {
      this.searchControl.reset();
      const neededData = this.theData.find(obj => obj.name === data);
      const obj = {
        label: neededData?.name,
        data: this.spliceData(neededData?.hours),
        borderColor: this.colors[this.selectedEmp.length],
        borderWidth: 3
      }
      this.selectedEmp.push(obj);
      this.chartRerender()
    }
  }

  refreshEmp() {
    this.selectedEmp.forEach(emp => {
      delete emp.data;
      emp.data = this.spliceData(this.theData.find(obj => obj.name === emp.label)?.hours);
      return emp;
    })
  }

  empImg(name: string): string | undefined {
    return this.theData.find(data => data.name === name)?.img;
  }

  //Delete Shown employees

  refreshEmpColor() {
    this.selectedEmp.forEach(emp => {
      delete emp.borderColor;
      emp.borderColor = this.colors[this.selectedEmp.length - 1];
      return emp;
    })
  }

  deleteEmp(index:number) {
    this.selectedEmp.splice(index, 1);
    this.refreshEmpColor();
    this.chartRerender();
  }
}
