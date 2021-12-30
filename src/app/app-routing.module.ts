import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TabelaprecoComponent } from './components/tabelapreco/tabelapreco.component';
import { RedessociaisComponent } from './components/redessociais/redessociais.component';
import { TabelaPrecoDocesComponent } from './components/tabela-preco-doces/tabela-preco-doces.component';
import { TabelaPrecoBolosComponent } from './components/tabela-preco-bolos/tabela-preco-bolos.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'tabelaPreco', component: TabelaprecoComponent, children: [
        { path: 'tabelaPrecoDoces', component: TabelaPrecoDocesComponent },
        { path: 'tabelaPrecoBolos', component: TabelaPrecoBolosComponent },
      ] },
      
      { path: 'redesSociais', component: RedessociaisComponent },
      { path: 'footer', component: FooterComponent },
      
      
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
