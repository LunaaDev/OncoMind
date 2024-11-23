import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbordagemFamiliarPage } from './abordagem-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: AbordagemFamiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbordagemFamiliarPageRoutingModule {}
