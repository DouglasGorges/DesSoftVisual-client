import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*{
    path: "contaCorrente/create",
    component: ContaCorrenteCadastrarComponent
  },
  {
    path: "contaCorrente/list",
    component: ContaCorrenteListarComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
