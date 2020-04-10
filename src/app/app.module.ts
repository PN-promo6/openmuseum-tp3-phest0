import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListService } from './services/museumList.service';
import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';
import { AddMuseumComponent } from './add-museum/add-museum.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';


const appRoutes:Routes = [
  {path:'add', component: AddMuseumComponent},
  {path: '', component: IndexComponent},
  {path: 'museum/:ref_musee', component: MuseumDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MuseumListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
