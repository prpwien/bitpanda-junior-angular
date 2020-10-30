import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  assets = {};
  bitcoinData = {};
  ethereumData = {};
  bestData = {};
  canvas: any;
  ctx: any;

  best(values) {
    this.canvas = document.getElementById('best');
    this.ctx = this.canvas.getContext('2d');
    document.getElementById('best-logo').src = this.bestData.logo;
    var best = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: '', // Our labels
        datasets: [
          {
            label: '', // Name the series
            data: values, // Our values
            backgroundColor: 'rgb(232, 51, 85)',
            borderWidth: 1 // Specify bar border width
          }
        ]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height
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
        }
      }
    });
    return best;
  }

  constructor(private getdataService: GetdataService) {}

  ngOnInit(): void {
    this.getdataService.sendGetRequest().subscribe((data: object) => {
      this.assets = data;
      this.bitcoinData = this.assets.data.attributes.cryptocoins[0].attributes;
      this.ethereumData = this.assets.data.attributes.cryptocoins[3].attributes;
      this.bestData = this.assets.data.attributes.cryptocoins[1].attributes;
      this.best(['1', '2', '3', '4', '5', '6', '7']);
      console.log(this.bestData.change_1m);
    });
  }
}
