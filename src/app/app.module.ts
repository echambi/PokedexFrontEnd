import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

// import { Pokemon } from './models/pokemon';
import { AppComponent } from './app.component';



import { MiComponente } from './components/mi-componente/mi-componente.component';

import { NumeroPkPipe } from './pipes/numeropk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    NumeroPkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
