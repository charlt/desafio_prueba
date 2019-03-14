import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';

import { Http, Headers } from '@angular/http'
//Servicio que trae los datos del API
@Injectable()
export class DetailService {
  constructor(private http: Http) { }
  id: string;
  urlBase = 'https://api.coinmarketcap.com/v2/ticker/';

  //recibe un parametro con el cual busca
  //se le instalaron headers para que pueda hacerse la petición, si no se puede
  //se tiene que instalar una extencion al navergador
  //CORS para que deje pasar el trafico de peticiones
  getCoins(id: string) {
    const headers = new Headers();
    headers.append('Access-Control-Request-Headers', '*');
    const urlWithId = this.urlBase + id;
    return this.http.get(urlWithId).pipe(map(res => res = res.json()['data']))
  }

}