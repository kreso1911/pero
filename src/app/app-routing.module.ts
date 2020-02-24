import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyselfComponent } from './myself/myself.component';
import { VideoComponent } from './video/video.component';
import { IgraniComponent } from './igrani/igrani.component';
import { AnimiraniComponent } from './animirani/animirani.component';
import { SkolskaComponent } from './skolska/skolska.component';
import { PromoComponent } from './promo/promo.component';
import { FotoComponent } from './foto/foto.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bio', component:  MyselfComponent},
  {path: 'video', component: VideoComponent},
  {path: 'igrani', component: IgraniComponent},
  {path: 'animirani', component: AnimiraniComponent},
  {path: 'skolska', component: SkolskaComponent},
  {path: 'promo', component: PromoComponent},
  {path: 'foto', component: FotoComponent}            
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                  MyselfComponent,
                                  VideoComponent,
                                  IgraniComponent,
                                  AnimiraniComponent,
                                  SkolskaComponent,
                                  PromoComponent,
                                  FotoComponent
                                ];