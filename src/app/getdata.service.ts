import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private API_SERVER = 'https://api.bitpanda.com/v1/masterdata';

  constructor(public httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get(this.API_SERVER);
  }
}
