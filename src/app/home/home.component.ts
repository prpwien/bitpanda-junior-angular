import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  assets = [];

  constructor(private getdataService: GetdataService) {}

  ngOnInit(): void {
    this.getdataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.assets = data;
    });
  }
}
