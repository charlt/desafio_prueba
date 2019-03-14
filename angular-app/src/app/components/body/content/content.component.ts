import {Component } from '@angular/core';
import { DetailCoin } from '../../../detailCoin';
import { Coins } from '../../../coin';
import { DatePipe } from '@angular/common';

import {ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/app.detailservice';

@Component({
    selector:'app-content',
    templateUrl:'content.component.html',
    providers: [DatePipe]

})

export class ContentComponent{
    coins: DetailCoin[] = [];
    time:any;
    numero:string;
  /*  constructor(private activatedRoute:ActivatedRoute,private coinsDetailService: DetailService){
        this.activatedRoute.params.subscribe(params=>   {
            this.doSomething(params.id);
        })
    }*/
    constructor(private activatedRoute:ActivatedRoute,private coinsDetailService: DetailService,private datePipe: DatePipe){
        this.activatedRoute.params.subscribe(params=>   {
            this.numero=params.id;
        })
    }

    ngOnInit() {
        //En cuanto se inicie el componente correra la funcion getCoins
        this.getCoins();
        this.time = this.datePipe.transform(new Date());

    }
    doSomething(id: string): void {
        this.coinsDetailService.id = id;
    }
  
    getCoins() {
        //COnsulta atriibuto servicio y llena objecto coins
        this.coinsDetailService.getCoins(this.numero).subscribe(
            data => {
                this.coins = [];
                //data = data['data'];
                Object.keys(data).map((key) => { this.coins.push(data[key]) }); console.log(this.coins);
            });
    }
}

 