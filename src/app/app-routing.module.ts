import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCadastrarComponent } from './components/views/livro/livro-cadastrar/livro-cadastrar.component';
import { LivroListarComponent } from './components/views/livro/livro-listar/livro-listar.component';

const routes: Routes = [
{
    path: "create",
    component: LivroCadastrarComponent
  },
  {
    path: "",
    component: LivroListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
