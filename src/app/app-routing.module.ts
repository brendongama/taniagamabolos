import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TabelaprecoComponent } from './components/tabelapreco/tabelapreco.component';
import { RedessociaisComponent } from './components/redessociais/redessociais.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'tabelaPreco', component: TabelaprecoComponent },
      { path: 'redesSociais', component: RedessociaisComponent },
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
