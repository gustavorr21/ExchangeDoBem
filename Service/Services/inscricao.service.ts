import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
teste: any[] = [];
  constructor(private db: AngularFirestore) { }

  getall() {


    return this.db.collection("inscricao").snapshotChanges();

    // return this.db.collection("inscricao").snapshotChanges()
    // .pipe(
    //   map(changes => {
    //     debugger;
    //     return changes.map(c => ({key: c.payload.doc.id, ...c.payload.doc.data }));
    //   })
    // );

  }
}
