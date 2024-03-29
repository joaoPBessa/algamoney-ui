import { SegurancaModule } from './seguranca/seguranca.module';
import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
import { PessoasRoutingModule } from './pessoas/pessoas-routing.module';
import { LancamentosRoutingModule } from './lancamentos/lancamentos-routing.module';
import { AppRoutingModule } from './app-routing-module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    
    CoreModule,
    LancamentosModule,
    PessoasModule,
    SegurancaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
