const form = document.querySelector("form"); 
const nome = document.querySelector("#nome"); 
const email = document.querySelector("#email"); 
const telefone = document.querySelector("#telefone"); 
const assunto = document.querySelector("#assunto"); 
const mensagem = document.querySelector("#mensagem"); 
const radioEmail = document.querySelector("#radio-email"); 
const radioWhats = document.querySelector("#radio-whatsapp"); 
const radioTel = document.querySelector("#radio-telefone"); 
const hora = document.querySelector("#horario"); 
const errorMessages = document.querySelectorAll(".error-message"); 
 
form.addEventListener("submit", function (event) { 
  event.preventDefault(); 
  resetErrors(); 
  if(validateInputs()) {
    form.submit();
  }
  
}); 
 
function resetErrors() { 
  errorMessages.forEach((errorMessage) => { 
    errorMessage.innerText = ""; 
  }); 
  nome.parentElement.classList.remove("error"); 
  email.parentElement.classList.remove("error"); 
  telefone.parentElement.classList.remove("error"); 
  assunto.parentElement.classList.remove("error"); 
  mensagem.parentElement.classList.remove("error"); 
  radioEmail.parentElement.classList.remove("error");
  radioTel.parentElement.classList.remove("error");
  radioWhats.parentElement.classList.remove("error");
  hora.parentElement.classList.remove("error") 
} 
 
function validateInputs() { 
    let isValid = true;

  const nomeValue = nome.value.trim(); 
  const emailValue = email.value.trim(); 
  const telefoneValue = telefone.value.trim(); 
  const assuntoValue = assunto.value.trim(); 
  const mensagemValue = mensagem.value.trim(); 
  const radioEmailValue = radioEmail.value.trim();
  const radioWhatsValue = radioWhats.value.trim()
  const radioTelValue = radioTel.value.trim();
  const horaValue = hora.value.trim(); 
 
  if (nomeValue === "") { 
    setError(nome, "Nome não pode ficar em branco"); 
    isValid = false;
  } 
 
  if (emailValue === "") { 
    setError(email, "E-mail não pode ficar em branco"); 
  } else if (!isValidEmail(emailValue)) { 
    setError(email, "E-mail inválido"); 
    isValid = false;
} 

 
  if (assuntoValue === "") { 
    setError(assunto, "Assunto não pode ficar em branco"); 
    isValid = false;
  } 
   
  if (telefoneValue === "") { // Validando se o telefone está em branco 
    setError(telefone, "Telefone não pode ficar em branco"); 
    isValid = false;
  } 
  if (mensagemValue === "") { 
    setError(mensagem, "Mensagem não pode ficar em branco"); 
    isValid = false;
  } 
 if(horaValue === ""){ 
  setError(hora, "Selecione um horário"); 
  isValid = false;
} 
  if(!radioEmail.checked  && !radioTel.checked && !radioWhats.checked) { 
    alert("Selecione o tipo de contato!"); 
    isValid = false;
    } 
 
return isValid;
} 
 
 
function setError(input, errorMessage) { 
  const errorMessageElement = input.nextElementSibling; 
  errorMessageElement.innerText = errorMessage; 
  input.parentElement.classList.add("error"); 
} 
 
function isValidEmail(email) { 
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}