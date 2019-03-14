import { Component } from '@angular/core';
import { Coins } from '../../../coin';
import { MyserviceService } from '../../../services/app.service';
import {OrderByPipe} from '../../../orderBy.pipe';
//OrderbyPipe es un pipe que intenta ordenar el array de los bitcoins
@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    providers: [ OrderByPipe ]

})


export class MenuComponent {
    //se crea objeto Coins para recibir los datos del API
    coins: Coins[] = [];
    //Se crea un atributo de tipo servicio( el cual se creo)
    constructor(private coinsService: MyserviceService) { }
    ngOnInit() {
        //En cuanto se inicie el componente correra la funcion getCoins
        this.getCoins();
    }
    getCoins() {
        //COnsulta atriibuto servicio y llena objecto coins
        this.coinsService.getCoins().subscribe(
            data => {
                this.coins = [];
                //data = data['data'];
                Object.keys(data).map((key) => { this.coins.push(data[key]) }); console.log(this.coins);
            });
    }
}