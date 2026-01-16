const botao = document. getElementById('tema');

const body - document.body;

// Função para alternar entre tema claro e
escuro
function temaEscuro(tipo) {
   if (tipo == true) {
    body classList. add('escuro');
    botao. innerHTML = '<i class-"fa-solid
    fa-sun">/i>';
  } else (
   body. classList. remove(' escuro');
   botao.innerHTML = '<i class="fa-solid
  fa-moon">/i>';
  

}

// Persistência do tema const temasalvo - localStorage getItem('tema'); temaEscuro (temasalvo === "escuro');
botao. addEventListener('click', () => (
const isescuro = body.classlist.toggle
('escuro');
temaEscuro (isescuro);