$(window).load(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
$(".next").click(function(){
  if(animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
      next_fs.css({'left': left, 'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function(){
  return false;
})

  // $.getScript('page_ajax.js');
});


function buscaCEP(){
    //Nova variável "cep" somente com dígitos.
    var cep = $("#cep").val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

         //Consulta o webservice viacep.com.br/
        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#endereco").val(dados.logradouro);
                    $("#bairroEndereco").val(dados.bairro);
                    $("#cidadeEndereco").val(dados.localidade);
                    $("#estadoEndereco").val(dados.uf);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    console.log("CEP não encontrado.");
                }
            });
        } //end if.
        else {
            console.log("Formato de CEP inválido.");
        }
    } //end if.
};


$(document).ready(function(){
  $("#simProblemaSaude").click(function(evento){
     $("#ProblemaSaude").css("display", "block");
  });
  $("#naoProblemaSaude").click(function(evento){
     $("#ProblemaSaude").css("display", "none");
  });


  $("#simMedicamento").click(function(evento){
    $("#Medicamento").css("display", "block");
 });
 $("#naoMedicamento").click(function(evento){
    $("#Medicamento").css("display", "none");
 });



 $("#simrestricaoAlimentacao").click(function(evento){
  $("#restricaoAlimentacao").css("display", "block");
});
$("#naorestricaoAlimentacao").click(function(evento){
  $("#restricaoAlimentacao").css("display", "none");
});


$("#simAtividadeFisica").click(function(evento){
  $("#AtividadeFisica").css("display", "block");
});
$("#naoAtividadeFisica").click(function(evento){
  $("#AtividadeFisica").css("display", "none");
});

});
