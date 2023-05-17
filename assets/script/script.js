const conf_insc = document.querySelector("#form_insc");
const conf_btn = document.querySelector("#sub_btn");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const top_btn = document.querySelector("#topbtn");


conf_btn.addEventListener("click", handleSubscribe);

function handleSubscribe() {
  if (nome.value !== "" && email.value !== "" && tel.value !== "") {
    event.preventDefault();
    Swal.fire({
      title: 'Boa!!',
      text: 'Obrigado por se inscrever! Fique atento ao seu e-mail para mais detalhes!',
      icon: 'success',
      iconColor: '#e9845f',
      showConfirmButton: true,
      confirmButtonColor: "#e9845f",
      confirmButtonText: "Ok!",
    }).then((result) => {
      if (result.isConfirmed) {
        // O botão "Ok!" foi clicado
        // Envie o formulário aqui
        conf_insc.submit();
      }
    });
  } 
}

top_btn.addEventListener("click", function() {
  window.scrollTo(0, 0);
});