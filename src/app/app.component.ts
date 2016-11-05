import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';

import {AdMob} from 'ionic-native'

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      interface AdMobType {
        banner: string,
        interstitial: string
      };
 
      var admobid: AdMobType;
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-234234234234324/234234234234',
          interstitial: 'ca-app-pub-234234234234324/234234234234'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
          banner: 'ca-app-pub-234234234234324/234234234234',
          interstitial: 'ca-app-pub-234234234234324/234234234234'
        };
      } else {
        admobid = { // for Windows Phone
          banner: 'ca-app-pub-234234234234324/234234234234',
          interstitial: 'ca-app-pub-234234234234324/234234234234'
        };
      }

      if (AdMob) AdMob.createBanner({

        adId: admobid.banner,
        isTesting: true,//comment this out before publishing the app
        autoShow: true
      });

      if (AdMob) AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: true, //comment this out before publishing the app
        autoShow: false
      });

    });
  }
}
