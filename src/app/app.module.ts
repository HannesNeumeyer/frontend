import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { BilderComponent } from './bilder/bilder.component';
import { LayoutComponent } from './layout/layout.component';
import { AnimationenComponent } from './animationen/animationen.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { WebentwicklungComponent } from './webentwicklung/webentwicklung.component';
import { TextComponent } from './text/text.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { EinleitungComponent } from './text/einleitung/einleitung.component';
import { BausteinListeComponent } from './text/baustein-liste/baustein-liste.component';
import { EinleitungWürdeComponent } from './text/einleitung-würde/einleitung-würde.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { EinleitungBilderComponent } from './bilder/einleitung-bilder/einleitung-bilder.component';
import { ImgBgimgComponent } from './bilder/img-bgimg/img-bgimg.component';
import { ResponsiveImagesComponent } from './bilder/responsive-images/responsive-images.component';
import { EinleitungLayoutComponent } from './layout/einleitung-layout/einleitung-layout.component';
import { FlexboxComponent } from './layout/flexbox/flexbox.component';
import { ResponsiveLayoutComponent } from './layout/responsive-layout/responsive-layout.component';
import { FlatDesignComponent } from './layout/flat-design/flat-design.component';
import { EinleitungAnimationenComponent } from './animationen/einleitung-animationen/einleitung-animationen.component';
import { AnimationenBeispieleComponent } from './animationen/animationen-beispiele/animationen-beispiele.component';
import { BilderBeispieleComponent } from './bilder/bilder-beispiele/bilder-beispiele.component';
import { GradientBgComponent } from './bilder/bilder-beispiele/gradient-bg/gradient-bg.component';
import { FullBgComponent } from './bilder/bilder-beispiele/full-bg/full-bg.component';
import { ClippathComponent } from './bilder/bilder-beispiele/clippath/clippath.component';
import { ColumnsComponent } from './bilder/bilder-beispiele/columns/columns.component';
import { ProfilbilderComponent } from './bilder/bilder-beispiele/profilbilder/profilbilder.component';
import { TransitionComponent } from './animationen/animationen-beispiele/transition/transition.component';
import { TransitionOhneComponent } from './animationen/animationen-beispiele/transition-ohne/transition-ohne.component';
import { SlideInComponent } from './animationen/animationen-beispiele/slide-in/slide-in.component';
import { SchneeComponent } from './animationen/animationen-beispiele/schnee/schnee.component';

@NgModule({
  declarations: [
    AppComponent,
    BilderComponent,
    LayoutComponent,
    AnimationenComponent,
    JavascriptComponent,
    WebentwicklungComponent,
    TextComponent,
    HeaderComponent,
    LandingComponent,
    EinleitungComponent,
    BausteinListeComponent,
    EinleitungWürdeComponent,
    FooterComponent,
    MobileMenuComponent,
    EinleitungBilderComponent,
    ImgBgimgComponent,
    ResponsiveImagesComponent,
    EinleitungLayoutComponent,
    FlexboxComponent,
    ResponsiveLayoutComponent,
    FlatDesignComponent,
    EinleitungAnimationenComponent,
    AnimationenBeispieleComponent,
    BilderBeispieleComponent,
    GradientBgComponent,
    FullBgComponent,
    ClippathComponent,
    ColumnsComponent,
    ProfilbilderComponent,
    TransitionComponent,
    TransitionOhneComponent,
    SlideInComponent,
    SchneeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
