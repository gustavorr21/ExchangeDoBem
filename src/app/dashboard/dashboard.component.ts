import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { InscricaoService } from 'Service/Services/inscricao.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit, AfterViewInit {
  contatos: any[] = [];
  data:any[] = [];
  settings = {

    delete: {
      confirmDelete: false,
    },
    add: {
      confirmCreate: false,
    },
    edit: {
      editButtonContent: '<img src="assets/editar.png" width="20" height="20" >',
      saveButtonContent: '<img src="assets/salvar.png" width="20" height="20" >',
      cancelButtonContent: '<img src="assets/fechar.png" width="20" height="20" >',
      confirmSave: true
    },
    actions: {
      custom: [],
      add: false,
      edit: true,
      delete: false,
      position: 'right',

    },
    pager: {
      display: true,
      perPage: 5,
    },
    // add: {
    //   confirmCreate: false,
    // },
    // edit: {
    //   editButtonContent: '<i class="ion-edit"></i>',
    //   saveButtonContent: '<i class="ion-checkmark"></i>',
    //   cancelButtonContent: '<i class="ion-close"></i>',
    //       confirmSave: true
    // },
    columns: {
      email: {
        title: 'Email'
      },
      nome: {
        title: 'Nome'
      },
      dataInscricao: {
        title: 'data Inscrição'
      },
      data: {
        title: 'Data Ida'
      },
      semana: {
        title: 'Semanas'
      },
      Projeto: {
        title: 'Projeto'
      },
      pais: {
        title: 'Pais'
      },

    }
  };

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  @ViewChild(MatSort) sort: MatSort | any;

  constructor( private inscricaoService: InscricaoService,private auth: AngularFireAuth,private router: Router) {
    this.dataSource = new MatTableDataSource(this.contatos); }

  ngOnInit(): void {
    this.inscricaoService.getall().subscribe(dataex=>{
      dataex.forEach((element:any) =>
      this.contatos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data(),
      })
      )
      debugger;
      this.dataSource = new MatTableDataSource(this.contatos);
      this.data = this.contatos;
    })
  }

  ngAfterViewInit() {
    debugger;
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
  onlogout(){
    this.auth.signOut().then(()=> this.router.navigate(['/login']));
  }
  onSaveConfirm(event: any) {
    debugger;

    console.log("Edit Event In Console")
    console.log(event);
  }
}
