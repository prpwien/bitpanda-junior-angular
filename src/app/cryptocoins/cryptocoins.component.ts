import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cryptocoins',
  templateUrl: './cryptocoins.component.html',
  styleUrls: ['./cryptocoins.component.scss']
})
export class CryptocoinsComponent implements OnInit {

  // get array from parent component
  @Input() cryptocoins: [];
  constructor() { }

  ngOnInit(): void {
  }

}
