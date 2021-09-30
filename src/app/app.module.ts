import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroCadastrarComponent } from './components/views/livro/livro-cadastrar/livro-cadastrar.component';
import { LivroListarComponent } from './components/views/livro/livro-listar/livro-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroCadastrarComponent,
    LivroListarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
