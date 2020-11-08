import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.scss']
})
export class IndexesComponent implements OnInit {

  // get array from parent component
  @Input() indexes: [];

  constructor() { }

  ngOnInit(): void {
  }

}
