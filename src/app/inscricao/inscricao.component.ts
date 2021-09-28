import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
  FormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.FormGroup = this.formBuilder.group({
      // pais: ['', Validators.required],
      // projeto: ['', Validators.required],
      // data: ['',  Validators.required],
      // qtdSemana: ['',  Validators.required]
  });
  }

  ngOnInit(): void {
    debugger;
  }
  postar() {
    debugger;
    if (!this.FormGroup.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.FormGroup.value);
  }
}
