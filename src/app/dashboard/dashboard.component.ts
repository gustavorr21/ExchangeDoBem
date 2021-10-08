import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { InscricaoService } from 'Service/Services/inscricao.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit, AfterViewInit {
  contatos: any[] = [];
  data:any[] = [];
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
      position: 'right',

    },
    add: {
      confirmCreate: false,
    },
    edit: {
      confirmSave: false,
    },
    columns: {

      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  @ViewChild(MatSort) sort: MatSort | any;

  constructor( private inscricaoService: InscricaoService) {
    this.dataSource = new MatTableDataSource(this.contatos); }

  ngOnInit(): void {
    this.inscricaoService.getall().subscribe(dataex=>{
      dataex.forEach((element:any) =>
      this.contatos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data(),
      })
      )
      this.dataSource = new MatTableDataSource(this.contatos);
      this.data = this.contatos;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
