import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';
import { BitpandaResponse, CommoditiesResponse, CryptocoinsResponse, FiatsResponse, IndexesResponse } from '../bitpanda-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  cryptocoins: CryptocoinsResponse[] = [];
  commodities: CommoditiesResponse[] = [];
  fiats: FiatsResponse[] = [];
  indexes: IndexesResponse[] = [];

  constructor(private getdataService: GetdataService) {}

  ngOnInit(): void {
    this.getdataService.sendGetRequest().subscribe((data: BitpandaResponse) => {
      this.cryptocoins = data.data.attributes.cryptocoins;
      this.commodities = data.data.attributes.commodities;
      this.fiats = data.data.attributes.fiats;
      this.indexes = data.data.attributes.indexes;
    });
  }
}
