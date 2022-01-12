import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocinhosComponent } from '../docinhos/docinhos.component';

@Component({
  selector: 'app-tabela-preco-doces',
  templateUrl: './tabela-preco-doces.component.html',
  styleUrls: ['./tabela-preco-doces.component.css']
})
export class TabelaPrecoDocesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DocinhosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
