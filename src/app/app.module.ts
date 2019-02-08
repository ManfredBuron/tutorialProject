import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';


import { UserProvider } from '../providers/user/user';
import { PostProvider } from '../providers/post/post';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { LoginPageModule } from '../pages/login/login.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { PostDetailPageModule } from '../pages/post-detail/post-detail.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    SettingsPageModule,
    HttpClientModule,
    RegisterPageModule,
    PostDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    LoginPage,
    RegisterPage,
    PostDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    UserProvider,
    PostProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
