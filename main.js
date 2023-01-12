const valueInput = document.querySelector(".display");

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("btn-num")) clicouBotao(el);
  if (el.classList.contains("btn-clear")) limparCampo();
  if (el.classList.contains("btn-del")) apagar();
  if (el.classList.contains("btn-eq")) calcular();
});

function clicouBotao(button) {
  valueInput.value += button.innerHTML;
}

function limparCampo() {
  valueInput.value = "";
}

function apagar() {
  valueInput.value = valueInput.value.slice(0, -1);
}

function calcular() {
  valueInput.value = eval(valueInput.value);
}
