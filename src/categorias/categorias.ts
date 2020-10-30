import{Component} from '@angular/core';
import{IonicPage, NavController, NavParms } from 'ionic-angular';
import{CategoriaDto}from '../..mdels/Categoria.dto';
import{CategoriaServics} from '../../services/domin/Categoria.servics';
import { CategoriaDTO } from './categoria.dto';

@IonicPage()
@Component({
    selector: 'page-categorias',
    templateUrl: 'categorias.html',
})
export class CatgoriasPage{

    constructor(public navvCtrl: NavController,){
    }

    ionViewDidload(){
        this.categoriaService.finAll()
        .subscribe(response =>{
         this.items = response;
        });
    }
    items: CategoriaDTO[];
}