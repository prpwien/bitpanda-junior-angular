import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';
import { BitpandaResponse } from '../bitpanda-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  assets: BitpandaResponse;

  constructor(private getdataService: GetdataService) {}

  ngOnInit(): void {
    this.getdataService.sendGetRequest().subscribe((data: BitpandaResponse) => {
      console.log(data.data.attributes);
      this.assets = data;
      console.log(this.assets.data.attributes.cryptocoins[0].attributes.buy_active)
    });
  }
}
