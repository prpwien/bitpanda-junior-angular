import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {

  // get array from parent component
  @Input() commodities: [];

  constructor() { }

  ngOnInit(): void {
  }

}
