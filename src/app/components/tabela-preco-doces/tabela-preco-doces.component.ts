import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocinhosComponent } from '../doces/docinhos/docinhos.component';
import { DocinhosLuxoComponent } from '../doces/docinhos-luxo/docinhos-luxo.component';
import { BeijinhoFrutaComponent } from '../doces/beijinho-fruta/beijinho-fruta.component';
import { CapcakeComponent } from '../doces/capcake/capcake.component';
import { BrigadeiroColherComponent } from '../doces/brigadeiro-colher/brigadeiro-colher.component';
import { DiversosComponent } from '../doces/diversos/diversos.component';
import { BrigadeiroCopoComponent } from '../doces/brigadeiro-copo/brigadeiro-copo.component';

@Component({
  selector: 'app-tabela-preco-doces',
  templateUrl: './tabela-preco-doces.component.html',
  styleUrls: ['./tabela-preco-doces.component.css']
})
export class TabelaPrecoDocesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openModalDocesSimples() { 
    const dialogRef = this.dialog.open(DocinhosComponent);    
  }
  openModalDocesLuxo() {
    const dialogRef = this.dialog.open(DocinhosLuxoComponent); 
  }

  openModalBeijinhoFruta() {
    const dialogRef = this.dialog.open(BeijinhoFrutaComponent); 
  }

  openModalCapCakes() {
    const dialogRef = this.dialog.open(CapcakeComponent); 
  }

  openModalBrigadeiroColher() {
    const dialogRef = this.dialog.open(BrigadeiroColherComponent); 
  }

  openModalDiversos() {
    const dialogRef = this.dialog.open(DiversosComponent);
  }

  openModalBrigadeiroCopo() {
    const dialogRef = this.dialog.open(BrigadeiroCopoComponent);
  }
  ngOnInit(): void {
  }

}
 