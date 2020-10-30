import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  canvas: any;
  ctx: any;

  bitcoin() {
    this.canvas = document.getElementById('bitcoin');
    this.ctx = this.canvas.getContext('2d');
    const bictoin = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        datasets: [
          {
            label: '',
            data: [
              88678,
              21302,
              18997,
              15818,
              15312,
              13807,
              10179,
              87026,
              82804,
              62773,
              50036,
              42797,
              42110,
              35729,
              28496,
              23502,
              22353,
              20914,
              17607,
              16755,
              16755,
              16755,
              16755,
              16755
            ],

            backgroundColor: 'rgb(247, 147, 26)',
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        },
        responsive: true,
        display: true,
        pointBackgroundColor: 'rgba(0, 0, 0, 0.1)'
      }
    });
  }

  ethereum() {
    this.canvas = document.getElementById('ethereum');
    this.ctx = this.canvas.getContext('2d');
    const ethereum = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        datasets: [
          {
            label: '',
            data: [
              88678,
              21302,
              18997,
              15818,
              15312,
              13807,
              10179,
              87026,
              82804,
              62773,
              50036,
              42797,
              42110,
              35729,
              28496,
              23502,
              22353,
              20914,
              17607,
              16755,
              16755,
              16755,
              16755,
              16755
            ],
            backgroundColor: 'rgb(90, 90, 90)',
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        },
        responsive: true,
        display: true,
        pointBackgroundColor: 'rgba(0, 0, 0, 0.1)'
      }
    });
  }

  constructor() {}

  ngOnInit(): void {
    this.bitcoin(); //TODO: Call with values
    this.ethereum(); //TODO: Call with values
    //this.best(); //TODO: Call with values
  }
}
//https://css-tricks.com/the-many-ways-of-getting-data-into-charts/
