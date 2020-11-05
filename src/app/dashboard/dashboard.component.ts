import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';
import { BitpandaResponse, CommoditiesResponse, CryptocoinsResponse } from '../bitpanda-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  assets: BitpandaResponse;
  cryptocoins: CryptocoinsResponse[] = [];
  commodities: CommoditiesResponse[] = [];

  constructor(private getdataService: GetdataService) {}

  ngOnInit(): void {
    this.getdataService.sendGetRequest().subscribe((data: BitpandaResponse) => {
      console.log(data);
      this.assets = data;
      this.cryptocoins = data.data.attributes.cryptocoins;
      this.commodities = data.data.attributes.commodities;
      console.log(data.data.attributes.commodities);
    });
  }
}
