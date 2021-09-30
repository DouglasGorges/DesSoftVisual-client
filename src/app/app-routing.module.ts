import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCadastrarComponent } from './components/livro-cadastrar/livro-cadastrar.component';
import { LivroListarComponent } from './components/livro-listar/livro-listar.component';

const routes: Routes = [
{
    path: "create",
    component: LivroCadastrarComponent
  },
  {
    path: "list",
    component: LivroListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
