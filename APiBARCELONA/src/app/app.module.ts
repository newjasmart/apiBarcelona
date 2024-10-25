import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaisListModule } from './components/pais-list/pais-list.module'; // Asegúrate de importar el módulo de pais-list

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaisListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }