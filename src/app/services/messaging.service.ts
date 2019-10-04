import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GATEWAY_URL = 'http://127.0.0.1:5000/get?';

@Injectable()
export class MessagingService {

  constructor(private http: HttpClient) {
  }

  connect(message) {
    return this.http.get(GATEWAY_URL + 'msg=' + message);
  }
}
