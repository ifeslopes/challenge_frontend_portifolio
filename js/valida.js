export function valida(input){
   const tipoDeInput = input.dataset.tipo; 
  

    if(valiadores[tipoDeInput]){
        valiadores[tipoDeInput](input);
    }

    

    
    if(input.validity.valid){
        input.parentElement.classList.remove("input-formcontainer--invalida");
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML =''
    }
    else{
        input.parentElement.classList.add("input-formcontainer--invalida");
        input.parentElement.querySelector(".input-mensagem-erro"
        ).innerHTML = mostraMensagemErro(tipoDeInput, input);
          

    }
}

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "cistomError",
];
const mensagensDeErro = {
    nome: {
        valueMissing: "O campo Nome não  pode ficar vazio",
    },

    email: {
        valueMissing: " O campo email não  pode ficar vazio",
        typeMismatch: " O email digitado não é valido",
    },
    assunto: {
        valueMissing: " O campo Assunto não  pode ficar vazio",
    },
    mensagem: {
        valueMissing: "O campo Mensagen não  pode ficar vazio",
    },
};
function mostraMensagemErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.forEach(erro =>{
        
        if(input.validity[erro]){
            
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}


const valiadores = {
    dataNome: input => validaNome(input),
    dataEmail: input => validaNome(input)
}