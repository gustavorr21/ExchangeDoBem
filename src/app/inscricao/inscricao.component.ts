import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
  FormGroup: FormGroup;
  FormDadosPessoais: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.FormGroup = this.formBuilder.group({
       pais: ['', Validators.required],
       projeto: ['', Validators.required],
       data: ['',  Validators.required],
       qtdSemana: ['',  Validators.required]
  });

  this.FormDadosPessoais = this.formBuilder.group({
     nome: ['', Validators.required],
     sexo: ['', Validators.required],
     cpf: ['',  Validators.required],
     dataNascimento: ['', Validators.required],
     cel: ['',  Validators.required],
     telefone: ['',  Validators.required],
     email: ['',  Validators.required],
     profissao: ['',  Validators.required],
     instagram: ['',  Validators.required],
     tamanhoCamiseta: ['',  Validators.required],
     estadoCivil: ['',  Validators.required],
     ficouSabendo: ['',  Validators.required],
     nascionalidade: ['',  Validators.required],
     passaporte: ['',  Validators.required],
     validadePassaporte: ['',  Validators.required],
     paisPassaporte: ['',  Validators.required],
     cep: ['',  Validators.required],
     cidadeEndereco: ['',  Validators.required],
     endereco: ['',  Validators.required],
     numeroEndereco: ['',  Validators.required],
     bairroEndereco: ['',  Validators.required],
     estadoEndereco: ['',  Validators.required],
     paisEndereco: ['',  Validators.required],
    //  complementoEndereco: ['',  Validators.required],
     nomeContatoEmergencia: ['',  Validators.required],
     parentescoContatoEmergencia: ['',  Validators.required],
     celularContatoEmergencia: ['',  Validators.required],
});
  }

  ngOnInit(): void {
    debugger;
  }
  postar() {
    if (!this.FormGroup.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.FormGroup.value);
  }
}
