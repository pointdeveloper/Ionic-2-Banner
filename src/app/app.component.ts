import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import { AdMob } from '@ionic-native/admob';

interface AdMobType {
  banner: string,
  interstitial: string
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

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

      this.admob.createBanner({
        adId: admobid.banner,
        isTesting: true,//comment this out before publishing the app
        autoShow: true
      })
      
    });
  }
}
