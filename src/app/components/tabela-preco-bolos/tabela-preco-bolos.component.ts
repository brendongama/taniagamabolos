import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoloKitkatComponent } from '../bolos/bolo-kitkat/bolo-kitkat.component';

@Component({
  selector: 'app-tabela-preco-bolos',
  templateUrl: './tabela-preco-bolos.component.html',
  styleUrls: ['./tabela-preco-bolos.component.css']
})
export class TabelaPrecoBolosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openModalBoloKitKat() { 
    const dialogRef = this.dialog.open(BoloKitkatComponent);    
  }

  ngOnInit(): void {
  }

}
