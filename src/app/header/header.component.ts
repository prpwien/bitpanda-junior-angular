import { Component, OnInit, Input} from '@angular/core';
import { FiatsResponse } from '../bitpanda-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() fiats: [];

  constructor() { }

  ngOnInit(): void {
  }

}
