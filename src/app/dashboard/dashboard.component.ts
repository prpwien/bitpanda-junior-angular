import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';
import { BitpandaResponse, CryptocoinsResponse } from '../bitpanda-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  assets: BitpandaResponse;
  cryptocoins: CryptocoinsResponse[] = [];
  constructor(private getdataService: GetdataService) {}


  ngOnInit(): void {
    this.getdataService.sendGetRequest().subscribe((data: BitpandaResponse) => {
      console.log(data);
      this.assets = data;
      this.cryptocoins = data.data.attributes.cryptocoins;
      console.log(this.cryptocoins);
     // console.log(this.assets.data.attributes.cryptocoins[0].attributes);
    });
  }
}


// data.attributes.cryptocoins[0].attributes.buy_active
