import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Http } from '@angular/http'
//Servicio que trae los datos del API
@Injectable()
export class MyserviceService {
  constructor(private http: Http) { }
  urlBase = 'https://api.coinmarketcap.com/v2/listings/';


  getCoins() {
    
    return this.http.get(this.urlBase).pipe(map(res => res = res.json()['data']))
  }

}