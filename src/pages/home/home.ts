import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
loging(){
  this.navCtrl.setRoot('CategoriasPage');
}
constructor(public navCtrl: NavController, public menu: MenuController) {

}
ionViewWillEnter() {
  this.menu.swipeEnable(false);
}

ionViewDidLeave() {
  this.menu.swipeEnable(true);
}
