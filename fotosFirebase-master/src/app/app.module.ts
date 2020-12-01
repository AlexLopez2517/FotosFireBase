import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFireStorageModule } from 'angularfire2/';
//import { AngularFireAuthModule } from '@angular/fire/auth';


import { APP_ROUTES } from './app.routes';
import { CargaImagenesService } from './services/carga-imagenes.service';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AppRoutingModule
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
});

export class AppModule { }
