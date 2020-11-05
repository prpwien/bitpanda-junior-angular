import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitpandaResponse } from './bitpanda-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private API_SERVER = 'https://api.bitpanda.com/v1/masterdata';

  constructor(public httpClient: HttpClient) {}

  public sendGetRequest(): Observable<BitpandaResponse> {
    return this.httpClient.get<BitpandaResponse>(this.API_SERVER);
  }
}
