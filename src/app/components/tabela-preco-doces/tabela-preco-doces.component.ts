import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocinhosComponent } from '../docinhos/docinhos.component';
import { DocinhosLuxoComponent } from '../docinhos-luxo/docinhos-luxo.component';

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
  openModalDocesLuxo(){
    const dialogRef = this.dialog.open(DocinhosLuxoComponent); 
  }

  ngOnInit(): void {
  }

}
