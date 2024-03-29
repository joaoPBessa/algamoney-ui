import { AuthGuard } from './../seguranca/auth.guard';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'pessoas',
      component: PessoasPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
    },
    {
      path: 'pessoas/nova',
      component: PessoaCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
    },
    {
      path: 'pessoas/:codigo',
      component: PessoaCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
    }
  ];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
