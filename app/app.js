import {App, Platform, Config} from 'ionic/ionic';
import {TabsPage} from './pages/tabs/tabs';

@App({
  templateUrl: 'build/app.html',
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: { }
})
export class MyApp {
  constructor(platform: Platform) {
    this.root = TabsPage;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready

      var admobid = {};
            // select the right Ad Id according to platform
            if( /(android)/i.test(navigator.userAgent) ) {
                admobid = { // for Android
                    banner: 'ca-app-pub-6869992474017983/9375997553',
                    interstitial: 'ca-app-pub-6869992474017983/1657046752'
                };
            } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                admobid = { // for iOS
                    banner: 'ca-app-pub-6869992474017983/4806197152',
                    interstitial: 'ca-app-pub-6869992474017983/7563979554'
                };
            } else {
                admobid = { // for Windows Phone
                    banner: 'ca-app-pub-6869992474017983/8878394753',
                    interstitial: 'ca-app-pub-6869992474017983/1355127956'
                };
            }

            if(window.AdMob) AdMob.createBanner( {
                 adId:admobid.banner,
                 isTesting:true,
                 position:AdMob.AD_POSITION.BOTTOM_CENTER,
                 autoShow:true} );

           if(window.AdMob) AdMob.prepareInterstitial({
                      adId:admobid.interstitial,
                      isTesting:true,//comment this out before publishing the app
                      autoShow:false });

    });
  }
}
