import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilderComponent } from './bilder/bilder.component';
import { LayoutComponent } from './layout/layout.component';
import { AnimationenComponent } from './animationen/animationen.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { WebentwicklungComponent } from './webentwicklung/webentwicklung.component';
import { TextComponent } from './text/text.component';
import { LandingComponent } from './landing/landing.component';
import { DatenschutzComponent } from './footer/datenschutz/datenschutz.component';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path: 'text', component: TextComponent},
  {path: 'bilder', component: BilderComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'animationen', component: AnimationenComponent},
  {path: 'javascript', component: JavascriptComponent},
  {path: 'entwicklung', component: WebentwicklungComponent},
  {path: 'datenschutz', component: DatenschutzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
