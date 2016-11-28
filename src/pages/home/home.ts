import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Toast } from 'ionic-native';


declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

 connectFTP(){
  	if(new window.cordova.plugin.ftp.connect())
  	{
  		Toast.show("I'm a toast", '5000', 'center').subscribe(
  					toast => {
    							console.log(toast);
  }
);
  	}
  }



}
