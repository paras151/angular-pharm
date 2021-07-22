import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockService {

  constructor(private httpService: HttpClient) { }

 getContacts() {
    return this.httpService.get('../../assets/contacts.json');
  }
  editContacts() {
    // return this.httpService.post('../../assets/workers.json');
  }
}