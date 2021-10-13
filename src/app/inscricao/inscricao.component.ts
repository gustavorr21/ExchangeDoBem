import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { InscricaoService } from 'Service/Services/inscricao.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
  FormGroup: FormGroup;
  FormDadosPessoais: FormGroup;
  FormInfoSaude: FormGroup;
  FormQuestionario: FormGroup;
  FormCompleto: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private inscricaoService: InscricaoService) {
    this.FormGroup = this.formBuilder.group({
       pais: ['', Validators.required],
       projeto: ['', Validators.required],
       data: ['',  Validators.required],
       qtdSemana: ['',  Validators.required]
  });
  this.FormInfoSaude = this.formBuilder.group({
    problemaSaude: [''],
    medicamento: [''],
    restricaoAlimentacao: [''],
    atividadeFisica: ['']
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
     cidadeEndereco: [''],
     endereco: [''],
     numeroEndereco: ['',  Validators.required],
     bairroEndereco: [''],
     estadoEndereco: [''],
     paisEndereco: ['',  Validators.required],
    //  complementoEndereco: ['',  Validators.required],
     nomeContatoEmergencia: ['',  Validators.required],
     parentescoContatoEmergencia: ['',  Validators.required],
     celularContatoEmergencia: ['',  Validators.required],
    });

    this.FormQuestionario = this.formBuilder.group({
      escolaridadeExperienciaProffisional: ['',Validators.required],
      voluntario: ['',Validators.required],
      realizouTrabalhoVoluntario: ['',Validators.required],
      intercambio: ['',Validators.required],
      lingua: ['',Validators.required],
      habilidades: ['',Validators.required],
      observacao: ['',Validators.required],
      horario: ['',Validators.required],
      desconto: ['',Validators.required],
    });

this.FormCompleto = this.formBuilder.group({
  pais: ['', Validators.required],
  projeto: ['', Validators.required],
  data: ['',  Validators.required],
  qtdSemana: ['',  Validators.required],
  problemaSaude: [''],
  medicamento: [''],
  restricaoAlimentacao: [''],
  atividadeFisica: [''],
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
  cidadeEndereco: [''],
  endereco: [''],
  numeroEndereco: ['',  Validators.required],
  bairroEndereco: [''],
  estadoEndereco: [''],
  paisEndereco: ['',  Validators.required],
 //  complementoEndereco: ['',  Validators.required],
  nomeContatoEmergencia: ['',  Validators.required],
  parentescoContatoEmergencia: ['',  Validators.required],
  celularContatoEmergencia: ['',  Validators.required],
  escolaridadeExperienciaProffisional: ['',Validators.required],
  voluntario: ['',Validators.required],
  realizouTrabalhoVoluntario: ['',Validators.required],
  intercambio: ['',Validators.required],
  lingua: ['',Validators.required],
  habilidades: ['',Validators.required],
  observacao: ['',Validators.required],
  horario: ['',Validators.required],
  desconto: ['',Validators.required],
  dataInscricao: [''],
});
  }

  ngOnInit(): void {
    debugger;
  }
  postar() {
    debugger;

    Object.keys(this.FormGroup.controls).forEach(campo =>{
      const controle = this.FormGroup.get(campo);
      controle?.markAsDirty;
      controle?.markAsTouched;

      if(controle instanceof FormGroup){
        controle?.markAsDirty;
        controle?.markAsTouched;
      }
    })
    if (!this.FormGroup.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.FormGroup.value);
  }


  enviarFormulario()
  {
    debugger;
    let now = new Date();
    this.FormCompleto.value['dataInscricao'] = now;
    this.inscricaoService.insert(this.FormCompleto.value);
  }

  verificaValidTouched(campo: any){
    return !this.FormGroup.get(campo)?.valid
  }

  aplicaCssErro(campo: any){
    debugger;
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
