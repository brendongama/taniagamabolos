import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TabelaprecoComponent } from './components/tabelapreco/tabelapreco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RedessociaisComponent } from './components/redessociais/redessociais.component';
import {MatCardModule} from '@angular/material/card';
import { TabelaPrecoDocesComponent } from './components/tabela-preco-doces/tabela-preco-doces.component';
import { TabelaPrecoBolosComponent } from './components/tabela-preco-bolos/tabela-preco-bolos.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocinhosComponent } from './components/docinhos/docinhos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DocinhosLuxoComponent } from './components/docinhos-luxo/docinhos-luxo.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    TabelaprecoComponent,
    RedessociaisComponent,
    TabelaPrecoDocesComponent,  
    TabelaPrecoBolosComponent,
    FooterComponent,
    DocinhosComponent,
    DocinhosLuxoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
