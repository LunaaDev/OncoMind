import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./pagina/agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
  },
  {
    path: 'agendamentos/:id',
    loadChildren: () => import('./pagina/agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
  },
  {
    path: 'abordagem-familiar',
    loadChildren: () => import('./pagina/abordagem-familiar/abordagem-familiar.module').then( m => m.AbordagemFamiliarPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./pagina/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
