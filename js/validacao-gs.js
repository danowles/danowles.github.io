function validacao(e) {
  e.preventDefault();

  if (document.form.nome.value == "") {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, preencha o campo nome!'
    });
    document.form.nome.focus();
    return false;
  }

  if (document.form.email.value == "" | document.form.email.value.indexOf('@') == -1 | document.form.email.value.indexOf('.') == -1) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, digite um endereço de e-mail válido!'
    });
    document.form.email.focus();
    return false;
  }

  if (document.form.nome.value.length < 3) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'O nome deve conter no mínimo 3 caracteres!'
    });
    document.form.nome.focus();
    return false;
  }

  else {
    Swal.fire(
      'Muito obrigada!',
      'Sua mensagem foi enviada com sucesso! Conversaremos em breve :)',
      'success'
    );
    return true
  }
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}

$("#formContato").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
});
